# Contributing to Forgot Password Worker

Thank you for your interest in contributing to the Forgot Password Worker project! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Submitting Changes](#submitting-changes)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)
- [Code Review Process](#code-review-process)

## Code of Conduct

This project adheres to a code of conduct that promotes a welcoming and inclusive environment. By participating, you agree to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git version control
- A Cloudflare account for testing
- Wrangler CLI installed globally

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/your-username/forgot-password-worker.git
   cd forgot-password-worker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up development environment**
   ```bash
   cp wrangler.toml.example wrangler.toml
   # Edit wrangler.toml with your development settings
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Run tests** (when available)
   ```bash
   npm test
   ```

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- **Bug fixes** - Help us identify and fix issues
- **Feature enhancements** - Improve existing functionality
- **New features** - Add new capabilities
- **Documentation improvements** - Enhance guides and examples
- **Performance optimizations** - Make the worker faster and more efficient
- **Security improvements** - Strengthen security measures
- **Test coverage** - Add or improve automated tests

### Before You Start

1. **Check existing issues** - Look for similar issues or feature requests
2. **Create an issue** - Discuss significant changes before implementing
3. **Assign yourself** - Let others know you're working on something
4. **Follow conventions** - Use existing code style and patterns

## Development Guidelines

### Code Style

- **JavaScript**: Follow modern ES6+ conventions
- **Formatting**: Use Prettier for consistent formatting
- **Linting**: Use ESLint to catch potential issues
- **Comments**: Write clear, concise comments for complex logic

### Project Structure

```
ForgotPassWorker/
├── index.js              # Main worker entry point
├── package.json          # Dependencies and scripts
├── wrangler.toml.example # Configuration template
├── test.html            # Development test interface
├── README.md            # Project documentation
├── SETUP.md             # Setup instructions
├── DEPLOYMENT_CHECKLIST.md # Deployment guide
├── CONTRIBUTING.md      # This file
├── SECURITY.md          # Security guidelines
├── CHANGELOG.md         # Version history
└── LICENSE              # License information
```

### Coding Standards

#### JavaScript Best Practices

```javascript
// Use async/await for asynchronous operations
async function handleRequest(request, env) {
  try {
    const data = await request.json();
    // Process data
  } catch (error) {
    // Handle errors appropriately
  }
}

// Use descriptive variable names
const userEmail = request.email;
const resetToken = generateSecureToken();

// Implement proper error handling
if (!isValidEmail(userEmail)) {
  return new Response('Invalid email format', { status: 400 });
}
```

#### Security Considerations

- Never log sensitive information
- Validate all inputs thoroughly
- Use environment variables for secrets
- Implement proper CORS headers
- Add rate limiting for production use

#### Performance Guidelines

- Minimize external API calls
- Use appropriate response caching
- Optimize for cold start performance
- Handle timeouts gracefully

## Submitting Changes

### Commit Message Format

Use clear, descriptive commit messages:

```
type(scope): brief description

Longer explanation if necessary

Fixes #issue-number
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(email): add SendGrid integration support

fix(validation): properly handle malformed email addresses

docs(readme): update installation instructions

Fixes #42
```

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow coding standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run dev
   # Test with test.html or curl
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat(scope): description of changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Use a clear title and description
   - Reference any related issues
   - Include testing instructions
   - Add screenshots if UI changes are involved

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally with npm run dev
- [ ] Tested with test.html interface
- [ ] Added/updated tests

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings or errors
```

## Bug Reports

### Before Submitting a Bug Report

1. **Check existing issues** - Avoid duplicate reports
2. **Use latest version** - Ensure you're using the most recent version
3. **Test locally** - Reproduce the issue in development

### Bug Report Template

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Step one
2. Step two
3. Step three

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Node.js version:
- Wrangler version:
- Operating System:
- Browser (if applicable):

**Additional Context**
Screenshots, logs, or other relevant information
```

## Feature Requests

### Before Submitting a Feature Request

1. **Check existing requests** - Look for similar feature requests
2. **Consider scope** - Ensure the feature fits the project's goals
3. **Think about implementation** - Consider how it might be built

### Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Use Case**
Why is this feature needed? What problem does it solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other relevant information
```

## Code Review Process

### For Contributors

- **Be responsive** - Address feedback promptly
- **Ask questions** - If feedback isn't clear, ask for clarification
- **Test thoroughly** - Ensure changes work as expected
- **Update documentation** - Keep docs current with changes

### For Reviewers

- **Be constructive** - Provide helpful, actionable feedback
- **Be timely** - Review PRs within a reasonable timeframe
- **Test changes** - Verify functionality when possible
- **Focus on substance** - Prioritize logic and security over style

### Review Criteria

✅ **Code Quality**
- Follows project conventions
- Is well-documented
- Handles errors appropriately
- Is performant and secure

✅ **Functionality**
- Works as described
- Doesn't break existing features
- Includes appropriate tests
- Handles edge cases

✅ **Documentation**
- README updated if needed
- Code comments are clear
- API changes documented
- Examples provided

## Recognition

Contributors will be recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Project documentation acknowledgments

## Getting Help

If you need help or have questions:

1. **Check documentation** - README, SETUP, and other guides
2. **Search issues** - Look for similar questions
3. **Create an issue** - Ask questions in a new issue
4. **Join discussions** - Participate in issue discussions

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to Forgot Password Worker! Your efforts help make this project better for everyone. 🚀