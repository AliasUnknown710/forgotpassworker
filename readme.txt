FORGOT PASSWORD WORKER - QUICK START
====================================

This is a Cloudflare Worker template for handling forgot password requests.

QUICK SETUP:
-----------
1. Install dependencies: npm install
2. Copy config: cp wrangler.toml.example wrangler.toml
3. Edit wrangler.toml with your settings
4. Start development: npm run dev
5. Test at: http://localhost:8787

REQUIRED CONFIGURATION:
----------------------
- Set USER_EMAIL in wrangler.toml for testing
- Configure email service (SendGrid, Mailgun, etc.)
- Set FROM_EMAIL and RESET_URL_BASE
- For production: use wrangler secret put for API keys

FILES OVERVIEW:
--------------
- index.js                - Main worker code
- package.json           - Dependencies and scripts
- wrangler.toml.example  - Configuration template
- test.html             - Web test interface
- README.md             - Full documentation
- SETUP.md              - Detailed setup guide
- DEPLOYMENT_CHECKLIST.md - Production deployment guide

TESTING:
-------
Open test.html in browser or use curl:

curl -X POST http://localhost:8787 \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'

DEPLOYMENT:
----------
npm run deploy

For detailed instructions, see README.md and SETUP.md

SECURITY:
--------
- Read SECURITY.md before production deployment
- Use environment variables for secrets
- Implement rate limiting
- Configure CORS properly

SUPPORT:
-------
- Check README.md for full documentation
- Review SETUP.md for detailed instructions
- See CONTRIBUTING.md to contribute
- Create GitHub issues for bugs/questions

Licensed under MIT License - see LICENSE file.