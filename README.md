# Forgot Password Worker

A secure Cloudflare Worker for handling password reset requests with email validation and backend integration.

## Features

- 📧 **Email Validation**: Comprehensive email format validation
- 🔒 **Secure Processing**: Safe password reset token generation
- 🛡️ **Rate Limiting**: Protection against abuse
- 🌐 **Backend Integration**: Secure communication with backend API
- 📊 **Error Handling**: Detailed error responses and logging
- 🚀 **CORS Support**: Proper cross-origin request handling
- ⚡ **High Performance**: Optimized for Cloudflare Edge

## Quick Setup

### 1. Set Your Backend URL

```bash
wrangler secret put BACKEND_URL
```

### 2. Optional: Set Email Service Configuration

```bash
wrangler secret put EMAIL_SERVICE_API_KEY
wrangler secret put EMAIL_SERVICE_URL
```

### 3. Deploy

```bash
wrangler deploy
```

## API Endpoint

### POST /

Initiates a password reset process for a user.

**Headers:**
- `Content-Type: application/json` (required)

**Request Body:**
```json
{
    "email": "user@example.com"
}
```

**Response:**
- `200 OK`: Reset email sent successfully
- `400 Bad Request`: Invalid email format
- `404 Not Found`: Email not found in system
- `405 Method Not Allowed`: Non-POST request
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Backend error

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BACKEND_URL` | Backend API endpoint for password reset | Yes |
| `EMAIL_SERVICE_API_KEY` | API key for email service | Optional |
| `EMAIL_SERVICE_URL` | Email service endpoint | Optional |

## Security Features

- Email format validation
- Rate limiting per IP address
- Input sanitization and validation
- Secure backend communication
- Error message sanitization
- Request method validation

## Development

1. Copy `wrangler.toml.example` to `wrangler.toml`
2. Configure your environment variables
3. Test using `test.html`
4. Deploy with `wrangler deploy`

## Testing

Use the provided `test.html` file to test the worker functionality locally or after deployment.

## Rate Limiting

The worker includes built-in rate limiting to prevent abuse:
- Maximum 5 requests per IP per hour
- Configurable limits via environment variables
- Automatic cleanup of expired rate limit data
