from supabase import create_client, Client
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

supabase: Client = create_client(settings.supabase_url, settings.supabase_key)


def get_db() -> Client:
    return supabase

