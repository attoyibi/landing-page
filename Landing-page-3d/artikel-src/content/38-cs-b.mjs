const D = '2026-10-23';
const C = 'Dasar Informatika';
const py = String.raw;

const REF_PATT = ['David Patterson dan John Hennessy, Computer Organization and Design (Morgan Kaufmann)', ''];
const REF_OSTEP = ['Remzi dan Andrea Arpaci-Dusseau, Operating Systems: Three Easy Pieces (OSTEP)', 'https://pages.cs.wisc.edu/~remzi/OSTEP/'];
const REF_SILBER = ['Silberschatz, Galvin, Gagne, Operating System Concepts (Wiley)', ''];
const REF_TANEN = ['Andrew Tanenbaum dan Herbert Bos, Modern Operating Systems (Pearson)', ''];
const REF_PROGIT = ['Scott Chacon dan Ben Straub, Pro Git (gratis)', 'https://git-scm.com/book/en/v2'];

export default [
    {
        slug: 'hierarki-memori-dan-cache-mengapa-urutan-akses-menentukan-kecepatan',
        title: 'Hierarki Memori dan Cache: Mengapa Urutan Akses Menentukan Kecepatan',
        description: 'Pahami hierarki memori komputer: register, cache L1-L3, RAM, SSD, lokalitas spasial dan temporal, serta simulasi cache yang menunjukkan mengapa menelusuri matriks per baris lebih cepat daripada per kolom.',
        date: D, category: C, level: 'Menengah', tags: ['cache', 'hierarki memori', 'lokalitas', 'RAM', 'performa'], cta: 'none',
        prereq: ['arsitektur CPU'],
        lead: 'Memori yang besar itu lambat dan memori yang cepat itu kecil. Komputer mengatasinya dengan berlapis-lapis memori, dari yang kecil dan secepat kilat sampai yang besar dan lamban, dan mengandalkan satu kenyataan tentang program: data yang baru dipakai cenderung dipakai lagi, dan data di sekitarnya cenderung dipakai berikutnya.',
        body: [
            { objectives: ['menyebut tingkat hierarki memori beserta kecepatan dan kapasitas relatifnya', 'menjelaskan lokalitas temporal dan spasial', 'menjelaskan cache hit, miss, dan cache line', 'mensimulasikan cache sederhana dan mengamati pengaruh pola akses', 'menerapkan pemahaman itu pada kode (urutan perulangan, tata letak data)'] },
            { h2: 'Piramida memori' },
            { svg: 'layers', label: 'Hierarki memori', items: [{ t: 'Register', d: '< 1 ns · ratusan byte · di dalam CPU' }, { t: 'Cache L1/L2/L3', d: '1–40 ns · KB sampai puluhan MB · di chip' }, { t: 'Memori utama (RAM)', d: '≈ 100 ns · GB · modul DRAM' }, { t: 'SSD / HDD', d: '≈ 100 µs (SSD) sampai ms (HDD) · TB' }, { t: 'Jaringan dan cloud', d: 'ms sampai detik · tak terbatas' }], caption: 'Semakin ke bawah semakin besar, murah per byte, dan lambat. Angka bersifat kira-kira dan berubah antar generasi perangkat keras.' },
            { callout: 'Gambaran skala (Jeff Dean/Colin Scott): jika satu siklus CPU dianggap 1 detik, mengakses RAM terasa seperti ±6 menit, SSD ±beberapa hari, dan HDD hitungan bulan. Karena itu CPU modern menghabiskan banyak waktu <i>menunggu data</i>, dan cache menjadi komponen kunci kinerja.', kind: 'info', title: 'Skala waktu' },
            { h2: 'Prinsip lokalitas' },
            { w: 'cards', title: 'Dua jenis lokalitas (ketuk kartu)', items: [{ tag: 'Temporal', front: 'Data yang baru dipakai akan dipakai lagi segera', backTag: 'Contoh', back: 'Variabel pencacah perulangan, hasil perhitungan yang dipakai berulang.' }, { tag: 'Spasial', front: 'Data di dekat alamat yang diakses akan diakses berikutnya', backTag: 'Contoh', back: 'Menelusuri elemen array berurutan; instruksi program yang berurutan.' }] },
            `Cache memanfaatkan keduanya: ketika CPU membaca satu byte, cache memuat satu <b>blok (cache line)</b> utuh, biasanya 64 byte, sehingga byte-byte tetangga sudah tersedia. Bila data yang dicari ada di cache disebut <b>hit</b>; bila tidak, <b>miss</b> dan CPU menunggu memori yang lebih lambat.`,
            { h2: 'Simulasi cache' },
            `Kita simulasikan cache <i>direct-mapped</i> kecil: 8 baris, tiap blok memuat 4 elemen. Lalu menelusuri matriks 16×16 yang tersimpan baris demi baris (row-major) dengan dua cara.`,
            { code: py`def simulasi(urutan, baris=8, ukuran_blok=4):
    cache = [None] * baris                    # menyimpan nomor blok per baris cache
    hit = miss = 0
    for alamat in urutan:
        blok = alamat // ukuran_blok
        slot = blok % baris                    # direct-mapped: satu tempat tetap
        if cache[slot] == blok: hit += 1
        else:
            miss += 1; cache[slot] = blok
    return hit, miss

N = 16
alamat = lambda i, j: i * N + j                # matriks row-major: baris demi baris dalam memori

per_baris = [alamat(i, j) for i in range(N) for j in range(N)]     # i luar, j dalam
per_kolom = [alamat(i, j) for j in range(N) for i in range(N)]     # j luar, i dalam

for nama, urutan in (("per baris (searah memori)", per_baris), ("per kolom (melompat-lompat)", per_kolom)):
    h, m = simulasi(urutan)
    print(f"{nama:<28} hit={h:>3} miss={m:>3}  hit rate={h / (h + m) * 100:5.1f}%")`, lang: 'python', run: true, caption: 'Menelusuri searah memori memakai tiap blok sepenuhnya (3 hit untuk setiap miss). Menelusuri per kolom melompat 16 elemen setiap langkah dan blok terhapus sebelum dipakai lagi.' },
            { h2: 'Efek nyata pada kode' },
            { code: String.raw`public class Main {
    static final int N = 3000;

    static long perBaris(int[][] a) {
        long t = 0;
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++) t += a[i][j];     // searah memori
        return t;
    }

    static long perKolom(int[][] a) {
        long t = 0;
        for (int j = 0; j < N; j++)
            for (int i = 0; i < N; i++) t += a[i][j];     // melompat satu baris tiap langkah
        return t;
    }

    public static void main(String[] args) {
        int[][] a = new int[N][N];
        for (int i = 0; i < N; i++) java.util.Arrays.fill(a[i], 1);
        for (int ulang = 0; ulang < 3; ulang++) {            // beberapa kali agar JIT hangat
            long t0 = System.nanoTime(); perBaris(a);
            long t1 = System.nanoTime(); perKolom(a);
            long t2 = System.nanoTime();
            System.out.printf("per baris %4d ms | per kolom %4d ms%n", (t1 - t0) / 1_000_000, (t2 - t1) / 1_000_000);
        }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Angka waktu berbeda di tiap mesin, tetapi arahnya konsisten: pada array yang berdampingan di memori, menelusuri per kolom jauh lebih lambat. (Pada Python murni selisihnya kabur karena overhead interpreter dan list menyimpan penunjuk ke objek.)' },
            { h2: 'Apa yang terjadi saat cache penuh' },
            { table: { head: ['Konsep', 'Arti'], rows: [['Cache line', 'Satuan transfer antara cache dan memori (umumnya 64 byte)'], ['Direct-mapped', 'Setiap blok memori hanya boleh di satu baris cache; sederhana tetapi mudah bentrok (conflict miss)'], ['Set-associative', 'Setiap blok boleh di salah satu dari beberapa baris dalam satu set; kompromi umum pada CPU nyata'], ['Kebijakan pengganti', 'Memilih blok yang dikeluarkan: LRU (paling lama tak dipakai), FIFO, acak'], ['Write-through / write-back', 'Menulis langsung ke memori utama atau menunda sampai blok diganti'], ['Miss: compulsory, capacity, conflict', 'Pertama kali, cache terlalu kecil, atau bentrok pemetaan']] } },
            { callout: 'Dari sini lahir nasihat pemrograman praktis: <b>telusuri data searah tata letaknya</b>, simpan data yang dipakai bersama berdekatan (array of structs vs struct of arrays), dan hindari lompatan acak di memori (daftar tertaut kalah dari array pada banyak kasus). Tetapi ukur sebelum mengoptimalkan; kejelasan kode lebih penting sampai profil menunjukkan masalah.', kind: 'good', title: 'Pelajaran untuk programmer' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa cache memuat satu blok, bukan satu byte?', options: ['Memanfaatkan lokalitas spasial', 'Karena byte terlalu kecil untuk disimpan', 'Agar hemat daya saja'], answer: 0, why: 'Tetangga sering diakses berikutnya.' }, { q: 'Menelusuri matriks row-major per kolom umumnya...', options: ['Lebih banyak cache miss', 'Lebih cepat', 'Sama saja'], answer: 0, why: 'Lompatan melewati batas blok.' }, { q: 'Akses ke RAM dibanding cache L1 kira-kira...', options: ['Puluhan sampai ratusan kali lebih lambat', 'Sama cepat', 'Lebih cepat'], answer: 0, why: 'Itulah alasan adanya cache.' }] },
            { exercise: [['Ubah N menjadi 32 dan ukur ulang hit rate per baris dan per kolom pada simulasi.', 'Per baris tetap 75% (3 dari 4 hit); per kolom sangat rendah karena lompatan 32 elemen selalu menyentuh blok berbeda.'], ['Mengapa daftar tertaut sering lebih lambat dari array walau kompleksitas sama?', 'Node tersebar di memori sehingga lokalitas spasial buruk dan banyak cache miss; array berdampingan.'], ['Apa itu cache thrashing?', 'Beberapa blok yang sering dipakai bertabrakan pada baris cache yang sama sehingga saling menggusur terus-menerus.'], ['Mengapa menambah ukuran cache tidak selalu mempercepat?', 'Cache yang lebih besar lebih lambat diakses, dan bila pola akses tidak punya lokalitas, miss tetap banyak.']] },
            { summary: ['Hierarki memori: register, cache, RAM, penyimpanan; semakin jauh semakin besar dan lambat.', 'Program memiliki lokalitas temporal dan spasial; cache memanfaatkannya dengan memuat blok.', 'Pola akses menentukan hit rate; searah tata letak memori jauh lebih cepat.', 'Urutan perulangan dan struktur data memengaruhi kecepatan nyata.'] },
        ],
        faq: [['Berapa ukuran cache pada CPU modern?', 'Sekitar puluhan KB untuk L1 per inti, ratusan KB sampai beberapa MB untuk L2, dan puluhan MB untuk L3 bersama (bervariasi menurut model).'], ['Apa itu NUMA?', 'Pada server multi-prosesor, memori dekat satu prosesor lebih cepat diakses prosesor itu daripada prosesor lain.'], ['Apa bedanya cache CPU dan cache browser?', 'Konsepnya sama (menyimpan salinan data yang sering dipakai), tetapi di level dan dengan kebijakan yang sangat berbeda.']],
        sources: [REF_PATT, ['Ulrich Drepper, What Every Programmer Should Know About Memory (2007)', 'https://people.freebsd.org/~lstewart/articles/cpumemory.pdf'], ['Latency Numbers Every Programmer Should Know (Colin Scott, berbasis Jeff Dean)', 'https://colin-scott.github.io/personal_website/research/interactive_latency.html'], REF_TANEN],
    },

    {
        slug: 'proses-dan-penjadwalan-cpu-fcfs-sjf-round-robin-dengan-simulasi',
        title: 'Proses dan Penjadwalan CPU: FCFS, SJF, Round Robin',
        description: 'Pahami proses, thread, dan status proses pada sistem operasi, lalu bandingkan algoritma penjadwalan FCFS, SJF, dan Round Robin dengan simulasi dan perhitungan waiting time serta turnaround time.',
        date: D, category: C, level: 'Menengah', tags: ['sistem operasi', 'penjadwalan CPU', 'round robin', 'proses', 'context switch'], cta: 'none',
        prereq: ['arsitektur CPU'],
        lead: 'Komputer Anda menjalankan puluhan proses, tetapi hanya memiliki beberapa inti CPU. Sistem operasi menciptakan ilusi bahwa semuanya berjalan bersamaan dengan bergantian memakai CPU. Cara memilih siapa yang berjalan berikutnya, penjadwalan, memengaruhi responsivitas dan keadilan seluruh sistem.',
        body: [
            { objectives: ['membedakan program, proses, dan thread', 'menjelaskan status proses dan context switch', 'menyebut kriteria penjadwalan: waiting time, turnaround time, response time, throughput', 'mensimulasikan FCFS, SJF, dan Round Robin serta menghitung metriknya', 'menjelaskan kompromi antar algoritma, termasuk konvoi dan kelaparan (starvation)'] },
            { h2: 'Program, proses, thread' },
            { table: { head: ['Istilah', 'Arti'], rows: [['Program', 'Berkas di disk berisi instruksi (pasif)'], ['Proses', 'Program yang sedang dieksekusi beserta ruang alamat, register, dan sumber dayanya (aktif)'], ['Thread', 'Unit eksekusi di dalam proses; thread dalam satu proses berbagi memori']] } },
            { svg: 'diagram', w: 640, h: 220, label: 'Status proses', nodes: [{ id: 'baru', x: 60, y: 110, shape: 'round', w: 80, h: 36, t: 'Baru' }, { id: 'siap', x: 220, y: 110, shape: 'round', w: 90, h: 36, t: 'Siap' }, { id: 'jalan', x: 400, y: 110, shape: 'round', w: 90, h: 36, t: 'Berjalan' }, { id: 'tunggu', x: 310, y: 190, shape: 'round', w: 100, h: 36, t: 'Menunggu I/O' }, { id: 'selesai', x: 570, y: 110, shape: 'round', w: 90, h: 36, t: 'Selesai' }], edges: [{ from: 'baru', to: 'siap' }, { from: 'siap', to: 'jalan', label: 'dijadwalkan' }, { from: 'jalan', to: 'siap', label: 'jatah habis', via: [[310, 50]] }, { from: 'jalan', to: 'tunggu', label: 'minta I/O' }, { from: 'tunggu', to: 'siap', label: 'I/O selesai' }, { from: 'jalan', to: 'selesai' }], caption: 'Penjadwal hanya memilih dari antrean proses berstatus Siap.' },
            { callout: '<b>Context switch</b>: saat CPU berpindah proses, sistem operasi menyimpan keadaan proses lama (register, PC) dan memuat milik proses baru. Ini memerlukan waktu (mikrodetik) dan mengosongkan cache sebagian, jadi berpindah terlalu sering adalah pemborosan.', kind: 'info', title: 'Biaya perpindahan' },
            { h2: 'Ukuran kinerja' },
            { table: { head: ['Ukuran', 'Rumus', 'Arti'], rows: [['Turnaround time', 'selesai − tiba', 'Waktu total proses berada di sistem'], ['Waiting time', 'turnaround − burst', 'Waktu menunggu di antrean siap'], ['Response time', 'pertama dijalankan − tiba', 'Seberapa cepat proses mulai direspons'], ['Throughput', 'jumlah proses selesai / waktu', 'Kapasitas kerja'], ['Utilisasi CPU', 'waktu CPU sibuk / total', 'Efisiensi pemakaian CPU']] } },
            { h2: 'Simulasi tiga algoritma' },
            `Empat proses dengan waktu tiba dan lama kerja (burst): P1 (0, 8), P2 (1, 4), P3 (2, 9), P4 (3, 5). Mari bandingkan.`,
            { code: py`proses = {"P1": (0, 8), "P2": (1, 4), "P3": (2, 9), "P4": (3, 5)}      # (tiba, burst)

def gantt_teks(gantt):
    return " ".join(f"[{p} {a}-{b}]" for p, a, b in gantt)

def metrik(gantt):
    selesai, pertama = {}, {}
    for p, a, b in gantt:
        selesai[p] = b; pertama.setdefault(p, a)
    ta = {p: selesai[p] - proses[p][0] for p in proses}
    tunggu = {p: ta[p] - proses[p][1] for p in proses}
    resp = {p: pertama[p] - proses[p][0] for p in proses}
    n = len(proses)
    return sum(tunggu.values()) / n, sum(ta.values()) / n, sum(resp.values()) / n

def fcfs():
    waktu, gantt = 0, []
    for p, (tiba, burst) in sorted(proses.items(), key=lambda x: x[1][0]):
        waktu = max(waktu, tiba)
        gantt.append((p, waktu, waktu + burst)); waktu += burst
    return gantt

def sjf():                                           # non-preemptive: pilih burst terpendek di antara yang sudah tiba
    sisa, waktu, gantt = dict(proses), 0, []
    while sisa:
        siap = [p for p, (t, b) in sisa.items() if t <= waktu]
        if not siap:
            waktu = min(t for t, b in sisa.values()); continue
        p = min(siap, key=lambda x: sisa[x][1])
        b = sisa.pop(p)[1]
        gantt.append((p, waktu, waktu + b)); waktu += b
    return gantt

def round_robin(q):
    from collections import deque
    sisa = {p: b for p, (t, b) in proses.items()}
    belum = sorted(proses, key=lambda p: proses[p][0])
    antre, waktu, gantt = deque(), 0, []
    def masukkan():
        while belum and proses[belum[0]][0] <= waktu: antre.append(belum.pop(0))
    masukkan()
    while antre or belum:
        if not antre: waktu = proses[belum[0]][0]; masukkan(); continue
        p = antre.popleft()
        jalan = min(q, sisa[p])
        gantt.append((p, waktu, waktu + jalan)); waktu += jalan; sisa[p] -= jalan
        masukkan()                                    # yang tiba selama jalan masuk lebih dulu
        if sisa[p] > 0: antre.append(p)
    return gantt

for nama, g in (("FCFS", fcfs()), ("SJF (non-preemptive)", sjf()), ("Round Robin q=3", round_robin(3))):
    w, ta, r = metrik(g)
    print(f"{nama}\n  {gantt_teks(g)}\n  rata-rata: waiting={w:.2f}  turnaround={ta:.2f}  response={r:.2f}\n")`, lang: 'python', run: true, caption: 'SJF memberi rata-rata waiting time terkecil (terbukti optimal untuk kasus non-preemptive). Round Robin memberi response time terbaik tetapi rata-rata turnaround lebih besar.' },
            { h2: 'Membandingkan' },
            { table: { head: ['Algoritma', 'Cara kerja', 'Kelebihan', 'Kelemahan'], rows: [['FCFS', 'Siapa datang dulu dilayani dulu', 'Sederhana, adil menurut urutan tiba', 'Efek konvoi: proses pendek menunggu di belakang proses panjang'], ['SJF', 'Pilih burst terpendek', 'Waiting time rata-rata minimum', 'Perlu tahu burst (memperkirakan); proses panjang bisa kelaparan (starvation)'], ['Round Robin', 'Jatah waktu (quantum) bergiliran', 'Responsif, adil untuk sistem interaktif', 'Quantum terlalu kecil: banyak context switch; terlalu besar: mirip FCFS'], ['Prioritas', 'Prioritas tertinggi dahulu', 'Memenuhi kebutuhan khusus (real-time)', 'Starvation; perlu aging (menaikkan prioritas seiring waktu)']] } },
            { callout: 'Sistem operasi nyata memadukan beberapa ide: Linux memakai <b>Completely Fair Scheduler</b> (CFS) dan, sejak kernel 6.6, EEVDF, yang menjaga keadilan waktu CPU antar proses; Windows memakai antrean prioritas multi-level dengan kenaikan prioritas dinamis bagi proses interaktif.', kind: 'info', title: 'Di dunia nyata' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Algoritma dengan waiting time rata-rata minimum untuk kasus non-preemptive?', options: ['SJF', 'FCFS', 'Round Robin'], answer: 0, why: 'Mengutamakan pekerjaan pendek.' }, { q: 'Efek konvoi terjadi pada...', options: ['FCFS', 'Round Robin', 'SJF'], answer: 0, why: 'Proses panjang menahan proses pendek di belakangnya.' }, { q: 'Quantum Round Robin yang terlalu kecil menyebabkan...', options: ['Banyak context switch', 'Starvation', 'Deadlock'], answer: 0, why: 'Biaya perpindahan mendominasi.' }] },
            { exercise: [['Hitung waiting time P1 pada FCFS contoh di atas.', 'P1 tiba 0 dan langsung jalan 0–8: waiting time 0.'], ['Mengapa response time Round Robin bagus?', 'Setiap proses mendapat jatah CPU dalam waktu singkat sejak tiba, tanpa menunggu proses panjang selesai.'], ['Apa itu aging dan masalah apa yang diatasinya?', 'Menaikkan prioritas proses yang lama menunggu untuk mencegah starvation.'], ['Mengapa SJF sulit diterapkan murni?', 'Burst berikutnya tidak diketahui; perlu diperkirakan dari riwayat (rata-rata eksponensial).']] },
            { summary: ['Proses adalah program yang berjalan; status berpindah antara baru, siap, berjalan, menunggu, selesai.', 'Metrik: waiting, turnaround, response time, throughput.', 'FCFS sederhana tetapi konvoi; SJF optimal tetapi butuh perkiraan; RR responsif.', 'Context switch berbiaya; quantum adalah kompromi.'] },
        ],
        faq: [['Apa beda penjadwalan preemptive dan non-preemptive?', 'Preemptive dapat menghentikan proses yang berjalan (kehabisan jatah atau ada yang prioritas lebih tinggi); non-preemptive menunggu proses melepaskan CPU.'], ['Bagaimana pada multi-core?', 'Setiap inti punya antrean dan sistem menyeimbangkan beban serta mempertimbangkan afinitas (menjaga proses di inti yang cache-nya masih hangat).'], ['Apa itu real-time scheduling?', 'Menjamin tugas selesai sebelum tenggat (misalnya pengendali rem); memakai algoritma seperti Rate Monotonic dan EDF.']],
        sources: [REF_OSTEP, REF_SILBER, REF_TANEN, ['Linux kernel documentation: CFS Scheduler', 'https://docs.kernel.org/scheduler/sched-design-CFS.html']],
    },

    {
        slug: 'memori-virtual-paging-dan-algoritma-pengganti-halaman',
        title: 'Memori Virtual, Paging, dan Algoritma Pengganti Halaman',
        description: 'Pahami memori virtual: ruang alamat, paging, tabel halaman, page fault, TLB, dan algoritma pengganti halaman FIFO, LRU, Optimal dengan simulasi serta anomali Belady.',
        date: D, category: C, level: 'Lanjut', tags: ['memori virtual', 'paging', 'page fault', 'LRU', 'anomali Belady'], cta: 'none',
        prereq: ['hierarki memori', 'proses'],
        lead: 'Setiap program mengira dirinya memiliki seluruh memori, dimulai dari alamat nol, walau RAM fisik dibagi puluhan proses dan jauh lebih kecil dari yang dijanjikan. Itulah memori virtual: ilusi yang dijaga bersama oleh perangkat keras dan sistem operasi lewat paging.',
        body: [
            { objectives: ['menjelaskan alamat virtual vs fisik dan manfaat memori virtual', 'menjelaskan paging: halaman, frame, dan tabel halaman', 'menerjemahkan alamat virtual menjadi alamat fisik', 'menjelaskan page fault dan peran TLB', 'mensimulasikan FIFO, LRU, dan Optimal serta menjelaskan anomali Belady'] },
            { h2: 'Mengapa memori virtual' },
            { ul: ['<b>Isolasi</b>: setiap proses punya ruang alamat sendiri sehingga tidak dapat membaca atau merusak memori proses lain.', '<b>Kemudahan</b>: program tidak perlu tahu di mana ia berada di RAM fisik.', '<b>Ukuran melebihi RAM</b>: hanya bagian yang dipakai berada di RAM, sisanya di disk (swap).', '<b>Berbagi</b>: pustaka yang sama dapat dipetakan sekali ke banyak proses.'] },
            { h2: 'Paging' },
            `Ruang alamat virtual dibagi menjadi <b>halaman</b> berukuran tetap (umumnya 4 KB); RAM fisik dibagi menjadi <b>frame</b> berukuran sama. <b>Tabel halaman</b> memetakan nomor halaman ke nomor frame.`,
            { svg: 'diagram', w: 660, h: 260, label: 'Pemetaan halaman ke frame', nodes: [{ id: 'v0', x: 90, y: 40, shape: 'rect', w: 120, h: 36, t: 'Halaman 0' }, { id: 'v1', x: 90, y: 100, shape: 'rect', w: 120, h: 36, t: 'Halaman 1' }, { id: 'v2', x: 90, y: 160, shape: 'rect', w: 120, h: 36, t: 'Halaman 2' }, { id: 'v3', x: 90, y: 220, shape: 'rect', w: 120, h: 36, t: 'Halaman 3' }, { id: 'f0', x: 570, y: 40, shape: 'rect', w: 120, h: 36, t: 'Frame 0' }, { id: 'f1', x: 570, y: 100, shape: 'rect', w: 120, h: 36, t: 'Frame 1 (halaman 2)' }, { id: 'f2', x: 570, y: 160, shape: 'rect', w: 120, h: 36, t: 'Frame 2 (halaman 0)' }, { id: 'f3', x: 570, y: 220, shape: 'rect', w: 120, h: 36, t: 'Frame 3' }, { id: 'tb', x: 330, y: 130, shape: 'frame', w: 160, h: 200, t: 'Tabel halaman' }], edges: [{ from: 'v0', to: 'f2' }, { from: 'v2', to: 'f1' }, { from: 'v1', to: 'tb', dashed: true, label: 'di disk' }], caption: 'Halaman 1 dan 3 sedang tidak berada di RAM (ditandai tidak valid pada tabel halaman).' },
            { h3: 'Menerjemahkan alamat' },
            `Alamat virtual dipisah menjadi <b>nomor halaman</b> dan <b>offset</b>. Offset tidak berubah; nomor halaman diganti nomor frame dari tabel halaman.`,
            { code: py`UKURAN_HALAMAN = 4096                      # 4 KB -> 12 bit offset
tabel_halaman = {0: 7, 1: 3, 2: None, 3: 5}   # halaman -> frame (None: tidak ada di RAM)

def terjemahkan(alamat_virtual):
    halaman, offset = divmod(alamat_virtual, UKURAN_HALAMAN)
    frame = tabel_halaman.get(halaman)
    if frame is None:
        return f"0x{alamat_virtual:05X}: PAGE FAULT (halaman {halaman} tidak ada di RAM)"
    fisik = frame * UKURAN_HALAMAN + offset
    return f"0x{alamat_virtual:05X}: halaman {halaman}, offset {offset:>4} -> frame {frame} -> fisik 0x{fisik:05X}"

for a in (0x0000, 0x0123, 0x1ABC, 0x2010, 0x3FFF):
    print(terjemahkan(a))`, lang: 'python', run: true },
            { h2: 'Page fault dan TLB' },
            { svg: 'flow', label: 'Penanganan page fault', steps: [{ t: 'Akses halaman tak valid', d: 'perangkat keras memicu page fault' }, { t: 'OS memeriksa', d: 'alamat sah? lokasi halaman di disk' }, { t: 'Cari frame bebas', d: 'bila penuh, pilih halaman korban' }, { t: 'Baca dari disk', d: 'muat halaman ke frame, perbarui tabel' }, { t: 'Ulangi instruksi', d: 'program melanjutkan seolah tak terjadi apa-apa' }] },
            { callout: 'Page fault yang memerlukan disk berbiaya jutaan siklus. Dan setiap akses memori perlu menerjemahkan alamat lewat tabel halaman yang juga di memori. Karena itu CPU memakai <b>TLB (Translation Lookaside Buffer)</b>, cache kecil untuk terjemahan terbaru. Hit TLB membuat penerjemahan hampir gratis.', kind: 'info', title: 'Biaya' },
            { h2: 'Algoritma pengganti halaman' },
            `Ketika RAM penuh dan halaman baru harus dimuat, halaman mana yang dikeluarkan? Tiga kandidat klasik:`,
            { table: { head: ['Algoritma', 'Korban', 'Catatan'], rows: [['FIFO', 'Halaman yang paling lama berada di memori', 'Sederhana; bisa membuang halaman yang masih sering dipakai; menderita anomali Belady'], ['LRU', 'Halaman yang paling lama tidak diakses', 'Mendekati optimal pada program berlokalitas; implementasi murni mahal (pendekatan: bit referensi, algoritma clock)'], ['Optimal (Belady)', 'Halaman yang baru akan dipakai paling lama di masa depan', 'Tidak dapat diimplementasikan (butuh masa depan); jadi tolok ukur']] } },
            { code: py`def fifo(ref, frame):
    memori, antre, gagal = set(), [], 0
    for h in ref:
        if h not in memori:
            gagal += 1
            if len(memori) == frame:
                memori.discard(antre.pop(0))
            memori.add(h); antre.append(h)
    return gagal

def lru(ref, frame):
    memori, gagal = [], 0                        # urut: paling lama dipakai di depan
    for h in ref:
        if h in memori: memori.remove(h)
        else:
            gagal += 1
            if len(memori) == frame: memori.pop(0)
        memori.append(h)
    return gagal

def optimal(ref, frame):
    memori, gagal = [], 0
    for i, h in enumerate(ref):
        if h in memori: continue
        gagal += 1
        if len(memori) == frame:
            def berikutnya(x):                   # kapan x dipakai lagi?
                return ref.index(x, i + 1) if x in ref[i + 1:] else float("inf")
            memori.remove(max(memori, key=berikutnya))
        memori.append(h)
    return gagal

ref = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]
print("string referensi:", ref)
for f in (3, 4):
    print(f"{f} frame: FIFO={fifo(ref, f):>2}  LRU={lru(ref, f):>2}  Optimal={optimal(ref, f):>2} page fault")`, lang: 'python', run: true, caption: 'Pada contoh klasik 3 frame: FIFO 15, LRU 12, Optimal 9 page fault. Optimal selalu terkecil; LRU biasanya di antara keduanya.' },
            { h3: 'Anomali Belady' },
            `Intuisinya, menambah frame seharusnya mengurangi page fault. Pada FIFO, tidak selalu.`,
            { code: py`def fifo(ref, frame):
    memori, antre, gagal = set(), [], 0
    for h in ref:
        if h not in memori:
            gagal += 1
            if len(memori) == frame: memori.discard(antre.pop(0))
            memori.add(h); antre.append(h)
    return gagal

def lru(ref, frame):
    memori, gagal = [], 0
    for h in ref:
        if h in memori: memori.remove(h)
        else:
            gagal += 1
            if len(memori) == frame: memori.pop(0)
        memori.append(h)
    return gagal

ref = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]
for f in (3, 4):
    print(f"{f} frame: FIFO={fifo(ref, f)} page fault   LRU={lru(ref, f)} page fault")`, lang: 'python', run: true, caption: 'FIFO: 9 fault dengan 3 frame, tetapi 10 fault dengan 4 frame. LRU tidak mengalaminya karena termasuk algoritma "stack" yang selalu membaik dengan tambahan frame.' },
            { h2: 'Thrashing' },
            `Bila total kebutuhan memori proses jauh melebihi RAM, sistem menghabiskan waktu bolak-balik memindahkan halaman dan hampir tidak ada pekerjaan berguna: <b>thrashing</b>. Penangkalnya: batasi jumlah proses aktif, perhatikan <i>working set</i> (halaman yang sedang aktif dipakai proses), atau tambah RAM.`,
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Alamat virtual dibagi menjadi...', options: ['Nomor halaman dan offset', 'Frame dan tag', 'Segmen dan cache'], answer: 0, why: 'Nomor halaman diterjemahkan; offset tetap.' }, { q: 'Fungsi TLB?', options: ['Cache untuk terjemahan alamat', 'Menyimpan data pengguna', 'Mengelola jaringan'], answer: 0, why: 'Menghindari akses tabel halaman setiap kali.' }, { q: 'Anomali Belady terjadi pada...', options: ['FIFO', 'LRU', 'Optimal'], answer: 0, why: 'Menambah frame dapat menaikkan page fault.' }] },
            { exercise: [['Alamat virtual 0x2010 dengan halaman 4 KB berada di halaman berapa dan offset berapa?', '0x2010 = 8208; halaman 8208 // 4096 = 2; offset 8208 − 8192 = 16 (0x10).'], ['Mengapa algoritma Optimal tidak dapat dipakai nyata namun berguna?', 'Perlu mengetahui akses masa depan; dipakai sebagai batas bawah untuk menilai algoritma lain.'], ['Apa yang dimaksud working set?', 'Kumpulan halaman yang sedang aktif dipakai proses dalam jangka waktu terbaru.'], ['Berapa bit offset untuk halaman 8 KB?', '8 KB = 2¹³ sehingga 13 bit.']] },
            { summary: ['Memori virtual memberi isolasi, kemudahan, dan ruang alamat lebih besar dari RAM.', 'Paging: halaman virtual dipetakan ke frame lewat tabel halaman; TLB mempercepat.', 'Page fault memuat halaman dari disk; bila penuh, algoritma pengganti memilih korban.', 'FIFO, LRU, Optimal; anomali Belady pada FIFO; thrashing bila memori terlalu sempit.'] },
        ],
        faq: [['Apa itu swap?', 'Area disk untuk menyimpan halaman yang dikeluarkan dari RAM.'], ['Apa itu copy-on-write?', 'Dua proses (misalnya hasil fork) berbagi halaman yang sama sampai salah satu menulis, baru halaman disalin.'], ['Apakah SSD menghapus kebutuhan memori virtual?', 'Tidak. SSD mempercepat swap tetapi tetap jauh lebih lambat dari RAM; memori virtual tetap berguna untuk isolasi dan penyederhanaan.']],
        sources: [REF_OSTEP, REF_SILBER, REF_TANEN, ['Belady, Nelson, Shedler, An anomaly in space-time characteristics of certain programs running in a paging machine, CACM 12(6), 1969', 'https://dl.acm.org/doi/10.1145/363011.363155']],
    },

    {
        slug: 'command-line-linux-dasar-navigasi-berkas-pipe-dan-izin',
        title: 'Command Line Linux Dasar: Navigasi, Pipe, dan Izin Berkas',
        description: 'Belajar command line Linux dari nol: navigasi direktori, perintah berkas, pipe dan redirect, grep, find, izin berkas (chmod), proses, dan alur kerja yang aman, dengan contoh dan latihan.',
        date: D, category: C, level: 'Pemula', tags: ['Linux', 'command line', 'bash', 'pipe', 'chmod'], cta: 'none',
        prereq: ['konsep berkas dan folder'],
        lead: 'Antarmuka grafis nyaman untuk hal yang sering dilakukan, tetapi baris perintah unggul untuk otomasi, pekerjaan berulang, dan mengelola server yang tidak memiliki layar. Hampir semua server, kontainer, dan sistem cloud dijalankan dengan Linux, sehingga kemampuan dasar baris perintah adalah keterampilan yang akan terus terpakai.',
        body: [
            { objectives: ['bernavigasi dan mengelola berkas dengan pwd, ls, cd, mkdir, cp, mv, rm', 'melihat dan mencari isi: cat, less, head, tail, grep, find', 'menggabungkan perintah dengan pipe dan redirect', 'membaca dan mengubah izin berkas (chmod)', 'bekerja dengan proses dan variabel lingkungan serta kebiasaan aman'] },
            { h2: 'Cara membaca contoh' },
            `Tanda <code>$</code> menandakan prompt (jangan diketik). Baris tanpa <code>$</code> adalah keluaran. Contoh dijalankan pada shell bash di Linux, macOS, atau WSL pada Windows; perintah dasarnya sama.`,
            { h2: 'Navigasi dan struktur direktori' },
            { code: '$ pwd                      # di mana saya sekarang?\n/home/ani\n$ ls                       # isi direktori\nDokumen  Unduhan  proyek\n$ ls -la                   # semua (termasuk tersembunyi), format panjang\n$ cd proyek                # masuk ke direktori\n$ cd ..                    # naik satu tingkat\n$ cd ~                     # ke direktori home\n$ cd -                     # kembali ke direktori sebelumnya', lang: 'bash' },
            { table: { head: ['Simbol', 'Arti'], rows: [['/', 'Akar sistem berkas (path absolut dimulai dari sini)'], ['~', 'Direktori home pengguna (/home/ani)'], ['.', 'Direktori saat ini'], ['..', 'Direktori induk'], ['*', 'Pengganti nol atau lebih karakter (globbing), misalnya *.txt']] } },
            { h2: 'Mengelola berkas' },
            { code: '$ mkdir -p laporan/2026          # buat folder (dan induk bila perlu)\n$ touch catatan.txt              # buat berkas kosong\n$ cp catatan.txt cadangan.txt    # salin\n$ mv cadangan.txt laporan/       # pindah (juga untuk mengganti nama)\n$ rm cadangan.txt                # hapus (TIDAK ada tempat sampah!)\n$ rm -r laporan                  # hapus folder beserta isinya\n$ cat catatan.txt                # tampilkan isi\n$ less log.txt                   # lihat halaman demi halaman (q untuk keluar)\n$ head -n 5 log.txt              # 5 baris pertama\n$ tail -n 5 log.txt              # 5 baris terakhir\n$ tail -f log.txt                # ikuti penambahan baris secara langsung', lang: 'bash' },
            { callout: '<code>rm</code> tidak memiliki tempat sampah. Perintah seperti <code>rm -rf /</code> atau salah ketik pada <code>rm -rf *</code> dapat menghapus semuanya tanpa konfirmasi. Biasakan memeriksa dengan <code>ls</code> memakai pola yang sama sebelum menghapus, dan jangan pernah menjalankan perintah <code>sudo rm</code> dari sumber yang tidak dipercaya.', kind: 'warn', title: 'Hati-hati' },
            { h2: 'Pipe dan redirect: kekuatan sebenarnya' },
            `Filosofi Unix: program kecil yang melakukan satu hal dengan baik, dihubungkan satu sama lain. <code>|</code> (pipe) mengalirkan keluaran satu perintah menjadi masukan perintah berikutnya; <code>&gt;</code> menulis ke berkas, <code>&gt;&gt;</code> menambahkan, <code>&lt;</code> membaca dari berkas.`,
            { svg: 'flow', label: 'Pipeline', steps: [{ t: 'cat akses.log', d: 'membaca berkas' }, { t: 'grep "404"', d: 'menyaring baris' }, { t: 'sort | uniq -c', d: 'mengurutkan dan menghitung' }, { t: 'sort -rn | head', d: 'peringkat teratas' }], caption: 'Setiap tahap hanya tahu masukan dan keluaran teks. Itu yang membuat potongan kecil dapat dirangkai bebas.' },
            { code: 'akses.log (contoh isi):\n10.0.0.5 GET /beranda 200\n10.0.0.7 GET /produk 404\n10.0.0.5 GET /produk 404\n10.0.0.9 GET /beranda 200\n10.0.0.7 GET /produk 404\n\n$ grep " 404" akses.log                      # baris yang mengandung 404\n$ grep -c " 404" akses.log                   # hitung saja\n3\n$ grep " 404" akses.log | cut -d" " -f1 | sort | uniq -c | sort -rn\n      2 10.0.0.7\n      1 10.0.0.5\n$ grep " 404" akses.log > galat.txt          # simpan hasil ke berkas\n$ echo "selesai" >> galat.txt                # tambahkan di akhir', lang: 'bash', caption: 'Satu baris perintah menjawab: alamat IP mana yang paling sering menghasilkan galat 404?' },
            { h2: 'Mencari: grep dan find' },
            { code: '$ grep -r "TODO" src/             # cari teks di semua berkas dalam src\n$ grep -rn --include="*.js" "fetch(" .   # dengan nomor baris, hanya berkas .js\n$ grep -i "error" log.txt         # abaikan huruf besar-kecil\n$ find . -name "*.log"            # cari berkas menurut nama\n$ find . -type f -size +10M       # berkas lebih dari 10 MB\n$ find . -mtime -1                # diubah dalam 1 hari terakhir', lang: 'bash' },
            { h2: 'Izin berkas' },
            `Setiap berkas memiliki izin untuk tiga pihak: pemilik (u), grup (g), dan lainnya (o), masing-masing r (baca), w (tulis), x (eksekusi).`,
            { code: '$ ls -l\n-rwxr-xr--  1 ani staf  1204 Okt 23 skrip.sh\n drwxr-xr-x  2 ani staf  4096 Okt 23 proyek\n\nrwx r-x r--   = pemilik: baca+tulis+jalankan; grup: baca+jalankan; lainnya: baca\n 7   5   4    = nilai oktal (r=4, w=2, x=1)\n\n$ chmod +x skrip.sh         # tambah izin eksekusi\n$ chmod 644 catatan.txt     # rw-r--r--\n$ chmod 600 kunci.pem       # hanya pemilik (wajib untuk kunci privat SSH)\n$ ./skrip.sh                # menjalankan skrip di direktori saat ini', lang: 'bash', caption: 'Tahu bahwa izin adalah tiga digit oktal (lihat materi sistem bilangan) membuat chmod 755 dan 644 menjadi masuk akal, bukan hafalan.' },
            { h2: 'Proses dan lingkungan' },
            { code: '$ ps aux | grep node        # lihat proses yang berjalan\n$ top                       # pemantau interaktif (q untuk keluar)\n$ kill 4321                 # minta proses 4321 berhenti baik-baik\n$ kill -9 4321              # paksa berhenti (pilihan terakhir)\n$ perintah &                # jalankan di latar belakang\n$ echo $PATH                # variabel lingkungan: tempat shell mencari program\n$ export API_URL=https://contoh.id   # set variabel untuk proses turunan\n$ history | tail            # perintah terakhir\n$ man grep                  # manual; tekan q untuk keluar', lang: 'bash' },
            { w: 'checklist', title: 'Kebiasaan aman di terminal', items: ['Periksa lokasi dengan pwd sebelum menjalankan perintah yang menghapus atau mengubah banyak berkas.', 'Uji pola dengan ls (atau find tanpa -delete) sebelum rm.', 'Jangan menempelkan perintah dari internet yang Anda tidak pahami, terutama dengan sudo atau curl ... | sh.', 'Gunakan sudo seperlunya; jangan bekerja sebagai root sehari-hari.', 'Cadangkan berkas penting sebelum mengubah dengan sed -i atau skrip massal.', 'Gunakan Tab untuk melengkapi nama dan panah atas untuk riwayat; Ctrl+C membatalkan perintah.', 'Simpan perintah yang berguna sebagai skrip kecil dan beri komentar.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pipe (|) berfungsi untuk...', options: ['Mengalirkan keluaran satu perintah ke masukan perintah berikutnya', 'Menghapus berkas', 'Menyalin direktori'], answer: 0, why: 'Menggabungkan program kecil.' }, { q: 'chmod 755 memberikan...', options: ['rwx untuk pemilik, r-x untuk grup dan lainnya', 'Semua izin untuk semua', 'Hanya baca'], answer: 0, why: '7 = 4+2+1, 5 = 4+1.' }, { q: 'Perintah untuk menambahkan teks ke akhir berkas?', options: ['echo "teks" >> berkas', 'echo "teks" > berkas', 'cat berkas'], answer: 0, why: '>> menambahkan; > menimpa.' }] },
            { exercise: [['Tulis perintah untuk menghitung jumlah berkas .md di direktori saat ini dan subdirektorinya.', '<code>find . -name "*.md" | wc -l</code>'], ['Apa arti -rw-r----- ?', 'Pemilik baca+tulis; grup baca; lainnya tidak ada akses = 640.'], ['Bagaimana menampilkan 10 baris log yang mengandung "ERROR" paling baru?', '<code>grep "ERROR" log.txt | tail -n 10</code>'], ['Apa perbedaan > dan >>?', '> menimpa isi berkas; >> menambahkan di akhir.']] },
            { summary: ['pwd, ls, cd, mkdir, cp, mv, rm untuk navigasi dan berkas; rm tidak punya tempat sampah.', 'Pipe dan redirect menggabungkan program kecil menjadi alur kerja kuat.', 'grep dan find untuk mencari isi dan berkas.', 'Izin rwx dalam oktal; chmod mengubahnya.', 'Kebiasaan aman: periksa sebelum menghapus dan waspada pada perintah tak dikenal.'] },
        ],
        faq: [['Bagaimana mencoba Linux di Windows?', 'Pasang WSL (Windows Subsystem for Linux) dengan wsl --install; atau pakai mesin virtual dan Git Bash untuk sebagian perintah.'], ['Apa bedanya bash dan zsh?', 'Keduanya shell. bash adalah standar luas di Linux; zsh bawaan macOS modern dan menawarkan penyelesaian otomatis yang lebih kaya. Perintah dasar identik.'], ['Bagaimana mengotomasi dengan skrip?', 'Tulis perintah dalam berkas .sh dengan baris pertama #!/usr/bin/env bash, beri izin eksekusi, lalu jalankan.']],
        sources: [['The Linux Command Line, William Shotts (gratis)', 'https://linuxcommand.org/tlcl.php'], ['GNU Coreutils Manual', 'https://www.gnu.org/software/coreutils/manual/'], ['Bash Reference Manual', 'https://www.gnu.org/software/bash/manual/'], ['Microsoft Learn: Install WSL', 'https://learn.microsoft.com/windows/wsl/install']],
    },

    {
        slug: 'git-dan-github-dasar-commit-branch-merge-dan-pull-request',
        title: 'Git dan GitHub Dasar: Commit, Branch, Merge, Pull Request',
        description: 'Pelajari version control dengan Git: konsep repositori, commit, staging, branch, merge, konflik, remote, dan alur pull request di GitHub, lengkap dengan perintah, diagram, dan kebiasaan yang baik.',
        date: D, category: C, level: 'Pemula', tags: ['Git', 'GitHub', 'version control', 'branch', 'pull request'], cta: 'none',
        prereq: ['command line dasar'],
        lead: 'Pernahkah memiliki berkas "laporan_final_v2_revisi_beneran_final.docx"? Git menyelesaikan masalah itu untuk kode: setiap perubahan tercatat, dapat dibandingkan dan dibatalkan, dan banyak orang dapat bekerja serentak tanpa saling menimpa. Hampir semua tim perangkat lunak memakainya, jadi ini keterampilan dasar bagi profesional informatika.',
        body: [
            { objectives: ['menjelaskan repositori, commit, working directory, staging area, dan riwayat', 'memakai init, add, commit, status, log, diff', 'membuat dan menggabungkan branch serta menyelesaikan konflik', 'memakai remote: clone, push, pull, fetch', 'mengikuti alur kerja pull request dan menulis commit message yang baik'] },
            { h2: 'Model mental' },
            { svg: 'flow', label: 'Tiga area Git', steps: [{ t: 'Working directory', d: 'berkas yang Anda edit' }, { t: 'git add', d: 'memilih perubahan' }, { t: 'Staging area (index)', d: 'perubahan yang akan dimasukkan' }, { t: 'git commit', d: 'menyimpan potret' }, { t: 'Repositori', d: 'riwayat commit' }], caption: 'Commit adalah potret (snapshot) seluruh proyek pada satu waktu, bukan sekadar daftar perubahan. Staging area memungkinkan Anda memilih perubahan mana yang masuk commit.' },
            { h2: 'Alur dasar' },
            { code: '$ git config --global user.name "Nama Anda"\n$ git config --global user.email "anda@contoh.id"\n\n$ git init                     # mulai repositori di folder ini\n$ git status                   # apa yang berubah?\n$ git add README.md            # masukkan ke staging (atau: git add .)\n$ git commit -m "Tambah README dengan petunjuk instalasi"\n$ git log --oneline            # riwayat ringkas\na1b2c3d Tambah README dengan petunjuk instalasi\n\n$ git diff                     # perubahan yang belum di-stage\n$ git diff --staged            # perubahan yang sudah di-stage', lang: 'bash' },
            { callout: 'Tulis pesan commit yang menjawab "mengapa". Format umum: baris pertama ringkas dalam bentuk perintah (±50 karakter), baris kosong, lalu penjelasan bila perlu. Contoh baik: <i>"Batasi percobaan login 5 kali untuk mencegah serangan brute force"</i>. Contoh buruk: <i>"fix"</i>, <i>"update"</i>, <i>"asdf"</i>.', kind: 'good', title: 'Commit message' },
            { h2: 'Branch: cabang kerja yang murah' },
            `Branch adalah penunjuk bergerak ke sebuah commit. Membuatnya hampir gratis, jadi alur modern memakainya untuk setiap fitur atau perbaikan.`,
            { svg: 'diagram', w: 660, h: 200, label: 'Branch dan merge', nodes: [{ id: 'c1', x: 60, y: 60, shape: 'circle', w: 30, h: 30, t: 'A' }, { id: 'c2', x: 160, y: 60, shape: 'circle', w: 30, h: 30, t: 'B' }, { id: 'c3', x: 260, y: 60, shape: 'circle', w: 30, h: 30, t: 'C' }, { id: 'c6', x: 560, y: 60, shape: 'circle', w: 30, h: 30, t: 'M' }, { id: 'f1', x: 260, y: 150, shape: 'circle', w: 30, h: 30, t: 'D' }, { id: 'f2', x: 380, y: 150, shape: 'circle', w: 30, h: 30, t: 'E' }, { id: 'm4', x: 420, y: 60, shape: 'circle', w: 30, h: 30, t: 'F' }, { id: 'lbl1', x: 60, y: 20, shape: 'text', w: 80, h: 20, t: 'main' }, { id: 'lbl2', x: 320, y: 185, shape: 'text', w: 120, h: 20, t: 'fitur/login' }], edges: [{ from: 'c1', to: 'c2', head: 'none' }, { from: 'c2', to: 'c3', head: 'none' }, { from: 'c3', to: 'm4', head: 'none' }, { from: 'm4', to: 'c6', head: 'none' }, { from: 'c2', to: 'f1', head: 'none' }, { from: 'f1', to: 'f2', head: 'none' }, { from: 'f2', to: 'c6', head: 'none' }], caption: 'Cabang fitur/login dibuat dari commit B. Saat selesai digabung ke main sebagai commit merge M, yang memiliki dua induk.' },
            { code: '$ git switch -c fitur/login        # buat dan pindah ke branch baru\n   ... edit, add, commit ...\n$ git switch main                  # kembali ke main\n$ git merge fitur/login            # gabungkan\n$ git branch -d fitur/login        # hapus branch yang sudah digabung\n$ git branch                       # daftar branch (tanda * = yang aktif)', lang: 'bash' },
            { h2: 'Konflik merge' },
            `Konflik terjadi saat dua branch mengubah <i>baris yang sama</i> dan Git tidak dapat memilih. Git menandai bagian yang bertabrakan dan meminta Anda memutuskan.`,
            { code: '<<<<<<< HEAD\nBatas percobaan login: 3 kali\n=======\nBatas percobaan login: 5 kali\n>>>>>>> fitur/login', lang: 'text', caption: 'Bagian atas milik branch saat ini (HEAD), bagian bawah milik branch yang digabung. Edit hingga benar, hapus penanda, lalu git add dan git commit.' },
            { ol: ['Buka berkas yang berkonflik dan putuskan isi akhirnya (gabungan atau salah satu).', 'Hapus tiga penanda <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.', 'Jalankan <code>git add</code> untuk berkas itu.', 'Jalankan <code>git commit</code> untuk menyelesaikan merge (atau <code>git merge --abort</code> untuk membatalkan).'] },
            { h2: 'Remote dan GitHub' },
            { code: '$ git clone https://github.com/pengguna/proyek.git   # salin repositori beserta riwayatnya\n$ git remote -v                    # lihat alamat remote (biasanya bernama origin)\n$ git push -u origin fitur/login   # kirim branch ke GitHub\n$ git fetch                        # ambil pembaruan tanpa menggabungkan\n$ git pull                         # fetch + merge perubahan terbaru', lang: 'bash' },
            { h3: 'Alur pull request' },
            { svg: 'cycle', label: 'Alur pull request', items: ['Buat branch dari main', 'Commit perubahan', 'Push dan buka Pull Request', 'Review dan diskusi', 'Perbaiki lalu merge'], caption: 'Pull request adalah tempat tinjauan kode, pengujian otomatis (CI), dan diskusi sebelum kode masuk ke cabang utama.' },
            { h2: 'Membatalkan dan memulihkan' },
            { table: { head: ['Situasi', 'Perintah', 'Catatan'], rows: [['Buang perubahan pada satu berkas (belum di-stage)', 'git restore berkas', 'Perubahan hilang permanen'], ['Keluarkan berkas dari staging', 'git restore --staged berkas', 'Perubahan tetap di working directory'], ['Perbaiki pesan commit terakhir (belum di-push)', 'git commit --amend', 'Jangan amend commit yang sudah dibagikan'], ['Batalkan commit yang sudah dibagikan', 'git revert <hash>', 'Membuat commit baru yang membalik; aman bagi riwayat bersama'], ['Lihat keadaan repo sebelumnya', 'git reflog', 'Penyelamat saat salah langkah: menampilkan posisi HEAD sebelumnya']] } },
            { callout: 'Aturan emas: <b>jangan menulis ulang riwayat yang sudah di-push dan dipakai orang lain</b> (force push, rebase branch bersama). Untuk membatalkan commit yang telah dibagikan, pakai <code>git revert</code>.', kind: 'warn', title: 'Keselamatan riwayat' },
            { h2: 'Berkas yang tidak boleh masuk Git' },
            { code: '# .gitignore\nnode_modules/\n.env                # rahasia: kunci API, kata sandi basis data\n*.log\n.DS_Store\ndist/', lang: 'text', caption: 'Rahasia yang pernah ter-commit tetap ada dalam riwayat walau berkasnya dihapus kemudian. Bila terlanjur bocor, anggap rahasia itu sudah bocor dan ganti (rotasi) kuncinya.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Fungsi staging area?', options: ['Memilih perubahan yang akan masuk commit berikutnya', 'Menyimpan cadangan di cloud', 'Menghapus berkas'], answer: 0, why: 'git add memasukkan perubahan ke staging.' }, { q: 'Perintah yang membuat branch baru dan langsung pindah ke sana?', options: ['git switch -c nama', 'git commit nama', 'git merge nama'], answer: 0, why: 'Atau git checkout -b nama pada versi lama.' }, { q: 'Cara aman membatalkan commit yang sudah di-push dan dipakai tim?', options: ['git revert', 'git reset --hard dan force push', 'Menghapus folder .git'], answer: 0, why: 'Membuat commit pembalik tanpa menulis ulang riwayat.' }] },
            { exercise: [['Tulis urutan perintah untuk membuat repositori baru, menambah satu berkas, dan commit.', 'git init; git add berkas; git commit -m "Pesan commit"'], ['Apa bedanya git fetch dan git pull?', 'fetch hanya mengunduh perubahan; pull = fetch lalu merge ke branch saat ini.'], ['Anda menemukan kunci API ter-commit di repositori publik. Apa langkahnya?', 'Cabut dan ganti kunci segera; hapus dari kode dan pindahkan ke variabel lingkungan; pertimbangkan membersihkan riwayat, tetapi anggap kunci sudah bocor.'], ['Mengapa membuat branch untuk setiap fitur?', 'Mengisolasi pekerjaan, memudahkan tinjauan, dan menjaga main tetap stabil.']] },
            { summary: ['Git menyimpan riwayat sebagai potret commit; area: working directory, staging, repositori.', 'Branch murah; merge menggabungkan; konflik diselesaikan manual.', 'Remote (GitHub): clone, push, fetch, pull; pull request untuk tinjauan.', 'Tulis commit message bermakna; jangan commit rahasia; jangan tulis ulang riwayat bersama.'] },
        ],
        faq: [['Apa bedanya Git dan GitHub?', 'Git adalah perangkat lunak version control yang berjalan lokal. GitHub (juga GitLab, Bitbucket) adalah layanan hosting repositori Git dengan fitur kolaborasi.'], ['Perlukah menguasai rebase?', 'Berguna untuk merapikan riwayat branch pribadi, tetapi bukan syarat awal. Kuasai commit, branch, merge, dan pull request lebih dulu.'], ['Bagaimana belajar lebih dalam?', 'Buku Pro Git (gratis) dan latihan interaktif seperti Learn Git Branching.']],
        sources: [REF_PROGIT, ['Git Documentation', 'https://git-scm.com/doc'], ['GitHub Docs: About pull requests', 'https://docs.github.com/pull-requests'], ['Learn Git Branching (latihan interaktif)', 'https://learngitbranching.js.org/']],
    },
];
