# Satukos Project Addition — Design Spec

**Date**: 2026-08-10  
**Status**: Approved by User  

## Overview
Add **Satukos** (`https://satukos.com`), a live SaaS platform for boarding house (kos) management, to the developer's portfolio website.

## Requirements & Scope

1. **Assets**:
   - `assets/satukos-screenshot.png` (already captured clean high-resolution hero screenshot).

2. **Main Page Integration (`index.html`)**:
   - Add a new `<article>` work item at the top of `#work-list`.
   - Category: `data-category="live"`
   - Badge: `LIVE` (styled with `bg-accent-emerald/10 text-accent-emerald`)
   - Title: `Satukos`
   - Description: Web-based SaaS platform to manage boarding house operations, featuring automated WhatsApp billing, instant QRIS payments, QR door check-in, and real-time financial reporting.
   - Tags: `SaaS Platform`, `Tailwind CSS`, `QRIS & WhatsApp`
   - Image: `assets/satukos-screenshot.png`
   - Link: `projects/satukos.html`

3. **Project Detail Page (`projects/satukos.html`)**:
   - Follow the structure of existing project pages like `projects/texty.html`.
   - Include Header, Badges, Tagline, Call-to-Action button ("Visit Satukos" linking to `https://satukos.com`).
   - Image Showcase displaying `assets/satukos-screenshot.png`.
   - **Problem**: Manual record-keeping, delayed rent collection, manual payment reconciliation via bank transfers and WhatsApp screenshots.
   - **What I Built / Solution**: All-in-one SaaS platform enabling automated WhatsApp billing, QR code check-ins, instant QRIS payments with automatic reconciliation, and real-time multi-property occupancy dashboards.
   - **Key Features Checklist**:
     - Automated WhatsApp invoice reminders & notifications
     - Instant QRIS payment gateway integration with auto-reconciliation
     - QR door check-in & room detail access
     - Multi-property dashboard, occupancy rates, financial reporting & room layouts
   - **The Result**: Production-ready SaaS platform actively operating live at `satukos.com`, simplifying property management for owners and tenants.
   - **Stack**: Web SaaS Platform, Tailwind CSS, QRIS Payment Gateway, WhatsApp API.

4. **Localization (`js/i18n.js`)**:
   - Add i18n keys for both English (`en`) and Indonesian (`id`):
     - `work.satukos.title`, `work.satukos.badge`, `work.satukos.desc`, `work.satukos.tag1`, `work.satukos.tag2`, `work.satukos.tag3`, `work.satukos.img`
     - `satukos.title`, `satukos.tagline`, `satukos.problem`, `satukos.built`, `satukos.li1`, `satukos.li2`, `satukos.li3`, `satukos.li4`, `satukos.result`

5. **Rationale Documentation (`SELECTED_PROJECTS.md`)**:
   - Document Satukos as a top-tier `LIVE` project in `SELECTED_PROJECTS.md`.

## Spec Self-Review
- [x] No placeholders or TODOs
- [x] Precise file mappings and i18n structure
- [x] Consistent formatting with current portfolio standards
