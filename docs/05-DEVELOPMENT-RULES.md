# It's All Greek – Development Rules

Version: 1.0

This document defines the engineering standards, implementation workflow and development rules for the entire project.

Every AI agent and developer must follow these rules before making any changes.

If these rules conflict with another document, follow the priority defined in the Project Charter.

---

# Development Philosophy

The goal is not to write code.

The goal is to build a maintainable, scalable and production-ready application.

Every line of code should improve the project.

Never write code simply because it works.

Write code that will still be understandable one year from now.

---

# Core Principles

Every implementation should be:

- Simple
- Predictable
- Reusable
- Readable
- Maintainable
- Performant
- Accessible
- Production-ready

---

# Required Reading Order

Before writing any code, always read the following documentation in this exact order:

1. 00-PROJECT-CHARTER.md
2. 01-DESIGN-BIBLE.md
3. 02-BRAND-GUIDE.md
4. 03-COMPONENT-LIBRARY.md
5. 04-PAGES.md
6. 05-DEVELOPMENT-RULES.md
7. 06-COPY.md

After reading the documentation:

Review every approved design inside the /design folder.

Only then begin implementation.

---

# Before Writing Code

Before modifying anything:

- Understand the goal.
- Check if a reusable component already exists.
- Check if the requested functionality already exists.
- Check whether documentation already answers the question.

Never start coding immediately.

Think first.

Implement second.

---

# Development Workflow

Every feature should follow this order.

Step 1

Understand the request.

↓

Step 2

Read the documentation.

↓

Step 3

Review the approved designs.

↓

Step 4

Create an implementation plan.

↓

Step 5

Implement.

↓

Step 6

Review your own work.

↓

Step 7

Explain what changed.

Never skip a step.

---

# Architecture Rules

Prefer composition over duplication.

Every reusable UI element belongs inside:

components/

Never place reusable UI directly inside page.tsx.

Keep pages clean.

Pages should assemble components.

Components should contain implementation.

---

# Folder Structure

Use this structure whenever possible.

app/

components/

components/layout/

components/home/

components/menu/

components/ui/

lib/

types/

hooks/

public/

docs/

design/

Never create unnecessary folders.

---

# Component Rules

Every component should:

- Have one clear responsibility.
- Accept props instead of hardcoded values.
- Be reusable.
- Be responsive.
- Be accessible.

Avoid page-specific components unless absolutely necessary.

---

# Styling Rules

Use Tailwind CSS.

Never use inline styles unless absolutely required.

Never duplicate utility classes across multiple components when a reusable component is more appropriate.

Spacing should always follow the Design Bible.

---

# TypeScript Rules

Avoid "any".

Use explicit types whenever possible.

Prefer interfaces for component props.

Keep types inside:

types/

when shared.

---

# React Rules

Use functional components.

Prefer server components unless client-side interaction is required.

Use "use client" only when necessary.

Keep state local whenever possible.

Avoid unnecessary effects.

Avoid unnecessary re-renders.

---

# Next.js Rules

Use the App Router.

Use next/image.

Use next/link.

Use Metadata API.

Optimize images.

Prefer server rendering.

Keep routing simple.

---

# Performance Rules

Lazy-load below-the-fold images.

Avoid unnecessary JavaScript.

Avoid large client bundles.

Optimize imports.

Do not prematurely optimize, but never ignore obvious performance issues.

---

# Accessibility Rules

Semantic HTML.

Keyboard navigation.

Alt text.

Proper heading hierarchy.

Visible focus states.

Color contrast.

Accessible forms.

---

# SEO Rules

Every page must include:

- Metadata
- Title
- Description
- Open Graph
- Structured data where applicable

URLs should remain clean.

---

# Error Handling

Never silently ignore errors.

Handle errors gracefully.

Provide useful feedback.

---

# Code Review Checklist

Before considering a task complete, verify:

✓ Documentation followed

✓ Design matches approved mockups

✓ Components reused

✓ Mobile tested

✓ Responsive tested

✓ Accessibility checked

✓ SEO included

✓ Performance considered

✓ TypeScript clean

✓ No duplicated logic

✓ No unnecessary code

---

# Git Rules

One logical feature per commit.

Write meaningful commit messages.

Do not mix unrelated changes.

Keep commits focused.

---

# Communication Rules

Before major structural changes:

Explain the implementation plan.

Wait for approval.

After implementation:

Explain:

- What changed.
- Why it changed.
- Which files changed.
- Any recommendations.

---

# AI Behaviour Rules

Never redesign.

Never rewrite approved copy.

Never invent missing content.

Never create additional pages.

Never change architecture without approval.

Never remove existing functionality without approval.

Never introduce unnecessary dependencies.

If something is unclear:

Ask instead of assuming.

---

# Definition of Done

A task is complete only when:

- The implementation matches the approved design.
- The code is production-ready.
- Documentation remains accurate.
- Components are reusable.
- Accessibility has been considered.
- Performance has been considered.
- The implementation has been reviewed.

---

# Final Rule

Write code as if another senior engineer will maintain it for the next five years.

Clarity is more valuable than cleverness.

Consistency is more valuable than speed.

Quality is never optional.