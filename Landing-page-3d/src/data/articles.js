// All articles of the site live in this one file. The article pages, the list page, the SEO tags
// and the sitemap are all generated from it.
//
// HOW TO ADD AN ARTICLE
//   Copy one object below, paste it at the TOP of ARTICLES, change the fields. Nothing else to touch.
//   Then commit + push: the site rebuilds and the new article gets its own address, meta tags and sitemap entry.
//
// Fields
//   slug         address of the article: muchson.web.id/artikel/<slug>/ (lowercase, dashes, never change it later)
//   title        the headline, ideally under 60 characters, with the main keyword near the start
//   description  one or two sentences for Google and social previews, 120-160 characters
//   date         publish date, YYYY-MM-DD
//   category     groups related articles ("AI & Coding", "Otomasi", "Pendidikan", "Web & Desain", "Karier")
//   tags         short keywords, shown under the title
//   body         the content, a list of blocks:
//                  'plain text'            a paragraph
//                  { h: 'Heading' }        a sub heading (H2)
//                  { ul: ['a', 'b'] }      a bullet list
//                  { ol: ['a', 'b'] }      a numbered list
//                  { quote: 'text' }       a highlighted note
//
// Written in Bahasa Indonesia on purpose: it is the language the target readers search in.

export const SITE_URL = 'https://muchson.web.id';

export const ARTICLES = [
    {
        slug: 'vibe-coding-adalah',
        title: 'Vibe Coding Adalah: Cara Aman Ngoding dengan AI',
        description:
            'Vibe coding berarti membangun aplikasi lewat percakapan dengan AI. Pahami cara kerjanya, risikonya, dan kebiasaan yang membuat hasilnya tetap bisa dipertanggungjawabkan.',
        date: '2026-10-23',
        category: 'AI & Coding',
        tags: ['vibe coding', 'AI coding', 'developer'],
        body: [
            'Vibe coding adalah gaya membuat perangkat lunak dengan menjelaskan apa yang Anda mau dalam bahasa sehari-hari, lalu membiarkan AI menulis kodenya. Anda mengarahkan, mencoba hasilnya, dan meminta perbaikan, tanpa mengetik setiap baris sendiri.',
            { h: 'Kenapa ramai dibicarakan' },
            'Alat bantu coding berbasis AI kini bisa membuat halaman web, skrip otomasi, sampai aplikasi kecil dalam hitungan menit. Hambatan untuk mencoba ide turun jauh, dan itu menjelaskan kenapa topik ini terus naik di komunitas developer dan pendidikan.',
            { h: 'Di mana masalahnya' },
            'Kode yang dihasilkan sering terlihat benar, tetapi menyimpan celah. Survei developer yang banyak dikutip menunjukkan mayoritas pengguna merasa hasil AI "hampir benar tapi belum tepat", dan tingkat kepercayaannya rendah. Artinya, kecepatan menulis kode naik, sedangkan beban memeriksanya ikut naik.',
            { h: 'Kebiasaan yang membuatnya aman' },
            {
                ol: [
                    'Tulis tujuan dan batasan dulu, jangan langsung minta "buatkan aplikasinya".',
                    'Minta perubahan kecil, satu per satu, dan jalankan setiap kali.',
                    'Baca kode yang menyentuh data pengguna, login, pembayaran, dan file.',
                    'Simpan di Git supaya setiap langkah bisa dibatalkan.',
                    'Tulis tes sederhana untuk perilaku yang tidak boleh rusak.',
                ],
            },
            { quote: 'Vibe coding mempercepat langkah pertama. Memahami hasilnya tetap tugas Anda.' },
            { h: 'Untuk siapa' },
            'Cocok untuk prototipe, alat internal, dan belajar. Untuk produk yang dipakai banyak orang, gunakan sebagai asisten, lalu tinjau seperti Anda meninjau kode rekan kerja.',
        ],
    },
    {
        slug: 'apa-itu-mcp-model-context-protocol',
        title: 'Apa Itu MCP (Model Context Protocol)? Penjelasan Sederhana',
        description:
            'MCP adalah standar yang menghubungkan asisten AI ke data dan alat Anda. Pelajari cara kerjanya, contoh pemakaian, dan hal yang perlu diwaspadai.',
        date: '2026-10-23',
        category: 'AI & Coding',
        tags: ['MCP', 'AI agent', 'integrasi'],
        body: [
            'Model Context Protocol, disingkat MCP, adalah standar terbuka agar asisten AI bisa terhubung ke sumber data dan alat dengan cara yang seragam. Bayangkan colokan universal: satu bentuk, banyak perangkat.',
            { h: 'Masalah yang diselesaikan' },
            'Sebelumnya, setiap aplikasi AI perlu integrasi khusus untuk setiap layanan: kalender, database, penyimpanan file, tracker tugas. MCP membuat sisi layanan cukup menyediakan satu "server", dan aplikasi AI mana pun yang mendukung standar itu bisa memakainya.',
            { h: 'Cara kerja singkat' },
            {
                ul: [
                    'Server MCP menyatakan apa yang bisa dilakukan: membaca file, mencari data, membuat tiket.',
                    'Aplikasi AI (klien) melihat daftar kemampuan itu dan memakainya saat relevan.',
                    'Pengguna biasanya diminta menyetujui tindakan yang mengubah sesuatu.',
                ],
            },
            { h: 'Contoh pemakaian' },
            'Asisten yang bisa membaca dokumen proyek, mengecek jadwal rapat, lalu membuat ringkasan; atau asisten coding yang bisa membuka database pengembangan untuk memahami struktur tabel sebelum menulis query.',
            { h: 'Yang perlu diwaspadai' },
            {
                ul: [
                    'Beri akses seminimal mungkin. Server yang bisa menghapus data sebaiknya tidak dihubungkan tanpa kebutuhan jelas.',
                    'Teks dari halaman web atau email yang dibaca AI bisa berisi instruksi tersembunyi. Anggap itu data, bukan perintah.',
                    'Makin banyak server terpasang, makin banyak yang harus dipantau. Pasang yang benar-benar dipakai.',
                ],
            },
            'MCP kemungkinan akan menjadi bagian standar dari alur kerja developer dan tim operasional. Mulailah dengan satu server untuk satu tugas yang jelas.',
        ],
    },
    {
        slug: 'ai-agent-vs-chatbot',
        title: 'AI Agent vs Chatbot: Apa Bedanya dan Kapan Memakainya',
        description:
            'Chatbot menjawab, AI agent bertindak. Pahami perbedaan, contoh nyata, dan cara memilih mana yang tepat untuk kebutuhan bisnis atau belajar Anda.',
        date: '2026-10-23',
        category: 'AI & Coding',
        tags: ['AI agent', 'chatbot', 'otomasi'],
        body: [
            'Chatbot menjawab pertanyaan. AI agent menyelesaikan tugas. Perbedaannya terletak pada kemampuan agent untuk merencanakan langkah, memakai alat, dan memeriksa hasilnya sendiri sebelum melapor.',
            { h: 'Chatbot' },
            'Mengambil pesan, menjawab dari pengetahuan yang dimilikinya atau dari dokumen yang diberikan, lalu berhenti. Cocok untuk FAQ, bantuan pelanggan tingkat awal, dan latihan tanya jawab.',
            { h: 'AI agent' },
            'Menerima tujuan, memecahnya menjadi langkah, memanggil alat (cari data, kirim email, ubah spreadsheet, jalankan kode), lalu menilai apakah tujuan tercapai. Karena bisa mengubah sesuatu di dunia nyata, risikonya juga lebih besar.',
            { h: 'Cara memilih' },
            {
                ul: [
                    'Hanya butuh jawaban atau rangkuman: chatbot sudah cukup.',
                    'Tugas berulang dengan beberapa langkah tetap: otomasi biasa lebih murah dan lebih stabil.',
                    'Tugas berubah-ubah dan butuh keputusan di tengah jalan: agent masuk akal.',
                ],
            },
            { h: 'Aturan aman untuk agent' },
            {
                ol: [
                    'Mulai dari tindakan yang hanya membaca, lalu tambah izin menulis bertahap.',
                    'Minta persetujuan manusia untuk tindakan yang tidak bisa dibatalkan.',
                    'Catat setiap langkah supaya bisa diperiksa.',
                    'Batasi biaya dan jumlah langkah per tugas.',
                ],
            },
            'Banyak tim terlalu cepat memakai agent untuk masalah yang sebenarnya selesai dengan satu alur otomasi sederhana. Pilih alat paling sederhana yang menyelesaikan pekerjaan.',
        ],
    },
    {
        slug: 'workflow-ngoding-dengan-ai-agent',
        title: 'Workflow Ngoding dengan AI Agent: Dari Ide sampai Kode Jadi',
        description:
            'Cara kerja developer dengan agen coding di terminal: menyiapkan konteks, membagi tugas, meninjau perubahan, dan menjaga kualitas kode.',
        date: '2026-10-23',
        category: 'AI & Coding',
        tags: ['agentic coding', 'workflow', 'code review'],
        body: [
            'Agen coding bekerja langsung di folder proyek Anda: membaca file, mengubah kode, menjalankan perintah, dan melaporkan hasilnya. Hasil terbaik datang dari alur kerja yang rapi, bukan dari prompt panjang.',
            { h: '1. Siapkan konteks' },
            'Tulis catatan singkat di repositori: cara menjalankan proyek, struktur folder, gaya penulisan kode, dan hal yang tidak boleh diubah. Agen membacanya setiap sesi, jadi Anda tidak perlu mengulang.',
            { h: '2. Tentukan kriteria selesai' },
            'Kalimat seperti "perbaiki bug login" terlalu longgar. Lebih baik: "setelah login gagal tiga kali, tampilkan pesan dan tes ini harus lulus". Kriteria yang bisa dicek membuat agen tahu kapan berhenti.',
            { h: '3. Kerjakan potongan kecil' },
            'Satu perubahan, satu commit. Potongan kecil mudah ditinjau dan mudah dibatalkan.',
            { h: '4. Tinjau seperti kode rekan kerja' },
            {
                ul: [
                    'Baca diff, bukan hanya ringkasannya.',
                    'Cari perubahan di luar permintaan.',
                    'Jalankan tes dan buka hasilnya di aplikasi.',
                ],
            },
            { h: '5. Biarkan tugas berjalan paralel' },
            'Tugas yang saling lepas, misalnya menulis tes dan memperbarui dokumentasi, bisa dikerjakan terpisah sementara Anda fokus pada bagian yang sulit.',
            'Pola yang terus terlihat: AI mempercepat menulis kode, sedangkan nilai developer bergeser ke merumuskan masalah, menjaga arsitektur, dan memeriksa hasil.',
        ],
    },
    {
        slug: 'spec-driven-development-dengan-ai',
        title: 'Spec-Driven Development: Tulis Spesifikasi, Baru Generate Kode',
        description:
            'Menulis spesifikasi singkat sebelum meminta AI membuat kode menghasilkan perangkat lunak yang lebih terarah. Ini template dan contoh praktisnya.',
        date: '2026-10-23',
        category: 'AI & Coding',
        tags: ['spec', 'perencanaan', 'AI coding'],
        body: [
            'Spec-driven development berarti Anda menulis dulu apa yang harus dilakukan perangkat lunak, lalu AI menurunkannya menjadi kode. Spesifikasi menjadi sumber kebenaran, kode menjadi hasilnya.',
            { h: 'Kenapa lebih baik dari prompt bebas' },
            'Prompt bebas mudah menghasilkan kode yang mengisi kekosongan dengan tebakan. Spesifikasi memaksa Anda menjawab pertanyaan sulit lebih awal, saat biaya perubahan masih murah.',
            { h: 'Template satu halaman' },
            {
                ul: [
                    'Tujuan: masalah apa yang diselesaikan dan untuk siapa.',
                    'Di luar cakupan: hal yang sengaja tidak dikerjakan.',
                    'Perilaku: daftar kejadian dan respons yang diharapkan.',
                    'Data: bentuk input dan output, termasuk kasus kosong dan salah.',
                    'Kriteria selesai: pernyataan yang bisa dicek dengan tes.',
                ],
            },
            { h: 'Contoh' },
            'Fitur "ekspor nilai ke CSV": tujuan memudahkan guru menyalin nilai ke sistem sekolah; di luar cakupan: format Excel; perilaku: satu baris per siswa, kolom NIS, nama, nilai; kasus kosong: file hanya berisi header; kriteria: file bisa dibuka di spreadsheet tanpa karakter rusak.',
            { h: 'Cara memakainya dengan AI' },
            {
                ol: [
                    'Minta AI mengkritik spesifikasi Anda dan menyebutkan bagian yang ambigu.',
                    'Revisi sampai tidak ada pertanyaan tersisa.',
                    'Minta rencana langkah kerja, lalu kerjakan satu per satu.',
                    'Ubah spesifikasi lebih dulu setiap kali perilaku berubah.',
                ],
            },
            'Kebiasaan ini juga berguna di luar AI: tim yang menulis spesifikasi singkat umumnya lebih sedikit berdebat saat peninjauan kode.',
        ],
    },
    {
        slug: 'cara-memeriksa-kode-hasil-ai',
        title: 'Cara Memeriksa Kode Hasil AI: Checklist Sebelum Merge',
        description:
            'Kode dari AI sering hampir benar. Gunakan checklist ini untuk menangkap bug, celah keamanan, dan perubahan di luar permintaan sebelum kode masuk produksi.',
        date: '2026-10-23',
        category: 'AI & Coding',
        tags: ['code review', 'keamanan', 'kualitas kode'],
        body: [
            'Menghasilkan kode kini murah. Memastikan kode itu benar tetap mahal. Karena itu kebiasaan meninjau menjadi keterampilan inti, bukan pekerjaan sampingan.',
            { h: 'Checklist singkat' },
            {
                ol: [
                    'Apakah perubahan sesuai permintaan, dan tidak lebih? Cari file yang tidak Anda sebut.',
                    'Apakah ada tes, dan apakah tes itu benar-benar bisa gagal? Tes yang selalu lulus tidak menjaga apa pun.',
                    'Bagaimana kasus tepi: data kosong, angka negatif, teks sangat panjang, koneksi putus?',
                    'Apakah input pengguna divalidasi sebelum masuk database, perintah sistem, atau HTML?',
                    'Apakah ada rahasia seperti kunci API yang tertulis di kode atau log?',
                    'Apakah dependensi baru benar-benar diperlukan, dan apakah paketnya nyata dan terawat?',
                    'Apakah Anda bisa menjelaskan kode ini ke rekan tanpa melihat jawaban AI?',
                ],
            },
            { h: 'Tanda bahaya yang sering muncul' },
            {
                ul: [
                    'Nama fungsi atau paket yang terdengar masuk akal tapi tidak ada.',
                    'Penanganan error yang menelan kesalahan diam-diam.',
                    'Kode yang menyalin pola lama yang sudah tidak aman.',
                ],
            },
            { h: 'Biarkan AI membantu meninjau' },
            'Minta model kedua atau sesi baru mencari bug di diff yang sama. Cara ini menangkap sebagian masalah, tetapi tidak menggantikan Anda membaca perubahan.',
            { quote: 'Aturan praktis: jangan merge kode yang tidak bisa Anda jelaskan.' },
        ],
    },
    {
        slug: 'n8n-otomasi-workflow-untuk-pemula',
        title: 'n8n untuk Pemula: Otomasi Workflow Tanpa Ribet',
        description:
            'Kenali n8n, platform otomasi visual yang bisa dihosting sendiri. Pelajari konsep dasar, contoh workflow, dan kapan n8n lebih cocok daripada menulis kode.',
        date: '2026-10-23',
        category: 'Otomasi',
        tags: ['n8n', 'otomasi', 'no-code'],
        body: [
            'n8n adalah platform otomasi berbasis diagram: Anda menghubungkan kotak-kotak (node) untuk memindahkan data antar aplikasi. Ia bisa dipakai di cloud atau dipasang di server sendiri, dan bisa dikombinasikan dengan kode bila perlu.',
            { h: 'Konsep dasar' },
            {
                ul: [
                    'Trigger: peristiwa yang memulai alur, misalnya formulir terkirim, email masuk, atau jadwal harian.',
                    'Node: satu langkah, misalnya baca spreadsheet, kirim pesan, panggil API.',
                    'Credential: izin akses ke layanan, disimpan terpisah dari alur.',
                    'Execution: catatan setiap kali alur berjalan, berguna untuk mencari penyebab kegagalan.',
                ],
            },
            { h: 'Contoh workflow yang bermanfaat' },
            {
                ol: [
                    'Pendaftar formulir masuk ke spreadsheet dan menerima email konfirmasi otomatis.',
                    'Setiap Senin pagi, rekap nilai atau penjualan dikirim ke grup tim.',
                    'Pesan pelanggan diklasifikasikan oleh AI lalu diteruskan ke orang yang tepat.',
                ],
            },
            { h: 'Kapan n8n cocok' },
            'Cocok saat Anda ingin cepat menyambungkan banyak layanan dan butuh yang bisa dibaca orang non-programmer. Kurang cocok untuk logika bisnis yang sangat kompleks atau beban sangat besar; di situ kode biasa lebih tepat.',
            { h: 'Tips awal' },
            'Mulai dari satu alur kecil dengan manfaat nyata, aktifkan penanganan error sejak awal, dan beri nama node yang jelas agar mudah dipelihara bulan depan.',
        ],
    },
    {
        slug: 'membuat-ai-agent-dengan-n8n',
        title: 'Membuat AI Agent dengan n8n: Langkah Praktis',
        description:
            'Panduan membuat AI agent di n8n: memilih model, memberi alat, menambah memori, dan menjaga agar agent tidak bertindak di luar batas.',
        date: '2026-10-23',
        category: 'Otomasi',
        tags: ['n8n', 'AI agent', 'LLM'],
        body: [
            'n8n menyediakan node AI Agent yang membungkus komponen umum agen: model bahasa, alat, dan memori. Anda merakitnya di kanvas yang sama dengan alur otomasi biasa.',
            { h: 'Langkah membuat' },
            {
                ol: [
                    'Tentukan satu tugas sempit, misalnya "menjawab pertanyaan jadwal kelas dari spreadsheet".',
                    'Pilih trigger: pesan chat, webhook, atau jadwal.',
                    'Tambahkan node AI Agent dan hubungkan ke model bahasa pilihan Anda.',
                    'Berikan alat: baca spreadsheet, cari di dokumen, kirim email. Hanya yang dibutuhkan.',
                    'Tulis instruksi sistem: peran, batasan, dan format jawaban.',
                    'Tambahkan memori percakapan jika agent perlu mengingat konteks.',
                    'Uji dengan pertanyaan nyata, termasuk yang sengaja membingungkan.',
                ],
            },
            { h: 'Menjaga agent tetap aman' },
            {
                ul: [
                    'Beri alat baca dulu. Alat tulis seperti kirim email sebaiknya lewat langkah persetujuan.',
                    'Batasi data yang bisa diakses ke satu sheet atau satu folder.',
                    'Simpan log setiap eksekusi dan periksa secara berkala.',
                    'Jangan masukkan kunci rahasia ke instruksi sistem.',
                ],
            },
            { h: 'Kapan jangan memakai agent' },
            'Jika langkahnya selalu sama, alur biasa tanpa agent lebih murah, lebih cepat, dan lebih mudah diprediksi. Gunakan agent untuk bagian yang memerlukan penilaian, bukan untuk seluruh alur.',
        ],
    },
    {
        slug: 'rag-adalah-penjelasan-sederhana',
        title: 'RAG Adalah: Cara AI Menjawab dari Dokumen Anda',
        description:
            'Retrieval-Augmented Generation membuat AI menjawab berdasarkan dokumen Anda sendiri. Pahami alurnya, kelebihannya, dan kesalahan umum saat membangunnya.',
        date: '2026-10-23',
        category: 'AI & Coding',
        tags: ['RAG', 'LLM', 'knowledge base'],
        body: [
            'RAG, singkatan dari Retrieval-Augmented Generation, adalah teknik agar model bahasa menjawab dengan merujuk dokumen yang Anda sediakan. Model tidak perlu "hafal" isi dokumen; ia diberi potongan yang relevan saat pertanyaan datang.',
            { h: 'Alurnya' },
            {
                ol: [
                    'Dokumen dipecah menjadi potongan kecil.',
                    'Setiap potongan diubah menjadi vektor angka (embedding) dan disimpan.',
                    'Saat ada pertanyaan, sistem mencari potongan yang paling mirip maknanya.',
                    'Potongan itu dikirim ke model bersama pertanyaan.',
                    'Model menyusun jawaban dan idealnya menyebut sumbernya.',
                ],
            },
            { h: 'Kelebihan' },
            {
                ul: [
                    'Jawaban bisa mengikuti dokumen terbaru tanpa melatih ulang model.',
                    'Sumber bisa ditampilkan, sehingga jawaban bisa diperiksa.',
                    'Data pribadi tetap di sistem Anda.',
                ],
            },
            { h: 'Kesalahan umum' },
            {
                ul: [
                    'Potongan terlalu besar atau terlalu kecil, sehingga konteksnya hilang atau berisik.',
                    'Dokumen sumber berantakan atau usang. RAG tidak memperbaiki isi yang salah.',
                    'Tidak ada pengujian. Siapkan daftar pertanyaan dan jawaban yang benar, lalu ukur.',
                    'Tidak ada aturan "saya tidak tahu" ketika dokumen tidak memuat jawabannya.',
                ],
            },
            'Untuk sekolah atau perusahaan, RAG cocok untuk asisten panduan akademik, kebijakan internal, dan materi pelatihan. Mulailah dari satu kumpulan dokumen yang rapi.',
        ],
    },
    {
        slug: 'kurikulum-coding-dan-ai-sekolah-indonesia',
        title: 'Kurikulum Coding dan AI di Sekolah Indonesia: Apa yang Perlu Disiapkan',
        description:
            'Coding dan kecerdasan artifisial diperkenalkan sebagai mata pelajaran pilihan. Ini yang perlu disiapkan sekolah dan guru, dari perangkat sampai metode mengajar.',
        date: '2026-10-23',
        category: 'Pendidikan',
        tags: ['kurikulum', 'coding', 'sekolah', 'guru'],
        body: [
            'Pemerintah menyebut coding dan kecerdasan artifisial akan berjalan sebagai mata pelajaran pilihan, bukan wajib, di sekolah yang siap, dengan target tahun ajaran 2026/2027. Jadwal dan rincian bisa berubah, jadi selalu rujuk pengumuman resmi Kemendikdasmen.',
            { h: 'Apa artinya bagi sekolah' },
            'Karena sifatnya pilihan, kesiapan sekolah menentukan. Sekolah yang menyiapkan diri lebih awal punya waktu mencoba, mencatat yang berhasil, dan memperbaiki sebelum diperluas.',
            { h: 'Empat hal yang perlu disiapkan' },
            {
                ol: [
                    'Guru: pelatihan dasar pemrograman, penggunaan alat AI secara bertanggung jawab, dan cara menilai karya siswa.',
                    'Perangkat: tidak harus komputer mutakhir. Banyak latihan bisa berjalan di browser, termasuk di perangkat sederhana.',
                    'Materi: urutan belajar yang jelas dari berpikir komputasional ke proyek kecil.',
                    'Aturan: kapan AI boleh dipakai dalam tugas, dan bagaimana siswa menjelaskan hasil kerjanya.',
                ],
            },
            { h: 'Tantangan yang sering muncul' },
            {
                ul: [
                    'Kesenjangan infrastruktur antar daerah.',
                    'Guru yang belum terlatih dan khawatir tertinggal dari siswa.',
                    'Godaan menjadikan coding sebagai hafalan sintaks, bukan pemecahan masalah.',
                ],
            },
            { h: 'Saran praktis' },
            'Mulai dari latihan yang berjalan langsung di browser, ukur apa yang membuat siswa macet, dan libatkan guru dalam menyusun contoh soal. Platform latihan yang gratis dan tanpa instalasi menurunkan hambatan awal secara nyata.',
        ],
    },
    {
        slug: 'ai-tutor-dan-belajar-personal',
        title: 'AI Tutor dan Belajar Personal: Peluang dan Batasannya',
        description:
            'AI tutor menjanjikan pembelajaran yang menyesuaikan kecepatan siswa. Lihat cara kerjanya, manfaat yang masuk akal, dan batasan yang perlu dijaga guru.',
        date: '2026-10-23',
        category: 'Pendidikan',
        tags: ['AI tutor', 'personalisasi', 'edtech'],
        body: [
            'Personalisasi belajar menjadi salah satu tren utama teknologi pendidikan. Idenya: siswa mendapat latihan, petunjuk, dan umpan balik yang sesuai kemampuannya, kapan saja, tanpa menunggu guru.',
            { h: 'Cara kerjanya' },
            'AI tutor menganalisis jawaban siswa, mengenali konsep yang belum dikuasai, lalu menyesuaikan tingkat kesulitan dan jenis penjelasan. Sebagian sistem juga menampilkan ringkasan untuk guru tentang siapa yang butuh bantuan.',
            { h: 'Manfaat yang masuk akal' },
            {
                ul: [
                    'Umpan balik cepat untuk latihan yang berulang.',
                    'Penjelasan alternatif saat siswa belum paham penjelasan pertama.',
                    'Waktu guru bisa dipakai untuk siswa yang paling memerlukan perhatian.',
                ],
            },
            { h: 'Batasan yang perlu dijaga' },
            {
                ul: [
                    'Jika AI hanya memberi jawaban, siswa menghasilkan tugas bagus tanpa benar-benar belajar. Tutor yang baik memberi petunjuk, bukan jawaban.',
                    'Jawaban AI bisa keliru. Siswa perlu dilatih memeriksa.',
                    'Data siswa sensitif. Pastikan jelas siapa yang menyimpan dan memakainya.',
                    'Klaim hasil dari vendor perlu dicek terhadap penelitian independen.',
                ],
            },
            { h: 'Ciri AI tutor yang baik' },
            'Meminta siswa mencoba dulu, memberi petunjuk bertahap, menjelaskan kesalahan, dan tetap membuat guru berada di tengah proses. Teknologi memperluas jangkauan guru; ia tidak menggantikan hubungan belajar.',
        ],
    },
    {
        slug: 'guru-memakai-ai-tanpa-kehilangan-nalar-kritis',
        title: 'Guru Memakai AI: Hemat Waktu Tanpa Kehilangan Nalar Kritis',
        description:
            'AI bisa memangkas pekerjaan administratif guru, tetapi ada risiko siswa berhenti berpikir. Berikut cara memakainya untuk RPP, soal, dan penilaian secara bijak.',
        date: '2026-10-23',
        category: 'Pendidikan',
        tags: ['guru', 'AI', 'penilaian', 'RPP'],
        body: [
            'Banyak guru mulai memakai AI untuk menyusun rencana pembelajaran, membuat soal, dan memberi umpan balik. Waktu yang dihemat nyata, tetapi hasilnya tetap perlu penilaian profesional.',
            { h: 'Pekerjaan yang cocok dibantu AI' },
            {
                ul: [
                    'Membuat draf rencana pembelajaran lalu menyesuaikannya dengan kelas.',
                    'Menghasilkan variasi soal dari tujuan pembelajaran yang sama.',
                    'Menyusun rubrik penilaian dan contoh jawaban.',
                    'Merangkum bacaan panjang menjadi poin diskusi.',
                ],
            },
            { h: 'Yang sebaiknya tetap di tangan guru' },
            {
                ul: [
                    'Keputusan nilai akhir.',
                    'Penilaian karya yang menyangkut proses berpikir siswa.',
                    'Menjaga kerahasiaan data siswa. Jangan memasukkan nama dan data pribadi ke alat yang tidak jelas kebijakannya.',
                ],
            },
            { h: 'Menjaga siswa tetap berpikir' },
            'Kajian pendidikan mengingatkan bahwa AI membantu belajar jika mengikuti prinsip pengajaran yang jelas, dan merugikan jika hanya menghilangkan usaha intelektual siswa. Beberapa cara praktis:',
            {
                ol: [
                    'Minta siswa menunjukkan proses, bukan hanya hasil.',
                    'Beri tugas yang menuntut penjelasan lisan atas karya sendiri.',
                    'Izinkan AI untuk tahap tertentu, misalnya mencari kekurangan draf, dan larang untuk tahap lain.',
                    'Ajarkan siswa memeriksa jawaban AI dengan sumber lain.',
                ],
            },
            'Terapkan aturan yang jelas sejak awal semester, dan jelaskan alasannya kepada siswa. Aturan yang dipahami lebih mudah dipatuhi daripada larangan tanpa penjelasan.',
        ],
    },
    {
        slug: 'belajar-python-dari-nol-di-browser',
        title: 'Belajar Python dari Nol: Latihan Langsung di Browser',
        description:
            'Panduan belajar Python untuk pemula: urutan materi, cara berlatih tanpa instalasi, dan kesalahan yang sering membuat orang berhenti di tengah jalan.',
        date: '2026-10-23',
        category: 'Pendidikan',
        tags: ['Python', 'belajar coding', 'pemula'],
        body: [
            'Python sering direkomendasikan untuk pemula karena sintaksnya mudah dibaca, dan juga dipakai luas di data, otomasi, dan AI. Hambatan terbesar biasanya bukan bahasanya, melainkan pengaturan awal dan kebiasaan berlatih.',
            { h: 'Urutan belajar yang masuk akal' },
            {
                ol: [
                    'Variabel, tipe data, dan input/output.',
                    'Percabangan (if) dan perulangan (for, while).',
                    'Fungsi: memecah masalah menjadi bagian kecil.',
                    'List, dictionary, dan cara mengolahnya.',
                    'Membaca dan menulis file.',
                    'Proyek kecil yang berguna bagi Anda sendiri.',
                ],
            },
            { h: 'Berlatih tanpa instalasi' },
            'Menjalankan Python langsung di browser menghilangkan masalah versi, PATH, dan izin. Fokus Anda kembali ke menyelesaikan soal. Platform latihan dengan tantangan bertahap membuat Anda terus maju karena ada tanda jelas kapan satu soal dianggap selesai.',
            { h: 'Kesalahan yang sering terjadi' },
            {
                ul: [
                    'Hanya menonton video tanpa mengetik kode sendiri.',
                    'Menyalin jawaban AI tanpa memahami, lalu macet di soal berikutnya.',
                    'Langsung memilih proyek terlalu besar.',
                    'Tidak membaca pesan error. Pesan itu biasanya menyebut baris dan jenis masalahnya.',
                ],
            },
            { h: 'Gunakan AI dengan benar' },
            'Mintalah AI menjelaskan error atau memberi petunjuk, bukan langsung menulis solusi. Setelah paham, tulis ulang solusinya sendiri tanpa melihat.',
            'Belajar 30 menit setiap hari lebih efektif daripada lima jam sekali seminggu.',
        ],
    },
    {
        slug: 'merancang-kurikulum-bootcamp-pemrograman',
        title: 'Merancang Kurikulum Bootcamp Pemrograman yang Efektif',
        description:
            'Langkah merancang kurikulum pelatihan coding: menentukan tujuan belajar, menyusun urutan, memilih latihan, dan mengukur hasil dengan kerangka ADDIE dan taksonomi Bloom.',
        date: '2026-10-23',
        category: 'Pendidikan',
        tags: ['kurikulum', 'ADDIE', 'Bloom', 'pelatihan'],
        body: [
            'Kurikulum yang baik dimulai dari pertanyaan: setelah selesai, apa yang bisa dilakukan peserta? Bukan dari daftar topik yang ingin diajarkan.',
            { h: 'Pakai kerangka yang sudah teruji' },
            'ADDIE (Analysis, Design, Development, Implementation, Evaluation) memberi urutan kerja yang jelas, dari mengenali kebutuhan peserta sampai mengevaluasi hasil. Taksonomi Bloom membantu menulis tujuan belajar yang bisa diukur, dari mengingat dan memahami sampai menerapkan, menganalisis, dan mencipta.',
            { h: 'Langkah praktis' },
            {
                ol: [
                    'Kenali peserta: latar belakang, target pekerjaan, waktu yang tersedia.',
                    'Tulis tujuan dengan kata kerja terukur, misalnya "membuat REST API yang menyimpan data ke database".',
                    'Susun urutan dari konsep sederhana ke proyek akhir, dengan satu keterampilan baru per sesi.',
                    'Untuk setiap sesi, siapkan latihan yang langsung dipraktikkan, bukan hanya penjelasan.',
                    'Siapkan rubrik penilaian sebelum kelas dimulai.',
                    'Kumpulkan umpan balik di tengah dan di akhir, lalu perbaiki materi.',
                ],
            },
            { h: 'Kesalahan umum' },
            {
                ul: [
                    'Terlalu banyak topik, terlalu sedikit latihan.',
                    'Proyek akhir yang tidak berkaitan dengan tujuan belajar.',
                    'Tidak ada cara mengetahui peserta yang tertinggal sebelum terlambat.',
                ],
            },
            'Materi yang berbentuk latihan interaktif dan dokumen kerja yang bisa diekspor memudahkan peserta berlatih sendiri dan memudahkan pengajar menilai.',
        ],
    },
    {
        slug: 'gamifikasi-pembelajaran-yang-efektif',
        title: 'Gamifikasi Pembelajaran: Cara Membuatnya Efektif, Bukan Sekadar Poin',
        description:
            'Gamifikasi yang baik meningkatkan motivasi tanpa membuat peserta mengejar poin saja. Pelajari prinsip desain, contoh elemen, dan jebakan yang perlu dihindari.',
        date: '2026-10-23',
        category: 'Web & Desain',
        tags: ['gamifikasi', 'UX', 'motivasi belajar'],
        body: [
            'Gamifikasi memakai unsur permainan, seperti poin, level, dan tantangan, dalam konteks bukan permainan. Dalam pembelajaran digital, tujuannya menjaga motivasi, bukan menghibur semata.',
            { h: 'Prinsip yang bekerja' },
            {
                ul: [
                    'Tujuan jelas: peserta tahu apa yang sedang dicapai dan seberapa dekat.',
                    'Umpan balik cepat: hasil tindakan terlihat langsung.',
                    'Tantangan bertahap: cukup sulit untuk menarik, cukup mudah untuk tidak membuat menyerah.',
                    'Rasa kemajuan: tampilan progres yang jujur.',
                ],
            },
            { h: 'Elemen yang umum dipakai' },
            {
                ul: [
                    'Level dan misi untuk membagi materi menjadi tahap.',
                    'Lencana untuk menandai pencapaian bermakna, bukan kehadiran saja.',
                    'Papan peringkat, dengan hati-hati: bisa memacu sebagian orang dan mematahkan semangat yang lain.',
                    'Cerita atau skenario agar latihan terasa relevan.',
                ],
            },
            { h: 'Jebakan yang perlu dihindari' },
            {
                ol: [
                    'Poin tanpa makna: peserta mengejar angka, bukan pemahaman.',
                    'Kompetisi berlebihan yang menekan peserta pemula.',
                    'Mekanisme yang bisa dimanipulasi tanpa belajar.',
                    'Mengabaikan aksesibilitas, misalnya hanya mengandalkan warna untuk menandai status.',
                ],
            },
            'Uji dengan peserta sungguhan, lihat di mana mereka berhenti, dan ubah. Gamifikasi yang baik terasa seperti petunjuk arah, bukan hiasan.',
        ],
    },
    {
        slug: 'desain-inklusif-aksesibilitas-web-wcag',
        title: 'Desain Inklusif dan Aksesibilitas Web: Panduan WCAG untuk Pemula',
        description:
            'Aksesibilitas web membuat situs bisa dipakai semua orang. Pelajari prinsip WCAG, kesalahan umum, dan langkah cepat memeriksa situs Anda hari ini.',
        date: '2026-10-23',
        category: 'Web & Desain',
        tags: ['aksesibilitas', 'WCAG', 'UX', 'desain inklusif'],
        body: [
            'Aksesibilitas berarti situs bisa dipakai oleh orang dengan beragam kondisi: penglihatan terbatas, buta warna, kesulitan menggunakan mouse, pendengaran terbatas, atau sekadar membaca di bawah sinar matahari. Pedoman utamanya adalah WCAG, yang disusun dengan empat prinsip: dapat dipersepsi, dapat dioperasikan, dapat dipahami, dan kokoh.',
            { h: 'Lima kesalahan yang paling sering' },
            {
                ol: [
                    'Kontras teks terlalu rendah terhadap latar belakang.',
                    'Gambar penting tanpa teks alternatif.',
                    'Tombol dan tautan tidak bisa dijangkau dengan keyboard, atau tanda fokusnya hilang.',
                    'Formulir tanpa label yang jelas, hanya berupa teks contoh di dalam kolom.',
                    'Informasi yang hanya dibedakan oleh warna.',
                ],
            },
            { h: 'Cek cepat hari ini' },
            {
                ul: [
                    'Tekan Tab berulang kali: apakah semua yang bisa diklik bisa dicapai dan terlihat?',
                    'Perbesar tampilan hingga 200%: apakah tata letak tetap bisa dipakai?',
                    'Gunakan alat pemeriksa kontras pada warna utama.',
                    'Jalankan pemeriksa otomatis di browser, lalu perbaiki temuannya.',
                    'Coba pembaca layar sebentar untuk satu halaman penting.',
                ],
            },
            { h: 'Manfaat tambahan' },
            'Situs yang mudah dipakai biasanya juga lebih mudah dipahami mesin pencari: struktur judul yang rapi, teks alternatif, dan tautan yang bermakna membantu manusia dan crawler sekaligus.',
            'Mulailah dari komponen yang paling sering dipakai, seperti tombol dan formulir, lalu jadikan aturannya bagian dari sistem desain.',
        ],
    },
    {
        slug: 'green-it-software-hemat-energi',
        title: 'Green IT: Cara Membuat Software yang Hemat Energi',
        description:
            'Green IT dan green coding mengurangi jejak karbon perangkat lunak. Ini praktik yang bisa langsung diterapkan developer, dari ukuran halaman sampai arsitektur.',
        date: '2026-10-23',
        category: 'Web & Desain',
        tags: ['Green IT', 'green coding', 'sustainability'],
        body: [
            'Perangkat lunak memakai energi di server, jaringan, dan perangkat pengguna. Minat pada green software meningkat dalam beberapa tahun terakhir, sebagian besar didorong oleh besarnya konsumsi sumber daya beban kerja AI.',
            { h: 'Mulai dengan bertanya: perlukah?' },
            'Prinsip "digital sobriety" mengajak kita menanyakan apakah suatu fitur atau teknologi benar-benar dibutuhkan sebelum membangunnya. Fitur yang tidak ada tidak mengonsumsi energi.',
            { h: 'Praktik untuk web' },
            {
                ul: [
                    'Kompres dan ubah ukuran gambar, pakai format modern.',
                    'Kurangi JavaScript yang tidak terpakai dan pustaka berat.',
                    'Manfaatkan cache dan CDN agar data tidak diambil berulang.',
                    'Hindari video putar otomatis dan animasi tanpa fungsi.',
                    'Muat konten secara bertahap (lazy loading).',
                ],
            },
            { h: 'Praktik untuk backend' },
            {
                ul: [
                    'Optimalkan query dan indeks sebelum menambah server.',
                    'Matikan lingkungan uji dan pengembangan saat tidak dipakai.',
                    'Pilih ukuran instans yang sesuai, bukan yang terbesar.',
                    'Jalankan pekerjaan berat saat beban rendah bila memungkinkan.',
                ],
            },
            { h: 'Mengukur' },
            'Tanpa pengukuran, klaim hijau sulit dipercaya. Mulailah dengan ukuran halaman, waktu muat, dan penggunaan CPU, lalu tambahkan estimasi emisi dari penyedia cloud Anda.',
            'Kebiasaan hemat sumber daya biasanya juga membuat situs lebih cepat, dan itu baik untuk pengguna dan peringkat pencarian.',
        ],
    },
    {
        slug: 'greenops-memantau-jejak-karbon-cloud',
        title: 'GreenOps: Memantau Biaya dan Jejak Karbon Cloud',
        description:
            'GreenOps menambahkan emisi karbon di samping biaya dalam pengelolaan cloud. Pahami konsepnya dan langkah awal yang bisa dilakukan tim kecil.',
        date: '2026-10-23',
        category: 'Web & Desain',
        tags: ['GreenOps', 'cloud', 'FinOps', 'karbon'],
        body: [
            'GreenOps adalah praktik memantau dan mengurangi emisi karbon dari infrastruktur cloud, mirip FinOps yang memantau biaya. Keduanya sering saling menguatkan: sumber daya yang tidak terpakai memboroskan uang dan energi sekaligus.',
            { h: 'Kenapa makin relevan' },
            'Pelanggan besar dan mitra bisnis mulai meminta data keberlanjutan dari pemasoknya, meskipun aturan resmi di beberapa wilayah kini menyasar perusahaan yang lebih besar. Tim kecil yang sudah terbiasa mencatat datanya lebih siap saat diminta.',
            { h: 'Langkah awal untuk tim kecil' },
            {
                ol: [
                    'Inventaris: daftar layanan, server, dan database yang berjalan.',
                    'Hapus yang tidak terpakai: lingkungan lama, snapshot, dan disk yatim.',
                    'Sesuaikan ukuran: turunkan spesifikasi yang selalu menganggur.',
                    'Jadwalkan: matikan lingkungan pengembangan di malam hari dan akhir pekan.',
                    'Pilih wilayah cloud dengan mempertimbangkan bauran energinya, bila latensi memungkinkan.',
                    'Gunakan laporan emisi dari penyedia cloud, lalu catat tren bulanan.',
                ],
            },
            { h: 'Tuliskan sebagai kebiasaan tim' },
            'Masukkan pertanyaan "berapa biaya dan jejak karbonnya?" ke dalam peninjauan desain. Kebiasaan kecil ini mencegah pemborosan sebelum menjadi infrastruktur permanen.',
            'Angka hasil estimasi penyedia cloud bersifat perkiraan. Pakai untuk melihat arah dan membandingkan, bukan sebagai angka yang mutlak.',
        ],
    },
    {
        slug: 'seo-teknis-untuk-website-portofolio-developer',
        title: 'SEO Teknis untuk Website Portofolio Developer',
        description:
            'Checklist SEO teknis untuk portofolio berbasis React atau SPA: meta tag, sitemap, structured data, URL yang bisa diindeks, dan kecepatan halaman.',
        date: '2026-10-23',
        category: 'Karier',
        tags: ['SEO', 'portofolio', 'React', 'structured data'],
        body: [
            'Portofolio yang bagus tidak berguna jika tidak ditemukan. SEO teknis memastikan mesin pencari bisa membaca, memahami, dan mengindeks halaman Anda.',
            { h: '1. Setiap halaman punya alamat sendiri' },
            'Alamat yang hanya berbeda di bagian setelah tanda # biasanya tidak diindeks sebagai halaman terpisah. Gunakan alamat jalur biasa, misalnya /artikel/judul-artikel/, dan sajikan HTML-nya saat build supaya crawler langsung melihat isinya.',
            { h: '2. Title dan description unik' },
            'Title di bawah sekitar 60 karakter dengan kata kunci utama di depan, description sekitar 120 sampai 160 karakter yang menjelaskan manfaat halaman. Jangan menyalin yang sama ke semua halaman.',
            { h: '3. Canonical dan sitemap' },
            'Canonical menandai alamat utama sebuah halaman. Sitemap.xml menyebutkan semua halaman penting, dan robots.txt menunjuk ke sitemap itu. Daftarkan sitemap di Google Search Console.',
            { h: '4. Structured data' },
            'JSON-LD bertipe Person untuk profil Anda dan Article untuk tulisan membantu mesin pencari memahami siapa Anda dan apa isi halaman. Validasi dengan alat uji rich result.',
            { h: '5. Kecepatan dan pengalaman' },
            {
                ul: [
                    'Kompres gambar dan tentukan ukurannya.',
                    'Pakai font secukupnya.',
                    'Perhatikan Core Web Vitals: waktu muat konten utama, respons interaksi, dan stabilitas tata letak.',
                ],
            },
            { h: '6. Tautan internal' },
            'Hubungkan artikel ke halaman lain di situs Anda dengan teks tautan yang menjelaskan tujuannya. Ini membantu pembaca dan crawler menemukan konten terkait.',
            'Konten yang konsisten, jujur, dan berguna tetap faktor terbesar. Teknik hanya memastikan konten itu bisa sampai ke pembaca.',
        ],
    },
    {
        slug: 'portofolio-developer-yang-dilirik-recruiter',
        title: 'Portofolio Developer yang Dilirik Recruiter: Apa yang Perlu Ditampilkan',
        description:
            'Recruiter hanya punya beberapa menit untuk menilai portofolio. Ini isi yang perlu ada, cara menulis studi kasus, dan kesalahan yang membuat portofolio diabaikan.',
        date: '2026-10-23',
        category: 'Karier',
        tags: ['portofolio', 'karier developer', 'recruiter'],
        body: [
            'Recruiter dan calon klien biasanya memindai portofolio dengan cepat. Mereka mencari jawaban atas tiga hal: siapa Anda, apa yang bisa Anda kerjakan, dan buktinya.',
            { h: 'Yang perlu ada di halaman depan' },
            {
                ul: [
                    'Satu kalimat yang menyebutkan peran dan keahlian utama Anda.',
                    'Tiga sampai enam proyek pilihan, bukan semua yang pernah dibuat.',
                    'Cara menghubungi Anda yang mudah ditemukan.',
                    'Tautan ke profil profesional dan kode sumber.',
                ],
            },
            { h: 'Menulis studi kasus' },
            'Daftar teknologi tidak cukup. Untuk setiap proyek, ceritakan dengan singkat:',
            {
                ol: [
                    'Masalahnya dan siapa penggunanya.',
                    'Peran Anda yang tepat.',
                    'Keputusan teknis penting dan alasannya.',
                    'Hasilnya, dengan angka yang bisa dipertanggungjawabkan, atau pengalaman pengguna nyata.',
                    'Yang akan Anda ubah jika mengerjakannya lagi.',
                ],
            },
            { h: 'Tampilkan bukti hidup' },
            'Proyek yang bisa dicoba langsung lebih meyakinkan daripada tangkapan layar. Jika proyek sudah dipakai oleh orang lain, misalnya siswa atau tim, sebutkan.',
            { h: 'Kesalahan yang sering terjadi' },
            {
                ul: [
                    'Tautan proyek yang mati.',
                    'Deskripsi yang sama untuk semua proyek.',
                    'Terlalu banyak proyek latihan yang mirip.',
                    'Situs yang lambat atau tidak nyaman dibuka di ponsel.',
                ],
            },
            'Menulis artikel tentang hal yang Anda pelajari juga memperlihatkan cara berpikir Anda, dan membuat Anda lebih mudah ditemukan di mesin pencari.',
        ],
    },
];

export const getArticle = slug => ARTICLES.find(a => a.slug === slug);

export const getRelated = (article, limit = 3) => {
    const same = ARTICLES.filter(a => a.slug !== article.slug && a.category === article.category);
    const rest = ARTICLES.filter(a => a.slug !== article.slug && a.category !== article.category);
    return [...same, ...rest].slice(0, limit);
};
