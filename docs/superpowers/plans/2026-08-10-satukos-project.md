# Satukos Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the live project **Satukos** (`https://satukos.com`) to the developer's web portfolio, including main page card, project detail page, localization, and project selection documentation.

**Architecture:** Create a new standalone project page (`projects/satukos.html`) following existing project templates (`texty.html`), update `index.html` with a new `data-category="live"` work card, add full `en` and `id` translations in `js/i18n.js`, and document the project rationale in `SELECTED_PROJECTS.md`.

**Tech Stack:** HTML5, Tailwind CSS, Vanilla JS (i18n switcher & reveal animations), Node.js build scripts.

## Global Constraints

- Preserve all existing styles, accessibility attributes (`data-i18n`, `data-i18n-attr`), and layout structure.
- All text additions must have full bilingual support (`en` and `id`) in `js/i18n.js`.
- Use asset `assets/satukos-screenshot.png`.

---

### Task 1: Create `projects/satukos.html` Detail Page

**Files:**
- Create: `projects/satukos.html`

**Interfaces:**
- Consumes: `assets/satukos-screenshot.png`, `dist/style.css`, `js/i18n.js`
- Produces: Web page accessible at `projects/satukos.html`

- [ ] **Step 1: Create `projects/satukos.html` with full semantic layout and i18n attributes**

Write `projects/satukos.html` following the exact structure of `projects/texty.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Satukos — Algorhytme</title>
    <meta name="description" content="Satukos: Boarding House Management SaaS Platform. Automated WhatsApp billing, instant QRIS payments, QR door check-in, real-time occupancy.">
    <meta property="og:title" content="Satukos — Boarding House Management SaaS by Mohammad Yasrul">
    <meta property="og:description" content="A complete web SaaS platform for boarding house owners. QR check-in, automated WhatsApp invoices, and QRIS instant reconciliation.">
    <meta property="og:image" content="../assets/satukos-screenshot.png">
    <meta property="og:type" content="article">
    <link rel="icon" type="image/jpeg" href="../assets/logo-algorhytme.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../dist/style.css">
    <style>body{background:#080808;color:#d4d4d4;font-family:'Inter',sans-serif;}</style>
</head>
<body class="bg-canvas text-text-body font-body">

    <a href="#main" class="skip-link" data-i18n="nav.skip">Skip to content</a>

    <main id="main">
        <div class="max-w-[960px] mx-auto px-4 sm:px-8 py-12 sm:py-16">

            <!-- Top Bar: Back + Lang Toggle -->
            <div class="flex items-center justify-between mb-12">
                <a href="../index.html" class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors group" data-i18n="project.back">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform group-hover:-translate-x-0.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    <span data-i18n="project.back">Back to work</span>
                </a>
                <div class="flex items-center gap-x-0.5 text-xs border border-white/10 rounded-lg overflow-hidden">
                    <button class="lang-toggle px-2.5 py-1.5 transition-colors" data-lang="en" aria-pressed="true">EN</button>
                    <button class="lang-toggle px-2.5 py-1.5 transition-colors" data-lang="id" aria-pressed="false">ID</button>
                </div>
            </div>

            <!-- Header -->
            <div class="reveal">
                <div class="flex flex-wrap items-center gap-3 mb-4">
                    <h1 class="heading text-h1 text-text-primary" data-i18n="satukos.title">Satukos</h1>
                    <span class="px-3 py-0.5 text-[10px] font-semibold tracking-widest bg-accent-emerald/10 text-accent-emerald rounded-full">LIVE</span>
                </div>
                <p class="text-xl sm:text-2xl text-text-muted max-w-xl" data-i18n="satukos.tagline">One application, unlimited boarding house management.</p>
            </div>

            <div class="reveal reveal-delay-1 flex flex-wrap gap-3 mt-8">
                <a href="https://satukos.com" target="_blank" rel="noopener" class="refined-button inline-flex items-center gap-2 px-6 py-3 bg-cta-bg text-cta-text rounded-button text-sm font-medium hover:bg-cta-hover">
                    <span>Visit Satukos.com</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                </a>
            </div>

            <div class="reveal reveal-delay-2 mt-12">
                <div class="rounded-2xl overflow-hidden border border-border-subtle bg-surface">
                    <img src="../assets/satukos-screenshot.png" alt="Satukos management platform interface" class="w-full" width="1200" height="675" loading="lazy" decoding="async">
                </div>
            </div>

            <div class="reveal mt-14 max-w-3xl">
                <section class="mb-10">
                    <h2 class="text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-4" data-i18n="project.problem">The Problem</h2>
                    <div class="text-text-muted body-text space-y-3" data-i18n="satukos.problem">
                        <p>Managing boarding houses (kos) manually involves tedious bookkeeping, manual WhatsApp payment reminders, delayed rent collection, and time-consuming bank statement checking. Property owners waste dozens of hours every month trying to track tenant status across spreadsheets and chat histories.</p>
                    </div>
                </section>

                <section class="mb-10">
                    <h2 class="text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-4" data-i18n="project.built">What I Built</h2>
                    <div class="text-text-muted body-text space-y-3" data-i18n="satukos.built">
                        <p>Satukos is a modern, web-based SaaS platform that automates the entire boarding house management lifecycle into a single centralized dashboard.</p>
                    </div>
                    <ul class="mt-4 space-y-2.5 text-text-muted text-sm">
                        <li class="flex items-start gap-2"><span class="text-accent-emerald mt-1">&#10003;</span><span data-i18n="satukos.li1">Automated WhatsApp bill dispatching with instant payment links for tenants</span></li>
                        <li class="flex items-start gap-2"><span class="text-accent-emerald mt-1">&#10003;</span><span data-i18n="satukos.li2">Instant QRIS payment gateway with automatic room status reconciliation</span></li>
                        <li class="flex items-start gap-2"><span class="text-accent-emerald mt-1">&#10003;</span><span data-i18n="satukos.li3">QR code door scan for digital check-in and quick tenant access</span></li>
                        <li class="flex items-start gap-2"><span class="text-accent-emerald mt-1">&#10003;</span><span data-i18n="satukos.li4">Multi-property dashboard tracking occupancy rates, pending bills, and financial reports</span></li>
                    </ul>
                </section>

                <section>
                    <h2 class="text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-4" data-i18n="project.result">The Result</h2>
                    <div class="text-text-muted body-text space-y-3" data-i18n="satukos.result">
                        <p>Satukos is live and accessible at <strong class="text-text-primary font-medium">satukos.com</strong>. It eliminates manual rent chasing and provides boarding house owners with a hands-free, automated operations hub.</p>
                    </div>
                </section>
            </div>

            <div class="reveal mt-12 pt-10 border-t border-border-subtle">
                <h2 class="text-xs font-semibold tracking-[0.15em] uppercase text-text-muted mb-4" data-i18n="project.stack">Stack</h2>
                <div class="flex flex-wrap gap-2 text-sm">
                    <span class="px-3 py-1.5 bg-surface border border-border-subtle rounded-lg text-text-muted">Web SaaS Platform</span>
                    <span class="px-3 py-1.5 bg-surface border border-border-subtle rounded-lg text-text-muted">Tailwind CSS</span>
                    <span class="px-3 py-1.5 bg-surface border border-border-subtle rounded-lg text-text-muted">QRIS Payment Gateway</span>
                    <span class="px-3 py-1.5 bg-surface border border-border-subtle rounded-lg text-text-muted">WhatsApp API</span>
                </div>
            </div>

            <!-- Footer -->
            <footer class="mt-20 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-y-4">
                <span>&copy; 2026 Mohammad Yasrul. Built with purpose.</span>
                <a href="../index.html" class="hover:text-text-primary transition-colors" data-i18n="project.back">Back to work</a>
            </footer>

        </div>
    </main>

    <script src="../js/i18n.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    </script>
</body>
</html>
```

- [ ] **Step 2: Commit `projects/satukos.html`**

```bash
git add projects/satukos.html
git commit -m "feat: add Satukos project detail page"
```

---

### Task 2: Add Satukos Card to `index.html`

**Files:**
- Modify: `index.html:187-190`

- [ ] **Step 1: Update `index.html` under `#work-list`**

Insert the Satukos `<article>` as the very first item in `#work-list`:
```html
                <!-- Satukos -->
                <article class="work-item reveal group block bg-surface border border-border-subtle rounded-card p-6 sm:p-10 hover:border-border-hover" data-category="live">
                    <a href="projects/satukos.html" class="block">
                        <div class="grid md:grid-cols-12 gap-x-8 gap-y-8 items-center">
                            <div class="md:col-span-7">
                                <div class="flex items-center gap-x-3 mb-4">
                                    <h3 class="heading text-h3 text-text-primary" data-i18n="work.satukos.title">Satukos</h3>
                                    <span class="px-3 py-0.5 text-[10px] font-semibold tracking-widest bg-accent-emerald/10 text-accent-emerald rounded-full" data-i18n="work.satukos.badge">LIVE</span>
                                </div>
                                <p class="text-text-muted text-base sm:text-lg pr-4 body-text" data-i18n="work.satukos.desc">A web-based SaaS platform to manage boarding house operations. Features automated WhatsApp billing, instant QRIS payments, QR door check-in, and real-time financial reporting.</p>
                                <div class="mt-6 flex flex-wrap items-center gap-2 text-xs">
                                    <span class="px-3 py-1 bg-white/5 rounded-2xl text-text-muted" data-i18n="work.satukos.tag1">SaaS Platform</span>
                                    <span class="px-3 py-1 bg-white/5 rounded-2xl text-text-muted" data-i18n="work.satukos.tag2">Tailwind CSS</span>
                                    <span class="px-3 py-1 bg-white/5 rounded-2xl text-text-muted" data-i18n="work.satukos.tag3">QRIS &amp; WhatsApp</span>
                                </div>
                            </div>
                            <div class="md:col-span-5">
                                <div class="overflow-hidden rounded-2xl border border-border-subtle">
                                    <img src="assets/satukos-screenshot.png" data-i18n-attr="alt" data-i18n="work.satukos.img" alt="Satukos boarding house management dashboard" class="project-image w-full" width="600" height="400" loading="lazy" decoding="async">
                                </div>
                            </div>
                        </div>
                    </a>
                </article>
```

- [ ] **Step 2: Commit `index.html` update**

```bash
git add index.html
git commit -m "feat: add Satukos work item card to index.html"
```

---

### Task 3: Add Localization Translations in `js/i18n.js`

**Files:**
- Modify: `js/i18n.js`

- [ ] **Step 1: Add Satukos dictionary entries for `en` and `id` in `js/i18n.js`**

Under the `en` object (work section):
```javascript
      'work.satukos.title': 'Satukos',
      'work.satukos.badge': 'LIVE',
      'work.satukos.desc': 'A web-based SaaS platform to manage boarding house operations. Features automated WhatsApp billing, instant QRIS payments, QR door check-in, and real-time financial reporting.',
      'work.satukos.tag1': 'SaaS Platform',
      'work.satukos.tag2': 'Tailwind CSS',
      'work.satukos.tag3': 'QRIS & WhatsApp',
      'work.satukos.img': 'Satukos boarding house management dashboard',
      'satukos.title': 'Satukos',
      'satukos.tagline': 'One application, unlimited boarding house management.',
      'satukos.problem': '<p>Managing boarding houses (kos) manually involves tedious bookkeeping, manual WhatsApp payment reminders, delayed rent collection, and time-consuming bank statement checking. Property owners waste dozens of hours every month trying to track tenant status across spreadsheets and chat histories.</p>',
      'satukos.built': '<p>Satukos is a modern, web-based SaaS platform that automates the entire boarding house management lifecycle into a single centralized dashboard.</p>',
      'satukos.li1': 'Automated WhatsApp bill dispatching with instant payment links for tenants',
      'satukos.li2': 'Instant QRIS payment gateway with automatic room status reconciliation',
      'satukos.li3': 'QR code door scan for digital check-in and quick tenant access',
      'satukos.li4': 'Multi-property dashboard tracking occupancy rates, pending bills, and financial reports',
      'satukos.result': '<p>Satukos is live and accessible at <strong class="text-text-primary font-medium">satukos.com</strong>. It eliminates manual rent chasing and provides boarding house owners with a hands-free, automated operations hub.</p>',
```

Under the `id` object (work section):
```javascript
      'work.satukos.title': 'Satukos',
      'work.satukos.badge': 'LIVE',
      'work.satukos.desc': 'Platform SaaS berbasis web untuk mengelola operasional kos-kosan. Dilengkapi tagihan WhatsApp otomatis, pembayaran QRIS instan, scan QR pintu kamar, dan laporan keuangan realtime.',
      'work.satukos.tag1': 'SaaS Platform',
      'work.satukos.tag2': 'Tailwind CSS',
      'work.satukos.tag3': 'QRIS & WhatsApp',
      'work.satukos.img': 'Dashboard manajemen kos Satukos',
      'satukos.title': 'Satukos',
      'satukos.tagline': 'Satu Aplikasi, Kelola Kos Tanpa Batas.',
      'satukos.problem': '<p>Mengelola bisnis kos secara manual membutuhkan pembukuan rumit, pengingat tagihan WhatsApp satu-per-satu, risiko keterlambatan bayar, serta pengecekan mutasi bank manual. Pemilik kos menghabiskan puluhan jam setiap bulan hanya untuk memantau status penyewa lewat tabel dan pesan chat.</p>',
      'satukos.built': '<p>Satukos adalah platform SaaS modern berbasis web yang mengotomatiskan seluruh siklus manajemen kos dalam satu dashboard terpusat.</p>',
      'satukos.li1': 'Pengiriman tagihan otomatis via WhatsApp dilengkapi link pembayaran instan untuk penyewa',
      'satukos.li2': 'Integrasi payment gateway QRIS instan dengan rekonsiliasi status kamar otomatis',
      'satukos.li3': 'Scan QR di pintu kamar untuk check-in digital dan akses informasi kamar',
      'satukos.li4': 'Dashboard multi-properti untuk memantau tingkat hunian, tagihan pending, dan laporan keuangan',
      'satukos.result': '<p>Satukos sudah aktif dan dapat diakses publik di <strong class="text-text-primary font-medium">satukos.com</strong>. Aplikasi ini memangkas proses penagihan manual dan memberikan pusat kontrol operasional yang serba otomatis bagi pemilik kos.</p>',
```

- [ ] **Step 2: Commit `js/i18n.js` update**

```bash
git add js/i18n.js
git commit -m "feat: add Satukos i18n translations for en and id"
```

---

### Task 4: Update `SELECTED_PROJECTS.md` Rationale Document

**Files:**
- Modify: `SELECTED_PROJECTS.md`

- [ ] **Step 1: Add Satukos section to `SELECTED_PROJECTS.md`**

Insert Satukos as entry #1 under Selected Projects (shifting Texty, Game_trust, etc.):
```markdown
## 1. Satukos (Boarding House Management SaaS)

**Status**: Published & Live at satukos.com  
**Kategori**: Real shipped product / SaaS

**Alasan dimasukkan:**
- Produk SaaS live yang menyelesaikan masalah nyata operasional kos-kosan di Indonesia.
- Mengintegrasikan sistem pembayaran instan (QRIS) dengan rekonsiliasi otomatis status kamar.
- Fitur penagihan otomatis via WhatsApp API dan check-in digital via QR code.
- Menunjukkan kemampuan membangun aplikasi manajemen bisnis berbasis web dengan UI/UX yang modern dan scalable.
```

- [ ] **Step 2: Commit `SELECTED_PROJECTS.md` update**

```bash
git add SELECTED_PROJECTS.md
git commit -m "docs: update SELECTED_PROJECTS.md with Satukos entry"
```

---

### Task 5: Build and Verification

**Files:**
- Output: `dist/style.css`

- [ ] **Step 1: Run Tailwind CSS build**

Run: `npm run build:css`
Expected: Successfully generates updated CSS in `dist/style.css`

- [ ] **Step 2: Verify HTML page links & i18n rendering**

Open `index.html` in browser or verify DOM structure to confirm Satukos card renders, links to `projects/satukos.html`, and language switcher toggles between EN and ID correctly.

- [ ] **Step 3: Commit final build outputs**

```bash
git add dist/
git commit -m "build: compile assets for Satukos portfolio update"
```
