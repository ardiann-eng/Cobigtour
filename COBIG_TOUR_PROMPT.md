# Cobig Tour — Landing Page Build Brief

You are building a **premium, editorial, mobile-first landing page** for **Cobig Tour**, an Indonesian Umroh & Haji Khusus travel agency in Makassar. Output: a single `index.html` file using **Tailwind CSS (CDN) + vanilla JS**. No framework, no build step. All visible copy in **Bahasa Indonesia**. All code/comments in English.

The goal is conversion via WhatsApp consultation and a registration form, but the *vibe* is editorial luxury — think Aesop, Apple product pages, Monocle magazine — not "another AI-generated travel template."

---

## CRITICAL — Read This First (Anti-Generic Mandate)

This page must NOT look like a generic AI-generated template. The default LLM aesthetic is the failure mode. Actively avoid:

### Visual anti-patterns (do not do)
- **No emojis anywhere in UI** — not in buttons, headings, badges, lists, callouts, or labels. Zero. Use Lucide line icons (1.5px stroke) instead.
- **No rainbow gradients, no purple/cyan/pink** — palette is strictly navy / gold / cream / slate. Period.
- **No "fancy" multi-color shadows** — only one shadow style: large blur, low opacity, navy-tinted.
- **No center-stack everything** — alternate centered and asymmetric layouts. Section 2 (empathy) and Section 4 (value stack) must be asymmetric two-column. Hero is left-aligned text + right floating card.
- **No tiny cramped cards** — minimum internal card padding is 32px mobile, 48px desktop.
- **No 12 social-proof logos in a row** — airline strip uses 6 logos max, grayscale, evenly spaced with generous gap.
- **No bouncy entrance animations on every element** — fade-up only, 400ms, 60ms stagger, triggered once on scroll into view. No infinite floating, pulsing, or rotating decorations (except the WhatsApp FAB pulse, which is intentional).
- **No "Lorem ipsum"-style filler** — every sentence must serve the conversion goal.

### Copy anti-patterns (do not do)
- **No "✨ Connect with us!" / "Let's get started!" / generic CTA language** — every CTA is specific and Indonesian: "Konsultasi via WhatsApp", "Pilih Paket Ini", "Konfirmasi Transfer".
- **No "leverage / synergy / journey of a lifetime"** language — write like a respectful Indonesian travel consultant, not a SaaS landing page.
- **No exclamation marks more than once per section.**
- **No all-caps body text** — uppercase reserved for eyebrow labels (12px, tracked 0.15em).

### Breathing space mandate
- Section vertical padding: **120px mobile / 160px desktop** — this is non-negotiable. Sections must feel like rooms, not boxes.
- Headline → body gap: 32–40px (not 16px).
- Body paragraph max-width: **640px** for any text block (not full container width).
- Card internal padding: **40px** desktop, **32px** mobile.
- Between elements inside a card (image → title → body → CTA): minimum 24px gaps.
- Hero `min-height: 100vh` desktop, `min-height: 92vh` mobile — let it breathe.

### Editorial typography rules
- Hero headline: 56px mobile / 88px desktop, line-height 1.02, letter-spacing -0.025em — yes, that big.
- Section title: 32px mobile / 56px desktop, line-height 1.1.
- One italic accent allowed per section using `Cormorant Garamond italic` — used sparingly for eyebrow labels like "Bagian 02" or for a single emphasized phrase.
- Body: 16px mobile / 17px desktop, line-height **1.75** (not 1.5 — we want air).
- Numbers in prices use Montserrat with `font-feature-settings: 'tnum'` (tabular).

---

## 1. Brand & Business Context

| Field | Value |
|---|---|
| Legal entity | PT. Cobig Indonesia Kreatif |
| Brand name | Cobig Tour |
| Sub-brand line | Umroh dan Haji Khusus |
| Tagline | "Bimbingan Sesuai Al-Qur'an dan Sunnah" |
| Akreditasi | A (Kemenag RI) |
| Izin PPIU | No. 17012200308230005 |
| Alamat | Jl. Baji Gau No. 32i, Makassar, Sulawesi Selatan |
| Telepon / WA | 0811 44 66667 (use `62811446667` for `wa.me` links) |
| Email | cobigtour.travel@gmail.com |
| Instagram | @cobigtour |
| YouTube | @Cobigtourofficial |
| TikTok | @cobig_tour.official |

**Target audience:** Indonesian Muslims (primarily Sulawesi Selatan), age 30–60, willing to spend Rp 31–40jt for premium umroh. They value: kepastian, syariah-compliance, kenyamanan untuk lansia, transparansi harga. They are spiritually serious and suspicious of cheap-looking marketing.

---

## 2. Design System — "Celestial Pilgrimage"

### Tailwind Config Extension

Add to `<script>tailwind.config = { theme: { extend: { ... } } }</script>`:

```js
colors: {
  navy: {
    950: '#000615',
    900: '#000a1e',
    800: '#002147',   // primary brand
    700: '#0a2f5e',
    600: '#1a4275',
    100: '#e8edf4',
  },
  gold: {
    700: '#B8941F',
    500: '#D4AF37',   // primary accent
    400: '#E6B325',
    300: '#F0CC68',
    100: '#FBF3D9',
  },
  cream: '#F9F6F0',
  sand:  '#F3EEE3',
  slate: { 600: '#475569', 500: '#64748B', 400: '#94A3B8' },
},
fontFamily: {
  display: ['Montserrat', 'system-ui', 'sans-serif'],
  body:    ['Inter', 'system-ui', 'sans-serif'],
  serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
},
maxWidth: {
  prose: '640px',
  shell: '1280px',
},
boxShadow: {
  soft: '0 12px 40px -12px rgba(0, 33, 71, 0.10)',
  lift: '0 24px 60px -18px rgba(0, 33, 71, 0.18)',
},
```

Load fonts via Google Fonts:
```
Montserrat: 400, 500, 600, 700
Inter: 400, 500, 600
Cormorant Garamond: 400 italic, 500 italic
```

### Spacing & Radius

- Section vertical padding: `py-[120px] md:py-[160px]`
- Container: `max-w-shell mx-auto px-5 md:px-16`
- Radius: 4px (buttons, inputs), 12px (cards), 24px (hero card), 9999px (chips)

### Icon System — Lucide ONLY

Load via CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()` after DOM ready.

Use `<i data-lucide="check" class="w-5 h-5 stroke-[1.5]"></i>` pattern. Allowed icons in this project:

- `check` — for include lists (gold)
- `x` — for exclude lists (slate-400)
- `phone`, `mail`, `map-pin` — contact info
- `whatsapp` is not in Lucide → use a custom inline SVG (provided in Section 9)
- `chevron-down`, `chevron-right` — accordions, links
- `star` — ratings only
- `shield-check` — accreditation badge
- `plane` — airline / direct flight
- `building-2` — hotel
- `users` — group / jamaah count
- `book-open` — manasik
- `clock` — periode keberangkatan
- `menu`, `x` (close) — mobile nav

Stroke width: **always 1.5px**. Size: 16px (inline), 20px (list bullets), 24px (card icons), 32px (large feature icons). Never use Lucide icons with fill — line only.

### Geometric Watermark (subtle)

Use this 8-pointed-star SVG pattern at 3% opacity as background in specific sections (testimonials, value-stack, FAQ). Define as a CSS class:

```css
.pattern-khatam {
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 4 L48 24 L68 24 L52 38 L60 60 L40 48 L20 60 L28 38 L12 24 L32 24 Z' fill='none' stroke='%23002147' stroke-width='0.5' opacity='0.4'/%3E%3C/svg%3E");
  background-size: 120px 120px;
  opacity: 0.03;
}
```

---

## 3. Visual Direction

**Hero & Package showcase:** dark, dramatic, photo-driven. Take cues from Firqah_Travel reference but cleaner and more editorial.

**Body sections (Empathy, Why, FAQ, Form):** light cream backgrounds, generous whitespace, editorial — think Burak reference but in Bahasa Indonesia with navy + gold instead of yellow.

**Photography:** use Unsplash. Specific photos to reference:

- Hero bg: `https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=2400&q=85` (Kaaba night)
- Madinah: `https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600&q=85`
- Pilgrims: `https://images.unsplash.com/photo-1565019011521-b0575cbb57c8?w=1200&q=85`
- For gallery, use these Unsplash search URLs for 8 images: hajj+pilgrims, kaaba+prayer, madinah+mosque, muslim+travelers, mecca+night, manasik, masjid+nabawi, group+pilgrims

If any image fails, fallback gracefully to solid navy-900 background with khatam pattern overlay.

---

## 4. Page Structure (in order)

The structure follows the user-provided copywriting framework (Opening → Social Proof → Offer & Value Stacking → Closing). Section numbers below correspond to that framework.

### 4.1 — Announcement Bar (hidden < md)
- 40px tall, bg `navy-950`, text `cream` 13px, font-medium
- Container with `flex justify-between`
- Left: shield-check icon + "Izin PPIU 17012200308230005 — Akreditasi A Kemenag RI"
- Right: phone icon + "0811 44 66667" `·` mail icon + "cobigtour.travel@gmail.com"

### 4.2 — Sticky Navigation
- Fixed top, 80px tall, z-50
- Initial state (over hero): transparent, white text, no border
- Scrolled state (after 60px): `bg-white/85 backdrop-blur-xl border-b border-navy-100`, navy text
- Left: logo lockup — a 40px gold circle with white serif "C", followed by stacked text "COBIG TOUR" (Montserrat 700, tracked 0.08em, 16px) + "Umroh & Haji Khusus" (Inter 400, 11px, slate)
- Center (≥lg only): menu links — Beranda · Paket · Keunggulan · Galeri · Testimoni · FAQ. Inter 14px medium. Hover state: gold 1px underline animates from left, 200ms.
- Right: ghost link "0811 44 66667" (slate, hover gold) + gold pill button "Daftar Sekarang" (12px y-padding, 28px x-padding, Montserrat 600 14px)
- Mobile (<lg): hamburger right-side → triggers fullscreen drawer (navy-900 bg, white text, links stacked center, large 28px, generous 32px vertical gaps, close X top-right)

---

### 4.3 — SECTION 1 · The Opening (Hero)

Background: full-bleed Kaaba night photo with `bg-gradient-to-b from-navy-950/95 via-navy-900/80 to-navy-900/70` overlay. Add khatam pattern at 2% opacity over the whole thing.

Layout: `min-h-screen` desktop, `min-h-[92vh]` mobile. Container `max-w-shell mx-auto px-5 md:px-16 pt-32 pb-24`. Grid `lg:grid-cols-12 gap-12`.

**Left column** (`lg:col-span-7`, vertically centered):

1. Eyebrow (uppercase tracked label, gold):
   `BIMBINGAN SESUAI AL-QUR'AN & SUNNAH`
2. Headline — split across 3 lines for editorial rhythm (Montserrat 700, white, 56px mobile / 88px desktop, leading-[1.02], tracking-[-0.025em]):
   > Umroh Mabrur,<br>Khusyuk, dan Tenang —<br>dalam *<span class="font-serif italic font-medium text-gold-500">12 hari</span>*.
3. Spacer (40px).
4. Sub-headline (white/70, Inter 17px md:18px, leading-[1.75], max-w-prose):
   > Memang ada paket umroh yang lebih murah di luar sana. Tapi setelah mengantar ratusan jamaah Sulsel dengan selamat sejak 2018, kami percaya satu hal sederhana: ibadah tidak pantas dipertaruhkan. Kami urus seluruh perjalanan — Anda tinggal khusyuk beribadah.
5. Spacer (48px).
6. CTA row (`flex flex-col sm:flex-row gap-4`):
   - Primary (gold): "Konsultasi via WhatsApp" → `https://wa.me/62811446667?text=Assalamualaikum%2C%20saya%20ingin%20konsultasi%20paket%20umroh%20Cobig%20Tour`
   - Secondary (ghost-white border, hover fills): "Lihat Paket" → `#paket`
7. Spacer (32px).
8. Trust row — three inline items separated by thin vertical divider lines (Inter 13px, white/60, with small line icon prefix):
   - shield-check · Akreditasi A Kemenag
   - users · 1.000+ Jamaah Sejak 2018
   - plane · Lion Air Direct Makassar–Jeddah

**Right column** (`lg:col-span-5`, vertically centered):

Floating glass card — `bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-3xl p-10`:

- Top: small Arabic line, Cormorant or Amiri, centered, gold-300, 24px, opacity 80%:
  `بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ`
- Divider line (gold-500, 40px wide, 1px, centered, my-6)
- Label (uppercase tracked, gold-400, 12px):
  `PAKET UMROH AWAL MUSIM 1448 H`
- Spacer 16px.
- Mini line (white/60, 13px): "Mulai dari"
- Big price (Montserrat 700, white, 48px, tracking-tight, tabular-nums):
  `Rp 31.500.000`
- Spacer 24px.
- Info row (white/70, 13px, with clock icon): "Juli – Desember 2026 · 12 Hari · Lion Air Direct"
- Spacer 28px.
- Feature list (4 items, gold check + white/85 text, 14px, vertical gap 12px):
  - Tiket pesawat PP Makassar–Jeddah
  - Hotel berstandar dekat Haram
  - Manasik & muthawif bersertifikat
  - Visa, perlengkapan, ziarah — included
- Spacer 28px.
- Bottom link (gold-500, 14px medium, with chevron-right icon, hover translates +4px): "Lihat 4 paket lengkap"

---

### 4.4 — Airline Trust Strip
- Bg cream, py-20 md:py-24
- Single eyebrow line centered, uppercase tracked, slate-500, 12px:
  `MASKAPAI INTERNASIONAL TERPERCAYA`
- Spacer 48px
- Logo row: 6 logos in `flex flex-wrap justify-center items-center gap-x-20 gap-y-10`. All `grayscale opacity-50 hover:opacity-90 transition`. Use text logos (Inter 700, slate-400, 20px, tracked) for simplicity — no actual airline graphics since they're trademarked: "LION AIR" · "SAUDIA" · "GARUDA INDONESIA" · "QATAR AIRWAYS" · "EMIRATES" · "ETIHAD"

---

### 4.5 — SECTION 2 · Social Proof & Empathy

Bg cream. py-[120px] md:py-[160px]. Container max-w-shell.

Asymmetric two-column desktop: left 5/12 (sticky), right 7/12.

**Left column (sticky lg:sticky top-32):**
A single testimonial card, no background — just the photo and the words.
- Square photo, 4:5 ratio, rounded-2xl, ~480px tall. Use elderly Muslim woman portrait from Unsplash.
- Below photo, 40px gap.
- Single large gold open-quote glyph (Cormorant Garamond italic, 80px, gold-500, line-height 1, mb-4) — character `"`
- Quote text (navy-900, Inter 400, 20px, leading-[1.6], max-w-[420px]):
  > Saya 62 tahun, baru pertama umroh, dan jujur takut tersesat. Tim Cobig dampingi saya dari awal sampai pulang — manasik jelas, muthawif sabar, hotel dekat Masjidil Haram. Pulang dengan hati penuh.
- Spacer 24px.
- Attribution block (small):
  - Name (navy-900, Montserrat 600, 15px): "Hj. Halimah Daeng Tene"
  - Meta (slate-500, Inter 13px): "62 tahun · Umroh Maret 2026, Makassar"

**Right column:**

Top: eyebrow + section title.
- Eyebrow: `font-serif italic text-gold-700 text-lg`: `Bagian 02 — Empati`
- Title (navy-900, Montserrat 600, 32px md:48px, leading-[1.1], tracking-[-0.02em], max-w-[520px]):
  > Umroh seharusnya menenangkan. Bukan menambah cemas.
- Spacer 32px.
- Lead paragraph (slate-600, 17px, leading-[1.75], max-w-prose):
  > Kekhawatiran ini kami dengar setiap minggu dari calon jamaah yang menghubungi. Mungkin Anda mengalami salah satunya.

Spacer 64px.

**Problem grid** — 6 items, 2 columns desktop, 1 column mobile, gap-y-12 md:gap-12. Each item is *not* a card — just text. Format:
- Small gold line-icon (24px, top-aligned) on left
- Right: title (Montserrat 600, navy-900, 18px) + body (slate-600, 15px, leading-[1.7], mt-2)

1. **Takut tertipu travel abal-abal**
   Berita umroh gagal berangkat bikin trauma. Padahal niat sudah bulat dan tabungan sudah disiapkan bertahun-tahun.
2. **Bingung memilih paket yang tepat**
   Setiap travel pasang harga berbeda, fasilitas berbeda, jarak hotel berbeda. Sulit membandingkan tanpa pengalaman.
3. **Cemas mengurus visa dan dokumen**
   Paspor, vaksin meningitis, visa Saudi — birokrasi yang melelahkan sebelum perjalanan dimulai.
4. **Khawatir mengajak orang tua atau lansia**
   Takut kelelahan, tersesat di antara ribuan jamaah, atau tidak ada yang mendampingi saat membutuhkan.
5. **Ragu apakah sesuai syariah**
   Apakah manasik sesuai sunnah Rasulullah? Apakah muthawif paham fiqih ibadah?
6. **Was-was dengan biaya tersembunyi**
   Brosur tulis satu angka, tagihan akhir bisa berbeda jutaan rupiah karena "biaya tambahan" yang tidak dijelaskan di awal.

Suggested Lucide icons (one per item, in order): `alert-triangle`, `git-compare`, `file-text`, `heart-handshake`, `book-open-check`, `wallet`.

Spacer 80px.

**Bridge callout (full-width, spans both columns below):**
- Bg navy-900, rounded-2xl, p-12 md:p-16, khatam pattern at 4% opacity
- Single gold serif-italic line at top (Cormorant 24px italic, gold-400): "Sebuah catatan dari pendiri."
- Main text (white, Inter 400, 20px md:22px, leading-[1.7], max-w-[680px]):
  > Cobig Tour didirikan setelah saya mengantar ibu saya umroh tahun 2015 — dan menyaksikan sendiri betapa membingungkannya pengalaman itu untuk lansia. Sejak hari pertama, kami membangun Cobig dengan satu prinsip: *transparansi total dan pendampingan tanpa kompromi.*
- No CTA inside this block. Just the quote, breathing.

---

### 4.6 — SECTION 3 · The Offer & Value Stacking

This is the longest section. Four sub-blocks: (a) Why Cobig, (b) Package Showcase, (c) Include/Exclude, (d) Value Stack. Treat sub-blocks as full sections with their own padding — do NOT cram them.

#### 4.6.a — Why Cobig (6 Reasons)
- Bg white, py-[120px] md:py-[160px]
- Eyebrow centered (gold-700 serif italic 18px): `Bagian 03 — Mengapa Cobig`
- Title centered (navy-900, 32px md:56px, max-w-[720px] mx-auto, tracking-tight):
  > Solusi konkret untuk setiap kekhawatiran Anda.
- Sub centered (slate-600, 17px, leading-[1.75], max-w-prose mx-auto, mt-6):
  > Bukan janji marketing. Setiap poin di bawah adalah komitmen yang tertulis dalam kontrak.
- Spacer 96px

6-card grid: `grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-100` — the `gap-px bg-navy-100` trick creates a single thin border grid between white cards. Each card: `bg-white p-12 hover:bg-cream transition-colors duration-500`.

Card content (in this order, vertical):
- Lucide icon, 32px, gold-500, mb-8
- Number label (Cormorant italic, gold-700, 14px): "01" through "06"
- Title (Montserrat 600, navy-900, 22px, mt-4)
- Body (slate-600, 15px, leading-[1.75], mt-4)

Cards (icon · title · body):

1. `shield-check` · **Akreditasi A Kemenag**
   Izin PPIU resmi No. 17012200308230005. Travel terverifikasi dan dipantau langsung Kementerian Agama RI.
2. `plane` · **Lion Air Direct Makassar–Jeddah**
   Tanpa transit. Berangkat dan pulang langsung dari Makassar — hemat waktu dan tenaga, terutama untuk jamaah lansia.
3. `building-2` · **Hotel Berstandar Dekat Haram**
   Semua paket menggunakan hotel berstandar di kawasan Haram & Nabawi. Jarak terjauh dapat ditempuh dengan jalan kaki singkat.
4. `book-open` · **Muthawif Bersertifikat**
   Tim kami bukan sekadar pemandu. Setiap muthawif berlisensi resmi dan memahami fiqih umroh sesuai mazhab yang dianut jamaah Indonesia.
5. `wallet` · **Transparansi Total**
   Harga di brosur adalah harga final. Seluruh include dan exclude tertera dalam kontrak hitam di atas putih — tanpa biaya tersembunyi.
6. `heart-handshake` · **Pendampingan 24 Jam** *(featured)*
   Tour leader siaga 24 jam selama di tanah suci. Group WhatsApp khusus aktif sejak manasik hingga kepulangan.

For card #6, add a tiny gold pill at top of the card (instead of inside): `<span class="absolute top-6 right-6 text-[10px] uppercase tracking-[0.15em] font-semibold text-gold-700 border border-gold-500/40 rounded-full px-3 py-1">Termasuk dalam semua paket</span>`. No "BONUS" labels — too salesy. The word "Termasuk" is more dignified.

#### 4.6.b — Package Showcase (`id="paket"`)
- Bg navy-900, py-[120px] md:py-[160px], khatam pattern at 3%
- Eyebrow centered (gold-400 serif italic 18px): `Bagian 04 — Paket`
- Title centered (white, 32px md:56px, max-w-[760px] mx-auto):
  > Empat paket. Satu standar kualitas.
- Sub centered (white/60, 17px, leading-[1.75], max-w-prose mx-auto, mt-6):
  > Periode Juli – Desember 2026 · Lion Air Direct Makassar–Jeddah (PP) · 12 Hari
- Spacer 80px

4-card grid: `grid md:grid-cols-2 lg:grid-cols-4 gap-6`. Each card:
- `bg-navy-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-10`
- Hover: `border-gold-500/40 -translate-y-1 transition duration-500`
- Featured card (Executive) has `border-gold-500 lg:scale-[1.04] relative`. Add small gold pill at top center (absolute, -translate-y-1/2): "Paling Direkomendasikan"

Card content (vertical, generous gaps):
- Tiny label (uppercase tracked, gold-400, 11px): "Paket"
- Name (Montserrat 700, white, 24px, tracking-tight, mt-2): EKONOMIS / PREMIUM / EXECUTIVE / VIP
- Spacer 32px
- Price label (white/50, 13px): "Investasi per jamaah"
- Price (Montserrat 700, white, 36px, tabular-nums, mt-2): Rp 31.500.000 etc.
- Divider (1px white/10, my-8)
- Hotel block — two stacked items, each:
  - Tiny label (white/40, 11px tracked): "Hotel Mekkah" / "Hotel Madinah"
  - Hotel name (white, 15px, mt-1): "Waha / Setaraf"
- Spacer 32px
- Inclusion mini-list (4 items, gold-500 check 16px + white/80 13px, gap-y-3):
  - Penerbangan PP Lion Air Direct
  - 12 hari perjalanan
  - Muthawif bersertifikat
  - Manasik & perlengkapan
- Spacer 40px
- CTA button — Ekonomis/Premium/VIP: ghost gold border, white text, hover fills gold-500 with navy text. Executive: solid gold with navy text. Full width. Text: "Pilih Paket Ini" + `chevron-right` icon. WhatsApp URL with prefilled package name:
  `https://wa.me/62811446667?text=Assalamualaikum%2C%20saya%20tertarik%20Paket%20[NAME]%20Cobig%20Tour%20(Rp%20[PRICE])`

Package data (use exactly):

| Slot | Nama | Harga | Hotel Mekkah | Hotel Madinah |
|---|---|---|---|---|
| 1 | EKONOMIS | Rp 31.500.000 | Waha / Setaraf | Nada Salam / Setaraf |
| 2 | PREMIUM | Rp 34.500.000 | Nada Deafah / Setaraf | Royal Madinah / Setaraf |
| 3 | EXECUTIVE *(featured)* | Rp 36.500.000 | Villa Hilton / Setaraf | Taiba Suite / Setaraf |
| 4 | VIP | Rp 40.500.000 | Safwa / Setaraf | Royal Andalus / Setaraf |

Below grid, spacer 64px, single centered disclaimer line (white/50, 13px, italic):
> Seluruh harga adalah final per jamaah. Tidak ada biaya tambahan tersembunyi di luar exclude yang tertera.

#### 4.6.c — Include / Exclude Detail
- Bg cream, py-[120px] md:py-[160px]
- Eyebrow centered (gold-700 italic): `Bagian 05 — Rincian`
- Title centered (navy-900, 32px md:56px):
  > Apa saja yang Anda dapatkan.
- Spacer 80px

Three-column layout desktop (`lg:grid-cols-12 gap-10`): Include 5/12, Exclude 4/12, DP card 3/12.

**Include column** (`lg:col-span-5`):
- Small badge label (uppercase tracked, gold-700, 12px): "TERMASUK DALAM PAKET"
- Heading (navy-900, Montserrat 600, 24px, mt-3): "11 layanan included"
- Spacer 32px
- Vertical list, gap-y-5. Each item: gold-500 check 20px + navy-800 16px text:
  1. Tiket pesawat PP Makassar–Jeddah (Lion Air Direct)
  2. Visa umroh Saudi Arabia
  3. Hotel Mekkah & Madinah sesuai paket
  4. Bus AC selama di tanah suci
  5. Makan 3× sehari sesuai program
  6. Manasik intensif sebelum keberangkatan
  7. Tour leader & muthawif bersertifikat
  8. Ziarah Mekkah & Madinah
  9. Perlengkapan umroh (koper, ihram, mukena, buku doa)
  10. Air Zam-Zam 5 Liter per jamaah
  11. Tour Thaif & wisata kuliner khas Arab

For item #11, append a tiny gold tracked label after the text: `EKSTRA`.

**Exclude column** (`lg:col-span-4`):
- Badge (uppercase tracked, slate-500, 12px): "TIDAK TERMASUK"
- Heading (navy-900, 24px, mt-3): "4 hal di luar paket"
- Spacer 32px
- Vertical list. Each item: slate-400 `x` icon 20px + slate-600 16px text:
  1. Pembuatan paspor (jika belum punya)
  2. Vaksin meningitis
  3. Kelebihan bagasi di atas kuota
  4. Pengeluaran pribadi (oleh-oleh, laundry, telepon)
- Spacer 24px
- Small note (slate-500, 13px italic, max-w-[280px]):
  > Kami bantu pengurusan paspor dan vaksin di luar paket dengan biaya at-cost. Tanya saat konsultasi.

**DP Card column** (`lg:col-span-3 lg:sticky lg:top-32`):
- `bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl p-8 text-navy-900 shadow-lift`
- Label (navy-900/80, uppercase tracked, 11px): "PENDAFTARAN"
- Mini text (navy-900/70, 13px, mt-1): "Booking seat dengan DP"
- Price (Montserrat 700, navy-900, 40px, tabular-nums, mt-4): "Rp 3.000.000"
- Divider (navy-900/15, 1px, my-6)
- Bank list label (navy-900/70, 11px tracked uppercase, mb-3): "Transfer ke salah satu rekening:"
- Two bank rows. Each row: bank name (navy-900, Montserrat 600, 13px) + account number (navy-900, Inter 600, 18px, tabular-nums, mt-1):
  - **BSI** · `7 2345 98 184`
  - **Mandiri** · `174 00 441 80 800`
- Account name (navy-900/70, 12px, mt-4): "a.n. PT. Cobig Indonesia Kreatif"
- Spacer 24px
- CTA button: full-width navy-900 bg, gold-400 text, py-3, rounded-md, Montserrat 600 14px: "Konfirmasi Transfer" → WhatsApp link with `Saya%20sudah%20transfer%20DP%20pendaftaran` prefilled.

#### 4.6.d — Value Stack (Anchoring)
- Bg navy-900, py-[120px] md:py-[160px], khatam pattern 3%
- Eyebrow (gold-400 italic): `Bagian 06 — Hitung Sendiri`
- Title centered (white, 32px md:56px, max-w-[700px] mx-auto):
  > Lebih murah dari mengurus sendiri.
- Sub (white/60, 17px, mt-6, max-w-prose mx-auto):
  > Berikut perbandingan biaya jika Anda mengatur sendiri setiap komponen perjalanan, versus paket Cobig Tour.
- Spacer 80px

Two-column layout (`lg:grid-cols-2 gap-12`):

**Left card — "Jika Atur Sendiri"** (semi-transparent, bg white/5):
- Heading (white/70, Montserrat 500, 18px): "Jika Atur Sendiri"
- Sub (white/40, 13px, mt-2): "Estimasi harga pasaran"
- Spacer 32px
- Itemized table (no actual `<table>` — use divs with grid):
  Each row: `flex justify-between py-3 border-b border-white/5`. Left text (white/70, 15px). Right number (white/70, Montserrat 500, 15px, tabular-nums).
  1. Tiket pesawat PP — Rp 14.000.000
  2. Visa umroh — Rp 2.000.000
  3. Hotel Mekkah (5 malam) — Rp 9.000.000
  4. Hotel Madinah (4 malam) — Rp 7.000.000
  5. Transportasi bus AC — Rp 1.500.000
  6. Makan harian — Rp 2.500.000
  7. Manasik & muthawif — Rp 3.000.000
  8. Perlengkapan umroh — Rp 1.500.000
  9. Tour Thaif & ziarah — Rp 1.500.000
- Total row: bg-white/5, py-5, px-6 rounded mt-6, white-90 label "Total Estimasi" + white-90 Montserrat 700 value "Rp 42.000.000"

**Right card — "Dengan Cobig Tour"** (gold, prominent):
- `bg-gradient-to-br from-gold-400 to-gold-500 text-navy-900 rounded-2xl p-12 relative overflow-hidden`
- Subtle khatam pattern at 4% inside the gold card
- Heading (navy-900, Montserrat 600, 18px): "Dengan Cobig Tour"
- Sub (navy-900/70, 13px, mt-2): "Paket Ekonomis — semua include di kiri"
- Spacer 40px
- Original price strike (navy-900/50, Montserrat 500, 24px, tabular-nums, with line-through): `Rp 42.000.000`
- Current price (navy-900, Montserrat 700, 64px, tabular-nums, mt-2, leading-none): `Rp 31.500.000`
- Saving badge below (navy-900 bg, gold-400 text, inline pill, mt-4, px-4 py-2 rounded-full, Montserrat 600 14px): "Hemat Rp 10.500.000 — 25%"
- Spacer 48px
- Bonus block — heading (navy-900, uppercase tracked, 11px): "TERMASUK TANPA BIAYA TAMBAHAN"
- 3 line items below, gap-y-3, navy-900/85 14px with small gold-700 dot bullet:
  - Pendampingan tour leader 24 jam
  - Group WhatsApp pra-keberangkatan
  - Tour Thaif & kuliner khas Arab
- Spacer 40px
- CTA button (navy-900 bg, gold-400 text, py-4, rounded-md, Montserrat 600 15px, full width): "Daftar Paket Ekonomis Sekarang" + chevron-right

Below the two-card row, spacer 80px, scarcity callout:
- `bg-navy-800 border-l-2 border-gold-500 rounded-r-lg p-8 max-w-3xl mx-auto`
- Small label (gold-400, uppercase tracked, 11px, with clock icon inline): "KETERSEDIAAN KUOTA"
- Body text (white, 17px, leading-[1.7], mt-3):
  > Kami batasi 35 jamaah per keberangkatan untuk memastikan kualitas pendampingan. Batch Juli 2026 sudah terisi 60%. Pendaftaran ditutup saat kuota penuh — pastikan seat Anda lebih awal.

---

### 4.7 — Photo Gallery (`id="galeri"`)
- Bg cream, py-[120px] md:py-[160px]
- Header layout: eyebrow + title left, link right (desktop). Stacked mobile.
- Left: eyebrow (gold-700 italic): `Bagian 07 — Dokumentasi`
  Title (navy-900, 32px md:48px, mt-3, max-w-[480px]): "Senyum yang menjadi kebanggaan kami."
- Right: small text link (slate-600 hover navy-900, 15px medium, inline-flex with chevron): "Ikuti dokumentasi lengkap di @cobigtour →" linking to instagram.com/cobigtour
- Spacer 80px

Gallery grid: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4`. 8 images. Each:
- `aspect-[4/5] overflow-hidden rounded-xl bg-navy-900 group cursor-pointer`
- `<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">`
- Overlay on hover: `absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`
- Caption on hover: absolute bottom-6 left-6, white 13px, max-w-[80%]. Captions like: "Batch Maret 2026", "Pelataran Masjid Nabawi", "Manasik di kantor Makassar", "Ziarah Thaif", etc.

8 image URLs (use Unsplash):
1. `https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80`
2. `https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80`
3. `https://images.unsplash.com/photo-1565019011521-b0575cbb57c8?w=800&q=80`
4. `https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80`
5. `https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80`
6. `https://images.unsplash.com/photo-1591266606406-1b9dd05cf3a4?w=800&q=80`
7. `https://images.unsplash.com/photo-1564769625392-651b2c1d9569?w=800&q=80`
8. `https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&q=80`

---

### 4.8 — Testimonials (`id="testimoni"`)
- Bg navy-900, py-[120px] md:py-[160px], khatam pattern 3%
- Eyebrow centered (gold-400 italic 18px): `Bagian 08 — Testimoni`
- Title centered (white, 32px md:56px, max-w-[680px] mx-auto):
  > Bukan kami yang bicara. Mereka yang sudah pulang.
- Spacer 80px

3-card grid `grid md:grid-cols-3 gap-6`. Each card:
- `bg-white/[0.04] border border-white/10 rounded-2xl p-10 hover:bg-white/[0.06] transition`
- Top: 5 gold-500 star icons in row, gap-1
- Spacer 24px
- Quote (white/90, Inter 400, 17px, leading-[1.7], min-h-[180px])
- Spacer 32px
- Divider (white/10, 1px)
- Spacer 24px
- Attribution: name (white, Montserrat 600, 15px), meta below (white/50, 13px)

Testimonial content:
1. **H. Andi Mappiare**, 58 — Pebisnis, Makassar
   "Saya pilih VIP karena membawa istri dan ibu. Hotel Safwa hanya beberapa puluh meter dari Masjidil Haram, jadi lansia tidak kelelahan. Pendampingannya luar biasa — worth every rupiah."
2. **Ustadzah Nurhayati**, 45 — Guru ngaji, Gowa
   "Manasiknya bukan formalitas. Tim Cobig menjelaskan setiap rukun sesuai sunnah dengan dalil yang jelas. Saya paham, bukan sekadar ikut-ikutan."
3. **Pak Rusdi & Bu Aminah**, 53 & 50 — Pare-Pare
   "Ini umroh kedua kami bersama Cobig. Konsisten kualitasnya dari hotel sampai makanan. Tour leader sudah seperti keluarga sendiri sekarang."

(No carousel — three static cards is cleaner. Avoid the cliché auto-rotating slider.)

---

### 4.9 — FAQ (`id="faq"`)
- Bg cream, py-[120px] md:py-[160px]
- Two-column header: eyebrow + title left (7/12), supportive text right (5/12). Stacked mobile.
- Left: eyebrow (gold-700 italic): `Bagian 09 — Pertanyaan`
  Title (navy-900, 32px md:56px, mt-4, max-w-[520px]):
  > Sebelum Anda mendaftar — mungkin ini yang Anda pikirkan.
- Right (slate-600, 17px, leading-[1.75]):
  > Pertanyaan-pertanyaan ini paling sering muncul dari calon jamaah dalam tiga tahun terakhir. Kami jawab tanpa basa-basi. Ada yang belum terjawab? Chat langsung admin kami via WhatsApp.

Spacer 96px.

FAQ accordion — single column, max-w-[860px] mx-auto. 8 items. Each item:
- `border-b border-navy-100 last:border-b-0`
- Button row (full-width): `flex justify-between items-center py-8 text-left`
  - Left: question (navy-900, Montserrat 600, 18px md:20px)
  - Right: `chevron-down` icon, slate-500, 24px, rotates 180° when open, transition 300ms
- Hidden body (slate-600, 17px, leading-[1.75], pb-8, pr-12, max-w-[680px]) — toggle with `max-height` transition

Questions (write answers carefully — these are the most-read part of the page):

1. **Kenapa Cobig lebih mahal dari travel yang menawarkan Rp 25–28 jutaan?**
   Paket di bawah Rp 28 juta umumnya menggunakan penerbangan transit (Jakarta atau Kuala Lumpur), hotel jauh dari Haram (1 km lebih), atau memiliki biaya tambahan tidak tertera. Kami sering menemui jamaah yang awalnya pindah ke travel murah, tapi total biaya akhir mereka justru di atas Rp 33 juta. Cobig: harga di brosur = harga final.

2. **Cocok untuk jamaah yang baru pertama kali umroh?**
   Justru paling cocok. Kami siapkan manasik intensif dua kali sebelum keberangkatan, group WhatsApp untuk tanya-jawab kapan saja, dan muthawif yang sabar menjelaskan setiap rukun di tempat. Sekitar 70% jamaah kami adalah pemula.

3. **Bagaimana sistem pembayaran? Bisa dicicil?**
   Booking seat dengan DP Rp 3 juta ke rekening BSI atau Mandiri Cobig. Pelunasan paling lambat 45 hari sebelum keberangkatan. Untuk skema cicilan terjadwal, silakan diskusi langsung dengan admin — kami fleksibel selama jadwal pelunasan terpenuhi.

4. **Apa perbedaan paket Ekonomis sampai VIP?**
   Perbedaan utama ada di hotel — semakin tinggi paket, semakin dekat ke Masjidil Haram dan Masjid Nabawi serta semakin tinggi grade hotelnya. Layanan inti (penerbangan, manasik, muthawif, ziarah, makan) sama untuk semua paket.

5. **Apakah Cobig benar-benar Akreditasi A Kemenag?**
   Ya. Izin PPIU resmi No. 17012200308230005. Anda dapat memverifikasi di situs Kementerian Agama atau menghubungi Kantor Kementerian Agama wilayah Sulsel.

6. **Bagaimana jika saya batal berangkat? Apakah ada refund?**
   Kebijakan refund tertulis dalam kontrak yang ditandatangani saat pendaftaran. Singkatnya: pembatalan lebih dari 30 hari sebelum keberangkatan dikenakan potongan administrasi. Pembatalan dalam 30 hari hanya bisa direfund parsial karena tiket dan hotel sudah dibooking. Detail lengkap dijelaskan saat konsultasi.

7. **Bagaimana keamanan untuk jamaah lansia?**
   Sekitar 40% jamaah kami berusia 55+. Kami siapkan kursi roda gratis di bandara, tour leader yang bisa diandalkan, hotel dekat masjid agar tidak kelelahan, dan group khusus pendamping lansia. Untuk lansia dengan kondisi medis tertentu, mohon diskusikan saat pendaftaran.

8. **Apakah ada paket Haji Khusus?**
   Ya, kami juga mengelola paket Haji Khusus. Karena kuota Haji Khusus terbatas dan periode pendaftarannya berbeda, silakan konsultasikan langsung dengan admin via WhatsApp untuk informasi kuota tahun berjalan.

Default state: first item open.

---

### 4.10 — Registration Form (`id="daftar"`)
- Bg navy-900, py-[120px] md:py-[160px]
- Two-column layout (`lg:grid-cols-12 gap-16`):

**Left column (`lg:col-span-5`):**
- Eyebrow (gold-400 italic, 18px): `Bagian 10 — Pendaftaran`
- Title (white, 32px md:56px, mt-4, max-w-[420px]):
  > Mulai langkah pertama Anda.
- Spacer 32px
- Body (white/70, 17px, leading-[1.75], max-w-prose):
  > Isi formulir di samping atau langsung hubungi admin kami via WhatsApp. Tim Cobig akan menghubungi Anda dalam 1×24 jam untuk diskusi paket dan informasi keberangkatan terdekat.
- Spacer 48px
- Contact list, gap-y-6:
  - Icon `phone` (gold-400, 20px) + col: label "Telepon / WhatsApp" (white/50, 12px uppercase tracked) + value "0811 44 66667" (white, Montserrat 500, 17px)
  - Icon `mail` + "Email" / "cobigtour.travel@gmail.com"
  - Icon `map-pin` + "Kantor" / "Jl. Baji Gau No. 32i, Makassar"

**Right column (`lg:col-span-7`):**
A clean form card — `bg-white rounded-2xl p-10 md:p-12 shadow-lift`.

Form fields (all using floating label style — 1px navy-100 border, focus 2px navy-800 + soft gold glow `ring-2 ring-gold-500/20`):

1. Nama Lengkap (text)
2. Nomor WhatsApp (tel) — placeholder `08xxxxxxxxxx`
3. Email (email, optional)
4. Pilih Paket (select) — options: Ekonomis · Premium · Executive · VIP · Belum yakin (konsultasi dulu)
5. Bulan Keberangkatan Diinginkan (select) — options: Juli 2026, Agustus 2026, September 2026, Oktober 2026, November 2026, Desember 2026, Fleksibel
6. Catatan / Pertanyaan (textarea, 4 rows, optional)

All fields stack vertically with 24px gap. Labels above each input (uppercase tracked navy-900/70, 12px), input below (16px navy-900, py-4 px-5).

Submit button: full-width, bg-navy-900, text-cream, py-5, Montserrat 600 16px, rounded-md, hover bg-navy-800. Text: "Kirim & Lanjut ke WhatsApp" + chevron-right.

On submit (JS): prevent default, gather form data, construct WhatsApp deep-link with all fields prefilled, `window.open()` to it.

Below form, small note (slate-500, 13px italic, mt-6, text-center):
> Data Anda hanya digunakan untuk konsultasi paket. Kami tidak membagikan ke pihak ketiga.

---

### 4.11 — Footer
- Bg navy-950, py-20 md:py-28
- 4-column grid desktop (`lg:grid-cols-12`): brand (4/12) · navigasi (2/12) · kontak (3/12) · sosial+bank (3/12). Stacked mobile.

**Column 1 — Brand:**
- Logo lockup (40px gold circle "C" + "COBIG TOUR" Montserrat 700 white)
- Sub line (white/50, 13px, mt-2): "PT. Cobig Indonesia Kreatif"
- Tagline (white/60, 15px, leading-[1.6], mt-6, max-w-[300px]):
  "Bimbingan umroh dan haji khusus sesuai Al-Qur'an dan Sunnah, dari Makassar untuk seluruh Indonesia."
- Mini accreditation card (mt-8, border border-white/10 rounded-lg p-4, max-w-[300px]):
  - `shield-check` gold-400 icon
  - White 13px: "Akreditasi A Kemenag RI"
  - White/50 11px: "Izin PPIU 17012200308230005"

**Column 2 — Navigasi:**
- Heading (white, uppercase tracked, 12px): "NAVIGASI"
- Stacked links (white/60 hover white, 14px, gap-y-3, mt-6):
  Beranda · Paket · Keunggulan · Galeri · Testimoni · FAQ · Pendaftaran

**Column 3 — Kontak:**
- Heading "KONTAK"
- Stacked items (mt-6, gap-y-5). Each: tiny gold label + white value:
  - "Telepon / WA" / "0811 44 66667"
  - "Email" / "cobigtour.travel@gmail.com"
  - "Kantor" / "Jl. Baji Gau No. 32i,<br>Makassar, Sulsel"

**Column 4 — Sosial & Bank:**
- Heading "IKUTI KAMI"
- Sosial row (mt-6, flex gap-3) — square icon buttons 40×40, border white/10, hover bg gold-500 navy-900:
  - Instagram → instagram.com/cobigtour
  - YouTube → youtube.com/@Cobigtourofficial
  - TikTok → tiktok.com/@cobig_tour.official
- Spacer 32px
- Heading "BANK PENDAFTARAN" (uppercase tracked, white, 12px)
- Bank rows (mt-6, gap-y-3, 13px white/70): "BSI · 7 2345 98 184" · "Mandiri · 174 00 441 80 800"

**Bottom bar:**
- 1px white/10 divider, mt-20 pt-8
- Flex: copyright left + small links right. Stacked mobile.
- Left (white/40 13px): "© 2026 PT. Cobig Indonesia Kreatif. Seluruh hak cipta dilindungi."
- Right (white/40 13px, gap-x-6): "Kebijakan Privasi · Syarat & Ketentuan"

---

### 4.12 — Floating WhatsApp Button
- Position fixed bottom-6 right-6 (mobile bottom-5 right-5), z-40
- Circle 60×60 (mobile 56×56), bg #25D366, shadow-lift
- WhatsApp inline SVG icon (white, centered) — provided in Section 9
- Subtle pulse animation: a second circle absolutely positioned same size, bg #25D366, opacity 30%, scale-150, animation `ping` 2s infinite
- href: `https://wa.me/62811446667?text=Assalamualaikum%20Cobig%20Tour`
- Tooltip on hover (desktop): small navy-900 pill to the left "Chat WhatsApp"

---

## 5. Interactions (Vanilla JS)

Keep JS minimal and well-commented. Single `<script>` at end of `<body>`.

```js
// 1. Mobile menu — toggle .open on #mobile-menu, lock body scroll when open
// 2. Sticky nav — add .scrolled class to #nav when window.scrollY > 60
// 3. Reveal on scroll — IntersectionObserver on .reveal elements, threshold 0.15, add .visible class, unobserve after trigger
//    .reveal: opacity-0 translate-y-6 transition-all duration-[600ms] ease-out
//    .reveal.visible: opacity-100 translate-y-0
//    Stagger children with [data-stagger] using transition-delay
// 4. FAQ accordion — click to toggle aria-expanded + max-height + rotate chevron
//    Allow multiple open OR single-open (you choose; default to multi)
// 5. Form submit — preventDefault, build WhatsApp message template, window.open
// 6. Smooth scroll for anchor links — handled via CSS scroll-behavior: smooth on html
// 7. Lucide createIcons() called after DOM ready
```

---

## 6. Accessibility

- All interactive elements have visible focus states (2px gold-500 ring with offset).
- All images have meaningful `alt` text in Bahasa Indonesia ("Foto Ka'bah di malam hari" not "kaaba.jpg").
- Form labels associated with inputs via `for`/`id`.
- FAQ accordion uses `aria-expanded` and `aria-controls`.
- Mobile menu uses `aria-hidden` toggle.
- Color contrast: all body text passes WCAG AA against its background. Test specifically: gold-500 on navy-900 (passes), white/60 on navy-900 (check, may need /70).

---

## 7. Mobile Considerations

- Hero headline drops to 48px on mobile (still dramatic, not 32px).
- All section padding scales: `py-[80px] md:py-[120px] lg:py-[160px]` is the responsive pattern.
- Two-column layouts always stack with `gap-12 lg:gap-16` between rows.
- Floating glass card in hero appears BELOW the text on mobile, not stacked above.
- DP card breaks out of sticky on mobile, sits between Include and Exclude blocks.
- Form fields are 48px minimum tap target (`py-4` minimum).
- Floating WhatsApp button stays visible on mobile, never blocks main CTAs.

---

## 8. Performance

- All Unsplash images use `?w=800&q=80` for gallery, `?w=2400&q=85` for hero.
- Add `loading="lazy"` to all images except hero.
- Add `decoding="async"` to all images.
- Single CSS file (Tailwind CDN) + single JS file at end of body.
- Preconnect to fonts.googleapis.com.

---

## 9. Code Snippets

**WhatsApp SVG icon (white):**
```html
<svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>
```

**Reveal-on-scroll utility CSS:**
```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1); }
.reveal.visible { opacity: 1; transform: translateY(0); }
[data-stagger="1"] { transition-delay: 80ms; }
[data-stagger="2"] { transition-delay: 160ms; }
[data-stagger="3"] { transition-delay: 240ms; }
[data-stagger="4"] { transition-delay: 320ms; }
```

**Glass nav scrolled state:**
```css
#nav { transition: background-color .3s, backdrop-filter .3s, border-color .3s; }
#nav.scrolled { background-color: rgba(255,255,255,0.85); backdrop-filter: blur(20px); border-bottom: 1px solid rgb(232 237 244); }
#nav.scrolled .nav-link { color: rgb(15 23 42); }
#nav.scrolled .logo-text { color: rgb(0 33 71); }
```

---

## 10. Final Quality Checklist

Before delivering, verify each item:

- [ ] Zero emoji characters anywhere in visible UI (search the file for emoji unicode ranges).
- [ ] All icons are Lucide line icons with 1.5px stroke, OR the single inline WhatsApp SVG.
- [ ] Color palette restricted to navy / gold / cream / sand / slate. No purple, no cyan, no rainbow.
- [ ] Section vertical padding is 120px mobile / 160px desktop on every major section.
- [ ] Hero headline is 56px mobile / 88px desktop (not smaller).
- [ ] Body text line-height is 1.75 across the page.
- [ ] All buttons have specific Indonesian copy — never "Click Here", "Learn More", "Get Started".
- [ ] All WhatsApp links go to `https://wa.me/62811446667` with appropriate prefilled `?text=`.
- [ ] Form actually opens WhatsApp with all fields prefilled when submitted.
- [ ] Mobile nav drawer works smoothly with scroll lock.
- [ ] FAQ accordion smooth height transitions, chevron rotates.
- [ ] Sticky nav transitions cleanly between transparent → glass states.
- [ ] All Unsplash images have meaningful Indonesian alt text.
- [ ] No console errors. No layout shift on load.
- [ ] Tested at 375px, 768px, 1280px, 1920px widths.
- [ ] Headlines feel editorial — large, confident, breathing space around them.
- [ ] The page feels like a premium travel agency wrote it, not an AI template generator.

---

**Output:** single `index.html` file. Inline `<style>` for custom rules. Inline `<script>` at end of body. Production-ready. No placeholders, no `TODO` comments, no Lorem ipsum. All copy as specified above.
