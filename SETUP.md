# Setup Guide - Forgot Password Worker

This guide will walk you through setting up the Forgot Password Worker for development, testing, and production deployment.

## Prerequisites

### Required Software
- **Node.js** (v18 or later)
- **Wrangler CLI** - Cloudflare's CLI tool for Workers
- **Git** - For version control

### Required Services
- **Cloudflare Account** with Workers subscription
- **Backend API** endpoint for password reset processing
- **Email Service** (optional, for direct email sending)

## Installation

### 1. Install Wrangler CLI
```bash
npm install -g wrangler
```

### 2. Authenticate with Cloudflare
```bash
wrangler login
```

### 3. Configure Worker
```bash
cp wrangler.toml.example wrangler.toml
```

### 4. Set Up Secrets
```bash
# Required: Backend API endpoint
wrangler secret put BACKEND_URL

# Optional: Email service configuration
wrangler secret put EMAIL_SERVICE_API_KEY
wrangler secret put EMAIL_SERVICE_URL
```

## Configuration

### Backend API Requirements
Your backend API should support:
- POST endpoint for password reset initiation
- Email validation and user lookup
- Password reset token generation
- Email delivery functionality

### Rate Limiting Setup (Optional)
If using persistent rate limiting:
```bash
# Create KV namespaces
wrangler kv:namespace create "RATE_LIMIT_KV"
wrangler kv:namespace create "RATE_LIMIT_KV" --preview
```

## Development & Testing

### 1. Start Development Server
```bash
wrangler dev
```

### 2. Test with Browser
1. Open `test.html` in your browser
2. Configure worker URL
3. Test with various email addresses
4. Verify rate limiting functionality

### 3. Production Deployment
```bash
wrangler deploy
```

## Integration

This worker integrates with:
- **LoginWorker**: For post-reset authentication
- **Backend API**: For user validation and token generation
- **Email Service**: For password reset email delivery

## Troubleshooting

### Common Issues
- **Rate Limiting**: Clear KV storage or wait for reset period
- **Backend Integration**: Verify API endpoint and credentials
- **Email Validation**: Check email format requirements
- **CORS Issues**: Verify origin configuration
