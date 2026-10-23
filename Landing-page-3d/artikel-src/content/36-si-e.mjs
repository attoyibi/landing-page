const D = '2026-10-23';
const C = 'Sistem Informasi';
const py = String.raw;

const REF_LAUDON = ['Kenneth C. Laudon dan Jane P. Laudon, Management Information Systems: Managing the Digital Firm (Pearson)', ''];
const REF_STAIR = ['Ralph M. Stair dan George W. Reynolds, Principles of Information Systems (Cengage)', ''];
const REF_DAMA = ['DAMA International, DAMA-DMBOK: Data Management Body of Knowledge', 'https://www.dama.org/cpages/body-of-knowledge'];
const REF_ACM = ['ACM Code of Ethics and Professional Conduct (2018)', 'https://www.acm.org/code-of-ethics'];

export default [
    {
        slug: 'etika-dan-hukum-teknologi-informasi-uu-ite-pelindungan-data-pribadi',
        title: 'Etika dan Hukum TI: UU ITE, Pelindungan Data Pribadi, Hak Cipta',
        description: 'Pahami etika profesi dan kerangka hukum bagi pekerja TI di Indonesia: UU ITE, UU Pelindungan Data Pribadi, hak cipta dan lisensi perangkat lunak, serta cara menerapkannya dalam rancangan sistem.',
        date: D, category: C, level: 'Pemula', tags: ['etika TI', 'UU ITE', 'UU PDP', 'hak cipta', 'lisensi perangkat lunak'], cta: 'none',
        prereq: ['keamanan sistem informasi'],
        lead: 'Setiap sistem informasi menyimpan dan memproses data manusia, dan keputusan teknis sehari-hari (apa yang dicatat, berapa lama disimpan, siapa yang boleh melihat) memiliki konsekuensi etis dan hukum. Materi ini memberi peta kerangkanya di Indonesia dan cara menerjemahkannya menjadi keputusan rancangan. Ini bukan nasihat hukum; selalu periksa teks peraturan terbaru dan konsultasikan ahli hukum untuk kasus nyata.',
        body: [
            { objectives: ['membedakan etika, hukum, dan kebijakan organisasi', 'menyebutkan pokok pengaturan UU ITE dan UU Pelindungan Data Pribadi', 'menjelaskan hak subjek data dan kewajiban pengendali data', 'memahami hak cipta dan jenis lisensi perangkat lunak', 'menerapkan privacy by design dalam rancangan sistem'] },
            { h2: 'Etika, hukum, dan kebijakan' },
            { table: { head: ['', 'Sumber', 'Penegakan', 'Contoh'], rows: [['Hukum', 'Peraturan perundang-undangan', 'Negara (sanksi pidana, perdata, administratif)', 'Mengakses sistem tanpa hak'], ['Kebijakan', 'Aturan organisasi', 'Sanksi disiplin', 'Larangan memasang perangkat lunak tak berlisensi'], ['Etika', 'Nilai dan kode profesi', 'Reputasi, kesadaran, organisasi profesi', 'Menolak membangun sistem yang menyesatkan pengguna']] } },
            { callout: 'Sesuatu dapat <b>legal tetapi tidak etis</b> (menjual data perilaku pengguna yang diperoleh dengan persetujuan yang membingungkan), dan sebaliknya sebagian tindakan etis dapat melanggar kebijakan. Profesional TI dituntut menimbang ketiganya.', kind: 'info', title: 'Perbedaan penting' },
            { h2: 'Kode etik profesi' },
            `ACM Code of Ethics menekankan antara lain: berkontribusi pada kesejahteraan masyarakat, menghindari bahaya, jujur, adil dan tidak diskriminatif, menghormati kekayaan intelektual dan privasi, menjaga kerahasiaan, serta bertanggung jawab atas kualitas dan keamanan karya. Di Indonesia, organisasi profesi seperti ID-COMM, APTIKOM, dan perhimpunan lain juga memiliki kode etik masing-masing.`,
            { h2: 'UU ITE' },
            { table: { head: ['Pokok', 'Isi ringkas'], rows: [['Dasar', 'Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik, diubah dengan UU Nomor 19 Tahun 2016, dan perubahan kedua dengan UU Nomor 1 Tahun 2024'], ['Informasi dan dokumen elektronik', 'Diakui sebagai alat bukti hukum yang sah, dengan syarat tertentu'], ['Tanda tangan elektronik dan sertifikasi', 'Tanda tangan elektronik tersertifikasi memiliki kekuatan hukum'], ['Penyelenggara sistem elektronik', 'Wajib menyelenggarakan sistem yang andal, aman, dan bertanggung jawab (diatur lebih rinci dalam PP 71 Tahun 2019)'], ['Perbuatan yang dilarang', 'Antara lain akses ilegal, intersepsi tanpa hak, perusakan sistem, manipulasi dokumen elektronik, dan sebagian bentuk konten tertentu']] } },
            { callout: 'Bagi profesional TI, implikasi praktisnya: <b>jangan mengakses sistem atau data tanpa izin</b>, termasuk "hanya mencoba" menguji kerentanan; dapatkan persetujuan tertulis sebelum uji penetrasi; jaga log dan bukti elektronik dengan baik; dan pastikan sistem transaksi memiliki jejak audit.', kind: 'warn', title: 'Dalam praktik' },
            { h2: 'UU Pelindungan Data Pribadi' },
            `Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) disahkan Oktober 2022 dengan masa transisi dua tahun bagi penyesuaian. Struktur dasarnya mirip GDPR Uni Eropa.`,
            { w: 'cards', title: 'Peran dan hak (ketuk kartu)', items: [{ tag: 'Subjek data', front: 'Orang yang datanya diproses', backTag: 'Hak antara lain', back: 'Memperoleh informasi, mengakses dan memperbaiki data, menarik persetujuan, menghapus atau mengakhiri pemrosesan, menolak keputusan otomatis tertentu, dan menuntut ganti rugi.' }, { tag: 'Pengendali data', front: 'Pihak yang menentukan tujuan dan cara pemrosesan', backTag: 'Kewajiban antara lain', back: 'Memiliki dasar pemrosesan yang sah, memenuhi hak subjek, menjaga keamanan, menunjuk petugas PDP bila kriteria terpenuhi, dan memberi tahu bila terjadi kegagalan pelindungan data.' }, { tag: 'Prosesor data', front: 'Pihak yang memproses atas nama pengendali', backTag: 'Kewajiban antara lain', back: 'Memproses sesuai instruksi pengendali dan menjaga keamanan data.' }] },
            { table: { head: ['Konsep', 'Penjelasan'], rows: [['Data pribadi umum vs spesifik', 'Spesifik mencakup misalnya data kesehatan, biometrik, genetika, catatan kejahatan, data anak, data keuangan pribadi; perlindungannya lebih ketat'], ['Dasar pemrosesan', 'Persetujuan yang sah, pemenuhan perjanjian, kewajiban hukum, kepentingan vital, tugas kepentingan umum, atau kepentingan yang sah'], ['Notifikasi kegagalan pelindungan', 'Pemberitahuan tertulis kepada subjek data dan lembaga dalam jangka waktu singkat (paling lambat 3 × 24 jam) bila terjadi kegagalan yang berdampak'], ['Sanksi', 'Administratif (misalnya denda hingga dua persen pendapatan tahunan), serta ketentuan pidana untuk pelanggaran tertentu']] } },
            { h2: 'Menerjemahkan hukum menjadi rancangan: privacy by design' },
            { w: 'checklist', title: 'Periksa sistem Anda', items: ['Kumpulkan hanya data yang benar-benar diperlukan (minimisasi data).', 'Tujuan pengumpulan jelas dan diberi tahu kepada pengguna dengan bahasa yang mudah dipahami.', 'Persetujuan diminta secara eksplisit dan dapat ditarik semudah memberikannya.', 'Data sensitif dienkripsi saat disimpan dan dikirim; akses dibatasi (least privilege).', 'Ada kebijakan retensi: data dihapus atau dianonimkan setelah tidak diperlukan.', 'Pengguna dapat melihat, memperbaiki, dan menghapus datanya.', 'Ada prosedur tanggap insiden dan pemberitahuan pelanggaran data.', 'Pihak ketiga (penyedia cloud, analitik) diatur lewat perjanjian pemrosesan data.', 'Log akses dicatat dan ditinjau.'] },
            { code: py`import hashlib

# Contoh teknik: pseudonimisasi identitas pada data analitik (hash bergaram), bukan menyimpan NIK mentah
GARAM_RAHASIA = b"simpan-di-pengelola-rahasia-bukan-di-kode"      # contoh; nyatakan di vault pada praktik nyata

def pseudonim(nik: str) -> str:
    return hashlib.sha256(GARAM_RAHASIA + nik.encode()).hexdigest()[:12]

def mask(nik: str) -> str:
    return nik[:4] + "*" * (len(nik) - 8) + nik[-4:]

nik = "3577010101900001"
print("ditampilkan di layar :", mask(nik))
print("identitas untuk analitik:", pseudonim(nik))
print("pengguna sama -> pseudonim sama:", pseudonim(nik) == pseudonim("3577010101900001"))`, lang: 'python', run: true, caption: 'Masking (untuk tampilan) dan pseudonimisasi (untuk analitik) mengurangi paparan data pribadi. Pseudonimisasi tetap merupakan data pribadi menurut banyak regulasi karena dapat dikaitkan kembali; anonimisasi sejati jauh lebih sulit.' },
            { h2: 'Hak cipta dan lisensi perangkat lunak' },
            `Di Indonesia, hak cipta diatur dalam Undang-Undang Nomor 28 Tahun 2014. Program komputer termasuk ciptaan yang dilindungi secara otomatis sejak diwujudkan. Pemakaian bergantung pada <b>lisensi</b> yang diberikan pemegang hak.`,
            { table: { head: ['Jenis lisensi', 'Contoh', 'Pokok ketentuan'], rows: [['Proprietari (komersial)', 'Microsoft Windows, Adobe', 'Dipakai sesuai perjanjian; kode sumber tertutup'], ['Permisif sumber terbuka', 'MIT, BSD, Apache 2.0', 'Bebas dipakai, diubah, dan dikomersialkan; wajib menyertakan pemberitahuan hak cipta'], ['Copyleft', 'GPL, AGPL', 'Karya turunan yang didistribusikan harus dibuka dengan lisensi yang sama'], ['Konten terbuka', 'Creative Commons', 'Beragam syarat: atribusi, nonkomersial, berbagi serupa']] } },
            { callout: 'Menyalin kode dari internet atau mengunduh perangkat lunak bajakan bukan hanya melanggar etika, tetapi dapat menimbulkan risiko hukum dan keamanan. Pastikan <b>lisensi pustaka yang Anda pakai sesuai</b> dengan cara Anda memakainya, terutama untuk produk komersial.', kind: 'warn', title: 'Lisensi dalam proyek' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pihak yang menentukan tujuan dan cara pemrosesan data pribadi disebut...', options: ['Pengendali data', 'Subjek data', 'Prosesor'], answer: 0, why: 'Prosesor hanya memproses atas nama pengendali.' }, { q: 'Prinsip minimisasi data berarti...', options: ['Hanya mengumpulkan data yang diperlukan', 'Mengompres data', 'Menghapus semua log'], answer: 0, why: 'Semakin sedikit data, semakin kecil risikonya.' }, { q: 'Lisensi yang mewajibkan karya turunan dibuka dengan lisensi yang sama?', options: ['Copyleft (misalnya GPL)', 'MIT', 'Proprietari'], answer: 0, why: 'Itulah sifat copyleft.' }] },
            { exercise: [['Aplikasi kampus meminta KTP, alamat, dan nomor ponsel hanya untuk pendaftaran seminar. Prinsip apa yang dilanggar dan bagaimana memperbaikinya?', 'Minimisasi data: hanya kumpulkan nama dan surel (atau yang benar-benar diperlukan), jelaskan tujuan, dan jangan minta data sensitif tanpa alasan sah.'], ['Mengapa uji penetrasi memerlukan izin tertulis?', 'Tanpa izin, akses ke sistem dapat dikategorikan akses ilegal menurut UU ITE.'], ['Sebutkan dua hak subjek data dan bagaimana sistem memenuhinya.', 'Hak akses dan hapus: sediakan halaman profil untuk melihat data dan fitur permintaan penghapusan dengan alur verifikasi.'], ['Anda memakai pustaka berlisensi GPL dalam produk komersial tertutup. Apa risikonya?', 'Kewajiban membuka kode karya turunan yang didistribusikan; lakukan telaah lisensi atau pilih pustaka berlisensi permisif.']] },
            { summary: ['Etika, hukum, dan kebijakan saling melengkapi; legal tidak selalu etis.', 'UU ITE: dokumen elektronik sebagai bukti, tanda tangan elektronik, dan perbuatan terlarang.', 'UU PDP: hak subjek data, kewajiban pengendali dan prosesor, notifikasi kegagalan, sanksi.', 'Privacy by design: minimisasi, tujuan jelas, persetujuan, keamanan, retensi.', 'Hormati hak cipta dan patuhi lisensi.'] },
        ],
        faq: [['Apakah UU PDP berlaku bagi aplikasi kecil?', 'Pada prinsipnya berlaku bagi setiap pihak yang memproses data pribadi orang di Indonesia, tanpa memandang ukuran, meski kewajiban tertentu (misalnya petugas PDP) bergantung pada kriteria.'], ['Apa itu GDPR?', 'Regulasi Perlindungan Data Umum Uni Eropa (2016/679) yang berlaku juga bagi organisasi di luar UE yang melayani warga UE; menjadi rujukan banyak undang-undang lain, termasuk UU PDP.'], ['Di mana membaca teks resminya?', 'Pada basis data peraturan pemerintah (JDIH) dan situs Kementerian Komunikasi dan Digital; periksa selalu versi terbaru.']],
        sources: [REF_ACM, ['Peraturan.bpk.go.id: Basis data peraturan perundang-undangan (UU ITE, UU PDP, UU Hak Cipta)', 'https://peraturan.bpk.go.id/'], ['Regulation (EU) 2016/679 (GDPR)', 'https://eur-lex.europa.eu/eli/reg/2016/679/oj'], ['Choose a License: panduan memilih lisensi sumber terbuka', 'https://choosealicense.com/']],
    },

    {
        slug: 'adopsi-teknologi-dan-manajemen-perubahan-tam-kotter-dan-adkar',
        title: 'Adopsi Teknologi dan Manajemen Perubahan: TAM, Kotter, ADKAR',
        description: 'Mengapa sistem yang baik tidak dipakai? Pelajari Technology Acceptance Model, difusi inovasi Rogers, DeLone-McLean, dan manajemen perubahan dengan Kotter dan ADKAR untuk memastikan adopsi sistem informasi.',
        date: D, category: C, level: 'Menengah', tags: ['TAM', 'adopsi teknologi', 'manajemen perubahan', 'Kotter', 'ADKAR'], cta: 'none',
        prereq: ['konsep SI', 'SDLC'],
        lead: 'Banyak sistem informasi yang secara teknis berhasil, tetapi gagal secara organisasi: pengguna tetap memakai spreadsheet lama, menolak mengisi data, atau mencari jalan memutar. Ilmu sistem informasi punya teori matang tentang mengapa orang mau atau enggan memakai teknologi, dan apa yang dapat dilakukan manajemen.',
        body: [
            { objectives: ['menjelaskan Technology Acceptance Model (TAM) dan dua variabel utamanya', 'menjelaskan difusi inovasi dan kategori adopter', 'menjelaskan model kesuksesan SI DeLone dan McLean', 'menerapkan langkah Kotter dan model ADKAR dalam rencana perubahan', 'menyusun strategi adopsi: pelatihan, juara pengguna, dan umpan balik'] },
            { h2: 'Technology Acceptance Model (TAM)' },
            `Fred Davis (1989) mengusulkan bahwa niat dan perilaku memakai teknologi terutama dijelaskan oleh dua keyakinan: <b>persepsi kegunaan</b> (apakah ini membantu pekerjaan saya?) dan <b>persepsi kemudahan penggunaan</b> (apakah ini mudah dipakai?).`,
            { svg: 'flow', label: 'Model TAM', steps: [{ t: 'Variabel eksternal', d: 'desain sistem, pelatihan, dukungan, norma' }, { t: 'Persepsi kegunaan dan kemudahan', d: 'keyakinan pengguna' }, { t: 'Sikap dan niat memakai', d: 'kecenderungan memakai' }, { t: 'Pemakaian nyata', d: 'perilaku' }] },
            { callout: 'Implikasi praktis: <b>kemudahan memengaruhi kegunaan</b> yang dirasakan. Antarmuka yang membingungkan membuat pengguna menilai sistem kurang berguna. Dan sistem yang berguna dapat "dimaafkan" bila agak sulit, sedangkan sistem yang mudah tetapi tak berguna tetap ditinggalkan.', kind: 'info', title: 'Pesan inti' },
            { w: 'compare', title: 'Dari TAM ke UTAUT', tabs: [{ label: 'TAM', html: 'Dua variabel utama: persepsi kegunaan dan persepsi kemudahan. Sederhana dan banyak diuji.' }, { label: 'UTAUT (Venkatesh dkk., 2003)', html: 'Menggabungkan beberapa teori. Penentu niat: <b>ekspektasi kinerja</b>, <b>ekspektasi usaha</b>, <b>pengaruh sosial</b>; penentu pemakaian: niat dan <b>kondisi yang memfasilitasi</b>. Dimoderasi usia, gender, pengalaman, dan kesukarelaan.' }] },
            { h2: 'Difusi inovasi' },
            `Everett Rogers menggambarkan bagaimana inovasi menyebar dalam sistem sosial. Pengadopsi dibagi menurut kecepatan menerima: inovator (sekitar 2,5%), adopter awal (13,5%), mayoritas awal (34%), mayoritas akhir (34%), dan laggard (16%).`,
            { code: py`kategori = [("Inovator", 2.5), ("Adopter awal", 13.5), ("Mayoritas awal", 34), ("Mayoritas akhir", 34), ("Laggard", 16)]
total_pengguna = 800                      # misal: 800 staf yang akan memakai sistem
kumulatif = 0
for nama, persen in kategori:
    n = round(total_pengguna * persen / 100)
    kumulatif += persen
    print(f"{nama:<16}{persen:>5}%  ~{n:>3} orang   kumulatif {kumulatif:>5.1f}%")
print("\nTitik kritis: setelah adopter awal, 'jurang' menuju mayoritas awal (~16% kumulatif).")`, lang: 'python', run: true, caption: 'Strategi pelatihan sebaiknya membedakan kelompok: inovator dan adopter awal dijadikan juara pengguna; mayoritas butuh bukti manfaat dan dukungan; laggard butuh pendampingan lebih.' },
            { h2: 'Mengukur kesuksesan sistem informasi' },
            `Model DeLone dan McLean (1992, diperbarui 2003) menyatakan bahwa kesuksesan dipengaruhi: <b>kualitas sistem</b>, <b>kualitas informasi</b>, dan <b>kualitas layanan</b>, yang memengaruhi <b>penggunaan dan kepuasan pengguna</b>, yang menghasilkan <b>manfaat bersih</b> bagi individu dan organisasi.`,
            { table: { head: ['Dimensi', 'Ukuran contoh'], rows: [['Kualitas sistem', 'Kecepatan, keandalan, kemudahan penggunaan'], ['Kualitas informasi', 'Akurasi, kelengkapan, ketepatan waktu'], ['Kualitas layanan', 'Responsivitas dukungan, pelatihan'], ['Penggunaan dan kepuasan', 'Frekuensi pemakaian, survei kepuasan, SUS'], ['Manfaat bersih', 'Waktu yang dihemat, kesalahan berkurang, biaya turun']] } },
            { h2: 'Mengelola perubahan' },
            `Penerapan sistem baru adalah perubahan cara kerja manusia. Dua kerangka populer membantu merencanakannya.`,
            { h3: 'Delapan langkah Kotter' },
            { ol: ['Ciptakan rasa mendesak (mengapa harus berubah sekarang?)', 'Bentuk koalisi pemandu yang berpengaruh', 'Rumuskan visi dan strategi perubahan', 'Komunikasikan visi secara luas dan berulang', 'Singkirkan hambatan dan beri kewenangan bertindak', 'Rencanakan dan rayakan kemenangan jangka pendek', 'Konsolidasikan hasil dan teruskan perubahan', 'Tanamkan pendekatan baru dalam budaya'] },
            { h3: 'ADKAR (Prosci): perubahan pada tingkat individu' },
            { svg: 'flow', label: 'Lima tahap ADKAR', steps: [{ t: 'Awareness', d: 'sadar mengapa perubahan diperlukan' }, { t: 'Desire', d: 'ingin ikut mendukung' }, { t: 'Knowledge', d: 'tahu cara berubah' }, { t: 'Ability', d: 'mampu menerapkan dalam praktik' }, { t: 'Reinforcement', d: 'penguatan agar bertahan' }], caption: 'Diagnosis: tahap pertama yang "macet" menunjukkan tindakan yang diperlukan. Pengguna yang sadar dan mau tetapi tidak tahu caranya butuh pelatihan, bukan kampanye lagi.' },
            { h2: 'Rencana adopsi yang realistis' },
            { w: 'checklist', title: 'Periksa rencana adopsi sistem baru', items: ['Manfaat bagi pengguna (bukan hanya manajemen) dijelaskan dengan bahasa mereka.', 'Sponsor eksekutif terlihat mendukung, bukan hanya menyetujui anggaran.', 'Perwakilan pengguna dilibatkan sejak analisis kebutuhan dan uji.', 'Pelatihan berbasis tugas nyata, tersedia ulang, dan dilengkapi panduan singkat.', 'Ada juara pengguna di setiap unit untuk membantu rekan.', 'Jalur dukungan cepat selama masa awal (hypercare).', 'Ukuran adopsi dipantau (pemakaian, tiket bantuan, kepuasan) dan ditindaklanjuti.', 'Sistem lama dipensiunkan pada tanggal jelas agar tidak ada dua cara kerja berjalan selamanya.'] },
            { callout: 'Resistensi sering kali adalah <b>informasi</b>, bukan sekadar hambatan. Pengguna yang menolak mungkin menunjukkan fitur yang hilang, alur yang tidak sesuai kenyataan, atau beban kerja bertambah tanpa imbalan. Dengarkan dulu sebelum memaksa.', kind: 'good', title: 'Perspektif' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Dua variabel utama TAM?', options: ['Persepsi kegunaan dan persepsi kemudahan penggunaan', 'Harga dan merek', 'Kecepatan dan memori'], answer: 0, why: 'Menjelaskan niat memakai teknologi.' }, { q: 'Kelompok adopter terbesar (bersama mayoritas akhir) menurut Rogers?', options: ['Mayoritas awal (34%)', 'Inovator (2,5%)', 'Laggard (16%)'], answer: 0, why: 'Mayoritas awal dan akhir masing-masing sekitar 34 persen.' }, { q: 'Dalam ADKAR, pengguna sadar dan mau tetapi tidak tahu caranya. Tahap yang perlu dikuatkan?', options: ['Knowledge (pelatihan)', 'Awareness', 'Desire'], answer: 0, why: 'Masalahnya ada pada pengetahuan.' }] },
            { exercise: [['Sistem presensi baru ditolak guru karena dianggap menambah pekerjaan. Variabel TAM mana yang tampaknya bermasalah?', 'Persepsi kegunaan (tak ada manfaat bagi guru) dan/atau kemudahan; selidiki lewat wawancara.'], ['Susun tiga tindakan untuk "kemenangan jangka pendek" pada penerapan sistem akademik baru.', 'Contoh: modul pengumuman beroperasi cepat, KRS satu jurusan sukses tanpa gangguan, waktu pembuatan laporan turun dari sehari menjadi menit.'], ['Mengapa pelatihan sekali di awal tidak cukup?', 'Pengetahuan memudar, pengguna baru datang, dan pembaruan sistem terjadi; perlu pelatihan berulang dan bahan bantu.'], ['Apa risiko menjalankan sistem lama dan baru bersamaan tanpa batas waktu?', 'Data ganda, beban kerja ganda, dan alasan bagi pengguna untuk kembali ke cara lama.']] },
            { summary: ['TAM: persepsi kegunaan dan kemudahan menentukan niat memakai.', 'Difusi inovasi: lima kategori adopter; strategi berbeda untuk tiap kelompok.', 'DeLone–McLean: kualitas sistem, informasi, layanan → pemakaian dan kepuasan → manfaat.', 'Kotter untuk perubahan organisasi, ADKAR untuk perubahan individu.', 'Adopsi direncanakan sejak awal proyek, bukan setelah peluncuran.'] },
        ],
        faq: [['Apakah TAM cukup menjelaskan adopsi di organisasi?', 'TAM menjelaskan perilaku individu. Pada organisasi, faktor sosial, kebijakan wajib, dan dukungan manajemen penting, yang dicakup UTAUT dan model lain.'], ['Bagaimana mengukur adopsi?', 'Data pemakaian (login, fitur yang dipakai), survei kepuasan, jumlah tiket bantuan, dan indikator hasil bisnis.'], ['Mengapa proyek TI sering gagal pada tahap adopsi?', 'Karena perubahan dianggap pekerjaan teknis. Padahal sebagian besar tantangannya adalah manusia: kebiasaan, insentif, dan kepercayaan.']],
        sources: [['Fred D. Davis, Perceived Usefulness, Perceived Ease of Use, and User Acceptance of Information Technology, MIS Quarterly 13(3), 1989', 'https://doi.org/10.2307/249008'], ['Venkatesh, Morris, Davis, Davis, User Acceptance of Information Technology: Toward a Unified View, MIS Quarterly 27(3), 2003', 'https://doi.org/10.2307/30036540'], ['John P. Kotter, Leading Change (Harvard Business Review Press, 1996)', ''], ['Everett Rogers, Diffusion of Innovations (Free Press, edisi ke-5, 2003)', '']],
    },

    {
        slug: 'e-commerce-dan-model-bisnis-digital-funnel-metrik-dan-pembayaran',
        title: 'E-Commerce dan Model Bisnis Digital: Funnel, Metrik, Pembayaran',
        description: 'Pelajari model bisnis e-commerce (B2C, B2B, C2C, marketplace), funnel konversi, metrik penting (CAC, LTV, AOV), metode pembayaran seperti QRIS, dan hitung unit economics dengan contoh.',
        date: D, category: C, level: 'Pemula', tags: ['e-commerce', 'model bisnis', 'funnel konversi', 'CAC LTV', 'QRIS'], cta: 'none',
        prereq: ['jenis-jenis SI'],
        lead: 'E-commerce bukan sekadar toko online; ia adalah sistem informasi yang menghubungkan katalog, pesanan, pembayaran, logistik, dan layanan pelanggan. Memahami model bisnisnya, dan metrik yang menunjukkan sehat tidaknya, membantu merancang sistem yang benar-benar mendukung bisnis.',
        body: [
            { objectives: ['membedakan model e-commerce B2C, B2B, C2C, D2C, dan marketplace', 'menggambarkan alur pesanan dan komponen sistem e-commerce', 'menganalisis funnel konversi dan menemukan titik kebocoran', 'menghitung AOV, CAC, LTV, dan margin kontribusi', 'menjelaskan metode pembayaran digital umum di Indonesia'] },
            { h2: 'Model e-commerce' },
            { table: { head: ['Model', 'Pelaku', 'Contoh'], rows: [['B2C', 'Bisnis ke konsumen', 'Toko brand di situs sendiri'], ['B2B', 'Bisnis ke bisnis', 'Pasokan bahan baku antarperusahaan'], ['C2C', 'Konsumen ke konsumen', 'Jual-beli barang bekas lewat platform'], ['D2C', 'Produsen langsung ke konsumen', 'Merek lokal menjual tanpa perantara'], ['Marketplace', 'Platform mempertemukan banyak penjual dan pembeli', 'Tokopedia, Shopee, Bukalapak'], ['Langganan', 'Pembayaran berulang untuk akses', 'Layanan perangkat lunak (SaaS), kotak langganan']] } },
            { h2: 'Anatomi sistem e-commerce' },
            { svg: 'diagram', w: 680, h: 260, label: 'Komponen e-commerce', nodes: [{ id: 'f', x: 90, y: 130, shape: 'rect', w: 120, h: 50, t: 'Etalase (web/aplikasi)' }, { id: 'k', x: 270, y: 50, shape: 'rect', w: 120, h: 44, t: 'Katalog dan stok' }, { id: 'o', x: 270, y: 130, shape: 'rect', w: 120, h: 44, t: 'Pesanan' }, { id: 'p', x: 270, y: 210, shape: 'rect', w: 120, h: 44, t: 'Pembayaran' }, { id: 'l', x: 470, y: 130, shape: 'rect', w: 120, h: 44, t: 'Logistik' }, { id: 'c', x: 620, y: 130, shape: 'rect', w: 100, h: 50, t: 'Layanan pelanggan' }], edges: [{ from: 'f', to: 'k' }, { from: 'f', to: 'o' }, { from: 'f', to: 'p' }, { from: 'o', to: 'l' }, { from: 'l', to: 'c' }, { from: 'p', to: 'o' }], caption: 'Setiap kotak biasanya satu modul atau layanan; data pesanan menjadi pusat yang menghubungkan semuanya.' },
            { h2: 'Funnel konversi' },
            `Funnel menggambarkan perjalanan pelanggan dan di mana mereka berguguran. Setiap tahap adalah peluang perbaikan sistem.`,
            { code: py`funnel = [("Kunjungan situs", 10000), ("Melihat produk", 4200), ("Menambah ke keranjang", 900), ("Memulai checkout", 520), ("Membayar", 310)]
sebelumnya = None
print(f"{'tahap':<24}{'jumlah':>8}{'dari tahap sebelumnya':>24}{'dari awal':>11}")
for nama, n in funnel:
    prop = "" if sebelumnya is None else f"{n / sebelumnya * 100:.1f}%"
    print(f"{nama:<24}{n:>8}{prop:>24}{n / funnel[0][1] * 100:>10.1f}%")
    sebelumnya = n

# tahap dengan kebocoran terbesar (relatif)
bocor = max(range(1, len(funnel)), key=lambda i: 1 - funnel[i][1] / funnel[i-1][1])
print("\nkebocoran relatif terbesar:", funnel[bocor-1][0], "->", funnel[bocor][0])`, lang: 'python', run: true, caption: 'Dari kunjungan ke keranjang hanya 9%: perbaikan halaman produk dan harga mungkin lebih berdampak daripada menambah lalu lintas.' },
            { h2: 'Metrik unit economics' },
            { table: { head: ['Metrik', 'Rumus', 'Arti'], rows: [['Conversion rate', 'Pembeli / pengunjung', 'Seberapa efektif situs mengubah kunjungan menjadi pembelian'], ['AOV (average order value)', 'Total pendapatan / jumlah pesanan', 'Rata-rata nilai satu pesanan'], ['CAC (customer acquisition cost)', 'Biaya pemasaran / pelanggan baru', 'Biaya mendapatkan satu pelanggan'], ['LTV (lifetime value)', 'Margin per pesanan × pesanan per tahun × lama berlangganan', 'Laba total dari satu pelanggan selama hubungan'], ['Rasio LTV : CAC', 'LTV / CAC', 'Aturan praktis: di atas 3 dianggap sehat']] } },
            { w: 'calc', title: 'Hitung unit economics toko online', desc: 'Ubah angka untuk melihat bagaimana CAC dan LTV memengaruhi kesehatan bisnis.', inputs: [{ id: 'aov', label: 'Nilai rata-rata pesanan (AOV)', value: 130, min: 20, max: 1000, step: 5, unit: 'ribu Rp' }, { id: 'm', label: 'Margin kotor', value: 30, min: 5, max: 80, step: 1, unit: '%' }, { id: 'f', label: 'Pesanan per pelanggan per tahun', value: 3, min: 1, max: 24, step: 1, unit: 'kali' }, { id: 't', label: 'Lama pelanggan bertahan', value: 2, min: 1, max: 8, step: 1, unit: 'tahun' }, { id: 'cac', label: 'Biaya akuisisi pelanggan (CAC)', value: 58, min: 5, max: 500, step: 1, unit: 'ribu Rp' }], outputs: [{ label: 'LTV (laba kotor seumur hubungan)', expr: 'aov * (m / 100) * f * t', fmt: 'num', unit: 'ribu Rp', big: true }, { label: 'Rasio LTV : CAC', expr: '(aov * (m / 100) * f * t) / cac', fmt: 'num' }, { label: 'Pesanan pertama menutup CAC?', expr: 'aov * (m / 100) >= cac ? 1 : 0', fmt: 'num' }] },
            { h2: 'Pembayaran digital' },
            { table: { head: ['Metode', 'Cara kerja', 'Catatan'], rows: [['QRIS', 'Standar kode QR pembayaran nasional dari Bank Indonesia; satu kode untuk berbagai aplikasi dompet dan bank', 'Biaya merchant rendah untuk usaha mikro; cocok untuk toko fisik dan online'], ['Transfer bank dan virtual account', 'Nomor rekening unik per pesanan; pembayaran terverifikasi otomatis', 'Populer; perlu batas waktu pembayaran'], ['Dompet digital', 'Saldo dalam aplikasi (GoPay, OVO, DANA, dan lainnya)', 'Pengalaman cepat, perlu integrasi payment gateway'], ['Kartu dan cicilan', 'Kartu debit/kredit; pay later', 'Biaya lebih tinggi; kepatuhan keamanan data kartu (PCI DSS)'], ['COD (bayar di tempat)', 'Pembayaran saat barang tiba', 'Risiko penolakan paket dan biaya retur']] } },
            { callout: 'Gunakan <b>payment gateway</b> berizin agar data kartu tidak melewati server Anda. Itu mengurangi beban kepatuhan dan risiko keamanan secara signifikan. Jangan pernah menyimpan nomor kartu dan kode CVV sendiri.', kind: 'warn', title: 'Keamanan pembayaran' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Model yang mempertemukan banyak penjual dan pembeli?', options: ['Marketplace', 'D2C', 'B2B saja'], answer: 0, why: 'Platform sebagai perantara.' }, { q: 'Rasio LTV:CAC yang umumnya dianggap sehat?', options: ['Di atas 3', 'Di bawah 1', 'Tepat 0'], answer: 0, why: 'Laba seumur pelanggan jauh melebihi biaya mendapatkannya.' }, { q: 'Tahap funnel dengan penurunan terbesar menunjukkan...', options: ['Titik perbaikan paling potensial', 'Tahap yang harus dihapus', 'Kesalahan data'], answer: 0, why: 'Di sana banyak calon pelanggan hilang.' }] },
            { exercise: [['Funnel: 5.000 pengunjung, 250 menambah keranjang, 100 membayar. Berapa conversion rate?', '100 / 5.000 = 2%.'], ['Jika AOV Rp200.000, margin 25%, dan CAC Rp40.000, apakah pesanan pertama menutup CAC?', 'Margin per pesanan = Rp50.000 > Rp40.000: ya, dengan sisa Rp10.000.'], ['Sebutkan tiga cara menurunkan tingkat pengabaian keranjang.', 'Tampilkan biaya kirim lebih awal, sederhanakan checkout, tambah metode pembayaran, kirim pengingat keranjang.'], ['Mengapa data pesanan menjadi pusat sistem e-commerce?', 'Katalog, stok, pembayaran, logistik, dan layanan pelanggan semuanya bergantung pada status dan isi pesanan.']] },
            { summary: ['Model: B2C, B2B, C2C, D2C, marketplace, langganan.', 'Sistem e-commerce: etalase, katalog, pesanan, pembayaran, logistik, layanan pelanggan.', 'Funnel menunjukkan kebocoran; unit economics (AOV, CAC, LTV) menunjukkan kesehatan bisnis.', 'Pembayaran digital (QRIS, VA, dompet) lewat gateway berizin.'] },
        ],
        faq: [['Apa itu omnichannel?', 'Pengalaman pelanggan yang menyatu antara toko fisik, web, aplikasi, dan media sosial, dengan data pelanggan dan stok terpadu.'], ['Bagaimana memilih platform: bangun sendiri atau pakai SaaS?', 'Untuk awal, platform siap pakai (misalnya Shopify, WooCommerce) menghemat waktu. Bangun sendiri bila kebutuhan khas atau skala besar.'], ['Apa itu SEO bagi e-commerce?', 'Optimasi agar halaman produk dan kategori muncul di mesin pencari: judul jelas, deskripsi unik, data terstruktur, kecepatan, dan tautan internal.']],
        sources: [REF_LAUDON, ['Bank Indonesia: Quick Response Code Indonesian Standard (QRIS)', 'https://www.bi.go.id/id/fungsi-utama/sistem-pembayaran/qris/default.aspx'], ['Kenneth Laudon dan Carol Traver, E-commerce: Business, Technology, Society (Pearson)', ''], ['David Skok: SaaS Metrics 2.0 (CAC, LTV)', 'https://www.forentrepreneurs.com/saas-metrics-2/']],
    },

    {
        slug: 'manajemen-data-kualitas-data-dan-tata-kelola-data',
        title: 'Manajemen Data: Kualitas Data dan Tata Kelola Data',
        description: 'Pelajari manajemen data: dimensi kualitas data, profiling data dengan Python, master data, tata kelola data (pemilik, steward, kebijakan), katalog data, dan siklus hidup data dalam organisasi.',
        date: D, category: C, level: 'Menengah', tags: ['kualitas data', 'tata kelola data', 'master data', 'data profiling', 'DAMA'], cta: 'none',
        prereq: ['ERD dan normalisasi', 'SQL dasar'],
        lead: 'Organisasi sering mengatakan "kami kaya data" padahal data itu tersebar, tidak konsisten, dan tidak dipercaya. Sistem pintar dan dasbor sebagus apa pun tidak menolong bila data dasarnya salah. Manajemen data memperlakukan data sebagai aset yang dirawat sepanjang siklus hidupnya.',
        body: [
            { objectives: ['menyebut dimensi kualitas data dan mengukurnya', 'melakukan profiling data sederhana dengan Python', 'menjelaskan master data dan reference data', 'menjelaskan peran tata kelola data: pemilik, steward, kebijakan', 'merancang kontrol kualitas data pada titik masuk dan pada pipeline'] },
            { h2: 'Mengapa kualitas data penting' },
            { ul: ['Keputusan salah akibat laporan yang salah ("garbage in, garbage out").', 'Pelanggan yang sama muncul sebagai tiga record, sehingga surat ganda dan layanan terputus.', 'Waktu analis habis untuk membersihkan data, bukan menganalisis.', 'Risiko kepatuhan dan audit bila data tidak dapat ditelusuri atau tidak akurat.'] },
            { h2: 'Dimensi kualitas data' },
            { table: { head: ['Dimensi', 'Pertanyaan', 'Ukuran', 'Contoh cacat'], rows: [['Kelengkapan', 'Apakah nilai wajib terisi?', '% nilai tidak kosong', 'Nomor telepon kosong'], ['Keunikan', 'Apakah ada duplikat?', '% record unik', 'Pelanggan ganda'], ['Validitas', 'Apakah sesuai format dan aturan?', '% lolos aturan', 'Surel tanpa @'], ['Akurasi', 'Apakah mencerminkan kenyataan?', '% cocok dengan sumber tepercaya', 'Alamat salah'], ['Konsistensi', 'Apakah sama di semua sistem?', '% cocok antar sistem', 'Status berbeda di dua sistem'], ['Ketepatan waktu', 'Apakah cukup baru?', 'Umur data', 'Stok semalam padahal butuh real-time']] } },
            { h2: 'Profiling data dengan Python' },
            { code: py`import csv, io, re, collections

data = """id,nama,email,telepon,kota,tgl_daftar
1,Ani Lestari,ani@contoh.id,081234567890,Madiun,2025-03-10
2,Budi Santoso,budi.contoh.id,0812-3456,madiun,2025-04-02
3,Citra Dewi,citra@contoh.id,,Surabaya,2025/05/01
4,Ani Lestari,ani@contoh.id,081234567890,Madiun,2025-03-10
5,Dodi,dodi@contoh.id,085611223344,MADIUN,2025-06-15
6,Eka Putri,,087755443322,Surabaya,2025-13-40
"""
baris = list(csv.DictReader(io.StringIO(data)))
n = len(baris)

# 1. kelengkapan
print("Kelengkapan:")
for kolom in baris[0]:
    kosong = sum(1 for b in baris if not b[kolom].strip())
    print(f"  {kolom:<10} terisi {100 * (n - kosong) / n:5.1f}%")

# 2. keunikan (duplikat pada kombinasi nama+email)
kunci = collections.Counter((b["nama"], b["email"]) for b in baris)
dup = [k for k, v in kunci.items() if v > 1]
print("Duplikat:", dup)

# 3. validitas
pola_email = re.compile(r"^[^@\s]+@[^@\s]+\.[a-z]{2,}$")
pola_hp = re.compile(r"^08\d{8,11}$")
pola_tgl = re.compile(r"^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$")
print("Validitas:")
print("  surel tidak valid  :", [b["id"] for b in baris if b["email"] and not pola_email.match(b["email"])])
print("  telepon tidak valid:", [b["id"] for b in baris if b["telepon"] and not pola_hp.match(b["telepon"])])
print("  tanggal tidak valid:", [b["id"] for b in baris if not pola_tgl.match(b["tgl_daftar"])])

# 4. konsistensi penulisan
print("Variasi penulisan kota:", dict(collections.Counter(b["kota"] for b in baris)))
print("Setelah dibakukan     :", dict(collections.Counter(b["kota"].strip().title() for b in baris)))`, lang: 'python', run: true, caption: 'Profiling mengubah rasa "datanya kayaknya berantakan" menjadi angka dan daftar baris spesifik yang dapat diperbaiki, serta menunjukkan aturan validasi yang hilang pada formulir pendaftaran.' },
            { callout: 'Aturan emas: <b>cegah di sumber</b>. Memperbaiki data di gudang data itu mahal dan berulang; menambahkan validasi di formulir, pilihan baku (dropdown kota), dan batasan di basis data (NOT NULL, UNIQUE, CHECK) jauh lebih murah.', kind: 'good', title: 'Prinsip' },
            { h2: 'Master data dan reference data' },
            { table: { head: ['Jenis', 'Arti', 'Contoh'], rows: [['Master data', 'Entitas inti yang dipakai banyak sistem dan relatif jarang berubah', 'Pelanggan, produk, pemasok, pegawai'], ['Reference data', 'Daftar nilai baku untuk klasifikasi', 'Kode provinsi, mata uang, status pesanan'], ['Data transaksi', 'Peristiwa yang terjadi', 'Pesanan, pembayaran, absensi'], ['Metadata', 'Data tentang data', 'Definisi kolom, sumber, pemilik, tanggal pembaruan']] } },
            { svg: 'diagram', w: 640, h: 220, label: 'Master data tunggal', nodes: [{ id: 'm', x: 320, y: 110, shape: 'circle', w: 110, h: 110, t: 'Master data pelanggan' }, { id: 'a', x: 90, y: 40, shape: 'rect', w: 120, h: 40, t: 'CRM' }, { id: 'b', x: 90, y: 180, shape: 'rect', w: 120, h: 40, t: 'ERP' }, { id: 'c', x: 550, y: 40, shape: 'rect', w: 120, h: 40, t: 'Toko online' }, { id: 'd', x: 550, y: 180, shape: 'rect', w: 120, h: 40, t: 'Sistem layanan' }], edges: [{ from: 'a', to: 'm', tail: 'arrow' }, { from: 'b', to: 'm', tail: 'arrow' }, { from: 'c', to: 'm', tail: 'arrow' }, { from: 'd', to: 'm', tail: 'arrow' }], caption: 'Master Data Management (MDM) menjaga satu versi tepercaya ("golden record") yang dibagi ke semua sistem, alih-alih setiap sistem memelihara sendiri.' },
            { h2: 'Tata kelola data' },
            `Tata kelola data menetapkan <b>siapa yang bertanggung jawab atas data, aturan apa yang berlaku, dan bagaimana ketaatannya dipantau</b>. Tanpa itu, kualitas data menjadi "tugas semua orang", yang berarti tidak ada yang mengerjakannya.`,
            { w: 'cards', title: 'Peran utama (ketuk kartu)', items: [{ tag: 'Data owner', front: 'Pemilik data', backTag: 'Tanggung jawab', back: 'Pejabat bisnis yang akuntabel atas suatu domain data (misalnya Kepala Akademik untuk data mahasiswa): menetapkan kebijakan akses dan mutu.' }, { tag: 'Data steward', front: 'Penjaga data', backTag: 'Tanggung jawab', back: 'Mengelola keseharian: definisi, aturan kualitas, penyelesaian masalah data.' }, { tag: 'Data custodian', front: 'Pengelola teknis', backTag: 'Tanggung jawab', back: 'Tim TI yang menyimpan, mengamankan, dan memulihkan data.' }, { tag: 'Pengguna data', front: 'Analis dan aplikasi', backTag: 'Tanggung jawab', back: 'Memakai data sesuai kebijakan dan melaporkan masalah mutu.' }] },
            { ul: ['<b>Kamus data dan katalog data</b>: definisi bisnis setiap istilah, sumber, pemilik, dan klasifikasi sensitivitas.', '<b>Kebijakan</b>: kualitas, akses, retensi, berbagi, dan keamanan data.', '<b>Garis keturunan data (lineage)</b>: dari mana data berasal dan transformasi apa yang dilaluinya.', '<b>Pengukuran dan pelaporan kualitas</b> secara berkala dengan ambang batas dan tindak lanjut.'] },
            { h2: 'Siklus hidup data' },
            { svg: 'cycle', label: 'Siklus hidup data', items: ['Buat atau kumpulkan', 'Simpan dan lindungi', 'Gunakan dan bagikan', 'Arsipkan', 'Hapus sesuai retensi'], caption: 'Setiap tahap memiliki kontrol: validasi saat dibuat, enkripsi saat disimpan, otorisasi saat dipakai, retensi saat diarsipkan atau dihapus.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pelanggan yang sama tercatat tiga kali melanggar dimensi...', options: ['Keunikan', 'Ketepatan waktu', 'Validitas'], answer: 0, why: 'Duplikat.' }, { q: 'Peran yang akuntabel atas suatu domain data di sisi bisnis?', options: ['Data owner', 'Data custodian', 'Pengguna'], answer: 0, why: 'Pemilik data menentukan kebijakan.' }, { q: 'Cara paling murah meningkatkan kualitas data?', options: ['Mencegah kesalahan di titik masuk', 'Membersihkan di akhir', 'Menambah laporan'], answer: 0, why: 'Cegah di sumber.' }] },
            { exercise: [['Dari profiling di atas, aturan validasi apa yang sebaiknya ditambahkan pada formulir pendaftaran?', 'Validasi format surel, telepon, dan tanggal; daftar pilihan baku untuk kota; deteksi duplikat berdasarkan surel.'], ['Mengapa kolom kota perlu daftar baku?', 'Pengetikan bebas menghasilkan variasi (madiun, MADIUN, Madiun) yang merusak pengelompokan dan laporan.'], ['Sebutkan tiga isi kamus data untuk kolom ipk.', 'Definisi (rata-rata nilai berbobot SKS), tipe dan rentang (0,00–4,00; dua desimal), sumber dan pemilik (sistem akademik, Bagian Akademik).'], ['Apa perbedaan data owner dan data steward?', 'Owner bertanggung jawab atas keputusan kebijakan; steward menjalankan pengelolaan harian sesuai kebijakan itu.']] },
            { summary: ['Kualitas data: kelengkapan, keunikan, validitas, akurasi, konsistensi, ketepatan waktu.', 'Profiling mengukur masalah secara nyata; cegah di sumber.', 'Master data menyediakan satu versi tepercaya untuk banyak sistem.', 'Tata kelola data menetapkan peran, kebijakan, kamus data, dan pengukuran.', 'Kelola data sepanjang siklus hidupnya sampai penghapusan.'] },
        ],
        faq: [['Alat apa yang membantu kualitas data?', 'Skrip Python/pandas, Great Expectations, dbt tests, serta fitur profiling pada alat ETL dan BI.'], ['Apakah perlu seluruh program tata kelola formal?', 'Tidak sejak awal. Mulailah dari satu domain penting (misalnya pelanggan atau mahasiswa), tunjuk pemilik, tentukan beberapa aturan kualitas, dan ukur.'], ['Bagaimana hubungannya dengan UU PDP?', 'Tata kelola data memudahkan pemenuhan: Anda tahu data pribadi apa yang dimiliki, di mana, untuk apa, dan siapa yang berwenang.']],
        sources: [REF_DAMA, ['Great Expectations: dokumentasi pengujian kualitas data', 'https://docs.greatexpectations.io/'], ['Thomas Redman, Data Driven: Profiting from Your Most Important Business Asset (Harvard Business Press, 2008)', ''], REF_LAUDON],
    },

    {
        slug: 'implementasi-dan-migrasi-sistem-informasi-strategi-cutover-dan-validasi-data',
        title: 'Implementasi dan Migrasi Sistem: Cutover dan Validasi Data',
        description: 'Pelajari penerapan sistem baru: strategi cutover (big bang, paralel, pilot, bertahap), migrasi data dengan ETL, validasi rekonsiliasi dengan Python, rencana mundur (rollback), pelatihan, dan review pascaimplementasi.',
        date: D, category: C, level: 'Menengah', tags: ['implementasi sistem', 'migrasi data', 'cutover', 'rollback', 'go-live'], cta: 'none',
        prereq: ['SDLC', 'pengujian sistem'],
        lead: 'Hari peluncuran adalah saat paling berisiko dalam proyek: data lama harus pindah dengan benar, pengguna harus siap, dan bisnis tidak boleh berhenti. Banyak proyek yang berhasil dibangun gagal justru pada tahap ini. Kuncinya: strategi peralihan yang tepat, migrasi data yang dapat diverifikasi, dan rencana mundur yang nyata.',
        body: [
            { objectives: ['membandingkan strategi cutover: big bang, paralel, pilot, dan bertahap', 'merencanakan migrasi data: pemetaan, pembersihan, pemuatan, dan validasi', 'melakukan rekonsiliasi data sebelum dan sesudah migrasi dengan skrip', 'menyusun daftar periksa go-live dan rencana mundur', 'melakukan review pascaimplementasi'] },
            { h2: 'Strategi peralihan' },
            { table: { head: ['Strategi', 'Cara', 'Kelebihan', 'Risiko'], rows: [['Big bang (langsung)', 'Pada tanggal tertentu, sistem lama dimatikan dan baru dinyalakan', 'Cepat, tanpa dua sistem', 'Risiko tertinggi; kegagalan memengaruhi semua'], ['Paralel', 'Sistem lama dan baru berjalan bersamaan untuk periode tertentu; hasil dibandingkan', 'Aman, ada pembanding', 'Beban kerja ganda, biaya tinggi'], ['Pilot', 'Diterapkan di satu unit atau lokasi dulu, lalu diperluas', 'Pembelajaran sebelum skala penuh', 'Perlu mengelola dua cara kerja sementara'], ['Bertahap (phased)', 'Modul atau fitur dirilis bertahap', 'Risiko terbagi, pengguna belajar bertahap', 'Integrasi sementara antara lama dan baru']] } },
            { w: 'quiz', title: 'Latihan memilih strategi', questions: [{ q: 'Sistem penggajian 10.000 pegawai yang kesalahannya berdampak langsung pada gaji. Strategi yang paling aman?', options: ['Paralel selama satu atau dua siklus gaji', 'Big bang', 'Tidak perlu uji'], answer: 0, why: 'Hasil dibandingkan dengan sistem lama sebelum beralih.' }, { q: 'Jaringan 40 toko akan memakai kasir baru. Pendekatan masuk akal?', options: ['Pilot di 2 toko lalu bertahap', 'Big bang di semua toko', 'Menunda selamanya'], answer: 0, why: 'Belajar dari pilot mengurangi risiko.' }, { q: 'Aplikasi internal kecil yang tidak kritis dan penggunanya sedikit. Strategi yang efisien?', options: ['Big bang', 'Paralel setahun', 'Bertahap tiga tahun'], answer: 0, why: 'Risiko rendah; biaya paralel tidak sepadan.' }] },
            { h2: 'Migrasi data' },
            { svg: 'flow', label: 'Tahapan migrasi data', steps: [{ t: 'Profiling dan pemetaan', d: 'kenali data lama, petakan ke skema baru' }, { t: 'Pembersihan', d: 'duplikat, format, nilai tidak valid' }, { t: 'Uji coba migrasi', d: 'jalankan berulang di lingkungan uji' }, { t: 'Migrasi akhir', d: 'saat cutover, data terbaru dipindah' }, { t: 'Validasi', d: 'rekonsiliasi jumlah, total, sampel' }], caption: 'Lakukan uji coba migrasi berkali-kali sebelum hari H. Setiap uji menemukan masalah baru dan memberi estimasi durasi yang nyata.' },
            { code: py`import sqlite3

lama = sqlite3.connect(":memory:")
baru = sqlite3.connect(":memory:")

lama.executescript("""
CREATE TABLE pelanggan (id INTEGER, nama TEXT, saldo REAL, status TEXT);
INSERT INTO pelanggan VALUES (1,'Ani',150000.50,'A'),(2,'Budi',0,'A'),(3,'Citra',75000,'N'),(4,'Dodi',200000,'A'),(5,'Eka',50000.25,'A');
""")
baru.executescript("""
CREATE TABLE pelanggan (id INTEGER PRIMARY KEY, nama TEXT NOT NULL, saldo_rp INTEGER NOT NULL, aktif INTEGER NOT NULL);
""")

# transformasi: kode status lama -> boolean; saldo desimal -> bilangan bulat rupiah (dibulatkan)
for (id_, nama, saldo, status) in lama.execute("SELECT * FROM pelanggan"):
    if id_ == 4:                                 # simulasikan record gagal dimigrasi
        continue
    baru.execute("INSERT INTO pelanggan VALUES (?,?,?,?)", (id_, nama, round(saldo), 1 if status == "A" else 0))

# validasi rekonsiliasi
def hitung(db, sql): return db.execute(sql).fetchone()[0]
n_lama, n_baru = hitung(lama, "SELECT COUNT(*) FROM pelanggan"), hitung(baru, "SELECT COUNT(*) FROM pelanggan")
total_lama, total_baru = round(hitung(lama, "SELECT SUM(saldo) FROM pelanggan")), hitung(baru, "SELECT SUM(saldo_rp) FROM pelanggan")
print("jumlah record  : lama", n_lama, "| baru", n_baru, "->", "OK" if n_lama == n_baru else "TIDAK COCOK")
print("total saldo    : lama", total_lama, "| baru", total_baru, "->", "OK" if abs(total_lama - total_baru) <= n_lama else "TIDAK COCOK")
hilang = {r[0] for r in lama.execute("SELECT id FROM pelanggan")} - {r[0] for r in baru.execute("SELECT id FROM pelanggan")}
print("id belum termigrasi:", sorted(hilang))
aktif_lama = hitung(lama, "SELECT COUNT(*) FROM pelanggan WHERE status='A'")
aktif_baru = hitung(baru, "SELECT COUNT(*) FROM pelanggan WHERE aktif=1")
print("pelanggan aktif: lama", aktif_lama, "| baru", aktif_baru)`, lang: 'python', run: true, caption: 'Rekonsiliasi (jumlah record, total kontrol, daftar yang hilang) menemukan record yang gagal migrasi sebelum pengguna menemukannya. Perhatikan selisih pembulatan saldo yang wajar harus didokumentasikan.' },
            { callout: 'Aturan: jangan menganggap migrasi sukses karena <i>tidak ada error</i>. Buktikan dengan angka: jumlah baris, total kendali (saldo, kuantitas), dan pemeriksaan sampel oleh pengguna bisnis yang memahami datanya.', kind: 'warn', title: 'Validasi' },
            { h2: 'Daftar periksa go-live' },
            { w: 'checklist', title: 'Siap go-live?', items: ['UAT selesai dan ditandatangani pemilik bisnis; cacat kritis tertutup.', 'Uji migrasi data berhasil dan rekonsiliasi sesuai ambang yang disepakati.', 'Cadangan lengkap sistem lama dan basis data dibuat dan diuji pemulihannya.', 'Rencana mundur (rollback) tertulis dengan titik keputusan dan batas waktu.', 'Pengguna dilatih dan memiliki panduan; hak akses sudah diatur.', 'Kapasitas dan kinerja sudah diuji dengan beban realistis.', 'Pemantauan, peringatan, dan kontak darurat tersedia.', 'Dukungan hypercare dijadwalkan selama minggu-minggu awal.', 'Komunikasi kepada seluruh pemangku kepentingan sudah dikirim, termasuk jadwal henti layanan.'] },
            { h2: 'Rencana mundur' },
            `Rencana mundur menentukan <b>kapan</b> dan <b>bagaimana</b> kembali ke sistem lama bila peluncuran bermasalah. Tentukan kriteria (misalnya "bila transaksi gagal lebih dari 2% dalam 2 jam pertama"), siapa yang berwenang memutuskan, dan langkah teknis pemulihan. Rencana yang tidak pernah dilatih sering tidak berfungsi ketika dibutuhkan.`,
            { h2: 'Pemeliharaan dan review pascaimplementasi' },
            { table: { head: ['Jenis pemeliharaan', 'Tujuan', 'Contoh'], rows: [['Korektif', 'Memperbaiki cacat', 'Memperbaiki perhitungan IPK yang salah'], ['Adaptif', 'Menyesuaikan dengan perubahan lingkungan', 'Pembaruan karena perubahan regulasi atau sistem operasi'], ['Perfektif', 'Menyempurnakan fitur dan kinerja', 'Menambahkan laporan, mempercepat kueri'], ['Preventif', 'Mencegah masalah di masa depan', 'Refaktor, pembaruan pustaka, peningkatan pemantauan']] } },
            `Beberapa minggu atau bulan setelah peluncuran, lakukan <b>review pascaimplementasi</b>: apakah tujuan bisnis tercapai (bandingkan dengan studi kelayakan), apa yang berjalan baik, apa yang perlu diperbaiki, dan pelajaran untuk proyek berikutnya.`,
            { exercise: [['Mengapa uji coba migrasi dilakukan berkali-kali?', 'Menemukan masalah transformasi, menyempurnakan skrip, dan mengukur durasi sebenarnya agar jendela cutover dapat direncanakan.'], ['Sebutkan tiga total kendali untuk memvalidasi migrasi data keuangan.', 'Jumlah record, total saldo atau nilai transaksi, dan total per kategori atau periode.'], ['Kapan big bang masih layak dipertimbangkan?', 'Sistem kecil, risiko rendah, atau tidak mungkin menjalankan dua sistem sekaligus (misalnya perubahan infrastruktur menyeluruh).'], ['Apa yang harus ada dalam rencana mundur?', 'Kriteria pemicu, pengambil keputusan, langkah teknis pemulihan, batas waktu keputusan, dan komunikasi.']] },
            { summary: ['Strategi cutover: big bang, paralel, pilot, bertahap; pilih menurut risiko dan biaya.', 'Migrasi data: pemetaan, pembersihan, uji berulang, migrasi akhir, validasi.', 'Rekonsiliasi dengan jumlah record, total kendali, dan sampel membuktikan keberhasilan.', 'Go-live perlu daftar periksa, hypercare, dan rencana mundur yang teruji.', 'Review pascaimplementasi menutup siklus dan memberi pelajaran.'] },
        ],
        faq: [['Berapa lama hypercare?', 'Umumnya 2–4 minggu, bergantung pada kompleksitas dan jumlah pengguna.'], ['Apa itu feature flag dan canary release?', 'Teknik rilis modern: fitur baru dinyalakan untuk sebagian kecil pengguna dulu (canary) dan dapat dimatikan cepat bila bermasalah, menjadi bentuk rollback yang halus.'], ['Siapa pemilik keputusan go/no-go?', 'Sponsor atau pemilik bisnis, berdasarkan rekomendasi manajer proyek, tim uji, dan operasi.']],
        sources: [REF_LAUDON, ['Kenneth Kendall dan Julie Kendall, Systems Analysis and Design (Pearson)', ''], ['Martin Fowler: Blue Green Deployment', 'https://martinfowler.com/bliki/BlueGreenDeployment.html'], ['Google SRE Book: Launch Coordination Checklist', 'https://sre.google/sre-book/launch-checklist/']],
    },
];
