If you discover a security issue in this repo, please submit it through the [GitHub Security Bug Bounty](https://hackerone.com/github)

Thanks for helping make GitHub Actions safe for everyone.

## Security Best Practices for Token Handling

When working with the GitHub Actions Toolkit, follow these security guidelines:

### GitHub Personal Access Tokens (PATs)

- **Never commit PATs directly to source code**
- Use GitHub Secrets or environment variables instead
- If working locally, use `.env` files (already in `.gitignore`)
- Test tokens should be clearly fake/dummy tokens (like the ones in tests)

### Example of Secure Token Usage

```javascript
// ✅ Good: Using environment variable or GitHub Secret  
const token = core.getInput('github-token') || process.env.GITHUB_TOKEN;
const octokit = github.getOctokit(token);

// ❌ Bad: Never hardcode real tokens
const token = 'github_pat_11ABC123_EXAMPLE_ONLY'; // NEVER DO THIS
```

### Token Patterns to Avoid

The following patterns are blocked by `.gitignore`:
- `github_pat_*` - Personal Access Tokens
- `ghp_*` - GitHub App tokens  
- Files containing `token`, `secret`, `password` in names
- `.env*` files with credentials

### If You Accidentally Commit a Token

1. **Immediately revoke the token** in GitHub Settings
2. Remove it from git history using tools like `git filter-branch` or BFG Repo-Cleaner  
3. Generate a new token if needed
4. Update any systems using the old token