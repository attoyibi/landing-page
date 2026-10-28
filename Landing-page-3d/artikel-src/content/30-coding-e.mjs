import { pk } from '../lib.mjs';

const D = '2026-10-28';
const C = 'Coding & Algoritma';

export default [
    {
        slug: 'belajar-coding-dari-nol-mulai-dari-mana',
        title: 'Belajar Coding dari Nol: Mulai dari Mana?',
        description: 'Panduan realistis belajar coding dari nol: tentukan tujuan, bahasa pertama, urutan materi, jadwal belajar, dan kesalahan pemula yang umum.',
        date: D, category: C, tags: ['belajar coding dari nol', 'belajar pemrograman', 'coding pemula', 'roadmap programmer', 'karier IT'], cta: 'jasa',
        lead: 'Setiap tahun banyak orang memutuskan belajar coding, lalu berhenti setelah dua minggu. Penyebabnya jarang karena "tidak berbakat". Biasanya karena tujuan yang tidak jelas, materi yang melompat-lompat, dan terlalu banyak menonton tanpa membuat. Panduan ini memberi jalur yang lebih realistis.',
        body: [
            { h2: 'Langkah 0: tentukan tujuan' },
            `"Belajar coding" terlalu luas. Tujuan yang jelas menentukan bahasa, materi, dan proyek pertama Anda.`,
            { w: 'choose', title: 'Apa yang ingin Anda buat?', questions: [
                { q: 'Hasil apa yang paling membuat Anda bersemangat?', options: [{ t: 'Website dan tampilan yang bisa dilihat orang', add: { web: 3 } }, { t: 'Mengolah data, laporan, otomasi Excel', add: { data: 3 } }, { t: 'Aplikasi HP', add: { mobile: 3 } }, { t: 'Belum tahu, ingin mencoba dasar dulu', add: { dasar: 3 } }] },
                { q: 'Kenapa ingin belajar?', options: [{ t: 'Pindah karier', add: { web: 1, data: 1 } }, { t: 'Membantu pekerjaan sekarang', add: { data: 2 } }, { t: 'Hobi atau membuat produk sendiri', add: { web: 1, mobile: 1 } }] },
            ], results: {
                web: { title: 'Jalur web', text: 'HTML dan CSS untuk struktur dan tampilan, lalu JavaScript. Proyek pertama: halaman profil atau toko sederhana.' },
                data: { title: 'Jalur data dan otomasi', text: 'Python dasar, lalu pandas dan SQL. Proyek pertama: merapikan dan meringkas data penjualan dari Excel.' },
                mobile: { title: 'Jalur aplikasi mobile', text: 'Kuasai dasar pemrograman dulu (JavaScript atau Dart), lalu Flutter atau React Native.' },
                dasar: { title: 'Jalur dasar umum', text: 'Python adalah bahasa pertama yang ramah. Fokus pada logika: variabel, kondisi, loop, fungsi.' },
            } },

            { h2: 'Fondasi yang sama untuk semua jalur' },
            `Apa pun bahasanya, konsep inti pemrograman sama. Kuasai ini dengan baik dan bahasa kedua akan jauh lebih mudah:`,
            { svg: 'flow', label: 'Konsep inti pemrograman', steps: [{ t: 'Variabel dan tipe data', d: 'menyimpan nilai' }, { t: 'Kondisi', d: 'if dan else' }, { t: 'Perulangan', d: 'for dan while' }, { t: 'Fungsi', d: 'memecah program' }, { t: 'Struktur data', d: 'list dan dictionary' }, { t: 'Debugging', d: 'membaca error' }] },

            { h2: 'Jadwal realistis' },
            { table: { head: ['Minggu', 'Fokus', 'Hasil'], rows: [
                ['1-2', 'Variabel, input-output, kondisi', 'Program kalkulator sederhana'],
                ['3-4', 'Perulangan dan fungsi', 'Game tebak angka'],
                ['5-6', 'List, dictionary, berkas', 'Pencatat pengeluaran'],
                ['7-8', 'Dasar jalur pilihan (web atau data)', 'Proyek kecil pertama'],
                ['9-12', 'Proyek yang lebih besar + Git', 'Proyek portofolio pertama di GitHub'],
            ] } },
            { w: 'calc', title: 'Hitung waktu belajar Anda', desc: 'Sekitar 100-150 jam latihan terfokus biasanya cukup untuk menguasai dasar dan membuat proyek kecil sendiri.', inputs: [
                { id: 'target', label: 'Target jam latihan', value: 120, min: 40, max: 400, step: 10 },
                { id: 'hari', label: 'Hari belajar per minggu', value: 5, min: 1, max: 7, step: 1 },
                { id: 'menit', label: 'Menit per hari', value: 60, min: 15, max: 240, step: 15 },
            ], outputs: [
                { label: 'Perkiraan selesai', expr: 'target / (hari * menit / 60)', fmt: 'int', unit: 'minggu', big: true },
                { label: 'Jam per minggu', expr: 'hari * menit / 60', fmt: 'num', unit: 'jam' },
            ] },

            { h2: 'Kesalahan yang membuat pemula berhenti' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Kesalahan', front: 'Terlalu banyak menonton tutorial, jarang mengetik sendiri.', backTag: 'Solusi', back: 'Aturan 1:2. Untuk setiap 1 jam menonton, 2 jam mengetik dan mencoba sendiri.' },
                { tag: 'Kesalahan', front: 'Berganti-ganti bahasa setiap minggu.', backTag: 'Solusi', back: 'Bertahan dengan satu bahasa sampai bisa membuat proyek kecil sendiri.' },
                { tag: 'Kesalahan', front: 'Takut melihat pesan error.', backTag: 'Solusi', back: 'Baca baris terakhir pesan error, cari nomor barisnya, lalu cari arti error itu. Ini keterampilan utama programmer.' },
                { tag: 'Kesalahan', front: 'Menyalin kode dari AI tanpa memahami.', backTag: 'Solusi', back: 'Minta AI menjelaskan baris per baris, lalu ketik ulang sendiri dan ubah sesuatu.' },
                { tag: 'Kesalahan', front: 'Langsung ingin membuat aplikasi besar.', backTag: 'Solusi', back: 'Mulai dari proyek yang bisa selesai dalam satu akhir pekan.' },
            ] },
            { callout: 'Di era AI, kemampuan membaca, memahami, dan memeriksa kode justru makin penting. AI bisa membantu menulis, tetapi Anda yang harus tahu apakah hasilnya benar.', kind: 'info', title: 'Belajar coding di era AI' },

            { h2: 'Untuk anak-anak, jalurnya berbeda' },
            `Bila Anda membaca ini untuk anak usia SD, mulai dari coding visual dengan blok, bukan teks. Logikanya sama, tetapi tanpa beban salah ketik. Saya membuat <a href="${pk('belajar-coding-dari-nol-mulai-dari-mana', '/')}" target="_blank" rel="noopener">PixelKode</a> khusus untuk anak 8-11 tahun dengan pendekatan itu.`,
        ],
        faq: [
            ['Bahasa apa yang sebaiknya dipelajari pertama?', 'Python untuk dasar umum dan data, atau HTML-CSS-JavaScript bila ingin membuat website. Yang penting fokus pada satu bahasa dulu.'],
            ['Berapa lama belajar coding sampai bisa?', 'Dasar bisa dikuasai dalam sekitar 2-3 bulan dengan latihan rutin. Siap kerja biasanya butuh 6-12 bulan dengan proyek nyata.'],
            ['Apakah perlu laptop spesifikasi tinggi?', 'Tidak. Laptop biasa dengan RAM 8 GB cukup untuk belajar dasar pemrograman.'],
            ['Apakah masih perlu belajar coding karena ada AI?', 'Ya. AI membantu menulis kode, tetapi memahami, memeriksa, dan memperbaiki kode tetap membutuhkan pengetahuan pemrograman.'],
        ],
        sources: [
            ['Python: tutorial resmi', 'https://docs.python.org/3/tutorial/'],
            ['MDN Web Docs: belajar pengembangan web', 'https://developer.mozilla.org/en-US/docs/Learn'],
            ['Roadmap belajar Python dari nol (artikel terkait)', 'https://muchson.web.id/artikel/roadmap-belajar-python-dari-nol/'],
        ],
    },

    {
        slug: 'bahasa-pemrograman-yang-sebaiknya-dipelajari-pertama',
        title: 'Bahasa Pemrograman Mana yang Sebaiknya Dipelajari Pertama?',
        description: 'Perbandingan Python, JavaScript, Java, PHP, Go, dan Kotlin untuk pemula: kegunaan, tingkat kesulitan, peluang kerja, dan pemilih interaktif sesuai tujuan Anda.',
        date: D, category: C, tags: ['bahasa pemrograman', 'Python vs JavaScript', 'bahasa pemrograman pemula', 'belajar coding', 'karier programmer'], cta: 'jasa',
        lead: 'Pertanyaan "bahasa apa yang terbaik?" bisa memicu perdebatan panjang di forum programmer. Jawaban jujurnya: tidak ada bahasa terbaik secara mutlak, yang ada bahasa yang paling cocok untuk tujuan Anda. Artikel ini membandingkan bahasa yang paling sering disarankan untuk pemula dan membantu Anda memilih.',
        body: [
            { h2: 'Perbandingan singkat' },
            { table: { head: ['Bahasa', 'Paling banyak dipakai untuk', 'Kemudahan untuk pemula', 'Catatan'], rows: [
                ['Python', 'Data, AI, otomasi, backend', 'Sangat ramah', 'Sintaks bersih, komunitas besar'],
                ['JavaScript', 'Website (depan dan belakang), aplikasi', 'Ramah', 'Satu-satunya bahasa yang berjalan langsung di browser'],
                ['Java', 'Aplikasi perusahaan, Android lama, backend', 'Sedang', 'Banyak dipakai di korporasi dan perbankan'],
                ['PHP', 'Website, CMS seperti WordPress', 'Ramah', 'Masih banyak dipakai situs dan UMKM'],
                ['Kotlin', 'Aplikasi Android modern', 'Sedang', 'Bahasa yang disarankan Google untuk Android'],
                ['Go', 'Backend dan infrastruktur cloud', 'Sedang', 'Sederhana dan cepat, populer di startup'],
            ] } },
            `Survei pengembang tahunan Stack Overflow secara konsisten menempatkan JavaScript dan Python di antara bahasa yang paling banyak dipakai. Keduanya adalah titik mulai yang sangat aman.`,

            { h2: 'Pemilih bahasa pertama' },
            { w: 'choose', title: 'Bahasa pertama yang cocok untuk Anda', questions: [
                { q: 'Ingin membuat apa?', options: [{ t: 'Website', add: { js: 3 } }, { t: 'Analisis data, AI, otomasi', add: { py: 3 } }, { t: 'Aplikasi Android', add: { kotlin: 3 } }, { t: 'Belum tahu', add: { py: 2, js: 1 } }] },
                { q: 'Lebih suka hasil yang ...', options: [{ t: 'Langsung terlihat di layar (tombol, warna, halaman)', add: { js: 2 } }, { t: 'Berupa angka, laporan, atau otomatis berjalan', add: { py: 2 } }] },
                { q: 'Target kerja?', options: [{ t: 'Startup atau agensi digital', add: { js: 2, py: 1 } }, { t: 'Data analyst atau data scientist', add: { py: 3 } }, { t: 'Korporasi atau perbankan', add: { java: 3 } }, { t: 'Belum memikirkan kerja', add: { py: 1, js: 1 } }] },
            ], results: {
                py: { title: 'Mulai dengan Python', text: 'Sintaks yang mudah dibaca membuat Anda fokus pada logika. Cocok untuk data, AI, dan otomasi.' },
                js: { title: 'Mulai dengan JavaScript (setelah HTML dan CSS)', text: 'Bahasa web. Hasilnya langsung terlihat di browser, sangat memotivasi.' },
                kotlin: { title: 'Mulai dengan Kotlin', text: 'Untuk Android. Pertimbangkan belajar dasar logika dulu agar tidak kewalahan dengan Android Studio.' },
                java: { title: 'Mulai dengan Java', text: 'Banyak dipakai di korporasi. Lebih bertele-tele dari Python, tetapi konsep berorientasi objeknya kuat.' },
            } },

            { h2: 'Contoh kode yang sama di tiga bahasa' },
            `Program yang menyapa nama dan memeriksa umur:`,
            { h3: 'Python' },
            { code: 'nama = input("Nama: ")\numur = int(input("Umur: "))\nif umur >= 17:\n    print(f"Halo {nama}, kamu sudah boleh membuat KTP.")\nelse:\n    print(f"Halo {nama}, tunggu {17 - umur} tahun lagi.")' },
            { h3: 'JavaScript' },
            { code: 'const nama = prompt("Nama:");\nconst umur = Number(prompt("Umur:"));\nif (umur >= 17) {\n  console.log(`Halo ${nama}, kamu sudah boleh membuat KTP.`);\n} else {\n  console.log(`Halo ${nama}, tunggu ${17 - umur} tahun lagi.`);\n}' },
            { h3: 'Java' },
            { code: 'import java.util.Scanner;\n\npublic class Halo {\n  public static void main(String[] args) {\n    Scanner in = new Scanner(System.in);\n    System.out.print("Nama: ");\n    String nama = in.nextLine();\n    System.out.print("Umur: ");\n    int umur = in.nextInt();\n    if (umur >= 17) {\n      System.out.println("Halo " + nama + ", kamu sudah boleh membuat KTP.");\n    } else {\n      System.out.println("Halo " + nama + ", tunggu " + (17 - umur) + " tahun lagi.");\n    }\n  }\n}' },
            { callout: 'Logikanya identik: input, konversi angka, kondisi, output. Inilah alasan bahasa kedua jauh lebih mudah dipelajari daripada bahasa pertama.', kind: 'good', title: 'Perhatikan polanya' },

            { h2: 'Yang lebih penting daripada bahasanya' },
            { ul: [
                '<b>Konsistensi.</b> Satu jam setiap hari mengalahkan sepuluh jam di akhir bulan.',
                '<b>Proyek.</b> Bahasa apa pun, yang dilihat recruiter adalah apa yang sudah Anda buat.',
                '<b>Dasar ilmu komputer.</b> Struktur data, algoritma, cara kerja web dan database.',
                '<b>Git dan kolaborasi.</b> Hampir semua pekerjaan memakainya.',
            ] },
        ],
        faq: [
            ['Bahasa pemrograman apa yang paling mudah untuk pemula?', 'Python umumnya dianggap paling ramah karena sintaksnya bersih dan mudah dibaca.'],
            ['Python atau JavaScript dulu?', 'Python untuk data, AI, dan otomasi. JavaScript bila tujuan utama Anda membuat website.'],
            ['Bahasa apa yang paling dicari perusahaan?', 'JavaScript, Python, dan Java termasuk yang paling banyak dipakai, tetapi kebutuhan berbeda per perusahaan dan bidang.'],
            ['Apakah boleh belajar dua bahasa sekaligus?', 'Sebaiknya kuasai satu bahasa sampai bisa membuat proyek sendiri, baru menambah bahasa kedua.'],
        ],
        sources: [
            ['Stack Overflow Developer Survey', 'https://survey.stackoverflow.co/'],
            ['Python: tutorial resmi', 'https://docs.python.org/3/tutorial/'],
            ['MDN: JavaScript Guide', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'],
            ['Android Developers: Kotlin', 'https://developer.android.com/kotlin'],
        ],
    },

    {
        slug: 'frontend-backend-fullstack-bedanya',
        title: 'Frontend, Backend, dan Fullstack: Bedanya dan Skill-nya',
        description: 'Beda frontend, backend, dan fullstack developer dengan analogi restoran, skill yang dibutuhkan, contoh tugas, dan cara memilih jalurnya.',
        date: D, category: C, tags: ['frontend', 'backend', 'fullstack developer', 'web developer', 'karier programmer'], cta: 'jasa',
        lead: 'Lowongan programmer sering menulis "frontend developer", "backend engineer", atau "fullstack". Bagi pemula, ketiganya terdengar mirip. Padahal pekerjaannya cukup berbeda. Memahami perbedaannya membantu Anda memilih jalur belajar yang sesuai minat.',
        body: [
            { h2: 'Analogi restoran' },
            { svg: 'layers', label: 'Frontend dan backend seperti restoran', items: [{ t: 'Frontend = ruang makan', d: 'menu, meja, tampilan: semua yang dilihat dan disentuh tamu' }, { t: 'API = pelayan', d: 'membawa pesanan dari ruang makan ke dapur dan sebaliknya' }, { t: 'Backend = dapur', d: 'memasak pesanan, mengatur logika dan aturan' }, { t: 'Database = gudang bahan', d: 'menyimpan data secara rapi dan aman' }], caption: 'Fullstack developer bisa bekerja di ruang makan dan di dapur.' },

            { h2: 'Frontend developer' },
            `Frontend developer membangun bagian aplikasi yang dilihat dan dipakai pengguna: halaman, tombol, formulir, animasi. Fokusnya adalah tampilan yang benar di berbagai layar, mudah dipakai, cepat, dan aksesibel.`,
            { ul: [
                '<b>Inti:</b> HTML, CSS, JavaScript.',
                '<b>Kerangka kerja:</b> React, Vue, atau Svelte.',
                '<b>Pendukung:</b> desain responsif, aksesibilitas, performa web, TypeScript.',
                '<b>Contoh tugas:</b> membuat halaman checkout yang nyaman di HP.',
            ] },

            { h2: 'Backend developer' },
            `Backend developer membangun logika di balik layar: menyimpan dan mengambil data, autentikasi, pembayaran, dan API yang dipakai frontend maupun aplikasi lain. Fokusnya adalah kebenaran logika, keamanan, dan kemampuan menangani banyak pengguna.`,
            { ul: [
                '<b>Bahasa:</b> salah satu dari Node.js (JavaScript), Python, Go, Java, PHP.',
                '<b>Database:</b> SQL (PostgreSQL, MySQL) dan kadang NoSQL.',
                '<b>Pendukung:</b> desain API, keamanan, cache, antrean pesan, cloud.',
                '<b>Contoh tugas:</b> membuat API yang mencatat pesanan dan mengurangi stok tanpa salah hitung.',
            ] },

            { h2: 'Fullstack developer' },
            `Fullstack developer bisa mengerjakan keduanya. Biasanya kuat di satu sisi dan cukup mampu di sisi lain. Peran ini umum di startup kecil dan proyek freelance, di mana satu orang membangun produk dari awal sampai akhir.`,
            { callout: 'Fullstack bukan berarti ahli di semua hal. Banyak fullstack developer yang baik memulai dengan menguasai satu sisi dengan sangat baik, lalu melebar.', kind: 'info', title: 'Ekspektasi yang realistis' },

            { h2: 'Perbandingan' },
            { table: { head: ['Aspek', 'Frontend', 'Backend', 'Fullstack'], rows: [
                ['Hasil terlihat', 'Langsung di layar', 'Tidak langsung, lewat data dan API', 'Keduanya'],
                ['Tantangan utama', 'Banyak ukuran layar dan browser, pengalaman pengguna', 'Keamanan, skala, konsistensi data', 'Luasnya cakupan'],
                ['Cocok untuk yang suka', 'Visual, detail interaksi', 'Logika, sistem, data', 'Membangun produk utuh'],
            ] } },

            { h2: 'Jalur mana yang cocok?' },
            { w: 'choose', title: 'Tes minat singkat', questions: [
                { q: 'Mana yang paling memuaskan bagi Anda?', options: [{ t: 'Melihat halaman yang rapi dan animasi yang halus', add: { fe: 3 } }, { t: 'Merancang sistem yang tidak pernah salah hitung', add: { be: 3 } }, { t: 'Melihat produk utuh berjalan dari awal sampai akhir', add: { fs: 3 } }] },
                { q: 'Saat ada bug, Anda lebih senang menyelidiki ...', options: [{ t: 'Kenapa tombol tidak tampil benar di HP', add: { fe: 2 } }, { t: 'Kenapa data di database tidak cocok', add: { be: 2 } }, { t: 'Keduanya sama menariknya', add: { fs: 2 } }] },
            ], results: {
                fe: { title: 'Mulai dari frontend', text: 'HTML, CSS, JavaScript, lalu React. Bangun beberapa halaman nyata yang responsif.' },
                be: { title: 'Mulai dari backend', text: 'Satu bahasa backend, SQL, dan desain API. Bangun API sederhana dengan autentikasi.' },
                fs: { title: 'Mulai dari satu sisi, lalu melebar', text: 'Kuasai frontend atau backend lebih dulu, kemudian tambahkan sisi lainnya lewat proyek utuh.' },
            } },
            `Ingat, pilihan pertama tidak mengunci selamanya. Banyak developer berpindah jalur setelah beberapa tahun karena menemukan minat baru.`,
        ],
        faq: [
            ['Apa beda frontend dan backend?', 'Frontend adalah bagian yang dilihat dan dipakai pengguna. Backend adalah logika, data, dan layanan di balik layar.'],
            ['Mana yang lebih mudah dipelajari?', 'Frontend sering terasa lebih mudah dimulai karena hasilnya langsung terlihat, tetapi keduanya punya tantangan tersendiri di tingkat lanjut.'],
            ['Apakah fullstack harus menguasai semuanya?', 'Tidak harus ahli di semua hal. Fullstack biasanya kuat di satu sisi dan cukup mampu di sisi lain.'],
            ['Bahasa apa untuk backend?', 'Pilihan umum: JavaScript (Node.js), Python, Go, Java, dan PHP.'],
        ],
        sources: [
            ['MDN: Learn web development', 'https://developer.mozilla.org/en-US/docs/Learn'],
            ['Apa itu API (artikel terkait)', 'https://muchson.web.id/artikel/apa-itu-api-penjelasan-sederhana/'],
            ['HTML, CSS, JavaScript: peran masing-masing (artikel terkait)', 'https://muchson.web.id/artikel/html-css-javascript-peran-masing-masing/'],
        ],
    },

    {
        slug: 'javascript-dasar-untuk-pemula',
        title: 'JavaScript Dasar untuk Pemula: Variabel, Fungsi, dan DOM',
        description: 'Belajar JavaScript dasar dengan contoh yang bisa dicoba di browser: variabel, kondisi, perulangan, fungsi, array, objek, dan DOM.',
        date: D, category: C, tags: ['JavaScript dasar', 'belajar JavaScript', 'DOM', 'pemrograman web', 'tutorial JavaScript'], cta: 'jasa',
        lead: 'JavaScript adalah bahasa yang membuat halaman web hidup: tombol yang bereaksi, formulir yang memeriksa isian, dan konten yang berubah tanpa memuat ulang halaman. Kabar baiknya, Anda bisa mulai belajar sekarang juga tanpa memasang apa pun, cukup dengan browser.',
        body: [
            { h2: 'Tempat mencoba: konsol browser' },
            `Buka halaman apa saja di Chrome atau Edge, tekan <b>F12</b> (atau klik kanan → Inspect), lalu pilih tab <b>Console</b>. Ketik <code>2 + 3</code> dan tekan Enter. Selamat, Anda baru menjalankan JavaScript.`,

            { h2: 'Variabel dan tipe data' },
            { code: 'let nama = "Dina";        // teks (string)\nlet umur = 12;            // angka (number)\nlet sudahLulus = false;   // benar/salah (boolean)\nconst kota = "Malang";    // const: tidak bisa diganti\n\numur = umur + 1;\nconsole.log(nama + " berumur " + umur);\nconsole.log(`${nama} tinggal di ${kota}`);  // template literal' },
            { callout: 'Pakai <code>const</code> secara bawaan, dan <code>let</code> hanya bila nilainya memang akan berubah. Hindari <code>var</code> pada kode baru karena perilakunya lebih membingungkan.', kind: 'info', title: 'Kebiasaan modern' },

            { h2: 'Kondisi' },
            { code: 'const nilai = 78;\n\nif (nilai >= 85) {\n  console.log("A");\n} else if (nilai >= 70) {\n  console.log("B");\n} else {\n  console.log("Perlu remedial");\n}\n\n// === membandingkan nilai DAN tipe\nconsole.log(5 == "5");   // true  (hindari)\nconsole.log(5 === "5");  // false (gunakan ini)' },

            { h2: 'Perulangan' },
            { code: 'for (let i = 1; i <= 5; i++) {\n  console.log("Langkah ke-" + i);\n}\n\nconst buah = ["apel", "jeruk", "mangga"];\nfor (const b of buah) {\n  console.log(b.toUpperCase());\n}' },

            { h2: 'Fungsi' },
            { code: 'function hitungDiskon(harga, persen) {\n  return harga - harga * persen / 100;\n}\n\n// fungsi panah (arrow function)\nconst formatRupiah = (n) => "Rp" + n.toLocaleString("id-ID");\n\nconsole.log(formatRupiah(hitungDiskon(150000, 20)));  // Rp120.000' },

            { h2: 'Array dan objek' },
            { code: 'const produk = [\n  { nama: "Kaos", harga: 80000, stok: 12 },\n  { nama: "Topi", harga: 50000, stok: 0 },\n  { nama: "Tas", harga: 200000, stok: 4 },\n];\n\nconst tersedia = produk.filter(p => p.stok > 0);\nconst namaSaja = tersedia.map(p => p.nama);\nconst total = produk.reduce((jml, p) => jml + p.harga * p.stok, 0);\n\nconsole.log(namaSaja);  // ["Kaos", "Tas"]\nconsole.log(total);     // 1760000' },
            `Tiga metode <code>filter</code>, <code>map</code>, dan <code>reduce</code> sangat sering dipakai dalam pekerjaan nyata. Kuasai ketiganya dan Anda akan membaca banyak kode modern dengan lebih mudah.`,

            { h2: 'DOM: mengubah halaman web' },
            `<b>DOM</b> (Document Object Model) adalah representasi halaman web yang bisa dibaca dan diubah JavaScript. Contoh kecil: tombol yang menghitung klik.`,
            { code: '<!-- index.html -->\n<button id="tombol">Klik aku</button>\n<p id="hasil">Belum diklik</p>\n\n<script>\n  let jumlah = 0;\n  const tombol = document.querySelector("#tombol");\n  const hasil = document.querySelector("#hasil");\n\n  tombol.addEventListener("click", () => {\n    jumlah++;\n    hasil.textContent = `Diklik ${jumlah} kali`;\n  });\n</script>' },
            { callout: 'Polanya selalu sama: pilih elemen (querySelector), dengarkan kejadian (addEventListener), lalu ubah sesuatu (textContent, classList, style). Pola ini adalah inti interaktivitas web.', kind: 'good', title: 'Pola utama DOM' },

            { h2: 'Latihan' },
            { w: 'checklist', title: 'Tantangan latihan JavaScript', desc: 'Centang yang sudah berhasil Anda buat.', items: ['Konversi suhu Celsius ke Fahrenheit dengan fungsi.', 'Cetak angka 1-30; ganti kelipatan 3 dengan "Fizz" dan kelipatan 5 dengan "Buzz".', 'Hitung total belanja dari array objek produk.', 'Tombol yang mengganti tema terang dan gelap halaman.', 'Formulir yang menampilkan pesan bila email kosong.', 'Daftar tugas sederhana: tambah dan hapus item.'] },
            { w: 'quiz', title: 'Cek pemahaman', questions: [
                { q: 'Hasil dari <code>5 === "5"</code>?', options: ['true', 'false'], answer: 1, why: 'Operator === membandingkan nilai dan tipe. Angka 5 berbeda tipe dengan teks "5".' },
                { q: 'Metode array untuk mengambil item yang memenuhi syarat?', options: ['map', 'filter', 'push'], answer: 1, why: 'filter mengembalikan array baru berisi item yang lolos syarat.' },
                { q: 'Untuk menjalankan kode saat tombol diklik, kita memakai ...', options: ['addEventListener("click", ...)', 'console.log', 'const'], answer: 0, why: 'addEventListener mendaftarkan fungsi yang dijalankan saat kejadian terjadi.' },
            ] },
        ],
        faq: [
            ['Apakah perlu memasang aplikasi untuk belajar JavaScript?', 'Tidak. Anda bisa mencoba langsung di konsol browser, lalu memakai editor teks gratis seperti VS Code untuk proyek.'],
            ['Apa beda let, const, dan var?', 'const untuk nilai yang tidak diganti, let untuk nilai yang berubah. var adalah cara lama yang sebaiknya dihindari di kode baru.'],
            ['Apa itu DOM?', 'Representasi halaman web yang bisa dibaca dan diubah oleh JavaScript, misalnya untuk mengganti teks atau bereaksi saat tombol diklik.'],
            ['Setelah JavaScript dasar, belajar apa?', 'Proyek kecil dengan DOM, lalu fetch API untuk mengambil data, kemudian kerangka kerja seperti React.'],
        ],
        sources: [
            ['MDN: JavaScript Guide', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'],
            ['MDN: Introduction to the DOM', 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction'],
            ['javascript.info: The Modern JavaScript Tutorial', 'https://javascript.info/'],
        ],
    },

    {
        slug: 'oop-pemrograman-berorientasi-objek-dijelaskan',
        title: 'OOP (Pemrograman Berorientasi Objek) Dijelaskan Sederhana',
        description: 'Penjelasan OOP untuk pemula dengan analogi cetakan kue: class, object, enkapsulasi, inheritance, dan polymorphism, plus contoh Python.',
        date: D, category: C, tags: ['OOP', 'pemrograman berorientasi objek', 'class dan object', 'Python OOP', 'konsep pemrograman'], cta: 'jasa',
        lead: 'OOP (Object-Oriented Programming) sering menjadi materi yang membuat mahasiswa dan pemula bingung: class, object, inheritance, polymorphism. Padahal idenya dekat dengan cara kita memandang dunia sehari-hari: ada cetakan, dan ada benda-benda yang dibuat dari cetakan itu.',
        body: [
            { h2: 'Class dan object: cetakan dan kue' },
            `<b>Class</b> adalah cetakan atau rancangan. <b>Object</b> adalah benda nyata yang dibuat dari cetakan itu. Cetakan kue bintang (class) bisa dipakai membuat banyak kue (object). Semua kue berbentuk bintang, tetapi masing-masing bisa punya topping berbeda.`,
            { code: 'class Kucing:\n    def __init__(self, nama, warna):\n        self.nama = nama      # atribut\n        self.warna = warna\n        self.lapar = True\n\n    def makan(self):          # method\n        self.lapar = False\n        return f"{self.nama} kenyang"\n\n    def bersuara(self):\n        return "Meong!"\n\noyen = Kucing("Oyen", "oranye")    # object 1\nmochi = Kucing("Mochi", "putih")   # object 2\nprint(oyen.makan())     # Oyen kenyang\nprint(mochi.lapar)      # True' },
            { table: { head: ['Istilah', 'Artinya', 'Di contoh'], rows: [
                ['Class', 'Cetakan', '<code>Kucing</code>'],
                ['Object (instance)', 'Benda dari cetakan', '<code>oyen</code>, <code>mochi</code>'],
                ['Atribut', 'Data milik object', '<code>nama</code>, <code>warna</code>, <code>lapar</code>'],
                ['Method', 'Perilaku atau aksi object', '<code>makan()</code>, <code>bersuara()</code>'],
                ['Constructor', 'Fungsi yang dijalankan saat object dibuat', '<code>__init__</code>'],
            ] } },
            { callout: 'Anak yang belajar Scratch sudah mengenal ide ini lewat clone: satu sprite menjadi cetakan, dan setiap clone punya posisi dan variabel lokalnya sendiri.', kind: 'info', title: 'Ternyata akrab sejak kecil' },

            { h2: 'Empat pilar OOP' },
            { svg: 'cycle', label: 'Empat pilar OOP', items: ['Enkapsulasi', 'Abstraksi', 'Inheritance', 'Polymorphism'] },
            { h3: '1. Enkapsulasi: membungkus data' },
            `Data dan cara mengubahnya disatukan dalam object, dan akses langsung ke data dibatasi. Saldo rekening tidak diubah sembarangan, melainkan lewat method <code>setor()</code> dan <code>tarik()</code> yang memeriksa aturan.`,
            { code: 'class Rekening:\n    def __init__(self, pemilik):\n        self.pemilik = pemilik\n        self._saldo = 0          # konvensi: jangan diakses langsung dari luar\n\n    def setor(self, jumlah):\n        if jumlah <= 0:\n            raise ValueError("Jumlah harus positif")\n        self._saldo += jumlah\n\n    def tarik(self, jumlah):\n        if jumlah > self._saldo:\n            raise ValueError("Saldo tidak cukup")\n        self._saldo -= jumlah\n\n    @property\n    def saldo(self):\n        return self._saldo' },
            { h3: '2. Abstraksi: sembunyikan yang rumit' },
            `Pengguna object cukup tahu <i>apa</i> yang bisa dilakukan, tidak perlu tahu <i>bagaimana</i>. Saat menekan tombol rem mobil, Anda tidak perlu memahami hidrolik.`,
            { h3: '3. Inheritance: pewarisan' },
            `Class baru bisa mewarisi atribut dan method class lain, lalu menambah atau mengubahnya.`,
            { code: 'class Hewan:\n    def __init__(self, nama):\n        self.nama = nama\n    def bersuara(self):\n        return "..."\n\nclass Kucing(Hewan):\n    def bersuara(self):\n        return "Meong!"\n\nclass Anjing(Hewan):\n    def bersuara(self):\n        return "Guk!"' },
            { h3: '4. Polymorphism: satu perintah, banyak bentuk' },
            `Object berbeda bisa menanggapi perintah yang sama dengan caranya masing-masing.`,
            { code: 'kebun_binatang = [Kucing("Oyen"), Anjing("Bruno"), Kucing("Mochi")]\nfor h in kebun_binatang:\n    print(h.nama, h.bersuara())\n# Oyen Meong!\n# Bruno Guk!\n# Mochi Meong!' },

            { h2: 'Kapan OOP berguna, kapan tidak' },
            { table: { head: ['Cocok', 'Kurang perlu'], rows: [
                ['Program besar dengan banyak "benda" (pengguna, produk, pesanan)', 'Skrip kecil sekali pakai'],
                ['Banyak jenis yang berbagi perilaku (berbagai metode pembayaran)', 'Pengolahan data sederhana'],
                ['Game dengan banyak karakter', 'Fungsi matematika murni'],
            ] } },
            { callout: 'Kesalahan umum pemula adalah membuat hierarki inheritance yang terlalu dalam. Banyak programmer berpengalaman menyarankan lebih memilih komposisi (object berisi object lain) daripada pewarisan bertingkat-tingkat.', kind: 'warn', title: 'Jangan berlebihan' },
            { w: 'quiz', title: 'Cek pemahaman', questions: [
                { q: 'Dalam analogi cetakan kue, object adalah ...', options: ['Cetakannya', 'Kue yang dibuat', 'Resepnya'], answer: 1, why: 'Class adalah cetakan, object adalah benda yang dibuat dari cetakan.' },
                { q: 'Membatasi perubahan saldo hanya lewat method setor dan tarik adalah contoh ...', options: ['Enkapsulasi', 'Inheritance', 'Polymorphism'], answer: 0, why: 'Data dibungkus dan aksesnya dikontrol.' },
                { q: 'Kucing dan Anjing sama-sama punya bersuara() tapi hasilnya berbeda. Ini ...', options: ['Abstraksi', 'Polymorphism', 'Constructor'], answer: 1, why: 'Satu perintah, banyak bentuk tanggapan.' },
            ] },
        ],
        faq: [
            ['Apa itu OOP?', 'Pendekatan pemrograman yang menyusun program sebagai kumpulan object yang punya data (atribut) dan perilaku (method), dibuat dari rancangan bernama class.'],
            ['Apa beda class dan object?', 'Class adalah cetakan atau rancangan. Object adalah benda nyata yang dibuat dari class tersebut.'],
            ['Apa saja pilar OOP?', 'Enkapsulasi, abstraksi, inheritance (pewarisan), dan polymorphism.'],
            ['Bahasa apa yang mendukung OOP?', 'Banyak bahasa populer mendukung OOP, seperti Java, Python, C#, JavaScript, PHP, dan Kotlin.'],
        ],
        sources: [
            ['Python: Classes (tutorial resmi)', 'https://docs.python.org/3/tutorial/classes.html'],
            ['MDN: JavaScript objects dan pemrograman berorientasi objek', 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects'],
            ['Clone di Scratch: satu sprite banyak salinan (artikel terkait)', 'https://muchson.web.id/artikel/clone-di-scratch-dijelaskan-untuk-anak/'],
        ],
    },

    {
        slug: 'cara-membuat-website-sendiri-gratis-domain-hosting',
        title: 'Cara Membuat Website Sendiri Gratis: Domain dan Hosting',
        description: 'Langkah membuat website sendiri dengan biaya nol sampai murah: beda domain dan hosting, pilihan hosting statis gratis, membeli domain .id, dan menghubungkannya.',
        date: D, category: C, tags: ['membuat website', 'website gratis', 'domain dan hosting', 'GitHub Pages', 'domain .id'], cta: 'jasa',
        lead: 'Website pribadi, portofolio, atau halaman usaha kecil bisa dibuat dengan biaya hampir nol. Banyak orang mengira harus membayar hosting mahal setiap bulan, padahal untuk website statis tersedia hosting gratis yang andal. Artikel ini menjelaskan bedanya domain dan hosting, lalu memandu langkah demi langkah.',
        body: [
            { h2: 'Domain dan hosting: alamat dan rumah' },
            { svg: 'versus', label: 'Domain vs hosting', left: { title: 'Domain', items: ['Alamat website', 'Contoh: namaanda.my.id', 'Disewa per tahun', 'Diarahkan ke hosting lewat DNS'] }, right: { title: 'Hosting', items: ['Tempat berkas website disimpan', 'Server yang menyajikan halaman', 'Ada yang gratis untuk situs statis', 'Dibayar bulanan atau tahunan untuk yang dinamis'] } },
            `Domain adalah alamat rumah, hosting adalah rumahnya. Saat seseorang mengetik alamat domain, sistem DNS menunjukkan ke server mana harus pergi, lalu server itu mengirim berkas website ke browser.`,

            { h2: 'Website statis atau dinamis?' },
            { table: { head: ['Jenis', 'Ciri', 'Contoh', 'Hosting'], rows: [
                ['Statis', 'Berkas HTML, CSS, JS yang sama untuk semua pengunjung', 'Portofolio, profil usaha, undangan, dokumentasi', 'Banyak pilihan gratis'],
                ['Dinamis', 'Butuh server dan database yang memproses data', 'Toko online dengan akun, forum, sistem sekolah', 'Biasanya berbayar'],
            ] } },
            { callout: 'Situs yang Anda baca ini adalah contoh situs statis: artikel dibuat menjadi berkas HTML saat build, lalu disajikan cepat oleh layanan hosting statis.', kind: 'info', title: 'Contoh nyata' },

            { h2: 'Pilihan hosting statis gratis' },
            { table: { head: ['Layanan', 'Cocok untuk', 'Catatan'], rows: [
                ['GitHub Pages', 'Portofolio developer, dokumentasi', 'Berkas di repositori GitHub, domain gratis di github.io'],
                ['Cloudflare Pages / Workers', 'Situs statis dan aplikasi web', 'Jaringan global, bisa dihubungkan langsung dengan Git'],
                ['Netlify', 'Situs statis dengan formulir sederhana', 'Antarmuka mudah, deploy dari Git'],
                ['Vercel', 'Proyek React dan Next.js', 'Populer untuk aplikasi frontend modern'],
            ] } },
            `Batas paket gratis setiap layanan bisa berubah. Untuk portofolio dan profil usaha, paket gratis biasanya lebih dari cukup.`,

            { h2: 'Langkah membuat website portofolio' },
            { ol: [
                '<b>Siapkan berkas</b>: <code>index.html</code>, <code>style.css</code>, dan gambar. Mulai sederhana: nama, foto, keahlian, proyek, kontak.',
                '<b>Buat akun GitHub</b> dan repositori baru, unggah berkas Anda.',
                '<b>Aktifkan GitHub Pages</b> di pengaturan repositori, pilih cabang utama sebagai sumber.',
                '<b>Tunggu beberapa menit</b>, lalu buka alamat <code>namaanda.github.io/nama-repo</code>.',
                '<b>Perbarui</b> dengan mengunggah ulang berkas; situs ikut berubah.',
            ] },
            { code: '<!doctype html>\n<html lang="id">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Dina Pratiwi · Desainer Grafis</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Dina Pratiwi</h1>\n  <p>Desainer grafis untuk UMKM di Malang.</p>\n  <h2>Proyek</h2>\n  <ul>\n    <li>Logo dan kemasan Kopi Sore</li>\n    <li>Feed Instagram Toko Kue Bunda</li>\n  </ul>\n  <p><a href="mailto:dina@contoh.id">Hubungi saya</a></p>\n</body>\n</html>' },

            { h2: 'Domain sendiri: lebih profesional' },
            `Alamat seperti <code>namaanda.github.io</code> sudah cukup untuk mulai, tetapi domain sendiri terlihat lebih profesional. Domain <b>.id</b> dikelola PANDI (Pengelola Nama Domain Internet Indonesia) dan dijual lewat registrar resmi. Ada beberapa pilihan, misalnya <b>.my.id</b> untuk perorangan yang biasanya paling terjangkau, <b>.biz.id</b> untuk usaha, dan <b>.id</b> yang lebih umum. Syarat dan harga berbeda per jenis dan registrar.`,
            { ol: [
                'Beli domain di registrar resmi.',
                'Di pengaturan hosting (misalnya GitHub Pages atau Cloudflare), tambahkan domain kustom.',
                'Di pengelola DNS domain, buat catatan yang diminta hosting (biasanya CNAME atau A).',
                'Tunggu propagasi DNS, bisa beberapa menit sampai beberapa jam.',
                'Aktifkan HTTPS (biasanya otomatis di layanan modern).',
            ] },

            { h2: 'Hitung biaya tahunan' },
            { w: 'calc', title: 'Biaya website per tahun', desc: 'Masukkan harga dari registrar dan hosting pilihan Anda.', inputs: [
                { id: 'domain', label: 'Harga domain per tahun (Rp)', value: 15000, min: 0, max: 500000, step: 5000 },
                { id: 'hosting', label: 'Hosting per bulan (Rp, 0 jika statis gratis)', value: 0, min: 0, max: 300000, step: 5000 },
            ], outputs: [
                { label: 'Total per tahun', expr: 'domain + hosting * 12', fmt: 'rp', big: true },
                { label: 'Per bulan', expr: '(domain + hosting * 12) / 12', fmt: 'rp' },
            ] },
            { w: 'checklist', title: 'Daftar periksa website pertama', desc: 'Centang yang sudah siap.', items: ['Judul halaman jelas di tag title.', 'Tampil baik di HP (meta viewport).', 'Ada cara menghubungi yang mudah ditemukan.', 'Gambar sudah dikecilkan ukurannya.', 'HTTPS aktif.', 'Diuji di dua browser berbeda.'] },
        ],
        faq: [
            ['Apa beda domain dan hosting?', 'Domain adalah alamat website, hosting adalah tempat berkas website disimpan dan disajikan.'],
            ['Bisakah membuat website benar-benar gratis?', 'Bisa untuk website statis, memakai hosting gratis seperti GitHub Pages atau Cloudflare Pages dengan alamat subdomain bawaan.'],
            ['Domain .my.id untuk siapa?', 'Domain .my.id ditujukan untuk perorangan dan biasanya termasuk yang paling terjangkau di antara domain .id.'],
            ['Apakah perlu bisa coding untuk membuat website?', 'Untuk situs statis sederhana, HTML dan CSS dasar sudah cukup. Untuk toko online lengkap, biasanya dipakai platform atau pemrograman backend.'],
        ],
        sources: [
            ['GitHub Pages', 'https://pages.github.com/'],
            ['Cloudflare Pages', 'https://pages.cloudflare.com/'],
            ['PANDI: Pengelola Nama Domain Internet Indonesia', 'https://pandi.id/'],
            ['MDN: Learn web development (termasuk menerbitkan website)', 'https://developer.mozilla.org/en-US/docs/Learn'],
        ],
    },

    {
        slug: 'contoh-algoritma-flowchart-dan-pseudocode',
        title: 'Contoh Algoritma, Flowchart, dan Pseudocode Sehari-hari',
        description: 'Contoh algoritma, flowchart, dan pseudocode dari kegiatan sehari-hari sampai soal pemrograman, simbol flowchart standar, dan latihan.',
        date: D, category: C, tags: ['contoh algoritma', 'flowchart', 'pseudocode', 'diagram alir', 'informatika'], cta: 'jasa',
        lead: 'Algoritma, flowchart, dan pseudocode adalah materi wajib di pelajaran Informatika dan kuliah pemrograman dasar. Ketiganya adalah cara menuliskan langkah penyelesaian masalah sebelum menjadi kode. Artikel ini memberi contoh yang lengkap, mulai dari kegiatan sehari-hari sampai soal yang sering muncul di tugas sekolah dan kuliah.',
        body: [
            { h2: 'Tiga cara menuliskan langkah' },
            { table: { head: ['Bentuk', 'Seperti apa', 'Kelebihan'], rows: [
                ['Algoritma (kalimat)', 'Daftar langkah dalam bahasa sehari-hari', 'Mudah dipahami siapa saja'],
                ['Flowchart', 'Diagram dengan simbol dan panah', 'Alur percabangan dan perulangan terlihat jelas'],
                ['Pseudocode', 'Mirip kode, tapi tanpa aturan bahasa tertentu', 'Dekat dengan program, mudah diterjemahkan ke bahasa apa pun'],
            ] } },

            { h2: 'Simbol flowchart standar' },
            `Simbol flowchart dibakukan dalam standar ISO 5807. Lima simbol ini paling sering dipakai:`,
            { svgraw: '<svg viewBox="0 0 640 210" role="img" aria-label="Simbol flowchart: terminal, proses, input output, keputusan, panah" font-family="\'Plus Jakarta Sans\',Arial,sans-serif"><defs><marker id="a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4a5568"/></marker></defs><rect x="10" y="40" width="110" height="46" rx="23" fill="#e8f1ff" stroke="#1e5ab2" stroke-width="2.5"/><text x="65" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">Mulai</text><text x="65" y="120" text-anchor="middle" font-size="12.5" fill="#4a5568">Terminal</text><text x="65" y="138" text-anchor="middle" font-size="12.5" fill="#4a5568">(mulai/selesai)</text><rect x="140" y="40" width="110" height="46" fill="#e4f6cc" stroke="#1f7a46" stroke-width="2.5"/><text x="195" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">total = a + b</text><text x="195" y="120" text-anchor="middle" font-size="12.5" fill="#4a5568">Proses</text><path d="M285 40H395L375 86H265Z" fill="#fff1d6" stroke="#9a5b00" stroke-width="2.5"/><text x="330" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">Input a, b</text><text x="330" y="120" text-anchor="middle" font-size="12.5" fill="#4a5568">Input/Output</text><path d="M470 30L530 63L470 96L410 63Z" fill="#fde4e1" stroke="#b3261e" stroke-width="2.5"/><text x="470" y="68" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">a &gt; b?</text><text x="470" y="120" text-anchor="middle" font-size="12.5" fill="#4a5568">Keputusan</text><line x1="560" y1="63" x2="625" y2="63" stroke="#4a5568" stroke-width="2.5" marker-end="url(#a3)"/><text x="592" y="120" text-anchor="middle" font-size="12.5" fill="#4a5568">Arah alur</text><text x="320" y="190" text-anchor="middle" font-size="13" fill="#4a5568">Keputusan selalu punya dua jalur keluar: ya dan tidak</text></svg>', caption: 'Lima simbol dasar flowchart.' },

            { h2: 'Contoh 1: menentukan bilangan genap atau ganjil' },
            { h3: 'Algoritma' },
            { ol: ['Mulai.', 'Masukkan bilangan n.', 'Hitung sisa pembagian n dengan 2.', 'Jika sisanya 0, tampilkan "genap". Jika tidak, tampilkan "ganjil".', 'Selesai.'] },
            { h3: 'Pseudocode' },
            { code: 'MULAI\n  INPUT n\n  JIKA n MOD 2 = 0 MAKA\n    TAMPILKAN "genap"\n  SELAIN ITU\n    TAMPILKAN "ganjil"\n  AKHIR JIKA\nSELESAI' },
            { h3: 'Python' },
            { code: 'n = int(input("Bilangan: "))\nif n % 2 == 0:\n    print("genap")\nelse:\n    print("ganjil")' },

            { h2: 'Contoh 2: menghitung rata-rata nilai (perulangan)' },
            { code: 'MULAI\n  INPUT jumlah_siswa\n  total ← 0\n  UNTUK i DARI 1 SAMPAI jumlah_siswa\n    INPUT nilai\n    total ← total + nilai\n  AKHIR UNTUK\n  rata ← total / jumlah_siswa\n  TAMPILKAN rata\n  JIKA rata ≥ 75 MAKA TAMPILKAN "Kelas tuntas"\nSELESAI' },
            { svg: 'flow', label: 'Flowchart rata-rata nilai (disederhanakan)', steps: [{ t: 'Input jumlah siswa', d: 'total = 0' }, { t: 'Input nilai', d: 'tambahkan ke total' }, { t: 'Sudah semua?', d: 'tidak: kembali ulangi' }, { t: 'Hitung rata', d: 'total / jumlah' }, { t: 'Tampilkan', d: 'rata-rata' }] },

            { h2: 'Contoh 3: algoritma sehari-hari (ATM)' },
            { code: 'MULAI\n  MASUKKAN kartu\n  percobaan ← 0\n  ULANGI\n    INPUT pin\n    percobaan ← percobaan + 1\n  SAMPAI pin BENAR ATAU percobaan = 3\n  JIKA pin BENAR MAKA\n    INPUT jumlah\n    JIKA jumlah ≤ saldo MAKA\n      KELUARKAN uang\n      saldo ← saldo - jumlah\n    SELAIN ITU\n      TAMPILKAN "Saldo tidak cukup"\n    AKHIR JIKA\n  SELAIN ITU\n    BLOKIR kartu\n  AKHIR JIKA\nSELESAI' },
            { callout: 'Contoh ATM menggabungkan perulangan (mencoba PIN maksimal 3 kali) dan percabangan bertingkat. Pola seperti ini sering muncul di soal ujian.', kind: 'info', title: 'Pola yang sering keluar' },

            { h2: 'Aturan menulis pseudocode yang baik' },
            { ul: [
                'Satu langkah per baris.',
                'Gunakan kata kunci konsisten: MULAI, INPUT, JIKA, MAKA, SELAIN ITU, UNTUK, ULANGI, SAMPAI, SELESAI.',
                'Beri indentasi untuk isi percabangan dan perulangan.',
                'Gunakan nama variabel yang jelas.',
                'Jangan terlalu detail sampai mirip bahasa tertentu; fokus pada logika.',
            ] },

            { h2: 'Latihan' },
            { w: 'quiz', title: 'Latihan soal', questions: [
                { q: 'Simbol flowchart untuk "Jika nilai ≥ 75" adalah ...', options: ['Persegi panjang', 'Belah ketupat', 'Jajar genjang'], answer: 1, why: 'Belah ketupat untuk keputusan dengan dua jalur keluar.' },
                { q: 'Pseudocode: total ← 0; UNTUK i DARI 1 SAMPAI 4: total ← total + i. Nilai total akhir?', options: ['4', '10', '24'], answer: 1, why: '1 + 2 + 3 + 4 = 10.' },
                { q: 'Simbol untuk "Input a, b" adalah ...', options: ['Jajar genjang', 'Oval', 'Belah ketupat'], answer: 0, why: 'Jajar genjang untuk input dan output.' },
                { q: 'Algoritma yang baik harus ...', options: ['Panjang dan detail', 'Jelas, berurutan, dan punya akhir', 'Memakai bahasa Inggris'], answer: 1, why: 'Ciri algoritma: jelas, berurutan, dan berhenti setelah langkah terbatas.' },
            ] },
            { w: 'checklist', title: 'Soal latihan mandiri', desc: 'Tulis algoritma, flowchart, dan pseudocode untuk:', items: ['Menentukan bilangan terbesar dari tiga bilangan.', 'Menghitung luas dan keliling persegi panjang.', 'Konversi nilai angka menjadi huruf (A, B, C, D).', 'Menghitung faktorial n.', 'Menentukan tahun kabisat.'] },
        ],
        faq: [
            ['Apa beda algoritma, flowchart, dan pseudocode?', 'Algoritma adalah urutan langkahnya. Flowchart menggambarkannya dengan simbol. Pseudocode menuliskannya mirip kode tanpa aturan bahasa tertentu.'],
            ['Apa saja simbol flowchart?', 'Yang paling umum: oval (mulai/selesai), persegi panjang (proses), jajar genjang (input/output), belah ketupat (keputusan), dan panah (arah alur).'],
            ['Apakah pseudocode punya aturan baku?', 'Tidak ada aturan tunggal. Yang penting konsisten, satu langkah per baris, dan memakai indentasi yang jelas.'],
            ['Contoh algoritma dalam kehidupan sehari-hari?', 'Resep masakan, langkah menarik uang di ATM, menyeberang jalan, dan rutinitas pagi.'],
        ],
        sources: [
            ['ISO 5807: Information processing, documentation symbols for flowcharts', 'https://www.iso.org/standard/11955.html'],
            ['Python: tutorial resmi', 'https://docs.python.org/3/tutorial/'],
            ['Algoritma untuk anak (artikel terkait)', 'https://muchson.web.id/artikel/algoritma-untuk-anak-penjelasan-dan-latihan/'],
        ],
    },
];
