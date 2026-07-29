# It's All Greek – Page Specifications

Version: 1.1

This document defines every page of the website and the implementation requirements for each page.

The approved design mockups are the primary source of truth.

If this document conflicts with the approved mockups, always follow the mockups.

Never redesign.

Never improvise.

When in doubt, ask instead of assume.

---

# Global Implementation Rules

Before modifying any page:

1. Read the Design Bible.
2. Read the Brand Guide.
3. Read the Component Library.
4. Read this document.
5. Review the approved design assets.

Only after completing these steps may implementation begin.

---

# General Rules

Every page must:

- Be mobile-first.
- Use reusable components.
- Never duplicate layout logic.
- Reuse existing components whenever possible.
- Follow the Design Bible.
- Follow the Brand Guide.
- Follow the Component Library.
- Use semantic HTML.
- Be fully accessible.
- Be SEO-friendly.
- Be production-ready.

---

# Page Lifecycle

Every page should be implemented in the following order:

1. Layout
2. Content hierarchy
3. Components
4. Responsive behavior
5. Accessibility
6. Performance
7. SEO
8. Final polish

Never skip steps.

---

# Shared Layout

Every page consists of:

Header

↓

Main Content

↓

Footer

Header and Footer are global shared components.

They should never be duplicated.

---

# Homepage

## Goal

The homepage should answer four questions within five seconds:

Who are we?

What do we offer?

Why choose us?

How can I order?

Everything else is secondary.

---

## Layout

Header

↓

Hero

↓

USP Section

↓

Restaurant Experience

↓

Primary CTA

↓

Footer

---

## Hero

Purpose

Create emotion before information.

Components

Header

HeroSection

PrimaryButton

SecondaryButton

Content

Small label

It's All Greek

Headline

Even weg.

Even Griekenland.

Paragraph

Authentieke Griekse gerechten in het hart van Nieuwerkerk aan den IJssel.

Buttons

Bestel afhalen

Bekijk menu

Requirements

Hero occupies approximately one viewport height.

Text remains readable on every image.

CTA is immediately visible.

---

## USP Section

Purpose

Communicate the three biggest strengths.

Cards

Binnen & terras

Afhalen

Bezorgen

Cards should all have equal height.

Spacing must remain consistent.

---

## Restaurant Experience

Purpose

Sell the atmosphere.

Large image.

Small label.

Headline.

Paragraph.

Single CTA.

No unnecessary decorations.

---

## CTA

Purpose

Generate action.

Blue background.

Centered content.

Two buttons.

Nothing else.

---

## Footer

Shared component.

Contains:

Opening hours

Address

Phone

Email

Socials

Copyright

---

# Menu Page

Purpose

Inform.

Not sell.

Not order.

No cart.

No checkout.

No ordering flow.

Only present the menu.

Categories should exactly follow the official menu.

Prices should exactly match the restaurant.

---

# About Page

Purpose

Build trust.

Topics

Hospitality

Atmosphere

Authenticity

Terrace

Family

Avoid unnecessary history.

Avoid marketing language.

---

# Contact Page

Purpose

Reduce friction.

Visitor should immediately know:

Where are we?

How can I call?

How do I navigate there?

How do I order?

---

# Ordering Page

Purpose

Redirect visitors.

Primary destination

Thuisbezorgd.

Secondary destination

Phone ordering.

No ordering system.

---

# Error Pages

404

Minimal.

Helpful.

One CTA.

---

# Empty States

Simple.

Friendly.

Helpful.

---

# Loading States

Skeleton loading.

No spinners unless necessary.

---

# Future Pages

Only add new pages after approval.

Never create pages proactively.

---

# Quality Checklist

Before considering a page complete:

✓ Mobile verified

✓ Responsive verified

✓ Components reused

✓ Accessibility verified

✓ SEO verified

✓ Performance verified

✓ Matches approved design

✓ No unnecessary code

---

# AI Rules

Before changing an existing page:

Explain the implementation plan.

Wait for approval if structural changes are required.

After implementation:

List every modified file.

Explain why it was modified.

Suggest possible improvements separately.

Never silently redesign.

Never silently refactor.

Never assume missing requirements.

---

# Final Rule

The objective is not to create a beautiful page.

The objective is to faithfully implement the approved design with production-quality code.