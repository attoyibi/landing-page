const D = '2026-10-23';
const C = 'Algoritma & Pemrograman Python';
const py = String.raw;

const REF_CLRS = ['Cormen, Leiserson, Rivest, Stein, Introduction to Algorithms (edisi ke-4, MIT Press, 2022)', ''];
const REF_LEVITIN = ['Anany Levitin, Introduction to the Design and Analysis of Algorithms (buku teks)', ''];
const REF_SEDGE = ['Robert Sedgewick dan Kevin Wayne, Algorithms (edisi ke-4), materi pendamping algs4.cs.princeton.edu', 'https://algs4.cs.princeton.edu/'];
const REF_MIT6006 = ['MIT OpenCourseWare 6.006: Introduction to Algorithms', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/'];
const REF_TC = ['Python Wiki: TimeComplexity', 'https://wiki.python.org/moin/TimeComplexity'];

// Grafik pertumbuhan: n, n log n, n^2, 2^n untuk n = 1..10 (skala dipotong pada 100)
const growth = (() => {
    const W = 520, H = 260, X = n => 40 + ((n - 1) / 9) * (W - 70), Y = v => H - 30 - (Math.min(v, 100) / 100) * (H - 50);
    const curve = (f, col, label, ly) => `<polyline fill="none" stroke="${col}" stroke-width="3" points="${Array.from({ length: 10 }, (_, i) => `${X(i + 1)},${Y(f(i + 1))}`).join(' ')}"/><text x="${W - 28}" y="${ly}" font-size="13" font-weight="700" fill="${col}" text-anchor="end">${label}</text>`;
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Grafik pertumbuhan fungsi kompleksitas" font-family="'Plus Jakarta Sans',Arial,sans-serif"><line x1="40" y1="${H - 30}" x2="${W - 20}" y2="${H - 30}" stroke="#8a94a8"/><line x1="40" y1="20" x2="40" y2="${H - 30}" stroke="#8a94a8"/>${[1, 5, 10].map(n => `<text x="${X(n)}" y="${H - 12}" font-size="12" fill="#4a5568" text-anchor="middle">n=${n}</text>`).join('')}${curve(n => 1, '#1f7a46', 'O(1)', 60)}${curve(n => Math.log2(n) * 4, '#0b7285', 'O(log n)', 78)}${curve(n => n * 4, '#1e5ab2', 'O(n)', 96)}${curve(n => n * Math.log2(n) * 1.5, '#9a5b00', 'O(n log n)', 114)}${curve(n => n * n, '#7a3fb4', 'O(n²)', 132)}${curve(n => 2 ** n / 10, '#b3261e', 'O(2ⁿ)', 150)}</svg>`;
})();

export default [
    {
        slug: 'analisis-kompleksitas-algoritma-big-o-omega-theta',
        title: 'Analisis Kompleksitas Algoritma: Big-O, Omega, dan Theta',
        description: 'Pelajari analisis kompleksitas algoritma: Big-O, Omega, Theta, menghitung operasi, pola umum O(1) sampai O(2^n), dan pengukuran nyata dengan kode.',
        date: D, category: C, level: 'Menengah', tags: ['kompleksitas algoritma', 'Big-O', 'Omega', 'Theta', 'analisis algoritma'], cta: 'none',
        prereq: ['perulangan bersarang', 'rekursi dasar', 'fungsi'],
        lead: 'Dua algoritma bisa sama-sama benar tetapi satu selesai dalam sedetik dan yang lain dalam sejam. Analisis kompleksitas adalah alat untuk memprediksi perilaku itu sebelum menjalankan apa pun, dan untuk membandingkan rancangan secara adil tanpa terpengaruh kecepatan komputer. Materi ini membangun definisinya dari hitungan langkah, bukan hafalan tabel.',
        body: [
            { objectives: ['menghitung jumlah operasi dasar sebuah algoritma sebagai fungsi dari n', 'menjelaskan notasi O, Ω, dan Θ beserta artinya', 'menentukan kelas kompleksitas dari perulangan tunggal, bersarang, dan pembagian dua', 'membedakan kasus terbaik, rata-rata, dan terburuk', 'menyusun dan menyelesaikan relasi rekurensi sederhana', 'membedakan kompleksitas waktu dan ruang'] },
            { h2: 'Langkah 1: hitung operasi dasar, bukan detik' },
            `Waktu nyata bergantung pada perangkat keras, bahasa, dan beban sistem. Karena itu kita menghitung <b>operasi dasar</b> (perbandingan, penugasan, aritmetika) sebagai fungsi dari ukuran masukan <code>n</code>. Mari hitung manual lalu verifikasi dengan program.`,
            { code: py`def cari_maks(data):
    maks = data[0]                 # 1 penugasan
    for x in data[1:]:             # n-1 putaran
        if x > maks:               #   1 perbandingan per putaran
            maks = x               #   0..1 penugasan per putaran
    return maks

def cacah(n):
    # menghitung jumlah perbandingan yang sebenarnya
    perbandingan = 0
    for _ in range(n - 1):
        perbandingan += 1
    return perbandingan

for n in [10, 100, 1000]:
    print(n, "elemen ->", cacah(n), "perbandingan")`, lang: 'python', run: true, caption: 'Jumlah perbandingan tepat n - 1, tumbuh linear terhadap n. Kita menyebutnya O(n).' },
            { h2: 'Notasi asimtotik' },
            `Notasi asimtotik menggambarkan perilaku fungsi untuk <b>n yang besar</b>, mengabaikan konstanta dan suku yang tidak dominan.`,
            { table: { head: ['Notasi', 'Makna informal', 'Definisi formal (ringkas)'], rows: [['O(g(n))', 'Batas atas: tumbuh <b>tidak lebih cepat</b> dari g', 'Ada c, n₀ sehingga f(n) ≤ c · g(n) untuk semua n ≥ n₀'], ['Ω(g(n))', 'Batas bawah: tumbuh <b>setidaknya secepat</b> g', 'Ada c, n₀ sehingga f(n) ≥ c · g(n) untuk semua n ≥ n₀'], ['Θ(g(n))', 'Batas ketat: tumbuh <b>sama cepat</b> dengan g', 'f(n) adalah O(g(n)) sekaligus Ω(g(n))']] } },
            { math: 'f(n) = 3n² + 10n + 5  ⇒  f(n) = Θ(n²)' },
            `Mengapa? Untuk n besar, suku 3n² mendominasi. Buktikan batas atas: untuk n ≥ 10, 10n ≤ n² dan 5 ≤ n², sehingga f(n) ≤ 3n² + n² + n² = 5n². Pilih c = 5 dan n₀ = 10; maka f(n) ∈ O(n²). Batas bawah: f(n) ≥ 3n² untuk semua n ≥ 1, sehingga f(n) ∈ Ω(n²).`,
            { callout: 'Dalam percakapan sehari-hari, orang sering menyebut "Big-O" untuk semua kasus. Secara ketat, O adalah batas <b>atas</b>. Bila Anda ingin menyatakan bahwa sebuah algoritma <i>pasti</i> berkelas tepat n², gunakan Θ(n²).', kind: 'info', title: 'O bukan satu-satunya' },
            { h2: 'Pertumbuhan yang perlu dihafal secara visual' },
            { svgraw: growth, caption: 'Pertumbuhan relatif pada n = 1..10 (grafik dipotong pada nilai 100; skala sebenarnya jauh lebih curam untuk n² dan 2ⁿ).' },
            { w: 'bigo', title: 'Jumlah operasi dan perkiraan waktu', desc: 'Geser n. Pada n sedang, 2ⁿ sudah tidak masuk akal. Itulah sebabnya kelas kompleksitas penting.' },
            { h2: 'Cara menentukan kelas kompleksitas' },
            { table: { head: ['Pola kode', 'Kompleksitas', 'Alasan'], rows: [['Pernyataan tunggal', 'O(1)', 'Jumlah langkah tidak bergantung n'], ['Satu perulangan 1..n', 'O(n)', 'n putaran × O(1)'], ['Dua perulangan bersarang 1..n', 'O(n²)', 'n × n'], ['Perulangan bersarang, dalam bergantung i', 'O(n²)', '1 + 2 + ... + n = n(n+1)/2'], ['Variabel dikali atau dibagi 2 tiap putaran', 'O(log n)', 'Berhenti setelah log₂ n putaran'], ['Perulangan n kali, di dalamnya log n', 'O(n log n)', 'Perkalian'], ['Dua perulangan berurutan', 'O(n) + O(m)', 'Dijumlah, ambil yang dominan']] } },
            { code: py`def hitung_langkah(n):
    """Menghitung berapa kali badan perulangan berjalan."""
    a = b = c = 0
    for i in range(n):            # O(n)
        a += 1
    for i in range(n):            # O(n^2)
        for j in range(n):
            b += 1
    k = n
    while k > 1:                  # O(log n)
        k //= 2
        c += 1
    return a, b, c

for n in [8, 64, 1024]:
    print(n, hitung_langkah(n))`, lang: 'python', run: true, caption: 'Untuk n = 1024: n = 1024, n² = 1.048.576, log₂ n = 10. Perbedaan skalanya sangat tajam.' },
            { h2: 'Kasus terbaik, rata-rata, dan terburuk' },
            `Banyak algoritma tidak selalu butuh waktu yang sama untuk ukuran masukan yang sama. Pencarian linear mencari nilai 7 dalam daftar:`,
            { code: py`def cari_linear(data, target):
    langkah = 0
    for i, x in enumerate(data):
        langkah += 1
        if x == target:
            return i, langkah
    return -1, langkah

data = list(range(1, 1001))
print("terbaik (di awal)  :", cari_linear(data, 1)[1], "langkah")
print("rata-rata (tengah) :", cari_linear(data, 500)[1], "langkah")
print("terburuk (di akhir):", cari_linear(data, 1000)[1], "langkah")
print("terburuk (tak ada) :", cari_linear(data, 5000)[1], "langkah")`, lang: 'python', run: true },
            { table: { head: ['Kasus', 'Pencarian linear', 'Arti'], rows: [['Terbaik', 'Θ(1) (target di awal)', 'Masukan paling menguntungkan'], ['Rata-rata', 'Θ(n)', 'Dengan asumsi distribusi tertentu, biasanya posisi seragam'], ['Terburuk', 'Θ(n)', 'Jaminan batas atas untuk semua masukan']] } },
            { h2: 'Rekurensi: kompleksitas algoritma rekursif' },
            `Algoritma rekursif dianalisis dengan relasi rekurensi. Binary search membagi dua ukuran masalah dan melakukan kerja konstan: <code>T(n) = T(n/2) + c</code>. Merge sort membagi dua, menyelesaikan kedua bagian, lalu menggabung dalam waktu linear: <code>T(n) = 2T(n/2) + cn</code>.`,
            { table: { head: ['Rekurensi', 'Penyelesaian', 'Contoh'], rows: [['T(n) = T(n - 1) + c', 'Θ(n)', 'Faktorial rekursif'], ['T(n) = T(n/2) + c', 'Θ(log n)', 'Binary search'], ['T(n) = 2T(n/2) + cn', 'Θ(n log n)', 'Merge sort'], ['T(n) = T(n - 1) + cn', 'Θ(n²)', 'Quick sort kasus terburuk'], ['T(n) = 2T(n - 1) + c', 'Θ(2ⁿ)', 'Fibonacci rekursif naif']] } },
            { callout: 'Penyelesaian dapat dibuktikan dengan metode <b>substitusi</b>, <b>pohon rekursi</b>, atau <b>Teorema Master</b> untuk bentuk T(n) = aT(n/b) + f(n). Pembuktiannya dibahas di buku CLRS dan kuliah MIT 6.006.', kind: 'info', title: 'Alat bukti' },
            { h2: 'Kompleksitas ruang' },
            `Selain waktu, algoritma memakai memori tambahan. Membalik list dengan membuat list baru memakai O(n) ruang; membalik di tempat memakai O(1). Rekursi juga memakan ruang pada call stack: kedalaman n berarti O(n).`,
            { code: py`def balik_baru(data):          # ruang tambahan O(n)
    return data[::-1]

def balik_di_tempat(data):     # ruang tambahan O(1)
    i, j = 0, len(data) - 1
    while i < j:
        data[i], data[j] = data[j], data[i]
        i, j = i + 1, j - 1
    return data

print(balik_baru([1, 2, 3, 4]), balik_di_tempat([1, 2, 3, 4]))`, lang: 'python', run: true },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Kompleksitas <code>3n² + 10n + 5</code> dalam notasi Θ adalah...', options: ['Θ(n)', 'Θ(n²)', 'Θ(3n²)'], answer: 1, why: 'Suku dominan n²; konstanta diabaikan.' }, { q: 'Perulangan <code>while k > 1: k //= 2</code> berjalan sekitar...', options: ['n kali', 'log₂ n kali', 'n² kali'], answer: 1, why: 'Nilai dibelah dua tiap putaran.' }, { q: 'Notasi yang menyatakan batas ATAS pertumbuhan adalah...', options: ['Ω', 'Θ', 'O'], answer: 2, why: 'O adalah batas atas.' }, { q: 'Rekurensi <code>T(n) = 2T(n/2) + n</code> menghasilkan...', options: ['Θ(n)', 'Θ(n log n)', 'Θ(n²)'], answer: 1, why: 'Itu rekurensi merge sort.' }] },
            { exercise: [['Tentukan kompleksitas: <code>for i in range(n): for j in range(i, n): x += 1</code>.', 'Dalam berjalan n, n-1, ..., 1 kali: jumlah n(n+1)/2, yaitu Θ(n²).'], ['Tentukan kompleksitas: <code>i = 1\nwhile i < n:\n    i *= 3</code>.', 'i membesar dikali 3 tiap putaran; berhenti setelah log₃ n putaran: Θ(log n).'], ['Sebuah algoritma membutuhkan 5n + 20 langkah dan lainnya 0,01n². Mana yang lebih baik untuk n kecil dan mana untuk n besar?', 'Untuk n kecil (misalnya n = 100), 0,01n² = 100 lebih kecil dari 5n+20 = 520. Untuk n besar (n = 1000): 10.000 melawan 5.020, algoritma linear menang. Ini alasan "n besar" penting dalam definisi asimtotik.'], ['Mengapa f(n) = n log n termasuk O(n²) tetapi tidak Θ(n²)?', 'n log n tumbuh lebih lambat dari n² sehingga n² adalah batas atas yang benar tetapi tidak ketat. Tidak ada konstanta c yang membuat n log n ≥ c · n² untuk n besar.']] },
            { summary: ['Hitung operasi dasar sebagai fungsi dari n, bukan waktu dalam detik.', 'O = batas atas, Ω = batas bawah, Θ = batas ketat; abaikan konstanta dan suku yang tidak dominan.', 'Perulangan bersarang mengalikan, perulangan berurutan menjumlah, pembagian dua menghasilkan log n.', 'Rekurensi menggambarkan algoritma rekursif: T(n) = 2T(n/2) + n menghasilkan n log n.', 'Pertimbangkan juga kasus terburuk dan kompleksitas ruang.'] },
        ],
        faq: [['Mengapa konstanta diabaikan padahal berpengaruh pada waktu nyata?', 'Notasi asimtotik menjawab pertanyaan "bagaimana pertumbuhannya" bukan "berapa detiknya". Dalam praktik, konstanta penting untuk n kecil, dan profil waktu nyata melengkapi analisis teori.'], ['Apakah O(n) selalu lebih cepat dari O(n²)?', 'Hanya untuk n yang cukup besar. Untuk n kecil, algoritma O(n²) dengan konstanta kecil bisa lebih cepat, itu sebabnya insertion sort dipakai untuk potongan kecil pada Timsort.'], ['Apa itu analisis amortisasi?', 'Menghitung biaya rata-rata per operasi atas serangkaian operasi. Contohnya append pada list dinamis: sesekali mahal (realokasi), tetapi rata-ratanya O(1).']],
        sources: [REF_CLRS, REF_LEVITIN, REF_MIT6006, REF_SEDGE, REF_TC],
    },

    {
        slug: 'merge-sort-divide-and-conquer-python-implementasi-dan-analisis',
        title: 'Merge Sort: Divide and Conquer, Implementasi, dan Analisis',
        description: 'Pahami merge sort dengan animasi interaktif: strategi divide and conquer, proses penggabungan, kode Python, bukti kompleksitas O(n log n), kestabilan, dan kebutuhan memori.',
        date: D, category: C, level: 'Menengah', tags: ['merge sort', 'divide and conquer', 'algoritma pengurutan', 'O(n log n)', 'rekursi'], cta: 'none',
        prereq: ['rekursi', 'list Python', 'analisis kompleksitas'],
        lead: 'Merge sort adalah contoh sempurna strategi divide and conquer: pecah masalah menjadi bagian yang lebih kecil, selesaikan masing-masing, lalu gabungkan hasilnya. Hasilnya algoritma pengurutan yang kecepatannya terjamin O(n log n) pada semua masukan, dan yang menjadi dasar pengurutan di banyak pustaka standar.',
        body: [
            { objectives: ['menjelaskan tiga langkah divide, conquer, combine pada merge sort', 'mengimplementasikan fungsi merge dan merge_sort dalam Python', 'menelusuri proses penggabungan dua list terurut', 'menurunkan kompleksitas O(n log n) dari pohon rekursi', 'menjelaskan kestabilan dan biaya memori merge sort'] },
            { h2: 'Ide: gabungkan dua list yang sudah terurut itu mudah' },
            `Bila Anda punya dua list yang <i>sudah terurut</i>, menggabungkannya menjadi satu list terurut hanya butuh satu kali lewat: bandingkan elemen terdepan keduanya, ambil yang lebih kecil, ulangi. Merge sort memanfaatkan itu dengan membelah list sampai tiap bagian berisi satu elemen (yang otomatis terurut), lalu menggabungkannya kembali.`,
            { svg: 'diagram', w: 640, h: 330, label: 'Pohon rekursi merge sort untuk 8 elemen', nodes: [{ id: 'a', x: 320, y: 30, w: 220, h: 36, t: '[38 27 43 3 9 82 10 5]' }, { id: 'b1', x: 160, y: 110, w: 130, h: 34, t: '[38 27 43 3]' }, { id: 'b2', x: 480, y: 110, w: 130, h: 34, t: '[9 82 10 5]' }, { id: 'c1', x: 80, y: 190, w: 90, h: 32, t: '[38 27]' }, { id: 'c2', x: 240, y: 190, w: 90, h: 32, t: '[43 3]' }, { id: 'c3', x: 400, y: 190, w: 90, h: 32, t: '[9 82]' }, { id: 'c4', x: 560, y: 190, w: 90, h: 32, t: '[10 5]' }, { id: 'd', x: 320, y: 290, w: 250, h: 36, t: '[3 5 9 10 27 38 43 82]', fill: '#e4f6cc' }, { id: 'tx', x: 590, y: 30, shape: 'text', t: 'bagi', color: '#1e5ab2', weight: 700 }, { id: 'ty', x: 590, y: 290, shape: 'text', t: 'gabung', color: '#1f7a46', weight: 700 }], edges: [{ from: 'a', to: 'b1' }, { from: 'a', to: 'b2' }, { from: 'b1', to: 'c1' }, { from: 'b1', to: 'c2' }, { from: 'b2', to: 'c3' }, { from: 'b2', to: 'c4' }, { from: 'c2', to: 'd', dashed: true, via: [[240, 245], [320, 245]] }], caption: 'Dibagi sampai ukuran 1 (log₂ 8 = 3 tingkat pembagian), lalu digabung kembali tingkat demi tingkat. Penggabungan di tiap tingkat total memeriksa sekitar n elemen.' },
            { w: 'sort', algo: 'merge', size: 8, title: 'Animasi merge sort', desc: 'Kuning = posisi yang sedang ditulis. Catatan di bawah menjelaskan perbandingan yang terjadi. Tekan "Maju" untuk mengikuti satu per satu.' },
            { h2: 'Langkah kunci: fungsi merge' },
            { trace: true, title: 'Telusuri penggabungan [2, 5, 9] dan [1, 6]', desc: 'Perhatikan i dan j yang bergerak maju hanya pada list tempat elemen diambil.', code: py`kiri = [2, 5, 9]
kanan = [1, 6]
hasil = []
i = j = 0
while i < len(kiri) and j < len(kanan):
    if kiri[i] <= kanan[j]:
        hasil.append(kiri[i]); i += 1
    else:
        hasil.append(kanan[j]); j += 1
hasil += kiri[i:] + kanan[j:]
print(hasil)` },
            { h2: 'Implementasi lengkap' },
            { code: py`def merge(kiri, kanan):
    hasil, i, j = [], 0, 0
    while i < len(kiri) and j < len(kanan):
        if kiri[i] <= kanan[j]:      # <= menjaga kestabilan
            hasil.append(kiri[i]); i += 1
        else:
            hasil.append(kanan[j]); j += 1
    hasil.extend(kiri[i:])
    hasil.extend(kanan[j:])
    return hasil

def merge_sort(data):
    if len(data) <= 1:               # kasus dasar: sudah terurut
        return data
    tengah = len(data) // 2
    kiri = merge_sort(data[:tengah])     # conquer bagian kiri
    kanan = merge_sort(data[tengah:])    # conquer bagian kanan
    return merge(kiri, kanan)            # combine

print(merge_sort([38, 27, 43, 3, 9, 82, 10, 5]))
print(merge_sort([]), merge_sort([7]), merge_sort([3, 3, 1, 1]))`, lang: 'python', run: true },
            { h2: 'Mengapa O(n log n)?' },
            { ul: ['Tinggi pohon rekursi adalah log₂ n (setiap tingkat membelah dua).', 'Pada setiap tingkat, total elemen yang digabung adalah n, sehingga kerja per tingkat Θ(n).', 'Total = n × log n = Θ(n log n).'] },
            { math: 'T(n) = 2 T(n/2) + Θ(n)  ⇒  T(n) = Θ(n log n)' },
            { code: py`def merge_sort_hitung(data, c):
    if len(data) <= 1:
        return data
    t = len(data) // 2
    kiri, kanan = merge_sort_hitung(data[:t], c), merge_sort_hitung(data[t:], c)
    hasil, i, j = [], 0, 0
    while i < len(kiri) and j < len(kanan):
        c[0] += 1                                  # hitung perbandingan
        if kiri[i] <= kanan[j]:
            hasil.append(kiri[i]); i += 1
        else:
            hasil.append(kanan[j]); j += 1
    return hasil + kiri[i:] + kanan[j:]

import random, math
random.seed(7)
print("   n    perbandingan   n*log2(n)")
for n in [100, 1000, 10000]:
    c = [0]
    merge_sort_hitung([random.random() for _ in range(n)], c)
    print(f"{n:>5} {c[0]:>12} {int(n * math.log2(n)):>12}")`, lang: 'python', run: true, caption: 'Hasil eksperimen sedikit di bawah n log₂ n (batas atas), tetapi tumbuh dengan pola yang sama: sekitar 10 kali lebih banyak data membutuhkan sedikit lebih dari 10 kali lebih banyak perbandingan.' },
            { h2: 'Sifat penting' },
            { table: { head: ['Sifat', 'Merge sort', 'Catatan'], rows: [['Waktu terbaik / rata-rata / terburuk', 'Θ(n log n) pada semuanya', 'Tidak peka terhadap urutan masukan'], ['Ruang tambahan', 'Θ(n)', 'Butuh list bantu untuk penggabungan'], ['Stabil', 'Ya', 'Syaratnya memakai <= saat membandingkan'], ['Cocok untuk', 'Data besar, linked list, data di disk (external sort)', 'Mudah diparalelkan']] } },
            { callout: 'Python memakai <b>Timsort</b> untuk <code>sorted()</code> dan <code>list.sort()</code>: gabungan merge sort dan insertion sort yang memanfaatkan bagian data yang sudah terurut. Dalam praktik, gunakan <code>sorted()</code>, dan pelajari merge sort untuk memahami caranya.', kind: 'info', title: 'Di dunia nyata' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tiga tahap merge sort secara berurutan?', options: ['Combine, divide, conquer', 'Divide, conquer, combine', 'Conquer, combine, divide'], answer: 1, why: 'Bagi, selesaikan, lalu gabung.' }, { q: 'Waktu terburuk merge sort?', options: ['O(n)', 'O(n log n)', 'O(n²)'], answer: 1, why: 'Selalu n log n.' }, { q: 'Mengapa memakai <code>&lt;=</code> pada merge?', options: ['Lebih cepat', 'Agar elemen setara mempertahankan urutan awal (stabil)', 'Wajib di Python'], answer: 1, why: 'Elemen kiri didahulukan saat sama.' }] },
            { exercise: [['Gabungkan manual [1, 4, 7] dan [2, 3, 9]. Tuliskan list hasil setiap langkah.', '[1] → [1,2] → [1,2,3] → [1,2,3,4] → [1,2,3,4,7] → sisa kanan 9 → [1,2,3,4,7,9].'], ['Berapa kira-kira perbandingan untuk mengurutkan 1.024 elemen dengan merge sort?', 'Sekitar n log₂ n = 1024 × 10 = 10.240 (sedikit lebih rendah dalam praktik).'], ['Ubah merge_sort agar mengurutkan dari besar ke kecil.', 'Ganti kondisi pada merge menjadi <code>if kiri[i] >= kanan[j]</code>.'], ['Mengapa merge sort kurang cocok bila memori sangat terbatas?', 'Ia butuh ruang tambahan Θ(n) untuk penggabungan. Algoritma di tempat seperti heap sort atau quick sort memakai ruang lebih kecil.']] },
            { summary: ['Merge sort: bagi dua, urutkan tiap bagian secara rekursif, gabungkan dengan merge linear.', 'Θ(n log n) pada semua kasus, stabil, tetapi butuh ruang tambahan Θ(n).', 'Gabungan dua list terurut dilakukan dengan dua penunjuk yang bergerak maju.', 'Timsort, pengurut bawaan Python, adalah turunan merge sort.'] },
        ],
        faq: [['Apakah merge sort lebih cepat dari quick sort?', 'Secara teori batas terburuk merge sort lebih baik (n log n vs n²). Dalam praktik, quick sort sering lebih cepat pada array karena konstanta kecil dan cache yang ramah, tetapi merge sort unggul pada kestabilan dan data yang tidak muat di memori.'], ['Bisakah merge sort dilakukan tanpa rekursi?', 'Bisa, dengan pendekatan bottom-up: gabungkan blok berukuran 1, lalu 2, 4, dan seterusnya.'], ['Mengapa pengurutan butuh minimal n log n perbandingan?', 'Ada n! kemungkinan urutan, dan tiap perbandingan paling banyak memisahkan dua kemungkinan, sehingga dibutuhkan setidaknya log₂(n!) ≈ n log n perbandingan (batas bawah pengurutan berbasis perbandingan).']],
        sources: [REF_CLRS, REF_SEDGE, REF_MIT6006, ['Dokumentasi Python: Sorting Techniques (stabilitas pengurutan)', 'https://docs.python.org/3/howto/sorting.html'], ['Tim Peters, deskripsi Timsort (listsort.txt, sumber CPython)', 'https://github.com/python/cpython/blob/main/Objects/listsort.txt']],
    },

    {
        slug: 'quick-sort-partisi-pivot-dan-analisis-kasus-terburuk',
        title: 'Quick Sort: Partisi, Pivot, dan Analisis Kasus Terburuk',
        description: 'Pelajari quick sort dengan animasi partisi, kode Python di tempat, pemilihan pivot, kasus terburuk O(n²) dan cara menghindarinya, dengan eksperimen penghitungan perbandingan.',
        date: D, category: C, level: 'Menengah', tags: ['quick sort', 'partisi', 'pivot', 'algoritma pengurutan', 'divide and conquer'], cta: 'none',
        prereq: ['merge sort', 'rekursi', 'analisis kompleksitas'],
        lead: 'Quick sort adalah algoritma pengurutan yang paling banyak ditiru dalam praktik: sangat cepat pada rata-rata, bekerja di tempat, dan sederhana. Kekuatan dan kelemahannya terletak pada satu hal: pemilihan pivot. Materi ini menunjukkan mengapa, dengan eksperimen yang bisa Anda lihat sendiri.',
        body: [
            { objectives: ['menjelaskan ide partisi di sekitar pivot', 'mengimplementasikan quick sort di tempat dengan skema Lomuto', 'menjelaskan mengapa kasus terburuk O(n²) dan kapan terjadi', 'membandingkan strategi pemilihan pivot dengan eksperimen', 'membandingkan quick sort dengan merge sort'] },
            { h2: 'Ide: partisi' },
            `Pilih satu elemen sebagai <b>pivot</b>. Susun ulang list sehingga semua elemen yang lebih kecil dari pivot berada di kiri, dan yang lebih besar di kanan. Setelah itu pivot sudah berada di posisi akhirnya. Urutkan kedua sisi secara rekursif. Tidak ada tahap penggabungan.`,
            { svg: 'diagram', w: 620, h: 150, label: 'Hasil partisi di sekitar pivot', nodes: [{ id: 'a', x: 120, y: 60, w: 200, h: 44, t: 'kecil dari pivot', fill: '#e4f6cc' }, { id: 'p', x: 310, y: 60, w: 80, h: 44, t: 'pivot', fill: '#fde4e1' }, { id: 'b', x: 500, y: 60, w: 200, h: 44, t: 'besar dari pivot', fill: '#fff1d6' }, { id: 'ta', x: 120, y: 118, shape: 'text', t: 'urutkan rekursif', color: '#4a5568' }, { id: 'tb', x: 500, y: 118, shape: 'text', t: 'urutkan rekursif', color: '#4a5568' }, { id: 'tp', x: 310, y: 118, shape: 'text', t: 'sudah final', color: '#b3261e' }], edges: [], caption: 'Setelah partisi, pivot berada di posisi akhirnya. Sisanya dikerjakan dengan cara yang sama pada dua sisi.' },
            { w: 'sort', algo: 'quick', size: 9, title: 'Animasi quick sort (partisi Lomuto)', desc: 'Batang merah = pivot, kuning = elemen yang dibandingkan, hijau = sudah di posisi akhir. Perhatikan bagaimana pivot "mendarat" di tempat yang benar.' },
            { h2: 'Implementasi di tempat (skema Lomuto)' },
            { code: py`def partisi(a, lo, hi):
    pivot = a[hi]                   # pivot: elemen terakhir
    i = lo - 1                      # batas bagian "lebih kecil"
    for j in range(lo, hi):
        if a[j] < pivot:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]   # taruh pivot di tempatnya
    return i + 1

def quick_sort(a, lo=0, hi=None):
    if hi is None:
        hi = len(a) - 1
    if lo < hi:
        p = partisi(a, lo, hi)
        quick_sort(a, lo, p - 1)
        quick_sort(a, p + 1, hi)
    return a

print(quick_sort([9, 4, 7, 3, 10, 1, 8]))
print(quick_sort([5, 5, 2, 2]), quick_sort([]), quick_sort([1]))`, lang: 'python', run: true },
            { trace: true, title: 'Telusuri satu kali partisi', desc: 'Pivot = 5 (elemen terakhir). Amati i dan j, dan bagaimana elemen yang lebih kecil dipindah ke kiri.', code: py`a = [8, 2, 9, 1, 7, 5]
lo, hi = 0, len(a) - 1
pivot = a[hi]
i = lo - 1
for j in range(lo, hi):
    if a[j] < pivot:
        i += 1
        a[i], a[j] = a[j], a[i]
a[i + 1], a[hi] = a[hi], a[i + 1]
print(a, "pivot di indeks", i + 1)` },
            { h2: 'Mengapa pivot menentukan segalanya' },
            { w: 'compare', title: 'Dua skenario', tabs: [{ label: 'Pivot ideal (kasus terbaik)', html: 'Pivot jatuh di tengah sehingga list terbelah dua sama besar. Kedalaman rekursi log n, kerja per tingkat n: <b>Θ(n log n)</b>.' }, { label: 'Pivot buruk (kasus terburuk)', html: 'Pivot selalu elemen terkecil atau terbesar (misalnya data sudah terurut dan pivot elemen terakhir). Satu sisi kosong, sisi lain n-1: kedalaman n, kerja n + (n-1) + ... = <b>Θ(n²)</b>.' }] },
            { code: py`import random

def quick_hitung(a, lo, hi, c, pilih):
    if lo >= hi:
        return
    k = pilih(a, lo, hi)
    a[k], a[hi] = a[hi], a[k]          # pindahkan pivot terpilih ke ujung
    pivot, i = a[hi], lo - 1
    for j in range(lo, hi):
        c[0] += 1
        if a[j] < pivot:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    quick_hitung(a, lo, i, c, pilih)
    quick_hitung(a, i + 2, hi, c, pilih)

import sys; sys.setrecursionlimit(10000)
n = 800
pilih_akhir = lambda a, lo, hi: hi
pilih_acak = lambda a, lo, hi: random.randint(lo, hi)
def pilih_median3(a, lo, hi):
    m = (lo + hi) // 2
    return sorted([lo, m, hi], key=lambda k: a[k])[1]

random.seed(3)
for nama, data in [("acak", random.sample(range(n), n)), ("sudah terurut", list(range(n)))]:
    for sebut, p in [("pivot terakhir", pilih_akhir), ("pivot acak", pilih_acak), ("median-dari-3", pilih_median3)]:
        c = [0]; quick_hitung(data[:], 0, n - 1, c, p)
        print(f"{nama:<14}{sebut:<16}{c[0]:>9} perbandingan")`, lang: 'python', run: true, caption: 'Pada data terurut, pivot terakhir menghasilkan sekitar n²/2 = 320.000 perbandingan, jauh lebih buruk daripada pivot acak atau median-dari-tiga.' },
            { callout: 'Strategi pemilihan pivot yang umum: <b>acak</b> (membuat kasus terburuk sangat tidak mungkin pada masukan apa pun), <b>median dari tiga</b> (awal, tengah, akhir), atau <b>introsort</b> yang beralih ke heap sort bila rekursi terlalu dalam (dipakai di C++ std::sort).', kind: 'good', title: 'Cara menghindari kasus terburuk' },
            { h2: 'Quick sort vs merge sort' },
            { table: { head: ['Aspek', 'Quick sort', 'Merge sort'], rows: [['Waktu rata-rata', 'Θ(n log n)', 'Θ(n log n)'], ['Waktu terburuk', 'Θ(n²) (jarang dengan pivot acak)', 'Θ(n log n)'], ['Ruang tambahan', 'O(log n) tumpukan rekursi (di tempat)', 'Θ(n)'], ['Stabil', 'Tidak (versi umum)', 'Ya'], ['Dalam praktik pada array', 'Sering lebih cepat (ramah cache)', 'Stabil dan dapat diprediksi']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Setelah partisi, pivot berada...', options: ['Di awal list', 'Di posisi akhirnya yang benar', 'Di tengah selalu'], answer: 1, why: 'Semua yang lebih kecil di kiri, yang lebih besar di kanan.' }, { q: 'Masukan yang membuat quick sort (pivot terakhir) berkinerja terburuk?', options: ['Acak', 'Sudah terurut', 'Semua kecuali terurut'], answer: 1, why: 'Pivot selalu terbesar sehingga partisi sangat tidak seimbang.' }, { q: 'Apakah quick sort stabil?', options: ['Ya', 'Tidak pada versi umum', 'Hanya untuk angka'], answer: 1, why: 'Pertukaran jauh dapat mengubah urutan elemen setara.' }] },
            { exercise: [['Lakukan satu partisi pada [6, 3, 8, 2, 7, 4] dengan pivot terakhir (4). Tuliskan list sesudahnya dan indeks pivot.', 'Elemen < 4: 3, 2 → pindah ke kiri: [3, 2, 8, 6, 7, 4] lalu tukar pivot ke indeks 2: [3, 2, 4, 6, 7, 8]. Pivot di indeks 2.'], ['Mengapa pada data terurut quick sort dengan pivot terakhir berjalan O(n²)?', 'Pivot (terbesar) tidak memecah apa pun: tiap partisi hanya menyingkirkan satu elemen, sehingga ada n tingkat rekursi dengan kerja n, n-1, ..., 1.'], ['Apa yang terjadi pada quick sort bila semua elemen sama? Bagaimana skema partisi tiga arah membantu?', 'Dengan skema Lomuto sederhana, semua sama dengan pivot sehingga partisi sangat tidak seimbang (O(n²)). Partisi tiga arah (kecil, sama, besar) menangani elemen sama sekaligus.']] },
            { summary: ['Quick sort: pilih pivot, partisi, urutkan dua sisi rekursif; tanpa tahap gabung.', 'Rata-rata Θ(n log n), terburuk Θ(n²) bila pivot terus buruk.', 'Pivot acak atau median-dari-tiga membuat kasus terburuk sangat jarang.', 'Di tempat (ruang O(log n)) tetapi tidak stabil.'] },
        ],
        faq: [['Apa itu partisi Hoare?', 'Skema alternatif dengan dua penunjuk yang bergerak dari kedua ujung dan bertukar; umumnya melakukan lebih sedikit pertukaran daripada Lomuto.'], ['Mengapa pivot acak membantu?', 'Tidak ada masukan tertentu yang selalu menjadi kasus terburuk. Peluang pivot buruk berkali-kali berturut-turut sangat kecil.'], ['Apakah sorted() Python memakai quick sort?', 'Tidak. Python memakai Timsort, yang stabil dan memanfaatkan urutan parsial pada data.']],
        sources: [REF_CLRS, REF_SEDGE, REF_MIT6006, ['C. A. R. Hoare, Quicksort, The Computer Journal 5(1), 1962', 'https://doi.org/10.1093/comjnl/5.1.10']],
    },

    {
        slug: 'linked-list-python-node-pointer-dan-operasinya',
        title: 'Linked List di Python: Node, Pointer, dan Operasinya',
        description: 'Pelajari linked list tunggal: node dan pointer, implementasi Python, operasi sisip, hapus, cari, dan balik, perbandingan biaya dengan list, dengan simulasi interaktif.',
        date: D, category: C, level: 'Menengah', tags: ['linked list', 'struktur data', 'node', 'pointer', 'Python'], cta: 'none',
        prereq: ['kelas dan objek dasar', 'list Python', 'kompleksitas'],
        lead: 'List Python menyimpan elemen berdampingan di memori sehingga akses indeks sangat cepat, tetapi menyisipkan di depan mahal. Linked list membalik pertukaran itu: sisip di depan murah, tetapi akses indeks mahal. Memahaminya melatih cara berpikir tentang referensi dan memori yang menjadi dasar struktur data lain seperti stack, queue, dan tree.',
        body: [
            { objectives: ['menjelaskan struktur node dan hubungannya melalui pointer (referensi)', 'mengimplementasikan linked list tunggal dengan operasi sisip, cari, hapus, dan balik', 'menganalisis kompleksitas tiap operasi dan membandingkannya dengan list Python', 'menjelaskan kapan linked list lebih cocok dan kapan tidak'] },
            { h2: 'Struktur: node yang saling menunjuk' },
            `Setiap <b>node</b> menyimpan dua hal: data dan referensi (pointer) ke node berikutnya. List hanya perlu menyimpan <code>head</code>, referensi ke node pertama. Node terakhir menunjuk <code>None</code>.`,
            { svg: 'diagram', w: 640, h: 130, label: 'Linked list tunggal berisi 3, 8, 5', nodes: [{ id: 'h', x: 50, y: 60, shape: 'text', t: 'head', weight: 700, color: '#1e5ab2' }, { id: 'n1', x: 160, y: 60, shape: 'class', w: 110, h: 54, t: '3', attrs: [], methods: [] }, { id: 'n2', x: 330, y: 60, shape: 'class', w: 110, h: 54, t: '8', attrs: [], methods: [] }, { id: 'n3', x: 500, y: 60, shape: 'class', w: 110, h: 54, t: '5', attrs: [], methods: [] }, { id: 'nn', x: 600, y: 60, shape: 'text', t: 'None', color: '#4a5568', weight: 700 }], edges: [{ from: 'h', to: 'n1' }, { from: 'n1', to: 'n2', label: 'next' }, { from: 'n2', to: 'n3', label: 'next' }], caption: 'Node tidak berdampingan di memori; hubungannya hanya lewat pointer next.' },
            { h2: 'Implementasi' },
            { code: py`class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def prepend(self, data):                 # sisip di depan: O(1)
        self.head = Node(data, self.head)
        self.size += 1

    def append(self, data):                  # sisip di belakang: O(n)
        baru = Node(data)
        if self.head is None:
            self.head = baru
        else:
            cur = self.head
            while cur.next:
                cur = cur.next
            cur.next = baru
        self.size += 1

    def find(self, data):                    # O(n)
        cur, i = self.head, 0
        while cur:
            if cur.data == data:
                return i
            cur, i = cur.next, i + 1
        return -1

    def remove(self, data):                  # O(n) mencari, O(1) mengaitkan ulang
        prev, cur = None, self.head
        while cur:
            if cur.data == data:
                if prev:
                    prev.next = cur.next
                else:
                    self.head = cur.next
                self.size -= 1
                return True
            prev, cur = cur, cur.next
        return False

    def reverse(self):                       # O(n), ruang O(1)
        prev, cur = None, self.head
        while cur:
            cur.next, prev, cur = prev, cur, cur.next
        self.head = prev

    def __iter__(self):
        cur = self.head
        while cur:
            yield cur.data
            cur = cur.next

    def __repr__(self):
        return " -> ".join(map(str, self)) + " -> None"

ll = LinkedList()
for x in [5, 8, 3]:
    ll.prepend(x)
ll.append(10)
print(ll, "| ukuran", ll.size)
print("cari 8:", ll.find(8), "| cari 99:", ll.find(99))
ll.remove(8); print("setelah hapus 8:", ll)
ll.reverse(); print("dibalik:", ll)`, lang: 'python', run: true },
            { h2: 'Coba sendiri' },
            { w: 'linked', title: 'Simulasi linked list', desc: 'Sisip, hapus, dan cari. Perhatikan jumlah langkah penelusuran, lalu aktifkan pointer tail untuk melihat bagaimana biaya sisip di belakang berubah.', values: [3, 8, 5] },
            { h2: 'Membalik linked list: tiga pointer' },
            `Pembalikan menggeser arah semua pointer. Gunakan tiga penunjuk: <code>prev</code>, <code>cur</code>, dan simpan <code>next</code> sebelum mengubah arah. Pada kode di atas, penugasan bersamaan <code>cur.next, prev, cur = prev, cur, cur.next</code> melakukan semuanya dalam satu baris.`,
            { svg: 'diagram', w: 640, h: 190, label: 'Langkah membalik: sebelum dan sesudah', nodes: [{ id: 'a1', x: 60, y: 40, w: 56, h: 36, t: '1' }, { id: 'a2', x: 170, y: 40, w: 56, h: 36, t: '2' }, { id: 'a3', x: 280, y: 40, w: 56, h: 36, t: '3' }, { id: 'tb', x: 480, y: 40, shape: 'text', t: 'Sebelum: 1 → 2 → 3', weight: 700 }, { id: 'b1', x: 60, y: 140, w: 56, h: 36, t: '1' }, { id: 'b2', x: 170, y: 140, w: 56, h: 36, t: '2' }, { id: 'b3', x: 280, y: 140, w: 56, h: 36, t: '3' }, { id: 'ta', x: 480, y: 140, shape: 'text', t: 'Sesudah: 3 → 2 → 1', weight: 700 }], edges: [{ from: 'a1', to: 'a2' }, { from: 'a2', to: 'a3' }, { from: 'b3', to: 'b2' }, { from: 'b2', to: 'b1' }], caption: 'Tidak ada data yang dipindah; hanya arah pointer yang dibalik. Waktu O(n), ruang tambahan O(1).' },
            { h2: 'Linked list vs list Python' },
            { table: { head: ['Operasi', 'List Python (array dinamis)', 'Linked list tunggal'], rows: [['Akses indeks i', 'O(1)', 'O(n)'], ['Sisip di depan', 'O(n)', 'O(1)'], ['Sisip di belakang', 'O(1) amortisasi', 'O(n), atau O(1) dengan pointer tail'], ['Sisip di tengah (sudah memegang posisinya)', 'O(n)', 'O(1)'], ['Cari nilai', 'O(n)', 'O(n)'], ['Memori', 'Padat, ramah cache', 'Overhead pointer per node, tersebar']] } },
            { callout: 'Dalam praktik, <b>list Python (array dinamis) hampir selalu lebih cepat</b> karena data berdampingan di memori (ramah cache). Linked list lebih penting sebagai konsep: dasar untuk stack, queue, graf berdaftar tetangga, dan struktur di sistem operasi. Untuk antrean Python, gunakan <code>collections.deque</code>.', kind: 'warn', title: 'Jujur soal kegunaannya' },
            { h2: 'Varian' },
            { w: 'cards', title: 'Ketuk kartu untuk penjelasan', items: [{ tag: 'Varian', front: 'Doubly linked list', backTag: 'Ciri', back: 'Tiap node punya next dan prev. Bisa dijelajahi dua arah dan penghapusan node yang sudah dipegang O(1). Dasar dari collections.deque di banyak implementasi.' }, { tag: 'Varian', front: 'Circular linked list', backTag: 'Ciri', back: 'Node terakhir menunjuk kembali ke head. Cocok untuk penjadwalan round-robin.' }, { tag: 'Teknik', front: 'Deteksi siklus (Floyd)', backTag: 'Ciri', back: 'Dua penunjuk: lambat (1 langkah) dan cepat (2 langkah). Bila bertemu, ada siklus. Waktu O(n), ruang O(1).' }] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Operasi paling murah pada linked list tunggal tanpa tail?', options: ['Sisip di depan', 'Akses indeks ke-100', 'Sisip di belakang'], answer: 0, why: 'Hanya mengubah head: O(1).' }, { q: 'Mengapa akses indeks pada linked list O(n)?', options: ['Data terurut', 'Harus menelusuri pointer dari head', 'Python lambat'], answer: 1, why: 'Tidak ada lompatan langsung ke indeks.' }, { q: 'Apa isi pointer next pada node terakhir?', options: ['Node pertama', 'None', 'Nilai node itu sendiri'], answer: 1, why: 'None menandai akhir.' }] },
            { exercise: [['Tulis metode <code>panjang_rekursif(node)</code> yang menghitung panjang list secara rekursif.', '<code>def panjang(node): return 0 if node is None else 1 + panjang(node.next)</code>. Hati-hati: kedalaman rekursi sebesar panjang list.'], ['Tulis metode yang mengembalikan elemen tengah list dalam satu kali lewat.', 'Pakai dua penunjuk: lambat maju 1, cepat maju 2. Saat cepat mencapai akhir, lambat berada di tengah.'], ['Mengapa menghapus node dengan <code>remove</code> harus mengingat node sebelumnya (prev)?', 'Karena list tunggal tidak bisa mundur. Untuk melewati node yang dihapus, prev.next harus diarahkan ke cur.next.'], ['Hitung jumlah langkah penelusuran untuk append pada list berisi 1000 node tanpa tail.', '999 langkah menelusuri sampai node terakhir, lalu 1 untuk mengaitkan: O(n).']] },
            { summary: ['Linked list: rangkaian node berisi data dan pointer next; hanya head yang disimpan.', 'Sisip di depan O(1); akses indeks, cari, dan sisip di belakang tanpa tail O(n).', 'Pembalikan memakai tiga penunjuk dalam O(n) waktu dan O(1) ruang.', 'Di Python, list bawaan lebih cepat; linked list penting untuk memahami referensi dan struktur data lanjutan.'] },
        ],
        faq: [['Apa bedanya pointer di Python dengan di C?', 'Python tidak menyediakan aritmetika pointer. Atribut seperti next adalah referensi ke objek, dan Python mengelola memorinya (garbage collection).'], ['Bagaimana mencegah kebocoran memori pada list yang sangat panjang?', 'Python membersihkan objek yang tidak lagi dirujuk. Namun penghapusan list yang sangat panjang secara rekursif dapat menimbulkan RecursionError; hapus secara iteratif.'], ['Apakah deque sama dengan linked list?', 'Mirip dalam kegunaan (operasi O(1) di kedua ujung), tetapi collections.deque diimplementasikan sebagai blok-blok array terhubung sehingga lebih efisien dalam memori.']],
        sources: [REF_CLRS, REF_SEDGE, ['Dokumentasi Python: collections.deque', 'https://docs.python.org/3/library/collections.html#collections.deque'], ['Dokumentasi Python: Classes (tutorial)', 'https://docs.python.org/3/tutorial/classes.html'], REF_TC],
    },
];
