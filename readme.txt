Forgot Password Worker - Secure Password Reset System

This is a production-ready Cloudflare Worker designed for secure password reset functionality with email validation, rate limiting, and backend integration.

KEY FEATURES:
- Email format validation and domain checking
- Rate limiting to prevent password reset abuse
- Backend API integration for password reset processing
- Comprehensive input validation and sanitization
- CORS protection with configurable origins
- Detailed error handling without information leakage
- Production-ready deployment configuration

SETUP REQUIREMENTS:
1. Cloudflare Workers account
2. Backend API endpoint for password reset processing
3. Email service integration (optional)
4. Wrangler CLI for deployment

QUICK START:
1. Copy wrangler.toml.example to wrangler.toml
2. Configure your backend URL: wrangler secret put BACKEND_URL
3. Optional: Configure email service: wrangler secret put EMAIL_SERVICE_API_KEY
4. Deploy: wrangler deploy
5. Test using the included test.html file

SECURITY FEATURES:
- Email format validation prevents invalid submissions
- Rate limiting per IP address prevents abuse
- Input validation prevents injection attacks
- Error messages sanitized to prevent information disclosure
- Backend communication secured with proper authentication
- Request method validation (POST only)

This worker is part of a larger user management system and integrates with:
- LoginWorker (for authentication after password reset)
- SignUpWorker (for user registration)
- ProfileInfoWorker (for profile data)
- DeleteProfileWorker (for account management)

For detailed documentation, see README.md
For deployment guidance, see DEPLOYMENT_CHECKLIST.md
For security information, see SECURITY.md
