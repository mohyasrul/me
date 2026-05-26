/**
 * Algorhytme i18n — English / Bahasa Indonesia
 * v2.1
 */
(function () {
  'use strict';

  const LANG_KEY = 'algorhytme-lang';

  const t = {
    en: {
      // ── NAV ──
      'nav.work': 'Work',
      'nav.resume': 'Resume',
      'nav.writing': 'Writing',
      'nav.contact': 'Contact',
      'nav.cta': 'Start a project',
      'nav.skip': 'Skip to content',
      'nav.aria': 'Main navigation',
      'nav.mobile': 'Open navigation menu',

      // ── HERO ──
      'hero.badge': 'INFORMATICS &middot; PRODUCT BUILDER',
      'hero.headline': 'I build things<br class="hidden sm:block">people actually<br class="hidden sm:block">use.',
      'hero.sub': 'Solo builder. I ship practical tools — from Chrome Extensions to full marketplace platforms.',
      'hero.cta1': 'See my work',
      'hero.cta2': 'Chat di WhatsApp',
      'hero.trust1': 'Chrome Web Store',
      'hero.trust2': '4 PROJECTS SHIPPED',
      'hero.trust3': 'BASED IN INDONESIA',
      'hero.trust4': '2024 — 2026',
      'hero.img1': 'Texty Chrome Extension — text expander popup showing shortcuts',
      'hero.img2': 'Texty Chrome Extension — main interface',

      // ── ABOUT ──
      'about.label': 'ABOUT',
      'about.p1': 'I&rsquo;m a final-year Informatics student who treats building as a craft. I&rsquo;ve shipped a <strong class="text-text-primary font-medium">published Chrome extension</strong>, delivered <strong class="text-text-primary font-medium">production software to paying clients</strong>, and built <strong class="text-text-primary font-medium">complex internal systems</strong>.',
      'about.p2': 'I move fast with modern tools and AI assistance, but I care deeply about clarity, maintainability, and real utility — not just writing code that looks good on GitHub.',

      // ── WORK ──
      'work.label': 'SELECTED WORK',
      'work.heading': 'Things I&rsquo;ve shipped',
      'work.filter.all': 'All',
      'work.filter.live': 'Live',
      'work.filter.client': 'Client',
      'work.filter.casestudy': 'Case Study',
      'work.filter.aria': 'Filter projects',

      // Texty card
      'work.texty.title': 'Texty',
      'work.texty.badge': 'LIVE',
      'work.texty.desc': 'A pragmatic text expander Chrome extension for freelancers, support teams, and power users. Published on the Chrome Web Store with a full marketing site and license system.',
      'work.texty.tag1': 'Chrome Extension',
      'work.texty.tag2': 'Next.js + Supabase',
      'work.texty.tag3': 'LemonSqueezy',
      'work.texty.img': 'Texty Chrome Extension interface',

      // Game_trust card
      'work.gt.title': 'Game_trust',
      'work.gt.badge': 'CLIENT',
      'work.gt.desc': 'A complete secondary marketplace platform for in-game assets. Features offer system, order management, admin tools, financial reporting, and multi-role access. Delivered to a paying client.',
      'work.gt.tag1': 'Next.js 15',
      'work.gt.tag2': 'Supabase',
      'work.gt.tag3': 'Production',
      'work.gt.img': 'Game_trust admin dashboard',

      // MediSir card
      'work.medisir.title': 'MediSir POS',
      'work.medisir.badge': 'CASE STUDY',
      'work.medisir.desc': 'One of the most technically complete systems I&rsquo;ve built — a full pharmacy management SaaS with POS, multi-cashier, realtime inventory, prescriptions, and WhatsApp receipts. Advanced MVP paused due to healthcare regulations.',
      'work.medisir.tag1': 'React + TS',
      'work.medisir.tag2': 'Supabase Realtime',
      'work.medisir.tag3': 'Multi-tenant',
      'work.medisir.img': 'MediSir POS pharmacy management dashboard',

      // Jokskuy card
      'work.jokskuy.title': 'Jokskuy',
      'work.jokskuy.badge': 'FULL SYSTEM',
      'work.jokskuy.desc': 'Complete client and order management platform for an educational service operation. Real-time chat, payment proof verification, admin workflows, custom requests, and delivery tracking.',
      'work.jokskuy.tag1': 'React 19',
      'work.jokskuy.tag2': 'Supabase',
      'work.jokskuy.tag3': 'TanStack Query',
      'work.jokskuy.img': 'Jokskuy order management platform',

      // ── RESUME ──
      'resume.label': 'RESUME',
      'resume.name': 'Mohammad Yasrul',
      'resume.subtitle': 'Informatics Student &middot; Product Builder &middot; Indonesia',
      'resume.cv': 'Download CV',
      'resume.skills': 'Core Skills',
      'resume.offer': 'What I Can Build For You',
      'resume.offer1.title': 'Web Applications',
      'resume.offer1.desc': 'Full-stack apps with React, Next.js, and Supabase. From marketplaces to internal tools.',
      'resume.offer2.title': 'Chrome Extensions',
      'resume.offer2.desc': 'Published on Chrome Web Store. Manifest V3, TypeScript, with licensing & payments.',
      'resume.offer3.title': 'SaaS & Multi-tenant',
      'resume.offer3.desc': 'Multi-role access, realtime sync, financial reporting, admin dashboards.',
      'resume.offer4.title': 'Landing Pages & Websites',
      'resume.offer4.desc': 'Performance-optimized, SEO-ready, responsive. Built for conversion.',
      'resume.photo': 'Mohammad Yasrul profile photo',

      // ── APPROACH ──
      'approach.label': 'APPROACH',
      'approach.p1': 'I optimize for <strong class="text-text-primary font-medium">speed with taste</strong>. Modern tooling and AI let me move extremely fast, but I refuse to ship things that feel half-baked.',
      'approach.p2': 'I&rsquo;m honest about scope, trade-offs, and what&rsquo;s actually realistic. I&rsquo;d rather lose a project than overpromise and underdeliver.',
      'approach.p3': 'I build for the long term. Clean architecture and clear documentation matter — even on small projects.',

      // ── BLOG ──
      'blog.label': 'WRITING',
      'blog.heading': 'Thoughts on building',
      'blog.p1.date': 'May 2026',
      'blog.p1.title': 'Why I chose Supabase over Firebase for client projects',
      'blog.p1.desc': 'PostgreSQL, RLS, and realtime features make it a better fit for production systems that need relational data integrity.',
      'blog.p1.tag1': '#supabase',
      'blog.p1.tag2': '#architecture',
      'blog.p2.date': 'Apr 2026',
      'blog.p2.title': 'Building a Chrome Extension in 2026: What I learned from Texty',
      'blog.p2.desc': 'Manifest V3 constraints, Plasmo framework, and the reality of Chrome Web Store review process.',
      'blog.p2.tag1': '#chrome-extension',
      'blog.p2.tag2': '#plasmo',
      'blog.p3.date': 'Mar 2026',
      'blog.p3.title': 'When to pause a product: Lessons from MediSir',
      'blog.p3.desc': 'Building complex software is one thing. Navigating industry regulations is another. Knowing when to stop is a skill.',
      'blog.p3.tag1': '#product',
      'blog.p3.tag2': '#startup',

      // ── CONTACT ──
      'contact.label': 'LET&rsquo;S WORK',
      'contact.heading': 'Got a product idea? Let&rsquo;s talk.',
      'contact.sub': 'I&rsquo;m available for freelance projects and collaborations. Usually respond within a day.',
      'contact.wa': 'Chat on WhatsApp',
      'contact.wa.sub': '+62 818-0999-3513 &middot; Fastest response',
      'contact.email': 'Email',
      'contact.email.sub': 'admin@algorhytme.site',

      // ── FOOTER ──
      'footer.brand': 'Algorhytme',
      'footer.by': 'Built by Mohammad Yasrul',
      'footer.copyright': '&copy; 2024&ndash;2026 Algorhytme',

      // ── PROJECT PAGES ──
      'project.back': 'Back to work',
      'project.prev': 'Previous',
      'project.next': 'Next',
      'project.end': 'End of projects',
      'project.stack': 'Stack',
      'project.problem': 'The Problem',
      'project.built': 'What I Built',
      'project.result': 'The Result',
      'project.cta': 'Discuss your project on WhatsApp',
      'project.nav': 'Project navigation',

      // Texty page
      'texty.title': 'Texty',
      'texty.tagline': 'The pragmatic text expander for people who write the same things every day.',
      'texty.problem': 'Freelancers, customer support teams, and power users spend hours every week typing the same messages over and over — price quotes, FAQ answers, intro messages, payment instructions. Existing solutions were either too complex (full automation platforms), too limited (basic OS-level shortcuts), or too expensive for solo operators. There was no <strong class="text-text-primary font-medium">simple, fast text expander</strong> that just works in the browser.',
      'texty.built': 'Texty is a Chrome Extension that lets users define text shortcuts. Type <code class="font-mono text-sm bg-surface px-1.5 py-0.5 rounded text-text-primary">;;price</code> in any text field and it instantly expands into a full, professional reply.',
      'texty.li1': 'Full Manifest V3 extension with content scripts + service worker architecture',
      'texty.li2': 'Inline search with fuzzy matching, custom prefixes (<code class="font-mono text-xs bg-surface px-1 rounded">;;</code>), and undo support',
      'texty.li3': 'Complete marketing site with license key system (LemonSqueezy + Supabase)',
      'texty.li4': 'Built with Plasmo framework for faster development and better DX',
      'texty.li5': 'Import/export shortcuts, variable placeholders for dynamic content',
      'texty.result': 'Texty is <strong class="text-text-primary font-medium">published and live</strong> on the Chrome Web Store. It&rsquo;s the only project in the portfolio that&rsquo;s a real, packaged product anyone can install right now. This project proves I can ship end-to-end: browser extension development, payment integration, marketing site, and license management — all built and deployed solo.',
      'texty.cta.text': 'Tertarik dengan Chrome Extension atau tools serupa?',

      // Game_trust page
      'gt.title': 'Game_trust',
      'gt.tagline': 'A full secondary marketplace platform for in-game assets — trusted by a paying client.',
      'gt.badge': 'CLIENT DELIVERED',
      'gt.problem': 'Trading in-game assets (diamonds, items) is common in multiplayer games, but the process is entirely manual — Facebook groups, DM negotiations, and screenshot-based verification. This creates trust issues, no transaction records, and makes it impossible for the middleman to track profit and inventory. The client needed a <strong class="text-text-primary font-medium">structured platform</strong> that acts as a trusted middleman: buying from sellers at a lower price, selling to buyers at a higher price, with verified transactions and financial tracking.',
      'gt.built': 'A complete marketplace platform with two separate transaction flows and role-based access control.',
      'gt.li1': '<strong class="text-text-primary font-medium">Buy Flow:</strong> Admin lists diamonds for sale, buyers create orders, upload payment proof, receive merchant screenshots',
      'gt.li2': '<strong class="text-text-primary font-medium">Sell Flow:</strong> Sellers submit offers with inventory screenshots, admin negotiates via chat, verifies merchant screenshots with Player ID tracking',
      'gt.li3': 'Multi-role access: Buyer, Seller, and Admin dashboards with different permissions',
      'gt.li4': 'Real-time chat per transaction for price negotiation and instructions',
      'gt.li5': 'Financial dashboard: daily/monthly revenue, expenses, and profit tracking',
      'gt.li6': 'Voucher system, rating system, and comprehensive admin tools',
      'gt.result': 'Successfully <strong class="text-text-primary font-medium">delivered to a paying client</strong> and used in production. This was originally built in Laravel (v1), then re-architected in Next.js 15 (v2) with improved performance and developer experience. This is the most business-complex project in the portfolio.',
      'gt.cta.text': 'Butuh platform marketplace atau sistem internal untuk bisnis Anda?',
      'gt.img1': 'Game_trust admin dashboard overview',
      'gt.img2': 'Game_trust transaction management interface',

      // MediSir page
      'medisir.title': 'MediSir POS',
      'medisir.badge': 'TECHNICAL CASE STUDY',
      'medisir.tagline': 'Advanced pharmacy management SaaS — the most technically complete system I&rsquo;ve built.',
      'medisir.problem': 'Small and medium pharmacies in Indonesia still rely on manual record-keeping or outdated desktop software. They need a <strong class="text-text-primary font-medium">modern, cloud-based POS system</strong> that handles inventory, prescriptions, multi-cashier operations, and real-time sync — without expensive enterprise pricing.',
      'medisir.built': 'A production-grade SaaS with deep technical architecture that goes far beyond typical CRUD apps.',
      'medisir.result.heading': 'The Result &amp; Decision to Pause',
      'medisir.result': 'The advanced MVP was <strong class="text-text-primary font-medium">completed with production-grade architecture</strong> — fully functional and ready for deployment. However, development was paused before commercial launch due to <strong class="text-accent-amber">regulatory requirements</strong> in the Indonesian healthcare industry. This was not a technical failure — it was a <strong class="text-text-primary font-medium">strategic business decision</strong>. The codebase remains a strong foundation for pivoting into general retail and inventory management systems.',
      'medisir.cta.text': 'Butuh sistem POS atau inventory management yang serius?',
      'medisir.img': 'MediSir POS pharmacy management dashboard with inventory and sales',

      // Jokskuy page
      'jokskuy.title': 'Jokskuy',
      'jokskuy.badge': 'FULL SYSTEM',
      'jokskuy.tagline': 'Complete client and order management platform for an educational service operation.',
      'jokskuy.problem': 'An educational service operation was managing client orders through scattered WhatsApp chats, manual Google Sheets, and verbal coordination. This created bottlenecks: lost orders, unclear payment status, and no way to track delivery progress.',
      'jokskuy.built': 'A complete management system handling the full lifecycle of service orders — from custom requests to final delivery tracking.',
      'jokskuy.result': 'A <strong class="text-text-primary font-medium">complete, production-ready system</strong> that replaces scattered WhatsApp coordination with a structured platform. All stakeholders — clients, operators, and admins — have clear visibility into every order&rsquo;s status. Built with React 19 + Vite for fast development, Supabase for real-time features and auth, and TanStack Query for efficient server state management.',
      'jokskuy.cta.text': 'Butuh sistem manajemen order atau platform multi-user?',
      'jokskuy.img1': 'Jokskuy main dashboard interface',
      'jokskuy.img2': 'Jokskuy order management view',
    },

    id: {
      // ── NAV ──
      'nav.work': 'Karya',
      'nav.resume': 'Resume',
      'nav.writing': 'Tulisan',
      'nav.contact': 'Kontak',
      'nav.cta': 'Mulai proyek',
      'nav.skip': 'Langsung ke konten',
      'nav.aria': 'Navigasi utama',
      'nav.mobile': 'Buka menu navigasi',

      // ── HERO ──
      'hero.badge': 'INFORMATIKA &middot; PRODUCT BUILDER',
      'hero.headline': 'Saya bangun<br class="hidden sm:block">yang benar-benar<br class="hidden sm:block">dipakai orang.',
      'hero.sub': 'Solo builder. Saya kirim tools praktis — dari Chrome Extension sampai platform marketplace lengkap.',
      'hero.cta1': 'Lihat karya saya',
      'hero.cta2': 'Chat di WhatsApp',
      'hero.trust1': 'Chrome Web Store',
      'hero.trust2': '4 PROYEK DIKIRIM',
      'hero.trust3': 'BERBASIS DI INDONESIA',
      'hero.trust4': '2024 — 2026',
      'hero.img1': 'Texty Chrome Extension — popup pintasan teks',
      'hero.img2': 'Texty Chrome Extension — tampilan utama',

      // ── ABOUT ──
      'about.label': 'TENTANG',
      'about.p1': 'Saya mahasiswa Informatika tingkat akhir yang memperlakukan building sebagai sebuah kerajinan. Saya sudah merilis <strong class="text-text-primary font-medium">Chrome extension yang published</strong>, mengirimkan <strong class="text-text-primary font-medium">software produksi ke klien berbayar</strong>, dan membangun <strong class="text-text-primary font-medium">sistem internal yang kompleks</strong>.',
      'about.p2': 'Saya bergerak cepat dengan tools modern dan bantuan AI, tapi saya sangat peduli pada kejelasan, maintainability, dan utilitas nyata — bukan sekadar menulis kode yang terlihat bagus di GitHub.',

      // ── WORK ──
      'work.label': 'KARYA PILIHAN',
      'work.heading': 'Yang sudah saya kirim',
      'work.filter.all': 'Semua',
      'work.filter.live': 'Live',
      'work.filter.client': 'Klien',
      'work.filter.casestudy': 'Studi Kasus',
      'work.filter.aria': 'Filter proyek',

      // Texty card
      'work.texty.title': 'Texty',
      'work.texty.badge': 'LIVE',
      'work.texty.desc': 'Ekstensi Chrome text expander praktis untuk freelancer, tim support, dan power user. Terbit di Chrome Web Store dengan situs marketing dan sistem lisensi lengkap.',
      'work.texty.tag1': 'Chrome Extension',
      'work.texty.tag2': 'Next.js + Supabase',
      'work.texty.tag3': 'LemonSqueezy',
      'work.texty.img': 'Antarmuka Texty Chrome Extension',

      // Game_trust card
      'work.gt.title': 'Game_trust',
      'work.gt.badge': 'KLIEN',
      'work.gt.desc': 'Platform marketplace sekunder lengkap untuk aset in-game. Fitur sistem penawaran, manajemen order, tools admin, laporan keuangan, dan akses multi-peran. Dikirim ke klien berbayar.',
      'work.gt.tag1': 'Next.js 15',
      'work.gt.tag2': 'Supabase',
      'work.gt.tag3': 'Production',
      'work.gt.img': 'Dashboard admin Game_trust',

      // MediSir card
      'work.medisir.title': 'MediSir POS',
      'work.medisir.badge': 'STUDI KASUS',
      'work.medisir.desc': 'Salah satu sistem paling lengkap secara teknis yang pernah saya bangun — SaaS manajemen apotek lengkap dengan POS, multi-kasir, inventaris realtime, resep digital, dan struk WhatsApp. MVP lanjutan dijeda karena regulasi kesehatan.',
      'work.medisir.tag1': 'React + TS',
      'work.medisir.tag2': 'Supabase Realtime',
      'work.medisir.tag3': 'Multi-tenant',
      'work.medisir.img': 'Dashboard manajemen apotek MediSir POS',

      // Jokskuy card
      'work.jokskuy.title': 'Jokskuy',
      'work.jokskuy.badge': 'SISTEM LENGKAP',
      'work.jokskuy.desc': 'Platform manajemen klien dan order lengkap untuk operasi jasa pendidikan. Chat real-time, verifikasi bukti pembayaran, alur kerja admin, permintaan kustom, dan pelacakan pengiriman.',
      'work.jokskuy.tag1': 'React 19',
      'work.jokskuy.tag2': 'Supabase',
      'work.jokskuy.tag3': 'TanStack Query',
      'work.jokskuy.img': 'Platform manajemen order Jokskuy',

      // ── RESUME ──
      'resume.label': 'RESUME',
      'resume.name': 'Mohammad Yasrul',
      'resume.subtitle': 'Mahasiswa Informatika &middot; Product Builder &middot; Indonesia',
      'resume.cv': 'Unduh CV',
      'resume.skills': 'Keahlian Utama',
      'resume.offer': 'Yang Bisa Saya Bangun Untuk Anda',
      'resume.offer1.title': 'Aplikasi Web',
      'resume.offer1.desc': 'Aplikasi full-stack dengan React, Next.js, dan Supabase. Dari marketplace sampai tools internal.',
      'resume.offer2.title': 'Chrome Extension',
      'resume.offer2.desc': 'Terbit di Chrome Web Store. Manifest V3, TypeScript, dengan lisensi & pembayaran.',
      'resume.offer3.title': 'SaaS & Multi-tenant',
      'resume.offer3.desc': 'Akses multi-peran, sinkronisasi realtime, laporan keuangan, dashboard admin.',
      'resume.offer4.title': 'Landing Page & Website',
      'resume.offer4.desc': 'Optimasi performa, siap SEO, responsif. Dibangun untuk konversi.',
      'resume.photo': 'Foto profil Mohammad Yasrul',

      // ── APPROACH ──
      'approach.label': 'PENDEKATAN',
      'approach.p1': 'Saya mengoptimalkan <strong class="text-text-primary font-medium">kecepatan dengan selera</strong>. Tools modern dan AI membuat saya bergerak sangat cepat, tapi saya menolak mengirim sesuatu yang terasa setengah matang.',
      'approach.p2': 'Saya jujur tentang scope, trade-off, dan apa yang benar-benar realistis. Saya lebih memilih kehilangan proyek daripada overpromise dan underdeliver.',
      'approach.p3': 'Saya membangun untuk jangka panjang. Arsitektur bersih dan dokumentasi jelas itu penting — bahkan di proyek kecil sekalipun.',

      // ── BLOG ──
      'blog.label': 'TULISAN',
      'blog.heading': 'Pemikiran tentang building',
      'blog.p1.date': 'Mei 2026',
      'blog.p1.title': 'Kenapa saya memilih Supabase daripada Firebase untuk proyek klien',
      'blog.p1.desc': 'PostgreSQL, RLS, dan fitur realtime membuatnya lebih cocok untuk sistem produksi yang butuh integritas data relasional.',
      'blog.p1.tag1': '#supabase',
      'blog.p1.tag2': '#arsitektur',
      'blog.p2.date': 'Apr 2026',
      'blog.p2.title': 'Membangun Chrome Extension di 2026: Pelajaran dari Texty',
      'blog.p2.desc': 'Batasan Manifest V3, framework Plasmo, dan realitas proses review Chrome Web Store.',
      'blog.p2.tag1': '#chrome-extension',
      'blog.p2.tag2': '#plasmo',
      'blog.p3.date': 'Mar 2026',
      'blog.p3.title': 'Kapan harus menjeda produk: Pelajaran dari MediSir',
      'blog.p3.desc': 'Membangun software kompleks itu satu hal. Menavigasi regulasi industri adalah hal lain. Tahu kapan harus berhenti adalah keahlian tersendiri.',
      'blog.p3.tag1': '#produk',
      'blog.p3.tag2': '#startup',

      // ── CONTACT ──
      'contact.label': 'AYO KERJA',
      'contact.heading': 'Punya ide produk? Mari ngobrol.',
      'contact.sub': 'Saya tersedia untuk proyek freelance dan kolaborasi. Biasanya merespon dalam sehari.',
      'contact.wa': 'Chat di WhatsApp',
      'contact.wa.sub': '+62 818-0999-3513 &middot; Respons tercepat',
      'contact.email': 'Email',
      'contact.email.sub': 'admin@algorhytme.site',

      // ── FOOTER ──
      'footer.brand': 'Algorhytme',
      'footer.by': 'Dibangun oleh Mohammad Yasrul',
      'footer.copyright': '&copy; 2024&ndash;2026 Algorhytme',

      // ── PROJECT PAGES ──
      'project.back': 'Kembali ke karya',
      'project.prev': 'Sebelumnya',
      'project.next': 'Berikutnya',
      'project.end': 'Akhir proyek',
      'project.stack': 'Stack',
      'project.problem': 'Masalah',
      'project.built': 'Yang Saya Bangun',
      'project.result': 'Hasil',
      'project.cta': 'Diskusikan proyek Anda di WhatsApp',
      'project.nav': 'Navigasi proyek',

      // Texty page
      'texty.title': 'Texty',
      'texty.tagline': 'Text expander praktis untuk orang yang mengetik hal yang sama setiap hari.',
      'texty.problem': 'Freelancer, tim customer support, dan power user menghabiskan berjam-jam setiap minggu mengetik pesan yang sama berulang-ulang — kutipan harga, jawaban FAQ, pesan perkenalan, instruksi pembayaran. Solusi yang ada terlalu kompleks (platform otomatisasi penuh), terlalu terbatas (shortcut OS dasar), atau terlalu mahal untuk operator solo. Tidak ada <strong class="text-text-primary font-medium">text expander simpel dan cepat</strong> yang langsung bekerja di browser.',
      'texty.built': 'Texty adalah Chrome Extension yang memungkinkan pengguna membuat pintasan teks. Ketik <code class="font-mono text-sm bg-surface px-1.5 py-0.5 rounded text-text-primary">;;harga</code> di kolom teks apa pun dan langsung meluas menjadi balasan profesional yang lengkap.',
      'texty.li1': 'Ekstensi Manifest V3 lengkap dengan arsitektur content scripts + service worker',
      'texty.li2': 'Pencarian inline dengan fuzzy matching, prefix kustom (<code class="font-mono text-xs bg-surface px-1 rounded">;;</code>), dan dukungan undo',
      'texty.li3': 'Situs marketing lengkap dengan sistem lisensi (LemonSqueezy + Supabase)',
      'texty.li4': 'Dibangun dengan framework Plasmo untuk pengembangan lebih cepat dan DX lebih baik',
      'texty.li5': 'Import/export pintasan, placeholder variabel untuk konten dinamis',
      'texty.result': 'Texty <strong class="text-text-primary font-medium">sudah terbit dan live</strong> di Chrome Web Store. Ini satu-satunya proyek di portfolio yang merupakan produk nyata yang bisa diinstal siapa saja saat ini. Proyek ini membuktikan saya bisa mengirim end-to-end: pengembangan ekstensi browser, integrasi pembayaran, situs marketing, dan manajemen lisensi — semua dibangun dan dideploy solo.',
      'texty.cta.text': 'Tertarik dengan Chrome Extension atau tools serupa?',

      // Game_trust page
      'gt.title': 'Game_trust',
      'gt.tagline': 'Platform marketplace sekunder lengkap untuk aset in-game — dipercaya oleh klien berbayar.',
      'gt.badge': 'KLIEN — DIKIRIM',
      'gt.problem': 'Perdagangan aset in-game (diamond, item) umum terjadi di game multiplayer, tapi prosesnya sepenuhnya manual — grup Facebook, negosiasi DM, dan verifikasi berbasis screenshot. Ini menciptakan masalah kepercayaan, tidak ada catatan transaksi, dan membuat penampung tidak bisa melacak profit dan inventaris. Klien membutuhkan <strong class="text-text-primary font-medium">platform terstruktur</strong> yang bertindak sebagai penampung terpercaya: membeli dari penjual dengan harga lebih rendah, menjual ke pembeli dengan harga lebih tinggi, dengan transaksi terverifikasi dan pelacakan keuangan.',
      'gt.built': 'Platform marketplace lengkap dengan dua alur transaksi terpisah dan kontrol akses berbasis peran.',
      'gt.li1': '<strong class="text-text-primary font-medium">Alur Beli:</strong> Admin mendaftarkan diamond untuk dijual, pembeli membuat order, upload bukti pembayaran, menerima screenshot merchant',
      'gt.li2': '<strong class="text-text-primary font-medium">Alur Jual:</strong> Penjual mengirim penawaran dengan screenshot inventaris, admin bernegosiasi via chat, verifikasi screenshot merchant dengan pencatatan Player ID',
      'gt.li3': 'Akses multi-peran: Dashboard Pembeli, Penjual, dan Admin dengan izin berbeda',
      'gt.li4': 'Chat real-time per transaksi untuk negosiasi harga dan instruksi',
      'gt.li5': 'Dashboard keuangan: pendapatan harian/bulanan, pengeluaran, dan pelacakan profit',
      'gt.li6': 'Sistem voucher, sistem rating, dan tools admin komprehensif',
      'gt.result': 'Berhasil <strong class="text-text-primary font-medium">dikirim ke klien berbayar</strong> dan digunakan dalam produksi. Awalnya dibangun di Laravel (v1), lalu diarsitektur ulang di Next.js 15 (v2) dengan performa dan developer experience yang lebih baik. Ini adalah proyek paling kompleks secara bisnis di portfolio.',
      'gt.cta.text': 'Butuh platform marketplace atau sistem internal untuk bisnis Anda?',
      'gt.img1': 'Tampilan dashboard admin Game_trust',
      'gt.img2': 'Antarmuka manajemen transaksi Game_trust',

      // MediSir page
      'medisir.title': 'MediSir POS',
      'medisir.badge': 'STUDI KASUS TEKNIS',
      'medisir.tagline': 'SaaS manajemen apotek canggih — sistem paling lengkap secara teknis yang pernah saya bangun.',
      'medisir.problem': 'Apotek kecil dan menengah di Indonesia masih mengandalkan pencatatan manual atau software desktop usang. Mereka butuh <strong class="text-text-primary font-medium">sistem POS modern berbasis cloud</strong> yang menangani inventaris, resep, operasi multi-kasir, dan sinkronisasi real-time — tanpa harga enterprise yang mahal.',
      'medisir.built': 'SaaS production-grade dengan arsitektur teknis mendalam yang jauh melampaui aplikasi CRUD biasa.',
      'medisir.result.heading': 'Hasil & Keputusan untuk Menjeda',
      'medisir.result': 'MVP lanjutan <strong class="text-text-primary font-medium">selesai dengan arsitektur production-grade</strong> — berfungsi penuh dan siap deploy. Namun, pengembangan dijeda sebelum peluncuran komersial karena <strong class="text-accent-amber">persyaratan regulasi</strong> di industri kesehatan Indonesia. Ini bukan kegagalan teknis — ini adalah <strong class="text-text-primary font-medium">keputusan bisnis strategis</strong>. Codebase tetap menjadi fondasi kuat untuk pivot ke sistem manajemen retail dan inventaris umum.',
      'medisir.cta.text': 'Butuh sistem POS atau inventory management yang serius?',
      'medisir.img': 'Dashboard manajemen apotek MediSir POS dengan inventaris dan penjualan',

      // Jokskuy page
      'jokskuy.title': 'Jokskuy',
      'jokskuy.badge': 'SISTEM LENGKAP',
      'jokskuy.tagline': 'Platform manajemen klien dan order lengkap untuk operasi jasa pendidikan.',
      'jokskuy.problem': 'Sebuah operasi jasa pendidikan mengelola order klien melalui chat WhatsApp yang tersebar, Google Sheets manual, dan koordinasi lisan. Ini menciptakan bottleneck: order hilang, status pembayaran tidak jelas, dan tidak ada cara untuk melacak progres pengiriman.',
      'jokskuy.built': 'Sistem manajemen lengkap yang menangani siklus hidup penuh order jasa — dari permintaan kustom hingga pelacakan pengiriman akhir.',
      'jokskuy.result': '<strong class="text-text-primary font-medium">Sistem production-ready yang lengkap</strong> menggantikan koordinasi WhatsApp yang tersebar dengan platform terstruktur. Semua pemangku kepentingan — klien, operator, dan admin — memiliki visibilitas jelas ke status setiap order. Dibangun dengan React 19 + Vite untuk pengembangan cepat, Supabase untuk fitur real-time dan auth, serta TanStack Query untuk manajemen state server yang efisien.',
      'jokskuy.cta.text': 'Butuh sistem manajemen order atau platform multi-user?',
      'jokskuy.img1': 'Antarmuka dashboard utama Jokskuy',
      'jokskuy.img2': 'Tampilan manajemen order Jokskuy',
    }
  };

  // ── INIT ──
  function getLang() {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === 'id' || stored === 'en') return stored;
    // Default: browser language
    const browserLang = navigator.language || navigator.userLanguage || '';
    return browserLang.startsWith('id') ? 'id' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
    updateToggle(lang);
  }

  function applyLang(lang) {
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
    const dict = t[lang];

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update attributes (placeholder, aria-label, alt, title)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrStr = el.getAttribute('data-i18n-attr');
      const key = el.getAttribute('data-i18n');
      if (!key || !attrStr || dict[key] === undefined) return;
      const attrs = attrStr.split(',');
      attrs.forEach(attr => {
        el.setAttribute(attr.trim(), stripHtml(dict[key]));
      });
    });
  }

  function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  function updateToggle(lang) {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      const target = btn.getAttribute('data-lang');
      btn.classList.toggle('lang-active', target === lang);
      btn.classList.toggle('text-text-primary', target === lang);
      btn.classList.toggle('font-medium', target === lang);
      btn.classList.toggle('text-text-muted', target !== lang);
      btn.setAttribute('aria-pressed', target === lang ? 'true' : 'false');
    });
  }

  // ── BOOT ──
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();

    // Apply translations immediately
    applyLang(lang);
    updateToggle(lang);

    // Click handlers
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = btn.getAttribute('data-lang');
        if (targetLang) setLang(targetLang);
      });
    });
  });

})();