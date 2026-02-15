"""
IP Security Service - Handles IP hashing and anonymization for GDPR compliance.
"""
import hashlib
import logging
from typing import Optional
from app.core.config import settings

logger = logging.getLogger(__name__)


def hash_ip(ip_address: str) -> str:
    """
    Hash IP address using SHA256 with salt for privacy.
    Returns hashed IP address.
    """
    if not ip_address or ip_address == "unknown":
        return "unknown"
    
    salted_ip = f"{ip_address}{settings.ip_salt}"
    hashed = hashlib.sha256(salted_ip.encode()).hexdigest()
    return hashed


def anonymize_ip(ip_address: str) -> str:
    """
    Anonymize IP address by masking last octet (IPv4) or last 64 bits (IPv6).
    Returns anonymized IP address.
    """
    if not ip_address or ip_address == "unknown":
        return "unknown"
    
    if settings.enable_gdpr_anonymization:
        if ":" in ip_address:  # IPv6
            parts = ip_address.split(":")
            if len(parts) > 4:
                return ":".join(parts[:4]) + "::"
            return ip_address
        else:  # IPv4
            parts = ip_address.split(".")
            if len(parts) == 4:
                return ".".join(parts[:3]) + ".0"
            return ip_address
    
    return ip_address


def get_stored_ip(ip_address: str) -> str:
    """
    Get IP address in format to store (hashed if GDPR enabled, otherwise hashed for privacy).
    Always hash IPs for storage to protect privacy.
    """
    if settings.enable_gdpr_anonymization:
        anonymized = anonymize_ip(ip_address)
        return hash_ip(anonymized)
    else:
        return hash_ip(ip_address)

