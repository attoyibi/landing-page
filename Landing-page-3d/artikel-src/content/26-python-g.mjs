const D = '2026-10-23';
const C = 'Algoritma & Pemrograman Python';
const py = String.raw;

const REF_CLRS = ['Cormen, Leiserson, Rivest, Stein, Introduction to Algorithms (edisi ke-4, MIT Press, 2022)', ''];
const REF_MIT6006 = ['MIT OpenCourseWare 6.006: Introduction to Algorithms', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/'];
const REF_LEV = ['Anany Levitin, Introduction to the Design and Analysis of Algorithms (Pearson)', ''];
const REF_KT = ['Jon Kleinberg dan Éva Tardos, Algorithm Design (Pearson)', ''];

export default [
    {
        slug: 'algoritma-greedy-python-koin-activity-selection-dan-batasannya',
        title: 'Algoritma Greedy: Koin, Activity Selection, dan Batasannya',
        description: 'Pelajari strategi greedy lewat penukaran koin dan activity selection, kapan hasilnya optimal, dan kapan gagal. Dilengkapi kode Python, contoh tandingan, dan argumen exchange.',
        date: D, category: C, level: 'Menengah', tags: ['greedy', 'activity selection', 'penukaran koin', 'optimasi', 'algoritma'], cta: 'none',
        prereq: ['list dan sorting', 'fungsi', 'kompleksitas dasar'],
        lead: 'Algoritma greedy selalu memilih opsi yang tampak terbaik saat ini tanpa menengok ke belakang. Sering kali cepat dan sederhana, tetapi tidak selalu benar. Memahami kapan greedy terbukti optimal, dan kapan ia menipu, adalah inti materi ini.',
        body: [
            { objectives: ['menjelaskan prinsip pilihan greedy dan substruktur optimal', 'menyelesaikan activity selection dengan greedy dan memahami alasan ia optimal', 'menunjukkan contoh tandingan ketika greedy gagal (penukaran koin)', 'membedakan greedy dari dynamic programming dan brute force'] },
            { h2: 'Ide greedy' },
            `Pada setiap langkah, ambil pilihan yang paling menjanjikan saat itu dan jangan pernah mengubahnya. Dua syarat agar greedy benar: <b>sifat pilihan greedy</b> (ada solusi optimal yang memuat pilihan itu) dan <b>substruktur optimal</b> (sisa masalah setelah pilihan itu berbentuk masalah serupa yang lebih kecil).`,
            { h2: 'Contoh 1: penukaran koin' },
            { code: py`def tukar_greedy(nilai, koin):
    hasil = []
    for k in sorted(koin, reverse=True):     # mulai dari koin terbesar
        while nilai >= k:
            nilai -= k
            hasil.append(k)
    return hasil if nilai == 0 else None

rupiah = [1000, 500, 200, 100]
print(tukar_greedy(1800, rupiah))
print(tukar_greedy(1300, rupiah))`, lang: 'python', run: true, caption: 'Dengan pecahan rupiah (1000, 500, 200, 100) greedy menghasilkan jumlah koin minimum.' },
            { callout: 'Greedy pada koin bergantung pada <b>sistem pecahannya</b>. Pada pecahan {1, 3, 4}, uang 6 ditukar greedy menjadi 4+1+1 (3 koin), padahal 3+3 (2 koin) lebih baik.', kind: 'warn', title: 'Contoh tandingan' },
            { cont: true, code: py`print("greedy :", tukar_greedy(6, [1, 3, 4]))

# solusi benar via DP sederhana (jumlah koin minimum)
def min_koin(nilai, koin):
    INF = float("inf")
    dp = [0] + [INF] * nilai
    for n in range(1, nilai + 1):
        for k in koin:
            if k <= n and dp[n - k] + 1 < dp[n]:
                dp[n] = dp[n - k] + 1
    return dp[nilai]

print("optimal:", min_koin(6, [1, 3, 4]), "koin")`, lang: 'python', run: true },
            { h2: 'Contoh 2: activity selection' },
            `Diberikan kegiatan dengan waktu mulai dan selesai. Pilih sebanyak mungkin kegiatan yang tidak bertabrakan. Strategi greedy yang benar: urutkan berdasarkan <b>waktu selesai paling awal</b>, lalu ambil setiap kegiatan yang tidak bertabrakan dengan yang terakhir diambil.`,
            { code: py`def pilih_kegiatan(kegiatan):
    terurut = sorted(kegiatan, key=lambda k: k[1])      # urut waktu selesai
    dipilih, selesai_terakhir = [], float("-inf")
    for mulai, selesai, nama in terurut:
        if mulai >= selesai_terakhir:                   # tidak bertabrakan
            dipilih.append(nama)
            selesai_terakhir = selesai
    return dipilih

kegiatan = [(1, 4, "A"), (3, 5, "B"), (0, 6, "C"), (5, 7, "D"),
            (3, 9, "E"), (5, 9, "F"), (6, 10, "G"), (8, 11, "H"), (8, 12, "I"), (2, 14, "J"), (12, 16, "K")]
print(pilih_kegiatan(kegiatan))`, lang: 'python', run: true },
            { svg: 'timeline', label: 'Kegiatan terpilih', caption: 'Pilih A (selesai 4), lalu D (mulai 5, selesai 7), lalu H (mulai 8, selesai 11), lalu K (mulai 12). Empat kegiatan tanpa tabrakan.', events: [['1–4', 'Kegiatan A', 'selesai paling awal, dipilih'], ['5–7', 'Kegiatan D', 'mulai setelah A selesai'], ['8–11', 'Kegiatan H', 'mulai setelah D selesai'], ['12–16', 'Kegiatan K', 'mulai setelah H selesai']] },
            { h2: 'Mengapa mengurutkan menurut waktu selesai?' },
            `Strategi yang tampak menggoda tetapi salah: ambil yang <i>mulai paling awal</i> atau yang <i>paling singkat</i>. Kegiatan J (2–14) mulai awal tetapi memakan hampir seluruh waktu; kegiatan pendek bisa saja berada di tengah dua kegiatan lain dan menghalangi keduanya. Kegiatan yang selesai paling awal menyisakan waktu terbanyak bagi sisanya.`,
            { code: py`def salah_mulai_awal(kegiatan):
    dipilih, selesai_terakhir = [], float("-inf")
    for mulai, selesai, nama in sorted(kegiatan):         # urut waktu mulai
        if mulai >= selesai_terakhir:
            dipilih.append(nama); selesai_terakhir = selesai
    return dipilih

print("urut mulai  :", salah_mulai_awal(kegiatan))
print("urut selesai:", pilih_kegiatan(kegiatan))`, lang: 'python', run: true, cont: true },
            `<b>Argumen pertukaran (exchange argument)</b>: ambil solusi optimal mana pun. Kegiatan pertamanya bisa ditukar dengan kegiatan yang selesai paling awal tanpa menimbulkan tabrakan dan tanpa mengurangi jumlah kegiatan. Maka ada solusi optimal yang memuat pilihan greedy; sisanya adalah masalah yang sama pada kegiatan setelahnya.`,
            { h2: 'Greedy, DP, dan brute force' },
            { table: { head: ['Pendekatan', 'Cara kerja', 'Kecepatan', 'Selalu optimal?'], rows: [['Brute force', 'Coba semua kemungkinan', 'Sangat lambat (eksponensial)', 'Ya'], ['Greedy', 'Pilih terbaik saat ini', 'Cepat', 'Hanya bila terbukti'], ['Dynamic programming', 'Simpan hasil submasalah, pilih terbaik dari semua', 'Polinomial', 'Ya (bila ada substruktur optimal)']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pada activity selection, kegiatan diurutkan menurut...', options: ['Waktu mulai', 'Durasi', 'Waktu selesai'], answer: 2, why: 'Selesai paling awal menyisakan ruang terbanyak.' }, { q: 'Greedy untuk koin {1,3,4} dan nilai 6 menghasilkan...', options: ['3+3', '4+1+1', '6'], answer: 1, why: 'Greedy mengambil 4 dulu, padahal 3+3 lebih sedikit.' }, { q: 'Cara membuktikan greedy benar?', options: ['Mencoba beberapa contoh', 'Argumen pertukaran atau induksi', 'Menjalankan lebih cepat'], answer: 1, why: 'Contoh tidak membuktikan; perlu bukti formal.' }] },
            { exercise: [['Tukar 2.700 rupiah dengan pecahan {1000, 500, 200, 100} secara greedy.', '1000+1000+500+200 = 2.700, empat koin.'], ['Cari satu sistem pecahan dan nilai di mana greedy tidak optimal selain contoh di atas.', 'Pecahan {1, 5, 6} untuk nilai 10: greedy 6+1+1+1+1 (5 koin), optimal 5+5 (2 koin).'], ['Mengapa mengurutkan menurut durasi terpendek tidak menjamin optimal pada activity selection?', 'Kegiatan pendek di tengah dapat menabrak dua kegiatan lain yang bila dipilih keduanya menghasilkan lebih banyak.'], ['Berapa kompleksitas pilih_kegiatan?', 'O(n log n) karena pengurutan; pemindaian setelahnya O(n).']] },
            { summary: ['Greedy memilih terbaik lokal; benar hanya bila ada sifat pilihan greedy dan substruktur optimal.', 'Activity selection: urut waktu selesai, ambil yang tidak bertabrakan.', 'Koin: greedy optimal untuk sistem pecahan tertentu, tidak untuk semua.', 'Contoh tandingan membantah greedy; bukti formal (exchange argument) menegakkannya.'] },
        ],
        faq: [['Algoritma terkenal apa saja yang greedy?', 'Kruskal dan Prim (pohon rentang minimum), Dijkstra (bobot tak negatif), kode Huffman, dan fractional knapsack.'], ['Apakah greedy selalu lebih cepat dari DP?', 'Biasanya, karena tidak menyimpan tabel submasalah. Tetapi kecepatan tidak berguna bila hasilnya tidak optimal.'], ['Bagaimana mengenali masalah yang cocok untuk greedy?', 'Coba cari strategi pemilihan sederhana lalu uji dengan contoh tandingan dan coba buktikan dengan argumen pertukaran.']],
        sources: [REF_CLRS, REF_KT, REF_LEV, REF_MIT6006],
    },

    {
        slug: 'dynamic-programming-python-memoization-tabulation-lcs-knapsack',
        title: 'Dynamic Programming: Memoization, LCS, dan Knapsack',
        description: 'Kuasai dynamic programming dengan Fibonacci, memoization vs tabulation, LCS, dan 0/1 knapsack. Ada tabel DP interaktif, kode Python yang dijalankan, dan analisis kompleksitas.',
        date: D, category: C, level: 'Lanjut', tags: ['dynamic programming', 'memoization', 'LCS', 'knapsack', 'optimasi'], cta: 'none',
        prereq: ['rekursi', 'list 2 dimensi', 'dictionary', 'kompleksitas'],
        lead: 'Dynamic programming (DP) adalah rekursi yang tidak lupa. Banyak masalah memecah dirinya menjadi submasalah yang sama berulang kali; DP menyimpan jawabannya agar tiap submasalah dihitung sekali. Hasilnya: dari eksponensial menjadi polinomial.',
        body: [
            { objectives: ['mengenali submasalah yang tumpang tindih dan substruktur optimal', 'menerapkan memoization (top-down) dan tabulation (bottom-up)', 'menyelesaikan LCS dan 0/1 knapsack dengan tabel DP', 'merekonstruksi solusi (bukan hanya nilainya) dari tabel', 'menganalisis waktu dan memori solusi DP'] },
            { h2: 'Masalah awal: Fibonacci yang boros' },
            { code: py`import time

def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)

pemanggilan = 0
def fib_hitung(n):
    global pemanggilan
    pemanggilan += 1
    return n if n < 2 else fib_hitung(n - 1) + fib_hitung(n - 2)

for n in [10, 20, 25]:
    pemanggilan = 0
    fib_hitung(n)
    print(f"fib({n}) membutuhkan {pemanggilan} pemanggilan")`, lang: 'python', run: true, caption: 'Jumlah pemanggilan tumbuh eksponensial karena fib(k) yang sama dihitung berulang kali.' },
            { h2: 'Memoization: simpan hasil yang sudah dihitung' },
            { code: py`from functools import lru_cache

pemanggilan = 0
@lru_cache(maxsize=None)
def fib_memo(n):
    global pemanggilan
    pemanggilan += 1
    return n if n < 2 else fib_memo(n - 1) + fib_memo(n - 2)

print(fib_memo(90), "dengan", pemanggilan, "perhitungan nyata")   # linear, bukan eksponensial`, lang: 'python', run: true },
            { h2: 'Tabulation: isi tabel dari bawah' },
            { code: py`def fib_tabel(n):
    if n < 2: return n
    sebelum, sekarang = 0, 1
    for _ in range(2, n + 1):
        sebelum, sekarang = sekarang, sebelum + sekarang
    return sekarang

print(fib_tabel(90))`, lang: 'python', run: true, caption: 'Karena hanya dua nilai terakhir yang dipakai, memori cukup O(1).' },
            { w: 'compare', title: 'Top-down atau bottom-up?', tabs: [{ label: 'Memoization (top-down)', html: 'Tulis rekursi apa adanya lalu tambahkan cache. Hanya menghitung submasalah yang dibutuhkan. Batas kedalaman rekursi bisa jadi kendala.' }, { label: 'Tabulation (bottom-up)', html: 'Isi tabel dari submasalah terkecil secara iteratif. Tanpa rekursi, sering lebih cepat dan memudahkan optimasi memori, tetapi menghitung semua submasalah.' }] },
            { h2: 'Resep menyusun solusi DP' },
            { svg: 'flow', label: 'Lima langkah DP', steps: [{ t: 'Definisikan state', d: 'apa arti dp[i] atau dp[i][j]?' }, { t: 'Tulis rekurensi', d: 'hubungkan state dengan state lebih kecil' }, { t: 'Tentukan kasus dasar', d: 'nilai awal tabel' }, { t: 'Tentukan urutan isi', d: 'dari kecil ke besar' }, { t: 'Baca jawaban', d: 'dan rekonstruksi bila perlu' }] },
            { h2: 'Contoh: Longest Common Subsequence (LCS)' },
            `LCS dua string adalah subsekuens terpanjang yang muncul di keduanya dengan urutan tetap (tidak harus berurutan rapat). Misalnya LCS dari "ABCBDAB" dan "BDCABA" panjangnya 4. Aplikasinya: perbandingan berkas (diff), bioinformatika.`,
            { math: 'dp[i][j] = dp[i−1][j−1] + 1  bila a[i] = b[j];  jika tidak,  max(dp[i−1][j], dp[i][j−1])' },
            { code: py`def lcs(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    # rekonstruksi: telusuri dari pojok kanan bawah
    hasil, i, j = [], m, n
    while i > 0 and j > 0:
        if a[i - 1] == b[j - 1]:
            hasil.append(a[i - 1]); i -= 1; j -= 1
        elif dp[i - 1][j] >= dp[i][j - 1]:
            i -= 1
        else:
            j -= 1
    return dp, "".join(reversed(hasil))

dp, seq = lcs("ABCBDAB", "BDCABA")
print("panjang:", dp[-1][-1], " contoh LCS:", seq)
for baris in dp:
    print(baris)`, lang: 'python', run: true, caption: 'Tabel dp berukuran (m+1) × (n+1): waktu dan memori O(m·n).' },
            { h2: 'Contoh: 0/1 Knapsack' },
            `Sebuah ransel berkapasitas W. Setiap barang punya berat dan nilai; ambil subset dengan total nilai maksimum tanpa melampaui kapasitas (tiap barang diambil atau tidak, sehingga "0/1"). Greedy berdasarkan nilai per berat <b>tidak</b> menjamin optimal di sini.`,
            { code: py`def knapsack(barang, kapasitas):
    n = len(barang)
    dp = [[0] * (kapasitas + 1) for _ in range(n + 1)]
    for i, (nama, berat, nilai) in enumerate(barang, 1):
        for w in range(kapasitas + 1):
            dp[i][w] = dp[i - 1][w]                          # tidak ambil
            if berat <= w:
                dp[i][w] = max(dp[i][w], dp[i - 1][w - berat] + nilai)   # ambil
    # rekonstruksi barang terpilih
    w, dipilih = kapasitas, []
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            nama, berat, nilai = barang[i - 1]
            dipilih.append(nama); w -= berat
    return dp[n][kapasitas], dipilih[::-1]

barang = [("laptop", 3, 40), ("kamera", 2, 28), ("buku", 1, 10), ("jaket", 2, 12)]
print(knapsack(barang, 5))

# bukti greedy rasio nilai/berat bisa salah
barang2 = [("A", 10, 60), ("B", 20, 100), ("C", 30, 120)]     # rasio nilai/berat: 6, 5, 4
print("DP kapasitas 50:", knapsack(barang2, 50), "(greedy rasio: A+B = 160)")`, lang: 'python', run: true, caption: 'Greedy rasio memilih A lalu B (nilai 160), padahal B+C bernilai 220. DP menemukan optimum.' },
            { callout: 'Kompleksitas knapsack O(n·W) disebut <b>pseudo-polinomial</b>: polinomial terhadap nilai W, tetapi eksponensial terhadap jumlah bit yang menyatakan W. Masalah 0/1 knapsack tergolong NP-hard.', kind: 'info', title: 'Catatan teori' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Dua ciri masalah yang cocok untuk DP?', options: ['Submasalah tumpang tindih dan substruktur optimal', 'Data terurut dan unik', 'Hanya angka bulat'], answer: 0, why: 'Itu syarat klasik DP.' }, { q: 'Kompleksitas waktu LCS dua string panjang m dan n?', options: ['O(m + n)', 'O(m·n)', 'O(2^m)'], answer: 1, why: 'Setiap sel tabel dihitung sekali.' }, { q: 'Perbedaan memoization dan tabulation?', options: ['Memoization top-down dengan cache, tabulation bottom-up dengan tabel', 'Tidak ada beda', 'Tabulation memakai rekursi'], answer: 0, why: 'Arah penyelesaian yang berbeda.' }] },
            { exercise: [['Buat fungsi untuk menghitung jumlah cara menaiki tangga n anak tangga bila boleh naik 1 atau 2 anak tangga sekaligus.', 'dp[n] = dp[n-1] + dp[n-2] dengan dp[0] = dp[1] = 1; setara Fibonacci.'], ['Hitung LCS "AGGTAB" dan "GXTXAYB" secara manual.', 'LCS = "GTAB", panjang 4.'], ['Optimalkan memori knapsack menjadi O(W).', 'Pakai satu baris dp, perbarui kapasitas dari besar ke kecil agar tiap barang dipakai satu kali.'], ['Ubah min_koin pada materi greedy menjadi menghitung banyaknya cara menukar suatu nilai.', 'dp[0] = 1; untuk setiap koin, untuk n dari koin sampai nilai: dp[n] += dp[n - koin].']] },
            { summary: ['DP menyimpan hasil submasalah agar tidak dihitung ulang.', 'Memoization (top-down, cache) dan tabulation (bottom-up, tabel).', 'Resep: state, rekurensi, kasus dasar, urutan isi, rekonstruksi.', 'LCS O(m·n); knapsack O(n·W), pseudo-polinomial.'] },
        ],
        faq: [['Kapan memilih DP daripada greedy?', 'Saat pilihan lokal terbaik tidak menjamin optimum global, misalnya knapsack 0/1 atau koin dengan pecahan sembarang.'], ['Mengapa disebut "dynamic programming"?', 'Richard Bellman memilih nama itu pada 1950-an; "programming" di sini berarti perencanaan bertahap (tabular), bukan menulis program.'], ['Apakah lru_cache cukup untuk semua kasus?', 'Untuk prototipe ya, tetapi rekursi dalam dapat melampaui batas kedalaman dan cache tak terbatas memakan memori.']],
        sources: [REF_CLRS, REF_KT, REF_MIT6006, ['Dokumentasi Python: functools.lru_cache', 'https://docs.python.org/3/library/functools.html#functools.lru_cache']],
    },

    {
        slug: 'backtracking-python-n-queens-subset-sum-dan-permutasi',
        title: 'Backtracking: N-Queens, Subset Sum, dan Pemangkasan',
        description: 'Pelajari backtracking: mencoba, memeriksa, dan mundur. Implementasi N-Queens, subset sum, dan sudoku sederhana di Python, dengan pemangkasan dan perbandingan terhadap brute force.',
        date: D, category: C, level: 'Lanjut', tags: ['backtracking', 'N-Queens', 'subset sum', 'pemangkasan', 'rekursi'], cta: 'none',
        prereq: ['rekursi', 'list', 'Menara Hanoi dan permutasi'],
        lead: 'Backtracking menyusun solusi sedikit demi sedikit dan langsung mundur begitu sebuah pilihan pasti tidak mengarah ke jawaban. Ia seperti brute force yang cerdas: tetap menjelajahi pohon kemungkinan, tetapi memangkas cabang yang sia-sia.',
        body: [
            { objectives: ['menggambarkan ruang pencarian sebagai pohon keputusan', 'menulis kerangka umum backtracking (pilih, jelajah, batalkan)', 'menyelesaikan N-Queens dan subset sum', 'menjelaskan pemangkasan dan dampaknya terhadap jumlah simpul yang dikunjungi'] },
            { h2: 'Kerangka umum' },
            { code: py`def cari(keadaan):
    if selesai(keadaan):
        simpan(keadaan)
        return
    for pilihan in pilihan_yang_mungkin(keadaan):
        if sah(keadaan, pilihan):          # pemangkasan: lewati bila sudah pasti gagal
            terapkan(keadaan, pilihan)      # 1. pilih
            cari(keadaan)                   # 2. jelajahi
            batalkan(keadaan, pilihan)      # 3. batalkan (backtrack)`, lang: 'python' },
            { h2: 'N-Queens' },
            `Letakkan N ratu pada papan N × N sehingga tidak ada dua ratu saling menyerang (sebaris, sekolom, atau sediagonal). Kita menaruh satu ratu per baris dan hanya memilih kolom yang aman.`,
            { code: py`def n_queens(n):
    solusi, kolom = [], []                 # kolom[r] = kolom ratu pada baris r

    def aman(r, c):
        for rr, cc in enumerate(kolom):
            if cc == c or abs(cc - c) == r - rr:   # sekolom atau sediagonal
                return False
        return True

    def cari(r):
        if r == n:
            solusi.append(kolom[:])
            return
        for c in range(n):
            if aman(r, c):
                kolom.append(c)
                cari(r + 1)
                kolom.pop()                 # backtrack

    cari(0)
    return solusi

for n in [4, 6, 8]:
    s = n_queens(n)
    print(f"N={n}: {len(s)} solusi, contoh {s[0]}")

papan = n_queens(8)[0]
for c in papan:
    print(" ".join("Q" if i == c else "." for i in range(8)))`, lang: 'python', run: true, caption: 'Jumlah solusi 4 → 2, 6 → 4, 8 → 92.' },
            { h2: 'Seberapa besar pemangkasan menolong?' },
            { code: py`from itertools import permutations

def brute_force(n):
    hitung = 0
    for p in permutations(range(n)):        # semua penempatan satu ratu per baris dan kolom
        hitung += 1
        if all(abs(p[i] - p[j]) != j - i for i in range(n) for j in range(i + 1, n)):
            pass
    return hitung

def simpul_backtracking(n):
    kolom, hitung = [], [0]
    def cari(r):
        hitung[0] += 1
        if r == n: return
        for c in range(n):
            if all(cc != c and abs(cc - c) != r - rr for rr, cc in enumerate(kolom)):
                kolom.append(c); cari(r + 1); kolom.pop()
    cari(0)
    return hitung[0]

for n in [6, 8]:
    print(f"N={n}: brute force memeriksa {brute_force(n)} susunan; backtracking mengunjungi {simpul_backtracking(n)} simpul")`, lang: 'python', run: true },
            { h2: 'Subset sum' },
            `Dari sekumpulan bilangan, cari himpunan bagian yang jumlahnya tepat T. Setiap elemen punya dua pilihan: ikut atau tidak. Cabang dipangkas bila jumlah sudah melebihi T (untuk bilangan positif).`,
            { code: py`def subset_sum(angka, target):
    angka = sorted(angka)
    hasil = []

    def cari(i, sisa, terpilih):
        if sisa == 0:
            hasil.append(terpilih[:]); return
        if i == len(angka) or angka[i] > sisa:     # pemangkasan
            return
        terpilih.append(angka[i])
        cari(i + 1, sisa - angka[i], terpilih)      # ikut
        terpilih.pop()
        cari(i + 1, sisa, terpilih)                 # tidak ikut

    cari(0, target, [])
    return hasil

print(subset_sum([3, 34, 4, 12, 5, 2], 9))`, lang: 'python', run: true },
            { w: 'compare', title: 'Backtracking vs brute force vs DP', tabs: [{ label: 'Brute force', html: 'Membangkitkan semua kandidat lengkap lalu menguji. Sederhana tetapi memeriksa banyak kandidat yang jelas salah.' }, { label: 'Backtracking', html: 'Menguji kandidat parsial dan membuang cabang yang tidak mungkin. Kasus terburuk tetap eksponensial, tetapi biasanya jauh lebih cepat.' }, { label: 'DP', html: 'Dipakai bila submasalah tumpang tindih dan hanya perlu nilai optimum atau banyak solusi. Backtracking dipakai bila kita perlu menyebutkan semua solusi itu sendiri.' }] },
            { callout: 'Backtracking tidak menjamin cepat. Pada pengetesan terburuk (misalnya tidak ada solusi), ia tetap bisa menjelajahi hampir seluruh pohon. Pemangkasan yang baik dan urutan pilihan yang cerdas sangat menentukan.', kind: 'warn', title: 'Peringatan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Langkah "batalkan" dalam backtracking berguna untuk...', options: ['Mengembalikan keadaan agar pilihan lain dapat dicoba', 'Menghapus rekursi', 'Mempercepat sorting'], answer: 0, why: 'Tanpa membatalkan, keadaan tercemar pilihan sebelumnya.' }, { q: 'Jumlah solusi N-Queens untuk N=8?', options: ['8', '40', '92'], answer: 2, why: 'Ada 92 solusi (12 yang unik hingga rotasi dan pencerminan).' }, { q: 'Apa yang dimaksud pemangkasan?', options: ['Membuang cabang yang pasti gagal', 'Menghapus variabel', 'Menyingkat kode'], answer: 0, why: 'Menghindari penjelajahan yang sia-sia.' }] },
            { exercise: [['Berapa solusi N-Queens untuk N = 5?', '10 solusi.'], ['Modifikasi n_queens agar hanya mengembalikan solusi pertama dan berhenti.', 'Kembalikan True dari cari saat n tercapai dan hentikan loop bila pemanggilan rekursif mengembalikan True.'], ['Gunakan backtracking untuk membangkitkan semua kombinasi kurung seimbang dari n pasang.', 'Tambahkan "(" bila jumlah buka < n; tambahkan ")" bila jumlah tutup < jumlah buka.'], ['Mengapa subset_sum memerlukan syarat angka positif untuk pemangkasan angka[i] > sisa?', 'Dengan bilangan negatif, jumlah masih dapat turun lagi sehingga cabang itu mungkin masih berhasil.']] },
            { summary: ['Backtracking: pilih, jelajahi, batalkan; mundur saat jalan buntu.', 'Pemangkasan menghemat jauh dibanding brute force.', 'N-Queens dan subset sum adalah contoh klasik.', 'Kasus terburuk tetap eksponensial.'] },
        ],
        faq: [['Apa bedanya backtracking dan DFS?', 'Backtracking adalah DFS pada pohon keputusan implisit yang membangun dan membatalkan kandidat sambil memangkas cabang.'], ['Apakah sudoku dapat diselesaikan dengan backtracking?', 'Ya. Isi sel kosong berurutan dengan angka 1–9 yang sah, mundur bila buntu. Solver praktis menambah heuristik memilih sel dengan pilihan paling sedikit.'], ['Mengapa jumlah solusi N-Queens dihitung 92 padahal ada simetri?', 'Dihitung semua penempatan berbeda; bila rotasi dan pencerminan dianggap sama ada 12 solusi unik.']],
        sources: [REF_CLRS, REF_LEV, ['Sedgewick dan Wayne, Algorithms (edisi ke-4), algs4.cs.princeton.edu', 'https://algs4.cs.princeton.edu/'], ['Dokumentasi Python: itertools.permutations', 'https://docs.python.org/3/library/itertools.html#itertools.permutations']],
    },

    {
        slug: 'pemrograman-berorientasi-objek-python-class-inheritance-dan-polimorfisme',
        title: 'OOP di Python: Class, Inheritance, dan Polimorfisme',
        description: 'Pelajari pemrograman berorientasi objek di Python: class, objek, enkapsulasi, pewarisan, polimorfisme, metode khusus, dan dataclass, dengan contoh yang dijalankan dan latihan.',
        date: D, category: C, level: 'Menengah', tags: ['OOP', 'class', 'inheritance', 'polimorfisme', 'dataclass', 'Python'], cta: 'none',
        prereq: ['fungsi', 'list dan dictionary'],
        lead: 'OOP mengorganisasi program sebagai kumpulan objek yang menyimpan data sekaligus perilaku. Python mendukungnya dengan sintaks ringkas. Materi ini menjadi jembatan menuju materi PBO dengan Java: konsepnya sama, hanya sintaksnya yang berbeda.',
        body: [
            { objectives: ['membuat class dengan atribut dan metode', 'menerapkan enkapsulasi lewat konvensi dan property', 'memakai pewarisan dan super()', 'menunjukkan polimorfisme lewat overriding dan duck typing', 'memakai metode khusus (__str__, __eq__, __lt__) dan dataclass'] },
            { h2: 'Class dan objek' },
            { code: py`class Mahasiswa:
    jumlah = 0                                  # atribut kelas (milik semua objek)

    def __init__(self, nim, nama):
        self.nim = nim                          # atribut objek
        self.nama = nama
        self._nilai = []                        # awalan _ : konvensi "internal"
        Mahasiswa.jumlah += 1

    def tambah_nilai(self, n):
        if not 0 <= n <= 100:
            raise ValueError("nilai harus 0..100")
        self._nilai.append(n)

    def rata_rata(self):
        return sum(self._nilai) / len(self._nilai) if self._nilai else 0.0

    def __str__(self):
        return f"{self.nim} - {self.nama} (rata-rata {self.rata_rata():.1f})"

a = Mahasiswa("A01", "Ani")
b = Mahasiswa("A02", "Budi")
for n in (80, 90, 100): a.tambah_nilai(n)
b.tambah_nilai(70)
print(a); print(b)
print("jumlah objek:", Mahasiswa.jumlah)`, lang: 'python', run: true },
            { trace: true, title: 'Telusuri pembuatan objek', desc: 'Perhatikan self menunjuk ke objek yang dibuat dan atribut terisi saat __init__ berjalan.', code: py`class Titik:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def geser(self, dx):
        self.x = self.x + dx

p = Titik(1, 2)
p.geser(5)
print(p.x, p.y)` },
            { h2: 'Enkapsulasi dengan property' },
            { code: py`class Rekening:
    def __init__(self, saldo=0):
        self._saldo = saldo

    @property
    def saldo(self):                 # dibaca seperti atribut biasa
        return self._saldo

    def setor(self, jumlah):
        if jumlah <= 0:
            raise ValueError("jumlah harus positif")
        self._saldo += jumlah

    def tarik(self, jumlah):
        if jumlah > self._saldo:
            raise ValueError("saldo tidak cukup")
        self._saldo -= jumlah

r = Rekening(100)
r.setor(50)
print(r.saldo)
try:
    r.tarik(500)
except ValueError as e:
    print("ditolak:", e)
try:
    r.saldo = 1_000_000              # property tanpa setter: tidak bisa diubah langsung
except AttributeError as e:
    print("AttributeError")`, lang: 'python', run: true, caption: 'Python tidak punya private sejati; awalan _ adalah kesepakatan, dan property membatasi akses lewat metode.' },
            { h2: 'Pewarisan dan polimorfisme' },
            { svg: 'diagram', w: 560, h: 200, label: 'Hierarki bentuk', nodes: [{ id: 'Bentuk', x: 280, y: 30, shape: 'rect', w: 150, h: 44, t: 'Bentuk' }, { id: 'Lingkaran', x: 130, y: 150, shape: 'rect', w: 150, h: 44, t: 'Lingkaran' }, { id: 'Persegi', x: 430, y: 150, shape: 'rect', w: 150, h: 44, t: 'Persegi' }], edges: [{ from: 'Lingkaran', to: 'Bentuk' }, { from: 'Persegi', to: 'Bentuk' }], caption: 'Panah berarti "adalah sebuah" (is-a): Lingkaran adalah sebuah Bentuk.' },
            { code: py`import math

class Bentuk:
    def __init__(self, nama):
        self.nama = nama
    def luas(self):
        raise NotImplementedError("subkelas harus mengimplementasikan luas()")
    def __str__(self):
        return f"{self.nama}: luas {self.luas():.2f}"

class Lingkaran(Bentuk):
    def __init__(self, r):
        super().__init__("Lingkaran")
        self.r = r
    def luas(self):
        return math.pi * self.r ** 2

class Persegi(Bentuk):
    def __init__(self, s):
        super().__init__("Persegi")
        self.s = s
    def luas(self):
        return self.s ** 2

for bentuk in [Lingkaran(1), Persegi(3), Lingkaran(2.5)]:
    print(bentuk)                 # satu kode, perilaku sesuai jenis objek (polimorfisme)
print(sum(b.luas() for b in [Lingkaran(1), Persegi(3)]))`, lang: 'python', run: true },
            { h2: 'Duck typing' },
            `Python tidak mewajibkan hubungan pewarisan agar objek dapat dipakai: "jika berjalan seperti bebek dan bersuara seperti bebek, ia bebek". Selama objek memiliki metode yang dibutuhkan, ia dapat dipakai.`,
            { code: py`class Anjing:
    def suara(self): return "guk"
class Robot:
    def suara(self): return "bip"

def bunyikan(sesuatu):
    print(sesuatu.suara())         # tidak peduli kelasnya, asal punya suara()

for x in (Anjing(), Robot()):
    bunyikan(x)`, lang: 'python', run: true },
            { h2: 'Metode khusus dan dataclass' },
            { code: py`from dataclasses import dataclass

@dataclass(order=True, frozen=True)
class Versi:
    mayor: int
    minor: int = 0

print(Versi(1, 2) < Versi(1, 10))        # perbandingan otomatis (order=True)
print(Versi(2) == Versi(2, 0))           # kesetaraan otomatis
print(Versi(3, 1))                       # repr otomatis

class Vektor:
    def __init__(self, x, y): self.x, self.y = x, y
    def __add__(self, o):  return Vektor(self.x + o.x, self.y + o.y)
    def __eq__(self, o):   return (self.x, self.y) == (o.x, o.y)
    def __repr__(self):    return f"Vektor({self.x}, {self.y})"

print(Vektor(1, 2) + Vektor(3, 4))
print(Vektor(1, 1) == Vektor(1, 1))`, lang: 'python', run: true },
            { w: 'compare', title: 'Komposisi atau pewarisan?', tabs: [{ label: 'Pewarisan (is-a)', html: 'Cocok bila subkelas benar-benar jenis dari kelas induk (Lingkaran adalah Bentuk). Hati-hati: hierarki dalam membuat kode kaku dan sulit diubah.' }, { label: 'Komposisi (has-a)', html: 'Objek memuat objek lain (Mobil memiliki Mesin). Lebih fleksibel; panduan umum desain: utamakan komposisi dibanding pewarisan.' }] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'self pada metode merujuk ke...', options: ['Kelas', 'Objek yang memanggil metode', 'Modul'], answer: 1, why: 'self adalah objek saat ini.' }, { q: 'Memanggil konstruktor kelas induk dilakukan dengan...', options: ['super().__init__(...)', 'parent()', 'base.init()'], answer: 0, why: 'super() mengakses kelas induk.' }, { q: 'Polimorfisme berarti...', options: ['Satu antarmuka, banyak perilaku sesuai jenis objek', 'Satu objek banyak variabel', 'Banyak file'], answer: 0, why: 'Pemanggilan yang sama memberi perilaku berbeda.' }] },
            { exercise: [['Tambahkan kelas Segitiga ke hierarki Bentuk.', 'Subkelas dengan alas dan tinggi, luas() = 0.5 * alas * tinggi, panggil super().__init__("Segitiga").'], ['Mengapa Bentuk.luas() melempar NotImplementedError?', 'Menandakan metode abstrak: subkelas wajib menggantinya. Untuk penegakan ketat gunakan modul abc.'], ['Tambahkan __lt__ pada Mahasiswa agar bisa diurutkan menurut rata-rata.', '<code>def __lt__(self, o): return self.rata_rata() < o.rata_rata()</code> lalu <code>sorted(daftar)</code>.'], ['Kapan atribut kelas lebih tepat daripada atribut objek?', 'Untuk nilai yang dipakai bersama semua objek, seperti penghitung jumlah objek atau konstanta.']] },
            { summary: ['Class mengemas data dan perilaku; objek adalah instansinya.', 'Enkapsulasi dengan konvensi _ dan property.', 'Pewarisan memodelkan is-a; polimorfisme melalui overriding dan duck typing.', 'Metode khusus dan dataclass mengurangi kode berulang.'] },
        ],
        faq: [['Apakah Python punya private?', 'Tidak sejati. Awalan _ adalah konvensi; awalan __ melakukan name mangling tetapi tetap bisa diakses bila sengaja.'], ['Apa beda metode, classmethod, dan staticmethod?', 'Metode biasa menerima self (objek); classmethod menerima cls (kelas); staticmethod tidak menerima keduanya dan hanya berada di namespace kelas.'], ['Apakah Python mendukung multiple inheritance?', 'Ya, dengan urutan pencarian metode (MRO) yang ditentukan algoritma C3. Gunakan hemat.']],
        sources: [['Dokumentasi Python: Tutorial, Classes', 'https://docs.python.org/3/tutorial/classes.html'], ['Dokumentasi Python: dataclasses', 'https://docs.python.org/3/library/dataclasses.html'], ['Dokumentasi Python: Data model (metode khusus)', 'https://docs.python.org/3/reference/datamodel.html'], ['Think Python 3e, Allen Downey', 'https://allendowney.github.io/ThinkPython/']],
    },
];
