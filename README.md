# Forgot Password Worker

A Cloudflare Worker template for handling forgot password requests with email notifications.

## Features

- ✅ Secure password reset request handling
- ✅ Email validation
- ✅ Environment variable configuration
- ✅ CORS support
- ✅ Rate limiting ready
- ✅ Simple JSON API interface

## Quick Start

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd ForgotPassWorker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp wrangler.toml.example wrangler.toml
   # Edit wrangler.toml with your configuration
   ```

4. **Deploy to Cloudflare Workers**
   ```bash
   npm run deploy
   ```

## API Usage

### Reset Password Request

**POST** `/`

Request body:
```json
{
  "email": "user@example.com"
}
```

Success Response (200):
```json
{
  "message": "Password reset link sent."
}
```

Error Response (404):
```json
"User not found"
```

Error Response (400):
```json
"Bad Request"
```

## Configuration

### Environment Variables

Set these in your `wrangler.toml` file:

- `USER_EMAIL` - The email address to validate against (for testing)
- `SENDGRID_API_KEY` - Your SendGrid API key for sending emails
- `FROM_EMAIL` - The email address to send from
- `RESET_URL_BASE` - Base URL for password reset links

### Example Request

```bash
curl -X POST https://your-worker.your-subdomain.workers.dev/ \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

## Development

### Local Development

```bash
npm run dev
```

This starts the worker in development mode at `http://localhost:8787`

### Testing

Use the included `test.html` file to test the worker functionality:

```bash
npm run dev
# Open test.html in your browser
```

## Customization

### Adding Email Service Integration

Replace the placeholder logic in `index.js` with your preferred email service:

- SendGrid
- Mailgun
- AWS SES
- Resend

### Adding Database Integration

Integrate with your database to validate user emails:

- Cloudflare D1
- PlanetScale
- Supabase
- External API

## Security Considerations

- Always validate email formats
- Implement rate limiting
- Use environment variables for sensitive data
- Validate CORS origins in production
- Log security events

## Deployment

See `DEPLOYMENT_CHECKLIST.md` for a complete deployment guide.

## Contributing

Please read `CONTRIBUTING.md` for guidelines on contributing to this project.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/forgot-password-worker/issues) page
2. Create a new issue if needed
3. Review the documentation

---

**Note**: This is a template project. Make sure to customize it according to your specific requirements before deploying to production.