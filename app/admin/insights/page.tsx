'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'

interface Visitor {
  id: string
  company_name: string | null
  country: string | null
  device_type: string | null
  industry: string | null
  visit_count: number
  total_time_spent: number
  pages_per_session: number
  engagement_score: number
  intent_score: number
  heat_level: string
  last_visit_date: string
}

interface FilterOptions {
  countries: string[]
  industries: string[]
  heat_levels: string[]
}

type SortBy = 'intent_score' | 'visit_count' | 'last_visit_date'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_TOKEN || ''

function getHeatLevelColor(heatLevel: string): string {
  switch (heatLevel) {
    case 'Cold':
      return 'bg-gray-600 text-gray-200'
    case 'Warm':
      return 'bg-yellow-600 text-yellow-100'
    case 'Hot':
      return 'bg-orange-600 text-orange-100'
    case 'Enterprise Ready':
      return 'bg-red-600 text-red-100'
    default:
      return 'bg-gray-600 text-gray-200'
  }
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }
  return `${minutes}m`
}

export default function AdminInsightsPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortBy>('intent_score')
  const [filters, setFilters] = useState({
    country: '',
    heat_level: '',
    industry: '',
    date_from: '',
    date_to: '',
  })
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    countries: [],
    industries: [],
    heat_levels: [],
  })

  useEffect(() => {
    fetchFilterOptions()
  }, [])

  useEffect(() => {
    fetchVisitors()
  }, [sortBy, filters])

  const fetchFilterOptions = async () => {
    try {
      const response = await fetch(`${API_URL}/api/admin/filters`, {
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setFilterOptions(data)
      }
    } catch (err) {
      console.error('Error fetching filter options:', err)
    }
  }

  const fetchVisitors = async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        sort_by: sortBy,
        limit: '100',
      })

      if (filters.country) params.append('country', filters.country)
      if (filters.heat_level) params.append('heat_level', filters.heat_level)
      if (filters.industry) params.append('industry', filters.industry)
      if (filters.date_from) params.append('date_from', filters.date_from)
      if (filters.date_to) params.append('date_to', filters.date_to)

      const response = await fetch(`${API_URL}/api/admin/visitors?${params}`, {
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized. Please check your admin token.')
        }
        throw new Error(`Failed to fetch visitors: ${response.statusText}`)
      }

      const data = await response.json()
      setVisitors(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load visitors')
      console.error('Error fetching visitors:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      country: '',
      heat_level: '',
      industry: '',
      date_from: '',
      date_to: '',
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Visitor Intelligence Dashboard
          </h1>
          <p className="text-gray-400">
            Enterprise-grade visitor tracking and intent analysis
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Country
              </label>
              <select
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Countries</option>
                {filterOptions.countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Heat Level
              </label>
              <select
                value={filters.heat_level}
                onChange={(e) => handleFilterChange('heat_level', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Levels</option>
                {filterOptions.heat_levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Industry
              </label>
              <select
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Industries</option>
                {filterOptions.industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date From
              </label>
              <input
                type="date"
                value={filters.date_from}
                onChange={(e) => handleFilterChange('date_from', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date To
              </label>
              <input
                type="date"
                value={filters.date_to}
                onChange={(e) => handleFilterChange('date_to', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-700">
            <h2 className="text-xl font-semibold text-white">Sort By</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('intent_score')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  sortBy === 'intent_score'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Highest Intent
              </button>
              <button
                onClick={() => setSortBy('visit_count')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  sortBy === 'visit_count'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Most Sessions
              </button>
              <button
                onClick={() => setSortBy('last_visit_date')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  sortBy === 'last_visit_date'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Most Recent
              </button>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="mt-4 text-gray-400">Loading visitors...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-6">
            <p className="text-red-200">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Country
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Device
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Industry
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Visits
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Total Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Pages/Session
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Engagement
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Intent
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Heat Level
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Last Visit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {visitors.length === 0 ? (
                    <tr>
                      <td colSpan={11} className="px-6 py-12 text-center text-gray-400">
                        No visitors found
                      </td>
                    </tr>
                  ) : (
                    visitors.map((visitor) => (
                      <tr
                        key={visitor.id}
                        className="hover:bg-gray-700/30 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">
                            {visitor.company_name || 'Unknown'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {visitor.country || 'N/A'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {visitor.device_type || 'N/A'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {visitor.industry || 'N/A'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {visitor.visit_count}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {formatTime(visitor.total_time_spent)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {visitor.pages_per_session.toFixed(1)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-white">
                            {visitor.engagement_score}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-white">
                            {visitor.intent_score}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getHeatLevelColor(
                              visitor.heat_level
                            )}`}
                          >
                            {visitor.heat_level}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-300">
                            {visitor.last_visit_date
                              ? format(new Date(visitor.last_visit_date), 'MMM d, yyyy HH:mm')
                              : 'N/A'}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {!loading && !error && visitors.length > 0 && (
          <div className="mt-6 text-center text-gray-400 text-sm">
            Showing {visitors.length} visitor{visitors.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>
    </div>
  )
}
