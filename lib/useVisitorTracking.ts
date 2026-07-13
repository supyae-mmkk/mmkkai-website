'use client'

import { useEffect, useRef, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

interface TrackData {
  page_url: string
  event_type: string
  time_spent: number
  scroll_depth?: number
  click_target?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

function getUTMParams(): { utm_source?: string; utm_medium?: string; utm_campaign?: string } {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
  }
}

function getScreenResolution(): string {
  if (typeof window === 'undefined') return ''
  return `${window.screen.width}x${window.screen.height}`
}

async function trackEvent(data: TrackData): Promise<void> {
  try {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    }
    
    const screenRes = getScreenResolution()
    if (screenRes) {
      headers['X-Screen-Resolution'] = screenRes
    }
    
    await fetch(`${API_URL}/api/track`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
      keepalive: true,
    })
  } catch (error) {
    console.error('Tracking error:', error)
  }
}

export function useVisitorTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const startTimeRef = useRef<number>(Date.now())
  const hasTrackedRef = useRef<boolean>(false)
  const maxScrollRef = useRef<number>(0)
  const scrollTrackingRef = useRef<boolean>(false)

  const trackScrollDepth = useCallback(() => {
    if (scrollTrackingRef.current) return
    scrollTrackingRef.current = true

    const trackScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0
      
      if (scrollPercent > maxScrollRef.current) {
        maxScrollRef.current = scrollPercent
      }
    }

    window.addEventListener('scroll', trackScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', trackScroll)
    }
  }, [])

  const trackClicks = useCallback(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      const clickTarget = target.tagName.toLowerCase()
      const className = target.className || ''
      const id = target.id || ''
      const text = target.textContent?.slice(0, 50) || ''
      
      const clickData = `${clickTarget}${className ? `.${className.split(' ')[0]}` : ''}${id ? `#${id}` : ''}${text ? `:${text}` : ''}`

      trackEvent({
        page_url: window.location.href,
        event_type: 'click',
        time_spent: 0,
        click_target: clickData,
        ...getUTMParams(),
      }).catch(() => {})
    }

    document.addEventListener('click', handleClick, true)
    
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  useEffect(() => {
    const currentPath = pathname
    startTimeRef.current = Date.now()
    hasTrackedRef.current = false
    maxScrollRef.current = 0
    scrollTrackingRef.current = false

    const utmParams = getUTMParams()

    const trackPageView = async () => {
      if (hasTrackedRef.current) return
      hasTrackedRef.current = true

      await trackEvent({
        page_url: window.location.href,
        event_type: 'page_view',
        time_spent: 0,
        scroll_depth: 0,
        ...utmParams,
      })
    }

    trackPageView()
    
    const scrollCleanup = trackScrollDepth()
    const clickCleanup = trackClicks()

    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)

      if (timeSpent > 0 || maxScrollRef.current > 0) {
        navigator.sendBeacon(
          `${API_URL}/api/track`,
          JSON.stringify({
            page_url: window.location.href,
            event_type: 'page_exit',
            time_spent: timeSpent,
            scroll_depth: maxScrollRef.current,
            ...utmParams,
          })
        )
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)

        if (timeSpent > 0 || maxScrollRef.current > 0) {
          trackEvent({
            page_url: window.location.href,
            event_type: 'page_exit',
            time_spent: timeSpent,
            scroll_depth: maxScrollRef.current,
            ...utmParams,
          }).catch(() => {})
        }
      }
    }

    const intervalId = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)
      if (timeSpent > 10 && maxScrollRef.current > 0) {
        trackEvent({
          page_url: window.location.href,
          event_type: 'scroll',
          time_spent: timeSpent,
          scroll_depth: maxScrollRef.current,
          ...utmParams,
        }).catch(() => {})
      }
    }, 10000)

    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (scrollCleanup) scrollCleanup()
      if (clickCleanup) clickCleanup()

      const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)

      if (timeSpent > 0 && !hasTrackedRef.current) {
        trackEvent({
          page_url: window.location.href,
          event_type: 'page_exit',
          time_spent: timeSpent,
          scroll_depth: maxScrollRef.current,
          ...utmParams,
        }).catch(() => {})
      }
    }
  }, [pathname, searchParams, trackScrollDepth, trackClicks])
}
