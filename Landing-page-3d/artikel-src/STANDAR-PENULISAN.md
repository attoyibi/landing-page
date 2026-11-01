# Standar penulisan artikel

Acuan untuk semua artikel di `artikel-src/content/` (Indonesia) dan `artikel-src/content-en/` (Inggris).
Aturan bertanda **[lint]** dicek otomatis oleh `npm run artikel:lint`; aturan bertanda **[otomatis]** sudah dikerjakan template, penulis tidak perlu berbuat apa-apa.

## 1. Dasar pemikiran

Standar ini disusun dari pembandingan nyata (Oktober 2026), bukan selera:

| Praktik | Digital Skola | RevoU (Kosakata) | web.dev / Google docs | Artikel kita sekarang |
|---|---|---|---|---|
| Definisi langsung di paragraf pertama | ya | ya | ya | ya (`lead`) |
| Penulis bernama + profil | tidak (tim redaksi) | tidak | ya, foto dan tautan profil | ya, kotak penulis |
| Tanggal terbit **dan** diperbarui | terbit = diperbarui, copyright 2024 | tahun di judul | keduanya, di kepala dan kaki | terbit + diperbarui bila berbeda **[otomatis]** |
| Daftar isi yang bisa diklik | ada, sering kosong | tidak jelas | sidebar | ya, ikut posisi baca |
| Sumber dan referensi luar | **tidak ada** | tidak ada | banyak, ke spesifikasi resmi | sebagian (88 artikel belum) **[lint]** |
| Alt text gambar | memakai teks judul / kosong | ada | deskriptif | otomatis dari label diagram |
| Keterangan gambar | tidak ada | tidak ada | ya, berisi poin utama | otomatis bernomor |
| Tabel dengan caption | tidak | tidak | ya | otomatis **[otomatis]** |
| Intisari di awal | "Rangkuman" berulang | tidak | ya | wajib untuk artikel baru **[lint]** |
| CTA berulang | 4 kali, teks sama | banyak | tidak ada | satu, di akhir |
| Terjemahan | tidak | tidak | pilihan bahasa di setiap halaman | Indonesia + Inggris |

Kesimpulan: kompetitor lokal unggul di struktur "Apa itu X?" dan kelengkapan FAQ, tetapi lemah di transparansi (penulis, sumber, tanggal)
dan aksesibilitas. Standar internasional (web.dev, Google developer style guide, W3C WAI) unggul di sana. Kita mengambil keduanya.

## 2. Struktur wajib

1. **Judul** ≤ 60 karakter, kata kunci di depan. **[lint]**
2. **Deskripsi** 120–160 karakter, menjawab "apa yang saya dapat bila membaca ini". **[lint]**
3. **Lead** 80–360 karakter: definisi atau janji artikel, bukan basa-basi. **[lint]**
4. **Intisari** (`takeaways`, 3–5 butir) langsung setelah lead, untuk pembaca yang hanya memindai. Artikel kuliah memakai blok `summary` di akhir. **[lint]**
5. **Minimal 3 judul bagian (H2)**; H3 hanya di bawah H2, tidak melompat level. **[lint]**
6. **Paragraf** ≤ 120 kata, satu gagasan per paragraf. **[lint]**
7. **Tanya jawab** minimal 2 pertanyaan yang benar-benar sering ditanyakan (dipakai juga sebagai data terstruktur). **[lint]**
8. **Referensi**: minimal satu sumber tepercaya (spesifikasi, dokumentasi resmi, penelitian) dengan label yang jelas. Klaim kesehatan, hukum, atau angka wajib bersumber. **[lint]**
9. **Tanggal**: `date` = terbit. Saat isi direvisi bermakna, isi `updated` (jangan hanya mengganti tanggal). **[lint]**
10. **Tag** 3–8. **[lint]**
11. **Penulis, waktu baca, tingkat kesulitan, prasyarat** tampil di kepala artikel. **[otomatis]**

## 3. Gaya bahasa

- Kalimat aktif, sapaan konsisten ("Anda"), istilah asing dicetak miring saat pertama muncul, singkatan dijelaskan.
- Judul bagian memakai huruf kapital hanya di awal (sentence case). Gunakan pertanyaan bila itu yang dicari orang ("Apa bedanya minus dan silinder?").
- Tautan dengan teks yang menjelaskan tujuan ("panduan resmi WCAG 2.2"), bukan "klik di sini". **[lint]**
- Notasi seperti `List<Integer>` atau `<button>` ditulis di dalam `<code>` dengan `&lt;` `&gt;`. Build meng-escape otomatis bila lupa, dan linter memberi peringatan.
- Satu CTA per artikel, di akhir.

## 4. Gambar dan diagram

**Prinsip** (W3C WAI Images, Google developer documentation style guide):

1. Pakai gambar hanya bila menjelaskan sesuatu yang sulit dijelaskan dengan kata. Jangan memakai gambar untuk teks, kode, atau keluaran terminal; tulis sebagai teks.
2. Diagram dibuat sebagai **SVG** lewat blok `svg` (alur, siklus, matriks, linimasa, dll.). Tidak ada teks penting yang hanya ada di dalam gambar.
3. Setiap gambar informatif punya **teks alternatif** ≤ 155 karakter yang menyampaikan *isi*-nya, tidak diawali "gambar/foto", tidak sama persis dengan caption. **[lint]**
4. Gambar hiasan atau yang isinya sudah ada di teks: `decorative: true` (alt kosong). Sampul artikel sudah otomatis hiasan karena judulnya ada di H1. **[otomatis]**
5. Informasi kompleks (diagram, grafik) harus tersedia sebagai teks. Blok `svg` otomatis menyertakan "Deskripsi teks diagram" yang bisa dibuka. **[otomatis]**
6. Setiap gambar punya **keterangan bernomor** ("Gambar 2. ..."). Rujuk di teks dengan nomor, bukan "gambar di atas". **[otomatis]**
7. Selalu isi `width` dan `height` agar halaman tidak bergeser saat memuat. **[lint]**
8. Format: WebP/AVIF/JPG untuk foto, PNG untuk tangkapan layar, SVG untuk diagram. Jangan GIF animasi. Usahakan ≤ 150 KB. **[lint]**
9. Layar retina: sediakan versi 2x (`nama@2x.webp`) dan isi `hires`. Jangan memperbesar gambar 1x.
10. Tangkapan layar: potong ke bagian relevan, tutup data pribadi dengan kotak solid (bukan blur).
11. Foto dari pihak lain wajib `credit` (nama + lisensi).

**Cara menaruh foto atau tangkapan layar:**

```js
// 1. simpan file di artikel-src/images/<slug-artikel>/kacamata-blue-light.webp (dan kacamata-blue-light@2x.webp)
// 2. tambahkan blok di body artikel:
{ img: 'kacamata-blue-light.webp', hires: 'kacamata-blue-light@2x.webp', width: 800, height: 450,
  alt: 'Pengguna laptop memakai kacamata dengan lensa blue light di meja kerja.',
  caption: 'Lensa blue light mengurangi, bukan menghilangkan, cahaya biru dari layar.',
  credit: 'Nama Fotografer, CC BY 4.0' },
// 3. npm run artikel   (file disalin otomatis ke folder artikel)
```

## 5. Tabel, kode, dan komponen

- Tabel: `head` wajib; `caption` opsional tetapi dianjurkan. Tanpa caption, judul bagian di atasnya dipakai sebagai nama tabel untuk pembaca layar. Kolom pertama bisa menjadi judul baris dengan `rowHeader: true`. **[otomatis]**
- Kode: selalu isi `lang`. Gunakan `run: true` agar keluaran asli ditampilkan (bukan karangan). Blok kode yang bisa di-scroll otomatis dapat difokus dengan keyboard. **[otomatis]**
- Callout (`kind: 'good' | 'warn' | 'bad'`) otomatis diberi label teks "Tips / Perhatian / Hindari", sehingga maknanya tidak hanya bergantung pada warna. **[otomatis]**
- Widget interaktif wajib punya `title` dan `desc` yang menjelaskan apa yang harus dicoba. **[lint]**

## 6. Aksesibilitas (WCAG 2.2 AA)

Yang dijamin template dan diaudit dengan `npm run a11y` (axe-core di browser sungguhan):

| Kriteria | Cara dipenuhi |
|---|---|
| 1.1.1 Konten non-teks | alt pada gambar, `role="img"` + label pada diagram, deskripsi teks diagram |
| 1.3.1 Info dan hubungan | `<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`, tabel dengan `caption` dan `scope`, label terhubung ke input |
| 1.4.1 Penggunaan warna | callout berlabel teks (Tips/Perhatian/Hindari); kuis menulis "Benar." atau "Belum tepat." selain mewarnai opsi |
| 1.4.3 / 1.4.11 Kontras | teks ≥ 4,5:1, komponen UI ≥ 3:1 (diuji otomatis; demo kontras sengaja dikecualikan dengan `data-a11y-demo`) |
| 1.4.10 Reflow | kepala halaman membungkus; tabel dan kode punya wadah scroll sendiri (diuji pada 320 px: tidak ada scroll horizontal di halaman) |
| 2.1.1 Keyboard | semua area scroll bisa difokus; tombol dan widget bisa dipakai tanpa mouse |
| 2.4.1 Lewati blok | tautan "Lewati ke isi artikel" |
| 2.4.7 / 2.4.11 Fokus | indikator fokus 2 px; `scroll-padding-top` agar fokus tidak tertutup header lengket |
| 2.5.8 Ukuran target | target ≥ 24×24 px atau berjarak cukup |
| 3.1.1 / 3.1.2 Bahasa | `<html lang>` per halaman, atribut `lang` pada tautan ganti bahasa |
| 4.1.2 Nama, peran, nilai | tombol berstatus memakai `aria-pressed`, tidak ada kontrol bersarang |

Pemeriksaan otomatis hanya menangkap sebagian masalah. Sebelum merilis perubahan besar, uji manual: seluruh halaman dengan Tab saja, zoom 200%,
dan satu pembaca layar (NVDA/VoiceOver).

### Hasil terukur

Audit `npm run a11y` (axe-core 4.14, WCAG 2.2 A/AA, Chrome sungguhan, seluruh 252 artikel Indonesia):

| Tahap | Halaman bermasalah |
|---|---|
| Sebelum standar ini | 156 dari 252 (62%) |
| Setelah pola template dan perbaikan widget | **0 dari 252** |

Penyebab terbesar sebelumnya: blok kode dan tabel yang bisa di-scroll tetapi tidak bisa difokus keyboard (111 halaman), atribut ARIA keliru pada tombol
tab (52), kontras warna (19), dan teks seperti `<button>` yang ditulis polos di artikel sehingga browser membuat tombol kosong sungguhan (beberapa halaman).

## 7. Dua bahasa (Indonesia + Inggris)

- Terjemahan ada di `artikel-src/content-en/*.mjs` (satu berkas per berkas sumber di `content/`), satu objek per artikel dengan `slug` = slug Indonesia dan `enSlug` = slug Inggris.
- Yang diterjemahkan: `title`, `description`, `lead`, `tags`, `body`, `faq`, `takeaways`, `level`, `prereq`, `sources` (label). Sisanya (tanggal, kategori, CTA) diwarisi.
- Di `body` terjemahan, `{ keep: n }` memakai ulang blok ke-n dari versi Indonesia tanpa diubah (kode, diagram tanpa teks).
- Terjemahkan **makna dan nada**, bukan kata demi kata. Pakai ejaan Inggris Amerika. Satuan dan mata uang lokal (Rp, WIB) dipertahankan dan dijelaskan bila perlu.
- URL Inggris: `/en/articles/<enSlug>/`; ada `hreflang` dua arah, dan tautan "English / Bahasa Indonesia" di kepala artikel yang punya terjemahan. **[otomatis]**
- Artikel tanpa terjemahan tidak punya halaman Inggris (tidak ada halaman setengah jadi). Di daftar `/en/articles/` artikel itu tetap muncul, ditandai "Available in Indonesian only", dan tautannya menuju versi Indonesia.
- Teks bawaan widget (tombol, label, penjelasan hasil) diterjemahkan lewat kamus `public/artikel/_shared/i18n-en.js`. Setelah menerjemahkan artikel baru, jalankan
  `npm run a11y -- --lang en`: alat ini juga melaporkan setiap teks Indonesia yang masih tampil di halaman Inggris (`language-leak`), siap ditambahkan ke kamus.
- Halaman utama (React) memakai `src/i18n/ui.js` untuk teks antarmuka dan pasangan `{ id, en }` untuk konten (`constants/`, `data/teaching.js`). Bahasa ditentukan alamat: `/` Indonesia, `/en/` Inggris.

## 8. Alur kerja

```bash
npm run artikel:lint            # cek standar, ringkasan
npm run artikel:lint -- --verbose
npm run artikel                 # lint (error menghentikan) + buat semua halaman
npm run a11y                    # audit WCAG 2.2 AA di browser (butuh Chrome/Edge)
npm run a11y -- --sample 20     # cek cepat
```
