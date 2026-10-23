const D = '2026-10-23';
const C = 'Algoritma & Pemrograman Python';
const py = String.raw;

const REF_PY = ['Dokumentasi resmi Python: Python Tutorial', 'https://docs.python.org/3/tutorial/'];
const REF_THINK = ['Allen B. Downey, Think Python (edisi ke-3), buku teks terbuka', 'https://allendowney.github.io/ThinkPython/'];
const REF_MIT = ['MIT OpenCourseWare 6.0001: Introduction to Computer Science and Programming in Python', 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/'];
const REF_LEVITIN = ['Anany Levitin, Introduction to the Design and Analysis of Algorithms (buku teks)', ''];

export default [
    {
        slug: 'algoritma-dan-pemrograman-pengantar-dari-masalah-ke-program',
        title: 'Algoritma dan Pemrograman: dari Masalah ke Program',
        description: 'Pahami apa itu algoritma, lima sifat wajibnya, cara komputer menjalankan program, dan alur dari masalah ke kode Python, lengkap dengan penelusuran langkah demi langkah.',
        date: D, category: C, level: 'Dasar', tags: ['algoritma', 'pemrograman dasar', 'Python', 'flowchart', 'kuliah informatika'], cta: 'none',
        lead: 'Sebelum menulis satu baris kode pun, ada satu keterampilan yang menentukan seberapa jauh Anda bisa melangkah: menyusun langkah penyelesaian masalah secara tepat. Itulah algoritma. Materi ini membangun fondasinya, dan semua kode di dalamnya dijalankan sungguhan, bukan sekadar contoh di atas kertas.',
        body: [
            { objectives: ['menjelaskan arti algoritma dan lima sifat yang harus dipenuhinya', 'membedakan algoritma, program, dan bahasa pemrograman', 'menjelaskan secara garis besar bagaimana komputer menjalankan program Python', 'menyusun algoritma sederhana dalam bahasa alami, pseudocode, flowchart, lalu kode Python', 'menelusuri jalannya program baris demi baris dan membaca perubahan variabel'] },
            { h2: 'Apa itu algoritma?' },
            `Algoritma adalah urutan langkah yang <b>berhingga</b>, <b>tidak ambigu</b>, dan dapat dikerjakan untuk menyelesaikan suatu masalah. Resep masakan, rute menuju kampus, dan cara menghitung rata-rata nilai adalah algoritma dalam arti luas. Dalam informatika, definisinya lebih ketat: ia harus bisa dijalankan oleh mesin yang hanya mengerti instruksi sederhana, tanpa perlu "mengira-ngira maksud" penulisnya.`,
            { h3: 'Lima sifat algoritma' },
            { table: { head: ['Sifat', 'Artinya', 'Contoh pelanggaran'], rows: [['Input', 'Nol atau lebih data masukan yang jelas', 'Langkah memakai angka yang tidak pernah diberikan'], ['Output', 'Minimal satu hasil yang dapat diamati', 'Menghitung sesuatu tetapi tidak pernah menampilkannya'], ['Definiteness (pasti)', 'Setiap langkah tegas dan tidak ambigu', '"Tambahkan secukupnya" atau "ambil nilai yang bagus"'], ['Finiteness (berhingga)', 'Berhenti setelah sejumlah langkah terbatas', 'Perulangan yang tidak pernah berakhir'], ['Effectiveness (efektif)', 'Setiap langkah cukup sederhana untuk benar-benar dikerjakan', '"Cari bilangan prima terbesar" tanpa cara yang dapat dijalankan']] } },
            { callout: 'Algoritma bukan program. <b>Algoritma</b> adalah idenya (bebas bahasa), <b>program</b> adalah penulisannya dalam bahasa pemrograman tertentu. Satu algoritma bisa ditulis dalam Python, Java, atau C, dan hasilnya tetap sama.', kind: 'info', title: 'Perbedaan penting' },
            { h2: 'Dari masalah ke program: lima tahap' },
            { svg: 'flow', label: 'Alur menyelesaikan masalah dengan pemrograman', steps: [{ t: 'Pahami masalah', d: 'input, output, batasan' }, { t: 'Rancang algoritma', d: 'bahasa alami, pseudocode, flowchart' }, { t: 'Tulis kode', d: 'dalam bahasa pemrograman' }, { t: 'Uji', d: 'contoh biasa dan kasus tepi' }, { t: 'Perbaiki dan perbaiki lagi', d: 'efisiensi dan keterbacaan' }], caption: 'Jangan melompat langsung ke tahap 3. Kesalahan paling mahal terjadi di tahap 1 dan 2.' },
            { h2: 'Contoh pertama: mencari bilangan terbesar' },
            `<b>Masalah:</b> diberi daftar bilangan, tentukan bilangan terbesarnya. <b>Input:</b> daftar bilangan. <b>Output:</b> satu bilangan.`,
            `<b>Algoritma dalam bahasa alami:</b>`,
            { ol: ['Anggap bilangan pertama sebagai yang terbesar sementara.', 'Periksa bilangan berikutnya satu per satu.', 'Bila bilangan yang diperiksa lebih besar dari yang terbesar sementara, ganti.', 'Setelah semua diperiksa, yang terbesar sementara adalah jawabannya.'] },
            `Terjemahan langsung ke Python:`,
            { code: py`angka = [7, 3, 19, 4, 11]
terbesar = angka[0]
for x in angka[1:]:
    if x > terbesar:
        terbesar = x
print("Terbesar:", terbesar)`, lang: 'python', run: true, file: 'terbesar.py' },
            `Daripada hanya percaya pada hasilnya, telusuri bagaimana variabel berubah. Tekan <b>Maju</b> berulang kali dan perhatikan nilai <code>terbesar</code> serta <code>x</code> pada panel memori.`,
            { trace: true, code: py`angka = [7, 3, 19, 4, 11]
terbesar = angka[0]
for x in angka[1:]:
    if x > terbesar:
        terbesar = x
print("Terbesar:", terbesar)` },
            { callout: 'Perhatikan bahwa algoritma ini <b>benar untuk daftar apa pun</b>, bukan hanya angka di atas. Itu ciri algoritma yang baik: ia menyelesaikan kelas masalah, bukan satu contoh. Bagaimana bila daftarnya kosong? <code>angka[0]</code> akan menimbulkan error. Kasus tepi seperti ini harus dipikirkan sejak tahap perancangan.', kind: 'warn', title: 'Pikirkan kasus tepi' },
            { h2: 'Contoh kedua: algoritma Euclid untuk FPB' },
            `Faktor Persekutuan Terbesar (FPB) dua bilangan dapat dicari dengan algoritma yang sudah berusia lebih dari dua ribu tahun: selama pembagi tidak nol, ganti pasangan (a, b) dengan (b, sisa a dibagi b). Ketika b menjadi 0, nilai a adalah FPB. Berikut flowchart-nya.`,
            { svg: 'diagram', w: 520, h: 420, label: 'Flowchart algoritma Euclid', nodes: [{ id: 's', x: 260, y: 28, shape: 'round', t: 'Mulai' }, { id: 'in', x: 260, y: 98, shape: 'io', t: 'Baca a dan b' }, { id: 'd', x: 260, y: 195, shape: 'diamond', t: 'b ≠ 0 ?' }, { id: 'p', x: 260, y: 305, shape: 'rect', w: 190, h: 64, t: 'r ← a mod b ; a ← b ; b ← r' }, { id: 'o', x: 70, y: 195, shape: 'io', w: 120, t: 'Tulis a' }, { id: 'e', x: 70, y: 285, shape: 'round', w: 100, t: 'Selesai' }], edges: [{ from: 's', to: 'in' }, { from: 'in', to: 'd' }, { from: 'd', to: 'p', label: 'ya' }, { from: 'p', to: 'd', via: [[420, 305], [420, 195]] }, { from: 'd', to: 'o', label: 'tidak' }, { from: 'o', to: 'e' }], caption: 'Persegi panjang = proses, belah ketupat = keputusan, jajar genjang = masukan/keluaran, kapsul = awal/akhir. Panah yang kembali ke keputusan membentuk perulangan.' },
            { code: py`def fpb(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print(fpb(48, 18))
print(fpb(17, 5))`, lang: 'python', run: true, file: 'euclid.py' },
            { trace: true, title: 'Telusuri algoritma Euclid untuk fpb(48, 18)', code: py`a, b = 48, 18
while b != 0:
    a, b = b, a % b
print("FPB =", a)` },
            { h2: 'Bagaimana komputer menjalankan program Python?' },
            { svg: 'layers', label: 'Lapisan dari kode sampai perangkat keras', items: [{ t: 'Kode sumber Python (.py)', d: 'Yang Anda tulis dan bisa dibaca manusia' }, { t: 'Bytecode', d: 'Hasil terjemahan antara oleh CPython' }, { t: 'Python Virtual Machine', d: 'Membaca dan mengeksekusi bytecode baris demi baris' }, { t: 'Sistem operasi', d: 'Mengatur memori, berkas, dan layar' }, { t: 'CPU dan memori', d: 'Menjalankan instruksi mesin yang sebenarnya' }], caption: 'Gambaran untuk CPython, implementasi Python yang paling umum.' },
            { w: 'compare', title: 'Kompilator dan interpreter', tabs: [{ label: 'Kompilator', html: '<b>Cara kerja:</b> menerjemahkan seluruh program menjadi kode mesin lebih dulu, lalu hasilnya dijalankan.<br><b>Kelebihan:</b> umumnya berjalan cepat.<br><b>Contoh:</b> C, C++ (menjadi kode mesin).' }, { label: 'Interpreter', html: '<b>Cara kerja:</b> membaca dan menjalankan program secara langsung, per bagian.<br><b>Kelebihan:</b> mudah dicoba dan di-debug, interaktif.<br><b>Contoh:</b> Python menjalankan bytecode lewat interpreter.' }, { label: 'Hibrida (Java)', html: 'Java dikompilasi menjadi bytecode lalu dijalankan oleh JVM yang memakai kompilasi saat dijalankan (JIT). Python juga mengompilasi ke bytecode, tetapi langkah itu tersembunyi dari pengguna.' }] },
            { h2: 'Tiga struktur kontrol: pondasi semua algoritma' },
            { svg: 'diagram', w: 640, h: 200, label: 'Sekuens, seleksi, dan repetisi', nodes: [{ id: 'a1', x: 70, y: 40, t: 'Langkah 1', w: 110, h: 40 }, { id: 'a2', x: 70, y: 110, t: 'Langkah 2', w: 110, h: 40 }, { id: 'a3', x: 70, y: 180, t: 'Langkah 3', w: 110, h: 28 }, { id: 'sd', x: 280, y: 60, shape: 'diamond', t: 'Syarat?', w: 120, h: 64 }, { id: 'sy', x: 220, y: 150, t: 'Ya', w: 80, h: 36 }, { id: 'sn', x: 340, y: 150, t: 'Tidak', w: 80, h: 36 }, { id: 'rd', x: 520, y: 70, shape: 'diamond', t: 'Masih?', w: 120, h: 64 }, { id: 'rp', x: 520, y: 160, t: 'Ulangi', w: 100, h: 36 }, { id: 'tt', x: 70, y: 8, shape: 'text', t: 'Sekuens' }, { id: 'ts', x: 280, y: 8, shape: 'text', t: 'Seleksi' }, { id: 'tr', x: 520, y: 8, shape: 'text', t: 'Repetisi' }], edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'sd', to: 'sy', label: '' }, { from: 'sd', to: 'sn' }, { from: 'rd', to: 'rp', label: 'ya' }, { from: 'rp', to: 'rd', via: [[600, 160], [600, 70]] }], caption: 'Sekuens: berurutan. Seleksi: memilih cabang. Repetisi: mengulang selama syarat terpenuhi. Teorema Böhm-Jacopini menunjukkan ketiganya cukup untuk menyatakan setiap algoritma.' },
            { h2: 'Kesalahan umum pemula' },
            { w: 'cards', title: 'Ketuk kartu untuk solusinya', items: [{ tag: 'Kesalahan', front: 'Langsung mengetik kode tanpa rencana.', backTag: 'Solusi', back: 'Tulis dulu langkahnya dalam kalimat atau pseudocode. Bila Anda tidak bisa menjelaskannya dengan kata, kode tidak akan menyelamatkan.' }, { tag: 'Kesalahan', front: 'Hanya menguji satu contoh yang berhasil.', backTag: 'Solusi', back: 'Uji juga kasus tepi: kosong, satu elemen, nilai negatif, nilai sama semua.' }, { tag: 'Kesalahan', front: 'Perulangan yang tidak pernah berhenti.', backTag: 'Solusi', back: 'Pastikan ada sesuatu di dalam perulangan yang mengubah syaratnya.' }, { tag: 'Kesalahan', front: 'Mengira kode "sudah benar" karena tidak error.', backTag: 'Solusi', back: 'Tidak error tidak berarti benar. Bandingkan hasil dengan perhitungan manual.' }] },
            { exercise: [['Tuliskan algoritma (bahasa alami) untuk menentukan apakah sebuah bilangan genap atau ganjil. Apa input dan outputnya?', 'Input: satu bilangan bulat n. Output: kata "genap" atau "ganjil". Langkah: (1) bagi n dengan 2, ambil sisanya; (2) jika sisa 0, tulis "genap"; (3) jika tidak, tulis "ganjil". Di Python: <code>"genap" if n % 2 == 0 else "ganjil"</code>.'], ['Pada algoritma bilangan terbesar, apa yang terjadi bila semua bilangan dalam daftar sama? Apakah hasilnya tetap benar?', 'Tetap benar. Syarat <code>x > terbesar</code> tidak pernah terpenuhi, sehingga nilai awal (elemen pertama) tetap menjadi jawaban, dan nilai itu memang yang terbesar.'], ['Manakah dari ini yang bukan algoritma yang valid, dan sifat apa yang dilanggar? (a) "Selama x tidak sama dengan 0, tambahkan 1 pada x" dengan x awal 5. (b) "Campurkan bahan sampai rasanya enak."', '(a) melanggar finiteness: x bertambah menjauhi 0 sehingga tidak pernah berhenti. (b) melanggar definiteness: "enak" tidak terdefinisi tegas bagi mesin.'], ['Telusuri manual <code>fpb(30, 12)</code> dengan algoritma Euclid. Tuliskan pasangan (a, b) pada tiap langkah.', '(30, 12) → (12, 6) karena 30 mod 12 = 6 → (6, 0) karena 12 mod 6 = 0. Karena b = 0, FPB = 6.']] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Sifat algoritma yang menjamin ia berhenti setelah langkah terbatas?', options: ['Definiteness', 'Finiteness', 'Effectiveness'], answer: 1, why: 'Finiteness berarti berhingga.' }, { q: 'Manakah yang benar tentang algoritma dan program?', options: ['Algoritma bergantung pada satu bahasa pemrograman', 'Algoritma adalah idenya, program adalah penulisannya dalam suatu bahasa', 'Keduanya sama persis'], answer: 1, why: 'Algoritma bebas bahasa.' }, { q: 'Struktur kontrol mana yang memilih salah satu cabang?', options: ['Sekuens', 'Seleksi', 'Repetisi'], answer: 1, why: 'Seleksi (percabangan) memilih cabang berdasarkan syarat.' }] },
            { summary: ['Algoritma: langkah berhingga, pasti, dan efektif dengan input dan output yang jelas.', 'Program adalah penulisan algoritma dalam bahasa pemrograman tertentu.', 'Alur kerja: pahami masalah, rancang algoritma, tulis kode, uji, perbaiki.', 'Semua algoritma tersusun dari sekuens, seleksi, dan repetisi.', 'Menelusuri variabel langkah demi langkah adalah cara terbaik memahami dan men-debug program.'] },
        ],
        faq: [['Apakah saya harus pandai matematika untuk belajar algoritma?', 'Tidak perlu di tahap awal. Yang dibutuhkan adalah berpikir runtut dan teliti. Matematika diskrit dan analisis kompleksitas baru dibutuhkan pada materi yang lebih lanjut.'], ['Mengapa Python dipakai untuk belajar algoritma?', 'Sintaksnya ringkas sehingga perhatian bisa tertuju pada logika, bukan aturan bahasa. Banyak mata kuliah memakainya, termasuk MIT 6.0001.'], ['Apa bedanya pseudocode dan flowchart?', 'Pseudocode menuliskan algoritma dalam teks yang mirip kode tanpa terikat sintaks. Flowchart menggambarkannya dengan simbol dan panah. Keduanya alat bantu merancang sebelum menulis kode.']],
        sources: [REF_THINK, REF_MIT, REF_PY, REF_LEVITIN, ['Donald E. Knuth, The Art of Computer Programming, Vol. 1: Fundamental Algorithms (definisi dan sifat algoritma)', '']],
    },

    {
        slug: 'flowchart-dan-pseudocode-menulis-algoritma',
        title: 'Flowchart dan Pseudocode: Menulis Algoritma Sebelum Koding',
        description: 'Pelajari simbol flowchart, aturan menulis pseudocode, dan cara menerjemahkannya ke Python. Dengan contoh kelulusan, faktorial, dan latihan menelusuri algoritma.',
        date: D, category: C, level: 'Dasar', tags: ['flowchart', 'pseudocode', 'algoritma', 'Python', 'perancangan program'], cta: 'none',
        prereq: ['arti algoritma dan lima sifatnya'],
        lead: 'Flowchart dan pseudocode adalah dua cara menuliskan algoritma sebelum menjadi kode. Keduanya membuat kesalahan logika terlihat sejak awal, saat memperbaikinya masih murah. Materi ini menunjukkan cara membuat keduanya dengan benar dan menerjemahkannya ke Python.',
        body: [
            { objectives: ['membaca dan menggambar flowchart dengan simbol standar', 'menulis pseudocode yang jelas dan konsisten', 'menerjemahkan pseudocode ke kode Python dan sebaliknya', 'memeriksa kebenaran algoritma lewat penelusuran manual'] },
            { h2: 'Simbol flowchart yang wajib dikenal' },
            { svg: 'diagram', w: 640, h: 190, label: 'Simbol-simbol dasar flowchart', nodes: [{ id: 'a', x: 90, y: 50, shape: 'round', w: 130, t: 'Terminator' }, { id: 'b', x: 250, y: 50, shape: 'io', w: 130, t: 'Input / Output' }, { id: 'c', x: 410, y: 50, shape: 'rect', w: 130, t: 'Proses' }, { id: 'd', x: 570, y: 50, shape: 'diamond', w: 120, h: 70, t: 'Keputusan' }, { id: 'ta', x: 90, y: 120, shape: 'text', t: 'Awal dan akhir', chars: 18 }, { id: 'tb', x: 250, y: 120, shape: 'text', t: 'Membaca atau menulis data', chars: 20 }, { id: 'tc', x: 410, y: 120, shape: 'text', t: 'Perhitungan atau penugasan', chars: 20 }, { id: 'td', x: 570, y: 120, shape: 'text', t: 'Percabangan ya atau tidak', chars: 20 }], edges: [], caption: 'Simbol lain yang sering dipakai: panah alir (arah proses), konektor (lingkaran kecil) untuk menyambung bagian diagram, dan predefined process untuk memanggil subprogram.' },
            { h2: 'Aturan menggambar flowchart' },
            { ul: ['Hanya ada <b>satu</b> terminator mulai. Boleh lebih dari satu terminator selesai bila perlu, tetapi satu lebih rapi.', 'Alur dibaca dari atas ke bawah dan kiri ke kanan.', 'Setiap keputusan punya tepat dua keluaran yang diberi label (ya/tidak atau benar/salah).', 'Setiap panah punya arah, dan tidak ada simbol yang "menggantung" tanpa sambungan.', 'Isi simbol ringkas: satu tindakan per proses.'] },
            { h2: 'Contoh 1: menentukan kelulusan' },
            `Aturan: nilai akhir 60 atau lebih dinyatakan lulus, selain itu tidak lulus.`,
            { svg: 'diagram', w: 520, h: 330, label: 'Flowchart menentukan kelulusan', nodes: [{ id: 's', x: 260, y: 28, shape: 'round', t: 'Mulai' }, { id: 'i', x: 260, y: 96, shape: 'io', t: 'Baca nilai' }, { id: 'd', x: 260, y: 186, shape: 'diamond', t: 'nilai ≥ 60 ?' }, { id: 'l', x: 110, y: 270, shape: 'io', w: 150, t: 'Tulis "Lulus"' }, { id: 't', x: 410, y: 270, shape: 'io', w: 170, t: 'Tulis "Tidak lulus"' }, { id: 'e', x: 260, y: 310, shape: 'round', w: 110, h: 36, t: 'Selesai' }], edges: [{ from: 's', to: 'i' }, { from: 'i', to: 'd' }, { from: 'd', to: 'l', label: 'ya' }, { from: 'd', to: 't', label: 'tidak' }, { from: 'l', to: 'e' }, { from: 't', to: 'e' }] },
            `Pseudocode-nya, lalu Python-nya:`,
            { code: py`ALGORITMA Kelulusan
  BACA nilai
  JIKA nilai >= 60 MAKA
    TULIS "Lulus"
  SELAIN ITU
    TULIS "Tidak lulus"
  AKHIR JIKA`, lang: 'pseudocode', caption: 'Pseudocode tidak punya sintaks baku. Yang penting konsisten dan terbaca oleh manusia.' },
            { code: py`nilai = 72
if nilai >= 60:
    print("Lulus")
else:
    print("Tidak lulus")`, lang: 'python', run: true },
            { h2: 'Contoh 2: faktorial dengan perulangan' },
            `n! = 1 × 2 × ... × n, dengan 0! = 1.`,
            { code: py`ALGORITMA Faktorial
  BACA n
  hasil ← 1
  UNTUK i ← 1 SAMPAI n LAKUKAN
    hasil ← hasil × i
  AKHIR UNTUK
  TULIS hasil`, lang: 'pseudocode' },
            { code: py`n = 5
hasil = 1
for i in range(1, n + 1):
    hasil = hasil * i
print(n, "! =", hasil)`, lang: 'python', run: true },
            { trace: true, title: 'Telusuri perhitungan 4!', code: py`n = 4
hasil = 1
for i in range(1, n + 1):
    hasil = hasil * i
print("4! =", hasil)` },
            { h2: 'Kamus penerjemah pseudocode ke Python' },
            { table: { head: ['Pseudocode', 'Python'], rows: [['x ← 5', 'x = 5'], ['BACA x', 'x = int(input())'], ['TULIS x', 'print(x)'], ['JIKA ... MAKA ... SELAIN ITU', 'if ... : ... else: ...'], ['SELAMA kondisi LAKUKAN', 'while kondisi:'], ['UNTUK i ← 1 SAMPAI n', 'for i in range(1, n + 1):'], ['a MOD b', 'a % b'], ['a DIV b', 'a // b']] } },
            { callout: 'Di Python, blok kode ditandai oleh <b>indentasi</b> (spasi di awal baris), bukan oleh kata penutup seperti AKHIR JIKA. Biasakan 4 spasi untuk satu tingkat.', kind: 'info', title: 'Catatan sintaks' },
            { h2: 'Cara memeriksa algoritma: tabel penelusuran' },
            `Sebelum menjalankan kode, kerjakan algoritma di atas kertas dengan satu contoh. Buat tabel berisi nilai variabel pada tiap langkah. Cara ini menangkap sebagian besar kesalahan logika. Contoh untuk faktorial n = 4:`,
            { table: { head: ['Langkah', 'i', 'hasil sebelum', 'hasil sesudah'], rows: [['1', '1', '1', '1'], ['2', '2', '1', '2'], ['3', '3', '2', '6'], ['4', '4', '6', '24']] } },
            { exercise: [['Gambarlah flowchart untuk menentukan bilangan terbesar di antara tiga bilangan a, b, dan c. Berapa keputusan minimal yang diperlukan?', 'Minimal dua keputusan: bandingkan a dengan b untuk mendapat pemenang sementara, lalu bandingkan pemenang itu dengan c. Dalam Python: <code>max(a, b, c)</code>, atau <code>t = a if a > b else b; t = t if t > c else c</code>.'], ['Tulis pseudocode untuk menghitung jumlah bilangan 1 sampai n, lalu terjemahkan ke Python.', 'Pseudocode: jumlah ← 0; UNTUK i ← 1 SAMPAI n: jumlah ← jumlah + i. Python: <code>jumlah = 0\nfor i in range(1, n + 1): jumlah += i</code>. (Rumus langsung: n(n+1)/2.)'], ['Apa yang salah dengan: SELAMA x > 0 LAKUKAN, TULIS x (tanpa mengubah x)?', 'Perulangan tak berhingga bila x > 0 di awal, karena x tidak pernah berubah. Harus ada langkah yang mengubah x, misalnya x ← x − 1.']] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Simbol belah ketupat pada flowchart menyatakan...', options: ['Proses', 'Keputusan', 'Awal'], answer: 1, why: 'Belah ketupat adalah simbol keputusan.' }, { q: 'Padanan "a MOD b" di Python adalah...', options: ['a // b', 'a % b', 'a ** b'], answer: 1, why: 'Operator % menghasilkan sisa bagi.' }] },
            { summary: ['Flowchart memperlihatkan alur secara visual, pseudocode menuliskannya dalam teks mirip kode.', 'Keputusan selalu punya dua keluaran berlabel.', 'Terjemahkan pseudocode ke Python dengan memperhatikan indentasi.', 'Tabel penelusuran manual adalah alat uji logika yang murah dan ampuh.'] },
        ],
        faq: [['Apakah pseudocode punya standar baku?', 'Tidak. Setiap buku atau kampus punya gaya berbeda. Yang penting konsisten dan dapat dipahami pembaca lain.'], ['Apakah flowchart masih dipakai di industri?', 'Ya, terutama untuk menjelaskan alur proses bisnis dan logika yang rumit. Untuk kode sehari-hari, banyak developer langsung menulis kode atau sketsa sederhana.'], ['Alat apa untuk menggambar flowchart?', 'Tersedia banyak, misalnya draw.io (diagrams.net) yang gratis, atau cukup kertas dan pensil saat belajar.']],
        sources: [REF_THINK, REF_LEVITIN, ['Dokumentasi Python: Control Flow Tools', 'https://docs.python.org/3/tutorial/controlflow.html']],
    },

    {
        slug: 'python-mulai-instalasi-repl-script-dan-virtual-environment',
        title: 'Python: Instalasi, REPL, Script, dan Virtual Environment',
        description: 'Panduan menyiapkan lingkungan Python dari nol: memasang Python, memakai REPL dan script, membuat virtual environment, dan memasang paket dengan pip.',
        date: D, category: C, level: 'Dasar', tags: ['instalasi Python', 'REPL', 'virtual environment', 'pip', 'lingkungan pengembangan'], cta: 'none',
        lead: 'Hambatan pertama kebanyakan pemula bukan Python-nya, melainkan menyiapkan lingkungan kerja. Materi ini menjelaskan setiap bagian dengan jelas: apa itu interpreter, kapan memakai REPL dan kapan script, dan mengapa virtual environment penting sejak proyek pertama.',
        body: [
            { objectives: ['memasang Python dan memeriksa versinya', 'membedakan REPL dan script serta kapan memakai masing-masing', 'membuat dan mengaktifkan virtual environment', 'memasang paket dengan pip dan mencatat dependensi'] },
            { h2: 'Memasang Python' },
            { ol: ['Unduh dari situs resmi python.org sesuai sistem operasi Anda, atau pakai pengelola paket (Homebrew di macOS, apt di Linux, winget di Windows).', 'Di Windows, centang <b>Add python.exe to PATH</b> saat pemasangan agar perintah <code>python</code> dikenali.', 'Buka terminal baru lalu periksa dengan perintah di bawah.'] },
            { code: py`python --version
# contoh keluaran: Python 3.13.3
pip --version`, lang: 'bash', caption: 'Di Linux dan macOS, perintahnya sering python3 dan pip3.' },
            { callout: 'Gunakan Python 3. Python 2 sudah tidak didukung sejak 1 Januari 2020. Bila ada petunjuk lama yang memakai <code>print "teks"</code> tanpa kurung atau <code>raw_input</code>, itu Python 2.', kind: 'warn', title: 'Pastikan versinya' },
            { h2: 'REPL: berbincang langsung dengan Python' },
            `REPL (Read-Eval-Print Loop) membaca satu perintah, menjalankannya, mencetak hasilnya, lalu menunggu perintah berikutnya. Ketik <code>python</code> di terminal untuk memulai. Prompt <code>&gt;&gt;&gt;</code> berarti Python siap menerima perintah. Keluar dengan <code>exit()</code>.`,
            { code: py`>>> 2 + 3 * 4
14
>>> nama = "Dewi"
>>> "Halo, " + nama
'Halo, Dewi'
>>> len(nama)
4
>>> exit()`, lang: 'repl' },
            `REPL ideal untuk mencoba potongan kecil, memeriksa perilaku fungsi, dan belajar. Tetapi isinya hilang saat Anda keluar. Untuk program yang utuh, gunakan script.`,
            { h2: 'Script: menyimpan program dalam berkas' },
            `Tulis kode di berkas berakhiran <code>.py</code>, lalu jalankan dengan <code>python namaberkas.py</code>.`,
            { code: py`# halo.py
nama = "Dunia"
print("Halo,", nama)
print("2 pangkat 10 =", 2 ** 10)`, lang: 'python', run: true, file: 'halo.py' },
            { w: 'compare', title: 'REPL, script, atau notebook?', tabs: [{ label: 'REPL', html: '<b>Cocok untuk:</b> mencoba perintah cepat, belajar fitur bahasa.<br><b>Kekurangan:</b> tidak tersimpan, tidak cocok untuk program panjang.' }, { label: 'Script (.py)', html: '<b>Cocok untuk:</b> program utuh yang dijalankan berulang, dibagikan, dan disimpan di Git.<br><b>Kekurangan:</b> tiap perubahan harus dijalankan ulang dari awal.' }, { label: 'Notebook (Jupyter)', html: '<b>Cocok untuk:</b> analisis data, eksperimen, dan laporan yang memadukan kode, hasil, dan penjelasan.<br><b>Kekurangan:</b> urutan eksekusi sel bisa membingungkan; kurang ideal untuk aplikasi.' }] },
            { h2: 'Virtual environment: satu proyek, satu lingkungan' },
            `Bayangkan proyek A membutuhkan versi 1 sebuah pustaka dan proyek B membutuhkan versi 2. Bila keduanya dipasang secara global, salah satu akan rusak. <b>Virtual environment</b> adalah folder terisolasi berisi salinan interpreter dan paket khusus untuk satu proyek.`,
            { svg: 'layers', label: 'Isolasi paket dengan virtual environment', items: [{ t: 'Proyek A (.venv) : pustaka versi 1', d: 'Paket hanya tersedia untuk proyek ini' }, { t: 'Proyek B (.venv) : pustaka versi 2', d: 'Tidak bentrok dengan proyek A' }, { t: 'Python sistem (global)', d: 'Dibiarkan bersih' }], caption: 'Setiap proyek membawa lingkungannya sendiri.' },
            { code: py`# membuat lingkungan bernama .venv di folder proyek
python -m venv .venv

# mengaktifkan
#   Windows (PowerShell):   .venv\Scripts\Activate.ps1
#   Linux / macOS:          source .venv/bin/activate

# setelah aktif, prompt biasanya diawali (.venv)
pip install requests
pip freeze > requirements.txt     # mencatat dependensi

# di komputer lain, atau pada proyek yang baru di-clone
pip install -r requirements.txt

deactivate                        # keluar dari lingkungan`, lang: 'bash' },
            { callout: 'Jangan meng-commit folder <code>.venv</code> ke Git. Cukup commit <code>requirements.txt</code>, dan tambahkan <code>.venv/</code> ke <code>.gitignore</code>.', kind: 'good', title: 'Kebiasaan baik' },
            { h2: 'Kesalahan umum dan penyebabnya' },
            { table: { head: ['Pesan atau gejala', 'Penyebab umum', 'Solusi'], rows: [['"python" is not recognized', 'Python belum masuk PATH', 'Pasang ulang dengan opsi PATH, atau pakai launcher <code>py</code> di Windows'], ['ModuleNotFoundError: No module named ...', 'Paket belum dipasang, atau dipasang di lingkungan lain', 'Aktifkan venv yang benar lalu <code>pip install</code>'], ['pip memasang ke tempat yang salah', 'Banyak versi Python terpasang', 'Gunakan <code>python -m pip install ...</code> agar pip sesuai interpreter'], ['IndentationError', 'Campuran tab dan spasi, atau indentasi salah', 'Pakai 4 spasi konsisten dan atur editor']] } },
            { w: 'checklist', title: 'Persiapan lingkungan Anda', desc: 'Centang saat selesai. Progres tersimpan di browser ini.', items: ['python --version menampilkan Python 3.x.', 'Saya bisa membuka dan keluar dari REPL.', 'Saya menjalankan script halo.py dengan python halo.py.', 'Saya membuat folder proyek dan virtual environment .venv di dalamnya.', 'Saya memasang satu paket dengan pip di dalam venv.', 'Saya mencatat dependensi ke requirements.txt.', 'Editor saya (misalnya VS Code) memakai interpreter dari .venv.'] },
            { exercise: [['Mengapa <code>python -m pip install paket</code> sering lebih aman daripada <code>pip install paket</code>?', 'Karena bentuk pertama memastikan pip yang dipakai adalah pip milik interpreter <code>python</code> yang sama. Bila ada banyak Python di komputer, <code>pip</code> saja bisa memasang paket ke interpreter yang berbeda.'], ['Apa gunanya berkas requirements.txt?', 'Mencatat daftar paket beserta versinya agar lingkungan yang sama dapat dibuat ulang di komputer lain dengan <code>pip install -r requirements.txt</code>.']] },
            { summary: ['REPL untuk mencoba cepat, script untuk program utuh.', 'Gunakan satu virtual environment per proyek agar paket tidak bentrok.', 'Catat dependensi dengan pip freeze dan pasang ulang dengan requirements.txt.', 'Jangan commit folder .venv ke Git.'] },
        ],
        faq: [['Bagaimana memilih editor untuk Python?', 'Untuk pemula, VS Code dengan ekstensi Python atau PyCharm Community sudah sangat memadai. IDLE bawaan Python juga cukup untuk latihan awal.'], ['Apakah conda sama dengan venv?', 'Keduanya mengelola lingkungan terisolasi. Conda juga mengelola paket non-Python dan banyak dipakai di data science. Untuk pemula, venv dan pip sudah cukup.'], ['Mengapa perlu virtual environment bila hanya satu proyek?', 'Agar kebiasaannya terbentuk sejak awal, dan agar paket proyek tidak mengotori Python sistem yang mungkin dipakai alat lain.']],
        sources: [['Dokumentasi Python: Virtual Environments and Packages', 'https://docs.python.org/3/tutorial/venv.html'], ['Dokumentasi Python: venv, creation of virtual environments', 'https://docs.python.org/3/library/venv.html'], REF_PY, ['Python Packaging User Guide: Installing packages using pip and virtual environments', 'https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/']],
    },

    {
        slug: 'variabel-dan-tipe-data-python-lengkap',
        title: 'Variabel dan Tipe Data Python: Dari Dasar sampai Mutabilitas',
        description: 'Pahami variabel sebagai nama yang menunjuk objek, tipe data int, float, str, bool, None, konversi, presisi float, dan perbedaan mutable dan immutable dengan penelusuran visual.',
        date: D, category: C, level: 'Dasar', tags: ['variabel Python', 'tipe data', 'mutable immutable', 'float', 'type conversion'], cta: 'none',
        prereq: ['menjalankan script Python'],
        lead: 'Di Python, variabel bukan "kotak yang berisi nilai", melainkan <b>nama yang menunjuk ke sebuah objek</b>. Perbedaan kecil ini menjelaskan banyak kejadian membingungkan, misalnya mengapa mengubah satu list bisa ikut mengubah list lain. Materi ini membangun pemahaman yang benar dari awal.',
        body: [
            { objectives: ['menjelaskan variabel sebagai nama yang menunjuk objek', 'memakai tipe data dasar: int, float, str, bool, dan None', 'melakukan konversi tipe secara eksplisit dan menghindari kesalahan umum', 'menjelaskan mengapa 0.1 + 0.2 tidak persis 0.3', 'membedakan objek mutable dan immutable dan dampaknya pada penugasan'] },
            { h2: 'Variabel adalah nama, bukan kotak' },
            { svg: 'diagram', w: 560, h: 180, label: 'Variabel menunjuk ke objek', nodes: [{ id: 'x', x: 70, y: 50, shape: 'rect', w: 80, h: 36, t: 'x' }, { id: 'y', x: 70, y: 130, shape: 'rect', w: 80, h: 36, t: 'y' }, { id: 'o', x: 300, y: 90, shape: 'ellipse', w: 150, h: 64, t: 'objek int: 10' }, { id: 'z', x: 480, y: 90, shape: 'rect', w: 90, h: 36, t: 'z', fill: '#fff1d6' }, { id: 'o2', x: 480, y: 160, shape: 'ellipse', w: 110, h: 40, t: 'objek: 99' }], edges: [{ from: 'x', to: 'o' }, { from: 'y', to: 'o' }], caption: 'Setelah x = 10 dan y = x, kedua nama menunjuk objek yang sama. Penugasan tidak menyalin nilai, ia menunjuk objek yang sama.' },
            { code: py`x = 10
y = x
print(id(x) == id(y))   # True: satu objek yang sama

y = 99                  # y sekarang menunjuk objek lain
print(x, y)             # 10 99`, lang: 'python', run: true },
            { h2: 'Aturan penamaan' },
            { ul: ['Boleh berisi huruf, angka, dan garis bawah, tidak boleh diawali angka.', 'Peka huruf besar-kecil: <code>nilai</code> dan <code>Nilai</code> berbeda.', 'Tidak boleh memakai kata kunci seperti <code>if</code>, <code>for</code>, <code>class</code>.', 'Konvensi PEP 8: <code>snake_case</code> untuk variabel dan fungsi, <code>HURUF_BESAR</code> untuk konstanta.', 'Pilih nama yang menjelaskan isi: <code>jumlah_siswa</code> lebih baik daripada <code>js</code>.'] },
            { h2: 'Tipe data dasar' },
            { table: { head: ['Tipe', 'Contoh', 'Keterangan'], rows: [['int', '42, -7, 10**30', 'Bilangan bulat, ukuran tidak dibatasi selain memori'], ['float', '3.14, 2.5e-3', 'Bilangan pecahan presisi ganda (IEEE 754)'], ['str', '"halo", \'dunia\'', 'Teks (urutan karakter Unicode), immutable'], ['bool', 'True, False', 'Subkelas dari int: True bernilai 1, False bernilai 0'], ['NoneType', 'None', 'Menyatakan "tidak ada nilai"']] } },
            { code: py`print(type(42), type(3.14), type("halo"), type(True), type(None))
print(2 ** 100)            # int Python tidak meluap
print(7 / 2, 7 // 2, 7 % 2) # pembagian biasa, bulat, sisa
print(True + True)          # bool adalah int`, lang: 'python', run: true },
            { h2: 'Konversi tipe' },
            `Python tidak mengubah teks menjadi angka secara diam-diam. <code>input()</code> selalu menghasilkan <code>str</code>, sehingga perlu dikonversi.`,
            { code: py`umur_teks = "17"
print(umur_teks + "1")      # penggabungan teks: 171
print(int(umur_teks) + 1)   # penjumlahan: 18
print(float("3.5"), str(99), bool(0), bool("a"))
print(int(3.9), round(3.9))  # int memotong, round membulatkan`, lang: 'python', run: true },
            { w: 'quiz', title: 'Tebak keluarannya', questions: [{ q: 'Apa hasil <code>"5" + "3"</code>?', options: ['8', '"53"', 'Error'], answer: 1, why: 'Operator + pada str adalah penggabungan teks.' }, { q: 'Apa hasil <code>int(7.9)</code>?', options: ['8', '7', '7.9'], answer: 1, why: 'int() memotong bagian pecahan, tidak membulatkan.' }, { q: 'Apa hasil <code>bool("")</code>?', options: ['True', 'False', 'Error'], answer: 1, why: 'String kosong dianggap False.' }] },
            { h2: 'Mengapa 0.1 + 0.2 bukan 0.3?' },
            `Komputer menyimpan float dalam biner. Seperti 1/3 yang tidak bisa ditulis habis dalam desimal, 0.1 tidak bisa dinyatakan persis dalam biner. Selisih sangat kecil muncul.`,
            { code: py`print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)
import math
print(math.isclose(0.1 + 0.2, 0.3))
from decimal import Decimal
print(Decimal("0.1") + Decimal("0.2"))`, lang: 'python', run: true },
            { callout: 'Jangan membandingkan float dengan <code>==</code>. Gunakan <code>math.isclose</code>. Untuk uang, pakai <code>Decimal</code> atau simpan dalam satuan terkecil (sen) sebagai int.', kind: 'warn', title: 'Aturan praktis' },
            { h2: 'Mutable dan immutable' },
            `Objek <b>immutable</b> (int, float, str, tuple, bool) tidak dapat diubah setelah dibuat. Objek <b>mutable</b> (list, dict, set) dapat diubah di tempat. Perbedaan ini tampak jelas saat dua nama menunjuk objek yang sama.`,
            { trace: true, title: 'Dua nama, satu list', desc: 'Perhatikan bahwa a dan b selalu menampilkan isi yang sama setelah append, karena keduanya menunjuk list yang sama. Bandingkan dengan c yang disalin.', code: py`a = [1, 2]
b = a            # b menunjuk list yang sama
b.append(3)      # mengubah list itu
c = a.copy()     # c adalah salinan baru
c.append(4)
print(a, b, c)` },
            { w: 'compare', title: 'Mutable vs immutable', tabs: [{ label: 'Immutable', html: 'int, float, str, tuple, bool, frozenset.<br>Operasi "mengubah" sebenarnya membuat objek baru: <code>s = "a"; s += "b"</code> membuat str baru.<br><b>Aman dibagi</b> antar bagian program.' }, { label: 'Mutable', html: 'list, dict, set, objek buatan sendiri.<br>Dapat diubah di tempat, sehingga semua nama yang menunjuknya melihat perubahan.<br><b>Hati-hati</b> saat dikirim ke fungsi atau dipakai sebagai nilai default parameter.' }] },
            { exercise: [['Apa keluaran kode berikut? <code>x = [1, 2]; y = x; y.append(3); print(x)</code>', '<code>[1, 2, 3]</code>. x dan y menunjuk list yang sama, sehingga perubahan lewat y terlihat lewat x.'], ['Mengapa <code>int("3.5")</code> menimbulkan ValueError, sedangkan <code>int(float("3.5"))</code> berhasil?', 'int() tidak menerima teks berformat pecahan. Cara yang benar: ubah dulu ke float (3.5), lalu ke int (3, dipotong).'], ['Tulis ekspresi yang menghasilkan sisa pembagian 29 oleh 6, dan hasil bagi bulatnya.', '<code>29 % 6</code> adalah 5, dan <code>29 // 6</code> adalah 4 (karena 6 × 4 + 5 = 29).'], ['Mengapa <code>0.1 * 3 == 0.3</code> bernilai False? Bagaimana memeriksanya dengan benar?', 'Karena 0.1 tidak tepat dalam biner sehingga hasil kali 0.30000000000000004. Gunakan <code>math.isclose(0.1 * 3, 0.3)</code>.']] },
            { summary: ['Variabel adalah nama yang menunjuk objek, bukan wadah nilai.', 'Tipe dasar: int, float, str, bool, None. Konversi dilakukan eksplisit.', 'Float tidak presisi persis; gunakan isclose atau Decimal.', 'Immutable tidak dapat diubah; mutable dapat, dan penugasan hanya menunjuk objek yang sama.'] },
        ],
        faq: [['Apakah Python bertipe dinamis?', 'Ya. Tipe melekat pada objek, bukan pada nama variabel, sehingga satu nama boleh menunjuk objek bertipe berbeda pada waktu berbeda. Python tetap bertipe kuat: ia menolak operasi antar tipe yang tidak cocok seperti "a" + 1.'], ['Apa bedanya = dan ==?', 'Satu sama dengan (=) adalah penugasan, dua sama dengan (==) adalah perbandingan kesetaraan nilai.'], ['Kapan memakai is dan kapan ==?', '<code>==</code> membandingkan nilai, <code>is</code> memeriksa apakah dua nama menunjuk objek yang sama. Gunakan <code>is</code> terutama untuk membandingkan dengan None.']],
        sources: [['Dokumentasi Python: Data Model (objek, nilai, dan tipe)', 'https://docs.python.org/3/reference/datamodel.html'], ['Dokumentasi Python: An Informal Introduction to Python', 'https://docs.python.org/3/tutorial/introduction.html'], ['Dokumentasi Python: Floating-Point Arithmetic: Issues and Limitations', 'https://docs.python.org/3/tutorial/floatingpoint.html'], ['PEP 8, Style Guide for Python Code', 'https://peps.python.org/pep-0008/'], REF_THINK],
    },
];
