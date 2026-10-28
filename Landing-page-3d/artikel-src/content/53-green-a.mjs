const D = '2026-10-28';
const C = 'Green IT';

export default [
    {
        slug: 'green-it-adalah-teknologi-yang-ramah-lingkungan',
        title: 'Green IT Adalah: Teknologi yang Lebih Ramah Lingkungan',
        description: 'Pengertian Green IT, dari mana jejak lingkungan teknologi berasal, prinsip utama, contoh langkah di kantor dan pengembangan software, dan manfaat bisnisnya.',
        date: D, category: C, tags: ['Green IT', 'teknologi hijau', 'keberlanjutan', 'jejak karbon', 'IT ramah lingkungan'], cta: 'jasa',
        lead: 'Teknologi sering dianggap "bersih" karena tidak berasap. Padahal laptop, server, jaringan, dan pusat data membutuhkan bahan tambang, energi untuk diproduksi, listrik untuk dijalankan, dan akhirnya menjadi sampah elektronik. Green IT adalah upaya merancang, memakai, dan membuang teknologi dengan dampak lingkungan sekecil mungkin. Topik ini saya ajarkan dalam modul pelatihan korporat selama 16 hari, dan dasarnya bisa dipahami siapa saja.',
        body: [
            { h2: 'Dua sisi Green IT' },
            { svg: 'versus', label: 'Green IT dan IT for Green', left: { title: 'Green IT (greening of IT)', items: ['Membuat teknologi itu sendiri lebih hemat', 'Perangkat awet, pusat data efisien', 'Software yang hemat energi'] }, right: { title: 'IT for green', items: ['Memakai teknologi untuk membantu keberlanjutan', 'Rapat daring mengganti perjalanan', 'Sensor untuk menghemat energi gedung'] } },

            { h2: 'Siklus hidup perangkat' },
            { svg: 'cycle', label: 'Dari tambang sampai sampah', items: ['Penambangan bahan baku', 'Produksi dan perakitan', 'Pengiriman', 'Pemakaian (listrik)', 'Akhir masa pakai: pakai ulang, daur ulang, atau sampah'], caption: 'Untuk ponsel dan laptop, laporan lingkungan produsen umumnya menunjukkan sebagian besar emisi seumur hidup terjadi saat produksi, bukan saat dipakai.' },
            `Karena itu, langkah Green IT yang paling efektif untuk perangkat pribadi sering kali sederhana: <b>pakai lebih lama</b>, perbaiki bila rusak, dan salurkan ke orang lain atau ke pendaur ulang resmi saat tidak terpakai.`,

            { h2: 'Skala masalahnya' },
            { table: { head: ['Fakta', 'Angka', 'Sumber'], rows: [['Sampah elektronik dunia 2022', '62 juta ton, naik 82% dari 2010', 'Global E-waste Monitor 2024'], ['Yang tercatat dikumpulkan dan didaur ulang dengan benar', '22,3%', 'Global E-waste Monitor 2024'], ['Proyeksi sampah elektronik 2030', 'sekitar 82 juta ton', 'Global E-waste Monitor 2024'], ['Konsumsi listrik pusat data 2024', 'sekitar 415 TWh', 'IEA, Energy and AI (2025)'], ['Proyeksi pusat data 2030', 'sekitar 945 TWh', 'IEA, Energy and AI (2025)']] } },

            { h2: 'Prinsip utama' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: 'Kurangi', front: 'Beli dan pakai seperlunya.', backTag: 'Contoh', back: 'Spesifikasi laptop sesuai kebutuhan kerja, bukan selalu yang tertinggi.' },
                { tag: 'Perpanjang', front: 'Perpanjang umur pakai.', backTag: 'Contoh', back: 'Ganti baterai, tambah RAM, ganti SSD daripada membeli perangkat baru.' },
                { tag: 'Efisien', front: 'Pakai energi lebih sedikit untuk hasil yang sama.', backTag: 'Contoh', back: 'Mode hemat daya, server diskalakan sesuai beban, kode yang tidak boros.' },
                { tag: 'Sadar karbon', front: 'Pakai listrik saat dan di tempat yang lebih bersih.', backTag: 'Contoh', back: 'Pekerjaan berat dijadwalkan saat porsi energi terbarukan tinggi atau di region cloud yang lebih rendah karbon.' },
                { tag: 'Sirkular', front: 'Akhiri dengan benar.', backTag: 'Contoh', back: 'Perangkat lama dihapus datanya, lalu dijual kembali, didonasikan, atau diserahkan ke pengelola limbah elektronik resmi.' },
            ] },

            { h2: 'Manfaat bisnis' },
            { ul: ['<b>Biaya turun:</b> listrik, perangkat, dan tagihan cloud.', '<b>Kepatuhan:</b> klien dan regulasi makin meminta pelaporan emisi, termasuk dari rantai pasok.', '<b>Reputasi dan talenta:</b> banyak karyawan dan pelanggan peduli keberlanjutan.', '<b>Ketahanan:</b> perangkat yang dirawat lebih jarang rusak mendadak.'] },
            { callout: 'Hati-hati greenwashing: mengklaim "hijau" tanpa data. Mulailah dengan mengukur, lalu laporkan perbaikan yang nyata dan bisa diperiksa.', kind: 'warn', title: 'Bukan sekadar label' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Untuk laptop dan ponsel, sebagian besar emisi seumur hidup umumnya berasal dari...', options: ['Pemakaian listrik harian', 'Produksi', 'Pengiriman'], answer: 1, why: 'Karena itu memperpanjang umur pakai sangat efektif.' },
                { q: 'Berapa persen sampah elektronik dunia 2022 yang tercatat didaur ulang dengan benar?', options: ['Sekitar 22%', 'Sekitar 60%', 'Sekitar 90%'], answer: 0, why: 'Global E-waste Monitor 2024 mencatat 22,3%.' },
            ] },
        ],
        faq: [
            ['Apakah Green IT hanya untuk perusahaan besar?', 'Tidak. Individu dan UMKM bisa memulai dengan merawat perangkat, mematikan perangkat yang tidak dipakai, dan membuang sampah elektronik dengan benar.'],
            ['Apa bedanya Green IT dan sustainability?', 'Sustainability mencakup seluruh aspek lingkungan, sosial, dan tata kelola. Green IT adalah bagian yang khusus membahas teknologi informasi.'],
            ['Dari mana memulai di kantor?', 'Inventaris perangkat dan umurnya, pengaturan hemat daya, kebijakan perpanjangan umur pakai, dan mitra pengelola limbah elektronik.'],
        ],
        sources: [
            ['ITU dan UNITAR: The Global E-waste Monitor 2024', 'https://ewastemonitor.info/the-global-e-waste-monitor-2024/'],
            ['IEA (2025): Energy and AI', 'https://www.iea.org/reports/energy-and-ai'],
            ['Murugesan (2008): Harnessing Green IT, Principles and Practices, IT Professional', 'https://doi.org/10.1109/MITP.2008.10'],
        ],
    },

    {
        slug: 'jejak-karbon-digital-email-streaming-dan-cloud',
        title: 'Jejak Karbon Digital: Email, Streaming, dan Cloud',
        description: 'Seberapa besar jejak karbon streaming, email, cloud, dan rapat daring, mitos yang dibesar-besarkan, kalkulator, dan langkah yang benar-benar berarti.',
        date: D, category: C, tags: ['jejak karbon digital', 'streaming', 'emisi internet', 'Green IT', 'gaya hidup digital'], cta: 'jasa',
        lead: 'Anda mungkin pernah membaca bahwa menonton video 30 menit setara mengemudi beberapa kilometer, atau bahwa menghapus email menyelamatkan bumi. Banyak angka seperti ini ternyata berlebihan. Mari lihat angka yang lebih hati-hati dan fokus pada langkah yang benar-benar berpengaruh.',
        body: [
            { h2: 'Mitos streaming yang terlalu besar' },
            `Pada 2019 sebuah laporan menyebut 30 menit streaming menghasilkan sekitar 1,6 kg CO₂. George Kamiya dari International Energy Agency (IEA) menelusuri dan menemukan kesalahan asumsi, termasuk bitrate dan efisiensi jaringan. Perkiraan pusat IEA untuk satu jam streaming video pada 2019 adalah sekitar <b>36 gram CO₂</b>, jauh lebih kecil, dan sangat bergantung pada bauran listrik di negara tersebut.`,
            { svg: 'bars', label: 'Perkiraan emisi satu jam streaming video (2019)', unit: ' g CO₂', data: [['Klaim awal yang beredar (30 menit)', 1600], ['Perkiraan pusat IEA (1 jam)', 36]], caption: 'Sumber: IEA, "The carbon footprint of streaming video: fact-checking the headlines". Angka nyata bervariasi menurut perangkat, jaringan, dan sumber listrik.' },

            { h2: 'Di mana energi digital benar-benar terpakai' },
            { ul: ['<b>Perangkat Anda:</b> TV besar memakai listrik jauh lebih banyak daripada ponsel untuk video yang sama.', '<b>Jaringan:</b> data seluler umumnya lebih boros energi per data daripada Wi-Fi rumah.', '<b>Pusat data:</b> menyimpan dan memproses, termasuk AI.', '<b>Produksi perangkat:</b> sering kali bagian terbesar dari jejak digital pribadi.'] },

            { h2: 'Perkirakan sendiri' },
            { w: 'calc', title: 'Perkiraan kasar emisi streaming per tahun', desc: 'Memakai perkiraan pusat IEA 36 g CO₂ per jam (rata-rata global 2019). Ubah faktor bila Anda punya angka yang lebih spesifik.', inputs: [{ id: 'jam', label: 'Jam streaming per hari', value: 2, min: 0, max: 12, step: 0.5 }, { id: 'f', label: 'Faktor emisi per jam', value: 36, min: 5, max: 150, step: 1, unit: 'g CO₂' }], outputs: [{ label: 'Per tahun', expr: 'jam * 365 * f / 1000', fmt: 'num', unit: 'kg CO₂', big: true, note: 'Sebagai perbandingan, membuat satu ponsel baru umumnya menghasilkan puluhan kilogram CO₂e. Memakai ponsel setahun lebih lama sering lebih berpengaruh daripada mengurangi streaming.' }] },

            { h2: 'Bagaimana dengan email dan file di cloud?' },
            `Emisi satu email sangat kecil. Menghapus email lama hampir tidak berpengaruh dibanding langkah lain. Penyimpanan cloud menghabiskan energi, tetapi bagi individu, dampak terbesarnya ada pada <b>berapa banyak perangkat dan cadangan duplikat</b> yang dipertahankan. Bagi perusahaan, data yang tidak terpakai dalam jumlah besar tetap layak dibersihkan karena juga menghemat biaya dan risiko keamanan.`,

            { h2: 'Langkah yang benar-benar berarti' },
            { w: 'checklist', title: 'Prioritas dari yang paling berpengaruh', items: ['Pakai ponsel dan laptop lebih lama; perbaiki bila bisa.', 'Beli perangkat bekas berkualitas atau rekondisi bila sesuai.', 'Serahkan perangkat lama untuk dipakai ulang atau didaur ulang resmi.', 'Pilih ukuran layar dan perangkat sesuai kebutuhan.', 'Pakai Wi-Fi daripada data seluler untuk unduhan besar bila memungkinkan.', 'Atur kualitas video otomatis; resolusi tertinggi di layar kecil sering tidak terasa bedanya.', 'Bagi perusahaan: rapikan data dan server yang tidak terpakai.'] },
            { callout: 'Fokus pada langkah besar, bukan rasa bersalah atas setiap klik. Rapat video yang mengganti satu perjalanan pesawat jauh lebih menghemat emisi daripada ratusan jam streaming.', kind: 'info', title: 'Perspektif' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Perkiraan pusat IEA untuk satu jam streaming (2019)?', options: ['Sekitar 36 g CO₂', 'Sekitar 3,2 kg CO₂', 'Sekitar 100 kg CO₂'], answer: 0, why: 'Jauh lebih kecil dari angka yang sempat viral.' },
                { q: 'Langkah pribadi yang umumnya paling berpengaruh?', options: ['Menghapus email lama', 'Memakai perangkat lebih lama', 'Mematikan kamera saat rapat'], answer: 1, why: 'Produksi perangkat menyumbang porsi besar.' },
            ] },
        ],
        faq: [
            ['Apakah mematikan kamera saat rapat daring membantu?', 'Mengurangi data, sehingga sedikit mengurangi energi. Dampaknya kecil dibanding memperpanjang umur perangkat, tetapi tidak ada salahnya bila kamera memang tidak diperlukan.'],
            ['Apakah mode gelap menghemat energi?', 'Pada layar OLED, mode gelap bisa menghemat baterai dengan nyata. Pada layar LCD, pengaruhnya kecil.'],
            ['Mengapa angka emisi digital berbeda-beda?', 'Karena bergantung asumsi: perangkat, jaringan, tahun, dan bauran listrik negara. Selalu periksa sumber dan metodologinya.'],
        ],
        sources: [
            ['IEA (2020): The carbon footprint of streaming video, fact-checking the headlines', 'https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines'],
            ['Carbon Brief (2020): Factcheck, what is the carbon footprint of streaming video on Netflix?', 'https://www.carbonbrief.org/factcheck-what-is-the-carbon-footprint-of-streaming-video-on-netflix/'],
            ['Memperpanjang umur perangkat (artikel terkait)', 'https://muchson.web.id/artikel/memperpanjang-umur-laptop-dan-hp-langkah-green-it/'],
        ],
    },

    {
        slug: 'pue-data-center-mengukur-efisiensi-energi',
        title: 'PUE Data Center: Mengukur Efisiensi Energi Pusat Data',
        description: 'Apa itu Power Usage Effectiveness, cara menghitungnya, angka rata-rata industri, cara menurunkan PUE, dan mengapa PUE saja tidak cukup menilai pusat data.',
        date: D, category: C, tags: ['PUE', 'data center', 'efisiensi energi', 'Green IT', 'pusat data'], cta: 'jasa',
        lead: 'Server tidak hanya butuh listrik untuk menghitung. Pendingin, UPS, lampu, dan sistem pendukung juga memakan energi. PUE, singkatan dari Power Usage Effectiveness, adalah metrik yang diperkenalkan The Green Grid untuk mengukur seberapa banyak energi pusat data benar-benar sampai ke peralatan IT.',
        body: [
            { h2: 'Rumus PUE' },
            { code: 'PUE = total energi fasilitas pusat data ÷ energi peralatan IT\n\nContoh: total 1.500 MWh, peralatan IT 1.000 MWh → PUE = 1,5\nArtinya: setiap 1 kWh untuk server, ada 0,5 kWh tambahan untuk pendingin dan lainnya.' },
            { w: 'calc', title: 'Kalkulator PUE', inputs: [{ id: 'tot', label: 'Total energi fasilitas', value: 1500, min: 1, max: 1000000, step: 10, unit: 'MWh/tahun' }, { id: 'it', label: 'Energi peralatan IT', value: 1000, min: 1, max: 1000000, step: 10, unit: 'MWh/tahun' }], outputs: [{ label: 'PUE', expr: 'tot / it', fmt: 'num', big: true, note: 'Nilai ideal teoretis adalah 1,0 (semua energi untuk IT).' }, { label: 'Porsi energi untuk non-IT', expr: '(tot - it) / tot * 100', fmt: 'pct' }, { label: 'DCiE (kebalikan PUE)', expr: 'it / tot * 100', fmt: 'pct' }] },

            { h2: 'Berapa angka yang umum?' },
            `Survei global Uptime Institute 2024 mencatat rata-rata PUE tahunan yang dilaporkan untuk pusat data terbesar responden sekitar <b>1,56</b>, dan angka ini relatif datar beberapa tahun terakhir. Pusat data hyperscale modern milik penyedia cloud besar sering melaporkan angka jauh lebih rendah, mendekati 1,1.`,
            { svg: 'bars', label: 'Perbandingan PUE (ilustrasi)', data: [['Ruang server kantor tanpa desain khusus', 2.0], ['Rata-rata survei Uptime 2024', 1.56], ['Pusat data hyperscale efisien', 1.1]], caption: 'Angka ruang server kantor adalah ilustrasi tipikal; ukur fasilitas Anda sendiri.' },

            { h2: 'Cara menurunkan PUE' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Aliran udara', front: 'Pisahkan lorong panas dan dingin.', backTag: 'Kenapa', back: 'Udara dingin tidak tercampur udara panas buangan server, sehingga pendingin tidak bekerja sia-sia.' },
                { tag: 'Suhu', front: 'Naikkan setelan suhu dalam batas aman.', backTag: 'Kenapa', back: 'Pedoman ASHRAE mengizinkan suhu masuk server yang lebih hangat daripada kebiasaan lama, sehingga pendingin lebih hemat.' },
                { tag: 'Free cooling', front: 'Gunakan udara atau air luar bila memungkinkan.', backTag: 'Kenapa', back: 'Di iklim tropis seperti Indonesia peluangnya lebih kecil, tetapi tetap ada untuk jam-jam tertentu dan teknologi tertentu.' },
                { tag: 'Peralatan', front: 'UPS dan pendingin yang efisien.', backTag: 'Kenapa', back: 'Peralatan lama sering boros energi bahkan saat beban rendah.' },
                { tag: 'Konsolidasi', front: 'Kurangi server yang menganggur.', backTag: 'Kenapa', back: 'Server "zombie" yang tidak dipakai tetap memakan listrik dan pendinginan.' },
            ] },

            { h2: 'Mengapa PUE saja tidak cukup' },
            { ul: ['PUE tidak mengukur <b>sumber listrik</b>: pusat data dengan PUE 1,2 bertenaga batu bara bisa lebih beremisi daripada PUE 1,5 bertenaga energi terbarukan.', 'PUE tidak mengukur <b>efisiensi server</b>: server yang menganggur 90% waktu tetap membuat PUE terlihat baik.', 'PUE tidak mengukur <b>air</b>; untuk itu ada WUE (Water Usage Effectiveness).', 'PUE bisa terlihat memburuk saat server dibuat lebih efisien, karena pembaginya mengecil.'] },
            { callout: 'Gunakan PUE bersama metrik lain: intensitas karbon listrik (gram CO₂ per kWh), WUE, dan utilisasi server.', kind: 'info', title: 'Lengkapi dengan metrik lain' },
            { w: 'quiz', title: 'Latihan', questions: [
                { q: 'Total 2.400 MWh, IT 1.600 MWh. PUE?', options: ['1,5', '0,67', '2,4'], answer: 0, why: '2.400 ÷ 1.600 = 1,5.' },
                { q: 'Mengapa PUE rendah belum tentu berarti emisi rendah?', options: ['PUE tidak mengukur sumber listrik', 'PUE selalu salah', 'PUE mengukur air'], answer: 0, why: 'Emisi bergantung juga pada intensitas karbon listrik.' },
            ] },
        ],
        faq: [
            ['Apakah ruang server kecil di kantor perlu menghitung PUE?', 'Bermanfaat sebagai gambaran. Untuk ruang kecil, sering kali langkah terbaik justru memindahkan beban ke pusat data atau cloud yang lebih efisien.'],
            ['Siapa yang menetapkan standar PUE?', 'PUE dipopulerkan The Green Grid dan kini juga distandarkan dalam ISO/IEC 30134-2.'],
            ['Apakah AI membuat PUE memburuk?', 'AI meningkatkan kepadatan daya per rak dan kebutuhan pendinginan. Pusat data AI modern banyak beralih ke pendinginan cair untuk menjaga efisiensi.'],
        ],
        sources: [
            ['Uptime Institute: Global Data Center Survey 2024', 'https://intelligence.uptimeinstitute.com/resource/uptime-institute-global-data-center-survey-2024'],
            ['The Green Grid (pengembang metrik PUE)', 'https://www.thegreengrid.org/'],
            ['Konsumsi energi AI (artikel terkait)', 'https://muchson.web.id/artikel/konsumsi-energi-ai-seberapa-besar-dan-cara-menyikapinya/'],
        ],
    },

    {
        slug: 'sampah-elektronik-e-waste-cara-mengelola',
        title: 'Sampah Elektronik (E-Waste): Cara Mengelola dengan Benar',
        description: 'Fakta sampah elektronik dunia dari Global E-waste Monitor 2024, bahaya dan nilai bahannya, cara menghapus data, serta pilihan pakai ulang dan daur ulang.',
        date: D, category: C, tags: ['e-waste', 'sampah elektronik', 'daur ulang elektronik', 'Green IT', 'limbah B3'], cta: 'jasa',
        lead: 'Di laci banyak rumah ada ponsel lama, charger yang tidak cocok lagi, dan kabel yang entah untuk apa. Menurut Global E-waste Monitor 2024, dunia menghasilkan 62 juta ton sampah elektronik pada 2022, dan hanya 22,3% yang tercatat dikumpulkan serta didaur ulang dengan benar. Sisanya ditimbun, dibakar, atau diolah secara tidak aman.',
        body: [
            { h2: 'Mengapa e-waste penting' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Bahaya', front: 'Mengandung zat berbahaya.', backTag: 'Contoh', back: 'Timbal, merkuri, kadmium, dan bahan penghambat api bisa mencemari tanah dan air bila dibakar atau dibongkar sembarangan.' },
                { tag: 'Nilai', front: 'Mengandung bahan berharga.', backTag: 'Contoh', back: 'Tembaga, emas, perak, dan logam lain yang bisa dipulihkan, mengurangi kebutuhan menambang baru.' },
                { tag: 'Pertumbuhan', front: 'Tumbuh jauh lebih cepat dari daur ulang.', backTag: 'Contoh', back: 'Laporan UNITAR menyebut sampah elektronik tumbuh sekitar lima kali lebih cepat daripada daur ulang yang terdokumentasi, dan diproyeksikan mencapai 82 juta ton pada 2030.' },
                { tag: 'Data', front: 'Menyimpan data pribadi.', backTag: 'Contoh', back: 'Ponsel dan laptop lama bisa berisi foto, akun, dan dokumen kantor bila tidak dihapus dengan benar.' },
            ] },

            { h2: 'Urutan pilihan: dari yang paling baik' },
            { svg: 'layers', label: 'Hierarki penanganan perangkat lama', items: [{ t: '1. Pakai lebih lama', d: 'Perbaiki: baterai, layar, port, SSD.' }, { t: '2. Pakai ulang', d: 'Jual, wariskan, donasikan ke sekolah atau komunitas.' }, { t: '3. Ambil komponen', d: 'RAM, SSD, dan suku cadang untuk perangkat lain.' }, { t: '4. Daur ulang resmi', d: 'Pengelola limbah elektronik berizin atau program pengumpulan produsen/toko.' }, { t: '5. Hindari', d: 'Tempat sampah biasa, dibakar, dibongkar sembarangan.' }] },

            { h2: 'Hapus data sebelum melepas perangkat' },
            { table: { head: ['Perangkat', 'Langkah'], rows: [['Ponsel Android', 'Cadangkan, keluar dari akun Google (agar perlindungan perangkat tidak mengunci pemilik baru), lalu reset ke setelan pabrik. Perangkat modern dienkripsi sehingga reset menghapus akses ke data.'], ['iPhone', 'Cadangkan, matikan Find My, keluar dari Apple ID, lalu Erase All Content and Settings.'], ['Laptop Windows/Mac', 'Cadangkan, keluar dari akun dan lisensi, gunakan fitur reset/hapus bawaan. Untuk HDD lama, pakai alat penghapus aman atau hancurkan piringannya.'], ['Kartu memori & flashdisk', 'Format penuh, atau hancurkan fisik bila berisi data sensitif.']] } },
            { callout: 'Untuk perangkat kantor yang berisi data pelanggan, ikuti prosedur penghapusan data perusahaan dan minta sertifikat penghancuran data dari mitra pengelola.', kind: 'warn', title: 'Perangkat kantor' },

            { h2: 'Di Indonesia' },
            `Banyak komponen sampah elektronik dikategorikan sebagai limbah B3 (bahan berbahaya dan beracun) dalam regulasi lingkungan, sehingga pengelolaannya harus oleh pihak berizin. Beberapa pemerintah daerah, produsen, dan toko elektronik menyediakan titik pengumpulan. Tanyakan ke dinas lingkungan hidup setempat atau cari program pengumpulan dari merek perangkat Anda.`,
            { w: 'checklist', title: 'Sebelum membuang atau menjual perangkat', items: ['Data sudah dicadangkan.', 'Akun dan fitur pelacak sudah dinonaktifkan.', 'Perangkat sudah di-reset atau datanya dihapus aman.', 'Kartu SIM dan kartu memori sudah dikeluarkan.', 'Dipertimbangkan perbaikan atau pakai ulang lebih dulu.', 'Diserahkan ke pihak berizin bila didaur ulang.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Pilihan terbaik untuk laptop lama yang masih bisa dipakai?', options: ['Langsung didaur ulang', 'Diperbaiki atau dipakai ulang orang lain', 'Dibuang ke tempat sampah'], answer: 1, why: 'Memperpanjang umur pakai paling hemat sumber daya.' },
                { q: 'Sebelum menjual ponsel Android, Anda perlu keluar dari akun Google karena...', options: ['Agar baterai awet', 'Agar perlindungan perangkat tidak mengunci pemilik baru dan data aman', 'Tidak perlu'], answer: 1, why: 'Factory Reset Protection terikat ke akun.' },
            ] },
        ],
        faq: [
            ['Apakah baterai bekas boleh dibuang ke tempat sampah biasa?', 'Sebaiknya tidak. Baterai litium bisa terbakar dan mengandung bahan berbahaya. Kumpulkan dan serahkan ke titik pengumpulan baterai atau limbah elektronik.'],
            ['Apakah menjual ke tukang loak aman?', 'Bisa memperpanjang umur pakai, tetapi pastikan data sudah dihapus. Perangkat yang dibongkar sembarangan untuk diambil logamnya bisa mencemari lingkungan.'],
            ['Apakah charger lama masih berguna?', 'Banyak yang masih bisa dipakai untuk perangkat lain. Standarisasi USB-C membantu mengurangi charger yang menumpuk.'],
        ],
        sources: [
            ['ITU dan UNITAR: The Global E-waste Monitor 2024', 'https://ewastemonitor.info/the-global-e-waste-monitor-2024/'],
            ['UNITAR (2024): Global e-Waste Monitor 2024, electronic waste rising five times faster than documented recycling', 'https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling'],
            ['Google: Factory reset your Android device', 'https://support.google.com/android/answer/6088915'],
        ],
    },

    {
        slug: 'green-software-prinsip-kode-hemat-energi',
        title: 'Green Software: Prinsip Menulis Kode Hemat Energi',
        description: 'Prinsip green software untuk developer: efisiensi energi, sadar karbon, efisiensi perangkat, Software Carbon Intensity (ISO/IEC 21031), dan contoh praktik.',
        date: D, category: C, tags: ['green software', 'software berkelanjutan', 'SCI', 'efisiensi kode', 'developer'], cta: 'jasa',
        lead: 'Developer jarang memikirkan listrik, karena server ada di tempat lain dan tagihannya dibayar orang lain. Padahal keputusan kode, seperti query yang boros, gambar yang terlalu besar, atau server yang selalu menyala, berdampak pada energi dan emisi. Green Software Foundation merumuskan prinsip agar software lebih hemat karbon.',
        body: [
            { h2: 'Tiga cara mengurangi emisi software' },
            { svg: 'flow', label: 'Tiga tuas utama', steps: [{ t: 'Efisiensi energi', d: 'pakai lebih sedikit listrik' }, { t: 'Sadar karbon', d: 'pakai listrik yang lebih bersih' }, { t: 'Efisiensi perangkat', d: 'pakai lebih sedikit perangkat keras' }] },

            { h2: 'Mengukur: Software Carbon Intensity (SCI)' },
            `SCI adalah spesifikasi dari Green Software Foundation yang telah diadopsi menjadi standar <b>ISO/IEC 21031:2024</b>. Ia mengukur emisi <b>per unit kerja</b> yang bermakna, sehingga bisa dibandingkan dari versi ke versi.`,
            { code: 'SCI = ((E × I) + M) per R\n\nE = energi yang dipakai software (kWh)\nI = intensitas karbon listrik (g CO₂e per kWh) di lokasi dan waktu itu\nM = emisi tersemat (embodied) perangkat keras, dialokasikan ke software\nR = unit fungsional: per pengguna, per permintaan API, per transaksi' },
            { w: 'calc', title: 'Hitung SCI sederhana per 1.000 permintaan', inputs: [{ id: 'e', label: 'Energi per 1.000 permintaan', value: 0.05, min: 0.001, max: 10, step: 0.001, unit: 'kWh' }, { id: 'i', label: 'Intensitas karbon listrik', value: 700, min: 20, max: 1000, step: 10, unit: 'g CO₂e/kWh' }, { id: 'm', label: 'Emisi tersemat dialokasikan per 1.000 permintaan', value: 10, min: 0, max: 1000, step: 1, unit: 'g CO₂e' }], outputs: [{ label: 'SCI', expr: 'e * i + m', fmt: 'num', unit: 'g CO₂e per 1.000 permintaan', big: true, note: 'Intensitas karbon listrik sangat berbeda antar negara dan jam. Jaringan yang banyak memakai batu bara bisa beberapa kali lebih tinggi daripada jaringan berbasis energi terbarukan.' }] },

            { h2: 'Praktik di kode dan arsitektur' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: 'Data', front: 'Kirim data seperlunya.', backTag: 'Contoh', back: 'Pagination, pilih kolom yang dibutuhkan, kompres respons (gzip/brotli), dan cache.' },
                { tag: 'Query', front: 'Query yang efisien.', backTag: 'Contoh', back: 'Index yang tepat, hindari N+1, jangan memuat ribuan baris untuk menampilkan satu angka.' },
                { tag: 'Aset', front: 'Gambar dan video yang ringan.', backTag: 'Contoh', back: 'Format modern (WebP/AVIF), ukuran sesuai tampilan, lazy loading.' },
                { tag: 'Server', front: 'Skala sesuai beban.', backTag: 'Contoh', back: 'Autoscaling, matikan lingkungan staging di malam hari, hapus server dan storage yang tidak terpakai.' },
                { tag: 'Waktu', front: 'Geser pekerjaan berat.', backTag: 'Contoh', back: 'Batch job, pelatihan model, atau backup dijadwalkan saat intensitas karbon jaringan rendah.' },
                { tag: 'AI', front: 'Pilih model sesuai tugas.', backTag: 'Contoh', back: 'Model kecil untuk klasifikasi sederhana, cache jawaban yang berulang.' },
            ] },
            { callout: 'Banyak langkah green software sama dengan langkah menghemat biaya cloud dan mempercepat aplikasi. Ini membuat argumennya mudah diterima tim dan manajemen.', kind: 'info', title: 'Hijau sekaligus hemat' },

            { h2: 'Prinsip lain dari Green Software Foundation' },
            { ul: ['<b>Ukur</b>: yang tidak diukur tidak bisa diperbaiki.', '<b>Efisiensi jaringan</b>: kurangi data yang berpindah.', '<b>Demand shaping</b>: sesuaikan perilaku aplikasi dengan ketersediaan energi bersih, misalnya mode hemat saat intensitas tinggi.', '<b>Komitmen iklim</b>: pahami perbedaan klaim kompensasi karbon dan pengurangan emisi nyata.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Huruf R dalam rumus SCI berarti...', options: ['Region server', 'Unit fungsional, misalnya per permintaan', 'RAM'], answer: 1, why: 'SCI adalah intensitas per unit kerja.' },
                { q: 'Menjadwalkan backup saat listrik lebih bersih termasuk prinsip...', options: ['Sadar karbon', 'Efisiensi perangkat', 'Aksesibilitas'], answer: 0, why: 'Memakai listrik pada waktu intensitas karbon rendah.' },
            ] },
        ],
        faq: [
            ['Apakah bahasa pemrograman tertentu lebih hijau?', 'Ada penelitian yang membandingkan energi antar bahasa untuk tugas tertentu, tetapi untuk sebagian besar aplikasi web, desain arsitektur, query, dan data yang dikirim jauh lebih berpengaruh daripada pilihan bahasa.'],
            ['Bagaimana mengukur energi aplikasi saya?', 'Mulai dari perkiraan dengan alat seperti Cloud Carbon Footprint atau dasbor emisi penyedia cloud, lalu ukur lebih detail di server dengan alat pemantau energi bila perlu.'],
            ['Apakah developer perlu sertifikasi khusus?', 'Tidak wajib. Green Software Foundation menyediakan materi belajar gratis tentang prinsip green software.'],
        ],
        sources: [
            ['Green Software Foundation: Software Carbon Intensity (SCI) Specification', 'https://greensoftware.foundation/standards/sci/'],
            ['Green Software Foundation: Principles of Green Software Engineering', 'https://learn.greensoftware.foundation/'],
            ['Index database (artikel terkait)', 'https://muchson.web.id/artikel/index-database-kenapa-query-lambat/'],
        ],
    },
];
