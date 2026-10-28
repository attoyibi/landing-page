const D = '2026-10-28';
const C = 'Rekayasa Software';

export default [
    {
        slug: 'flutter-untuk-pemula-widget-layout-state',
        title: 'Flutter untuk Pemula: Widget, Layout, dan State',
        description: 'Belajar Flutter dari nol: cara berpikir widget, Stateless vs Stateful, layout Row, Column, Expanded, setState, navigasi, dan contoh aplikasi daftar belanja.',
        date: D, category: C, tags: ['Flutter', 'Dart', 'aplikasi mobile', 'widget Flutter', 'belajar Flutter'], cta: 'jasa',
        lead: 'Flutter memungkinkan satu kode Dart menjadi aplikasi Android, iOS, web, dan desktop. Kuncinya adalah satu ide yang diulang di mana-mana: semua yang tampil di layar adalah widget, dan widget disusun seperti balok yang saling membungkus.',
        body: [
            { h2: 'Semua adalah widget' },
            `Teks, tombol, jarak kosong, bahkan perataan tengah adalah widget. Layar adalah pohon widget: widget induk membungkus anak-anaknya.`,
            { code: "import 'package:flutter/material.dart';\n\nvoid main() => runApp(const AplikasiSaya());\n\nclass AplikasiSaya extends StatelessWidget {\n  const AplikasiSaya({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      home: Scaffold(\n        appBar: AppBar(title: const Text('Halo Flutter')),\n        body: const Center(\n          child: Padding(\n            padding: EdgeInsets.all(16),\n            child: Text('Semua yang Anda lihat adalah widget'),\n          ),\n        ),\n      ),\n    );\n  }\n}" },
            { svg: 'layers', label: 'Pohon widget contoh di atas', items: [{ t: 'MaterialApp', d: 'tema dan navigasi aplikasi' }, { t: 'Scaffold', d: 'kerangka halaman: appBar, body' }, { t: 'Center → Padding', d: 'mengatur posisi dan jarak' }, { t: 'Text', d: 'yang akhirnya terlihat' }] },

            { h2: 'Stateless vs Stateful' },
            { svg: 'versus', label: 'Dua jenis widget', left: { title: 'StatelessWidget', items: ['Tidak berubah setelah dibuat', 'Contoh: label, ikon, kartu statis', 'Lebih sederhana'] }, right: { title: 'StatefulWidget', items: ['Punya data yang bisa berubah', 'Contoh: form, penghitung, checkbox', 'Memanggil setState() untuk menggambar ulang'] } },
            { code: "class Penghitung extends StatefulWidget {\n  const Penghitung({super.key});\n  @override\n  State<Penghitung> createState() => _PenghitungState();\n}\n\nclass _PenghitungState extends State<Penghitung> {\n  int jumlah = 0;\n\n  @override\n  Widget build(BuildContext context) {\n    return ElevatedButton(\n      onPressed: () => setState(() => jumlah++),\n      child: Text('Diklik $jumlah kali'),\n    );\n  }\n}" },

            { h2: 'Layout: Row, Column, Expanded' },
            { table: { head: ['Widget', 'Fungsi'], rows: [['<code>Column</code>', 'Menyusun anak dari atas ke bawah'], ['<code>Row</code>', 'Menyusun anak dari kiri ke kanan'], ['<code>Expanded</code>', 'Mengisi sisa ruang yang tersedia'], ['<code>SizedBox</code>', 'Memberi jarak atau ukuran tetap'], ['<code>Padding</code>', 'Jarak di sekeliling anak'], ['<code>ListView</code>', 'Daftar yang bisa digulir'], ['<code>Stack</code>', 'Menumpuk widget di atas widget lain']] } },
            { code: "Row(\n  children: [\n    const Icon(Icons.shopping_cart),\n    const SizedBox(width: 12),\n    Expanded(child: Text(nama, overflow: TextOverflow.ellipsis)),\n    Text('Rp$harga'),\n  ],\n)" },
            { callout: 'Garis kuning-hitam bertuliskan "RenderFlex overflowed" berarti isi Row atau Column lebih besar dari ruang yang tersedia. Biasanya diatasi dengan Expanded, Flexible, atau membungkus dengan ListView.', kind: 'info', title: 'Error yang pasti Anda temui' },

            { h2: 'Contoh: aplikasi daftar belanja' },
            { code: "class _DaftarBelanjaState extends State<DaftarBelanja> {\n  final _input = TextEditingController();\n  final List<String> _barang = [];\n\n  void _tambah() {\n    if (_input.text.trim().isEmpty) return;\n    setState(() => _barang.add(_input.text.trim()));\n    _input.clear();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(title: Text('Belanja (${_barang.length})')),\n      body: Column(children: [\n        Padding(\n          padding: const EdgeInsets.all(12),\n          child: Row(children: [\n            Expanded(child: TextField(controller: _input, onSubmitted: (_) => _tambah())),\n            IconButton(icon: const Icon(Icons.add), onPressed: _tambah),\n          ]),\n        ),\n        Expanded(\n          child: ListView.builder(\n            itemCount: _barang.length,\n            itemBuilder: (_, i) => ListTile(\n              title: Text(_barang[i]),\n              trailing: IconButton(\n                icon: const Icon(Icons.delete),\n                onPressed: () => setState(() => _barang.removeAt(i)),\n              ),\n            ),\n          ),\n        ),\n      ]),\n    );\n  }\n}" },

            { h2: 'Navigasi antar halaman' },
            { code: "Navigator.push(\n  context,\n  MaterialPageRoute(builder: (_) => DetailProduk(id: produk.id)),\n);\n\n// kembali\nNavigator.pop(context);" },
            `Untuk aplikasi yang lebih besar dan mendukung tautan (deep link), banyak tim memakai paket <code>go_router</code>.`,

            { h2: 'Saat setState tidak cukup lagi' },
            `Ketika data perlu dipakai banyak halaman (user login, keranjang), gunakan manajemen state. Pilihan populer: <b>Provider</b> (resmi direkomendasikan untuk mulai), <b>Riverpod</b>, dan <b>Bloc</b>. Pelajari satu dengan baik; jangan mencampur banyak sekaligus.`,
            { w: 'checklist', title: 'Urutan belajar Flutter', items: ['Dasar Dart: variabel, fungsi, class, null safety, async/await.', 'Widget dasar dan layout Row/Column.', 'StatefulWidget dan setState.', 'Form dan validasi input.', 'Navigasi dan go_router.', 'Mengambil data dari API (http/dio) dan menampilkan loading/error.', 'Satu solusi state management.', 'Build dan rilis APK atau ke Play Store.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Untuk menyusun widget dari kiri ke kanan dipakai...', options: ['Column', 'Row', 'Stack'], answer: 1, why: 'Row bersifat horizontal.' },
                { q: 'Agar tampilan berubah setelah data di State diubah, panggil...', options: ['build()', 'setState()', 'runApp()'], answer: 1, why: 'setState memberi tahu Flutter untuk menggambar ulang.' },
            ] },
        ],
        faq: [
            ['Apakah harus belajar Dart dulu?', 'Cukup dasar-dasarnya. Dart mirip JavaScript dan Java, sehingga orang yang pernah memakai salah satunya biasanya cepat menyesuaikan.'],
            ['Laptop seperti apa yang dibutuhkan?', 'RAM 8 GB masih bisa, 16 GB lebih nyaman untuk menjalankan emulator Android. Untuk membuat aplikasi iOS, dibutuhkan Mac.'],
            ['Flutter cocok dengan backend apa?', 'Apa pun yang menyediakan API: Laravel, Node.js, Firebase, atau Supabase.'],
        ],
        sources: [
            ['Flutter Docs: Get started', 'https://docs.flutter.dev/get-started'],
            ['Flutter Docs: Layouts in Flutter', 'https://docs.flutter.dev/ui/layout'],
            ['Flutter Docs: State management', 'https://docs.flutter.dev/data-and-backend/state-mgmt/intro'],
        ],
    },

    {
        slug: 'typescript-untuk-pemula-kenapa-dipakai',
        title: 'TypeScript untuk Pemula: Kenapa Banyak Tim Memakainya',
        description: 'TypeScript untuk developer JavaScript: tipe dasar, interface, union, generics sederhana, bug yang dicegah, cara mulai di proyek lama, dan kesalahan umum.',
        date: D, category: C, tags: ['TypeScript', 'JavaScript', 'tipe data', 'frontend', 'Node.js'], cta: 'jasa',
        lead: 'JavaScript membiarkan Anda mengirim angka ke fungsi yang mengharapkan teks, lalu baru error saat aplikasi dipakai pengguna. TypeScript menambahkan tipe ke JavaScript sehingga banyak kesalahan seperti itu tertangkap di editor, sebelum kode dijalankan.',
        body: [
            { h2: 'Bug yang dicegah TypeScript' },
            { code: "// JavaScript: lolos, tapi hasilnya salah\nfunction totalHarga(harga, jumlah) { return harga * jumlah; }\ntotalHarga('45000', 2);        // 90000? hampir kebetulan\ntotalHarga({ harga: 45000 }, 2); // NaN, ketahuan belakangan\n\n// TypeScript: ditandai merah di editor\nfunction totalHarga(harga: number, jumlah: number): number {\n  return harga * jumlah;\n}\ntotalHarga('45000', 2);\n// Error: Argument of type 'string' is not assignable to parameter of type 'number'." },
            `Kode TypeScript dikompilasi menjadi JavaScript biasa. Tipe hanya ada saat pengembangan; di browser dan Node.js yang berjalan tetap JavaScript.`,

            { h2: 'Tipe dasar' },
            { code: "let nama: string = 'Ani';\nlet umur: number = 21;\nlet aktif: boolean = true;\nlet nilai: number[] = [80, 92];\nlet kosong: string | null = null;    // union: string ATAU null\n\n// TypeScript sering bisa menebak sendiri (inference)\nlet kota = 'Malang';   // otomatis string" },

            { h2: 'Interface dan type untuk bentuk objek' },
            { code: "interface Produk {\n  id: number;\n  nama: string;\n  harga: number;\n  diskon?: number;        // opsional\n  readonly sku: string;   // tidak boleh diubah\n}\n\nfunction tampilkan(p: Produk) {\n  return `${p.nama}: Rp${p.harga - (p.diskon ?? 0)}`;\n}\n\ntampilkan({ id: 1, nama: 'Frame', harga: 450000, sku: 'FR-01' });   // ok\ntampilkan({ id: 1, nama: 'Frame', sku: 'FR-01' });\n// Error: Property 'harga' is missing" },

            { h2: 'Union dan literal: membatasi pilihan' },
            { code: "type StatusPesanan = 'baru' | 'dibayar' | 'dikirim' | 'selesai';\n\nfunction label(s: StatusPesanan) {\n  switch (s) {\n    case 'baru': return 'Menunggu pembayaran';\n    case 'dibayar': return 'Sedang dikemas';\n    case 'dikirim': return 'Dalam perjalanan';\n    case 'selesai': return 'Selesai';\n  }\n}\nlabel('dibatalkan'); // Error: tidak termasuk pilihan" },
            `Typo seperti <code>'dikrim'</code> langsung ketahuan, dan editor memberi saran otomatis untuk setiap pilihan.`,

            { h2: 'Generics: tipe yang bisa diisi' },
            { code: "interface ResponsApi<T> {\n  data: T;\n  error: string | null;\n}\n\nasync function ambil<T>(url: string): Promise<ResponsApi<T>> {\n  const res = await fetch(url);\n  return res.json();\n}\n\nconst hasil = await ambil<Produk[]>('/api/produk');\nhasil.data[0].nama;   // editor tahu ini string" },

            { h2: 'Manfaat yang paling terasa' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Manfaat', front: 'Autocomplete yang akurat', backTag: 'Artinya', back: 'Editor tahu field apa saja yang dimiliki objek, sehingga Anda tidak perlu bolak-balik membuka dokumentasi.' },
                { tag: 'Manfaat', front: 'Refactor lebih berani', backTag: 'Artinya', back: 'Ganti nama field, dan semua tempat yang belum diubah langsung ditandai merah.' },
                { tag: 'Manfaat', front: 'Dokumentasi yang selalu benar', backTag: 'Artinya', back: 'Tipe fungsi menjelaskan input dan output tanpa komentar tambahan.' },
                { tag: 'Batas', front: 'Tidak memeriksa data dari luar saat runtime', backTag: 'Artinya', back: 'Respons API tetap bisa tidak sesuai tipe. Validasi dengan Zod atau sejenisnya di batas sistem.' },
            ] },

            { h2: 'Cara mulai di proyek JavaScript lama' },
            { ol: ['Pasang: <code>npm install -D typescript</code>, lalu <code>npx tsc --init</code>.', 'Aktifkan <code>allowJs</code> agar file .js dan .ts bisa hidup bersama.', 'Ubah file satu per satu, mulai dari utilitas kecil.', 'Setelah sebagian besar file .ts, aktifkan <code>strict: true</code>.', 'Hindari <code>any</code>; bila terpaksa, pakai <code>unknown</code> lalu periksa tipenya.'] },
            { callout: 'Memberi tipe any di mana-mana mematikan manfaat TypeScript. Anggap any sebagai utang yang harus dibayar.', kind: 'warn', title: 'Jebakan any' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Kapan pemeriksaan tipe TypeScript terjadi?', options: ['Saat kompilasi/di editor', 'Saat aplikasi berjalan di browser', 'Saat deploy saja'], answer: 0, why: 'Tipe dihapus saat dikompilasi menjadi JavaScript.' },
                { q: 'diskon?: number berarti...', options: ['diskon wajib', 'diskon boleh tidak ada', 'diskon bisa string'], answer: 1, why: 'Tanda tanya menandai properti opsional.' },
            ] },
        ],
        faq: [
            ['Apakah TypeScript memperlambat aplikasi?', 'Tidak saat berjalan, karena yang dijalankan tetap JavaScript. Yang bertambah hanya sedikit waktu kompilasi saat pengembangan.'],
            ['Interface atau type?', 'Keduanya mirip untuk bentuk objek. Banyak tim memakai interface untuk objek dan type untuk union atau kombinasi. Yang penting konsisten.'],
            ['Apakah Node.js bisa menjalankan TypeScript langsung?', 'Versi Node.js terbaru mendukung menjalankan file .ts dengan menghapus tipe (type stripping). Untuk proyek besar, tetap jalankan tsc untuk pemeriksaan tipe.'],
        ],
        sources: [
            ['TypeScript Handbook', 'https://www.typescriptlang.org/docs/handbook/intro.html'],
            ['TypeScript: Migrating from JavaScript', 'https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html'],
            ['JavaScript dasar untuk pemula (artikel terkait)', 'https://muchson.web.id/artikel/javascript-dasar-untuk-pemula/'],
        ],
    },

    {
        slug: 'monolit-vs-microservices-arsitektur-aplikasi',
        title: 'Monolit vs Microservices: Arsitektur yang Tepat',
        description: 'Kapan aplikasi cukup monolit dan kapan perlu microservices: kelebihan, biaya tersembunyi, modular monolith sebagai jalan tengah, dan tanda harus memecah.',
        date: D, category: C, tags: ['microservices', 'monolit', 'arsitektur software', 'system design', 'backend'], cta: 'jasa',
        lead: 'Microservices sering terdengar seperti tanda tim yang modern. Kenyataannya, banyak tim kecil yang memecah aplikasinya terlalu dini lalu menghabiskan waktu mengurus jaringan, deploy, dan data yang tersebar, bukan membangun fitur. Pertanyaan yang tepat bukan "mana yang lebih modern", tetapi "masalah apa yang sedang kita selesaikan".',
        body: [
            { h2: 'Dua bentuk dasar' },
            { svg: 'versus', label: 'Monolit dan microservices', left: { title: 'Monolit', items: ['Satu aplikasi, satu deploy', 'Biasanya satu database', 'Pemanggilan fungsi biasa di memori', 'Mudah di-debug dan dites ujung ke ujung'] }, right: { title: 'Microservices', items: ['Banyak layanan kecil, deploy masing-masing', 'Database per layanan', 'Berkomunikasi lewat jaringan (HTTP, pesan)', 'Bisa diskalakan dan dikembangkan terpisah'] } },

            { h2: 'Biaya tersembunyi microservices' },
            { w: 'cards', title: 'Ketuk untuk melihat dampaknya', items: [
                { tag: 'Biaya', front: 'Jaringan bisa gagal', backTag: 'Dampak', back: 'Panggilan antar layanan bisa lambat atau putus. Butuh timeout, retry, dan circuit breaker.' },
                { tag: 'Biaya', front: 'Data tersebar', backTag: 'Dampak', back: 'Tidak ada lagi JOIN dan transaksi lintas database. Konsistensi butuh pola seperti saga dan event.' },
                { tag: 'Biaya', front: 'Operasional berlipat', backTag: 'Dampak', back: 'Setiap layanan butuh pipeline, monitoring, log, dan alert. Butuh tracing terdistribusi untuk mencari bug.' },
                { tag: 'Biaya', front: 'Perubahan lintas layanan', backTag: 'Dampak', back: 'Satu fitur bisa menyentuh empat layanan dan butuh koordinasi rilis antar tim.' },
            ] },
            `Martin Fowler menulis pola yang sering terjadi: hampir semua kisah sukses microservices berawal dari monolit yang tumbuh terlalu besar, sementara banyak sistem yang dibangun sebagai microservices sejak awal berakhir bermasalah. Ia menyebutnya <i>MonolithFirst</i>.`,

            { h2: 'Jalan tengah: modular monolith' },
            `Satu aplikasi dan satu deploy, tetapi dibagi ke modul dengan batas yang tegas: modul Pesanan tidak mengakses tabel milik modul Pembayaran secara langsung, melainkan lewat antarmuka yang jelas.`,
            { code: 'app/\n  Modules/\n    Katalog/      # produk, kategori\n    Pesanan/      # keranjang, checkout\n    Pembayaran/   # tagihan, callback gateway\n    Pengguna/     # akun, alamat\n# aturan: modul hanya memanggil API publik modul lain,\n# tidak membaca tabel modul lain secara langsung' },
            `Bila suatu hari modul Pembayaran benar-benar perlu dipisah, batasnya sudah ada sehingga pemisahan jauh lebih mudah.`,

            { h2: 'Tanda sudah saatnya memecah' },
            { w: 'choose', title: 'Cek kondisi sistem Anda', questions: [
                { q: 'Berapa developer yang bekerja di kode yang sama?', options: [{ t: 'Kurang dari 10', add: { mono: 3 } }, { t: '10 sampai 30, mulai sering bentrok', add: { modul: 3 } }, { t: 'Lebih dari 30 dalam beberapa tim terpisah', add: { micro: 3 } }] },
                { q: 'Apakah ada bagian dengan kebutuhan skala sangat berbeda?', options: [{ t: 'Tidak, beban relatif merata', add: { mono: 2 } }, { t: 'Ya, satu bagian (misalnya pemrosesan video) jauh lebih berat', add: { micro: 2, modul: 1 } }] },
                { q: 'Kemampuan operasional tim?', options: [{ t: 'Deploy masih semi manual', add: { mono: 3 } }, { t: 'CI/CD, monitoring, dan container sudah matang', add: { micro: 2 } }] },
            ], results: { mono: { title: 'Monolit yang rapi sudah tepat', text: 'Fokus pada kode yang modular, tes otomatis, dan deploy yang mudah. Skalakan dengan menambah instance di belakang load balancer.' }, modul: { title: 'Rapikan menjadi modular monolith', text: 'Tegaskan batas modul dan kepemilikan data dulu. Ini memberi sebagian besar manfaat microservices tanpa biaya jaringan.' }, micro: { title: 'Microservices mulai masuk akal', text: 'Pisahkan satu layanan dengan batas paling jelas lebih dulu (strangler pattern), ukur hasilnya, baru lanjut ke yang lain.' } } },

            { h2: 'Hukum Conway' },
            `Melvin Conway mengamati bahwa struktur sistem cenderung mencerminkan struktur komunikasi organisasi yang membuatnya. Microservices paling berhasil ketika setiap layanan dimiliki satu tim yang bisa mengembangkan dan merilisnya secara mandiri. Bila satu tim kecil memegang sepuluh layanan, Anda mendapat kerumitan tanpa manfaat kemandirian.`,
            { callout: 'Arsitektur adalah alat untuk masalah yang nyata hari ini, bukan untuk masalah yang mungkin datang lima tahun lagi. Desain yang modular membuat Anda tetap siap berubah.', kind: 'info', title: 'Prinsip' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Pendekatan yang disarankan Martin Fowler untuk sistem baru?', options: ['Microservices sejak awal', 'Monolith first', 'Tanpa arsitektur'], answer: 1, why: 'Batas layanan yang tepat baru terlihat setelah domain dipahami.' },
                { q: 'Modular monolith artinya...', options: ['Banyak deploy terpisah', 'Satu deploy dengan batas modul yang tegas', 'Monolit tanpa struktur'], answer: 1, why: 'Batas internal yang jelas tanpa biaya jaringan.' },
            ] },
        ],
        faq: [
            ['Apakah microservices lebih cepat?', 'Tidak otomatis. Panggilan lewat jaringan lebih lambat daripada pemanggilan fungsi di memori. Keuntungan utamanya adalah skala organisasi dan skala bagian tertentu.'],
            ['Apa itu strangler fig pattern?', 'Cara memigrasi monolit sedikit demi sedikit: fitur baru atau bagian tertentu dipindah ke layanan baru, lalu bagian lama dimatikan bertahap.'],
            ['Apakah serverless sama dengan microservices?', 'Tidak sama. Serverless adalah model menjalankan kode tanpa mengelola server; bisa dipakai untuk monolit maupun microservices.'],
        ],
        sources: [
            ['Martin Fowler: MonolithFirst', 'https://martinfowler.com/bliki/MonolithFirst.html'],
            ['James Lewis dan Martin Fowler: Microservices', 'https://martinfowler.com/articles/microservices.html'],
            ['Martin Fowler: Conway\'s Law', 'https://martinfowler.com/bliki/ConwaysLaw.html'],
        ],
    },

    {
        slug: 'technical-debt-utang-teknis-dan-cara-mengelola',
        title: 'Technical Debt: Utang Teknis dan Cara Mengelolanya',
        description: 'Apa itu technical debt, jenisnya menurut kuadran Fowler, cara mengukur dan menjelaskannya ke manajemen, serta strategi membayar tanpa menghentikan fitur.',
        date: D, category: C, tags: ['technical debt', 'utang teknis', 'refactoring', 'manajemen proyek', 'kualitas software'], cta: 'jasa',
        lead: 'Ward Cunningham memperkenalkan istilah technical debt pada 1992: mengirim kode yang belum matang ibarat berutang. Utang kecil boleh dan sering perlu untuk bergerak cepat, asalkan segera dicicil. Masalahnya muncul ketika bunganya, yaitu waktu ekstra di setiap perubahan, terus menumpuk tanpa pernah dibayar.',
        body: [
            { h2: 'Seperti apa "bunga" utang teknis?' },
            { ul: ['Fitur kecil yang dulu selesai sehari kini butuh seminggu.', 'Hanya satu orang yang berani mengubah modul tertentu.', 'Setiap rilis memunculkan bug di tempat yang tidak disentuh.', 'Developer baru butuh berbulan-bulan untuk produktif.', 'Versi framework tertinggal jauh dan tidak lagi mendapat patch keamanan.'] },

            { h2: 'Empat jenis utang (kuadran Fowler)' },
            { svg: 'matrix', x: 'Disengaja', y: 'Bijak', label: 'Kuadran technical debt', quads: [{ t: 'Bijak, tidak sengaja', d: '"Sekarang kami tahu seharusnya didesain begini."' }, { t: 'Bijak, disengaja', d: '"Kirim dulu untuk tenggat, lalu rapikan minggu depan."' }, { t: 'Ceroboh, tidak sengaja', d: '"Desain? Apa itu?"' }, { t: 'Ceroboh, disengaja', d: '"Tidak ada waktu untuk desain."' }], caption: 'Diadaptasi dari Technical Debt Quadrant, Martin Fowler.' },
            `Utang yang bijak dan disengaja adalah keputusan bisnis yang sah. Yang berbahaya adalah utang yang tidak disadari dan tidak dicatat.`,

            { h2: 'Membuat utang terlihat' },
            `Manajemen tidak bisa memprioritaskan sesuatu yang tidak terlihat. Catat utang teknis di backlog yang sama dengan fitur, lengkap dengan dampaknya dalam bahasa bisnis.`,
            { table: { head: ['Kurang meyakinkan', 'Lebih meyakinkan'], rows: [['"Kode modul checkout jelek."', '"Setiap perubahan checkout butuh 3 hari ekstra dan 4 dari 6 bug bulan ini berasal dari sana."'], ['"Kita harus upgrade Laravel."', '"Versi kita tidak lagi mendapat patch keamanan; ada risiko celah yang tidak bisa ditutup."'], ['"Perlu refactor."', '"Dengan 5 hari perbaikan, fitur promo berikutnya bisa selesai 2 minggu lebih cepat."']] } },
            { w: 'calc', title: 'Hitung bunga utang', desc: 'Perkiraan waktu yang hilang karena satu bagian kode yang bermasalah.', inputs: [{ id: 'j', label: 'Jam ekstra per perubahan di bagian itu', value: 4, min: 0, max: 40, step: 1 }, { id: 'p', label: 'Perubahan per bulan', value: 6, min: 1, max: 60, step: 1 }, { id: 'r', label: 'Biaya per jam developer', value: 100000, min: 25000, max: 1000000, step: 25000, unit: 'Rp' }, { id: 'f', label: 'Perkiraan jam untuk memperbaiki', value: 60, min: 1, max: 500, step: 1 }], outputs: [{ label: 'Bunga per bulan', expr: 'j * p * r', fmt: 'rp', big: true }, { label: 'Balik modal perbaikan dalam', expr: 'j * p > 0 ? f / (j * p) : 0', fmt: 'num', unit: ' bulan', note: 'Bila balik modal dalam beberapa bulan, perbaikan biasanya layak didahulukan.' }] },

            { h2: 'Strategi mencicil tanpa berhenti membuat fitur' },
            { w: 'cards', title: 'Ketuk untuk cara menerapkannya', items: [
                { tag: 'Strategi', front: 'Aturan pramuka', backTag: 'Cara', back: 'Setiap kali menyentuh file, rapikan sedikit. Biaya kecil, efek menumpuk.' },
                { tag: 'Strategi', front: 'Anggaran tetap', backTag: 'Cara', back: 'Sisihkan porsi kapasitas tiap sprint (misalnya 15-20%) untuk utang teknis.' },
                { tag: 'Strategi', front: 'Bayar di jalur fitur', backTag: 'Cara', back: 'Perbaiki bagian yang akan disentuh fitur berikutnya, bukan bagian yang jarang diubah.' },
                { tag: 'Strategi', front: 'Tes dulu, ubah kemudian', backTag: 'Cara', back: 'Tambahkan tes karakterisasi untuk perilaku saat ini sebelum refactor besar.' },
            ] },
            { callout: 'Kode jelek yang tidak pernah diubah hampir tidak menimbulkan bunga. Prioritaskan utang di bagian yang paling sering diubah dan paling sering menimbulkan bug.', kind: 'info', title: 'Tidak semua utang perlu dibayar' },

            { h2: 'Mencegah utang yang ceroboh' },
            { ul: ['Code review dan definisi "selesai" yang mencakup tes.', 'Linter dan formatter otomatis di CI.', 'Pembaruan dependensi rutin, sedikit demi sedikit (misalnya lewat Dependabot).', 'Catatan keputusan arsitektur (ADR) agar alasan desain tidak hilang.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Siapa yang memperkenalkan istilah technical debt?', options: ['Ward Cunningham', 'Linus Torvalds', 'Alan Turing'], answer: 0, why: 'Ward Cunningham, dalam laporan OOPSLA 1992.' },
                { q: 'Utang teknis mana yang sebaiknya didahulukan?', options: ['Di kode yang paling jarang diubah', 'Di kode yang paling sering diubah dan sering bermasalah', 'Yang paling lama ada'], answer: 1, why: 'Di situlah bunganya paling besar.' },
            ] },
        ],
        faq: [
            ['Apakah menulis ulang dari nol solusi yang baik?', 'Jarang. Menulis ulang memakan waktu lama, sementara sistem lama tetap harus dirawat. Refactor bertahap atau strangler pattern biasanya lebih aman.'],
            ['Bagaimana mengukur technical debt?', 'Tidak ada satu angka sempurna. Kombinasikan waktu siklus perubahan, jumlah bug per modul, frekuensi perubahan file, dan alat analisis seperti SonarQube.'],
            ['Apakah utang teknis selalu salah developer?', 'Tidak. Sering kali akibat tenggat bisnis, kebutuhan yang berubah, atau pengetahuan yang baru didapat belakangan.'],
        ],
        sources: [
            ['Martin Fowler: Technical Debt Quadrant', 'https://martinfowler.com/bliki/TechnicalDebtQuadrant.html'],
            ['Ward Cunningham: The WyCash Portfolio Management System (OOPSLA 1992)', 'https://c2.com/doc/oopsla92.html'],
            ['Architecture Decision Records (adr.github.io)', 'https://adr.github.io/'],
        ],
    },

    {
        slug: 'agile-dan-scrum-untuk-tim-kecil',
        title: 'Agile dan Scrum untuk Tim Kecil: Panduan Praktis',
        description: 'Agile dan Scrum tanpa jargon: nilai Agile Manifesto, peran, event, artefak, contoh sprint dua minggu, Kanban sebagai alternatif, dan kesalahan umum.',
        date: D, category: C, tags: ['Agile', 'Scrum', 'Kanban', 'manajemen proyek software', 'sprint'], cta: 'jasa',
        lead: 'Banyak tim mengaku "agile" tetapi hanya menjalankan rapat harian panjang dan sprint yang selalu meleset. Agile sebenarnya cara kerja yang sederhana: kirim hasil kecil sesering mungkin, minta umpan balik nyata, lalu sesuaikan rencana. Scrum adalah salah satu kerangka untuk melakukannya secara teratur.',
        body: [
            { h2: 'Empat nilai Agile Manifesto (2001)' },
            { table: { head: ['Lebih menghargai', 'daripada'], rows: [['Individu dan interaksi', 'proses dan alat'], ['Software yang berfungsi', 'dokumentasi yang menyeluruh'], ['Kolaborasi dengan pelanggan', 'negosiasi kontrak'], ['Merespons perubahan', 'mengikuti rencana']] } },
            `Kalimat penutupnya sering dilupakan: hal di kanan tetap bernilai, hanya saja hal di kiri lebih diutamakan. Agile bukan berarti tanpa dokumentasi atau tanpa rencana.`,

            { h2: 'Scrum dalam satu gambar' },
            { svg: 'cycle', label: 'Siklus satu sprint', items: ['Sprint Planning: pilih tujuan dan pekerjaan', 'Kerja harian + Daily Scrum 15 menit', 'Sprint Review: tunjukkan hasil ke pemangku kepentingan', 'Retrospective: perbaiki cara kerja'], caption: 'Sprint berdurasi tetap, paling lama satu bulan; banyak tim memakai dua minggu.' },
            { w: 'cards', title: 'Tiga peran (akuntabilitas)', items: [
                { tag: 'Peran', front: 'Product Owner', backTag: 'Tugas', back: 'Mengurutkan Product Backlog agar nilai produk maksimal. Satu orang, bukan komite.' },
                { tag: 'Peran', front: 'Scrum Master', backTag: 'Tugas', back: 'Membantu tim menerapkan Scrum dan menyingkirkan hambatan. Bukan atasan atau pemberi tugas.' },
                { tag: 'Peran', front: 'Developers', backTag: 'Tugas', back: 'Semua yang membuat increment: programmer, desainer, QA. Mereka memutuskan cara mengerjakannya.' },
            ] },
            { table: { head: ['Artefak', 'Isi'], rows: [['Product Backlog', 'Daftar urut semua yang mungkin dikerjakan, dengan Product Goal.'], ['Sprint Backlog', 'Pekerjaan yang dipilih untuk sprint ini, dengan Sprint Goal.'], ['Increment', 'Hasil yang benar-benar selesai dan bisa dipakai, sesuai Definition of Done.']] } },

            { h2: 'Contoh sprint dua minggu tim 4 orang' },
            { svg: 'timeline', label: 'Kalender sprint', events: [['Senin minggu 1', 'Sprint Planning (2 jam)', 'Tujuan: pelanggan bisa membayar dengan QRIS.'], ['Setiap pagi', 'Daily Scrum (15 menit)', 'Apa kemajuan menuju tujuan? Ada hambatan?'], ['Rabu minggu 2', 'Refinement (1 jam)', 'Memperjelas item untuk sprint berikutnya.'], ['Jumat minggu 2', 'Review (1 jam) + Retro (1 jam)', 'Demo ke pemilik usaha, lalu evaluasi cara kerja.']] },

            { h2: 'User story dan kriteria penerimaan' },
            { code: 'Sebagai pembeli,\nsaya ingin membayar dengan QRIS,\nagar tidak perlu transfer manual dan konfirmasi.\n\nKriteria penerimaan:\n- QR tampil di halaman checkout setelah pesanan dibuat.\n- Status pesanan berubah menjadi "dibayar" otomatis setelah callback sukses.\n- Bila QR kedaluwarsa (15 menit), pembeli bisa membuat ulang.' },

            { h2: 'Scrum atau Kanban?' },
            { svg: 'versus', label: 'Dua cara populer', left: { title: 'Scrum', items: ['Sprint berdurasi tetap', 'Komitmen tujuan per sprint', 'Cocok untuk pengembangan produk dengan rencana bertahap'] }, right: { title: 'Kanban', items: ['Aliran terus-menerus tanpa sprint', 'Batas jumlah pekerjaan yang sedang berjalan (WIP)', 'Cocok untuk dukungan, maintenance, pekerjaan yang datang tak menentu'] } },
            `Tim kecil yang juga menangani permintaan mendadak sering memakai campuran: papan Kanban dengan batas WIP, ditambah review dan retrospektif rutin.`,

            { h2: 'Kesalahan umum' },
            { ul: ['<b>Daily Scrum menjadi laporan ke atasan</b> selama 45 menit. Seharusnya 15 menit, untuk tim sendiri.', '<b>Sprint diisi melebihi kapasitas</b>, lalu selalu ada sisa. Rencanakan dari data sprint sebelumnya.', '<b>Tidak ada Definition of Done</b>, sehingga "selesai" berarti "sudah di-coding, belum dites".', '<b>Retrospektif dilewati</b> karena sibuk; padahal di sinilah cara kerja membaik.', '<b>Meniru seremoni tanpa tujuan.</b> Bila sebuah rapat tidak membantu, ubah formatnya.'] },
            { w: 'checklist', title: 'Mulai minggu depan', items: ['Buat satu papan (Trello, Jira, GitHub Projects) berisi backlog berurutan.', 'Tulis Definition of Done bersama tim.', 'Tentukan durasi sprint dan tujuan sprint pertama.', 'Jadwalkan review dengan pengguna atau pemilik produk.', 'Lakukan retrospektif 30-60 menit di akhir sprint.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Berapa lama Daily Scrum menurut Scrum Guide?', options: ['15 menit', '1 jam', 'Bebas'], answer: 0, why: 'Dibatasi 15 menit untuk Developers.' },
                { q: 'Siapa yang menentukan urutan Product Backlog?', options: ['Scrum Master', 'Product Owner', 'Seluruh direksi'], answer: 1, why: 'Product Owner bertanggung jawab atas urutan backlog.' },
            ] },
        ],
        faq: [
            ['Apakah tim dua orang perlu Scrum?', 'Kerangka lengkap biasanya terlalu berat. Ambil intinya: backlog berurutan, iterasi pendek, demo ke pengguna, dan evaluasi cara kerja.'],
            ['Apa itu story point?', 'Ukuran relatif besar pekerjaan, bukan jam. Berguna untuk perencanaan tim sendiri, bukan untuk membandingkan produktivitas antar tim.'],
            ['Apakah Agile hanya untuk software?', 'Tidak. Prinsipnya dipakai di pemasaran, desain, hingga pengembangan materi pelatihan.'],
        ],
        sources: [
            ['Manifesto for Agile Software Development', 'https://agilemanifesto.org/'],
            ['The Scrum Guide (2020)', 'https://scrumguides.org/scrum-guide.html'],
            ['Atlassian: Kanban vs Scrum', 'https://www.atlassian.com/agile/kanban/kanban-vs-scrum'],
        ],
    },
];
