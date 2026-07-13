# MMKK AI Visitor Intelligence - Setup Guide

## Quick Start

### 1. Database (Supabase)

1. Go to your Supabase project SQL Editor
2. Copy and execute the contents of `database/schema.sql`
3. Verify tables are created: `visitors`, `sessions`, `page_events`

### 2. Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create `.env` file:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
ADMIN_API_TOKEN=generate-a-secure-random-token
RATE_LIMIT_PER_MINUTE=60
IPINFO_TOKEN=optional-token
```

Run:
```bash
python run.py
```

Backend should be running on `http://localhost:8000`

### 3. Frontend

```bash
npm install
```

Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_ADMIN_TOKEN=same-token-as-backend-admin-token
```

Run:
```bash
npm run dev
```

Frontend should be running on `http://localhost:3000`

## Testing

1. Visit `http://localhost:3000` - tracking should start automatically
2. Visit different pages (pricing, contact, products) to see intent scores increase
3. Visit `http://localhost:3000/admin/insights` to see the dashboard

## Production Deployment

### Backend (Railway/Render/Fly.io)

1. Set environment variables in platform dashboard
2. Ensure Python 3.11+ runtime
3. Platform should auto-detect FastAPI
4. Update `NEXT_PUBLIC_API_URL` in frontend to point to deployed backend

### Frontend (Vercel)

1. Connect GitHub repository
2. Set environment variables:
   - `NEXT_PUBLIC_API_URL`: Your deployed backend URL
   - `NEXT_PUBLIC_ADMIN_TOKEN`: Your admin token
3. Deploy

## Security Notes

- **Never commit** `.env` or `.env.local` files
- Use strong, random tokens for `ADMIN_API_TOKEN`
- In production, restrict CORS origins in backend
- Consider using environment-specific rate limits
- Use HTTPS in production

## Troubleshooting

### Backend won't start
- Check Python version (3.11+)
- Verify all dependencies installed
- Check `.env` file exists and has correct values
- Verify Supabase credentials

### Tracking not working
- Check browser console for errors
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check backend logs for errors
- Verify CORS is configured correctly

### Admin dashboard shows "Unauthorized"
- Verify `NEXT_PUBLIC_ADMIN_TOKEN` matches `ADMIN_API_TOKEN` in backend
- Check Authorization header is being sent (check Network tab)

### No visitors showing
- Verify database schema is created
- Check backend is receiving tracking requests
- Verify Supabase connection is working

