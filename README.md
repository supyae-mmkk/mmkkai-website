# MMKK AI Website - Visitor Intelligence System

Enterprise-grade visitor tracking and intelligence system built with Next.js and FastAPI.

## Architecture

- **Frontend**: Next.js 14 (App Router, TypeScript)
- **Backend**: FastAPI (Python)
- **Database**: Supabase Postgres
- **Hosting**: Vercel (frontend), Railway/Similar (backend)

## Setup

### 1. Database Setup

Run the SQL schema in `database/schema.sql` in your Supabase SQL editor to create the required tables.

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your Supabase credentials and admin token
python run.py
```

Backend will run on `http://localhost:8000`

### 3. Frontend Setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your API URL and admin token
npm run dev
```

Frontend will run on `http://localhost:3000`

## Environment Variables

### Backend (.env)
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anon key
- `ADMIN_API_TOKEN`: Secure token for admin API access
- `RATE_LIMIT_PER_MINUTE`: Rate limit (default: 60)
- `IPINFO_TOKEN`: Optional IPInfo.io token

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL`: Backend API URL (e.g., `http://localhost:8000`)
- `NEXT_PUBLIC_ADMIN_TOKEN`: Admin token for dashboard access

## Features

### Visitor Tracking
- Automatic IP detection and geo-location
- Session management
- Page view and time tracking
- Intent scoring based on page URLs
- Heat level calculation (Cold, Warm, Hot, Enterprise Ready)

### Admin Dashboard
- View all visitors with detailed metrics
- Sort by intent score or last seen
- Color-coded heat level badges
- Enterprise-grade UI with dark theme

## API Endpoints

### POST /api/track
Track page views and visitor activity.

### GET /api/admin/visitors
Get visitor list (requires Bearer token authentication).

## Intent Scoring Rules

- Pages containing "pricing" → +40 points
- Pages containing "contact" → +50 points
- Pages containing "product" → +20 points
- Other pages → +5 points

## Heat Levels

- **Cold**: 0-30 points
- **Warm**: 31-70 points
- **Hot**: 71-150 points
- **Enterprise Ready**: 150+ points

## Deployment

### Frontend (Vercel)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Backend (Railway/Similar)
1. Connect your repository
2. Set environment variables
3. Ensure Python 3.11+ is available
4. Platform should auto-detect FastAPI

## Security

- Rate limiting on all endpoints
- Security headers middleware
- Bearer token authentication for admin routes
- CORS configuration
- Error handling and logging

## Future Enhancements

The system includes a placeholder for company enrichment service that can integrate with:
- Clearbit API
- 6sense API
- Apollo API

