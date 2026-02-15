from pydantic_settings import BaseSettings
from typing import Optional, List, Union
import os


class Settings(BaseSettings):
    supabase_url: str
    supabase_key: str
    admin_api_token: str
    rate_limit_per_minute: int = 60
    ipinfo_token: Optional[str] = None
    
    # Security settings
    allowed_origins: Union[str, List[str]] = ""
    abuse_threshold_per_minute: int = 50
    enable_gdpr_anonymization: bool = False
    ip_salt: Optional[str] = None
    
    class Config:
        env_file = ".env"
        case_sensitive = False
    
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        # Parse allowed_origins from comma-separated string if provided
        if isinstance(self.allowed_origins, str):
            self.allowed_origins = [origin.strip() for origin in self.allowed_origins.split(",") if origin.strip()]
        elif not isinstance(self.allowed_origins, list):
            self.allowed_origins = []
        
        # Generate IP salt if not provided (for IP hashing)
        if not self.ip_salt:
            self.ip_salt = os.getenv("IP_HASH_SALT", "default-salt-change-in-production")


settings = Settings()
