# Contributing to Forgot Password Worker

Thank you for your interest in contributing to the Forgot Password Worker! This document provides guidelines for contributing to this Cloudflare Worker project.

## Project Overview

This worker is part of a larger authentication and user management system built on Cloudflare Workers. It handles secure password reset requests with email validation, rate limiting, and backend integration.

## Development Setup

### Prerequisites

- Node.js (v18 or later)
- Wrangler CLI
- Access to Cloudflare Workers
- Backend API for user management
- Email service integration (optional)

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy configuration: `cp wrangler.toml.example wrangler.toml`
4. Configure your environment variables
5. Set up secrets: `wrangler secret put BACKEND_URL`

## Code Style and Standards

### General Guidelines

- Follow ES6+ JavaScript standards
- Use async/await for asynchronous operations
- Implement comprehensive error handling
- Write secure, production-ready code
- Include proper input validation and sanitization

### Security Requirements

- Always validate email formats and domains
- Implement rate limiting to prevent abuse
- Use proper error handling without information leakage
- Implement proper CORS configuration
- Follow the principle of least privilege

### Email Handling

- Validate email format and domain
- Prevent enumeration attacks
- Handle bounced emails gracefully
- Implement proper rate limiting per email address
- Sanitize all email-related inputs

## Testing

### Manual Testing

- Use the provided `test.html` file for interactive testing
- Test all error conditions and edge cases
- Verify email validation flows
- Test integration with backend services
- Verify rate limiting functionality

### Test Cases to Cover

- Valid password reset requests
- Invalid email formats
- Non-existent email addresses
- Rate limiting scenarios
- Backend service failures
- CORS preflight requests
- Email delivery confirmation

## Submitting Changes

### Pull Request Process

1. Create a feature branch from main
2. Make your changes following the code style guidelines
3. Test your changes thoroughly using the test interface
4. Update documentation if necessary
5. Submit a pull request with a clear description

### Commit Message Format

```
type(scope): brief description

Detailed explanation of changes if needed
```

Types: feat, fix, docs, style, refactor, test, chore

## Security Considerations

### Email Security

- Validate email formats to prevent injection
- Implement rate limiting per email and IP
- Prevent email enumeration attacks
- Use secure email service integration
- Handle email delivery failures gracefully

### Rate Limiting

- Implement per-IP rate limiting
- Consider per-email rate limiting
- Use appropriate time windows
- Handle rate limit bypass attempts
- Log suspicious activity patterns

### Backend Integration

- Use secure communication protocols
- Validate all backend responses
- Implement proper timeout handling
- Handle backend service failures gracefully
- Protect against replay attacks

## Documentation

- Update README.md for any new features
- Document configuration changes in setup guides
- Update API documentation for endpoint changes
- Include examples for new functionality
- Document email service integration

## Questions or Issues

For questions about contributing or issues with the codebase, please:
1. Check existing documentation
2. Review the README.md file
3. Open an issue with detailed information
4. Contact the maintainers if needed

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain a professional environment
