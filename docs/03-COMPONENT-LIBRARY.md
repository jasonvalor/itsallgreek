# It's All Greek – Component Library

Version: 1.0

This document defines every reusable UI component used throughout the website.

All components must be reusable.

Never duplicate code when an existing component can be reused.

When a new component is needed, ask before creating it.

---

# Design Principles

Every component should be:

- Reusable
- Responsive
- Accessible
- Consistent
- Lightweight
- Easy to maintain

---

# Layout Components

## Header

Purpose:
Primary website navigation.

Contains:

- Logo
- Navigation
- CTA button (optional)
- Mobile menu

Rules:

- Sticky while scrolling
- Transparent over hero sections when specified
- Solid background after scrolling if required by the design
- Mobile navigation uses a slide-in menu

---

## Footer

Purpose:

Global footer.

Contains:

- Logo
- Opening hours
- Contact information
- Address
- Social media
- Copyright
- Navigation links

Appears on every page.

---

# Hero Section

Purpose:

First impression of the website.

Contains:

- Background image or video
- Overlay
- Subtitle
- Main heading
- Description
- Primary CTA
- Secondary CTA

Rules:

- Full viewport height on homepage
- Content vertically centered
- Text always readable
- Background optimized for performance

---

# Buttons

## Primary Button

Purpose:

Main action.

Style:

- Filled
- Rounded
- Brand blue
- White text
- Medium shadow
- Hover animation
- Press animation

---

## Secondary Button

Purpose:

Secondary action.

Style:

- Transparent
- Rounded
- Thin border
- Blur background when required
- Hover effect

---

## Icon Button

Purpose:

Small actions.

Examples:

- Menu
- Close
- Arrow
- Social icons

---

# Navigation

Desktop Navigation

- Horizontal
- Clear spacing
- Active state
- Hover state

Mobile Navigation

- Hamburger menu
- Full-screen or slide-in drawer
- Large touch targets
- Smooth animation

---

# Cards

## Menu Card

Contains:

- Image
- Dish name
- Description
- Price

Optional:

- Popular badge

---

## USP Card

Contains:

- Icon
- Title
- Description

---

## Review Card

Contains:

- Rating
- Customer name
- Review text

---

## Gallery Card

Contains:

- Image
- Optional caption

---

# Sections

Reusable sections include:

- Hero
- USP
- Featured Menu
- Gallery
- Reviews
- Contact CTA
- Newsletter (if added)
- Footer

Each section should be independent.

---

# Forms

## Contact Form

Fields:

- Name
- Email
- Phone (optional)
- Message

Validation required.

---

## Reservation Form

Fields:

- Name
- Number of guests
- Date
- Time
- Phone
- Email

Validation required.

---

# Typography Components

Reusable typography:

- Display Heading
- Page Heading
- Section Heading
- Subheading
- Body Text
- Caption
- Label

Use consistent spacing.

---

# Image Components

Images should support:

- Lazy loading
- Responsive sizing
- Rounded corners when specified
- Alt text

---

# Icons

Use one consistent icon library.

Icons should:

- Match the design
- Have consistent stroke width
- Scale correctly

---

# Animations

Allowed:

- Fade
- Slide
- Scale
- Hover
- Scroll reveal

Avoid unnecessary animations.

---

# Component Rules

Every component should:

- Be reusable
- Accept props
- Avoid duplicated logic
- Be responsive
- Be accessible

Never hardcode values that may be reused elsewhere.

---

# Naming Convention

Use PascalCase.

Examples:

Header

Footer

HeroSection

PrimaryButton

MenuCard

Gallery

ReviewCard

ReservationForm

---

# AI Development Rules

Before creating a new component:

1. Check whether an existing component can be reused.

2. If not:

Create a reusable component.

Do not build page-specific components unless absolutely necessary.

When in doubt, ask instead of assume.

---

# Final Rule

Consistency is more important than creating new components.