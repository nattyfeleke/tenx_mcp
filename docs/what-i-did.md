# What I Did

I added a Code Validation Requirements section to the agent rules file.

The changes introduced explicit expectations that after modifying any
TypeScript file, the agent should:
- Ensure code conforms to ESLint rules
- Avoid introducing new lint violations
- Ensure TypeScript type-checking passes with no errors
- Avoid using `any` unless explicitly required
- Prefer explicit return types for public functions

I also added a pre-submission checklist instructing the agent to
review code for common TypeScript and ESLint issues before finalizing
a response.
