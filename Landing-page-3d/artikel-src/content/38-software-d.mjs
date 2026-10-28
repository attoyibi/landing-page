const D = '2026-10-28';
const C = 'Rekayasa Software';

export default [
    {
        slug: 'vue-react-atau-angular-memilih-framework-frontend',
        title: 'Vue, React, atau Angular? Cara Memilih Framework',
        description: 'Perbandingan jujur Vue, React, dan Angular dari pengalaman memakai ketiganya: gaya komponen, kurva belajar, ekosistem, lowongan, dan rekomendasi.',
        date: D, category: C, tags: ['Vue vs React', 'Angular', 'framework frontend', 'JavaScript', 'web development'], cta: 'jasa',
        lead: 'Perdebatan framework frontend sering terasa seperti perdebatan klub sepak bola. Saya pernah memakai ketiganya di proyek nyata, dan kesimpulannya membosankan tetapi jujur: ketiganya mampu membangun aplikasi besar. Yang membedakan adalah gaya kerja, struktur yang dipaksakan, dan ekosistem di sekitarnya.',
        body: [
            { h2: 'Komponen yang sama dalam tiga gaya' },
            `Sebuah tombol penghitung sederhana:`,
            { w: 'compare', title: 'Pilih framework', tabs: [
                { label: 'Vue', html: '<pre><code>&lt;script setup&gt;\nimport { ref } from "vue";\nconst jumlah = ref(0);\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;button @click="jumlah++"&gt;\n    Diklik {{ jumlah }} kali\n  &lt;/button&gt;\n&lt;/template&gt;</code></pre>Template mirip HTML biasa, logika di blok script.' },
                { label: 'React', html: '<pre><code>import { useState } from "react";\n\nexport default function Penghitung() {\n  const [jumlah, setJumlah] = useState(0);\n  return (\n    &lt;button onClick={() =&gt; setJumlah(jumlah + 1)}&gt;\n      Diklik {jumlah} kali\n    &lt;/button&gt;\n  );\n}</code></pre>Semua dalam JavaScript (JSX).' },
                { label: 'Angular', html: '<pre><code>import { Component, signal } from "@angular/core";\n\n@Component({\n  selector: "app-penghitung",\n  template: `\n    &lt;button (click)="tambah()"&gt;\n      Diklik {{ jumlah() }} kali\n    &lt;/button&gt;`,\n})\nexport class Penghitung {\n  jumlah = signal(0);\n  tambah() { this.jumlah.update(n =&gt; n + 1); }\n}</code></pre>Kelas TypeScript dengan dekorator dan signals.' },
            ] },

            { h2: 'Perbandingan karakter' },
            { table: { head: ['Aspek', 'Vue', 'React', 'Angular'], rows: [
                ['Jenis', 'Framework progresif', 'Library UI', 'Framework lengkap'],
                ['Bahasa', 'JS atau TS', 'JS atau TS (JSX)', 'TypeScript'],
                ['Routing, state, form', 'Resmi: Vue Router, Pinia', 'Pilih sendiri (React Router, Zustand, TanStack)', 'Semua bawaan'],
                ['Kurva belajar', 'Paling landai', 'Sedang', 'Paling curam'],
                ['Struktur proyek', 'Fleksibel', 'Sangat bebas', 'Ketat dan seragam'],
                ['Meta-framework', 'Nuxt', 'Next.js, React Router', 'Angular SSR'],
                ['Sering dipakai di', 'Startup, agensi, Laravel', 'Startup sampai big tech', 'Enterprise, perbankan, pemerintahan'],
            ] } },

            { h2: 'Kelebihan dan kekurangan dari dekat' },
            { w: 'cards', title: 'Ketuk tiap framework', items: [
                { tag: 'Vue', front: 'Cepat produktif, dokumentasi sangat ramah.', backTag: 'Perhatikan', back: 'Ekosistem lebih kecil dari React. Integrasinya dengan Laravel (Inertia) sangat nyaman. Pilihan bagus untuk tim kecil dan pemula.' },
                { tag: 'React', front: 'Ekosistem terbesar dan lowongan kerja paling banyak.', backTag: 'Perhatikan', back: 'Banyak keputusan harus Anda ambil sendiri. Pengetahuan React juga terpakai di React Native untuk mobile.' },
                { tag: 'Angular', front: 'Semua tersedia dan seragam, cocok untuk tim besar.', backTag: 'Perhatikan', back: 'Konsepnya banyak (dependency injection, RxJS, modul). Terasa berat untuk proyek kecil, tetapi sangat terstruktur untuk sistem besar berumur panjang.' },
            ] },

            { h2: 'Mana yang cocok untuk Anda?' },
            { w: 'choose', title: 'Jawab tiga pertanyaan', questions: [
                { q: 'Apa tujuan utama Anda?', options: [{ t: 'Cari kerja secepatnya sebagai frontend developer', add: { react: 3 } }, { t: 'Membangun produk sendiri atau proyek klien dengan cepat', add: { vue: 3 } }, { t: 'Bekerja di perusahaan besar atau sistem internal kompleks', add: { angular: 3 } }] },
                { q: 'Backend yang Anda pakai?', options: [{ t: 'Laravel atau PHP', add: { vue: 2 } }, { t: 'Node.js, atau ingin full-stack JavaScript', add: { react: 2 } }, { t: 'Java atau .NET', add: { angular: 2 } }] },
                { q: 'Anda lebih suka...', options: [{ t: 'Bebas memilih alat sendiri', add: { react: 2 } }, { t: 'Ada aturan yang jelas dari framework', add: { angular: 2 } }, { t: 'Di tengah: struktur ringan, mudah dimulai', add: { vue: 2 } }] },
            ], results: { vue: { title: 'Mulai dengan Vue', text: 'Anda akan cepat menghasilkan aplikasi yang rapi. Pelajari Composition API, Pinia, dan Vue Router, lalu Nuxt bila butuh SSR.' }, react: { title: 'Mulai dengan React', text: 'Peluang kerja terluas. Kuasai komponen, props, state, dan hooks, lalu Next.js. Hati-hati jangan langsung memasang terlalu banyak library.' }, angular: { title: 'Mulai dengan Angular', text: 'Investasi awal lebih besar, tetapi struktur yang Anda pelajari sangat dihargai di lingkungan enterprise. Mulai dari standalone components dan signals.' } } },

            { h2: 'Yang lebih penting dari pilihan framework' },
            { ul: ['<b>JavaScript dan TypeScript yang kuat.</b> Framework berganti, bahasa tetap.', '<b>HTML semantik dan CSS</b>, termasuk aksesibilitas.', '<b>Cara kerja browser:</b> event, fetch, async, rendering.', '<b>Pola umum:</b> komponen, state, props, routing, form, pemanggilan API. Semua framework punya ini dengan nama berbeda.'] },
            { callout: 'Begitu menguasai satu framework dengan baik, pindah ke yang lain biasanya hanya butuh beberapa minggu karena konsep dasarnya sama.', kind: 'info', title: 'Kabar baik' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Framework yang menyediakan routing, form, dan HTTP client bawaan?', options: ['React', 'Angular', 'Vue'], answer: 1, why: 'Angular adalah framework lengkap "batteries included".' },
                { q: 'Meta-framework untuk Vue adalah...', options: ['Next.js', 'Nuxt', 'Remix'], answer: 1, why: 'Nuxt menambah SSR, routing berbasis file, dan lainnya untuk Vue.' },
            ] },
        ],
        faq: [
            ['Mana yang paling cepat performanya?', 'Untuk sebagian besar aplikasi bisnis, perbedaan performa ketiganya tidak terasa oleh pengguna. Cara menulis kode dan ukuran bundle lebih menentukan.'],
            ['Bagaimana dengan Svelte?', 'Svelte menarik dan sangat ringan, dengan komunitas yang tumbuh. Lowongan kerjanya masih lebih sedikit dibanding tiga besar.'],
            ['Apakah jQuery masih perlu dipelajari?', 'Untuk proyek baru tidak perlu. JavaScript modern sudah menyediakan hampir semua yang dulu dibutuhkan dari jQuery, tetapi Anda mungkin menemuinya di proyek lama.'],
        ],
        sources: [
            ['Vue.js: Introduction', 'https://vuejs.org/guide/introduction.html'],
            ['React: Quick Start', 'https://react.dev/learn'],
            ['Angular: What is Angular?', 'https://angular.dev/overview'],
            ['State of JavaScript (survei tahunan developer)', 'https://stateofjs.com/'],
        ],
    },

    {
        slug: 'vue-3-untuk-pemula-composition-api',
        title: 'Vue 3 untuk Pemula: Composition API dengan Contoh',
        description: 'Belajar Vue 3 dari nol dengan contoh aplikasi daftar tugas: membuat proyek Vite, ref, reactive, computed, v-for, v-model, props, emit, dan memanggil API.',
        date: D, category: C, tags: ['Vue 3', 'Composition API', 'belajar Vue', 'frontend', 'JavaScript framework'], cta: 'jasa',
        lead: 'Vue terkenal karena mudah dimulai: Anda bisa membuat aplikasi interaktif hanya dengan HTML, sedikit JavaScript, dan beberapa atribut khusus. Di artikel ini kita membangun aplikasi daftar tugas kecil sambil mengenal konsep inti Vue 3.',
        body: [
            { h2: 'Membuat proyek' },
            { code: 'npm create vue@latest daftar-tugas\ncd daftar-tugas\nnpm install\nnpm run dev' },
            `Perintah ini memakai Vite, sehingga server pengembangan menyala dalam hitungan detik dan perubahan kode langsung terlihat di browser.`,

            { h2: 'Reaktivitas: ref dan computed' },
            `Inti Vue adalah <b>reaktivitas</b>: ketika data berubah, tampilan ikut berubah otomatis.`,
            { code: '<script setup>\nimport { ref, computed } from "vue";\n\nconst tugasBaru = ref("");\nconst daftar = ref([\n  { id: 1, teks: "Belajar ref", selesai: true },\n  { id: 2, teks: "Belajar computed", selesai: false },\n]);\n\nconst sisa = computed(() => daftar.value.filter(t => !t.selesai).length);\n\nfunction tambah() {\n  if (!tugasBaru.value.trim()) return;\n  daftar.value.push({ id: Date.now(), teks: tugasBaru.value, selesai: false });\n  tugasBaru.value = "";\n}\n</script>' },
            { ul: ['<code>ref()</code> membungkus nilai agar reaktif. Di dalam script, akses dengan <code>.value</code>; di template tidak perlu.', '<code>computed()</code> menghitung nilai turunan dan hanya dihitung ulang bila datanya berubah.', '<code>reactive()</code> alternatif untuk objek, tetapi <code>ref</code> lebih konsisten untuk pemula.'] },

            { h2: 'Template: v-model, v-for, v-if, @click' },
            { code: '<template>\n  <h1>Tugas ({{ sisa }} belum selesai)</h1>\n\n  <form @submit.prevent="tambah">\n    <input v-model="tugasBaru" placeholder="Tugas baru" />\n    <button>Tambah</button>\n  </form>\n\n  <ul>\n    <li v-for="t in daftar" :key="t.id" :class="{ selesai: t.selesai }">\n      <input type="checkbox" v-model="t.selesai" />\n      {{ t.teks }}\n    </li>\n  </ul>\n\n  <p v-if="daftar.length === 0">Belum ada tugas.</p>\n</template>' },
            { table: { head: ['Direktif', 'Fungsi'], rows: [['<code>{{ }}</code>', 'Menampilkan nilai'], ['<code>v-model</code>', 'Sinkron dua arah input dan data'], ['<code>v-for</code> + <code>:key</code>', 'Mengulang elemen untuk tiap item'], ['<code>v-if</code> / <code>v-show</code>', 'Menampilkan bersyarat'], ['<code>:atribut</code>', 'Singkatan v-bind, atribut dari data'], ['<code>@event</code>', 'Singkatan v-on, menangani event']] } },

            { h2: 'Memecah menjadi komponen: props dan emit' },
            { code: '<!-- ItemTugas.vue -->\n<script setup>\nconst props = defineProps({ tugas: Object });\nconst emit = defineEmits(["hapus"]);\n</script>\n\n<template>\n  <li>\n    {{ props.tugas.teks }}\n    <button @click="emit(\'hapus\', props.tugas.id)">Hapus</button>\n  </li>\n</template>\n\n<!-- Dipakai di induk -->\n<ItemTugas v-for="t in daftar" :key="t.id" :tugas="t" @hapus="hapusTugas" />' },
            { svg: 'flow', label: 'Aliran data antar komponen', steps: [{ t: 'Induk', d: 'memegang data' }, { t: 'Props ke bawah', d: ':tugas="t"' }, { t: 'Anak menampilkan', d: 'tidak mengubah props' }, { t: 'Emit ke atas', d: '"hapus", id' }, { t: 'Induk mengubah data', d: 'tampilan ikut berubah' }] },

            { h2: 'Mengambil data dari API' },
            { code: '<script setup>\nimport { ref, onMounted } from "vue";\nconst produk = ref([]);\nconst memuat = ref(true);\nconst galat = ref(null);\n\nonMounted(async () => {\n  try {\n    const res = await fetch("/api/produk");\n    if (!res.ok) throw new Error("Gagal memuat");\n    produk.value = await res.json();\n  } catch (e) {\n    galat.value = e.message;\n  } finally {\n    memuat.value = false;\n  }\n});\n</script>' },
            { callout: 'Selalu siapkan tiga keadaan: sedang memuat, berhasil, dan gagal. Banyak aplikasi pemula hanya menampilkan keadaan berhasil, sehingga layar kosong ketika jaringan lambat.', kind: 'info', title: 'Tiga keadaan data' },

            { h2: 'Ekosistem resmi' },
            { ul: ['<b>Vue Router</b> untuk halaman dan navigasi.', '<b>Pinia</b> untuk state yang dipakai banyak komponen (keranjang, user login).', '<b>Nuxt</b> untuk SSR, SEO, dan routing berbasis file.', '<b>Vue DevTools</b> ekstensi browser untuk melihat state dan komponen.'] },
            { w: 'checklist', title: 'Latihan bertahap', items: ['Tambahkan tombol hapus pada tiap tugas.', 'Simpan daftar ke localStorage dengan watch().', 'Tambahkan filter: semua, aktif, selesai.', 'Pecah form tambah menjadi komponen sendiri.', 'Ambil daftar awal dari API palsu (jsonplaceholder).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Di dalam <script setup>, cara mengubah nilai ref bernama jumlah?', options: ['jumlah = 5', 'jumlah.value = 5', 'this.jumlah = 5'], answer: 1, why: 'ref diakses lewat .value di script.' },
                { q: 'Bagaimana komponen anak memberi tahu induk bahwa tombol hapus diklik?', options: ['Mengubah props langsung', 'emit sebuah event', 'Memakai v-if'], answer: 1, why: 'Data turun lewat props, kejadian naik lewat emit.' },
            ] },
        ],
        faq: [
            ['Options API atau Composition API?', 'Keduanya didukung di Vue 3. Composition API lebih fleksibel untuk komponen besar dan berbagi logika. Untuk proyek baru, banyak tim memilih Composition API dengan script setup.'],
            ['Apakah Vue cocok dengan Laravel?', 'Sangat cocok. Laravel menyediakan starter kit dengan Vue dan Inertia, sehingga Anda bisa membuat aplikasi satu halaman tanpa membangun API terpisah.'],
            ['Perlukah TypeScript?', 'Tidak wajib untuk mulai. Vue 3 mendukung TypeScript dengan sangat baik, dan bermanfaat begitu proyek membesar.'],
        ],
        sources: [
            ['Vue.js: Quick Start', 'https://vuejs.org/guide/quick-start.html'],
            ['Vue.js: Reactivity Fundamentals', 'https://vuejs.org/guide/essentials/reactivity-fundamentals.html'],
            ['Pinia: The intuitive store for Vue', 'https://pinia.vuejs.org/'],
        ],
    },

    {
        slug: 'laravel-untuk-pemula-mvc-routing-eloquent',
        title: 'Laravel untuk Pemula: MVC, Routing, dan Eloquent',
        description: 'Panduan Laravel untuk pemula: instalasi, struktur folder, routing, controller, Blade, migration, Eloquent ORM, validasi form, dan alur request dalam pola MVC.',
        date: D, category: C, tags: ['Laravel', 'PHP', 'MVC', 'Eloquent', 'belajar Laravel'], cta: 'jasa',
        lead: 'Laravel adalah framework PHP yang membuat pekerjaan backend sehari-hari terasa ringan: routing, database, autentikasi, antrean, email, hingga penjadwalan sudah tersedia dengan gaya penulisan yang rapi. Banyak aplikasi bisnis di Indonesia dibangun dengan Laravel, dan lowongannya selalu ada.',
        body: [
            { h2: 'Alur sebuah request dalam MVC' },
            { svg: 'flow', label: 'Dari URL sampai halaman', steps: [{ t: 'Request', d: 'GET /produk' }, { t: 'Route', d: 'routes/web.php' }, { t: 'Controller', d: 'logika' }, { t: 'Model', d: 'Eloquent ↔ database' }, { t: 'View', d: 'Blade → HTML' }], caption: 'Model mengurus data, View mengurus tampilan, Controller menghubungkan keduanya.' },

            { h2: 'Instalasi' },
            { code: '# butuh PHP 8.2+ dan Composer\ncomposer create-project laravel/laravel toko\ncd toko\nphp artisan serve\n# buka http://127.0.0.1:8000' },
            { table: { head: ['Folder', 'Isi'], rows: [['<code>app/Models</code>', 'Model Eloquent'], ['<code>app/Http/Controllers</code>', 'Controller'], ['<code>routes/web.php</code>', 'Route halaman web'], ['<code>resources/views</code>', 'Template Blade'], ['<code>database/migrations</code>', 'Riwayat struktur tabel'], ['<code>.env</code>', 'Konfigurasi rahasia: database, mail, key']] } },

            { h2: 'Migration: struktur tabel sebagai kode' },
            { code: "php artisan make:model Produk -mc   # model + migration + controller\n\n// database/migrations/xxxx_create_produks_table.php\nSchema::create('produks', function (Blueprint \$table) {\n    \$table->id();\n    \$table->string('nama');\n    \$table->unsignedInteger('harga');\n    \$table->unsignedInteger('stok')->default(0);\n    \$table->timestamps();\n});\n\nphp artisan migrate" },
            `Migration membuat perubahan struktur database tercatat di Git, sehingga semua anggota tim dan server punya struktur yang sama.`,

            { h2: 'Route dan controller' },
            { code: "// routes/web.php\nuse App\\Http\\Controllers\\ProdukController;\nRoute::resource('produk', ProdukController::class);\n// otomatis: index, create, store, show, edit, update, destroy\n\n// app/Http/Controllers/ProdukController.php\npublic function index()\n{\n    \$produk = Produk::orderBy('nama')->paginate(10);\n    return view('produk.index', compact('produk'));\n}\n\npublic function store(Request \$request)\n{\n    \$data = \$request->validate([\n        'nama'  => 'required|string|max:100',\n        'harga' => 'required|integer|min:0',\n        'stok'  => 'integer|min:0',\n    ]);\n    Produk::create(\$data);\n    return redirect()->route('produk.index')->with('ok', 'Produk tersimpan');\n}" },
            { callout: 'Agar Produk::create($data) berjalan, daftarkan kolom yang boleh diisi di model: protected $fillable = [\'nama\', \'harga\', \'stok\']. Ini mencegah pengguna mengisi kolom lain seperti is_admin (mass assignment).', kind: 'warn', title: 'Mass assignment' },

            { h2: 'Blade: template yang aman' },
            { code: "{{-- resources/views/produk/index.blade.php --}}\n@extends('layouts.app')\n\n@section('content')\n  @if (session('ok'))\n    <div class=\"alert\">{{ session('ok') }}</div>\n  @endif\n\n  @forelse (\$produk as \$p)\n    <p>{{ \$p->nama }} - Rp{{ number_format(\$p->harga, 0, ',', '.') }}</p>\n  @empty\n    <p>Belum ada produk.</p>\n  @endforelse\n\n  {{ \$produk->links() }}\n@endsection" },
            `<code>{{ }}</code> otomatis meng-escape HTML sehingga aman dari XSS. Hindari <code>{!! !!}</code> untuk data dari pengguna.`,

            { h2: 'Eloquent: database dengan bahasa PHP' },
            { w: 'cards', title: 'Ketuk untuk melihat kodenya', items: [
                { tag: 'Tugas', front: 'Produk dengan stok di bawah 5.', backTag: 'Eloquent', back: "Produk::where('stok', '<', 5)->get();" },
                { tag: 'Tugas', front: 'Relasi: satu kategori punya banyak produk.', backTag: 'Eloquent', back: 'public function produk() { return $this->hasMany(Produk::class); } lalu $kategori->produk' },
                { tag: 'Tugas', front: 'Hindari N+1 saat menampilkan produk dan kategorinya.', backTag: 'Eloquent', back: "Produk::with('kategori')->get(); // eager loading" },
                { tag: 'Tugas', front: 'Kurangi stok secara atomik.', backTag: 'Eloquent', back: "Produk::whereKey($id)->where('stok', '>', 0)->decrement('stok');" },
            ] },

            { h2: 'Fitur yang membuat Laravel produktif' },
            { ul: ['<b>Starter kit</b> (Breeze, atau starter kit React/Vue/Livewire) untuk login, daftar, reset password.', '<b>Queue</b> untuk pekerjaan berat di belakang layar: kirim email, proses gambar.', '<b>Task scheduling</b> menggantikan banyak cron job.', '<b>Artisan</b> untuk membuat file dan menjalankan perintah.', '<b>Pest/PHPUnit</b> untuk pengujian, sudah terpasang.'] },
            { w: 'checklist', title: 'Proyek latihan: katalog toko', items: ['Migration dan model Produk serta Kategori dengan relasi.', 'CRUD produk dengan validasi.', 'Pencarian nama produk dan pagination.', 'Login admin dengan starter kit.', 'Upload foto produk ke storage.', 'Satu tes fitur untuk menyimpan produk.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Di mana konfigurasi koneksi database ditulis?', options: ['routes/web.php', '.env', 'resources/views'], answer: 1, why: '.env menyimpan konfigurasi dan tidak di-commit.' },
                { q: 'with(\'kategori\') pada Eloquent berguna untuk...', options: ['Validasi', 'Eager loading agar tidak terjadi N+1', 'Membuat tabel'], answer: 1, why: 'Relasi dimuat sekaligus dengan sedikit query.' },
            ] },
        ],
        faq: [
            ['Apakah PHP masih relevan?', 'Ya. PHP menjalankan sebagian besar situs web di dunia, dan Laravel adalah salah satu framework backend paling populer dengan ekosistem yang aktif.'],
            ['Laravel atau Node.js untuk backend?', 'Laravel memberi banyak fitur siap pakai dan struktur jelas. Node.js menarik bila ingin satu bahasa (JavaScript) di frontend dan backend. Keduanya layak.'],
            ['Di mana men-deploy Laravel?', 'VPS dengan Nginx dan PHP-FPM, Laravel Forge, Laravel Cloud, atau shared hosting yang mendukung PHP 8.2+ dan Composer.'],
        ],
        sources: [
            ['Laravel Docs: Installation', 'https://laravel.com/docs/installation'],
            ['Laravel Docs: Eloquent ORM', 'https://laravel.com/docs/eloquent'],
            ['Laravel Docs: Validation', 'https://laravel.com/docs/validation'],
        ],
    },

    {
        slug: 'node-js-dan-express-membuat-api-pertama',
        title: 'Node.js dan Express: Membuat REST API Pertama',
        description: 'Membuat REST API dengan Node.js dan Express: setup, route, middleware, validasi, error handling, koneksi PostgreSQL, variabel lingkungan, dan struktur.',
        date: D, category: C, tags: ['Node.js', 'Express', 'REST API', 'backend JavaScript', 'belajar Node'], cta: 'jasa',
        lead: 'Node.js memungkinkan JavaScript berjalan di server. Dengan Express, Anda bisa membuat API pertama dalam kurang dari 20 baris. Tantangannya bukan membuat API yang jalan, melainkan API yang tetap rapi, aman, dan mudah dirawat saat bertambah besar.',
        body: [
            { h2: 'Mengapa Node.js cepat untuk API?' },
            `Node.js memakai <b>event loop</b>: satu thread utama yang tidak menunggu ketika ada operasi I/O (database, file, jaringan). Selama menunggu jawaban database, Node melayani permintaan lain. Karena itu Node sangat efisien untuk API yang banyak menunggu I/O, tetapi kurang cocok untuk perhitungan berat yang memblokir thread.`,
            { svg: 'cycle', label: 'Event loop sederhana', items: ['Terima request', 'Kirim query ke database', 'Layani request lain sambil menunggu', 'Jawaban database datang', 'Kirim respons'] },

            { h2: 'Setup proyek' },
            { code: 'mkdir api-toko && cd api-toko\nnpm init -y\nnpm install express pg zod\nnpm install -D nodemon' },
            { code: '// package.json\n{\n  "type": "module",\n  "scripts": { "dev": "nodemon src/index.js", "start": "node src/index.js" }\n}' },

            { h2: 'API pertama' },
            { code: "// src/index.js\nimport express from 'express';\nconst app = express();\napp.use(express.json());   // membaca body JSON\n\nconst produk = [{ id: 1, nama: 'Frame Titanium', harga: 450000 }];\n\napp.get('/api/produk', (req, res) => res.json(produk));\n\napp.get('/api/produk/:id', (req, res) => {\n  const p = produk.find(x => x.id === Number(req.params.id));\n  if (!p) return res.status(404).json({ error: 'Produk tidak ditemukan' });\n  res.json(p);\n});\n\napp.listen(3000, () => console.log('API di http://localhost:3000'));" },

            { h2: 'Middleware: lapisan di tengah jalan' },
            `Middleware adalah fungsi yang dijalankan sebelum (atau sesudah) handler route: mencatat log, memeriksa token, membatasi laju.`,
            { code: "function catatLog(req, res, next) {\n  const mulai = Date.now();\n  res.on('finish', () => console.log(req.method, req.url, res.statusCode, Date.now() - mulai + 'ms'));\n  next();   // wajib dipanggil agar lanjut\n}\napp.use(catatLog);\n\nfunction wajibLogin(req, res, next) {\n  if (!req.headers.authorization) return res.status(401).json({ error: 'Perlu login' });\n  next();\n}\napp.post('/api/produk', wajibLogin, tambahProduk);" },

            { h2: 'Validasi input' },
            `Jangan pernah percaya data dari klien. Library seperti Zod membuat validasi ringkas dan pesannya jelas.`,
            { code: "import { z } from 'zod';\nconst ProdukBaru = z.object({\n  nama: z.string().min(2).max(100),\n  harga: z.number().int().nonnegative(),\n});\n\nasync function tambahProduk(req, res) {\n  const hasil = ProdukBaru.safeParse(req.body);\n  if (!hasil.success) return res.status(422).json({ errors: hasil.error.issues });\n  // simpan hasil.data ke database\n  res.status(201).json(hasil.data);\n}" },

            { h2: 'Koneksi PostgreSQL dan variabel lingkungan' },
            { code: "// src/db.js\nimport pg from 'pg';\nexport const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });\n\n// route\napp.get('/api/produk', async (req, res, next) => {\n  try {\n    const { rows } = await pool.query('SELECT id, nama, harga FROM produk ORDER BY nama LIMIT 50');\n    res.json(rows);\n  } catch (e) { next(e); }\n});\n\n// jalankan dengan: node --env-file=.env src/index.js   (Node 20.6+)" },
            { callout: 'Simpan DATABASE_URL dan secret lain di file .env, lalu masukkan .env ke .gitignore. Commit file contoh .env.example tanpa nilai asli.', kind: 'warn', title: 'Rahasia di luar Git' },

            { h2: 'Penanganan error terpusat' },
            { code: "// diletakkan paling akhir, setelah semua route\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(err.status || 500).json({ error: 'Terjadi kesalahan di server' });\n});" },
            `Di Express 5, error dari fungsi async otomatis diteruskan ke handler ini. Di Express 4, bungkus dengan try/catch dan panggil <code>next(e)</code> seperti contoh di atas.`,

            { h2: 'Struktur folder saat proyek membesar' },
            { code: 'src/\n  index.js          # membuat app, memasang middleware\n  routes/produk.js  # definisi route\n  controllers/      # menerima request, memanggil service\n  services/         # logika bisnis\n  db/               # koneksi dan query\n  middleware/       # auth, log, rate limit' },
            { w: 'checklist', title: 'Sebelum API naik ke produksi', items: ['Semua input divalidasi.', 'Query database memakai parameter.', 'Ada handler error terpusat tanpa stack trace ke klien.', 'Secret di variabel lingkungan.', 'CORS dibatasi ke domain yang diizinkan.', 'Rate limit untuk endpoint login.', 'Header keamanan (misalnya helmet).', 'Log permintaan dan error tersimpan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Apa yang terjadi bila middleware tidak memanggil next() dan tidak mengirim respons?', options: ['Request menggantung sampai timeout', 'Express otomatis lanjut', 'Server mati'], answer: 0, why: 'Rantai berhenti di middleware itu.' },
                { q: 'Node.js kurang cocok untuk...', options: ['API yang banyak menunggu database', 'Perhitungan CPU berat di thread utama', 'Aplikasi chat real-time'], answer: 1, why: 'Perhitungan berat memblokir event loop.' },
            ] },
        ],
        faq: [
            ['Express atau framework lain?', 'Express paling sederhana dan banyak tutorialnya. Fastify lebih cepat dengan validasi skema bawaan, NestJS memberi struktur seperti Angular untuk tim besar, dan Hono ringan untuk edge.'],
            ['Perlukah ORM?', 'Tidak wajib. Query SQL langsung dengan pg sudah cukup untuk proyek kecil. Prisma atau Drizzle membantu bila skema dan tim membesar.'],
            ['Bagaimana menjalankan Node.js di produksi?', 'Dengan process manager seperti PM2 atau systemd di VPS, atau platform seperti Railway, Render, Fly.io, dan container Docker.'],
        ],
        sources: [
            ['Express: Getting started', 'https://expressjs.com/en/starter/installing.html'],
            ['Node.js: The Node.js Event Loop', 'https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick'],
            ['Express: Production best practices, security', 'https://expressjs.com/en/advanced/best-practice-security.html'],
        ],
    },

    {
        slug: 'firebase-untuk-pemula-auth-firestore-hosting',
        title: 'Firebase untuk Pemula: Auth, Firestore, dan Hosting',
        description: 'Kenalan dengan Firebase: Authentication, Firestore, Storage, Hosting, menulis security rules, struktur data, biaya, dan kapan Firebase bukan pilihan tepat.',
        date: D, category: C, tags: ['Firebase', 'Firestore', 'Firebase Authentication', 'backend as a service', 'Flutter Firebase'], cta: 'jasa',
        lead: 'Firebase dari Google menyediakan backend siap pakai: login pengguna, database real-time, penyimpanan file, dan hosting. Untuk prototipe, aplikasi mobile Flutter, atau tim tanpa developer backend khusus, Firebase bisa memangkas waktu berminggu-minggu. Syaratnya: memahami cara kerjanya, terutama security rules.',
        body: [
            { h2: 'Layanan yang paling sering dipakai' },
            { table: { head: ['Layanan', 'Fungsi', 'Pengganti di backend biasa'], rows: [['Authentication', 'Login email, Google, Apple, nomor HP', 'Tabel users + sistem login'], ['Cloud Firestore', 'Database dokumen NoSQL, bisa real-time', 'PostgreSQL/MySQL + API'], ['Cloud Storage', 'Simpan foto dan file', 'Folder upload / S3'], ['Hosting', 'Hosting situs statis dengan CDN dan HTTPS', 'Nginx / Vercel / Netlify'], ['Cloud Functions', 'Kode backend yang berjalan saat ada pemicu', 'Server API'], ['Cloud Messaging', 'Notifikasi push', 'Layanan notifikasi']] } },

            { h2: 'Cara berpikir data di Firestore' },
            `Firestore menyimpan <b>dokumen</b> (mirip objek JSON) di dalam <b>koleksi</b>. Tidak ada JOIN. Karena itu data disusun sesuai <b>cara layar membacanya</b>, kadang dengan sengaja menduplikasi sedikit data.`,
            { code: 'kelas (koleksi)\n └─ python-dasar (dokumen)\n     ├─ judul: "Python Dasar"\n     ├─ pengajar: { id: "u7", nama: "Muchson" }   ← disalin agar tidak perlu query kedua\n     └─ peserta (subkoleksi)\n         └─ u12 (dokumen) { nama: "Ani", progres: 60 }' },
            { code: "import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';\n\nconst q = query(\n  collection(db, 'kelas'),\n  where('aktif', '==', true),\n  orderBy('mulai')\n);\n// real-time: dipanggil ulang setiap ada perubahan\nonSnapshot(q, snap => {\n  const daftar = snap.docs.map(d => ({ id: d.id, ...d.data() }));\n  console.log(daftar);\n});" },

            { h2: 'Security rules: bagian yang paling penting' },
            `Aplikasi web dan mobile berbicara <b>langsung</b> ke Firestore dari perangkat pengguna. Satu-satunya penjaga adalah <b>security rules</b>. Rules yang longgar berarti siapa pun yang tahu konfigurasi proyek Anda bisa membaca atau menghapus seluruh database.`,
            { code: "rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n\n    // profil hanya bisa dibaca dan diubah pemiliknya\n    match /users/{uid} {\n      allow read, write: if request.auth != null && request.auth.uid == uid;\n    }\n\n    // kelas boleh dibaca semua user login, diubah hanya admin\n    match /kelas/{id} {\n      allow read: if request.auth != null;\n      allow write: if request.auth.token.admin == true;\n    }\n  }\n}" },
            { callout: 'Mode uji Firestore memberi akses terbuka dengan batas waktu. Jangan biarkan aturan "allow read, write: if true" sampai produksi. Uji rules dengan Emulator Suite sebelum deploy.', kind: 'bad', title: 'Jebakan mode uji' },

            { h2: 'Biaya: dihitung per operasi' },
            `Firestore menagih berdasarkan jumlah <b>baca, tulis, dan hapus dokumen</b>, plus penyimpanan dan transfer data. Ada kuota gratis harian. Desain yang boros, misalnya membaca 1.000 dokumen untuk menampilkan satu angka total, bisa membuat tagihan melonjak saat pengguna bertambah.`,
            { w: 'calc', title: 'Perkiraan jumlah baca per hari', desc: 'Hitung kasar untuk satu layar yang membuka daftar dokumen.', inputs: [{ id: 'u', label: 'Pengguna aktif per hari', value: 500, min: 10, max: 100000, step: 10 }, { id: 'b', label: 'Berapa kali layar dibuka per pengguna', value: 6, min: 1, max: 50, step: 1 }, { id: 'd', label: 'Dokumen dibaca per kali buka', value: 20, min: 1, max: 500, step: 1 }], outputs: [{ label: 'Total baca dokumen per hari', expr: 'u * b * d', fmt: 'num', big: true, note: 'Bandingkan dengan kuota gratis dan harga di halaman pricing Firebase. Pagination dan dokumen ringkasan (counter) bisa memangkas angka ini drastis.' }] },

            { h2: 'Kapan Firebase tepat, kapan tidak' },
            { svg: 'versus', label: 'Cocok dan kurang cocok', left: { title: 'Cocok', items: ['Prototipe dan MVP cepat', 'Aplikasi mobile Flutter', 'Fitur real-time: chat, papan skor', 'Tim kecil tanpa backend khusus'] }, right: { title: 'Kurang cocok', items: ['Laporan dan query relasional rumit', 'Transaksi keuangan kompleks', 'Butuh kendali penuh atas server', 'Data harus di lokasi atau vendor tertentu'] } },
            `Firebase juga kini menyediakan <b>Data Connect</b> berbasis PostgreSQL bagi yang butuh model relasional. Alternatif serupa yang open source adalah Supabase (PostgreSQL) dan Appwrite.`,
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Siapa yang menjaga data Firestore ketika aplikasi mengakses langsung dari perangkat?', options: ['Kode frontend', 'Security rules', 'Tidak ada'], answer: 1, why: 'Kode frontend bisa dimodifikasi pengguna; rules berjalan di server Google.' },
                { q: 'Biaya Firestore terutama dihitung dari...', options: ['Jumlah baris kode', 'Jumlah operasi baca, tulis, hapus dokumen', 'Jumlah developer'], answer: 1, why: 'Desain query memengaruhi tagihan.' },
            ] },
        ],
        faq: [
            ['Apakah Firebase gratis?', 'Ada paket Spark gratis dengan kuota tertentu. Untuk Cloud Functions dan pemakaian lebih besar, perlu paket Blaze (bayar sesuai pemakaian). Pasang anggaran dan peringatan tagihan di Google Cloud.'],
            ['Firestore atau Realtime Database?', 'Untuk proyek baru, Firestore umumnya disarankan karena query dan skalanya lebih baik. Realtime Database masih berguna untuk data sangat sederhana dengan latensi rendah.'],
            ['Apakah config Firebase di frontend rahasia?', 'Tidak. Konfigurasi itu memang publik. Keamanan bergantung pada security rules, App Check, dan pembatasan API key.'],
        ],
        sources: [
            ['Firebase Docs: Cloud Firestore', 'https://firebase.google.com/docs/firestore'],
            ['Firebase Docs: Get started with Cloud Firestore Security Rules', 'https://firebase.google.com/docs/firestore/security/get-started'],
            ['Firebase Pricing', 'https://firebase.google.com/pricing'],
        ],
    },
];
