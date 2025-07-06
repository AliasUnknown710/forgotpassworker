# Setup Guide

This guide will walk you through setting up the Forgot Password Worker from scratch.

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Cloudflare account](https://dash.cloudflare.com/sign-up)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) installed globally

## Step-by-Step Setup

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Authenticate with Cloudflare

```bash
wrangler login
```

This will open a browser window to authenticate with your Cloudflare account.

### 3. Clone and Setup Project

```bash
git clone <your-repo-url>
cd ForgotPassWorker
npm install
```

### 4. Configure Your Worker

Copy the example configuration:

```bash
cp wrangler.toml.example wrangler.toml
```

Edit `wrangler.toml` with your specific configuration:

```toml
name = "your-forgot-password-worker"  # Change this to your preferred name
main = "index.js"
compatibility_date = "2023-12-01"

[env.development.vars]
USER_EMAIL = "test@yourdomain.com"
FROM_EMAIL = "noreply@yourdomain.com"
RESET_URL_BASE = "https://yourdomain.com/reset-password"

[env.production.vars]
FROM_EMAIL = "noreply@yourdomain.com"
RESET_URL_BASE = "https://yourdomain.com/reset-password"
```

### 5. Set Up Environment Variables

For development, you can use the vars section in `wrangler.toml`.

For production secrets, use Wrangler CLI:

```bash
# Set your SendGrid API key (or other email service API key)
wrangler secret put SENDGRID_API_KEY

# Set production user email (if using simple validation)
wrangler secret put USER_EMAIL
```

### 6. Local Development

Start the development server:

```bash
npm run dev
```

Your worker will be available at `http://localhost:8787`

### 7. Test Your Worker

Open `test.html` in your browser to test the worker functionality, or use curl:

```bash
curl -X POST http://localhost:8787 \
  -H "Content-Type: application/json" \
  -d '{"email": "test@yourdomain.com"}'
```

### 8. Deploy to Production

When you're ready to deploy:

```bash
# Deploy to production
npm run deploy

# Or deploy to a specific environment
wrangler deploy --env production
```

## Email Service Integration

### Option 1: SendGrid

1. Sign up for [SendGrid](https://sendgrid.com/)
2. Create an API key
3. Set the API key as a secret:
   ```bash
   wrangler secret put SENDGRID_API_KEY
   ```
4. Update your worker code to use SendGrid API

### Option 2: Mailgun

1. Sign up for [Mailgun](https://www.mailgun.com/)
2. Get your API key and domain
3. Set secrets:
   ```bash
   wrangler secret put MAILGUN_API_KEY
   wrangler secret put MAILGUN_DOMAIN
   ```

### Option 3: Resend

1. Sign up for [Resend](https://resend.com/)
2. Create an API key
3. Set the API key:
   ```bash
   wrangler secret put RESEND_API_KEY
   ```

## Database Integration

### Option 1: Cloudflare D1

1. Create a D1 database:
   ```bash
   wrangler d1 create forgot-password-db
   ```

2. Add to your `wrangler.toml`:
   ```toml
   [[d1_databases]]
   binding = "DB"
   database_name = "forgot-password-db"
   database_id = "your-database-id"
   ```

### Option 2: External Database

For external databases (PostgreSQL, MySQL, etc.), you'll need:

1. Database connection details
2. Set connection string as secret:
   ```bash
   wrangler secret put DATABASE_URL
   ```

## Advanced Configuration

### Rate Limiting with KV

1. Create a KV namespace:
   ```bash
   wrangler kv:namespace create "RATE_LIMIT"
   ```

2. Add to `wrangler.toml`:
   ```toml
   [[kv_namespaces]]
   binding = "RATE_LIMIT"
   id = "your-kv-namespace-id"
   ```

### Custom Domain

1. Add your domain to Cloudflare
2. Configure routes in `wrangler.toml`:
   ```toml
   [[routes]]
   pattern = "api.yourdomain.com/forgot-password"
   zone_name = "yourdomain.com"
   ```

## Security Configuration

### CORS Setup

Update your worker to handle CORS properly:

```javascript
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://yourdomain.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

### Rate Limiting

Implement rate limiting to prevent abuse:

```javascript
// Example: limit to 5 requests per hour per IP
const rateLimitKey = `rate_limit:${clientIP}`;
const currentCount = await env.RATE_LIMIT.get(rateLimitKey);
```

## Troubleshooting

### Common Issues

1. **Authentication errors**: Run `wrangler login` again
2. **Deployment failures**: Check your `wrangler.toml` syntax
3. **Environment variable issues**: Verify secrets are set correctly
4. **CORS errors**: Ensure your CORS headers are configured

### Debug Commands

```bash
# Check worker logs
wrangler tail

# Validate configuration
wrangler whoami
wrangler kv:namespace list
wrangler secret list
```

### Getting Help

1. Check [Cloudflare Workers documentation](https://developers.cloudflare.com/workers/)
2. Visit [Cloudflare Community](https://community.cloudflare.com/)
3. Review the project's GitHub issues

## Next Steps

After setup is complete:

1. Review the `DEPLOYMENT_CHECKLIST.md` for production deployment
2. Read `SECURITY.md` for security best practices
3. Check `CONTRIBUTING.md` if you plan to contribute to the project

---

**Need help?** Create an issue in the project repository or check the documentation.