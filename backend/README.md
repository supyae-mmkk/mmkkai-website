# MMKK AI Visitor Intelligence Backend

FastAPI backend for enterprise-grade visitor tracking and intelligence.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Configure your environment variables:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anon key
- `ADMIN_API_TOKEN`: Secure token for admin API access
- `RATE_LIMIT_PER_MINUTE`: Rate limit (default: 60)
- `IPINFO_TOKEN`: Optional IPInfo.io token for enhanced geo data

4. Run the database migrations:
Execute the SQL in `../database/schema.sql` in your Supabase SQL editor.

5. Start the server:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## API Endpoints

### POST /api/track
Track page views and visitor activity.

Request body:
```json
{
  "page_url": "https://example.com/pricing",
  "event_type": "page_view",
  "time_spent": 45
}
```

### GET /api/admin/visitors
Get visitor list (requires Bearer token).

Headers:
```
Authorization: Bearer <ADMIN_API_TOKEN>
```

Query parameters:
- `sort_by`: `intent_score` (default) or `last_seen`
- `limit`: Number of results (1-1000, default: 100)

## Deployment

For Railway or similar platforms:

1. Set environment variables in your platform's dashboard
2. Ensure Python 3.11+ is available
3. The platform should auto-detect FastAPI and run `uvicorn app.main:app`

