# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial public release
- Secure password reset functionality
- Email validation and verification
- Backend API integration for password reset
- Rate limiting to prevent abuse
- Comprehensive error handling and validation
- Input sanitization and security features
- CORS protection with configurable origins
- Production-ready deployment configuration
- Interactive testing interface

### Security
- Email format validation for all requests
- Rate limiting per IP address to prevent spam
- Input validation and sanitization
- Secure backend communication with authentication
- Error message sanitization to prevent information leakage
- Request method validation (POST only)
- Protection against password reset abuse

## [1.0.0] - 2025-07-06

### Added
- Core forgot password worker functionality
- Email-based password reset system
- Backend integration with secure API calls
- Rate limiting and abuse prevention
- Comprehensive documentation and setup guides
- Test interface for development and validation

### Security
- Implemented secure password reset flow
- Added protection against automated attacks
- Secure error handling without information disclosure
- Email validation to prevent invalid submissions
