const D = '2026-10-23';
const C = 'Dasar Informatika';
const py = String.raw;

const REF_PATT = ['David Patterson dan John Hennessy, Computer Organization and Design (Morgan Kaufmann)', ''];
const REF_TANEN = ['Andrew Tanenbaum dan Todd Austin, Structured Computer Organization (Pearson)', ''];
const REF_NAND = ['Nisan dan Schocken, The Elements of Computing Systems (nand2tetris), MIT Press', 'https://www.nand2tetris.org/'];
const REF_CS50 = ['Harvard CS50: Introduction to Computer Science', 'https://cs50.harvard.edu/x/'];
const REF_CODE = ['Charles Petzold, Code: The Hidden Language of Computer Hardware and Software (Microsoft Press)', ''];

export default [
    {
        slug: 'sistem-bilangan-biner-oktal-heksadesimal-dan-konversi',
        title: 'Sistem Bilangan: Biner, Oktal, Heksadesimal, dan Konversi',
        description: 'Pahami sistem bilangan posisional: biner, oktal, dan heksadesimal, cara konversi antar basis, operasi bit, mengapa komputer memakai biner, dan penerapannya pada warna, alamat, dan izin berkas.',
        date: D, category: C, level: 'Pemula', tags: ['biner', 'heksadesimal', 'konversi basis', 'operasi bit', 'sistem bilangan'], cta: 'none',
        prereq: ['aritmetika dasar'],
        lead: 'Komputer hanya mengenal dua keadaan: ada atau tidak ada tegangan, 1 atau 0. Semua yang Anda lihat di layar, dari teks sampai video, adalah susunan bit. Memahami bilangan biner dan heksadesimal membuka pintu untuk memahami memori, jaringan, warna, dan keamanan dengan lebih jelas.',
        body: [
            { objectives: ['menjelaskan sistem bilangan posisional dan nilai tempat', 'mengonversi antara desimal, biner, oktal, dan heksadesimal', 'melakukan operasi bit (AND, OR, XOR, geser)', 'menjelaskan mengapa heksadesimal dipakai sebagai singkatan biner', 'menerapkannya pada kode warna, izin berkas, dan masker jaringan'] },
            { h2: 'Nilai posisional' },
            `Bilangan desimal 4.092 berarti 4×10³ + 0×10² + 9×10¹ + 2×10⁰. Setiap posisi bernilai pangkat basis. Biner memakai basis 2 dengan digit 0 dan 1; setiap posisi bernilai pangkat dua.`,
            { w: 'binary', title: 'Ubah bit, lihat nilainya', desc: 'Ketuk kotak untuk membalik bit. Perhatikan jumlah nilai bit yang menyala.' },
            { table: { head: ['Basis', 'Nama', 'Digit', 'Awalan di kode', 'Contoh nilai 45'], rows: [['2', 'Biner', '0–1', '0b', '0b101101'], ['8', 'Oktal', '0–7', '0o', '0o55'], ['10', 'Desimal', '0–9', '(tanpa)', '45'], ['16', 'Heksadesimal', '0–9, A–F', '0x', '0x2D']] } },
            { h2: 'Konversi' },
            { h3: 'Desimal ke biner: bagi dua berulang' },
            { code: py`def ke_biner(n):
    if n == 0: return "0"
    sisa = []
    while n > 0:
        sisa.append(str(n % 2))      # sisa bagi dua = bit dari kanan
        n //= 2
    return "".join(reversed(sisa))

print(ke_biner(45))
print(bin(45), oct(45), hex(45))                 # fungsi bawaan Python
print(int("101101", 2), int("55", 8), int("2D", 16))   # kembali ke desimal`, lang: 'python', run: true, caption: '45 ÷ 2 = 22 sisa 1; 22 ÷ 2 = 11 sisa 0; 11 ÷ 2 = 5 sisa 1; 5 ÷ 2 = 2 sisa 1; 2 ÷ 2 = 1 sisa 0; 1 ÷ 2 = 0 sisa 1. Baca dari bawah: 101101.' },
            { h3: 'Biner ke oktal dan heksadesimal: kelompokkan bit' },
            `Satu digit heksa mewakili tepat empat bit, dan satu digit oktal tiga bit. Itu sebabnya heksa dipakai sebagai singkatan biner yang manusiawi.`,
            { code: py`biner = "1101011110100011"
kelompok = [biner[i:i+4] for i in range(0, len(biner), 4)]
print(kelompok)
print("heksa:", "".join(format(int(k, 2), "X") for k in kelompok))
print(f"cek  : {int(biner, 2):#X}")

for h in "0123456789ABCDEF":
    print(h, format(int(h, 16), "04b"), end="   ")
print()`, lang: 'python', run: true },
            { h2: 'Operasi bit' },
            { table: { head: ['Operasi', 'Simbol', 'Aturan', 'Contoh (4 bit)'], rows: [['AND', '&', '1 jika keduanya 1', '1100 & 1010 = 1000'], ['OR', '|', '1 jika salah satu 1', '1100 | 1010 = 1110'], ['XOR', '^', '1 jika berbeda', '1100 ^ 1010 = 0110'], ['NOT', '~', 'membalik bit', '~1100 = 0011 (4 bit)'], ['Geser kiri', '<<', 'kalikan 2 per posisi', '0011 << 1 = 0110'], ['Geser kanan', '>>', 'bagi 2 (dibulatkan ke bawah)', '1100 >> 2 = 0011']] } },
            { code: py`a, b = 0b1100, 0b1010
print(f"{a:04b} & {b:04b} = {a & b:04b}")
print(f"{a:04b} | {b:04b} = {a | b:04b}")
print(f"{a:04b} ^ {b:04b} = {a ^ b:04b}")
print(f"3 << 2 = {3 << 2}   (3 x 2^2)")
print(f"100 >> 3 = {100 >> 3}  (100 // 2^3)")

# penerapan: memeriksa dan mengubah satu bit sebagai "bendera"
IZIN_BACA, IZIN_TULIS, IZIN_JALAN = 0b100, 0b010, 0b001
izin = IZIN_BACA | IZIN_TULIS
print("bisa tulis?", bool(izin & IZIN_TULIS), " bisa jalan?", bool(izin & IZIN_JALAN))
izin |= IZIN_JALAN          # nyalakan
izin &= ~IZIN_TULIS         # matikan
print("izin akhir:", format(izin, "03b"), "= oktal", oct(izin)[2:])`, lang: 'python', run: true, caption: 'Izin berkas Unix 755 atau 644 adalah tiga digit oktal; setiap digit adalah tiga bit baca-tulis-eksekusi untuk pemilik, grup, dan lainnya.' },
            { h2: 'Di mana biner dan heksa muncul' },
            { code: py`# 1. Warna: #RRGGBB, tiap pasangan heksa = 0..255
warna = "#1E5AB2"
r, g, b = (int(warna[i:i+2], 16) for i in (1, 3, 5))
print("RGB:", r, g, b)

# 2. Alamat IPv4 = 32 bit; masker /24 = 24 bit pertama bernilai 1
masker = (0xFFFFFFFF << (32 - 24)) & 0xFFFFFFFF
print("masker /24:", ".".join(str((masker >> s) & 255) for s in (24, 16, 8, 0)))

# 3. ASCII: karakter adalah angka
print([ord(c) for c in "Hai"], [format(ord(c), "08b") for c in "Hai"])
print("kapasitas: 8 bit =", 2**8, "nilai; 32 bit =", f"{2**32:,}", "nilai")`, lang: 'python', run: true },
            { callout: '"Ada 10 jenis orang di dunia: yang mengerti biner dan yang tidak." Dalam biner, 10 adalah dua. Lelucon klasik ini mengingatkan bahwa angka hanyalah lambang; nilainya ditentukan oleh basis.', kind: 'info', title: 'Selingan' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Nilai desimal 0b1010?', options: ['10', '12', '5'], answer: 0, why: '8 + 2 = 10.' }, { q: 'Satu digit heksadesimal mewakili berapa bit?', options: ['4', '3', '8'], answer: 0, why: '16 = 2⁴.' }, { q: 'Geser kiri satu posisi sama dengan...', options: ['Mengalikan 2', 'Membagi 2', 'Menambah 1'], answer: 0, why: 'Setiap posisi bernilai dua kali posisi kanannya.' }] },
            { exercise: [['Ubah 200 ke biner dan heksa.', '11001000 dan C8.'], ['Berapa nilai desimal 0xFF dan 0b11111111?', 'Keduanya 255.'], ['Izin berkas 640 berarti apa?', 'Pemilik: baca+tulis (6 = 110), grup: baca (4 = 100), lainnya: tidak ada akses (0).'], ['Berapa nilai berbeda yang dapat disimpan 10 bit?', '2¹⁰ = 1.024.']] },
            { summary: ['Sistem posisional: setiap posisi bernilai pangkat basis.', 'Konversi: bagi berulang (ke biner), jumlah nilai posisi (dari biner), kelompok 4 bit untuk heksa.', 'Operasi bit: AND, OR, XOR, NOT, geser.', 'Heksa adalah singkatan biner yang ringkas: warna, alamat memori, izin, masker.'] },
        ],
        faq: [['Mengapa komputer memakai biner?', 'Dua keadaan mudah dan andal diwujudkan dengan transistor, tahan derau, dan aritmetika serta logikanya sederhana.'], ['Bagaimana bilangan pecahan dalam biner?', 'Posisi setelah koma bernilai ½, ¼, ⅛, ...; banyak pecahan desimal seperti 0,1 tidak dapat dinyatakan tepat (lihat materi floating point).'], ['Apa itu bit, byte, kilobyte?', '1 byte = 8 bit. KB = 1.000 byte (SI) atau KiB = 1.024 byte (biner); awalan kibi, mebi, gibi dibuat untuk membedakannya.']],
        sources: [REF_PATT, REF_CS50, REF_NAND, REF_CODE],
    },

    {
        slug: 'komplemen-dua-dan-floating-point-ieee-754',
        title: 'Komplemen Dua dan Floating Point IEEE 754',
        description: 'Pahami bagaimana komputer menyimpan bilangan negatif dengan komplemen dua dan bilangan pecahan dengan IEEE 754: overflow, presisi, mengapa 0,1+0,2 tidak sama dengan 0,3, serta cara membedah bit float.',
        date: D, category: C, level: 'Menengah', tags: ['komplemen dua', 'IEEE 754', 'floating point', 'overflow', 'presisi'], cta: 'none',
        prereq: ['sistem bilangan biner'],
        lead: 'Bilangan bulat negatif dan bilangan pecahan tidak punya cara alami disimpan dalam bit. Dua kesepakatan, komplemen dua dan IEEE 754, menjawabnya. Keduanya menjelaskan banyak perilaku "aneh" yang ditemui programmer: overflow, nilai −128 tanpa pasangan, dan 0,1 + 0,2 ≠ 0,3.',
        body: [
            { objectives: ['menjelaskan representasi bilangan bulat bertanda dengan komplemen dua', 'menghitung negasi dan memahami overflow', 'membedakan komponen float: tanda, eksponen, mantissa', 'menjelaskan mengapa sebagian pecahan tidak dapat dinyatakan tepat', 'memilih cara membandingkan dan menyimpan angka yang aman'] },
            { h2: 'Komplemen dua (8 bit)' },
            `Pada komplemen dua, bit paling kiri bernilai <b>−128</b> (bukan +128) dan bit lainnya bernilai positif biasa. Hasilnya: bilangan nol hanya satu, dan penjumlahan bekerja dengan sirkuit yang sama untuk bilangan positif maupun negatif.`,
            { w: 'twos', title: 'Komplemen dua 8 bit', desc: 'Nyalakan bit paling kiri untuk melihat nilai menjadi negatif. Coba tombol Negasikan.' },
            { code: py`def komplemen_dua(n, bit=8):
    return format(n & ((1 << bit) - 1), f"0{bit}b")          # mask menyisakan bit rendah

for n in (5, -5, 127, -128, -1):
    print(f"{n:>5} -> {komplemen_dua(n)}")

# cara menegasikan: balik semua bit lalu tambah 1
x = 0b00000101
neg = (~x + 1) & 0xFF
print(f"{x:08b} -> balik {(~x) & 0xFF:08b} -> +1 -> {neg:08b} = {neg - 256}")

# rentang n bit: -2^(n-1) .. 2^(n-1) - 1
for n in (8, 16, 32, 64):
    print(f"{n:>2} bit: {-2**(n-1):>22,} .. {2**(n-1)-1:>22,}")`, lang: 'python', run: true },
            { h3: 'Overflow' },
            { code: py`def jumlah_8bit(a, b):
    hasil = (a + b) & 0xFF                      # perangkat keras hanya menyimpan 8 bit
    return hasil - 256 if hasil >= 128 else hasil

print(jumlah_8bit(100, 27))     # 127: masih muat
print(jumlah_8bit(100, 28))     # 128 tidak muat: berputar menjadi -128
print(jumlah_8bit(-100, -29))   # underflow: berputar menjadi 127`, lang: 'python', run: true, caption: 'Python memakai bilangan bulat berukuran tak terbatas sehingga tidak overflow; bahasa seperti C, Java, dan Go memakai lebar tetap dan berputar seperti ini.' },
            { h2: 'Floating point IEEE 754' },
            `Bilangan pecahan disimpan seperti notasi ilmiah: <code>(−1)^tanda × 1,mantissa × 2^eksponen</code>. Float 32 bit memakai 1 bit tanda, 8 bit eksponen (dengan bias 127), dan 23 bit mantissa. Double 64 bit: 1, 11 (bias 1023), dan 52 bit.`,
            { svg: 'diagram', w: 640, h: 130, label: 'Tata letak float 32 bit', nodes: [{ id: 's', x: 50, y: 60, shape: 'rect', w: 60, h: 50, t: 'tanda 1 bit' }, { id: 'e', x: 230, y: 60, shape: 'rect', w: 250, h: 50, t: 'eksponen 8 bit (bias 127)' }, { id: 'm', x: 500, y: 60, shape: 'rect', w: 250, h: 50, t: 'mantissa 23 bit (pecahan)' }], edges: [] },
            { code: py`import struct

def bedah(x):
    bits = format(struct.unpack(">I", struct.pack(">f", x))[0], "032b")
    tanda, eks, mant = bits[0], bits[1:9], bits[9:]
    e = int(eks, 2) - 127
    print(f"{x:>8}: {tanda} {eks} {mant}   eksponen={e:>3}  nilai = (-1)^{tanda} x 1.{mant[:8]}.. x 2^{e}")

for v in (1.0, 0.5, 6.5, -2.75, 0.1):
    bedah(v)`, lang: 'python', run: true, caption: 'Contoh 6,5 = 110,1₂ = 1,101₂ × 2². Eksponen tersimpan 2 + 127 = 129 = 10000001₂.' },
            { h3: 'Mengapa 0,1 + 0,2 ≠ 0,3' },
            `Pecahan hanya dapat dinyatakan tepat bila penyebutnya pangkat dua (½, ¼, ⅜). Desimal 0,1 = 1/10 dalam biner adalah pecahan berulang 0,0001100110011..., sehingga dibulatkan. Kesalahan kecil itu muncul saat dijumlahkan.`,
            { code: py`from decimal import Decimal
from fractions import Fraction
import math

print(0.1 + 0.2, 0.1 + 0.2 == 0.3)
print(Decimal(0.1))                                  # nilai sebenarnya yang tersimpan
print(math.isclose(0.1 + 0.2, 0.3))                  # bandingkan dengan toleransi
print(Decimal("0.1") + Decimal("0.2") == Decimal("0.3"))   # desimal tepat, cocok untuk uang
print(Fraction(1, 10) + Fraction(2, 10) == Fraction(3, 10))

# akibat lain: presisi hilang pada bilangan besar
print(2.0**53 == 2.0**53 + 1)                        # 2^53 + 1 tidak bisa dinyatakan
total = 0.0
for _ in range(10): total += 0.1         # penjumlahan satu per satu
print(total == 1.0, total)             # sepuluh kali 0.1 tidak persis 1.0`, lang: 'python', run: true },
            { callout: '<b>Aturan praktis</b>: jangan membandingkan float dengan ==; gunakan toleransi (<code>math.isclose</code>). Jangan memakai float untuk uang: pakai bilangan bulat dalam satuan terkecil atau tipe desimal. Dan ingat float 32 bit hanya memiliki sekitar 7 digit signifikan, double sekitar 15–16.', kind: 'warn', title: 'Pedoman' },
            { h2: 'Nilai khusus' },
            { table: { head: ['Nilai', 'Kapan muncul'], rows: [['+∞ dan −∞', 'Pembagian bukan nol dengan nol, atau overflow ke luar rentang'], ['NaN (Not a Number)', 'Operasi tak terdefinisi seperti 0/0 atau ∞ − ∞; NaN tidak sama dengan apa pun, termasuk dirinya sendiri'], ['+0 dan −0', 'Dua representasi nol yang dianggap sama pada perbandingan'], ['Denormal', 'Bilangan sangat kecil mendekati nol dengan presisi berkurang']] } },
            { code: py`inf = float("inf"); nan = float("nan")
print(inf + 1, -inf, inf - inf)
print(nan == nan, nan != nan)
print(1e308 * 10)                    # overflow menjadi inf
print(5e-324, 5e-325)                # bilangan terkecil, lalu hilang menjadi 0
print(-0.0 == 0.0)`, lang: 'python', run: true },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Rentang bilangan bertanda 8 bit komplemen dua?', options: ['−128 .. 127', '−127 .. 127', '0 .. 255'], answer: 0, why: 'Bit kiri bernilai −128.' }, { q: 'Mengapa 0,1 tidak tersimpan tepat dalam float?', options: ['Pecahan biner berulang sehingga dibulatkan', 'Float tak bisa menyimpan desimal', 'Karena ada bug'], answer: 0, why: 'Penyebut 10 bukan pangkat dua.' }, { q: 'Cara aman membandingkan dua float?', options: ['Dengan toleransi (isclose)', 'Dengan ==', 'Dengan !='], answer: 0, why: 'Galat pembulatan kecil dapat terjadi.' }] },
            { exercise: [['Tuliskan −20 dalam komplemen dua 8 bit.', '20 = 00010100; balik = 11101011; +1 = 11101100.'], ['Berapa hasil 01111111 + 00000001 pada komplemen dua 8 bit dan mengapa?', '10000000 = −128: overflow, hasil positif terbesar bertambah satu berputar ke negatif terkecil.'], ['Mengapa uang tidak boleh disimpan sebagai float?', 'Pecahan desimal seperti 0,10 tidak tepat sehingga jumlah dapat melenceng sedikit dan menumpuk menjadi selisih.'], ['Berapa digit signifikan kira-kira pada float 32 bit?', 'Sekitar 7 digit desimal (23 bit mantissa + 1 bit implisit ≈ 24 bit ≈ 7,2 digit).']] },
            { summary: ['Komplemen dua: bit kiri bernilai −n; negasi = balik bit + 1; overflow berputar.', 'IEEE 754: tanda, eksponen (bias), mantissa; ±∞, NaN, nol bertanda.', 'Sebagian pecahan desimal tak dapat dinyatakan tepat dalam biner.', 'Bandingkan dengan toleransi; gunakan desimal atau bilangan bulat untuk uang.'] },
        ],
        faq: [['Apa itu bfloat16 dan float16?', 'Format 16 bit untuk pembelajaran mesin dan grafika; bfloat16 mempertahankan rentang eksponen float32 dengan mantissa lebih pendek.'], ['Apakah double selalu lebih baik dari float?', 'Lebih presisi tetapi memakai memori dua kali lebih besar; GPU dan model besar sering memakai float yang lebih kecil demi kecepatan.'], ['Dari mana standar IEEE 754 berasal?', 'Dipublikasikan IEEE pada 1985 dan direvisi 2008 dan 2019; ia dirancang antara lain oleh William Kahan.']],
        sources: [['David Goldberg, What Every Computer Scientist Should Know About Floating-Point Arithmetic, ACM Computing Surveys 23(1), 1991', 'https://dl.acm.org/doi/10.1145/103162.103163'], ['Dokumentasi Python: Floating Point Arithmetic: Issues and Limitations', 'https://docs.python.org/3/tutorial/floatingpoint.html'], REF_PATT, ['IEEE 754-2019: Standard for Floating-Point Arithmetic', 'https://standards.ieee.org/ieee/754/6210/']],
    },

    {
        slug: 'logika-boolean-gerbang-logika-dan-tabel-kebenaran',
        title: 'Logika Boolean, Gerbang Logika, dan Tabel Kebenaran',
        description: 'Pelajari aljabar Boolean dan gerbang logika AND, OR, NOT, NAND, NOR, XOR: tabel kebenaran, hukum De Morgan, penyederhanaan ekspresi, dan mengapa NAND saja cukup membangun semua rangkaian.',
        date: D, category: C, level: 'Pemula', tags: ['logika boolean', 'gerbang logika', 'tabel kebenaran', 'De Morgan', 'NAND'], cta: 'none',
        prereq: ['sistem bilangan biner'],
        lead: 'Di dasar setiap komputer ada gerbang logika: komponen kecil yang menerima satu atau dua sinyal dan menghasilkan satu sinyal sesuai aturan sederhana. Dari aturan itu, ribuan juta transistor menyusun penjumlah, memori, sampai prosesor. Memahami logika Boolean berarti memahami bahan baku komputasi.',
        body: [
            { objectives: ['menyatakan fungsi gerbang AND, OR, NOT, NAND, NOR, XOR, XNOR', 'menyusun dan membaca tabel kebenaran', 'menerapkan hukum aljabar Boolean dan De Morgan', 'menyederhanakan ekspresi Boolean dan memeriksanya dengan tabel kebenaran', 'menjelaskan bahwa NAND (atau NOR) bersifat universal'] },
            { h2: 'Gerbang dasar' },
            { table: { head: ['Gerbang', 'Ekspresi', 'Keluaran 1 bila...', 'p=0,q=0', 'p=0,q=1', 'p=1,q=0', 'p=1,q=1'], rows: [['AND', 'p · q', 'keduanya 1', '0', '0', '0', '1'], ['OR', 'p + q', 'salah satu 1', '0', '1', '1', '1'], ['NOT', '¬p', 'masukan 0', '1 (p=0)', '', '0 (p=1)', ''], ['NAND', '¬(p · q)', 'bukan keduanya', '1', '1', '1', '0'], ['NOR', '¬(p + q)', 'keduanya 0', '1', '0', '0', '0'], ['XOR', 'p ⊕ q', 'masukan berbeda', '0', '1', '1', '0'], ['XNOR', '¬(p ⊕ q)', 'masukan sama', '1', '0', '0', '1']] } },
            { w: 'truth', title: 'Tabel kebenaran interaktif', desc: 'Ketik ekspresi logika dengan variabel p, q, r (and, or, not, xor). Bandingkan not (p and q) dengan (not p) or (not q).', expr: 'not (p and q)' },
            { h2: 'Hukum aljabar Boolean' },
            { table: { head: ['Hukum', 'Bentuk AND', 'Bentuk OR'], rows: [['Identitas', 'p · 1 = p', 'p + 0 = p'], ['Dominasi', 'p · 0 = 0', 'p + 1 = 1'], ['Idempoten', 'p · p = p', 'p + p = p'], ['Komplemen', 'p · ¬p = 0', 'p + ¬p = 1'], ['Komutatif', 'p · q = q · p', 'p + q = q + p'], ['Distributif', 'p · (q + r) = p·q + p·r', 'p + q·r = (p + q)·(p + r)'], ['Absorpsi', 'p · (p + q) = p', 'p + p·q = p'], ['De Morgan', '¬(p · q) = ¬p + ¬q', '¬(p + q) = ¬p · ¬q']] } },
            { h2: 'Membuktikan dengan tabel kebenaran' },
            { code: py`from itertools import product

def setara(f, g, n):
    """True bila f dan g sama untuk semua kombinasi n variabel."""
    return all(f(*v) == g(*v) for v in product([False, True], repeat=n))

# De Morgan
print("De Morgan 1:", setara(lambda p, q: not (p and q), lambda p, q: (not p) or (not q), 2))
print("De Morgan 2:", setara(lambda p, q: not (p or q),  lambda p, q: (not p) and (not q), 2))
# Absorpsi
print("Absorpsi   :", setara(lambda p, q: p and (p or q), lambda p, q: p, 2))
# XOR dari gerbang dasar
print("XOR        :", setara(lambda p, q: p != q, lambda p, q: (p or q) and not (p and q), 2))
# contoh yang SALAH, untuk melihat bagaimana pengujian menolak
print("klaim salah:", setara(lambda p, q: not (p and q), lambda p, q: (not p) and (not q), 2))

# cetak tabel kebenaran sebuah ekspresi
print("\n p q r | (p and q) or r")
for p, q, r in product([0, 1], repeat=3):
    print(f" {p} {q} {r} |      {int((p and q) or r)}")`, lang: 'python', run: true, caption: 'Untuk n variabel hanya ada 2ⁿ kombinasi sehingga pembuktian dengan tabel kebenaran selalu mungkin (dan sah) untuk ekspresi kecil.' },
            { h2: 'Penyederhanaan' },
            `Ekspresi yang lebih sederhana berarti rangkaian dengan lebih sedikit gerbang. Contoh: <code>(p·q) + (p·¬q)</code> = <code>p·(q + ¬q)</code> = <code>p·1</code> = <code>p</code>.`,
            { code: py`from itertools import product

awal      = lambda p, q: (p and q) or (p and not q)
sederhana = lambda p, q: p
print("sama?", all(awal(*v) == sederhana(*v) for v in product([False, True], repeat=2)))

# contoh lebih besar: keputusan "boleh meminjam buku"
#   anggota AND (tidak_ada_denda OR denda_dilunasi) AND NOT akun_dibekukan
def boleh(anggota, ada_denda, lunas, beku):
    return anggota and ((not ada_denda) or lunas) and not beku
print(boleh(True, True, False, False), boleh(True, True, True, False), boleh(True, False, False, True))`, lang: 'python', run: true },
            { h2: 'NAND itu universal' },
            `Semua gerbang lain dapat dibangun hanya dari NAND. Karena itu pabrik chip dapat bermodal satu jenis gerbang saja.`,
            { code: py`def nand(a, b): return not (a and b)

def NOT(a):      return nand(a, a)
def AND(a, b):   return NOT(nand(a, b))
def OR(a, b):    return nand(NOT(a), NOT(b))                       # De Morgan
def XOR(a, b):
    n = nand(a, b)
    return nand(nand(a, n), nand(b, n))                            # 4 gerbang NAND

print(" a b | NOT AND OR XOR")
for a in (False, True):
    for b in (False, True):
        print(f" {int(a)} {int(b)} |  {int(NOT(a))}    {int(AND(a, b))}   {int(OR(a, b))}   {int(XOR(a, b))}")`, lang: 'python', run: true, caption: 'Pembuktian universalitas NAND: NOT, AND, OR, dan XOR semuanya dibangun hanya dari fungsi nand().' },
            { svg: 'diagram', w: 620, h: 190, label: 'XOR dari empat NAND', nodes: [{ id: 'a', x: 40, y: 50, shape: 'text', w: 40, h: 24, t: 'A' }, { id: 'b', x: 40, y: 140, shape: 'text', w: 40, h: 24, t: 'B' }, { id: 'n1', x: 190, y: 95, shape: 'rect', w: 80, h: 40, t: 'NAND 1' }, { id: 'n2', x: 340, y: 45, shape: 'rect', w: 80, h: 40, t: 'NAND 2' }, { id: 'n3', x: 340, y: 150, shape: 'rect', w: 80, h: 40, t: 'NAND 3' }, { id: 'n4', x: 490, y: 95, shape: 'rect', w: 80, h: 40, t: 'NAND 4' }, { id: 'o', x: 595, y: 95, shape: 'text', w: 40, h: 24, t: 'A⊕B' }], edges: [{ from: 'a', to: 'n1' }, { from: 'b', to: 'n1' }, { from: 'a', to: 'n2' }, { from: 'n1', to: 'n2' }, { from: 'b', to: 'n3' }, { from: 'n1', to: 'n3' }, { from: 'n2', to: 'n4' }, { from: 'n3', to: 'n4' }, { from: 'n4', to: 'o' }], caption: 'Diagram dirangkum: NAND 1 dipakai bersama; NAND 2 menerima A dan keluaran NAND 1, NAND 3 menerima B dan keluaran NAND 1.' },
            { callout: 'Logika Boolean muncul di banyak tempat selain perangkat keras: kondisi <code>if</code>, filter SQL (<code>WHERE a AND (b OR c)</code>), pencarian di mesin pencari, dan aturan akses. Menyederhanakan kondisi yang rumit sering menghilangkan bug.', kind: 'good', title: 'Di luar perangkat keras' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Keluaran XOR bernilai 1 bila...', options: ['Kedua masukan berbeda', 'Kedua masukan sama', 'Keduanya 1'], answer: 0, why: 'XOR = eksklusif-atau.' }, { q: '¬(p ∧ q) setara dengan...', options: ['¬p ∨ ¬q', '¬p ∧ ¬q', 'p ∨ q'], answer: 0, why: 'De Morgan.' }, { q: 'Gerbang yang cukup untuk membangun semua gerbang lain?', options: ['NAND', 'AND', 'XOR'], answer: 0, why: 'NAND (dan NOR) bersifat universal.' }] },
            { exercise: [['Sederhanakan p + (¬p · q).', '= (p + ¬p)·(p + q) = 1·(p + q) = p + q.'], ['Buktikan p · (p + q) = p dengan hukum.', 'Absorpsi; atau tabel kebenaran: keluaran sama dengan p untuk semua kombinasi.'], ['Berapa baris tabel kebenaran untuk 5 variabel?', '2⁵ = 32 baris.'], ['Bangun OR hanya dari NAND.', 'OR(a, b) = NAND(NAND(a,a), NAND(b,b)).']] },
            { summary: ['Gerbang dasar: AND, OR, NOT, serta NAND, NOR, XOR, XNOR.', 'Tabel kebenaran menyatakan fungsi dan dapat membuktikan kesetaraan.', 'Hukum Boolean dan De Morgan memungkinkan penyederhanaan.', 'NAND dan NOR universal.'] },
        ],
        faq: [['Apa bedanya logika Boolean dan logika proposisi?', 'Keduanya isomorfik: AND ≈ ∧, OR ≈ ∨, NOT ≈ ¬; satu dipakai pada rangkaian, yang lain pada penalaran.'], ['Apa itu peta Karnaugh?', 'Alat grafis untuk menyederhanakan ekspresi Boolean dengan 2–4 variabel secara visual.'], ['Dari mana nama Boolean?', 'Dari George Boole, matematikawan Inggris yang menerbitkan aljabar logikanya pada 1847 dan 1854.']],
        sources: [REF_NAND, REF_PATT, ['Dokumentasi Python: Boolean Operations', 'https://docs.python.org/3/reference/expressions.html#boolean-operations'], ['Rosen, Discrete Mathematics and Its Applications (McGraw-Hill)', '']],
    },

    {
        slug: 'dari-gerbang-ke-penjumlah-half-adder-full-adder-dan-alu',
        title: 'Dari Gerbang ke Penjumlah: Half Adder, Full Adder, dan ALU',
        description: 'Bangun penjumlah biner dari gerbang logika: half adder, full adder, ripple-carry adder 8 bit, pengurangan dengan komplemen dua, dan ALU mini, semuanya disimulasikan dengan kode Python.',
        date: D, category: C, level: 'Menengah', tags: ['half adder', 'full adder', 'ALU', 'rangkaian kombinasional', 'arsitektur komputer'], cta: 'none',
        prereq: ['logika boolean', 'komplemen dua'],
        lead: 'Bagaimana kumpulan gerbang AND dan XOR bisa menjumlahkan? Jawabannya adalah salah satu momen paling memuaskan dalam informatika: penjumlahan dua bit ternyata persis fungsi XOR untuk hasil dan AND untuk bawaan. Dari sana, menyusun penjumlah 8 bit dan unit aritmetika prosesor hanya soal merangkai.',
        body: [
            { objectives: ['membangun half adder dan full adder dari gerbang', 'menyusun ripple-carry adder dari beberapa full adder', 'melakukan pengurangan dengan penjumlahan komplemen dua', 'menjelaskan ALU dan flag status (zero, carry, negative, overflow)', 'memahami keterbatasan kecepatan ripple-carry dan gagasan carry-lookahead'] },
            { h2: 'Menjumlahkan dua bit' },
            { table: { head: ['A', 'B', 'Jumlah (S)', 'Bawaan (C)', 'Gerbang'], rows: [['0', '0', '0', '0', ''], ['0', '1', '1', '0', ''], ['1', '0', '1', '0', ''], ['1', '1', '0', '1', 'S = A ⊕ B; C = A · B']] } },
            `Itulah <b>half adder</b>: jumlah = XOR, bawaan = AND. Disebut "setengah" karena tidak menerima bawaan dari posisi sebelumnya.`,
            { h2: 'Full adder' },
            `Untuk menjumlahkan beberapa bit, setiap posisi perlu menerima bawaan dari posisi kanan. Full adder memiliki tiga masukan (A, B, bawaan masuk Cin) dan dua keluaran (S, Cout).`,
            { code: py`def half_adder(a, b):
    return a ^ b, a & b                       # (jumlah, bawaan)

def full_adder(a, b, cin):
    s1, c1 = half_adder(a, b)
    s2, c2 = half_adder(s1, cin)
    return s2, c1 | c2                         # jumlah, bawaan keluar

print("half adder:")
for a in (0, 1):
    for b in (0, 1):
        print(f"  {a}+{b} -> S={half_adder(a, b)[0]} C={half_adder(a, b)[1]}")
print("full adder:")
for a in (0, 1):
    for b in (0, 1):
        for c in (0, 1):
            s, co = full_adder(a, b, c)
            print(f"  {a}+{b}+{c} -> S={s} Cout={co}   ({a + b + c} = {co}{s} biner)")`, lang: 'python', run: true, caption: 'Full adder dibuat dari dua half adder dan satu OR. Hasil jumlah tiga bit selalu muat dalam dua bit (Cout, S).' },
            { h2: 'Ripple-carry adder 8 bit' },
            { svg: 'flow', label: 'Delapan full adder berderet', steps: [{ t: 'FA bit 0', d: 'A0 + B0 + 0' }, { t: 'FA bit 1', d: 'A1 + B1 + C0' }, { t: '...', d: 'bawaan merambat ke kiri' }, { t: 'FA bit 7', d: 'A7 + B7 + C6 → Cout' }], caption: 'Bawaan "beriak" dari bit paling kanan ke kiri; bit 7 harus menunggu bit 0 sampai 6.' },
            { code: py`def full_adder(a, b, cin):
    s = a ^ b ^ cin
    cout = (a & b) | (cin & (a ^ b))
    return s, cout

def penjumlah(x, y, lebar=8, cin=0):
    hasil, c = 0, cin
    for i in range(lebar):                      # dari bit paling kanan
        bit_x, bit_y = (x >> i) & 1, (y >> i) & 1
        s, c = full_adder(bit_x, bit_y, c)
        hasil |= s << i
    return hasil, c                              # (hasil, bawaan keluar akhir)

for x, y in [(23, 42), (200, 100), (255, 1), (127, 1)]:
    h, c = penjumlah(x, y)
    print(f"{x:>3} + {y:>3} = {h:>3} (biner {h:08b}), bawaan keluar {c}   [benar: {x + y}]")`, lang: 'python', run: true, caption: 'Bila bawaan keluar bernilai 1, hasil sesungguhnya tidak muat dalam 8 bit (200 + 100 = 300 = 256 + 44).' },
            { h2: 'Pengurangan = penjumlahan komplemen dua' },
            `Mengapa tidak membuat rangkaian pengurang terpisah? Karena <code>A − B = A + (−B)</code>, dan <code>−B</code> adalah B dibalik bitnya lalu ditambah 1. Dengan memberi bawaan masuk = 1 dan membalik B lewat XOR, penjumlah yang sama dapat mengurangi.`,
            { code: py`def full_adder(a, b, cin):
    return a ^ b ^ cin, (a & b) | (cin & (a ^ b))

def tambah_kurang(x, y, kurang=False, lebar=8):
    mask = (1 << lebar) - 1
    if kurang:
        y = (~y) & mask                          # balik semua bit B
    hasil, c = 0, 1 if kurang else 0             # +1 lewat bawaan masuk
    for i in range(lebar):
        s, c = full_adder((x >> i) & 1, (y >> i) & 1, c)
        hasil |= s << i
    return hasil, c

def tanda(h, lebar=8): return h - (1 << lebar) if h >> (lebar - 1) else h

for x, y in [(50, 20), (20, 50), (100, 100)]:
    h, _ = tambah_kurang(x, y, kurang=True)
    print(f"{x:>3} - {y:>3} = {tanda(h):>4}  (biner {h:08b})")`, lang: 'python', run: true },
            { h2: 'ALU mini dan flag' },
            `Unit aritmetika dan logika (ALU) menggabungkan penjumlah dengan operasi logika dan memilih satu hasil lewat kode operasi. Selain hasil, ia menghasilkan <b>flag</b> status yang dipakai instruksi percabangan.`,
            { code: py`LEBAR = 8
MASK = (1 << LEBAR) - 1

def alu(op, a, b):
    if   op == "ADD": mentah = a + b
    elif op == "SUB": mentah = a - b
    elif op == "AND": mentah = a & b
    elif op == "OR":  mentah = a | b
    elif op == "XOR": mentah = a ^ b
    else: raise ValueError(op)
    hasil = mentah & MASK
    flag = {
        "Z": hasil == 0,                                    # zero
        "N": bool(hasil >> (LEBAR - 1)),                    # negative (bit tanda)
        "C": mentah > MASK or mentah < 0,                   # carry / borrow
    }
    if op in ("ADD", "SUB"):
        sa, sb, sh = (a >> 7) & 1, (b >> 7) & 1, (hasil >> 7) & 1
        flag["V"] = (sa == sb and sh != sa) if op == "ADD" else (sa != sb and sh != sa)   # overflow bertanda
    return hasil, flag

for op, a, b in [("ADD", 100, 27), ("ADD", 100, 100), ("SUB", 5, 5), ("SUB", 3, 5), ("AND", 0b1100, 0b1010)]:
    h, f = alu(op, a, b)
    print(f"{op} {a:>3},{b:>3} -> {h:>3} ({h:08b})  flag: " + " ".join(k + "=" + str(int(v)) for k, v in f.items()))`, lang: 'python', run: true, caption: 'Instruksi seperti "lompat jika nol" (JZ) atau "lompat jika negatif" (JN) memeriksa flag ini. Perhatikan 100 + 100 = 200 menyalakan flag overflow bertanda (V) karena sebagai bilangan bertanda 8 bit hasilnya −56.' },
            { callout: 'Ripple-carry sederhana tetapi lambat: waktu bertambah dengan lebar kata karena bawaan merambat satu per satu. Prosesor nyata memakai <b>carry-lookahead</b> atau varian yang lebih cepat, yang menghitung bawaan beberapa posisi sekaligus, dengan menambah gerbang demi kecepatan.', kind: 'info', title: 'Kecepatan vs jumlah gerbang' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Hasil jumlah half adder adalah gerbang...', options: ['XOR', 'AND', 'OR'], answer: 0, why: 'Bawaan adalah AND.' }, { q: 'Bagaimana mengurangi dengan penjumlah?', options: ['Balik bit pengurang dan tambah 1 (komplemen dua)', 'Menukar A dan B', 'Memakai OR'], answer: 0, why: 'A − B = A + (−B).' }, { q: 'Flag Z pada ALU menandakan...', options: ['Hasil nol', 'Hasil negatif', 'Ada bawaan'], answer: 0, why: 'Zero flag.' }] },
            { exercise: [['Jumlahkan 0110 + 0111 secara manual dengan bawaan.', '0110 + 0111 = 1101 (6 + 7 = 13); tidak ada bawaan keluar pada 4 bit.'], ['Berapa gerbang dasar (XOR, AND, OR) yang dibutuhkan satu full adder dari dua half adder?', 'Dua XOR, dua AND, dan satu OR = 5 gerbang.'], ['Mengapa overflow bertanda dan carry berbeda?', 'Carry relevan untuk bilangan tanpa tanda; overflow bertanda untuk komplemen dua (tanda hasil salah akibat melampaui rentang).'], ['Mengapa kecepatan ripple-carry buruk untuk 64 bit?', 'Bawaan harus melewati 64 full adder berurutan sehingga jeda gerbang bertambah linear.']] },
            { summary: ['Half adder: XOR dan AND; full adder: tiga masukan; ripple-carry merangkai full adder.', 'Pengurangan memakai penjumlah dengan komplemen dua.', 'ALU menghasilkan hasil dan flag (Z, N, C, V).', 'Kecepatan penjumlah adalah pertukaran antara jumlah gerbang dan waktu rambat.'] },
        ],
        faq: [['Bagaimana perkalian dilakukan?', 'Dengan geser dan tambah (seperti perkalian manual) atau rangkaian khusus seperti array multiplier dan algoritma Booth.'], ['Apa bedanya rangkaian kombinasional dan sekuensial?', 'Kombinasional: keluaran hanya bergantung masukan saat ini (penjumlah). Sekuensial: ada memori/keadaan (flip-flop, register).'], ['Di mana belajar membangun komputer dari gerbang?', 'Proyek nand2tetris membimbing dari NAND sampai komputer penuh dengan simulator perangkat keras gratis.']],
        sources: [REF_NAND, REF_PATT, REF_TANEN, REF_CODE],
    },

    {
        slug: 'arsitektur-cpu-siklus-fetch-decode-execute-dan-simulator-mini',
        title: 'Arsitektur CPU: Fetch-Decode-Execute dan Simulator Mini',
        description: 'Pahami cara kerja CPU: register, program counter, siklus fetch-decode-execute, set instruksi, dan memori, lewat simulator CPU mini dalam Python yang menjalankan program assembly nyata.',
        date: D, category: C, level: 'Menengah', tags: ['CPU', 'fetch decode execute', 'assembly', 'register', 'arsitektur von Neumann'], cta: 'none',
        prereq: ['sistem bilangan', 'logika boolean'],
        lead: 'Prosesor, di balik semua keajaibannya, melakukan hal yang sangat sederhana berulang miliaran kali per detik: ambil instruksi, tafsirkan, jalankan. Dengan membangun simulator CPU mini 20-an baris, Anda akan melihat bagaimana program, memori, dan register bekerja sama, dan mengapa bahasa assembly seperti itu.',
        body: [
            { objectives: ['menjelaskan arsitektur von Neumann: CPU, memori, bus', 'menyebut fungsi register, program counter, dan instruction register', 'menjelaskan siklus fetch-decode-execute', 'membaca dan menulis program assembly sederhana untuk CPU mini', 'menghubungkan konsep dengan CPU nyata: pipeline, cache, multi-core'] },
            { h2: 'Arsitektur von Neumann' },
            { svg: 'diagram', w: 640, h: 270, label: 'Arsitektur komputer', nodes: [{ id: 'cpu', x: 160, y: 135, shape: 'frame', w: 280, h: 230, t: 'CPU' }, { id: 'cu', x: 160, y: 80, shape: 'rect', w: 200, h: 44, t: 'Control Unit: PC, IR, dekoder' }, { id: 'alu', x: 160, y: 140, shape: 'rect', w: 200, h: 44, t: 'ALU: hitung dan bandingkan' }, { id: 'reg', x: 160, y: 200, shape: 'rect', w: 200, h: 44, t: 'Register (R0..R3)' }, { id: 'mem', x: 520, y: 100, shape: 'rect', w: 160, h: 70, t: 'Memori utama: program DAN data' }, { id: 'io', x: 520, y: 210, shape: 'rect', w: 160, h: 50, t: 'Perangkat masukan/keluaran' }], edges: [{ from: 'cpu', to: 'mem', label: 'bus', head: 'arrow', tail: 'arrow' }, { from: 'cpu', to: 'io', head: 'arrow', tail: 'arrow' }], caption: 'Program dan data berbagi memori yang sama. Itu kekuatan (program dapat dimuat dan diubah seperti data) sekaligus sumber kerentanan.' },
            { table: { head: ['Komponen', 'Fungsi'], rows: [['Program Counter (PC)', 'Menyimpan alamat instruksi berikutnya'], ['Instruction Register (IR)', 'Menyimpan instruksi yang sedang dijalankan'], ['Register', 'Penyimpanan kecil dan sangat cepat di dalam CPU'], ['ALU', 'Melakukan operasi aritmetika dan logika'], ['Control Unit', 'Mendekode instruksi dan mengatur aliran data'], ['Bus', 'Jalur data, alamat, dan kendali antara CPU dan memori']] } },
            { h2: 'Siklus fetch-decode-execute' },
            { svg: 'cycle', label: 'Siklus instruksi', items: ['Fetch: ambil instruksi dari memori[PC]', 'PC naik ke instruksi berikutnya', 'Decode: tentukan operasi dan operan', 'Execute: jalankan (ALU, memori, lompat)'], caption: 'Instruksi lompat (jump) mengubah PC, itulah cara if dan perulangan terjadi.' },
            { h2: 'Simulator CPU mini' },
            `Kita rancang CPU sederhana dengan 4 register dan delapan instruksi. Setiap instruksi adalah tuple (operasi, operan...). Program berikut menjumlahkan 1 sampai 5.`,
            { table: { head: ['Instruksi', 'Arti'], rows: [['LOAD Rn, nilai', 'Isi register Rn dengan nilai langsung'], ['ADD Rn, Rm', 'Rn ← Rn + Rm'], ['SUB Rn, nilai', 'Rn ← Rn − nilai'], ['JNZ Rn, alamat', 'Lompat ke alamat bila Rn ≠ 0'], ['PRINT Rn', 'Cetak isi Rn'], ['HALT', 'Berhenti']] } },
            { code: py`def jalankan(program, jejak=False, batas=1000):
    R = {"R0": 0, "R1": 0, "R2": 0, "R3": 0}
    PC, langkah = 0, 0
    while langkah < batas:
        instruksi = program[PC]                  # FETCH
        PC += 1                                  # PC menunjuk instruksi berikutnya
        op, *operan = instruksi                  # DECODE
        langkah += 1
        if op == "LOAD":   R[operan[0]] = operan[1]                      # EXECUTE
        elif op == "ADD":  R[operan[0]] += R[operan[1]]
        elif op == "SUB":  R[operan[0]] -= operan[1]
        elif op == "JNZ":
            if R[operan[0]] != 0: PC = operan[1]
        elif op == "PRINT": print("keluaran:", R[operan[0]])
        elif op == "HALT": break
        if jejak: print(f"  langkah {langkah:>2}: {instruksi!s:<22} PC={PC:<2} {R}")
    return R, langkah

program = [
    ("LOAD", "R0", 0),      # 0: jumlah = 0
    ("LOAD", "R1", 5),      # 1: pencacah = 5
    ("ADD",  "R0", "R1"),   # 2: jumlah += pencacah
    ("SUB",  "R1", 1),      # 3: pencacah -= 1
    ("JNZ",  "R1", 2),      # 4: ulangi selama pencacah != 0
    ("PRINT", "R0"),        # 5: cetak jumlah
    ("HALT",),              # 6
]
R, n = jalankan(program, jejak=True)
print("selesai dalam", n, "instruksi; R0 =", R["R0"], "(1+2+3+4+5 = 15)")`, lang: 'python', run: true, caption: 'Perulangan ditunjukkan oleh JNZ yang memundurkan PC ke alamat 2. Inilah bentuk "while" di tingkat mesin: tidak ada perulangan, hanya lompat bersyarat.' },
            { h2: 'Dari sini ke CPU nyata' },
            { table: { head: ['Konsep', 'Arti', 'Mengapa penting'], rows: [['Set instruksi (ISA)', 'Kumpulan instruksi yang dipahami CPU (x86-64, ARM, RISC-V)', 'Antarmuka antara perangkat lunak dan keras'], ['Pipeline', 'Beberapa instruksi pada tahap berbeda sekaligus', 'Meningkatkan kecepatan tanpa menaikkan clock'], ['Cache', 'Memori kecil dan cepat dekat CPU', 'Mengurangi penantian memori utama yang lambat'], ['Multi-core', 'Beberapa inti dalam satu chip', 'Paralelisme; menuntut program yang konkuren'], ['Clock', 'Denyut yang menyinkronkan operasi (GHz)', 'Bukan satu-satunya penentu kecepatan; IPC juga penting']] } },
            { w: 'compare', title: 'RISC dan CISC', tabs: [{ label: 'RISC', html: 'Instruksi sederhana dan seragam panjangnya; banyak register; akses memori hanya lewat load/store. Contoh: ARM, RISC-V. Hemat daya, mudah di-pipeline.' }, { label: 'CISC', html: 'Instruksi lebih kaya dan panjang bervariasi; satu instruksi dapat melakukan banyak hal. Contoh: x86. Di dalamnya CPU modern menerjemahkan ke mikro-operasi sederhana.' }] },
            { callout: 'Bahasa tingkat tinggi seperti Python atau Java akhirnya diterjemahkan menjadi instruksi serupa yang dijalankan CPU, langsung (dikompilasi) atau lewat penerjemah dan mesin virtual. Memahami siklus ini menjelaskan mengapa perulangan, pemanggilan fungsi, dan akses memori memiliki biaya.', kind: 'info', title: 'Hubungan dengan pemrograman' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Register yang menunjuk instruksi berikutnya?', options: ['Program Counter', 'Instruction Register', 'ALU'], answer: 0, why: 'PC berisi alamat instruksi berikutnya.' }, { q: 'Siklus instruksi yang benar?', options: ['Fetch, decode, execute', 'Execute, fetch, decode', 'Decode, store, fetch'], answer: 0, why: 'Ambil, tafsirkan, jalankan.' }, { q: 'Bagaimana if dan while diwujudkan di tingkat mesin?', options: ['Instruksi lompat bersyarat', 'Perangkat keras khusus per if', 'Dengan rekursi saja'], answer: 0, why: 'Mengubah PC.' }] },
            { exercise: [['Tulis program CPU mini untuk menghitung 3 × 4 dengan penjumlahan berulang.', 'LOAD R0,0; LOAD R1,4; LOAD R2,3; ADD R0,R2; SUB R1,1; JNZ R1,3; PRINT R0; HALT. Hasil 12.'], ['Berapa instruksi dijalankan program penjumlahan 1..5 di atas?', 'Dua inisialisasi + 5 iterasi × 3 instruksi + PRINT + HALT = 2 + 15 + 2 = 19.'], ['Mengapa memori yang dibagi untuk program dan data dapat menjadi masalah keamanan?', 'Data yang diubah penyerang dapat dieksekusi sebagai kode (buffer overflow); mitigasinya NX/DEP yang menandai halaman data tak dapat dieksekusi.'], ['Tambahkan instruksi MUL ke simulator: apa yang perlu diubah?', 'Tambah cabang elif op == "MUL": R[a] *= R[b] pada tahap execute, tanpa mengubah fetch dan decode.']] },
            { summary: ['Von Neumann: CPU, memori, bus; program dan data di memori yang sama.', 'Siklus: fetch, decode, execute; PC menunjuk instruksi berikutnya.', 'Perulangan dan percabangan adalah lompat bersyarat yang mengubah PC.', 'CPU nyata menambah pipeline, cache, multi-core, dan ISA yang kaya.'] },
        ],
        faq: [['Apa itu assembly?', 'Representasi teks dari instruksi mesin dengan nama mnemonik (MOV, ADD, JMP). Satu baris biasanya satu instruksi.'], ['Apa bedanya 32 bit dan 64 bit?', 'Lebar register dan alamat: 64 bit dapat menangani ruang alamat jauh lebih besar (lebih dari 4 GB) dan operasi data lebih lebar.'], ['Mengapa clock tidak terus naik?', 'Konsumsi daya dan panas naik tajam; industri beralih ke banyak inti dan efisiensi arsitektur.']],
        sources: [REF_PATT, REF_TANEN, ['Harvard CS50: Introduction to Computer Science (Week 0 dan 1)', 'https://cs50.harvard.edu/x/'], REF_NAND],
    },
];
