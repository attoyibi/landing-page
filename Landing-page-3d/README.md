# Landing page muchson.web.id

Situs portofolio React + Vite, ditambah bagian **Artikel** yang berisi halaman HTML statis dengan SVG dan komponen interaktif.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # hasil di dist/
```

`npm run dev` dan `npm run build` otomatis menjalankan `scripts/build-articles.mjs` lebih dulu (membuat daftar artikel dan sitemap).

---

## Bagian Artikel: cara kerjanya

```
public/artikel/
  _shared/            CSS, JS (semua widget), font, dan promo.json yang dipakai semua artikel
  <nama-artikel>/
    index.html        satu artikel (halaman HTML mandiri)
    cover.svg         gambar sampul untuk kartu dan halaman artikel
    cover.png         sampul 1200x630 untuk pratinjau saat dibagikan (WhatsApp, LinkedIn, X)
  index.json          dibuat otomatis, jangan diedit
src/data/articles.js  DAFTAR artikel yang tayang: satu baris per artikel
```

Alamat tiap artikel: `https://muchson.web.id/artikel/<nama-artikel>/`. Halaman daftar `/artikel/` dibuat oleh React (ada pencarian dan filter kategori), dan 3 artikel terbaru tampil di beranda.

Karena tiap artikel adalah file HTML sungguhan di alamat sendiri, mesin pencari mengindeksnya langsung tanpa perlu menjalankan JavaScript.

### Menambah artikel baru (cara utama)

1. Buat folder `public/artikel/<nama-artikel>/` berisi `index.html` dan gambar sampul (`cover.svg`, atau `cover.jpg`/`cover.webp`).
2. Tambahkan satu baris di [src/data/articles.js](src/data/articles.js):
   ```js
   'nama-artikel',
   ```
3. `git push`. Selesai. Judul, deskripsi, tanggal, kategori, tag, dan sampul dibaca otomatis dari `<head>` file HTML-nya.

Artikel yang foldernya ada tetapi belum didaftarkan di `articles.js` dianggap **draf** dan tidak tampil di situs (alamatnya tetap bisa dibuka bila tahu).

Jika ada yang kurang di `<head>`, `npm run build` berhenti dan menyebut file serta bagian yang kurang.

### Yang wajib ada di `<head>` setiap artikel

```html
<title>Judul artikel (idealnya di bawah 60 karakter)</title>
<meta name="description" content="Ringkasan 120-160 karakter">
<meta name="keywords" content="kata kunci, dipisah, koma">
<link rel="canonical" href="https://muchson.web.id/artikel/nama-artikel/">
<meta property="article:published_time" content="2026-10-23">
<meta property="article:section" content="Mata &amp; Kacamata">   <!-- kategori -->
<meta name="cover" content="cover.svg">                           <!-- nama file sampul di folder yang sama -->
<meta property="og:image" content="https://muchson.web.id/artikel/nama-artikel/cover.png">
```

Opsional: `<meta name="cover-credit" content="Foto: Nama, lisensi">` bila memakai foto yang butuh atribusi.

Kategori yang dipakai sekarang: **Mata & Kacamata**, **AI untuk Semua**, **Coding & Algoritma**, **Teknologi Sehari-hari**, **Belajar & Produktivitas**, **Karier & Freelance**. Kategori baru muncul otomatis sebagai filter bila dipakai.

### Gambar sampul

- Ukuran 1200 x 630 px (rasio 1,9:1).
- Foto: format JPG atau WebP, usahakan di bawah 150 KB. Pasang sebagai `cover.jpg` lalu ubah `<meta name="cover" content="cover.jpg">`, dan sebutkan sumber/lisensinya lewat `cover-credit`.
- WhatsApp, LinkedIn, dan Facebook tidak menampilkan SVG sebagai pratinjau. Untuk pratinjau tautan, sediakan juga `cover.png` atau `cover.jpg` dan arahkan `og:image` ke sana.
- Generator di bawah membuat sampul SVG dan PNG otomatis dari judul dan kategori.

---

## Membuat artikel dengan generator (untuk banyak artikel sekaligus)

Artikel yang ada sekarang dibuat dari berkas konten di `artikel-src/content/*.mjs`. Satu berkas berisi beberapa artikel dalam bentuk objek JavaScript sederhana. Generator mengubahnya menjadi folder artikel lengkap (HTML, sampul SVG, sampul PNG, JSON-LD, FAQ, artikel terkait, daftar isi, waktu baca).

```bash
npm run artikel     # buat semua artikel dari artikel-src/content, perbarui articles.js, index.json, dan sitemap
```

Kelebihannya: mengubah tampilan (template) cukup mengedit satu file lalu menjalankan ulang, bukan mengedit ratusan HTML. Lihat [artikel-src/lib.mjs](artikel-src/lib.mjs) untuk template dan diagram, serta [artikel-src/content/01-contoh.mjs](artikel-src/content/01-contoh.mjs) untuk contoh lengkap.

> Peringatan: menjalankan `npm run artikel` menimpa isi folder artikel yang berasal dari generator. Jangan mengedit HTML hasil generator langsung; ubah berkas konten lalu jalankan ulang. Artikel yang Anda buat manual (tidak ada di `artikel-src`) tidak disentuh, tetapi daftar di `articles.js` ditulis ulang dari berkas konten, jadi tambahkan lagi baris artikel manual Anda setelahnya.

### Bentuk satu artikel di berkas konten

```js
{
  slug: 'nama-artikel',                 // alamat, jangan diubah setelah terbit
  title: 'Judul di bawah 60 karakter',
  description: 'Ringkasan 120-160 karakter',
  date: '2026-10-23',
  category: 'AI untuk Semua',
  tags: ['kata kunci 1', 'kata kunci 2'],
  cta: 'none',                          // 'lensara' = kotak promo toko, 'jasa' = ajakan menghubungi Muchson, 'none' = tanpa
  lead: 'Paragraf pembuka.',
  body: [ ...blok... ],
  faq: [['Pertanyaan?', 'Jawaban.']],  // juga menjadi data terstruktur FAQ untuk Google
  sources: [['Nama sumber', 'https://...']],
}
```

### Jenis blok di `body`

| Blok | Bentuk |
| --- | --- |
| Paragraf | `'teks dengan <b>HTML</b> sederhana'` |
| Sub judul | `{ h2: 'Judul' }`, `{ h3: 'Judul kecil' }` |
| Daftar | `{ ul: ['a', 'b'] }`, `{ ol: ['a', 'b'] }` |
| Kotak catatan | `{ callout: 'teks', kind: 'info' \| 'good' \| 'warn' \| 'bad', title: 'Judul' }` |
| Tabel | `{ table: { head: ['A', 'B'], rows: [['1', '2']] } }` |
| Kode | `{ code: 'print(1)' }` |
| Diagram SVG | `{ svg: 'flow' \| 'bars' \| 'cycle' \| 'matrix' \| 'timeline' \| 'versus' \| 'layers' \| 'scale', ...data }` |
| Widget interaktif | `{ w: 'nama-widget', ...konfigurasi }` |

Diagram SVG dirender saat generate (statis, terbaca mesin pencari). Contoh data tiap diagram ada di artikel-artikel yang sudah ada, misalnya `flow` memakai `steps: [{ t: 'Judul', d: 'keterangan' }]`.

### Widget interaktif yang tersedia

Semua berjalan di browser, tanpa server, dan didefinisikan di [public/artikel/_shared/article.js](public/artikel/_shared/article.js). Tiap widget bisa diberi `title` dan `desc`.

| Widget | Fungsi | Konfigurasi utama |
| --- | --- | --- |
| `quiz` | Kuis pilihan ganda dengan skor | `questions: [{ q, options, answer, why }]` |
| `calc` | Kalkulator dengan slider | `inputs: [{ id, label, value, min, max, step, unit }]`, `outputs: [{ label, expr, fmt, unit, big, note }]` (`fmt`: `rp`, `num`, `int`, `pct`, `text`; `expr` memakai id input dan fungsi Math) |
| `checklist` | Daftar centang, progres tersimpan di browser | `items: [...]` |
| `choose` | Tes pilihan yang berujung rekomendasi | `questions: [{ q, options: [{ t, add: { hasil: skor } }] }]`, `results: { hasil: { title, text } }` |
| `compare` | Tab perbandingan | `tabs: [{ label, html }]` |
| `cards` | Kartu yang dibalik saat diketuk | `items: [{ tag, front, backTag, back }]` |
| `builder` | Isi kolom lalu salin teksnya (pembuat prompt, template) | `fields: [{ id, label, placeholder, value, long }]`, `template` dengan `{id}` |
| `timer` | Pewaktu bertahap (Pomodoro, 20-20-20) | `phases: [{ label, sec, hint }]` |
| `sort` | Animasi pengurutan | `algo: 'bubble' \| 'selection' \| 'insertion'`, `size` |
| `search` | Pencarian linear vs biner | `size` |
| `bigo` | Pertumbuhan Big O | (tanpa konfigurasi) |
| `stack` | Simulasi stack dan queue | `mode: 'stack' \| 'queue'` |
| `recursion` | Jumlah pemanggilan Fibonacci | (tanpa konfigurasi) |
| `bfs` | Mencari jalur terpendek di labirin | `walls` (opsional) |
| `hash` | Hash table dengan tabrakan | (tanpa konfigurasi) |
| `binary` | Bit yang bisa dibalik | (tanpa konfigurasi) |
| `regex` | Penguji regex | `pattern`, `flags`, `text` |
| `sqlplay` | Query SQL pada tabel kecil | `table`, `cols`, `rows` |
| `password` | Perkiraan kekuatan kata sandi (lokal) | (tanpa konfigurasi) |
| `contrast` | Pemeriksa kontras warna WCAG | `fg`, `bg` |
| `chunk` | Memotong teks untuk RAG | `text` |
| `minirag` | Pencarian dokumen mini dan prompt RAG | `docs: [{ title, text }]`, `examples` |
| `nexttoken` | Cara model bahasa menebak kata berikutnya | `start`, `model: { kata: { berikutnya: bobot } }` |
| `eyefocus`, `astig`, `rx`, `frame` | Simulasi mata minus, silinder, resep, dan ukuran frame | (tanpa konfigurasi) |

Menambah widget baru: tambahkan fungsi `W.namaWidget = (body, cfg) => { ... }` di `article.js`, lalu pakai `{ w: 'namaWidget', ... }` di artikel.

---

## Promo Lensara di artikel

Kotak promo (`cta: 'lensara'`) membaca isinya dari [public/artikel/_shared/promo.json](public/artikel/_shared/promo.json). Ubah teks, syarat, atau alamat tujuan **di satu file itu**, tidak perlu mengedit artikel satu per satu. Kotak ini diberi label "Info toko Lensara" agar jelas bahwa itu informasi toko.

Aturan editorial yang dipakai: artikel bersifat edukatif dan jujur lebih dulu (misalnya bukti kacamata blue light memang lemah, dan itu ditulis apa adanya), baru di akhir ada ajakan ke toko.

---

## SEO yang sudah diterapkan

- Setiap artikel punya alamat sendiri, `title`, `description`, `canonical`, Open Graph, Twitter Card, dan `og:image` 1200x630.
- Data terstruktur JSON-LD: `Article`, `BreadcrumbList`, dan `FAQPage` bila ada tanya jawab.
- `public/sitemap.xml` dibuat otomatis (beranda, daftar artikel, semua artikel). `robots.txt` menunjuk ke sitemap itu.
- Halaman daftar `/artikel/` di-prerender saat build dengan tautan ke semua artikel di dalam HTML-nya.
- Tautan antar artikel ("Baca juga"), daftar isi, breadcrumb, dan waktu baca.
- Font dan CSS ringan, gambar sampul SVG kecil, tanpa pustaka tambahan di halaman artikel.

Setelah deploy, daftarkan `https://muchson.web.id/sitemap.xml` di Google Search Console agar artikel lebih cepat terindeks.

---

## Bagian lain situs

- **Teaching**: kartu materi di `src/data/teaching.js`. Kursus AION "Digital Learning" membuka `https://aion-dl.vercel.app/day/1/` sampai `/day/16/` di dalam situs.
- **Latihan Python**: ditampilkan di `#/latihan` lewat iframe.
- **Cloudflare**: `wrangler.jsonc` memberi tahu Workers Builds untuk mengunggah folder `dist`.

### Berkas penting

| Berkas | Fungsi |
| --- | --- |
| `src/data/articles.js` | Daftar artikel yang tayang |
| `src/components/pages/ArticlesPage.jsx` | Halaman daftar: pencarian, filter, kartu |
| `src/components/ui/LatestArticles.jsx` | Tiga artikel terbaru di beranda |
| `scripts/build-articles.mjs` | Membaca `<head>` artikel, menulis `index.json` dan `sitemap.xml` |
| `scripts/prerender.mjs` | HTML statis untuk `/artikel/` setelah build |
| `artikel-src/` | Generator dan berkas konten artikel |
| `vite.config.js` | Juga membuat server dev menyajikan folder artikel dengan benar |
