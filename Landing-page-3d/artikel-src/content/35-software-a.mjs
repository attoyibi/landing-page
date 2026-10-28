const D = '2026-10-28';
const C = 'Rekayasa Software';

export default [
    {
        slug: 'clean-code-prinsip-menulis-kode-yang-mudah-dibaca',
        title: 'Clean Code: Prinsip Menulis Kode yang Mudah Dibaca',
        description: 'Prinsip clean code dengan contoh sebelum dan sesudah: nama yang jelas, fungsi kecil, komentar seperlunya, hindari duplikasi, dan cara merapikan kode lama.',
        date: D, category: C, tags: ['clean code', 'kode bersih', 'refactoring', 'best practice', 'software engineering'], cta: 'jasa',
        lead: 'Kode dibaca jauh lebih sering daripada ditulis. Anda sendiri, enam bulan dari sekarang, adalah pembaca yang paling sering lupa konteks. Clean code bukan soal gaya yang indah, melainkan soal mengurangi waktu yang dibutuhkan orang lain (dan Anda) untuk memahami dan mengubah kode dengan aman.',
        body: [
            { h2: 'Mengapa kode yang "jalan" belum cukup' },
            `Program yang berjalan hari ini akan diubah besok: fitur baru, bug, aturan bisnis berubah. Bila kodenya sulit dibaca, setiap perubahan menjadi mahal dan berisiko. Itulah sebabnya tim profesional menilai kode dari dua sisi: <b>benar</b> dan <b>mudah diubah</b>.`,
            { svg: 'cycle', label: 'Lingkaran kode berantakan', items: ['Kode sulit dibaca', 'Perubahan jadi lambat', 'Tambal cepat di sana-sini', 'Bug baru muncul', 'Kode makin sulit dibaca'], caption: 'Merapikan sedikit setiap kali menyentuh kode memutus lingkaran ini.' },

            { h2: '1. Nama yang menjelaskan maksud' },
            `Nama variabel dan fungsi adalah dokumentasi paling murah. Nama yang baik menjawab: <i>ini apa, untuk apa</i>.`,
            { code: '# Sebelum\nd = 7\ndef calc(a, b):\n    return a * b * 0.11\n\n# Sesudah\nBATAS_HARI_RETUR = 7\nTARIF_PPN = 0.11\n\ndef hitung_ppn(harga_satuan, jumlah):\n    return harga_satuan * jumlah * TARIF_PPN' },
            { ul: ['Gunakan kata benda untuk data (<code>pesanan</code>, <code>total_bayar</code>) dan kata kerja untuk fungsi (<code>kirim_email</code>, <code>hitung_diskon</code>).', 'Hindari singkatan pribadi seperti <code>tmp2</code>, <code>dt</code>, <code>flg</code>.', 'Angka "ajaib" seperti 0.11 atau 7 diberi nama konstanta.', 'Boolean dinamai seperti pertanyaan: <code>sudah_bayar</code>, <code>is_aktif</code>.'] },

            { h2: '2. Fungsi kecil yang melakukan satu hal' },
            `Fungsi yang panjang biasanya mengerjakan beberapa hal sekaligus: memvalidasi, menghitung, menyimpan, mengirim notifikasi. Pecah menjadi fungsi-fungsi dengan nama yang menjelaskan langkahnya.`,
            { code: 'def proses_pesanan(pesanan):\n    validasi(pesanan)\n    total = hitung_total(pesanan)\n    simpan(pesanan, total)\n    kirim_konfirmasi(pesanan.email, total)' },
            `Fungsi utama di atas bisa dibaca seperti daftar langkah. Detail tiap langkah ada di fungsinya masing-masing.`,

            { h2: '3. Keluar lebih awal, kurangi sarang' },
            { code: '# Sebelum: bersarang tiga tingkat\ndef bisa_checkout(user, keranjang):\n    if user:\n        if user.aktif:\n            if keranjang:\n                return True\n    return False\n\n# Sesudah: guard clause\ndef bisa_checkout(user, keranjang):\n    if not user or not user.aktif:\n        return False\n    return len(keranjang) > 0' },

            { h2: '4. Komentar untuk "mengapa", bukan "apa"' },
            `Kode yang jelas sudah menjelaskan <i>apa</i> yang dilakukan. Komentar paling berharga menjelaskan <i>mengapa</i>: alasan bisnis, keputusan yang tidak terlihat, atau jebakan yang pernah terjadi.`,
            { code: '# Buruk: mengulang kode\ni += 1  # tambah i dengan 1\n\n# Baik: menjelaskan alasan\n# Bank mitra menolak transfer di atas 50 juta per transaksi,\n# jadi pembayaran besar dipecah.\nfor bagian in pecah_nominal(total, 50_000_000):\n    transfer(bagian)' },

            { h2: '5. Jangan ulangi diri sendiri, tetapi jangan terburu-buru' },
            `Prinsip DRY (<i>Don't Repeat Yourself</i>) mengajak kita menyatukan logika yang sama di satu tempat. Namun dua potong kode yang <b>kebetulan</b> mirip belum tentu logika yang sama. Banyak engineer memakai aturan praktis "tiga kali": baru diekstrak menjadi fungsi bersama ketika pola yang sama muncul ketiga kalinya.`,

            { h2: 'Contoh lengkap: merapikan satu fungsi' },
            { w: 'compare', title: 'Sebelum dan sesudah', tabs: [
                { label: 'Sebelum', html: '<pre><code>def f(l):\n    t = 0\n    for x in l:\n        if x[2] == 1:\n            t = t + x[1] * x[0]\n    if t &gt; 500000:\n        t = t - t * 0.1\n    return t</code></pre>Apa itu x[2]? Mengapa 500000? Pembaca harus menebak.' },
                { label: 'Sesudah', html: '<pre><code>BATAS_DISKON = 500_000\nDISKON = 0.10\n\ndef total_belanja(item_list):\n    subtotal = sum(i.harga * i.jumlah\n                   for i in item_list if i.dipilih)\n    if subtotal &gt; BATAS_DISKON:\n        subtotal *= 1 - DISKON\n    return subtotal</code></pre>Nama dan konstanta menjelaskan aturan bisnisnya.' },
            ] },

            { h2: 'Cara menerapkan di tim tanpa drama' },
            { ol: ['<b>Aturan pramuka:</b> tinggalkan kode sedikit lebih rapi daripada saat Anda menemukannya. Cukup satu nama yang diperbaiki.', '<b>Otomatiskan gaya:</b> pakai formatter (Prettier, Black, Laravel Pint) dan linter (ESLint, Ruff) agar debat spasi dan tanda kutip hilang.', '<b>Sepakati sedikit aturan tertulis</b> di README atau CONTRIBUTING, bukan puluhan.', '<b>Refactor dengan tes.</b> Tanpa tes, merapikan kode bisa diam-diam merusak perilaku.'] },
            { w: 'checklist', title: 'Periksa kode Anda sebelum commit', items: ['Nama variabel dan fungsi bisa dipahami tanpa membaca isinya.', 'Tidak ada angka ajaib tanpa nama.', 'Fungsi saya kurang dari sekitar 30 baris, atau punya alasan jelas.', 'Sarang if tidak lebih dari dua tingkat.', 'Komentar menjelaskan alasan, bukan mengulang kode.', 'Kode mati dan console.log sisa debug sudah dihapus.', 'Formatter dan linter sudah dijalankan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Komentar mana yang paling berguna?', options: ['# loop setiap item', '# API pajak membulatkan ke bawah, jadi kita bulatkan sendiri', '# variabel total'], answer: 1, why: 'Komentar terbaik menjelaskan alasan yang tidak terlihat dari kode.' },
                { q: 'Kapan sebaiknya mengekstrak kode yang mirip menjadi satu fungsi?', options: ['Begitu ada dua yang mirip', 'Ketika jelas logikanya sama, sering kali saat muncul ketiga kalinya', 'Tidak perlu pernah'], answer: 1, why: 'Kemiripan kebetulan bisa berpisah arah di masa depan.' },
            ] },
        ],
        faq: [
            ['Apakah clean code membuat program lebih lambat?', 'Hampir tidak pernah berarti. Fungsi kecil dan nama panjang tidak memengaruhi kecepatan secara nyata pada bahasa modern. Optimasi dilakukan setelah ada pengukuran.'],
            ['Buku apa yang sebaiknya dibaca?', 'Clean Code (Robert C. Martin) dan Refactoring (Martin Fowler) adalah dua rujukan klasik. Baca dengan kritis; tidak semua aturannya cocok untuk semua bahasa.'],
            ['Bagaimana dengan kode lama yang sudah berantakan?', 'Jangan menulis ulang semuanya. Rapikan bagian yang sedang Anda ubah, dan tambahkan tes sebelum mengubah perilaku.'],
        ],
        sources: [
            ['Martin Fowler: Refactoring (katalog teknik refactoring)', 'https://refactoring.com/catalog/'],
            ['Google Engineering Practices: What to look for in a code review', 'https://google.github.io/eng-practices/review/reviewer/looking-for.html'],
            ['PEP 8: Style Guide for Python Code', 'https://peps.python.org/pep-0008/'],
        ],
    },

    {
        slug: 'code-review-cara-memberi-dan-menerima-masukan',
        title: 'Code Review: Cara Memberi dan Menerima Masukan',
        description: 'Panduan code review untuk tim developer: apa yang diperiksa, ukuran pull request ideal, cara menulis komentar yang membantu, dan menerima kritik.',
        date: D, category: C, tags: ['code review', 'pull request', 'kerja tim developer', 'GitHub', 'kualitas kode'], cta: 'jasa',
        lead: 'Code review adalah kebiasaan tim yang paling sering disalahpahami. Sebagian menganggapnya ajang mencari kesalahan, sebagian hanya mengetik "LGTM" tanpa membaca. Padahal tujuan utamanya sederhana: kesehatan kode tim terus membaik dari waktu ke waktu, dan pengetahuan tidak hanya tersimpan di kepala satu orang.',
        body: [
            { h2: 'Untuk apa code review?' },
            { ul: ['<b>Menemukan bug lebih awal</b>, saat masih murah diperbaiki.', '<b>Menyebarkan pengetahuan:</b> lebih dari satu orang paham bagian sistem itu.', '<b>Menjaga konsistensi</b> desain dan gaya.', '<b>Mendidik:</b> developer baru belajar standar tim dari komentar nyata.'] },
            `Panduan code review Google merumuskan standarnya dengan pragmatis: setujui perubahan bila perubahan itu <b>jelas memperbaiki kesehatan kode secara keseluruhan</b>, meski belum sempurna. Tidak ada kode yang sempurna; yang ada kode yang lebih baik.`,

            { h2: 'Ukuran pull request: kecil itu cepat' },
            `PR berisi 2.000 baris akan dibaca sekilas. PR berisi 200 baris akan dibaca dengan sungguh-sungguh. Pecah pekerjaan besar menjadi beberapa PR yang masing-masing bisa dipahami sendiri.`,
            { svg: 'bars', label: 'Perkiraan perhatian reviewer menurut ukuran PR (ilustrasi)', unit: '%', data: [['< 200 baris', 90], ['200-400 baris', 70], ['400-1000 baris', 40], ['> 1000 baris', 15]], caption: 'Ilustrasi pola umum, bukan data survei. Semakin besar PR, semakin dangkal pemeriksaannya.' },

            { h2: 'Apa yang diperiksa, berurutan dari yang terpenting' },
            { ol: ['<b>Desain:</b> apakah pendekatannya masuk akal dan cocok dengan sistem?', '<b>Kebenaran:</b> apakah melakukan yang dimaksud? Bagaimana kasus kosong, null, error jaringan?', '<b>Keamanan:</b> input divalidasi? Ada data sensitif yang bocor ke log?', '<b>Tes:</b> ada tes untuk perilaku baru dan kasus tepi?', '<b>Keterbacaan:</b> nama, struktur, komentar.', '<b>Gaya:</b> sebaiknya sudah diurus formatter, bukan manusia.'] },

            { h2: 'Menulis komentar yang membantu' },
            { w: 'cards', title: 'Ketuk untuk melihat versi yang lebih baik', items: [
                { tag: 'Kurang baik', front: '"Ini salah."', backTag: 'Lebih baik', back: '"Kalau daftar pesanan kosong, baris 42 akan error karena indeks [0]. Bagaimana kalau dicek dulu panjangnya?"' },
                { tag: 'Kurang baik', front: '"Kenapa tidak pakai cara yang benar?"', backTag: 'Lebih baik', back: '"Ada helper formatRupiah() di utils yang sudah menangani pembulatan. Mungkin bisa dipakai di sini?"' },
                { tag: 'Kurang baik', front: '"Ganti nama variabel."', backTag: 'Lebih baik', back: '"Nit: data agak umum. Mungkin pesananTertunda supaya jelas isinya?"' },
                { tag: 'Kurang baik', front: 'Diam saja pada bagian yang bagus.', backTag: 'Lebih baik', back: '"Pemisahan validasi ke fungsi sendiri ini rapi sekali, jadi gampang dites."' },
            ] },
            { table: { head: ['Label', 'Artinya'], rows: [['<b>Nit:</b>', 'Saran kecil, tidak memblokir.'], ['<b>Opsional:</b>', 'Boleh diabaikan, hanya ide.'], ['<b>Pertanyaan:</b>', 'Saya ingin memahami, belum tentu ada masalah.'], ['<b>Wajib/Blocking:</b>', 'Harus diperbaiki sebelum merge (bug, keamanan).']] } },
            `Label seperti ini membuat penulis PR tahu mana yang harus dikerjakan dan mana yang boleh dilewati.`,

            { h2: 'Untuk penulis PR: cara menerima masukan' },
            { ul: ['Tulis deskripsi PR: <b>apa</b> yang berubah, <b>mengapa</b>, dan <b>cara menguji</b>. Tambahkan tangkapan layar untuk perubahan tampilan.', 'Review kode Anda sendiri di tampilan diff sebelum meminta orang lain.', 'Ingat: yang dikomentari adalah kode, bukan Anda.', 'Bila tidak setuju, jelaskan alasannya dengan data. Bila buntu, diskusi singkat lewat panggilan lebih cepat dari 20 balasan komentar.', 'Balas setiap komentar, misalnya "Sudah diperbaiki di commit abc123".'] },

            { h2: 'Kecepatan review penting' },
            `PR yang menunggu dua hari membuat penulisnya berpindah konteks, lalu konflik merge bertambah. Banyak tim menyepakati target respons pertama dalam satu hari kerja. Respons pertama tidak harus approve; cukup komentar awal.`,
            { w: 'checklist', title: 'Checklist sebelum klik Approve', items: ['Saya paham tujuan perubahan ini.', 'Saya membaca seluruh diff, bukan hanya sekilas.', 'Kasus kosong, error, dan batas sudah dipikirkan.', 'Tidak ada rahasia (API key, password) di kode.', 'Ada tes untuk perilaku baru, atau alasan jelas kenapa tidak.', 'CI hijau.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Kapan sebaiknya reviewer menyetujui PR menurut panduan Google?', options: ['Hanya bila sempurna', 'Bila jelas memperbaiki kesehatan kode secara keseluruhan', 'Bila penulisnya senior'], answer: 1, why: 'Kesempurnaan bukan syarat; perbaikan bersih adalah syarat.' },
                { q: 'Siapa yang sebaiknya mengurus perdebatan spasi dan tanda kutip?', options: ['Reviewer paling teliti', 'Formatter dan linter otomatis', 'Ketua tim'], answer: 1, why: 'Mesin konsisten dan tidak membuat orang tersinggung.' },
            ] },
        ],
        faq: [
            ['Berapa jumlah reviewer yang ideal?', 'Untuk sebagian besar perubahan, satu reviewer yang paham area itu sudah cukup. Perubahan berisiko tinggi seperti keamanan atau pembayaran layak ditinjau dua orang.'],
            ['Bolehkah AI dipakai untuk code review?', 'Boleh sebagai lapisan tambahan untuk menangkap hal umum. Keputusan desain dan konteks bisnis tetap perlu reviewer manusia.'],
            ['Bagaimana kalau di tim hanya saya developernya?', 'Review diri sendiri di tampilan diff setelah jeda beberapa jam, dan andalkan tes serta linter otomatis.'],
        ],
        sources: [
            ['Google Engineering Practices: The Standard of Code Review', 'https://google.github.io/eng-practices/review/reviewer/standard.html'],
            ['Google Engineering Practices: How to write code review comments', 'https://google.github.io/eng-practices/review/reviewer/comments.html'],
            ['GitHub Docs: About pull request reviews', 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews'],
        ],
    },

    {
        slug: 'unit-testing-untuk-pemula-kenapa-dan-cara-mulai',
        title: 'Unit Testing untuk Pemula: Kenapa dan Cara Memulai',
        description: 'Belajar unit testing dari nol: apa itu tes, piramida tes, pola Arrange-Act-Assert, contoh pytest dan Jest, mock, dan kebiasaan menulis tes yang tidak rapuh.',
        date: D, category: C, tags: ['unit testing', 'pytest', 'Jest', 'TDD', 'pengujian software'], cta: 'jasa',
        lead: 'Tanpa tes, setiap perubahan kode adalah taruhan: apakah fitur lama masih jalan? Kita baru tahu ketika pengguna mengeluh. Unit test adalah program kecil yang memeriksa program Anda, berjalan dalam hitungan detik, dan memberi tahu segera bila ada yang rusak.',
        body: [
            { h2: 'Apa itu unit test?' },
            `Unit test menguji bagian terkecil yang masuk akal, biasanya satu fungsi atau satu kelas, secara terpisah dari database, jaringan, dan layar. Karena terisolasi, ia cepat dan hasilnya konsisten.`,
            { svg: 'layers', label: 'Piramida tes', items: [{ t: 'End-to-end (sedikit)', d: 'Membuka aplikasi sungguhan seperti pengguna. Lambat, paling realistis.' }, { t: 'Integrasi (sedang)', d: 'Beberapa bagian bersama: API dengan database, misalnya.' }, { t: 'Unit (banyak)', d: 'Fungsi demi fungsi. Cepat, murah, jumlahnya paling banyak.' }], caption: 'Banyak tes kecil yang cepat di bawah, sedikit tes besar yang lambat di atas.' },

            { h2: 'Pola Arrange, Act, Assert' },
            `Hampir semua tes punya tiga bagian: siapkan data (<b>Arrange</b>), jalankan yang diuji (<b>Act</b>), periksa hasilnya (<b>Assert</b>).`,
            { code: '# diskon.py\ndef harga_setelah_diskon(harga, persen):\n    if not 0 <= persen <= 100:\n        raise ValueError("persen harus 0-100")\n    return round(harga * (100 - persen) / 100)\n\n# test_diskon.py   (jalankan: pytest)\nimport pytest\nfrom diskon import harga_setelah_diskon\n\ndef test_diskon_sepuluh_persen():\n    # Arrange\n    harga = 200_000\n    # Act\n    hasil = harga_setelah_diskon(harga, 10)\n    # Assert\n    assert hasil == 180_000\n\ndef test_tanpa_diskon():\n    assert harga_setelah_diskon(50_000, 0) == 50_000\n\ndef test_persen_tidak_valid():\n    with pytest.raises(ValueError):\n        harga_setelah_diskon(50_000, 120)' },
            { h3: 'Versi JavaScript dengan Jest atau Vitest' },
            { code: "// diskon.test.js   (jalankan: npx vitest atau npx jest)\nimport { hargaSetelahDiskon } from './diskon.js';\n\ntest('diskon 10 persen', () => {\n  expect(hargaSetelahDiskon(200000, 10)).toBe(180000);\n});\n\ntest('persen tidak valid melempar error', () => {\n  expect(() => hargaSetelahDiskon(50000, 120)).toThrow();\n});" },

            { h2: 'Kasus apa yang perlu dites?' },
            { w: 'cards', title: 'Ketuk untuk contoh pada fungsi diskon', items: [
                { tag: 'Jenis', front: 'Kasus normal (happy path)', backTag: 'Contoh', back: 'Diskon 10% dari 200.000 menjadi 180.000.' },
                { tag: 'Jenis', front: 'Batas (boundary)', backTag: 'Contoh', back: 'Persen 0 dan 100, harga 0.' },
                { tag: 'Jenis', front: 'Input tidak valid', backTag: 'Contoh', back: 'Persen -5 atau 120 harus menghasilkan error yang jelas.' },
                { tag: 'Jenis', front: 'Bug yang pernah terjadi', backTag: 'Contoh', back: 'Setiap bug yang diperbaiki diberi tes agar tidak muncul lagi (regression test).' },
            ] },

            { h2: 'Mock: mengganti bagian yang lambat atau tidak pasti' },
            `Fungsi yang memanggil API pembayaran tidak boleh benar-benar menagih saat dites. Kita ganti API itu dengan tiruan (<b>mock</b> atau <b>fake</b>) yang mengembalikan jawaban yang kita tentukan.`,
            { code: 'from unittest.mock import Mock\n\ndef kirim_tagihan(gateway, jumlah):\n    hasil = gateway.charge(jumlah)\n    return "lunas" if hasil["status"] == "ok" else "gagal"\n\ndef test_tagihan_berhasil():\n    gateway = Mock()\n    gateway.charge.return_value = {"status": "ok"}\n    assert kirim_tagihan(gateway, 10000) == "lunas"\n    gateway.charge.assert_called_once_with(10000)' },
            { callout: 'Terlalu banyak mock membuat tes hanya menguji tiruan, bukan kode. Bila sebuah fungsi butuh lima mock untuk dites, itu tanda desainnya perlu disederhanakan.', kind: 'warn', title: 'Jangan berlebihan' },

            { h2: 'Tes yang baik itu seperti apa?' },
            { ul: ['<b>Cepat:</b> ratusan tes selesai dalam hitungan detik.', '<b>Mandiri:</b> urutan menjalankan tidak memengaruhi hasil.', '<b>Konsisten:</b> tidak tergantung jam, acak, atau internet.', '<b>Nama menjelaskan perilaku:</b> <code>test_persen_tidak_valid</code>, bukan <code>test1</code>.', '<b>Menguji perilaku, bukan detail implementasi:</b> agar tes tidak rusak hanya karena kode dirapikan.'] },

            { h2: 'Bagaimana dengan TDD dan coverage?' },
            `<b>TDD</b> (Test-Driven Development) berarti menulis tes yang gagal dulu, lalu kode secukupnya agar lulus, lalu merapikan (siklus merah, hijau, refactor). Tidak wajib, tetapi bagus untuk logika bisnis yang rumit. <b>Coverage</b> (persentase baris yang dijalankan tes) berguna untuk menemukan bagian yang belum dites, tetapi angka 100% tidak menjamin tes yang bermakna.`,
            { svg: 'cycle', label: 'Siklus TDD', items: ['Merah: tulis tes yang gagal', 'Hijau: tulis kode secukupnya', 'Refactor: rapikan, tes tetap hijau'] },
            { w: 'checklist', title: 'Mulai minggu ini', items: ['Pasang pytest, Jest, atau Vitest di proyek.', 'Tulis tes untuk satu fungsi perhitungan yang paling penting.', 'Tambahkan tes untuk bug berikutnya yang Anda perbaiki.', 'Jalankan tes otomatis di CI setiap push.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Lapisan mana yang jumlah tesnya paling banyak di piramida tes?', options: ['End-to-end', 'Integrasi', 'Unit'], answer: 2, why: 'Unit test murah dan cepat, sehingga jumlahnya paling banyak.' },
                { q: 'Coverage 100% berarti...', options: ['Tidak ada bug', 'Setiap baris pernah dijalankan saat tes', 'Semua perilaku sudah benar'], answer: 1, why: 'Baris yang dijalankan belum tentu diperiksa hasilnya.' },
            ] },
        ],
        faq: [
            ['Apakah proyek kecil perlu unit test?', 'Untuk logika yang menyangkut uang, nilai, atau aturan bisnis, ya. Tes beberapa fungsi kunci saja sudah sangat membantu.'],
            ['Berapa persen coverage yang ideal?', 'Tidak ada angka ajaib. Banyak tim memakai 70-80% sebagai panduan, dengan fokus pada logika penting, bukan mengejar angka.'],
            ['Apa beda unit test dan integration test?', 'Unit test menguji satu bagian secara terisolasi. Integration test menguji beberapa bagian bersama, misalnya API dengan database sungguhan.'],
        ],
        sources: [
            ['pytest: Get Started', 'https://docs.pytest.org/en/stable/getting-started.html'],
            ['Martin Fowler: The Practical Test Pyramid', 'https://martinfowler.com/articles/practical-test-pyramid.html'],
            ['Vitest: Getting Started', 'https://vitest.dev/guide/'],
        ],
    },

    {
        slug: 'ci-cd-untuk-pemula-github-actions',
        title: 'CI/CD untuk Pemula: Otomasi Tes dan Deploy',
        description: 'Apa itu CI/CD dan cara membuat pipeline pertama dengan GitHub Actions: tes otomatis, build, deploy, menyimpan secret dengan aman, dan kesalahan umum.',
        date: D, category: C, tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'deploy otomatis', 'pipeline'], cta: 'jasa',
        lead: 'Pernah lupa menjalankan tes sebelum upload ke server? Atau deploy manual yang langkahnya hanya diingat satu orang? CI/CD memindahkan langkah-langkah itu ke mesin: setiap kali kode dikirim, tes berjalan sendiri, dan bila semuanya hijau, aplikasi bisa terpasang otomatis.',
        body: [
            { h2: 'CI dan CD dalam satu kalimat' },
            { ul: ['<b>Continuous Integration (CI):</b> setiap perubahan kode digabung sering dan otomatis diuji, sehingga kesalahan ketahuan dalam menit, bukan minggu.', '<b>Continuous Delivery:</b> kode yang lolos selalu dalam keadaan siap dirilis; rilis tinggal satu klik.', '<b>Continuous Deployment:</b> selangkah lebih jauh, kode yang lolos langsung terpasang ke produksi tanpa klik.'] },
            { svg: 'flow', label: 'Alur pipeline sederhana', steps: [{ t: 'Push / PR', d: 'developer mengirim kode' }, { t: 'Install', d: 'ambil dependensi' }, { t: 'Lint & tes', d: 'gagal = berhenti' }, { t: 'Build', d: 'hasil siap pakai' }, { t: 'Deploy', d: 'staging atau produksi' }], caption: 'Setiap langkah adalah gerbang. Bila satu gagal, langkah berikutnya tidak berjalan.' },

            { h2: 'Pipeline pertama dengan GitHub Actions' },
            `GitHub Actions membaca file YAML di folder <code>.github/workflows/</code>. Contoh berikut menjalankan lint dan tes untuk proyek Node.js setiap ada push dan pull request.`,
            { code: "# .github/workflows/ci.yml\nname: CI\non:\n  push:\n    branches: [main]\n  pull_request:\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: npm\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test" },
            { table: { head: ['Bagian', 'Arti'], rows: [['<code>on</code>', 'Kapan workflow berjalan (push, PR, jadwal).'], ['<code>jobs</code>', 'Kumpulan pekerjaan; bisa paralel.'], ['<code>runs-on</code>', 'Mesin virtual yang dipakai.'], ['<code>steps</code>', 'Langkah berurutan: aksi siap pakai (<code>uses</code>) atau perintah (<code>run</code>).'], ['<code>npm ci</code>', 'Install persis sesuai package-lock, lebih konsisten dari npm install.']] } },
            { h3: 'Versi Python' },
            { code: "      - uses: actions/setup-python@v5\n        with:\n          python-version: '3.12'\n      - run: pip install -r requirements.txt\n      - run: pytest" },

            { h2: 'Menyimpan secret dengan benar' },
            `Token deploy, API key, dan password database <b>tidak boleh</b> ditulis di file workflow. Simpan di <i>Settings → Secrets and variables → Actions</i>, lalu panggil sebagai <code>\${{ secrets.NAMA }}</code>. GitHub menyamarkan nilainya di log.`,
            { code: "      - name: Deploy\n        if: github.ref == 'refs/heads/main'\n        run: npx wrangler deploy\n        env:\n          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}" },
            { callout: 'Bila sebuah secret pernah ter-commit ke repositori, anggap sudah bocor walau commit-nya dihapus. Cabut (revoke) dan buat yang baru.', kind: 'bad', title: 'Secret yang bocor' },

            { h2: 'Kebiasaan yang membuat CI bermanfaat' },
            { ul: ['<b>Cepat:</b> usahakan di bawah 10 menit. Pakai cache dependensi.', '<b>Wajib hijau sebelum merge:</b> aktifkan branch protection yang mensyaratkan status check.', '<b>Pisahkan staging dan produksi:</b> deploy otomatis ke staging, produksi dengan persetujuan.', '<b>Jangan abaikan tes yang "kadang gagal":</b> tes tidak stabil membuat tim berhenti percaya pada CI. Perbaiki akarnya.'] },
            { w: 'cards', title: 'Ketuk untuk melihat solusinya', items: [
                { tag: 'Masalah', front: 'CI butuh 25 menit setiap push.', backTag: 'Solusi', back: 'Cache dependensi, jalankan job paralel, dan pisahkan tes end-to-end yang lambat ke jadwal malam.' },
                { tag: 'Masalah', front: '"Di laptop saya jalan, di CI gagal."', backTag: 'Solusi', back: 'Biasanya beda versi runtime atau dependensi. Kunci versi (lockfile, .nvmrc) dan pakai npm ci.' },
                { tag: 'Masalah', front: 'Deploy produksi terjadi dari branch fitur.', backTag: 'Solusi', back: 'Tambahkan kondisi if pada branch main dan environment dengan reviewer wajib.' },
            ] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Di mana file workflow GitHub Actions disimpan?', options: ['/workflows', '.github/workflows/', 'config/ci'], answer: 1, why: 'GitHub hanya membaca workflow di .github/workflows/.' },
                { q: 'Beda continuous delivery dan continuous deployment?', options: ['Tidak ada', 'Delivery siap rilis dengan satu klik; deployment langsung terpasang otomatis', 'Deployment hanya untuk mobile'], answer: 1, why: 'Perbedaannya pada langkah terakhir: manual atau otomatis.' },
            ] },
        ],
        faq: [
            ['Apakah GitHub Actions gratis?', 'Untuk repositori publik, runner standar gratis. Repositori privat mendapat kuota menit gratis per bulan sesuai paket akun; cek halaman billing GitHub untuk angka terbaru.'],
            ['Selain GitHub Actions, ada apa saja?', 'GitLab CI, Bitbucket Pipelines, CircleCI, Jenkins, dan fitur build bawaan platform hosting seperti Vercel, Netlify, atau Cloudflare.'],
            ['Apakah proyek pribadi butuh CI?', 'CI paling sederhana (lint dan tes) hanya butuh beberapa baris YAML dan sangat membantu, bahkan untuk proyek satu orang.'],
        ],
        sources: [
            ['GitHub Docs: Understanding GitHub Actions', 'https://docs.github.com/en/actions/about-github-actions/understanding-github-actions'],
            ['GitHub Docs: Using secrets in GitHub Actions', 'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions'],
            ['Martin Fowler: Continuous Integration', 'https://martinfowler.com/articles/continuousIntegration.html'],
        ],
    },

    {
        slug: 'semantic-versioning-arti-angka-versi',
        title: 'Semantic Versioning: Arti Angka Versi 2.4.1',
        description: 'Arti angka versi MAJOR.MINOR.PATCH menurut Semantic Versioning, simbol ^ dan ~ di package.json, versi pre-release, changelog, dan kapan menaikkan setiap angka.',
        date: D, category: C, tags: ['semantic versioning', 'semver', 'package.json', 'changelog', 'rilis software'], cta: 'jasa',
        lead: 'Versi 2.4.1 bukan angka acak. Dalam Semantic Versioning, tiap angka adalah janji kepada pengguna perangkat lunak Anda: apakah pembaruan ini aman dipasang begitu saja, atau berpotensi merusak kode mereka.',
        body: [
            { h2: 'Tiga angka, tiga janji' },
            { table: { head: ['Bagian', 'Naikkan bila', 'Contoh'], rows: [['<b>MAJOR</b> (2.x.x)', 'Ada perubahan yang tidak kompatibel: fungsi dihapus, parameter berubah arti.', '1.9.3 → 2.0.0'], ['<b>MINOR</b> (x.4.x)', 'Fitur baru yang tetap kompatibel dengan versi sebelumnya.', '2.3.7 → 2.4.0'], ['<b>PATCH</b> (x.x.1)', 'Perbaikan bug yang kompatibel.', '2.4.0 → 2.4.1']] } },
            `Saat MINOR naik, PATCH kembali ke 0. Saat MAJOR naik, MINOR dan PATCH kembali ke 0.`,
            { svg: 'timeline', label: 'Contoh perjalanan versi sebuah library', events: [['1.0.0', 'Rilis stabil pertama', 'API publik dinyatakan stabil.'], ['1.0.1', 'Perbaikan bug', 'Format tanggal salah diperbaiki.'], ['1.1.0', 'Fitur baru', 'Tambah opsi bahasa Indonesia.'], ['2.0.0', 'Perubahan besar', 'Fungsi lama dihapus, nama parameter diganti.']] },

            { h2: 'Versi 0.x.x: masa percobaan' },
            `Spesifikasi SemVer menyatakan versi <b>0.y.z</b> untuk pengembangan awal: apa pun boleh berubah kapan saja. Versi <b>1.0.0</b> menandai API publik yang stabil. Banyak proyek terlalu lama di 0.x karena takut "berjanji"; padahal bila sudah dipakai orang di produksi, sebaiknya sudah 1.0.0.`,

            { h2: 'Pre-release dan metadata' },
            { code: '2.0.0-alpha.1   # versi uji awal\n2.0.0-beta.3    # fitur lengkap, masih diuji\n2.0.0-rc.1      # release candidate\n2.0.0           # rilis final\n2.0.0+build.57  # metadata build, tidak memengaruhi urutan versi' },

            { h2: 'Simbol ^ dan ~ di package.json' },
            `npm dan banyak manajer paket lain memakai SemVer untuk memutuskan versi mana yang boleh dipasang otomatis.`,
            { table: { head: ['Penulisan', 'Boleh memasang', 'Tidak boleh'], rows: [['<code>"4.17.21"</code>', 'Persis 4.17.21', 'Versi lain'], ['<code>"~4.17.21"</code>', '4.17.x (patch saja)', '4.18.0'], ['<code>"^4.17.21"</code>', '4.x.x selama ≥ 4.17.21', '5.0.0'], ['<code>"^0.3.2"</code>', '0.3.x saja', '0.4.0 (pada 0.x, minor dianggap major)']] } },
            { callout: 'Lockfile (package-lock.json, pnpm-lock.yaml, composer.lock) mencatat versi persis yang terpasang. Commit lockfile agar semua orang dan server CI memasang versi yang sama.', kind: 'info', title: 'Selalu commit lockfile' },

            { h2: 'Tentukan sendiri: versi berapa berikutnya?' },
            { w: 'cards', title: 'Versi sekarang 3.2.5. Ketuk untuk jawabannya', items: [
                { tag: 'Perubahan', front: 'Memperbaiki typo pada pesan error.', backTag: 'Versi', back: '3.2.6 (PATCH)' },
                { tag: 'Perubahan', front: 'Menambah fungsi exportCsv() baru, fungsi lama tetap.', backTag: 'Versi', back: '3.3.0 (MINOR)' },
                { tag: 'Perubahan', front: 'Mengganti nama fungsi getUser() menjadi fetchUser() tanpa alias.', backTag: 'Versi', back: '4.0.0 (MAJOR), karena kode pengguna yang memanggil getUser() akan rusak.' },
                { tag: 'Perubahan', front: 'Menandai fungsi lama sebagai deprecated, tapi masih berfungsi.', backTag: 'Versi', back: '3.3.0 (MINOR). Penghapusannya nanti di versi MAJOR berikutnya.' },
            ] },

            { h2: 'Changelog: catatan untuk manusia' },
            `Angka versi memberi tahu <i>seberapa besar</i> perubahan; changelog memberi tahu <i>apa</i> yang berubah. Format populer dari keepachangelog.com mengelompokkan perubahan: Added, Changed, Deprecated, Removed, Fixed, Security.`,
            { code: '## [2.4.0] - 2026-10-28\n### Added\n- Opsi bahasa Indonesia pada format tanggal.\n### Fixed\n- Pembulatan Rupiah salah untuk nilai negatif.\n\n## [2.3.1] - 2026-09-12\n### Security\n- Perbarui dependensi yang memiliki celah keamanan.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Dengan "^1.4.0", versi mana yang boleh terpasang otomatis?', options: ['2.0.0', '1.9.2', '1.3.9'], answer: 1, why: 'Caret mengizinkan minor dan patch yang lebih baru di major yang sama.' },
                { q: 'Menghapus sebuah parameter wajib dari fungsi publik membutuhkan kenaikan...', options: ['PATCH', 'MINOR', 'MAJOR'], answer: 2, why: 'Kode pengguna yang lama bisa rusak, jadi tidak kompatibel.' },
            ] },
        ],
        faq: [
            ['Apakah aplikasi (bukan library) perlu SemVer?', 'Tidak wajib. SemVer paling penting untuk library dan API yang dipakai orang lain. Aplikasi boleh memakai versi berbasis tanggal, misalnya 2026.10.'],
            ['Bagaimana mengotomatiskan versi?', 'Alat seperti semantic-release atau Changesets membaca pesan commit atau catatan perubahan untuk menaikkan versi dan menulis changelog otomatis.'],
            ['Apa itu Conventional Commits?', 'Konvensi pesan commit seperti feat:, fix:, dan BREAKING CHANGE yang bisa dipetakan otomatis ke MINOR, PATCH, dan MAJOR.'],
        ],
        sources: [
            ['Semantic Versioning 2.0.0 (spesifikasi resmi)', 'https://semver.org/'],
            ['npm Docs: About semantic versioning', 'https://docs.npmjs.com/about-semantic-versioning'],
            ['Keep a Changelog', 'https://keepachangelog.com/en/1.1.0/'],
        ],
    },
];
