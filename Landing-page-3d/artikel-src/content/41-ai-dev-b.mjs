const D = '2026-10-28';
const C = 'AI untuk Semua';

export default [
    {
        slug: 'merancang-ai-agent-pola-batasan-dan-kegagalan',
        title: 'Merancang AI Agent: Pola, Batasan, dan Kegagalan Umum',
        description: 'Merancang AI agent untuk developer: kapan cukup workflow, lima pola dari prompt chaining sampai orchestrator-workers, batas keamanan, dan kegagalan umum.',
        date: D, category: C, tags: ['AI agent', 'agentic workflow', 'LLM', 'arsitektur AI', 'otomasi AI'], cta: 'jasa',
        lead: 'Setelah membangun beberapa sistem AI untuk materi pelatihan dan otomasi kerja, saya belajar satu hal: agen yang paling berguna biasanya yang paling sederhana. Banyak masalah yang awalnya terlihat butuh "agen otonom" ternyata cukup diselesaikan dengan alur langkah yang jelas dan satu atau dua panggilan model.',
        body: [
            { h2: 'Workflow atau agent?' },
            `Tulisan Anthropic "Building effective agents" (Desember 2024) membedakan dua hal yang sering dicampur:`,
            { svg: 'versus', label: 'Dua bentuk sistem berbasis LLM', left: { title: 'Workflow', items: ['Langkah ditentukan kode Anda', 'Mudah diprediksi dan diuji', 'Cocok untuk tugas yang urutannya jelas'] }, right: { title: 'Agent', items: ['Model memutuskan langkah dan alat sendiri', 'Fleksibel untuk tugas terbuka', 'Lebih mahal, lebih sulit diprediksi'] } },
            `Rekomendasinya: mulai dari solusi paling sederhana, dan tambah otonomi hanya bila jelas memberi hasil lebih baik.`,

            { h2: 'Lima pola yang sering dipakai' },
            { w: 'cards', title: 'Ketuk untuk contoh penerapan', items: [
                { tag: 'Pola 1', front: 'Prompt chaining: tugas dipecah menjadi langkah berurutan.', backTag: 'Contoh', back: 'Membuat modul ajar: (1) susun tujuan belajar, (2) buat kerangka, (3) tulis isi per bagian, (4) buat soal latihan. Output tiap langkah dicek kode sebelum lanjut.' },
                { tag: 'Pola 2', front: 'Routing: klasifikasi dulu, lalu kirim ke penanganan khusus.', backTag: 'Contoh', back: 'Pesan pelanggan diklasifikasi: pertanyaan produk, keluhan, atau tagihan. Masing-masing punya prompt dan alat sendiri, bahkan model berbeda.' },
                { tag: 'Pola 3', front: 'Paralelisasi: beberapa panggilan sekaligus lalu digabung.', backTag: 'Contoh', back: 'Menilai esai dari tiga aspek (isi, struktur, bahasa) secara paralel, lalu menggabungkan umpan balik.' },
                { tag: 'Pola 4', front: 'Orchestrator-workers: satu model membagi tugas ke model lain.', backTag: 'Contoh', back: 'Riset materi: orchestrator menentukan subtopik, worker mencari dan meringkas tiap subtopik, orchestrator menyusun hasil akhir.' },
                { tag: 'Pola 5', front: 'Evaluator-optimizer: satu membuat, satu menilai, diulang.', backTag: 'Contoh', back: 'Menerjemahkan materi pelatihan ke bahasa Jerman, lalu penilai memeriksa istilah teknis dan nada formal, diulang sampai lolos rubrik.' },
            ] },

            { h2: 'Anatomi agent sungguhan' },
            { code: 'def jalankan_agent(tugas, alat, maks_langkah=8):\n    pesan = [{"role": "user", "content": tugas}]\n    for langkah in range(maks_langkah):\n        respon = model(pesan, tools=alat)\n        if respon.stop_reason != "tool_use":\n            return respon.teks                     # selesai\n        hasil = [jalankan_alat(p) for p in respon.panggilan_alat]  # validasi + izin di sini\n        pesan += [respon.sebagai_pesan(), hasil_sebagai_pesan(hasil)]\n        catat(langkah, respon, hasil)              # log setiap langkah\n    return "Berhenti: batas langkah tercapai, butuh bantuan manusia."' },
            { ul: ['<b>Batas langkah dan biaya</b> per tugas.', '<b>Log setiap langkah</b> agar bisa ditelusuri ketika hasilnya aneh.', '<b>Titik berhenti untuk manusia</b> pada keputusan berisiko.', '<b>Lingkungan terbatas (sandbox)</b> bila agen menjalankan kode.'] },

            { h2: 'Kegagalan yang sering terjadi' },
            { table: { head: ['Gejala', 'Penyebab umum', 'Perbaikan'], rows: [['Agen berputar-putar memanggil alat yang sama', 'Hasil alat tidak informatif atau tujuan kabur', 'Pesan error yang jelas, kriteria selesai yang eksplisit, batas langkah'], ['Memilih alat yang salah', 'Deskripsi alat mirip atau samar', 'Kurangi jumlah alat, perjelas kapan dipakai'], ['Mengarang hasil tanpa memanggil alat', 'Instruksi tidak menekankan sumber', 'Wajibkan jawaban berdasar hasil alat, evaluasi dengan kasus uji'], ['Biaya membengkak', 'Konteks makin panjang tiap langkah', 'Ringkas riwayat, pakai model kecil untuk langkah sederhana'], ['Tindakan berbahaya', 'Hak akses terlalu luas, prompt injection', 'Hak minimum dan konfirmasi manusia']] } },

            { h2: 'Apakah tugas Anda butuh agent?' },
            { w: 'choose', title: 'Cek kebutuhan', questions: [
                { q: 'Apakah langkah-langkah tugasnya bisa ditulis di awal?', options: [{ t: 'Ya, urutannya hampir selalu sama', add: { wf: 3 } }, { t: 'Tidak, tergantung temuan di tengah jalan', add: { ag: 3 } }] },
                { q: 'Seberapa mahal bila terjadi kesalahan?', options: [{ t: 'Tinggi (uang, data pelanggan, keputusan medis)', add: { wf: 2 } }, { t: 'Rendah, hasil selalu ditinjau manusia', add: { ag: 2 } }] },
                { q: 'Apakah ada cara memeriksa hasil secara otomatis?', options: [{ t: 'Ya (tes lulus, angka cocok, format valid)', add: { ag: 2 } }, { t: 'Sulit diperiksa', add: { wf: 2 } }] },
            ], results: { wf: { title: 'Mulai dengan workflow', text: 'Tulis langkahnya di kode, gunakan model untuk bagian yang butuh bahasa. Lebih murah, mudah diuji, dan lebih aman.' }, ag: { title: 'Agent layak dicoba', text: 'Tugas terbuka dengan hasil yang bisa diverifikasi adalah tempat agen bersinar, misalnya agen coding yang bisa menjalankan tes. Tetap pasang batas langkah dan log.' } } },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Pola yang mengklasifikasikan input lalu mengirim ke penanganan khusus?', options: ['Routing', 'Paralelisasi', 'Evaluator-optimizer'], answer: 0, why: 'Routing memisahkan jenis input.' },
                { q: 'Pengaman penting pada loop agent?', options: ['Batas langkah dan log', 'Temperature tinggi', 'Menghapus system prompt'], answer: 0, why: 'Batas mencegah biaya dan loop tak berujung, log membantu penelusuran.' },
            ] },
        ],
        faq: [
            ['Perlukah framework seperti LangChain?', 'Tidak wajib. Banyak pola bisa ditulis dengan beberapa puluh baris kode langsung ke API. Framework membantu untuk hal tertentu, tetapi bisa menyembunyikan apa yang sebenarnya dikirim ke model.'],
            ['Bagaimana mengukur keberhasilan agent?', 'Dengan eval set tugas nyata: persentase tugas selesai benar, jumlah langkah, biaya, dan seberapa sering perlu bantuan manusia.'],
            ['Apa hubungannya dengan MCP?', 'MCP memudahkan memberi agen akses ke alat dan data yang standar. Prinsip hak minimum tetap berlaku.'],
        ],
        sources: [
            ['Anthropic Engineering: Building effective agents', 'https://www.anthropic.com/engineering/building-effective-agents'],
            ['Claude Docs: Tool use with Claude', 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview'],
            ['AI agent vs chatbot (artikel terkait)', 'https://muchson.web.id/artikel/ai-agent-vs-chatbot-apa-bedanya/'],
        ],
    },

    {
        slug: 'biaya-api-ai-cara-menghitung-dan-menghemat',
        title: 'Biaya API AI: Cara Menghitung dan Menghemat',
        description: 'Cara menghitung biaya API AI per token dengan kalkulator bulanan, dan tujuh cara menghemat: model yang tepat, prompt caching, batch, dan batas output.',
        date: D, category: C, tags: ['biaya API AI', 'harga token', 'prompt caching', 'LLM', 'optimasi biaya'], cta: 'jasa',
        lead: 'Prototipe AI biasanya murah: beberapa ribu rupiah sehari. Masalah muncul saat pengguna bertambah dan setiap permintaan membawa riwayat percakapan panjang. Memahami cara biaya dihitung membantu Anda memutuskan desain sejak awal, bukan setelah tagihan datang.',
        body: [
            { h2: 'Rumus dasarnya' },
            `Hampir semua penyedia menagih per <b>juta token</b>, dengan harga berbeda untuk input (yang Anda kirim) dan output (yang dihasilkan model). Output biasanya beberapa kali lebih mahal daripada input.`,
            { code: 'biaya per permintaan =\n    (token_input  / 1.000.000) × harga_input\n  + (token_output / 1.000.000) × harga_output' },
            `Token input mencakup <b>semua</b> yang dikirim: system prompt, riwayat percakapan, dokumen hasil pencarian (RAG), definisi alat, dan pertanyaan pengguna.`,

            { h2: 'Kalkulator biaya bulanan' },
            { w: 'calc', title: 'Perkiraan biaya', desc: 'Isi harga sesuai halaman pricing penyedia dan model yang Anda pakai (dalam dolar per juta token).', inputs: [
                { id: 'req', label: 'Permintaan per hari', value: 2000, min: 10, max: 200000, step: 10 },
                { id: 'tin', label: 'Token input per permintaan', value: 3000, min: 100, max: 200000, step: 100 },
                { id: 'tout', label: 'Token output per permintaan', value: 400, min: 10, max: 20000, step: 10 },
                { id: 'hin', label: 'Harga input', value: 3, min: 0.05, max: 30, step: 0.05, unit: 'USD / juta token' },
                { id: 'hout', label: 'Harga output', value: 15, min: 0.1, max: 150, step: 0.1, unit: 'USD / juta token' },
                { id: 'kurs', label: 'Kurs', value: 16500, min: 10000, max: 25000, step: 100, unit: 'Rp per USD' },
            ], outputs: [
                { label: 'Biaya per permintaan', expr: '((tin / 1e6) * hin + (tout / 1e6) * hout) * kurs', fmt: 'rp' },
                { label: 'Biaya per bulan (30 hari)', expr: '((tin / 1e6) * hin + (tout / 1e6) * hout) * kurs * req * 30', fmt: 'rp', big: true },
                { label: 'Porsi biaya dari input', expr: '100 * (tin * hin) / (tin * hin + tout * hout)', fmt: 'pct', note: 'Bila porsi input besar, menghemat konteks dan memakai caching paling berpengaruh.' },
            ] },
            { callout: 'Angka bawaan di kalkulator hanya contoh. Harga berubah dan berbeda antar model; selalu cek halaman harga resmi penyedia.', kind: 'info', title: 'Harga contoh' },

            { h2: 'Tujuh cara menghemat' },
            { w: 'cards', title: 'Ketuk untuk penjelasan', items: [
                { tag: '1', front: 'Pilih model sesuai tugas.', backTag: 'Cara', back: 'Klasifikasi, ekstraksi, dan ringkasan pendek sering cukup dengan model kecil yang jauh lebih murah. Simpan model besar untuk penalaran sulit. Uji dengan eval set.' },
                { tag: '2', front: 'Prompt caching.', backTag: 'Cara', back: 'Bagian awal prompt yang sama di setiap permintaan (system prompt panjang, dokumen acuan) bisa di-cache sehingga dibaca ulang dengan harga jauh lebih murah.' },
                { tag: '3', front: 'Batch untuk pekerjaan tidak mendesak.', backTag: 'Cara', back: 'Memproses ribuan dokumen semalam lewat Batch API biasanya mendapat potongan harga dibanding permintaan real-time.' },
                { tag: '4', front: 'Ringkas riwayat percakapan.', backTag: 'Cara', back: 'Setelah 10 giliran, ganti riwayat lama dengan ringkasan singkat.' },
                { tag: '5', front: 'Kirim potongan dokumen yang relevan saja.', backTag: 'Cara', back: 'RAG yang baik mengambil 3-5 potongan relevan, bukan seluruh PDF 80 halaman.' },
                { tag: '6', front: 'Batasi panjang output.', backTag: 'Cara', back: 'Atur max_tokens dan minta format ringkas. Output adalah bagian termahal.' },
                { tag: '7', front: 'Cache jawaban yang sama.', backTag: 'Cara', back: 'Pertanyaan yang sangat sering (jam buka, ongkir) bisa dijawab dari cache aplikasi atau FAQ tanpa memanggil model.' },
            ] },

            { h2: 'Pantau sejak hari pertama' },
            { ul: ['Simpan <code>input_tokens</code> dan <code>output_tokens</code> setiap permintaan ke log atau database.', 'Hitung biaya per pengguna dan per fitur, bukan hanya total.', 'Pasang batas pengeluaran dan peringatan di dashboard penyedia.', 'Batasi jumlah permintaan per pengguna per hari.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Mana yang biasanya lebih mahal per token?', options: ['Input', 'Output'], answer: 1, why: 'Menghasilkan token butuh komputasi lebih besar.' },
                { q: 'System prompt panjang yang sama di semua permintaan paling cocok dihemat dengan...', options: ['Prompt caching', 'Menaikkan max_tokens', 'Model lebih besar'], answer: 0, why: 'Bagian yang berulang bisa di-cache.' },
            ] },
        ],
        faq: [
            ['Bagaimana menghitung jumlah token sebelum mengirim?', 'Banyak penyedia menyediakan endpoint atau library untuk menghitung token. Sebagai perkiraan kasar, teks bahasa Indonesia sering memakai lebih banyak token per kata daripada bahasa Inggris.'],
            ['Apakah model open source lebih murah?', 'Tidak selalu. Menjalankan sendiri butuh GPU dan perawatan. Untuk volume kecil sampai menengah, API sering lebih murah secara total.'],
            ['Apakah langganan chatbot sama dengan API?', 'Tidak. Langganan aplikasi chat untuk pemakaian pribadi; API ditagih terpisah sesuai pemakaian di aplikasi Anda.'],
        ],
        sources: [
            ['Claude Docs: Prompt caching', 'https://platform.claude.com/docs/en/build-with-claude/prompt-caching'],
            ['Claude Docs: Batch processing', 'https://platform.claude.com/docs/en/build-with-claude/batch-processing'],
            ['Apa itu token dan context window (artikel terkait)', 'https://muchson.web.id/artikel/apa-itu-token-dan-context-window-pada-ai/'],
        ],
    },

    {
        slug: 'fine-tuning-rag-atau-prompting-mana-yang-dipilih',
        title: 'Fine-Tuning, RAG, atau Prompting? Mana yang Dipilih',
        description: 'Kapan cukup memperbaiki prompt, kapan perlu RAG, dan kapan fine-tuning masuk akal: perbedaan, biaya, contoh kasus, salah kaprah, dan urutan yang disarankan.',
        date: D, category: C, tags: ['fine-tuning', 'RAG', 'prompt engineering', 'LLM', 'kustomisasi AI'], cta: 'jasa',
        lead: '"Kita perlu melatih AI dengan data perusahaan kita." Kalimat ini sering muncul di awal proyek AI, dan sering kali yang dimaksud sebenarnya bukan fine-tuning. Memilih pendekatan yang salah bisa membuang waktu berbulan-bulan. Mari bedakan tiga cara menyesuaikan model.',
        body: [
            { h2: 'Tiga cara dalam satu analogi' },
            `Bayangkan Anda merekrut konsultan yang sangat pintar tetapi baru di perusahaan Anda:`,
            { table: { head: ['Cara', 'Analogi', 'Yang berubah'], rows: [['<b>Prompting</b>', 'Memberi arahan kerja yang jelas', 'Instruksi dan contoh di setiap permintaan'], ['<b>RAG</b>', 'Memberi akses ke lemari arsip, lalu ia membuka dokumen yang relevan sebelum menjawab', 'Pengetahuan yang dimasukkan saat menjawab'], ['<b>Fine-tuning</b>', 'Mengirimnya pelatihan intensif sampai kebiasaan kerjanya berubah', 'Bobot model itu sendiri']] } },

            { h2: 'Kesalahpahaman paling umum' },
            { callout: 'Fine-tuning bukan cara yang baik untuk "memasukkan fakta" seperti daftar harga, kebijakan retur, atau isi SOP. Fakta itu berubah, sulit diperbarui di bobot model, dan model tetap bisa mengarang. Untuk pengetahuan, gunakan RAG.', kind: 'warn', title: 'Fine-tuning ≠ menambah pengetahuan' },
            `Fine-tuning lebih cocok untuk mengubah <b>perilaku</b>: gaya bahasa yang sangat spesifik, format output yang konsisten, atau tugas sempit yang diulang jutaan kali dengan model kecil.`,

            { h2: 'Perbandingan' },
            { table: { head: ['Aspek', 'Prompting', 'RAG', 'Fine-tuning'], rows: [['Waktu mulai', 'Menit', 'Hari sampai minggu', 'Minggu'], ['Butuh data', 'Beberapa contoh', 'Dokumen sumber', 'Ratusan sampai ribuan contoh berkualitas'], ['Memperbarui pengetahuan', 'Edit prompt', 'Tambah/ubah dokumen', 'Latih ulang'], ['Menyebut sumber', 'Tidak', 'Bisa', 'Tidak'], ['Cocok untuk', 'Hampir semua awal proyek', 'Tanya jawab dokumen, CS, SOP', 'Gaya/format konsisten, tugas sempit bervolume tinggi']] } },

            { h2: 'Urutan yang disarankan' },
            { svg: 'flow', label: 'Tangga kustomisasi', steps: [{ t: '1. Prompt yang baik', d: 'instruksi + contoh' }, { t: '2. Evaluasi', d: 'ukur di kasus nyata' }, { t: '3. RAG', d: 'bila butuh pengetahuan khusus' }, { t: '4. Tool use', d: 'bila butuh data real-time' }, { t: '5. Fine-tuning', d: 'bila perilaku masih kurang' }], caption: 'Naik ke anak tangga berikutnya hanya bila evaluasi menunjukkan anak tangga sebelumnya tidak cukup.' },

            { h2: 'Tentukan untuk kasus Anda' },
            { w: 'cards', title: 'Ketuk untuk rekomendasi', items: [
                { tag: 'Kasus', front: 'Chatbot menjawab pertanyaan tentang 200 halaman SOP kantor.', backTag: 'Pilih', back: 'RAG. SOP berubah dan jawaban perlu menyebut dokumen sumbernya.' },
                { tag: 'Kasus', front: 'AI membuat deskripsi produk dengan gaya brand yang khas.', backTag: 'Pilih', back: 'Prompting dengan 3-5 contoh deskripsi terbaik. Fine-tuning hanya bila volumenya sangat besar dan gaya masih meleset.' },
                { tag: 'Kasus', front: 'Menjawab "stok frame X masih ada?"', backTag: 'Pilih', back: 'Tool use ke database stok. Data berubah setiap jam.' },
                { tag: 'Kasus', front: 'Mengklasifikasi jutaan tiket support ke 12 kategori dengan biaya serendah mungkin.', backTag: 'Pilih', back: 'Fine-tuning model kecil bisa masuk akal, setelah prompting pada model kecil diuji dan kurang akurat.' },
            ] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Daftar harga yang berubah tiap bulan sebaiknya diberikan ke AI lewat...', options: ['Fine-tuning', 'RAG atau tool use', 'Tidak perlu'], answer: 1, why: 'Pengetahuan yang berubah lebih mudah diperbarui di luar model.' },
                { q: 'Langkah pertama yang disarankan dalam proyek AI?', options: ['Fine-tuning', 'Prompt yang baik dan evaluasi', 'Membeli GPU'], answer: 1, why: 'Murah, cepat, dan sering sudah cukup.' },
            ] },
        ],
        faq: [
            ['Bisakah RAG dan fine-tuning digabung?', 'Bisa. Fine-tuning untuk gaya dan format, RAG untuk pengetahuan terbaru. Tetapi mulai dari satu pendekatan dulu.'],
            ['Berapa data yang dibutuhkan untuk fine-tuning?', 'Tergantung tugas dan penyedia. Kualitas contoh jauh lebih penting daripada jumlah; ratusan contoh bersih sering lebih baik daripada ribuan yang berantakan.'],
            ['Apakah context window yang besar menggantikan RAG?', 'Untuk dokumen kecil, memasukkan seluruh dokumen ke prompt bisa lebih sederhana. Untuk koleksi besar, RAG tetap lebih murah dan lebih terarah.'],
        ],
        sources: [
            ['Lewis et al. (2020): Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', 'https://arxiv.org/abs/2005.11401'],
            ['RAG adalah: cara AI menjawab dari dokumen (artikel terkait)', 'https://muchson.web.id/artikel/rag-adalah/'],
            ['Claude Docs: Prompt engineering overview', 'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview'],
        ],
    },

    {
        slug: 'vector-database-dan-pgvector-untuk-pemula',
        title: 'Vector Database dan pgvector untuk Pemula',
        description: 'Menyimpan dan mencari embedding dengan PostgreSQL dan pgvector: kolom vector, query kemiripan, index HNSW, filter metadata, dan kapan perlu database khusus.',
        date: D, category: C, tags: ['pgvector', 'vector database', 'embedding', 'PostgreSQL', 'RAG'], cta: 'jasa',
        lead: 'Setelah memahami embedding, pertanyaan berikutnya praktis: di mana menyimpannya, dan bagaimana mencari yang paling mirip dengan cepat? Anda tidak selalu butuh layanan baru. Bila aplikasi sudah memakai PostgreSQL, ekstensi pgvector memungkinkan pencarian semantik di database yang sama.',
        body: [
            { h2: 'Apa yang disimpan' },
            `Setiap potongan teks diubah model embedding menjadi daftar angka (vektor), misalnya 1.024 atau 1.536 angka. Teks yang maknanya mirip menghasilkan vektor yang berdekatan.`,
            { svg: 'flow', label: 'Pengindeksan dan pencarian', steps: [{ t: 'Potong dokumen', d: 'per paragraf / bagian' }, { t: 'Buat embedding', d: 'lewat API model embedding' }, { t: 'Simpan', d: 'teks + vektor + metadata' }, { t: 'Pertanyaan masuk', d: 'dibuat embedding juga' }, { t: 'Cari terdekat', d: 'ORDER BY jarak LIMIT 5' }] },

            { h2: 'Menyiapkan pgvector' },
            { code: "CREATE EXTENSION IF NOT EXISTS vector;\n\nCREATE TABLE potongan (\n  id         BIGSERIAL PRIMARY KEY,\n  dokumen_id BIGINT NOT NULL,\n  judul      TEXT,\n  isi        TEXT NOT NULL,\n  kategori   TEXT,\n  embedding  vector(1536) NOT NULL   -- sesuaikan dimensi model embedding Anda\n);" },
            `Ekstensi ini tersedia di banyak layanan PostgreSQL terkelola, termasuk Supabase, Neon, dan layanan cloud besar.`,

            { h2: 'Mencari yang paling mirip' },
            { code: "-- <=> jarak cosine, <-> jarak Euclidean (L2), <#> negatif inner product\nSELECT id, judul, isi, 1 - (embedding <=> $1) AS kemiripan\nFROM potongan\nORDER BY embedding <=> $1\nLIMIT 5;\n-- $1 = embedding dari pertanyaan pengguna" },
            { table: { head: ['Operator', 'Jarak', 'Catatan'], rows: [['<code>&lt;=&gt;</code>', 'Cosine', 'Paling umum untuk embedding teks'], ['<code>&lt;-&gt;</code>', 'L2 (Euclidean)', 'Jarak garis lurus'], ['<code>&lt;#&gt;</code>', 'Inner product (negatif)', 'Cepat bila vektor sudah dinormalisasi']] } },

            { h2: 'Index agar tetap cepat' },
            `Tanpa index, PostgreSQL membandingkan pertanyaan dengan <b>setiap</b> baris. Untuk ribuan baris masih cepat; untuk jutaan, butuh index perkiraan (approximate nearest neighbor).`,
            { code: "CREATE INDEX ON potongan USING hnsw (embedding vector_cosine_ops);" },
            { w: 'compare', title: 'Dua jenis index pgvector', tabs: [
                { label: 'HNSW', html: 'Graf berlapis. <b>Kelebihan:</b> hasil pencarian sangat baik dan cepat, bisa dibuat pada tabel kosong. <b>Kekurangan:</b> pembuatan index lebih lama dan butuh lebih banyak memori.' },
                { label: 'IVFFlat', html: 'Membagi vektor ke kelompok-kelompok. <b>Kelebihan:</b> lebih cepat dibuat dan hemat memori. <b>Kekurangan:</b> sebaiknya dibuat setelah data terisi, dan kualitas tergantung pengaturan jumlah kelompok.' },
            ] },
            { callout: 'Index perkiraan bisa sesekali melewatkan hasil terbaik. Itu kompromi kecepatan. Ukur kualitas pencarian dengan contoh pertanyaan nyata.', kind: 'info', title: 'Perkiraan, bukan pasti' },

            { h2: 'Filter metadata dan pencarian hybrid' },
            `Keunggulan memakai PostgreSQL: Anda bisa menggabungkan pencarian vektor dengan filter biasa dan hak akses.`,
            { code: "SELECT judul, isi\nFROM potongan\nWHERE kategori = 'kebijakan-retur'\n  AND dokumen_id IN (SELECT id FROM dokumen WHERE tim_id = $2)  -- hak akses\nORDER BY embedding <=> $1\nLIMIT 5;" },
            `Pencarian vektor kadang kurang tepat untuk kode produk atau nama spesifik ("FR-01"). <b>Pencarian hybrid</b> menggabungkan full-text search PostgreSQL dengan hasil vektor, lalu menggabungkan peringkatnya.`,

            { h2: 'Kapan perlu vector database khusus?' },
            { svg: 'versus', label: 'pgvector atau layanan khusus', left: { title: 'pgvector cukup', items: ['Sudah memakai PostgreSQL', 'Sampai jutaan vektor', 'Butuh JOIN dan filter hak akses', 'Ingin satu sistem backup'] }, right: { title: 'Pertimbangkan layanan khusus', items: ['Ratusan juta vektor ke atas', 'Lalu lintas pencarian sangat tinggi', 'Butuh fitur khusus (multi-tenant besar, sharding otomatis)', 'Tim siap mengelola sistem tambahan'] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Operator jarak cosine di pgvector adalah...', options: ['<->', '<=>', '<#>'], answer: 1, why: '<=> menghitung jarak cosine.' },
                { q: 'Kenapa pgvector menarik bagi aplikasi yang sudah memakai PostgreSQL?', options: ['Wajib dipakai', 'Bisa menggabungkan pencarian vektor dengan filter, JOIN, dan hak akses di satu database', 'Tidak butuh embedding'], answer: 1, why: 'Satu sistem, satu sumber kebenaran.' },
            ] },
        ],
        faq: [
            ['Berapa dimensi vektor yang harus dipakai?', 'Ikuti model embedding yang Anda pilih. Semua vektor dalam satu kolom harus berdimensi sama, dan pertanyaan harus dibuat embedding dengan model yang sama.'],
            ['Bagaimana bila saya ganti model embedding?', 'Embedding lama tidak cocok dengan model baru. Anda perlu membuat ulang embedding untuk semua potongan.'],
            ['Seberapa besar potongan teks yang ideal?', 'Umumnya beberapa ratus token per potongan dengan sedikit tumpang tindih. Uji dengan pertanyaan nyata; potongan terlalu besar membuat hasil kabur, terlalu kecil kehilangan konteks.'],
        ],
        sources: [
            ['pgvector (GitHub): open-source vector similarity search for Postgres', 'https://github.com/pgvector/pgvector'],
            ['Supabase Docs: pgvector', 'https://supabase.com/docs/guides/database/extensions/pgvector'],
            ['Apa itu embedding dan pencarian semantik (artikel terkait)', 'https://muchson.web.id/artikel/apa-itu-embedding-dan-pencarian-semantik/'],
        ],
    },

    {
        slug: 'chatbot-ai-layanan-pelanggan-yang-tidak-mengecewakan',
        title: 'Chatbot AI untuk Layanan Pelanggan yang Tidak Mengecewakan',
        description: 'Membangun chatbot AI customer service yang membantu: cakupan jelas, jawaban dari sumber resmi, eskalasi ke manusia, metrik, dan pelajaran dari kasus nyata.',
        date: D, category: C, tags: ['chatbot AI', 'customer service', 'layanan pelanggan', 'AI untuk bisnis', 'otomasi CS'], cta: 'jasa',
        lead: 'Semua orang pernah kesal dengan chatbot yang berputar-putar dan tidak pernah menyambungkan ke manusia. Chatbot AI bisa jauh lebih baik, tetapi juga bisa lebih berbahaya: ia bisa menjanjikan sesuatu yang tidak pernah ditawarkan perusahaan. Pengalaman saya mengajar Customer Success menunjukkan bahwa kunci keberhasilannya justru ada pada desain layanan, bukan pada modelnya.',
        body: [
            { h2: 'Pelajaran dari kasus Air Canada' },
            `Pada Februari 2024, Civil Resolution Tribunal di British Columbia, Kanada, memutuskan Air Canada harus membayar kompensasi kepada penumpang bernama Jake Moffatt. Chatbot di situs maskapai memberinya informasi keliru tentang tarif duka (bereavement fare). Maskapai berargumen chatbot adalah "entitas terpisah", tetapi tribunal menolak: perusahaan bertanggung jawab atas semua informasi di situsnya, termasuk dari chatbot.`,
            { callout: 'Jawaban chatbot Anda adalah ucapan perusahaan Anda. Rancang seolah setiap jawabannya bisa dikutip pelanggan sebagai janji.', kind: 'bad', title: 'Pelajaran utama' },

            { h2: 'Lima prinsip desain' },
            { ol: ['<b>Cakupan sempit dan jelas.</b> Mulai dari 10-20 pertanyaan paling sering: jam buka, status pesanan, cara retur, lokasi. Tolak dengan sopan hal di luar cakupan.', '<b>Jawab dari sumber resmi.</b> Gunakan RAG dari dokumen kebijakan yang dikelola tim, dan alat untuk data real-time (status pesanan). Jangan biarkan model menjawab dari "pengetahuan umum".', '<b>Eskalasi yang mudah.</b> Tombol "bicara dengan manusia" selalu terlihat, dan otomatis muncul ketika pelanggan marah, bertanya dua kali, atau menyangkut uang.', '<b>Jujur bahwa ini AI.</b> Pelanggan berhak tahu sedang bicara dengan mesin.', '<b>Serah terima yang mulus.</b> Agen manusia menerima ringkasan percakapan, sehingga pelanggan tidak perlu mengulang cerita.'] },
            { svg: 'flow', label: 'Alur percakapan yang sehat', steps: [{ t: 'Pertanyaan', d: 'pelanggan' }, { t: 'Klasifikasi', d: 'dalam cakupan?' }, { t: 'Jawab dari sumber', d: 'kebijakan / sistem' }, { t: 'Cek kepuasan', d: '"Apakah ini membantu?"' }, { t: 'Eskalasi bila perlu', d: '+ ringkasan ke agen' }] },

            { h2: 'Contoh system prompt' },
            { code: 'Kamu asisten layanan pelanggan Toko X.\n- Jawab HANYA berdasarkan dokumen di <kebijakan> dan hasil alat.\n- Bila jawabannya tidak ada, katakan tidak tahu dan tawarkan admin.\n- Jangan pernah menjanjikan diskon, refund, atau pengecualian kebijakan.\n- Untuk keluhan, permintaan refund, atau pelanggan yang kesal:\n  minta maaf singkat, lalu panggil alat eskalasi_ke_admin.\n- Sebutkan bahwa kamu asisten AI bila ditanya.\n- Bahasa Indonesia sopan dan singkat (maksimal 4 kalimat).' },

            { h2: 'Mengukur keberhasilan' },
            { table: { head: ['Metrik', 'Arti', 'Hati-hati'], rows: [['Containment / resolution rate', 'Persentase percakapan selesai tanpa manusia', 'Bisa naik palsu bila eskalasi dipersulit'], ['CSAT setelah chat', 'Kepuasan pelanggan', 'Bandingkan dengan CSAT agen manusia'], ['Waktu sampai jawaban', 'Seberapa cepat terbantu', ''], ['Tingkat eskalasi dan alasannya', 'Topik yang belum bisa ditangani', 'Sumber perbaikan berikutnya'], ['Jawaban salah per 100 percakapan', 'Dari sampel yang ditinjau manusia', 'Metrik paling penting untuk risiko']] } },
            { w: 'checklist', title: 'Sebelum chatbot diluncurkan', items: ['Daftar topik dalam dan di luar cakupan tertulis.', 'Sumber jawaban adalah dokumen resmi yang punya pemilik.', 'Tombol ke manusia selalu ada.', 'Chatbot tidak bisa menjanjikan uang atau pengecualian.', 'Ada eval set 50+ pertanyaan nyata termasuk yang sulit.', 'Data pribadi pelanggan tidak bocor ke pelanggan lain.', 'Tim CS dilatih membaca ringkasan dan menindaklanjuti.', 'Ada jadwal meninjau percakapan setiap minggu.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Apa inti putusan kasus chatbot Air Canada?', options: ['Chatbot entitas hukum terpisah', 'Perusahaan bertanggung jawab atas informasi dari chatbot-nya', 'Pelanggan harus membaca seluruh situs'], answer: 1, why: 'Tribunal menolak argumen bahwa chatbot terpisah dari perusahaan.' },
                { q: 'Metrik containment rate bisa menyesatkan bila...', options: ['Eskalasi ke manusia dipersulit', 'Pelanggan puas', 'Chatbot cepat'], answer: 0, why: 'Pelanggan yang menyerah terlihat seperti "selesai".' },
            ] },
        ],
        faq: [
            ['Apakah chatbot AI menggantikan tim CS?', 'Lebih realistis sebagai lapisan pertama untuk pertanyaan berulang, sehingga tim manusia fokus pada kasus yang butuh empati dan keputusan.'],
            ['Bisakah dipasang di WhatsApp?', 'Bisa melalui WhatsApp Business Platform resmi dan penyedia yang terdaftar. Hindari layanan tidak resmi yang berisiko membuat nomor diblokir.'],
            ['Bagaimana dengan bahasa daerah dan singkatan?', 'Model modern cukup baik memahami bahasa campuran dan singkatan. Tambahkan contoh nyata ke eval set agar kualitasnya terukur.'],
        ],
        sources: [
            ['Moffatt v. Air Canada, 2024 BCCRT 149 (putusan)', 'https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do'],
            ['Global News: Air Canada chatbot error, B.C. ruling', 'https://globalnews.ca/news/10297307/air-canada-chatbot-error-bc-ruling/'],
            ['Customer Success vs Customer Service (artikel terkait)', 'https://muchson.web.id/artikel/customer-success-adalah-bedanya-dengan-customer-service/'],
        ],
    },
];
