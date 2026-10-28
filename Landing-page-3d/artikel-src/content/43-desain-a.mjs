const D = '2026-10-28';
const C = 'Desain Pembelajaran';

export default [
    {
        slug: 'menulis-tujuan-pembelajaran-terukur-abcd',
        title: 'Menulis Tujuan Pembelajaran yang Terukur (Format ABCD)',
        description: 'Cara menulis tujuan pembelajaran yang jelas dan terukur dengan format ABCD: kata kerja operasional, kondisi, kriteria, contoh, dan generator interaktif.',
        date: D, category: C, tags: ['tujuan pembelajaran', 'ABCD', 'learning objectives', 'desain pembelajaran', 'kata kerja operasional'], cta: 'jasa',
        lead: '"Peserta memahami pemrograman Python." Kalimat ini sering muncul di silabus, tetapi bagaimana kita tahu peserta sudah memahami? Tujuan pembelajaran yang baik menjawab pertanyaan itu sejak awal, sehingga materi, aktivitas, dan penilaian bisa dirancang mengarah ke hal yang sama.',
        body: [
            { h2: 'Masalah dengan kata "memahami"' },
            `Kata seperti <i>memahami, mengetahui, menghayati, mengenal</i> menggambarkan proses di dalam kepala yang tidak bisa diamati. Tujuan yang terukur memakai <b>kata kerja yang terlihat hasilnya</b>: menulis, menghitung, membandingkan, memperbaiki, merancang.`,
            { table: { head: ['Kabur', 'Terukur'], rows: [['Memahami perulangan', 'Menulis perulangan for untuk menjumlahkan isi list'], ['Mengetahui prinsip UX', 'Mengidentifikasi 3 pelanggaran heuristik pada sebuah layar aplikasi'], ['Mengerti retensi pelanggan', 'Menghitung churn rate bulanan dari data pelanggan yang diberikan'], ['Menghayati Green IT', 'Memperkirakan emisi tahunan perangkat kantor memakai kalkulator yang disediakan']] } },

            { h2: 'Format ABCD' },
            { w: 'cards', title: 'Ketuk tiap huruf', items: [
                { tag: 'A', front: 'Audience: siapa pesertanya?', backTag: 'Contoh', back: '"Agen customer service baru", "siswa kelas 8", "peserta bootcamp minggu kedua".' },
                { tag: 'B', front: 'Behavior: apa yang bisa mereka lakukan?', backTag: 'Contoh', back: 'Satu kata kerja yang bisa diamati: menulis, menghitung, mendemonstrasikan, merancang.' },
                { tag: 'C', front: 'Condition: dalam situasi apa?', backTag: 'Contoh', back: '"Diberikan data 12 bulan", "tanpa melihat catatan", "memakai Figma", "dalam simulasi chat".' },
                { tag: 'D', front: 'Degree: seberapa baik?', backTag: 'Contoh', back: '"Dengan 0 error", "dalam 10 menit", "minimal 4 dari 5 kasus benar", "sesuai rubrik tingkat cakap".' },
            ] },
            { code: 'A: Agen customer service baru\nB: menulis balasan untuk keluhan pelanggan\nC: berdasarkan simulasi chat dan panduan nada perusahaan\nD: yang mendapat skor minimal 4 dari 5 pada rubrik empati dan kejelasan\n\n→ "Diberikan simulasi chat keluhan dan panduan nada perusahaan, agen customer\n   service baru mampu menulis balasan yang mendapat skor minimal 4 dari 5\n   pada rubrik empati dan kejelasan."' },

            { h2: 'Pilih kata kerja sesuai tingkat berpikir' },
            `Taksonomi Bloom revisi (Anderson dan Krathwohl, 2001) membantu memilih kata kerja sesuai tingkat kognitif yang ingin dicapai.`,
            { svg: 'layers', label: 'Tingkat kognitif dan contoh kata kerja', items: [{ t: 'Mencipta', d: 'merancang, menyusun, membangun' }, { t: 'Mengevaluasi', d: 'menilai, membandingkan, memutuskan' }, { t: 'Menganalisis', d: 'mengidentifikasi penyebab, membedakan, menguraikan' }, { t: 'Menerapkan', d: 'menghitung, menjalankan, menggunakan' }, { t: 'Memahami', d: 'menjelaskan dengan kata sendiri, memberi contoh' }, { t: 'Mengingat', d: 'menyebutkan, mendaftar, mendefinisikan' }] },
            { callout: 'Tujuan pelatihan kerja sebaiknya didominasi tingkat menerapkan ke atas. Bila semua tujuan berbunyi "menyebutkan" dan "mendefinisikan", peserta mungkin lulus kuis tetapi tetap tidak bisa bekerja.', kind: 'info', title: 'Tips' },

            { h2: 'Generator tujuan pembelajaran' },
            { w: 'builder', title: 'Susun tujuan ABCD', desc: 'Isi tiap bagian; kalimat tujuan tersusun otomatis.', fields: [
                { id: 'c', label: 'Condition (situasi)', value: 'Diberikan data pemakaian 50 akun pelanggan' },
                { id: 'a', label: 'Audience (peserta)', value: 'peserta pelatihan Customer Success' },
                { id: 'b', label: 'Behavior (kata kerja + objek)', value: 'mengidentifikasi akun yang berisiko berhenti berlangganan' },
                { id: 'd', label: 'Degree (kriteria)', value: 'dengan ketepatan minimal 80% dibanding kunci fasilitator' },
            ], template: '{c}, {a} mampu {b} {d}.' },

            { h2: 'Menyelaraskan tujuan, aktivitas, dan penilaian' },
            `John Biggs menyebut prinsip ini <b>constructive alignment</b>: tujuan, aktivitas belajar, dan penilaian harus saling cocok. Bila tujuannya "menulis balasan keluhan", aktivitasnya harus berlatih menulis balasan, dan penilaiannya menilai balasan yang ditulis, bukan kuis pilihan ganda tentang teori komunikasi.`,
            { svg: 'cycle', label: 'Keselarasan', items: ['Tujuan: apa yang bisa dilakukan', 'Aktivitas: berlatih melakukannya', 'Penilaian: membuktikan bisa melakukannya'] },
            { w: 'quiz', title: 'Latihan', questions: [
                { q: 'Mana tujuan yang paling terukur?', options: ['Peserta memahami SQL', 'Peserta mengetahui JOIN', 'Diberikan dua tabel, peserta menulis query LEFT JOIN yang menampilkan pelanggan tanpa pesanan'], answer: 2, why: 'Ada kondisi, perilaku yang terlihat, dan hasil yang bisa diperiksa.' },
                { q: '"Dalam 15 menit tanpa melihat catatan" termasuk bagian...', options: ['Audience', 'Condition', 'Behavior'], answer: 1, why: 'Situasi atau batasan saat perilaku ditunjukkan.' },
                { q: 'Kata kerja tingkat menganalisis?', options: ['Menyebutkan', 'Mengidentifikasi penyebab', 'Mendefinisikan'], answer: 1, why: 'Menguraikan sebab-akibat termasuk analisis.' },
            ] },
        ],
        faq: [
            ['Apakah setiap tujuan wajib memuat keempat unsur ABCD?', 'Audience sering sudah jelas dari konteks kursus. Behavior wajib ada. Condition dan Degree sangat membantu untuk pelatihan kerja dan penilaian yang adil.'],
            ['Berapa jumlah tujuan per sesi yang ideal?', 'Untuk sesi 2-3 jam, biasanya 2-4 tujuan sudah cukup. Terlalu banyak tujuan membuat sesi dangkal.'],
            ['Apa beda tujuan pembelajaran dan capaian pembelajaran?', 'Istilahnya sering dipakai bergantian. Capaian biasanya lebih luas (satu kursus atau program), tujuan lebih rinci (satu pertemuan atau modul).'],
        ],
        sources: [
            ['Krathwohl (2002): A Revision of Bloom\'s Taxonomy, Theory Into Practice', 'https://doi.org/10.1207/s15430421tip4104_2'],
            ['Biggs (1996): Enhancing teaching through constructive alignment, Higher Education', 'https://doi.org/10.1007/BF00138871'],
            ['Merancang kurikulum pelatihan ADDIE dan Bloom (artikel terkait)', 'https://muchson.web.id/artikel/merancang-kurikulum-pelatihan-addie-dan-taksonomi-bloom/'],
        ],
    },

    {
        slug: 'backward-design-merancang-dari-hasil-akhir',
        title: 'Backward Design: Merancang Pembelajaran dari Hasil Akhir',
        description: 'Backward design atau Understanding by Design dengan contoh: tiga tahap Wiggins dan McTighe, bukti pemahaman, tugas kinerja, dan template perencanaan.',
        date: D, category: C, tags: ['backward design', 'Understanding by Design', 'perencanaan pembelajaran', 'kurikulum', 'Wiggins McTighe'], cta: 'jasa',
        lead: 'Cara paling umum menyusun pelajaran adalah dari depan: buka buku, urutkan bab, pikirkan aktivitas, lalu di akhir membuat ujian. Grant Wiggins dan Jay McTighe dalam Understanding by Design (1998) mengusulkan kebalikannya: tentukan dulu hasil akhir dan buktinya, baru rancang aktivitas. Kedengarannya sederhana, tetapi dampaknya besar.',
        body: [
            { h2: 'Dua jebakan perencanaan dari depan' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: 'Jebakan 1', front: 'Berorientasi aktivitas', backTag: 'Gejala', back: 'Kegiatan seru, peserta senang, tetapi tidak jelas kemampuan apa yang terbentuk.' },
                { tag: 'Jebakan 2', front: 'Berorientasi cakupan', backTag: 'Gejala', back: 'Semua bab "selesai dibahas" tepat waktu, tetapi peserta tidak bisa menerapkan apa pun.' },
            ] },

            { h2: 'Tiga tahap backward design' },
            { svg: 'flow', label: 'Urutan perencanaan', steps: [{ t: '1. Hasil yang diinginkan', d: 'apa yang harus dipahami dan bisa dilakukan?' }, { t: '2. Bukti yang dapat diterima', d: 'bagaimana kita tahu mereka sudah bisa?' }, { t: '3. Rencana pengalaman belajar', d: 'aktivitas apa yang membawa ke sana?' }], caption: 'Penilaian dirancang sebelum aktivitas, bukan setelahnya.' },

            { h3: 'Tahap 1: hasil yang diinginkan' },
            `Bedakan tiga lapis: hal yang <b>perlu diketahui sekilas</b>, hal yang <b>penting diketahui dan dilakukan</b>, dan <b>pemahaman yang bertahan lama</b> (enduring understanding), yaitu gagasan besar yang tetap berguna lama setelah detailnya terlupakan. Tambahkan <b>pertanyaan esensial</b> yang memancing diskusi, misalnya "Kapan data cukup untuk mengambil keputusan?"`,
            { h3: 'Tahap 2: bukti' },
            `Utamakan <b>tugas kinerja</b>: peserta menerapkan pemahaman pada situasi realistis. Lengkapi dengan kuis, observasi, dan refleksi.`,
            { h3: 'Tahap 3: rencana pembelajaran' },
            `Baru sekarang memilih materi, urutan, dan aktivitas. Setiap aktivitas harus menjawab: membantu peserta menghasilkan bukti di tahap 2 atau tidak?`,

            { h2: 'Contoh: modul retensi pelanggan 1 hari' },
            { table: { head: ['Tahap', 'Isi'], rows: [['Pemahaman bertahan lama', 'Mempertahankan pelanggan lebih murah daripada mencari pelanggan baru, dan tanda risiko biasanya muncul jauh sebelum pelanggan berhenti.'], ['Pertanyaan esensial', '"Sinyal apa yang menunjukkan pelanggan mulai menjauh?"'], ['Yang bisa dilakukan', 'Menghitung churn, membaca data pemakaian, menyusun rencana tindakan.'], ['Tugas kinerja (bukti)', 'Diberi data 30 akun simulasi, peserta memilih 5 akun berisiko dan menulis rencana tindakan; dinilai dengan rubrik.'], ['Bukti lain', 'Kuis cepat rumus churn, refleksi tertulis di akhir sesi.'], ['Aktivitas', 'Studi kasus, latihan hitung bersama, simulasi panggilan pelanggan, umpan balik antar peserta.']] } },

            { h2: 'Template perencanaan' },
            { w: 'builder', title: 'Template backward design', desc: 'Isi bertahap dari atas ke bawah. Hasilnya bisa disalin ke dokumen rencana.', fields: [
                { id: 'topik', label: 'Topik / modul', value: 'Dasar SQL untuk analis' },
                { id: 'paham', label: 'Pemahaman bertahan lama', long: true, value: 'Data yang rapi di tabel bisa dijawab dengan pertanyaan yang tepat.' },
                { id: 'tanya', label: 'Pertanyaan esensial', value: 'Pertanyaan bisnis apa yang bisa dijawab dari data ini?' },
                { id: 'bisa', label: 'Peserta bisa melakukan', long: true, value: 'Menulis SELECT, WHERE, JOIN, dan GROUP BY untuk menjawab pertanyaan bisnis.' },
                { id: 'bukti', label: 'Tugas kinerja (bukti)', long: true, value: 'Menjawab 5 pertanyaan manajer dari database penjualan simulasi dan menjelaskan query-nya.' },
                { id: 'aktivitas', label: 'Rencana aktivitas', long: true, value: 'Demo singkat, latihan bertingkat, pair programming, review query antar peserta.' },
            ], template: 'MODUL: {topik}\n\nTAHAP 1 - HASIL\nPemahaman bertahan lama: {paham}\nPertanyaan esensial: {tanya}\nPeserta bisa: {bisa}\n\nTAHAP 2 - BUKTI\nTugas kinerja: {bukti}\n\nTAHAP 3 - RENCANA BELAJAR\n{aktivitas}' },
            { callout: 'Bila aktivitas favorit Anda tidak membantu peserta menghasilkan bukti di tahap 2, pertimbangkan untuk memangkasnya, seberapa pun menariknya.', kind: 'warn', title: 'Bagian tersulit' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Tahap kedua backward design adalah...', options: ['Memilih aktivitas', 'Menentukan bukti yang dapat diterima', 'Membuat slide'], answer: 1, why: 'Penilaian dirancang sebelum aktivitas.' },
                { q: 'Ciri pemahaman bertahan lama?', options: ['Detail yang dihafal', 'Gagasan besar yang tetap berguna lama setelah detail terlupakan', 'Daftar istilah'], answer: 1, why: 'Ia mentransfer ke situasi baru.' },
            ] },
        ],
        faq: [
            ['Apa bedanya dengan ADDIE?', 'ADDIE adalah model proses proyek pelatihan (analisis sampai evaluasi). Backward design adalah cara berpikir saat merancang isi dan penilaian. Keduanya bisa dipakai bersamaan.'],
            ['Apakah cocok untuk sekolah dan pelatihan korporat?', 'Ya. Di korporat, "hasil yang diinginkan" sering berupa perubahan kinerja kerja yang bisa diamati.'],
            ['Bagaimana bila kurikulum sudah ditentukan?', 'Tetap bisa: mulai dari capaian yang ditetapkan, lalu rancang bukti dan aktivitas yang benar-benar membuktikan capaian itu.'],
        ],
        sources: [
            ['Vanderbilt Center for Teaching: Understanding by Design', 'https://cft.vanderbilt.edu/understanding-by-design/'],
            ['Wiggins dan McTighe: Understanding by Design, 2nd ed. (ASCD)', 'https://files.ascd.org/staticfiles/ascd/pdf/siteASCD/publications/UbD_WhitePaper0312.pdf'],
            ['Menulis tujuan pembelajaran terukur ABCD (artikel terkait)', 'https://muchson.web.id/artikel/menulis-tujuan-pembelajaran-terukur-abcd/'],
        ],
    },

    {
        slug: 'sembilan-peristiwa-pembelajaran-gagne',
        title: 'Sembilan Peristiwa Pembelajaran Gagné dengan Contoh',
        description: 'Sembilan peristiwa pembelajaran Robert Gagné satu per satu dengan contoh kelas coding dan pelatihan korporat, plus checklist merancang satu pertemuan.',
        date: D, category: C, tags: ['Gagne', 'nine events of instruction', 'desain pembelajaran', 'rencana pelajaran', 'instructional design'], cta: 'jasa',
        lead: 'Robert Gagné memperkenalkan sembilan peristiwa pembelajaran dalam The Conditions of Learning (1965). Model ini bukan resep kaku, melainkan daftar periksa: apakah sesi saya sudah menarik perhatian, mengaktifkan pengetahuan lama, memberi latihan, dan umpan balik? Setelah bertahun-tahun mengajar, saya masih memakainya untuk memeriksa rencana sesi.',
        body: [
            { h2: 'Sembilan peristiwa' },
            { svg: 'timeline', label: 'Urutan sembilan peristiwa dalam satu sesi', events: [['1', 'Menarik perhatian', 'Pertanyaan, masalah nyata, demo mengejutkan.'], ['2', 'Menyampaikan tujuan', 'Apa yang akan bisa dilakukan di akhir sesi.'], ['3', 'Mengingatkan pengetahuan lama', 'Menghubungkan dengan yang sudah diketahui.'], ['4', 'Menyajikan materi', 'Potongan kecil, contoh konkret.'], ['5', 'Memberi bimbingan', 'Contoh terselesaikan, analogi, petunjuk.'], ['6', 'Memancing kinerja', 'Peserta mencoba sendiri.'], ['7', 'Memberi umpan balik', 'Segera dan spesifik.'], ['8', 'Menilai kinerja', 'Bukti pencapaian tujuan.'], ['9', 'Memperkuat retensi dan transfer', 'Latihan di konteks baru, rangkuman.']] },

            { h2: 'Contoh: sesi 90 menit "perulangan di Python"' },
            { table: { head: ['Peristiwa', 'Yang dilakukan', 'Menit'], rows: [['1. Perhatian', 'Tampilkan kode 100 baris print berulang. "Bagaimana kalau 10.000 kali?"', '5'], ['2. Tujuan', '"Di akhir sesi, kalian bisa menulis for loop untuk menjumlahkan dan memfilter data."', '2'], ['3. Pengetahuan lama', 'Kuis singkat list dan variabel', '8'], ['4. Materi', 'Demo for dan range, tiga contoh pendek', '15'], ['5. Bimbingan', 'Worked example: menjumlah nilai, langkah demi langkah', '10'], ['6. Kinerja', 'Latihan berpasangan, 4 soal bertingkat', '25'], ['7. Umpan balik', 'Tes otomatis + keliling memberi petunjuk', '(selama latihan)'], ['8. Penilaian', 'Tiket keluar: 1 soal individu', '10'], ['9. Transfer', 'Soal rumah: data nilai kelas sendiri; preview materi while', '5']] } },

            { h2: 'Contoh: pelatihan korporat "menangani keluhan"' },
            { w: 'cards', title: 'Ketuk tiap peristiwa', items: [
                { tag: '1', front: 'Menarik perhatian', backTag: 'Contoh', back: 'Putar rekaman (anonim) percakapan keluhan yang memburuk dalam 2 menit.' },
                { tag: '3', front: 'Pengetahuan lama', backTag: 'Contoh', back: '"Ceritakan keluhan tersulit yang pernah kamu tangani."' },
                { tag: '5', front: 'Bimbingan', backTag: 'Contoh', back: 'Kerangka 5 langkah dengan contoh kalimat yang baik dan buruk.' },
                { tag: '6-7', front: 'Kinerja dan umpan balik', backTag: 'Contoh', back: 'Role play bertiga: pelanggan, agen, pengamat dengan lembar observasi.' },
                { tag: '9', front: 'Transfer', backTag: 'Contoh', back: 'Setiap peserta memilih satu kebiasaan untuk dipraktikkan minggu depan dan melapor di sesi berikutnya.' },
            ] },

            { h2: 'Cara memakainya dengan luwes' },
            { ul: ['<b>Tidak harus berurutan kaku.</b> Peristiwa 4-7 sering diulang beberapa kali dalam satu sesi untuk potongan materi berbeda.', '<b>Tidak semuanya oleh pengajar.</b> Peserta bisa saling memberi umpan balik, atau alat otomatis memberi umpan balik kode.', '<b>Di e-learning,</b> peristiwa 6 dan 7 sering terlewat. Pastikan ada interaksi yang menuntut peserta melakukan sesuatu, bukan hanya mengklik "lanjut".'] },
            { w: 'checklist', title: 'Periksa rencana sesi Anda', items: ['Ada pembuka yang membuat peserta peduli.', 'Tujuan disampaikan dalam bahasa peserta.', 'Ada aktivitas mengingat pengetahuan sebelumnya.', 'Materi dipecah kecil dengan contoh konkret.', 'Ada contoh terselesaikan sebelum latihan mandiri.', 'Peserta mencoba sendiri minimal sepertiga waktu.', 'Umpan balik cepat dan spesifik.', 'Ada bukti pencapaian tujuan di akhir.', 'Ada jembatan ke pemakaian nyata setelah sesi.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Kuis singkat tentang materi minggu lalu di awal sesi termasuk peristiwa...', options: ['Menarik perhatian', 'Mengingatkan pengetahuan lama', 'Menilai kinerja'], answer: 1, why: 'Mengaktifkan pengetahuan yang sudah ada sebelum materi baru.' },
                { q: 'Peristiwa yang paling sering terlewat di e-learning?', options: ['Menyajikan materi', 'Memancing kinerja dan memberi umpan balik', 'Menyampaikan tujuan'], answer: 1, why: 'Banyak e-learning hanya berisi slide dan video tanpa latihan bermakna.' },
            ] },
        ],
        faq: [
            ['Apakah model Gagné masih relevan?', 'Ya, sebagai kerangka periksa. Banyak temuan penelitian modern, seperti pentingnya latihan mengingat dan umpan balik, sejalan dengan peristiwa-peristiwanya.'],
            ['Apakah harus sembilan semuanya dalam satu sesi?', 'Tidak selalu. Sesi singkat mungkin fokus pada beberapa peristiwa, dan sisanya terjadi di sesi berikutnya atau tugas mandiri.'],
            ['Bagaimana menerapkannya di video pembelajaran?', 'Buka dengan masalah, sebut tujuan, beri contoh, lalu sisipkan pertanyaan atau latihan di tengah atau setelah video.'],
        ],
        sources: [
            ['Northern Illinois University CITL: Gagné\'s Nine Events of Instruction', 'https://www.niu.edu/citl/resources/guides/instructional-guide/gagnes-nine-events-of-instruction.shtml'],
            ['University of Florida CITT: Gagné\'s 9 Events of Instruction', 'https://citt.ufl.edu/resources/the-learning-process/designing-the-learning-experience/gagnes-9-events-of-instruction'],
        ],
    },

    {
        slug: 'teori-beban-kognitif-mengapa-materi-terasa-berat',
        title: 'Teori Beban Kognitif: Mengapa Materi Terasa Berat',
        description: 'Teori beban kognitif untuk guru dan trainer: memori kerja yang terbatas, tiga jenis beban, worked example, split-attention, dan merancang materi yang ringan.',
        date: D, category: C, tags: ['cognitive load theory', 'beban kognitif', 'memori kerja', 'desain materi', 'worked example'], cta: 'jasa',
        lead: 'Pernahkah peserta terlihat mengangguk saat penjelasan, lalu bingung total saat latihan? Sering kali masalahnya bukan kecerdasan, melainkan kapasitas. Teori beban kognitif, dikembangkan John Sweller sejak akhir 1980-an, menjelaskan bahwa memori kerja manusia sangat terbatas, dan desain materi bisa membantu atau justru menghabiskan kapasitas itu.',
        body: [
            { h2: 'Memori kerja: meja kecil, gudang besar' },
            `Bayangkan memori kerja sebagai meja kecil tempat Anda mengolah informasi baru: hanya muat beberapa hal sekaligus. Memori jangka panjang adalah gudang besar berisi pengetahuan yang sudah tersusun (skema). Bagi pemula, semuanya harus diletakkan di meja. Bagi ahli, banyak hal sudah tersimpan rapi di gudang sehingga meja tetap lega.`,
            { svg: 'versus', label: 'Pemula dan ahli melihat kode yang sama', left: { title: 'Pemula', items: ['for, i, range, len, titik dua, indentasi', 'Setiap simbol diingat terpisah', 'Meja cepat penuh'] }, right: { title: 'Ahli', items: ['"Ini loop menjumlah isi list"', 'Satu kesatuan makna (chunk)', 'Kapasitas tersisa untuk berpikir'] } },

            { h2: 'Tiga jenis beban' },
            { w: 'cards', title: 'Ketuk untuk contoh', items: [
                { tag: 'Intrinsik', front: 'Kerumitan alami materi.', backTag: 'Contoh', back: 'JOIN tiga tabel lebih rumit daripada SELECT satu tabel. Dikelola dengan mengurutkan dari sederhana ke rumit.' },
                { tag: 'Ekstrinsik', front: 'Beban dari cara penyajian yang buruk.', backTag: 'Contoh', back: 'Slide penuh teks yang dibacakan, instruksi tersebar di tiga tempat, animasi yang tidak perlu. Ini yang harus dibuang.' },
                { tag: 'Germane', front: 'Usaha yang membangun pemahaman.', backTag: 'Contoh', back: 'Membandingkan dua contoh, menjelaskan alasan langkah, menghubungkan dengan pengetahuan lama. Dalam versi teori yang lebih baru, ini dipandang sebagai bagian dari pengelolaan beban intrinsik.' },
            ] },
            { svg: 'bars', label: 'Ilustrasi: kapasitas memori kerja yang sama, dua desain berbeda', unit: '%', data: [['Desain buruk: ekstrinsik', 50], ['Desain buruk: intrinsik', 50], ['Desain baik: ekstrinsik', 10], ['Desain baik: intrinsik', 50]], caption: 'Ilustrasi konsep, bukan data. Desain yang baik menyisakan kapasitas untuk memahami.' },

            { h2: 'Efek-efek yang terbukti dan penerapannya' },
            { table: { head: ['Efek', 'Temuan', 'Penerapan'], rows: [['<b>Worked example</b>', 'Pemula belajar lebih baik dari mempelajari contoh terselesaikan daripada langsung memecahkan soal.', 'Tunjukkan 1-2 contoh lengkap dengan langkah, baru latihan.'], ['<b>Completion problem</b>', 'Contoh yang sebagian dikosongkan menjembatani contoh dan latihan mandiri.', 'Kode dengan beberapa baris kosong untuk diisi.'], ['<b>Split-attention</b>', 'Memisahkan gambar dan penjelasannya memaksa pembaca menyatukan sendiri.', 'Letakkan label langsung di diagram, bukan di legenda terpisah.'], ['<b>Redundancy</b>', 'Informasi sama dalam dua bentuk sekaligus bisa membebani.', 'Jangan membacakan teks slide kata demi kata.'], ['<b>Expertise reversal</b>', 'Bantuan yang menolong pemula bisa mengganggu peserta mahir.', 'Kurangi bimbingan bertahap (fading) seiring kemampuan naik.']] } },

            { h2: 'Fading: dari contoh ke mandiri' },
            { svg: 'flow', label: 'Mengurangi bantuan bertahap', steps: [{ t: 'Contoh lengkap', d: 'dibaca dan dijelaskan' }, { t: 'Contoh sebagian', d: 'isi bagian kosong' }, { t: 'Soal dengan petunjuk', d: 'kerangka diberikan' }, { t: 'Soal mandiri', d: 'tanpa bantuan' }] },
            { w: 'checklist', title: 'Kurangi beban ekstrinsik di materi Anda', items: ['Satu ide utama per slide atau layar.', 'Label menempel di gambar atau diagram.', 'Instruksi latihan ada di satu tempat, dekat dengan tempat mengerjakan.', 'Tidak membacakan teks yang sudah tertulis.', 'Hapus dekorasi, musik, dan animasi yang tidak membantu memahami.', 'Istilah baru dikenalkan sebelum dipakai dalam penjelasan rumit.', 'Ada contoh terselesaikan sebelum latihan untuk topik baru.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Slide penuh teks yang dibacakan kata per kata menambah beban...', options: ['Intrinsik', 'Ekstrinsik', 'Tidak ada'], answer: 1, why: 'Beban dari cara penyajian, bukan dari materinya.' },
                { q: 'Untuk pemula yang baru mengenal topik, sebaiknya...', options: ['Langsung soal sulit tanpa contoh', 'Contoh terselesaikan lalu latihan bertahap', 'Membaca dokumentasi lengkap'], answer: 1, why: 'Worked example effect.' },
                { q: 'Bantuan langkah demi langkah yang membosankan peserta mahir adalah contoh...', options: ['Expertise reversal effect', 'Split-attention', 'Modality'], answer: 0, why: 'Bantuan harus dikurangi seiring kemampuan naik.' },
            ] },
        ],
        faq: [
            ['Berapa banyak hal yang bisa ditampung memori kerja?', 'Angka terkenal "7 ± 2" dari Miller (1956) kini dianggap terlalu tinggi untuk informasi yang benar-benar baru; banyak peneliti seperti Cowan memperkirakan sekitar 3-5 unit bermakna.'],
            ['Apakah materi harus selalu dibuat mudah?', 'Tidak. Materi yang menantang tetap perlu; yang dikurangi adalah kerumitan yang tidak perlu dari cara penyajian.'],
            ['Apakah teori ini berlaku untuk orang dewasa?', 'Ya. Prinsipnya berlaku untuk siapa pun yang mempelajari hal baru, termasuk karyawan senior yang belajar sistem baru.'],
        ],
        sources: [
            ['Sweller (1988): Cognitive load during problem solving, Cognitive Science', 'https://doi.org/10.1207/s15516709cog1202_4'],
            ['Sweller, van Merriënboer, Paas (2019): Cognitive Architecture and Instructional Design, 20 Years Later', 'https://doi.org/10.1007/s10648-019-09465-5'],
            ['Cowan (2001): The magical number 4 in short-term memory', 'https://doi.org/10.1017/S0140525X01003922'],
        ],
    },

    {
        slug: 'prinsip-multimedia-mayer-untuk-materi-digital',
        title: 'Prinsip Multimedia Mayer untuk Materi Digital',
        description: 'Prinsip multimedia Richard Mayer untuk slide, video, dan e-learning yang mudah dipahami: coherence, signaling, redundancy, contiguity, dan segmenting.',
        date: D, category: C, tags: ['prinsip multimedia', 'Richard Mayer', 'desain slide', 'video pembelajaran', 'e-learning'], cta: 'jasa',
        lead: 'Richard Mayer dan rekannya menguji ratusan variasi materi belajar: dengan atau tanpa gambar, narasi atau teks, musik latar atau tidak. Dari eksperimen itu lahir teori kognitif pembelajaran multimedia dan sekumpulan prinsip praktis. Prinsip-prinsip ini langsung bisa dipakai untuk memperbaiki slide dan video Anda besok.',
        body: [
            { h2: 'Ide dasarnya' },
            `Manusia memproses informasi lewat dua saluran: <b>visual</b> (gambar, teks tertulis) dan <b>verbal-auditori</b> (kata yang didengar). Kapasitas tiap saluran terbatas, dan belajar terjadi ketika kita aktif memilih, menyusun, dan menghubungkan informasi dari kedua saluran dengan pengetahuan lama.`,
            { callout: 'Prinsip multimedia: orang belajar lebih baik dari kata dan gambar yang relevan daripada dari kata saja.', kind: 'info', title: 'Prinsip paling dasar' },

            { h2: 'Prinsip untuk mengurangi pemrosesan yang tidak perlu' },
            { w: 'cards', title: 'Ketuk untuk penerapan', items: [
                { tag: 'Coherence', front: 'Buang yang tidak relevan.', backTag: 'Terapkan', back: 'Hapus foto stok dekoratif, musik latar, dan cerita sampingan yang menarik tetapi tidak membantu tujuan.' },
                { tag: 'Signaling', front: 'Tandai hal yang penting.', backTag: 'Terapkan', back: 'Judul yang jelas, panah, warna penanda, atau kalimat "tiga hal penting adalah...".' },
                { tag: 'Redundancy', front: 'Narasi + gambar lebih baik daripada narasi + gambar + teks yang sama persis.', backTag: 'Terapkan', back: 'Di video, jangan tampilkan seluruh naskah sebagai teks. Kata kunci singkat boleh.' },
                { tag: 'Spatial contiguity', front: 'Letakkan teks dekat gambar yang dijelaskannya.', backTag: 'Terapkan', back: 'Label langsung di bagian diagram, bukan nomor dengan keterangan di bawah.' },
                { tag: 'Temporal contiguity', front: 'Narasi dan gambar ditampilkan bersamaan.', backTag: 'Terapkan', back: 'Saat menyebut "tombol simpan", tombol itu sedang terlihat dan disorot.' },
            ] },

            { h2: 'Prinsip untuk mengelola materi yang rumit' },
            { table: { head: ['Prinsip', 'Arti', 'Contoh'], rows: [['<b>Segmenting</b>', 'Pecah menjadi bagian yang dikendalikan peserta', 'Video 5 bagian dengan tombol lanjut, bukan satu video 40 menit'], ['<b>Pre-training</b>', 'Kenalkan istilah dan komponen sebelum proses', 'Kenalkan bagian-bagian dashboard sebelum alur kerja lengkap'], ['<b>Modality</b>', 'Untuk grafik yang rumit, penjelasan lewat suara lebih baik daripada teks di layar', 'Animasi alur data dengan narasi, bukan paragraf teks']] } },

            { h2: 'Prinsip untuk mendorong keterlibatan' },
            { table: { head: ['Prinsip', 'Arti', 'Contoh'], rows: [['<b>Personalization</b>', 'Gaya bahasa percakapan lebih baik daripada formal kaku', '"Sekarang kita coba..." daripada "Selanjutnya akan dilakukan..."'], ['<b>Voice</b>', 'Suara manusia yang jelas lebih baik daripada suara mesin yang kaku', 'Suara sintetis modern sudah jauh lebih baik; tetap uji kejelasannya'], ['<b>Image</b>', 'Wajah pembicara yang selalu tampil tidak otomatis membantu', 'Tampilkan pengajar di pembuka, lalu fokus ke layar atau diagram']] } },

            { h2: 'Contoh perbaikan satu slide' },
            { w: 'compare', title: 'Sebelum dan sesudah', tabs: [
                { label: 'Sebelum', html: '<b>Judul:</b> "Proses"<br>8 poin teks panjang tentang alur pemesanan, foto stok orang tersenyum di laptop, logo besar di pojok, animasi masuk per poin. Pengajar membacakan semua poin.' },
                { label: 'Sesudah', html: '<b>Judul:</b> "Pesanan melewati 4 status"<br>Diagram 4 kotak berpanah dengan label langsung di kotak (Baru, Dibayar, Dikirim, Selesai). Status yang sedang dijelaskan disorot. Pengajar menjelaskan dengan suara, teks di slide hanya label.' },
            ] },
            { w: 'checklist', title: 'Periksa satu materi Anda dengan prinsip Mayer', items: ['Setiap gambar membantu memahami, bukan dekorasi.', 'Bagian penting ditandai jelas.', 'Teks tidak dibacakan kata per kata.', 'Label dekat dengan yang dijelaskan.', 'Video panjang dipecah menjadi bagian pendek.', 'Istilah kunci dikenalkan lebih dulu.', 'Bahasa percakapan, menyapa peserta.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Menambahkan musik latar yang tidak berhubungan dengan materi melanggar prinsip...', options: ['Coherence', 'Signaling', 'Pre-training'], answer: 0, why: 'Hal yang tidak relevan mengurangi kapasitas untuk memahami.' },
                { q: 'Memecah video 40 menit menjadi lima bagian pendek menerapkan prinsip...', options: ['Segmenting', 'Redundancy', 'Voice'], answer: 0, why: 'Peserta mengendalikan tempo per bagian.' },
            ] },
        ],
        faq: [
            ['Apakah prinsip ini berlaku untuk semua peserta?', 'Efeknya paling besar untuk pemula. Peserta yang sudah mahir kurang terpengaruh, bahkan kadang lebih suka materi padat.'],
            ['Bukankah gambar dekoratif membuat materi lebih menarik?', 'Bisa membuat lebih menarik, tetapi penelitian menunjukkan hal yang menarik namun tidak relevan (seductive details) cenderung mengganggu pemahaman.'],
            ['Apakah teks di video selalu buruk?', 'Tidak. Teks singkat sebagai kata kunci membantu, dan subtitle penting untuk aksesibilitas. Yang perlu dihindari adalah layar penuh teks yang sama dengan narasi.'],
        ],
        sources: [
            ['Mayer (2024): The Past, Present, and Future of the Cognitive Theory of Multimedia Learning, Educational Psychology Review', 'https://doi.org/10.1007/s10648-023-09842-1'],
            ['Teori beban kognitif (artikel terkait)', 'https://muchson.web.id/artikel/teori-beban-kognitif-mengapa-materi-terasa-berat/'],
            ['Desain aksesibel untuk pembelajaran digital (artikel terkait)', 'https://muchson.web.id/artikel/desain-aksesibel-untuk-pembelajaran-digital-wcag/'],
        ],
    },
];
