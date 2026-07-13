# Security Hardening Guide

## Overview

The Visitor Intelligence system includes enterprise-grade security hardening with multiple layers of protection.

## Security Features

### 1. CORS Restriction

CORS is restricted to allowed origins only. Configure in `.env`:

```env
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

Default allows localhost for development.

### 2. Security Headers

All responses include comprehensive security headers:

- **X-Content-Type-Options**: `nosniff` - Prevents MIME type sniffing
- **X-Frame-Options**: `DENY` - Prevents clickjacking
- **X-XSS-Protection**: `1; mode=block` - Enables XSS filter
- **Strict-Transport-Security**: Forces HTTPS with preload
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer info
- **Content-Security-Policy**: Comprehensive CSP to prevent XSS and injection
- **Permissions-Policy**: Restricts browser features
- **X-Permitted-Cross-Domain-Policies**: `none` - Restricts Flash/PDF

### 3. IP Address Hashing

All IP addresses are hashed using SHA256 with a salt before storage:

- IPs are never stored in plain text
- Uses configurable salt (`IP_HASH_SALT` in .env)
- GDPR-ready anonymization toggle available

### 4. GDPR Anonymization

Enable GDPR-compliant anonymization:

```env
ENABLE_GDPR_ANONYMIZATION=true
```

When enabled:
- IP addresses are anonymized (last octet masked) before hashing
- Enhanced privacy protection for EU visitors

### 5. Abuse Detection

Automatic abuse detection blocks excessive requests:

- **Threshold**: 50 requests per minute per IP (configurable)
- **Action**: Automatic blocking with 429 status
- **Logging**: All abuse attempts are logged

Configure threshold:

```env
ABUSE_THRESHOLD_PER_MINUTE=50
```

### 6. Bot Detection

Enhanced bot detection using multiple methods:

- User agent pattern matching
- Suspicious pattern detection
- Missing or malformed user agent detection
- Security scanner detection

Bots are automatically filtered and logged.

### 7. Security Logging

Comprehensive logging for security monitoring:

- Failed requests (4xx, 5xx)
- Suspicious traffic patterns
- Abuse attempts
- Authentication failures
- Request tracking with unique IDs

## Environment Variables

Add to your `.env` file:

```env
# CORS Configuration
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Abuse Detection
ABUSE_THRESHOLD_PER_MINUTE=50

# GDPR Compliance
ENABLE_GDPR_ANONYMIZATION=false

# IP Hashing
IP_HASH_SALT=your-secure-random-salt-here-change-in-production
```

## Security Best Practices

### Production Deployment

1. **Set Strong IP Hash Salt**:
   ```python
   import secrets
   print(secrets.token_urlsafe(32))
   ```
   Use output as `IP_HASH_SALT`

2. **Restrict CORS Origins**:
   Only allow your production domains

3. **Enable GDPR Anonymization**:
   If serving EU visitors, enable anonymization

4. **Monitor Logs**:
   Regularly review security logs for suspicious activity

5. **Rate Limiting**:
   Adjust `ABUSE_THRESHOLD_PER_MINUTE` based on your traffic patterns

6. **HTTPS Only**:
   Ensure all traffic uses HTTPS (HSTS header enforces this)

### Monitoring

Monitor these log patterns:

- `Abuse detected` - Excessive requests from IP
- `Suspicious request detected` - Potential attack patterns
- `Blocked abusive request` - IPs that were blocked
- `Failed request` - 4xx/5xx errors

## Security Architecture

```
Request → CORS Check → Abuse Detection → Bot Detection → 
Security Headers → Rate Limiting → Application Logic
```

Each layer provides defense-in-depth protection.

## Compliance

- **GDPR**: IP anonymization and hashing
- **CCPA**: Privacy-first data handling
- **SOC 2**: Security logging and monitoring
- **OWASP**: Follows OWASP security best practices

## Incident Response

If abuse is detected:

1. Check logs for IP address
2. Review request patterns
3. IP is automatically blocked after threshold
4. Consider adding to permanent blocklist if needed

## Future Enhancements

- Redis-based distributed abuse detection
- Machine learning bot detection
- Advanced threat intelligence integration
- Real-time security dashboard

