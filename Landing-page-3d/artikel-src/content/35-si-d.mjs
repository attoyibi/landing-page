const D = '2026-10-23';
const C = 'Sistem Informasi';
const py = String.raw;

const REF_LAUDON = ['Kenneth C. Laudon dan Jane P. Laudon, Management Information Systems: Managing the Digital Firm (Pearson)', ''];
const REF_SOMMER = ['Ian Sommerville, Software Engineering (Pearson)', ''];
const REF_ISACA = ['ISACA: COBIT', 'https://www.isaca.org/resources/cobit'];
const REF_ISO27 = ['ISO/IEC 27001: Information security management systems', 'https://www.iso.org/standard/27001'];
const REF_NIELSEN = ['Nielsen Norman Group: 10 Usability Heuristics for User Interface Design', 'https://www.nngroup.com/articles/ten-usability-heuristics/'];

export default [
    {
        slug: 'tata-kelola-teknologi-informasi-cobit-itil-dan-iso-27001',
        title: 'Tata Kelola TI: COBIT, ITIL, dan ISO 27001',
        description: 'Pahami tata kelola dan manajemen TI: perbedaan governance dan management, kerangka COBIT, ITIL untuk layanan TI, ISO 27001 untuk keamanan, serta cara memilih dan memadukannya.',
        date: D, category: C, level: 'Menengah', tags: ['IT governance', 'COBIT', 'ITIL', 'ISO 27001', 'manajemen layanan'], cta: 'none',
        prereq: ['konsep SI', 'keamanan informasi'],
        lead: 'Setelah organisasi memiliki banyak sistem informasi, muncul pertanyaan baru: apakah investasi TI benar-benar mendukung tujuan bisnis, apakah risikonya terkendali, dan apakah layanannya andal? Tata kelola TI menjawabnya dengan kerangka kerja dan standar yang telah teruji.',
        body: [
            { objectives: ['membedakan tata kelola (governance) dan manajemen TI', 'menjelaskan tujuan dan struktur COBIT', 'menjelaskan siklus layanan ITIL dan konsep incident, problem, change', 'menjelaskan ISO/IEC 27001 dan siklus PDCA pada ISMS', 'memilih kerangka yang sesuai dan memahami cara memadukannya'] },
            { h2: 'Governance dan management' },
            { w: 'compare', title: 'Dua hal yang berbeda', tabs: [{ label: 'Governance (tata kelola)', html: 'Dilakukan oleh dewan dan eksekutif. <b>Mengevaluasi, mengarahkan, dan memantau</b>: apakah TI menghasilkan nilai, risiko diterima atau tidak, sumber daya cukup?' }, { label: 'Management (manajemen)', html: 'Dilakukan oleh manajer TI. <b>Merencanakan, membangun, menjalankan, dan memantau</b> kegiatan untuk mencapai arahan yang ditetapkan tata kelola.' }] },
            { svg: 'flow', label: 'Hubungan keduanya', steps: [{ t: 'Pemangku kepentingan', d: 'kebutuhan dan harapan bisnis' }, { t: 'Governance', d: 'evaluasi, arahkan, pantau' }, { t: 'Management', d: 'rencanakan, bangun, jalankan, pantau' }, { t: 'Hasil', d: 'nilai bisnis dari TI dengan risiko terkendali' }] },
            { h2: 'COBIT: apa yang perlu dikendalikan' },
            `COBIT (Control Objectives for Information and Related Technologies) dari ISACA adalah kerangka tata kelola dan manajemen TI perusahaan. Ia menyediakan sekumpulan <b>tujuan tata kelola dan manajemen</b> yang dikelompokkan dalam domain, beserta panduan tingkat kapabilitas proses.`,
            { table: { head: ['Domain COBIT 2019', 'Fokus', 'Contoh tujuan'], rows: [['EDM: Evaluate, Direct and Monitor', 'Tata kelola', 'Memastikan realisasi manfaat, optimasi risiko'], ['APO: Align, Plan and Organize', 'Perencanaan dan organisasi', 'Strategi TI, arsitektur, manajemen risiko, anggaran'], ['BAI: Build, Acquire and Implement', 'Pembangunan dan perubahan', 'Pengelolaan proyek, kebutuhan, perubahan'], ['DSS: Deliver, Service and Support', 'Operasi dan layanan', 'Insiden, masalah, keamanan operasional'], ['MEA: Monitor, Evaluate and Assess', 'Pemantauan', 'Kinerja, kepatuhan, jaminan']] } },
            { callout: 'COBIT menjawab <b>"apa"</b> yang perlu dikelola dan diukur, bukan <b>"bagaimana"</b> mengerjakannya secara rinci. Untuk caranya, organisasi memadukan dengan ITIL, ISO 27001, atau praktik lain.', kind: 'info', title: 'Posisi COBIT' },
            { h2: 'ITIL: mengelola layanan TI' },
            `ITIL (Information Technology Infrastructure Library) mengumpulkan praktik terbaik untuk <b>manajemen layanan TI</b>. Versi 4 (2019) memandang layanan sebagai sistem nilai (service value system) yang menciptakan nilai bersama pelanggan.`,
            { table: { head: ['Praktik', 'Pertanyaan', 'Contoh'], rows: [['Incident management', 'Bagaimana memulihkan layanan secepatnya?', 'Server email mati: pulihkan dulu, cari sebab kemudian'], ['Problem management', 'Apa akar penyebab insiden berulang?', 'Analisis mengapa disk penuh tiap Senin'], ['Change enablement', 'Bagaimana perubahan dilakukan tanpa merusak layanan?', 'Persetujuan dan jadwal untuk pembaruan basis data'], ['Service request management', 'Bagaimana melayani permintaan rutin?', 'Pembuatan akun baru, permintaan perangkat'], ['Service desk', 'Titik kontak tunggal bagi pengguna', 'Helpdesk dengan sistem tiket']] } },
            { svg: 'cycle', label: 'Siklus layanan', items: ['Pelanggan mengalami masalah', 'Service desk mencatat tiket', 'Insiden dipulihkan', 'Problem management mencari akar masalah', 'Perubahan permanen dikelola', 'Pengetahuan dicatat dan diperbaiki'], caption: 'Perbaikan berkelanjutan: masalah yang sama tidak boleh berulang tanpa pembelajaran.' },
            { h2: 'ISO/IEC 27001: sistem manajemen keamanan informasi' },
            `ISO/IEC 27001 menetapkan persyaratan <b>ISMS</b> (Information Security Management System). Organisasi dapat disertifikasi oleh badan sertifikasi independen. Intinya adalah manajemen risiko: mengidentifikasi aset dan ancaman, memilih kontrol, lalu memperbaiki terus menerus lewat siklus PDCA.`,
            { svg: 'cycle', label: 'Siklus PDCA pada ISMS', items: ['Plan: tetapkan ruang lingkup, nilai risiko, pilih kontrol', 'Do: terapkan kontrol dan prosedur', 'Check: pantau, ukur, audit internal', 'Act: perbaiki berdasarkan temuan'] },
            { table: { head: ['Aspek', 'COBIT', 'ITIL', 'ISO 27001'], rows: [['Fokus', 'Tata kelola dan manajemen TI menyeluruh', 'Manajemen layanan TI', 'Keamanan informasi'], ['Pertanyaan utama', 'Apakah TI menciptakan nilai dan risikonya terkendali?', 'Apakah layanan andal dan terus membaik?', 'Apakah informasi terlindungi (CIA)?'], ['Sertifikasi organisasi', 'Tidak (ada sertifikasi individu)', 'Standar terkait: ISO/IEC 20000', 'Ya, ISO/IEC 27001'], ['Pengguna khas', 'Dewan, auditor, CIO', 'Operasi TI, helpdesk', 'CISO, tim keamanan, kepatuhan']] } },
            { h2: 'Memadukan dan menyesuaikan' },
            { ul: ['Mulai dari <b>tujuan bisnis</b>, bukan dari kerangka. Kerangka adalah alat.', 'Pilih bagian yang relevan; jangan mengadopsi semuanya sekaligus (perusahaan kecil tidak butuh seluruh proses COBIT).', 'Gunakan COBIT untuk peta tata kelola, ITIL untuk operasi layanan, ISO 27001 untuk keamanan; tumpang tindih wajar.', 'Ukur dan tinjau: kerangka tanpa metrik hanya menjadi dokumen.', 'Di Indonesia, instansi pemerintah juga mengacu pada regulasi seperti SPBE (Perpres 95/2018) dan ketentuan sektor (OJK, BI).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Siapa yang bertanggung jawab pada governance dalam COBIT?', options: ['Dewan dan eksekutif', 'Teknisi helpdesk', 'Pengguna akhir'], answer: 0, why: 'Mereka mengevaluasi, mengarahkan, dan memantau.' }, { q: 'Praktik ITIL yang mencari akar penyebab insiden berulang?', options: ['Problem management', 'Incident management', 'Service desk'], answer: 0, why: 'Incident memulihkan, problem mencegah berulang.' }, { q: 'ISO 27001 berfokus pada...', options: ['Keamanan informasi', 'Pengembangan perangkat lunak', 'Akuntansi'], answer: 0, why: 'Standar ISMS.' }] },
            { exercise: [['Server kampus mati dan layanan KRS terhenti. Mana tindakan incident management, mana problem management?', 'Incident: memulihkan layanan secepatnya (restart, pindah ke cadangan). Problem: menyelidiki penyebab akar (kapasitas, bug) dan mencegah kejadian ulang.'], ['Mengapa perubahan produksi memerlukan change enablement?', 'Untuk menilai risiko, menjadwalkan, dan memiliki rencana mundur sehingga perubahan tidak merusak layanan.'], ['Tuliskan satu pertanyaan tata kelola dan satu pertanyaan manajemen.', 'Tata kelola: apakah investasi sistem ERP sejalan dengan strategi 5 tahun? Manajemen: bagaimana jadwal migrasi data minggu depan?'], ['Mengapa siklus PDCA penting dalam ISMS?', 'Ancaman dan bisnis berubah; keamanan harus dinilai ulang dan diperbaiki terus menerus.']] },
            { summary: ['Governance mengarahkan dan memantau; management melaksanakan.', 'COBIT: apa yang dikendalikan; ITIL: bagaimana layanan dikelola; ISO 27001: bagaimana keamanan dikelola dan disertifikasi.', 'Incident memulihkan, problem mencegah berulang, change menjaga stabilitas.', 'Adaptasi kerangka sesuai ukuran dan tujuan organisasi.'] },
        ],
        faq: [['Apakah ITIL dan COBIT bersaing?', 'Tidak. COBIT bersifat tata kelola dan lebih luas; ITIL lebih rinci pada layanan. Banyak organisasi memakai keduanya.'], ['Apa itu SPBE?', 'Sistem Pemerintahan Berbasis Elektronik di Indonesia, diatur dalam Perpres Nomor 95 Tahun 2018, yang mengarahkan tata kelola TI instansi pemerintah.'], ['Apakah UMKM perlu sertifikasi ISO 27001?', 'Tidak selalu. Mulailah dari praktik dasar (cadangan, MFA, kebijakan akses). Sertifikasi relevan bila pelanggan atau regulasi menuntutnya.']],
        sources: [REF_ISACA, REF_ISO27, ['AXELOS/PeopleCert: ITIL 4', 'https://www.axelos.com/certifications/itil-service-management'], ['Weill dan Ross, IT Governance (Harvard Business School Press, 2004)', '']],
    },

    {
        slug: 'audit-sistem-informasi-tujuan-tahapan-dan-bukti',
        title: 'Audit Sistem Informasi: Tujuan, Tahapan, dan Bukti',
        description: 'Pelajari audit SI: tujuan, jenis kontrol, tahapan, bukti, sampling, dan penulisan temuan, dengan contoh analisis data transaksi memakai Python.',
        date: D, category: C, level: 'Menengah', tags: ['audit SI', 'kontrol', 'bukti audit', 'sampling', 'kepatuhan'], cta: 'none',
        prereq: ['tata kelola TI', 'keamanan informasi'],
        lead: 'Audit sistem informasi menilai apakah sistem melindungi aset, menjaga integritas data, mencapai tujuan organisasi, dan beroperasi secara efektif dan efisien. Auditor tidak mencari siapa yang salah, melainkan memberi keyakinan independen kepada manajemen bahwa kontrol bekerja, atau menunjukkan di mana ia tidak bekerja.',
        body: [
            { objectives: ['menjelaskan tujuan dan jenis audit SI', 'membedakan kontrol preventif, detektif, dan korektif serta kontrol umum dan aplikasi', 'menguraikan tahapan audit dari perencanaan sampai pelaporan', 'mengumpulkan dan menilai bukti audit', 'menyusun temuan berstruktur: kondisi, kriteria, sebab, akibat, rekomendasi'] },
            { h2: 'Tujuan audit SI' },
            { w: 'cards', title: 'Empat tujuan (ketuk kartu)', items: [{ tag: 'Keamanan aset', front: 'Melindungi aset informasi', backTag: 'Pertanyaan', back: 'Apakah akses terbatas pada yang berwenang dan data terlindungi dari kehilangan?' }, { tag: 'Integritas data', front: 'Data akurat dan lengkap', backTag: 'Pertanyaan', back: 'Apakah transaksi diproses lengkap, benar, dan tepat waktu?' }, { tag: 'Efektivitas', front: 'Sistem mencapai tujuan bisnis', backTag: 'Pertanyaan', back: 'Apakah sistem memenuhi kebutuhan pengguna dan tujuan organisasi?' }, { tag: 'Efisiensi', front: 'Sumber daya dipakai hemat', backTag: 'Pertanyaan', back: 'Apakah kapasitas dan biaya dikelola dengan wajar?' }] },
            { h2: 'Jenis kontrol' },
            { table: { head: ['Berdasarkan waktu', 'Fungsi', 'Contoh'], rows: [['Preventif', 'Mencegah masalah terjadi', 'Kata sandi, pemisahan tugas, validasi input, pelatihan'], ['Detektif', 'Mengenali masalah yang telah terjadi', 'Log audit, rekonsiliasi, alarm intrusi, review rutin'], ['Korektif', 'Memulihkan dan memperbaiki', 'Cadangan dan pemulihan, rencana tanggap insiden, patch']] } },
            { table: { head: ['Berdasarkan cakupan', 'Cakupan', 'Contoh'], rows: [['Kontrol umum (ITGC)', 'Seluruh lingkungan TI', 'Manajemen akses, manajemen perubahan, operasi, cadangan'], ['Kontrol aplikasi', 'Satu aplikasi dan transaksinya', 'Validasi input, total kendali, jejak audit, otorisasi transaksi']] } },
            { h2: 'Tahapan audit' },
            { svg: 'flow', label: 'Tahapan audit SI', steps: [{ t: 'Perencanaan', d: 'ruang lingkup, tujuan, risiko, jadwal, tim' }, { t: 'Pemahaman', d: 'proses, sistem, kontrol yang ada' }, { t: 'Pengujian', d: 'uji desain dan efektivitas kontrol' }, { t: 'Evaluasi', d: 'menilai bukti dan merumuskan temuan' }, { t: 'Pelaporan', d: 'laporan dan rekomendasi' }, { t: 'Tindak lanjut', d: 'memastikan perbaikan dilakukan' }] },
            { callout: 'Auditor harus <b>independen</b> dari yang diaudit, objektif, dan profesional. Standar umum antara lain ISACA IT Audit Framework (ITAF) dan, untuk audit internal, standar IIA. Sertifikasi populer: CISA (Certified Information Systems Auditor).', kind: 'info', title: 'Prinsip' },
            { h2: 'Bukti audit' },
            { table: { head: ['Jenis bukti', 'Contoh', 'Kekuatan'], rows: [['Pengamatan langsung', 'Melihat petugas menjalankan prosedur cadangan', 'Kuat, tetapi hanya saat diamati'], ['Pemeriksaan dokumen dan konfigurasi', 'Kebijakan sandi, pengaturan server, tangkapan layar', 'Kuat bila dapat diverifikasi'], ['Pengujian ulang (re-performance)', 'Auditor mencoba mengulang prosedur dan menilai hasilnya', 'Sangat kuat'], ['Analisis data', 'Menganalisis seluruh log atau transaksi', 'Sangat kuat dan menjangkau populasi penuh'], ['Wawancara', 'Pernyataan staf', 'Paling lemah bila berdiri sendiri; perlu dikonfirmasi']] } },
            { h2: 'Contoh: analisis data transaksi' },
            `Pada audit modern, auditor sering menganalisis <i>seluruh populasi</i> transaksi dengan skrip, bukan hanya sampel. Contoh: menguji kontrol pemisahan tugas dan transaksi mencurigakan pada data pembayaran.`,
            { code: py`import csv, io, collections

data = """id,pembuat,penyetuju,jumlah,tanggal,hari
1,rina,dodi,2500000,2026-10-05,Senin
2,rina,rina,4800000,2026-10-06,Selasa
3,eko,dodi,9990000,2026-10-07,Rabu
4,eko,rina,1200000,2026-10-10,Sabtu
5,dodi,eko,9950000,2026-10-12,Senin
6,rina,dodi,9980000,2026-10-13,Selasa
7,eko,eko,700000,2026-10-14,Rabu
"""
baris = list(csv.DictReader(io.StringIO(data)))
BATAS = 10_000_000          # ambang persetujuan direktur

print("1. Pelanggaran pemisahan tugas (pembuat = penyetuju):")
for b in baris:
    if b["pembuat"] == b["penyetuju"]:
        print("  - transaksi", b["id"], b["pembuat"], int(b["jumlah"]))

print("2. Transaksi tepat di bawah ambang (kemungkinan pemecahan nilai):")
for b in baris:
    j = int(b["jumlah"])
    if BATAS * 0.99 <= j < BATAS:
        print("  - transaksi", b["id"], j)

print("3. Transaksi di akhir pekan:")
for b in baris:
    if b["hari"] in ("Sabtu", "Minggu"):
        print("  - transaksi", b["id"], b["tanggal"], b["hari"])

print("4. Ringkasan per pembuat:", dict(collections.Counter(b["pembuat"] for b in baris)))`, lang: 'python', run: true, caption: 'Hasil analisis bukanlah tuduhan, melainkan indikator yang perlu ditelusuri ke dokumen pendukung. Auditor harus mengonfirmasi penyebab sebelum menyimpulkan.' },
            { h2: 'Sampling' },
            { table: { head: ['Metode', 'Cara', 'Kapan'], rows: [['Acak sederhana', 'Setiap item punya peluang sama', 'Populasi seragam'], ['Sistematis', 'Setiap item ke-k setelah awal acak', 'Daftar berurutan'], ['Stratifikasi', 'Bagi populasi dalam kelompok lalu sampel tiap kelompok', 'Populasi beragam (nilai kecil dan besar)'], ['Berbasis risiko (judgmental)', 'Memilih item berisiko tinggi', 'Fokus pada area bermasalah (tidak dapat digeneralisasi)']] } },
            { h2: 'Menulis temuan' },
            { code: 'Kondisi    : Tiga akun mantan karyawan masih aktif 60 hari setelah resign.\nKriteria   : Kebijakan Keamanan No. 4.2: akun dinonaktifkan paling lambat 1 hari kerja setelah pemutusan hubungan kerja.\nSebab      : Tidak ada pemberitahuan otomatis dari HR ke tim TI.\nAkibat     : Risiko akses tidak sah ke data pelanggan; ketidakpatuhan terhadap kebijakan.\nRekomendasi: Integrasikan proses off-boarding HR dengan penonaktifan akun; tinjau akun aktif setiap bulan.\nTanggapan manajemen: Disetujui; target selesai 31 Desember.', lang: 'text', caption: 'Format lima unsur (kondisi, kriteria, sebab, akibat, rekomendasi) membuat temuan jelas dan dapat ditindaklanjuti.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Log audit yang dikaji berkala termasuk kontrol...', options: ['Detektif', 'Preventif', 'Korektif'], answer: 0, why: 'Mengenali kejadian yang sudah terjadi.' }, { q: 'Bukti yang paling lemah bila berdiri sendiri?', options: ['Wawancara', 'Pengujian ulang', 'Analisis seluruh data'], answer: 0, why: 'Perlu dikonfirmasi bukti lain.' }, { q: 'Unsur temuan audit yang menjelaskan standar yang seharusnya dipenuhi?', options: ['Kriteria', 'Akibat', 'Sebab'], answer: 0, why: 'Kriteria adalah ukuran pembanding.' }] },
            { exercise: [['Klasifikasikan: (a) pelatihan keamanan, (b) cadangan harian, (c) peringatan login gagal berulang.', '(a) preventif, (b) korektif, (c) detektif.'], ['Mengapa auditor harus independen?', 'Agar penilaiannya objektif dan dapat dipercaya manajemen dan pemangku kepentingan.'], ['Rancang pengujian untuk kontrol "akun mantan karyawan dinonaktifkan tepat waktu".', 'Ambil daftar karyawan keluar dari HR, cocokkan dengan daftar akun aktif dan waktu penonaktifan, hitung keterlambatan.'], ['Apa kelemahan sampling berbasis risiko?', 'Hasilnya tidak dapat digeneralisasi ke seluruh populasi karena pemilihan tidak acak.']] },
            { summary: ['Audit SI memberi keyakinan independen atas keamanan, integritas, efektivitas, efisiensi.', 'Kontrol: preventif, detektif, korektif; umum dan aplikasi.', 'Tahap: perencanaan, pemahaman, pengujian, evaluasi, pelaporan, tindak lanjut.', 'Bukti harus cukup dan andal; analisis data memperluas cakupan.', 'Temuan: kondisi, kriteria, sebab, akibat, rekomendasi.'] },
        ],
        faq: [['Apa beda audit internal dan eksternal?', 'Audit internal dilakukan unit di dalam organisasi untuk membantu manajemen; audit eksternal oleh pihak independen di luar organisasi, misalnya untuk laporan keuangan atau sertifikasi.'], ['Apa itu penetration test?', 'Pengujian keamanan dengan mensimulasikan serangan secara terotorisasi. Ia melengkapi audit tetapi bukan pengganti.'], ['Bagaimana memulai karier audit SI?', 'Pelajari kontrol TI, kerangka COBIT dan ISO 27001, analisis data, dan pertimbangkan sertifikasi CISA.']],
        sources: [['ISACA: IT Audit (termasuk kerangka ITAF)', 'https://www.isaca.org/resources/it-audit'], REF_ISACA, ['Ron Weber, Information Systems Control and Audit (Prentice Hall)', ''], REF_LAUDON],
    },

    {
        slug: 'studi-kelayakan-sistem-informasi-biaya-manfaat-roi-dan-npv',
        title: 'Studi Kelayakan SI: Biaya-Manfaat, ROI, dan NPV',
        description: 'Pelajari studi kelayakan SI: aspek TELOS, biaya dan manfaat, ROI, payback, NPV, dan analisis sensitivitas, dengan kalkulator dan kode Python.',
        date: D, category: C, level: 'Menengah', tags: ['studi kelayakan', 'ROI', 'NPV', 'payback period', 'analisis biaya manfaat'], cta: 'none',
        prereq: ['SDLC'],
        lead: 'Sebelum menginvestasikan waktu dan uang pada sistem baru, organisasi bertanya: apakah ini layak? Studi kelayakan menjawab dari beberapa sudut: bisakah dibangun, akankah dipakai, apakah menguntungkan, dan sempatkah diselesaikan. Bagian ekonomi memakai hitungan sederhana yang sangat berguna.',
        body: [
            { objectives: ['menjelaskan aspek kelayakan TELOS (teknis, ekonomi, legal, operasional, jadwal)', 'mengklasifikasikan biaya dan manfaat (berwujud dan tak berwujud, satu kali dan berulang)', 'menghitung ROI dan payback period', 'menghitung NPV dengan nilai waktu uang', 'menyusun rekomendasi kelayakan dengan analisis sensitivitas'] },
            { h2: 'Lima aspek kelayakan (TELOS)' },
            { table: { head: ['Aspek', 'Pertanyaan', 'Contoh pemeriksaan'], rows: [['Teknis', 'Apakah teknologi dan keahlian tersedia?', 'Tim menguasai teknologi; infrastruktur memadai'], ['Ekonomi', 'Apakah manfaat melebihi biaya?', 'ROI, NPV, payback'], ['Legal', 'Apakah memenuhi hukum dan kontrak?', 'Perlindungan data pribadi, lisensi'], ['Operasional', 'Apakah akan dipakai dan cocok dengan proses?', 'Penerimaan pengguna, kesiapan organisasi'], ['Schedule (jadwal)', 'Dapatkah diselesaikan tepat waktu?', 'Tenggat regulasi, ketersediaan sumber daya']] } },
            { h2: 'Biaya dan manfaat' },
            { w: 'compare', title: 'Klasifikasi', tabs: [{ label: 'Biaya', html: '<b>Sekali (investasi)</b>: perangkat keras, lisensi awal, pengembangan, migrasi data, pelatihan. <b>Berulang (operasional)</b>: langganan, pemeliharaan, gaji tim, hosting, dukungan. <b>Tersembunyi</b>: gangguan produktivitas saat transisi, lembur, perubahan proses.' }, { label: 'Manfaat', html: '<b>Berwujud</b>: penghematan biaya, pendapatan baru, pengurangan kesalahan yang dapat diukur. <b>Tak berwujud</b>: kepuasan pelanggan, citra, pengambilan keputusan lebih baik; perlu diperkirakan atau dicatat terpisah.' }] },
            { h2: 'ROI dan payback period' },
            { math: 'ROI = (Total manfaat − Total biaya) / Total biaya × 100%' },
            { math: 'Payback period = waktu sampai manfaat kumulatif menutup biaya investasi' },
            { h2: 'Nilai waktu uang dan NPV' },
            `Rp1 juta hari ini lebih berharga daripada Rp1 juta tiga tahun lagi, karena bisa diinvestasikan atau tergerus inflasi. <b>NPV</b> (Net Present Value) menjumlahkan arus kas masa depan setelah didiskon ke nilai sekarang dengan tingkat diskonto <i>r</i>.`,
            { math: 'NPV = −I₀ + Σ ( Arus kas ke-t / (1 + r)ᵗ ),  t = 1..n' },
            { code: py`def npv(r, investasi, arus):
    return -investasi + sum(a / (1 + r) ** t for t, a in enumerate(arus, 1))

def payback(investasi, arus):
    kumulatif = 0
    for t, a in enumerate(arus, 1):
        if kumulatif + a >= investasi:
            return t - 1 + (investasi - kumulatif) / a       # interpolasi linear dalam tahun
        kumulatif += a
    return None

investasi = 500_000_000
manfaat = [150_000_000, 220_000_000, 260_000_000, 260_000_000, 260_000_000]    # penghematan bersih per tahun
biaya_operasi = [40_000_000] * 5
arus = [m - b for m, b in zip(manfaat, biaya_operasi)]

print("arus kas bersih per tahun:", arus)
total_manfaat, total_biaya = sum(manfaat), investasi + sum(biaya_operasi)
print(f"ROI 5 tahun     : {(total_manfaat - total_biaya) / total_biaya * 100:.1f}%")
print(f"payback period  : {payback(investasi, arus):.2f} tahun")
for r in (0.08, 0.12, 0.20):
    print(f"NPV pada r={r:.0%}  : Rp{npv(r, investasi, arus):,.0f}")`, lang: 'python', run: true, caption: 'NPV positif berarti proyek menambah nilai pada tingkat diskonto tersebut. Perhatikan NPV turun ketika r naik: tingkat diskonto yang lebih tinggi menghukum manfaat yang datang kemudian.' },
            { w: 'calc', title: 'Hitung NPV sederhana', desc: 'Satu arus kas bersih sama setiap tahun. Ubah investasi, arus kas, lama proyek, dan tingkat diskonto.', inputs: [{ id: 'I', label: 'Investasi awal', value: 500, min: 50, max: 2000, step: 10, unit: 'juta Rp' }, { id: 'A', label: 'Arus kas bersih per tahun', value: 180, min: 10, max: 800, step: 10, unit: 'juta Rp' }, { id: 'n', label: 'Lama proyek', value: 5, min: 1, max: 10, step: 1, unit: 'tahun' }, { id: 'r', label: 'Tingkat diskonto', value: 12, min: 1, max: 30, step: 1, unit: '%' }], outputs: [{ label: 'NPV', expr: '-I + A * (1 - Math.pow(1 + r/100, -n)) / (r/100)', fmt: 'num', unit: 'juta Rp', big: true }, { label: 'Payback sederhana', expr: 'I / A', fmt: 'num', unit: 'tahun' }] },
            { h2: 'Analisis sensitivitas' },
            `Estimasi manfaat selalu tidak pasti. Uji bagaimana kesimpulan berubah bila asumsi bergeser: manfaat 30% lebih kecil, biaya 20% lebih besar, penundaan setahun.`,
            { code: py`def npv(r, investasi, arus):
    return -investasi + sum(a / (1 + r) ** t for t, a in enumerate(arus, 1))

investasi = 500_000_000
dasar = [110_000_000, 180_000_000, 220_000_000, 220_000_000, 220_000_000]
for nama, faktor_manfaat, faktor_investasi in [("dasar", 1.0, 1.0), ("manfaat -30%", 0.7, 1.0), ("investasi +20%", 1.0, 1.2), ("keduanya buruk", 0.7, 1.2)]:
    arus = [a * faktor_manfaat for a in dasar]
    v = npv(0.12, investasi * faktor_investasi, arus)
    print(f"{nama:<16} NPV = Rp{v:>15,.0f}  -> {'LAYAK' if v > 0 else 'TIDAK LAYAK'}")`, lang: 'python', run: true, caption: 'Proyek yang layak pada skenario dasar bisa berbalik tidak layak pada skenario buruk. Informasi ini membantu keputusan lebih jujur.' },
            { callout: 'Jangan hanya mengandalkan angka. Proyek wajib seperti kepatuhan regulasi atau perbaikan keamanan mungkin tidak "menguntungkan" secara finansial tetapi tetap perlu dilakukan. Dan manfaat tak berwujud tetap harus dibahas secara terbuka, bukan diabaikan.', kind: 'warn', title: 'Batasan analisis finansial' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'NPV positif berarti...', options: ['Proyek menambah nilai pada tingkat diskonto tersebut', 'Proyek pasti sukses', 'Biaya nol'], answer: 0, why: 'Nilai sekarang manfaat melebihi biaya.' }, { q: 'Jika tingkat diskonto naik, NPV umumnya...', options: ['Turun', 'Naik', 'Tetap'], answer: 0, why: 'Arus kas masa depan didiskon lebih besar.' }, { q: 'Contoh manfaat tak berwujud?', options: ['Peningkatan kepuasan pelanggan', 'Penghematan kertas yang terukur', 'Gaji dihemat'], answer: 0, why: 'Sulit diukur langsung dalam rupiah.' }] },
            { exercise: [['Investasi Rp200 juta, arus kas bersih Rp80 juta per tahun selama 4 tahun. Berapa payback period sederhana dan ROI?', 'Payback = 200/80 = 2,5 tahun. ROI = (320 − 200) / 200 = 60%.'], ['Mengapa payback period saja tidak cukup?', 'Mengabaikan nilai waktu uang dan arus kas setelah titik impas.'], ['Apa yang dimaksud biaya tersembunyi? Beri dua contoh.', 'Biaya yang tidak tercantum pada anggaran awal: penurunan produktivitas masa transisi, kebutuhan pelatihan lanjutan, biaya integrasi.'], ['Sebutkan tiga asumsi yang perlu diuji pada analisis sensitivitas sistem ERP.', 'Penghematan tenaga kerja, tingkat adopsi pengguna, dan biaya implementasi/migrasi.']] },
            { summary: ['Kelayakan TELOS: teknis, ekonomi, legal, operasional, jadwal.', 'Klasifikasikan biaya dan manfaat; sertakan biaya tersembunyi.', 'ROI, payback, dan NPV dengan nilai waktu uang.', 'Analisis sensitivitas menguji kekokohan kesimpulan.', 'Pertimbangkan faktor non-finansial dan kewajiban regulasi.'] },
        ],
        faq: [['Apa itu IRR?', 'Internal Rate of Return: tingkat diskonto yang membuat NPV nol. Proyek layak bila IRR melebihi tingkat pengembalian minimum yang disyaratkan.'], ['Bagaimana menentukan tingkat diskonto?', 'Biasanya biaya modal organisasi atau tingkat pengembalian minimum yang diminta, ditambah premi risiko untuk proyek berisiko tinggi.'], ['Apakah TCO sama dengan biaya proyek?', 'TCO (Total Cost of Ownership) mencakup seluruh biaya selama masa pakai: akuisisi, operasi, pemeliharaan, dan penghentian, bukan hanya biaya pembangunan.']],
        sources: [REF_LAUDON, ['Brealey, Myers, Allen, Principles of Corporate Finance (McGraw-Hill)', ''], ['Kathy Schwalbe, Information Technology Project Management (Cengage)', ''], REF_SOMMER],
    },

    {
        slug: 'pengujian-sistem-informasi-black-box-white-box-dan-uat',
        title: 'Pengujian Sistem Informasi: Black Box, White Box, dan UAT',
        description: 'Pelajari pengujian sistem informasi: black box dan white box, partisi ekuivalensi, nilai batas, test case, regresi, dan UAT, dengan kode yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['pengujian perangkat lunak', 'black box', 'white box', 'UAT', 'test case'], cta: 'none',
        prereq: ['SDLC', 'analisis kebutuhan'],
        lead: 'Pengujian tidak membuktikan program benar; ia menemukan kesalahan sebelum pengguna menemukannya. Karena pengujian lengkap mustahil, seni utamanya adalah memilih sedikit kasus uji yang paling mungkin menemukan banyak kesalahan. Teknik partisi dan nilai batas melakukan itu.',
        body: [
            { objectives: ['menyebutkan tingkat pengujian: unit, integrasi, sistem, penerimaan', 'membedakan pengujian black box dan white box', 'menurunkan test case dengan partisi ekuivalensi dan analisis nilai batas', 'menulis test case terstruktur dan menjalankannya otomatis', 'menjelaskan UAT, pengujian regresi, dan kriteria selesai'] },
            { h2: 'Tingkat pengujian' },
            { svg: 'layers', label: 'Piramida pengujian', items: [{ t: 'Pengujian penerimaan (UAT)', d: 'pengguna memastikan sistem memenuhi kebutuhan bisnis' }, { t: 'Pengujian sistem', d: 'seluruh sistem terhadap kebutuhan, termasuk non-fungsional' }, { t: 'Pengujian integrasi', d: 'modul bekerja bersama; antarmuka dan data' }, { t: 'Pengujian unit', d: 'fungsi atau kelas kecil, banyak dan cepat' }], caption: 'Semakin ke bawah semakin banyak, cepat, murah, dan otomatis; semakin ke atas semakin sedikit, lambat, dan mahal.' },
            { h2: 'Black box dan white box' },
            { w: 'compare', title: 'Dua sudut pandang', tabs: [{ label: 'Black box', html: 'Menguji dari luar berdasarkan <b>spesifikasi</b>, tanpa melihat kode. Penguji dapat bukan pemrogram. Teknik: partisi ekuivalensi, nilai batas, tabel keputusan, transisi status.' }, { label: 'White box', html: 'Menguji dengan <b>mengetahui struktur kode</b>. Tujuan: menjalankan setiap pernyataan, cabang, dan kondisi. Ukuran: cakupan pernyataan (statement), cabang (branch), dan jalur.' }] },
            { h2: 'Teknik black box: partisi ekuivalensi dan nilai batas' },
            `Misalkan aturan: <i>"Nilai ujian 0–100. Grade A bila ≥ 85, B bila 70–84, C bila 55–69, D bila 0–54. Nilai di luar 0–100 ditolak."</i> Tidak mungkin menguji 101 nilai; cukup satu wakil tiap kelompok (partisi) dan nilai di sekitar batas, tempat bug sering bersembunyi.`,
            { table: { head: ['Partisi', 'Wakil', 'Nilai batas yang diuji'], rows: [['Tidak valid (< 0)', '−10', '−1'], ['D (0–54)', '30', '0, 54'], ['C (55–69)', '60', '55, 69'], ['B (70–84)', '77', '70, 84'], ['A (85–100)', '92', '85, 100'], ['Tidak valid (> 100)', '150', '101']] } },
            { code: py`def grade(nilai):
    if nilai < 0 or nilai > 100:
        raise ValueError("nilai harus 0..100")
    if nilai >= 85: return "A"
    if nilai >= 70: return "B"
    if nilai >= 55: return "C"
    return "D"

# test case: (masukan, hasil yang diharapkan). None berarti diharapkan ValueError
kasus = [(-10, None), (-1, None), (0, "D"), (30, "D"), (54, "D"), (55, "C"), (60, "C"), (69, "C"),
         (70, "B"), (77, "B"), (84, "B"), (85, "A"), (92, "A"), (100, "A"), (101, None), (150, None)]

lulus = gagal = 0
for masukan, harapan in kasus:
    try:
        hasil = grade(masukan)
    except ValueError:
        hasil = None
    ok = hasil == harapan
    lulus += ok; gagal += not ok
    print(f"{'LULUS' if ok else 'GAGAL'}  grade({masukan:>4}) -> {hasil!s:<4} (diharapkan {harapan})")
print(f"{lulus} lulus, {gagal} gagal dari {len(kasus)} kasus")

# Bug yang SENGAJA disisipkan: >= berubah menjadi > pada batas A
def grade_bug(nilai):
    if nilai < 0 or nilai > 100: raise ValueError
    if nilai > 85: return "A"        # seharusnya >=
    if nilai >= 70: return "B"
    if nilai >= 55: return "C"
    return "D"
print("versi berbug pada nilai batas 85:", grade_bug(85), "(seharusnya A)")
print("versi berbug pada nilai tengah 92:", grade_bug(92), "(lolos; hanya nilai batas yang menangkapnya)")`, lang: 'python', run: true, caption: 'Bug off-by-one pada batas tidak tertangkap oleh nilai "tengah" seperti 92; hanya nilai batas 85 yang membongkarnya.' },
            { h2: 'White box: cakupan' },
            { code: py`def diskon(total, member):
    d = 0
    if total >= 100_000:        # cabang 1
        d = 0.05
    if member:                  # cabang 2
        d += 0.05
    return total * (1 - d)

# Cakupan pernyataan: butuh minimal satu tes yang menjalankan setiap baris.
# Cakupan cabang: setiap kondisi harus diuji bernilai benar DAN salah.
tes = [(50_000, False), (150_000, False), (50_000, True), (150_000, True)]
for t, m in tes:
    print(f"total={t:>7}, member={m!s:<5} -> {diskon(t, m):>10,.0f}")`, lang: 'python', run: true, caption: 'Dua tes cukup untuk menjalankan semua baris, tetapi empat tes diperlukan untuk menguji semua kombinasi cabang.' },
            { h2: 'Test case yang baik' },
            { code: 'ID        : TC-KRS-014\nTujuan    : Mahasiswa tidak dapat memilih kelas yang sudah penuh\nPrakondisi: Kelas SI101-A berkuota 40, terisi 40; mahasiswa login\nLangkah   : 1. Buka halaman KRS  2. Pilih kelas SI101-A  3. Tekan "Ambil"\nData uji  : mahasiswa A01\nHasil diharapkan: Pesan "Kelas penuh"; kelas tidak masuk daftar KRS\nHasil aktual    : (diisi saat pengujian)\nStatus    : Lulus / Gagal', lang: 'text', caption: 'Test case menyatakan masukan, kondisi, dan hasil yang diharapkan sehingga siapa pun dapat mengulangnya.' },
            { h2: 'Pengujian regresi dan UAT' },
            { ul: ['<b>Pengujian regresi</b>: menjalankan ulang tes setelah perubahan untuk memastikan fitur lama tidak rusak. Inilah alasan utama otomasi pengujian.', '<b>UAT (User Acceptance Testing)</b>: pengguna sungguhan menjalankan skenario bisnis nyata pada lingkungan menyerupai produksi. Hasilnya menentukan apakah sistem diterima.', '<b>Alpha dan beta</b>: uji oleh pengguna internal (alpha) lalu sebagian pengguna eksternal (beta).', '<b>Kriteria penerimaan</b> disepakati sejak awal: persentase tes lulus, jumlah cacat kritis yang boleh tersisa, target kinerja.'] },
            { callout: 'Dijkstra: <b>"Pengujian dapat menunjukkan adanya bug, tetapi tidak pernah menunjukkan ketiadaannya."</b> Karena itu keputusan merilis selalu soal risiko yang dapat diterima, bukan kepastian.', kind: 'info', title: 'Batas pengujian' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Nilai batas yang perlu diuji untuk aturan "usia 17 ke atas boleh mendaftar"?', options: ['16 dan 17', 'Hanya 30', 'Hanya 100'], answer: 0, why: 'Bug sering ada di batas.' }, { q: 'Pengujian yang dilakukan pengguna untuk menerima sistem?', options: ['UAT', 'Unit test', 'White box'], answer: 0, why: 'User Acceptance Testing.' }, { q: 'Tujuan pengujian regresi?', options: ['Memastikan perubahan tidak merusak fitur lama', 'Menguji fitur baru saja', 'Menguji kinerja saja'], answer: 0, why: 'Mencegah kemunduran.' }] },
            { exercise: [['Turunkan partisi dan nilai batas untuk kolom "umur" yang menerima 17 sampai 65.', 'Partisi: <17, 17–65, >65. Nilai batas: 16, 17, 65, 66.'], ['Mengapa tes unit lebih banyak daripada UAT?', 'Tes unit murah, cepat, dan menunjuk lokasi masalah; UAT mahal dan lambat sehingga dibatasi pada skenario bisnis penting.'], ['Tulis tiga test case untuk fitur "login".', 'Kredensial benar → berhasil; sandi salah → ditolak dengan pesan jelas; akun terkunci setelah tiga kali salah.'], ['Apa beda verifikasi dan validasi?', 'Verifikasi: membangun produk dengan benar (sesuai spesifikasi). Validasi: membangun produk yang benar (sesuai kebutuhan pengguna).']] },
            { summary: ['Piramida: banyak tes unit, lebih sedikit integrasi, sistem, dan UAT.', 'Black box dari spesifikasi; white box dari struktur kode.', 'Partisi ekuivalensi dan nilai batas menghasilkan sedikit tes yang efektif.', 'Test case terstruktur dan otomasi regresi menjaga mutu antar rilis.', 'UAT menentukan penerimaan oleh pengguna.'] },
        ],
        faq: [['Apa itu TDD?', 'Test-Driven Development: menulis tes sebelum kode (red, green, refactor).'], ['Apa itu pengujian kinerja dan keamanan?', 'Pengujian non-fungsional: beban dan stres untuk kinerja; uji penetrasi dan pemindaian kerentanan untuk keamanan.'], ['Siapa yang sebaiknya melakukan UAT?', 'Pengguna bisnis yang benar-benar memakai sistem, bukan hanya tim TI, dengan skenario dari proses kerja nyata.']],
        sources: [['Glenford Myers, The Art of Software Testing (Wiley, edisi ke-3)', ''], REF_SOMMER, ['ISTQB: Certified Tester Foundation Level Syllabus', 'https://www.istqb.org/certifications/certified-tester-foundation-level'], ['IEEE 829 / ISO/IEC/IEEE 29119: standar pengujian perangkat lunak', 'https://www.iso.org/standard/81291.html']],
    },

    {
        slug: 'interaksi-manusia-komputer-heuristik-nielsen-dan-pengujian-kegunaan',
        title: 'Interaksi Manusia-Komputer: Heuristik Nielsen dan Usability',
        description: 'Pelajari HCI: sepuluh heuristik Nielsen, evaluasi heuristik, pengujian kegunaan, skor SUS, dan hukum Fitts, dengan contoh perbaikan antarmuka.',
        date: D, category: C, level: 'Menengah', tags: ['HCI', 'usability', 'heuristik Nielsen', 'UX', 'SUS'], cta: 'none',
        prereq: ['analisis kebutuhan'],
        lead: 'Sistem yang benar tetapi sulit dipakai tetap gagal: pengguna membuat kesalahan, mencari jalan pintas, atau berhenti memakainya. HCI (Human–Computer Interaction) mempelajari bagaimana manusia berinteraksi dengan sistem dan bagaimana merancang antarmuka yang efektif, efisien, dan menyenangkan.',
        body: [
            { objectives: ['menjelaskan lima atribut kegunaan (usability)', 'menerapkan sepuluh heuristik Nielsen pada contoh antarmuka', 'melakukan evaluasi heuristik dan pengujian kegunaan sederhana', 'menghitung skor System Usability Scale (SUS)', 'memakai hukum Fitts dan Hick untuk keputusan tata letak'] },
            { h2: 'Apa itu kegunaan?' },
            { table: { head: ['Atribut (Nielsen)', 'Pertanyaan'], rows: [['Learnability', 'Seberapa mudah pengguna baru menyelesaikan tugas pertamanya?'], ['Efficiency', 'Seberapa cepat pengguna berpengalaman bekerja?'], ['Memorability', 'Apakah pengguna yang lama tak memakai dapat mengingat caranya?'], ['Errors', 'Seberapa sering dan parah kesalahan, dan seberapa mudah pulih?'], ['Satisfaction', 'Seberapa menyenangkan?']] } },
            { h2: 'Sepuluh heuristik kegunaan Nielsen' },
            { w: 'cards', title: 'Ketuk kartu untuk contohnya', items: [{ tag: '1', front: 'Visibilitas status sistem', backTag: 'Contoh', back: 'Bilah kemajuan saat mengunggah berkas; indikator "tersimpan".' }, { tag: '2', front: 'Kesesuaian dengan dunia nyata', backTag: 'Contoh', back: 'Memakai istilah pengguna ("Keranjang"), bukan istilah basis data ("Tabel order_items").' }, { tag: '3', front: 'Kendali dan kebebasan pengguna', backTag: 'Contoh', back: 'Tombol batal dan urungkan (undo) tersedia.' }, { tag: '4', front: 'Konsistensi dan standar', backTag: 'Contoh', back: 'Ikon dan posisi tombol sama di seluruh halaman.' }, { tag: '5', front: 'Pencegahan kesalahan', backTag: 'Contoh', back: 'Konfirmasi sebelum menghapus; kolom tanggal memakai pemilih, bukan teks bebas.' }, { tag: '6', front: 'Mengenali daripada mengingat', backTag: 'Contoh', back: 'Menampilkan pilihan, bukan meminta pengguna mengingat kode.' }, { tag: '7', front: 'Fleksibilitas dan efisiensi', backTag: 'Contoh', back: 'Pintasan keyboard untuk ahli; filter tersimpan.' }, { tag: '8', front: 'Desain estetis dan minimalis', backTag: 'Contoh', back: 'Hanya informasi yang relevan; tidak ada kekacauan visual.' }, { tag: '9', front: 'Membantu pengguna mengenali, mendiagnosis, dan pulih dari kesalahan', backTag: 'Contoh', back: 'Pesan error jelas dengan saran: "Kata sandi minimal 8 karakter", bukan "Error 500".' }, { tag: '10', front: 'Bantuan dan dokumentasi', backTag: 'Contoh', back: 'Bantuan singkat kontekstual yang mudah dicari.' }] },
            { h2: 'Contoh perbaikan: pesan kesalahan' },
            { table: { head: ['Sebelum', 'Masalah', 'Sesudah'], rows: [['"Error 0x80070057"', 'Istilah teknis, tak ada solusi (heuristik 9)', '"Berkas tidak dapat disimpan karena nama terlalu panjang. Persingkat menjadi di bawah 100 karakter."'], ['"Input tidak valid"', 'Tidak menjelaskan bagian mana (heuristik 9)', '"Nomor telepon harus berisi 10–13 angka. Contoh: 081234567890"'], ['Tombol "Hapus semua" tanpa konfirmasi', 'Tidak mencegah kesalahan (heuristik 5)', 'Dialog: "Hapus 24 berkas? Tindakan ini tidak dapat dibatalkan." + tombol Batal sebagai bawaan']] } },
            { h2: 'Evaluasi heuristik' },
            `Beberapa evaluator ahli memeriksa antarmuka terhadap heuristik dan mencatat pelanggaran beserta tingkat keparahannya. Murah dan cepat, cocok pada tahap awal. Nielsen menemukan bahwa satu evaluator hanya menemukan sebagian masalah, dan tiga sampai lima evaluator menemukan jauh lebih banyak.`,
            { table: { head: ['Skala keparahan', 'Arti'], rows: [['0', 'Bukan masalah kegunaan'], ['1', 'Kosmetik; perbaiki bila ada waktu'], ['2', 'Masalah kecil; prioritas rendah'], ['3', 'Masalah besar; prioritas tinggi'], ['4', 'Bencana; harus diperbaiki sebelum rilis']] } },
            { h2: 'Pengujian kegunaan' },
            `Pengguna sungguhan mengerjakan tugas nyata sementara peneliti mengamati dan <b>tidak membantu</b>. Pengguna diminta berpikir keras (think-aloud). Yang diukur: keberhasilan tugas, waktu, kesalahan, dan komentar.`,
            { callout: 'Penelitian klasik Nielsen dan Landauer menunjukkan bahwa sekitar <b>lima pengguna</b> sudah menemukan sebagian besar masalah kegunaan utama dalam satu putaran uji; lebih baik melakukan beberapa putaran kecil dengan perbaikan di antaranya daripada satu uji besar. Angka ini berlaku untuk menemukan masalah, bukan untuk mengukur statistik.', kind: 'info', title: 'Berapa pengguna?' },
            { h2: 'System Usability Scale (SUS)' },
            `SUS adalah kuesioner 10 butir dengan skala 1–5 yang menghasilkan skor 0–100. Butir ganjil bernada positif, butir genap negatif. Skor kontribusi: butir ganjil = jawaban − 1; butir genap = 5 − jawaban; jumlahkan lalu kalikan 2,5.`,
            { code: py`def skor_sus(jawaban):          # 10 jawaban, nilai 1..5
    total = 0
    for i, j in enumerate(jawaban, start=1):
        total += (j - 1) if i % 2 == 1 else (5 - j)
    return total * 2.5

peserta = {
    "P1": [5, 1, 4, 2, 5, 1, 5, 2, 4, 1],
    "P2": [4, 2, 4, 2, 4, 2, 4, 3, 4, 2],
    "P3": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    "P4": [5, 2, 5, 1, 4, 1, 5, 1, 5, 2],
    "P5": [2, 4, 2, 4, 2, 4, 2, 4, 2, 4],
}
skor = {p: skor_sus(j) for p, j in peserta.items()}
for p, s in skor.items(): print(p, s)
rata = sum(skor.values()) / len(skor)
print("rata-rata SUS:", rata, "(skor rata-rata lintas studi sekitar 68)")`, lang: 'python', run: true, caption: 'Skor SUS bukan persentase. Skor sekitar 68 dianggap rata-rata; di atas 80 tergolong baik.' },
            { h2: 'Dua hukum yang berguna' },
            { w: 'calc', title: 'Hukum Fitts: waktu menjangkau target', desc: 'T = a + b · log₂(D/W + 1). Target lebih jauh (D) atau lebih kecil (W) membutuhkan waktu lebih lama. Nilai a dan b disetel sebagai contoh.', inputs: [{ id: 'D', label: 'Jarak ke target (D)', value: 400, min: 50, max: 1000, step: 10, unit: 'px' }, { id: 'W', label: 'Lebar target (W)', value: 40, min: 8, max: 200, step: 2, unit: 'px' }], outputs: [{ label: 'Perkiraan waktu (a=0,1 dtk; b=0,15 dtk)', expr: '0.1 + 0.15 * Math.log2(D / W + 1)', fmt: 'num', unit: 'detik', big: true }] },
            { ul: ['<b>Hukum Fitts</b>: tombol penting dibuat besar dan dekat; tombol berbahaya (hapus) kecil dan jauh dari tombol umum. Tepi dan sudut layar "tak terhingga" besarnya karena kursor berhenti di tepi.', '<b>Hukum Hick</b>: waktu memilih bertambah dengan jumlah pilihan (≈ log₂ n). Kurangi pilihan, kelompokkan, dan beri bawaan yang masuk akal.', '<b>Target sentuh</b>: pedoman umum minimal sekitar 44–48 piksel agar nyaman pada layar sentuh.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Konfirmasi sebelum menghapus berkas melayani heuristik...', options: ['Pencegahan kesalahan', 'Konsistensi', 'Estetika minimalis'], answer: 0, why: 'Mencegah kesalahan fatal.' }, { q: 'Pada pengujian kegunaan, fasilitator sebaiknya...', options: ['Tidak membantu dan mengamati', 'Menjelaskan setiap langkah', 'Menjawab semua pertanyaan'], answer: 0, why: 'Tujuannya melihat kesulitan nyata.' }, { q: 'Skor SUS rata-rata lintas studi sekitar...', options: ['68', '25', '100'], answer: 0, why: 'Tolok ukur umum.' }] },
            { exercise: [['Nilai pesan "Terjadi kesalahan, coba lagi nanti" terhadap heuristik.', 'Melanggar heuristik 9: tidak menjelaskan masalah atau cara pulih. Perbaiki dengan sebab dan langkah nyata.'], ['Mengapa tombol "Hapus akun" tidak diletakkan dekat tombol "Simpan"?', 'Hukum Fitts dan pencegahan kesalahan: tindakan berbahaya dijauhkan dan diberi konfirmasi.'], ['Hitung SUS untuk jawaban [4,2,4,2,4,2,4,2,4,2].', 'Ganjil: 3 × 5 = 15; genap: 3 × 5 = 15; total 30 × 2,5 = 75.'], ['Rancang tiga tugas untuk uji kegunaan portal akademik.', 'Mengisi KRS, melihat nilai semester lalu, mengunduh kartu ujian.']] },
            { summary: ['Kegunaan: mudah dipelajari, efisien, mudah diingat, sedikit kesalahan, menyenangkan.', 'Sepuluh heuristik Nielsen adalah daftar periksa evaluasi antarmuka.', 'Evaluasi heuristik cepat dan murah; pengujian kegunaan dengan pengguna nyata menemukan masalah yang tak terduga.', 'SUS mengukur kegunaan dengan skor 0–100.', 'Hukum Fitts dan Hick membantu keputusan tata letak.'] },
        ],
        faq: [['Apa bedanya UX dan UI?', 'UI adalah tampilan dan elemen interaksi; UX mencakup seluruh pengalaman, termasuk alur, kecepatan, bantuan, dan emosi.'], ['Bagaimana dengan aksesibilitas?', 'Bagian dari kegunaan: kontras, ukuran teks, dukungan pembaca layar dan keyboard (pedoman WCAG).'], ['Apakah perlu peneliti khusus?', 'Untuk uji sederhana, tim dapat melakukannya sendiri dengan disiplin; untuk produk besar peneliti UX membantu merancang dan menganalisis.']],
        sources: [REF_NIELSEN, ['Jakob Nielsen, Usability Engineering (Morgan Kaufmann, 1993)', ''], ['John Brooke, SUS: A quick and dirty usability scale (1996)', 'https://hell.meiert.org/core/pdf/sus.pdf'], ['W3C: Web Content Accessibility Guidelines (WCAG) 2.2', 'https://www.w3.org/TR/WCAG22/']],
    },
];
