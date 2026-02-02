# AI Agent Rules Experiment – TypeScript Validation Focus

## Overview

This repository documents an experiment in configuring and evaluating
AI coding agent rules to better align the agent’s behavior with my
development standards and expectations.

The focus of this work is on **TypeScript code quality enforcement**,
specifically linting discipline and type safety, using a small and
controlled project to observe behavior changes before and after
introducing explicit rules.

---

## Goal

The goal of this experiment was to understand how a small, targeted
rules change can influence an AI agent’s:

- Thought process
- Code generation behavior
- Alignment with developer intent
- Output quality and reliability

---

## Rules Change Summary

I introduced a **Code Validation Requirements** section to the agent
rules file, requiring the agent to:

- Consider ESLint compliance after modifying TypeScript files
- Avoid introducing new lint violations
- Ensure TypeScript code type-checks without errors
- Avoid `any` unless explicitly required
- Prefer explicit return types for public functions
- Perform a self-review step before finalizing responses

These changes were intentionally limited in scope to make their impact
easy to observe and evaluate.

---

## Documentation

The experiment and findings are documented in the following files:

- **[`docs/what-i-did.md`](docs/what-i-did.md)**  
  Describes the specific changes made to the agent rules file.

- **[`docs/what-worked.md`](docs/what-worked.md)**  
  Records the configurations and behaviors that proved effective after
  introducing the rules.

- **[`docs/insights.md`](docs/insights.md)**  
  Summarizes key insights about how rules influence AI agent behavior,
  reasoning patterns, and alignment with developer expectations.

---

## Methodology

To evaluate the rules change, I reused simple, repeatable prompts such as:

- Adding new utility functions
- Refactoring ex
