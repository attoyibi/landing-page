const D = '2026-10-23';
const C = 'Algoritma & Pemrograman Python';
const py = String.raw;

const REF_PY = ['Dokumentasi resmi Python: Python Tutorial', 'https://docs.python.org/3/tutorial/'];
const REF_THINK = ['Allen B. Downey, Think Python (edisi ke-3), buku teks terbuka', 'https://allendowney.github.io/ThinkPython/'];
const REF_MIT = ['MIT OpenCourseWare 6.0001: Introduction to Computer Science and Programming in Python', 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/'];
const REF_LANG = ['Dokumentasi Python: The Python Language Reference', 'https://docs.python.org/3/reference/'];

export default [
    {
        slug: 'operator-dan-ekspresi-python-aritmetika-logika-presedensi',
        title: 'Operator dan Ekspresi Python: Aritmetika, Logika, Presedensi',
        description: 'Kuasai operator Python: aritmetika, pembandingan, logika, bitwise, penugasan, dan presedensi, termasuk jebakan pembagian, short-circuit, dan float.',
        date: D, category: C, level: 'Dasar', tags: ['operator Python', 'presedensi', 'ekspresi', 'operator logika', 'floor division'], cta: 'none',
        prereq: ['variabel dan tipe data Python'],
        lead: 'Ekspresi adalah gabungan nilai dan operator yang menghasilkan sebuah nilai baru. Hampir setiap baris program berisi ekspresi, sehingga kesalahan kecil dalam memahami operator bisa menghasilkan bug yang sulit dilacak. Materi ini membahas semua operator penting, urutan pengerjaannya, dan perilaku yang sering mengejutkan pemula.',
        body: [
            { objectives: ['memakai operator aritmetika, perbandingan, logika, identitas, dan keanggotaan', 'menentukan urutan pengerjaan ekspresi berdasarkan presedensi dan asosiatifitas', 'menjelaskan hasil // dan % pada bilangan negatif', 'menjelaskan evaluasi hubungan pendek (short-circuit) pada and dan or', 'menulis ekspresi kondisi yang benar dan mudah dibaca'] },
            { h2: 'Operator aritmetika' },
            { table: { head: ['Operator', 'Arti', 'Contoh', 'Hasil'], rows: [['+', 'Penjumlahan', '7 + 2', '9'], ['-', 'Pengurangan', '7 - 2', '5'], ['*', 'Perkalian', '7 * 2', '14'], ['/', 'Pembagian (selalu float)', '7 / 2', '3.5'], ['//', 'Pembagian bulat (floor)', '7 // 2', '3'], ['%', 'Sisa bagi (modulo)', '7 % 2', '1'], ['**', 'Pangkat', '2 ** 10', '1024']] } },
            { h3: 'Pembagian bulat dan sisa pada bilangan negatif' },
            `Di Python, <code>//</code> membulatkan ke arah <b>bawah</b> (menuju minus tak hingga), bukan memotong ke arah nol seperti pada beberapa bahasa lain. Sisa bagi <code>%</code> mengikuti tanda pembagi, sehingga selalu berlaku <code>a == (a // b) * b + a % b</code>.`,
            { code: py`print(7 // 2, 7 % 2)        # 3 1
print(-7 // 2, -7 % 2)      # -4 1   (floor, bukan -3)
print(7 // -2, 7 % -2)      # -4 -1
a, b = -7, 2
print((a // b) * b + a % b == a)   # selalu True`, lang: 'python', run: true },
            { w: 'calc', title: 'Bereksperimen dengan // dan %', desc: 'Geser a dan b, termasuk ke nilai negatif. Bandingkan dengan pemotongan ke arah nol seperti C atau Java.', inputs: [{ id: 'a', label: 'a', value: -7, min: -20, max: 20, step: 1 }, { id: 'b', label: 'b (selain 0)', value: 2, min: -9, max: 9, step: 1 }], outputs: [{ label: 'a // b (Python, floor)', expr: 'floor(a / b)', fmt: 'int', big: true }, { label: 'a % b (Python)', expr: 'a - b * floor(a / b)', fmt: 'int', big: true }, { label: 'Pemotongan ke arah nol (C/Java: a / b)', expr: 'trunc(a / b)', fmt: 'int', note: 'Berbeda dari Python bila hasil bagi negatif dan tidak habis dibagi.' }] },
            { h2: 'Operator perbandingan dan perbandingan berantai' },
            `Hasil perbandingan adalah <code>bool</code>. Python mengizinkan perbandingan berantai yang menyerupai notasi matematika.`,
            { code: py`x = 7
print(x > 3, x == 7, x != 7, x <= 6)
print(1 < x < 10)          # berantai: (1 < x) and (x < 10)
print(1 < x > 10)          # False, karena x > 10 salah`, lang: 'python', run: true },
            { h2: 'Operator logika dan evaluasi hubungan pendek' },
            `<code>and</code>, <code>or</code>, dan <code>not</code> bekerja pada nilai kebenaran. Python mengevaluasi dari kiri dan <b>berhenti segera</b> begitu hasilnya pasti: <code>A and B</code> tidak mengevaluasi B bila A salah, dan <code>A or B</code> tidak mengevaluasi B bila A benar. Ini disebut <i>short-circuit</i>.`,
            { code: py`def cek(nama, nilai):
    print("  memeriksa", nama)
    return nilai

print("A and B:", cek("A", False) and cek("B", True))
print("C or D :", cek("C", True) or cek("D", False))`, lang: 'python', run: true, caption: 'B dan D tidak pernah diperiksa. Ini dimanfaatkan untuk pemeriksaan aman, misalnya <code>if x != 0 and 10 / x > 2</code>.' },
            { callout: 'Operator <code>and</code> dan <code>or</code> mengembalikan salah satu <b>operandnya</b>, bukan selalu True atau False: <code>0 or "default"</code> menghasilkan <code>"default"</code>, dan <code>"a" and "b"</code> menghasilkan <code>"b"</code>. Berguna untuk nilai bawaan, tetapi hati-hati dengan nilai 0, "" atau [] yang dianggap salah.', kind: 'info', title: 'Hasilnya bukan selalu bool' },
            { w: 'truth', title: 'Tabel kebenaran interaktif', desc: 'Ketik ekspresi logika Python dengan variabel p, q, r. Perhatikan hukum De Morgan: not (p and q) sama dengan not p or not q.', expr: 'not (p and q)', examples: ['p and q', 'not (p and q)', 'not p or not q', 'p or (q and r)', '(p or q) and r', 'p xor q'] },
            { h2: 'Operator identitas dan keanggotaan' },
            { code: py`daftar = [1, 2, 3]
print(2 in daftar, 9 not in daftar)
a = [1, 2]; b = [1, 2]; c = a
print(a == b, a is b, a is c)   # sama isi, objek berbeda, objek sama
x = None
print(x is None)               # cara yang benar memeriksa None`, lang: 'python', run: true },
            { h2: 'Urutan pengerjaan (presedensi)' },
            `Seperti perkalian yang didahulukan atas penjumlahan, Python punya urutan baku. Dari yang paling kuat ke paling lemah:`,
            { table: { head: ['Tingkat', 'Operator', 'Catatan'], rows: [['1 (tertinggi)', '( )', 'Tanda kurung selalu menang'], ['2', '**', 'Asosiatif ke kanan: 2 ** 3 ** 2 = 2 ** 9'], ['3', '+x  -x  ~x', 'Unary: -3 ** 2 sama dengan -(3 ** 2)'], ['4', '*  /  //  %', 'Dari kiri ke kanan'], ['5', '+  -', 'Dari kiri ke kanan'], ['6', '<<  >>', 'Geser bit'], ['7', '&  ^  |', 'Bitwise AND, XOR, OR'], ['8', '== != < > <= >= is in', 'Perbandingan (bisa berantai)'], ['9', 'not', 'Negasi logika'], ['10', 'and', ''], ['11 (terendah)', 'or', 'and lebih kuat dari or']] } },
            { code: py`print(2 + 3 * 4)        # 14
print((2 + 3) * 4)      # 20
print(2 ** 3 ** 2)      # 512, bukan 64
print(-3 ** 2)          # -9, bukan 9
print(True or False and False)   # True: and dikerjakan dulu`, lang: 'python', run: true },
            { callout: 'Bila ragu, <b>pakai tanda kurung</b>. Kode yang eksplisit lebih mudah dibaca daripada kode yang mengandalkan hafalan tabel presedensi.', kind: 'good', title: 'Saran praktis' },
            { h2: 'Operator penugasan gabungan' },
            { code: py`n = 10
n += 5      # n = n + 5
n *= 2      # n = n * 2
n //= 4     # n = n // 4
n **= 2
print(n)    # 49`, lang: 'python', run: true },
            { w: 'quiz', title: 'Tebak keluarannya', questions: [{ q: '<code>print(-9 // 2)</code> menghasilkan...', options: ['-4', '-5', '-4.5'], answer: 1, why: 'Floor division membulatkan ke bawah: -4.5 menjadi -5.' }, { q: '<code>print(2 ** 3 ** 2)</code> menghasilkan...', options: ['64', '512', '36'], answer: 1, why: 'Pangkat asosiatif ke kanan: 3 ** 2 = 9, lalu 2 ** 9 = 512.' }, { q: '<code>print(0 or "kosong")</code> menghasilkan...', options: ['0', 'True', 'kosong'], answer: 2, why: 'or mengembalikan operand pertama yang benar; 0 salah, maka "kosong".' }, { q: 'Mana yang sama dengan <code>not (a and b)</code>?', options: ['not a and not b', 'not a or not b', 'a or b'], answer: 1, why: 'Hukum De Morgan: negasi dari and menjadi or dari negasi.' }] },
            { exercise: [['Berapa hasil <code>7 + 3 * 2 ** 2 // 5 % 4</code>? Kerjakan sesuai presedensi.', 'Urutan: 2 ** 2 = 4; 3 * 4 = 12; 12 // 5 = 2; 2 % 4 = 2; 7 + 2 = 9. Hasil: <b>9</b>.'], ['Tulis ekspresi yang bernilai True bila tahun y adalah tahun kabisat.', '<code>(y % 4 == 0 and y % 100 != 0) or y % 400 == 0</code>. Kabisat: habis dibagi 4 tetapi bukan 100, kecuali habis dibagi 400.'], ['Mengapa <code>if x == 1 or 2:</code> selalu dianggap benar? Bagaimana menulisnya dengan benar?', 'Dibaca sebagai <code>(x == 1) or 2</code>, dan <code>2</code> selalu benar (truthy). Yang benar: <code>x == 1 or x == 2</code>, atau <code>x in (1, 2)</code>.'], ['Hitung manual <code>-17 // 5</code> dan <code>-17 % 5</code>.', '-17 / 5 = -3,4; floor = <b>-4</b>. Sisa = -17 - (5 × -4) = <b>3</b>. Periksa: (-4) × 5 + 3 = -17.']] },
            { summary: ['/ selalu menghasilkan float, // membulatkan ke bawah, dan % mengikuti tanda pembagi.', 'Perbandingan bisa berantai (1 < x < 10).', 'and dan or berhenti lebih awal (short-circuit) dan mengembalikan operand.', 'Presedensi: ** , unary, * / // %, + -, perbandingan, not, and, or. Pakai kurung bila ragu.'] },
        ],
        faq: [['Mengapa 7 / 2 menghasilkan 3.5 dan bukan 3?', 'Sejak Python 3, operator / selalu melakukan pembagian sejati dan menghasilkan float. Gunakan // untuk pembagian bulat.'], ['Apa bedanya & dan and?', '<code>&</code> adalah operator bitwise yang bekerja pada bit bilangan bulat. <code>and</code> adalah operator logika yang bekerja pada nilai kebenaran dengan short-circuit.'], ['Kapan memakai walrus operator (:=)?', 'Operator ini menugaskan sekaligus mengembalikan nilai di dalam ekspresi, berguna dalam kondisi while atau komprehensi. Pemula sebaiknya menguasai dasar dulu.']],
        sources: [['Dokumentasi Python: Expressions (urutan presedensi operator)', 'https://docs.python.org/3/reference/expressions.html'], ['Dokumentasi Python: Built-in Types (operasi numerik dan boolean)', 'https://docs.python.org/3/library/stdtypes.html'], REF_PY, REF_THINK],
    },

    {
        slug: 'input-output-dan-format-string-python-f-string',
        title: 'Input, Output, dan Format String Python (f-string)',
        description: 'Pelajari print, input, konversi masukan, parameter sep dan end, serta f-string dengan spesifikasi format untuk lebar, presisi, pemisah ribuan, dan persentase.',
        date: D, category: C, level: 'Dasar', tags: ['input Python', 'print', 'f-string', 'format string', 'format angka'], cta: 'none',
        prereq: ['variabel dan tipe data', 'operator dasar'],
        lead: 'Program yang berguna berinteraksi dengan penggunanya: menerima data dan menampilkan hasil yang rapi. Materi ini membahas fungsi input() dan print(), cara memproses masukan yang selalu berupa teks, dan f-string untuk mengatur tampilan angka seperti uang, persen, dan tabel.',
        body: [
            { objectives: ['menampilkan keluaran dengan print dan mengatur sep dan end', 'membaca masukan dengan input dan mengonversinya ke tipe yang tepat', 'membaca beberapa nilai sekaligus dari satu baris', 'memformat keluaran dengan f-string: lebar, perataan, presisi, ribuan, dan persen'] },
            { h2: 'print: parameter yang jarang dipakai tetapi berguna' },
            { code: py`print("Halo", "dunia")                 # dipisah spasi
print("a", "b", "c", sep="-")         # a-b-c
print("tanpa baris baru", end=" ")
print("lanjut di baris sama")
print("x =", 5, "y =", 7.5)
print()                               # baris kosong`, lang: 'python', run: true },
            { h2: 'input: selalu menghasilkan teks' },
            `Fungsi <code>input()</code> menampilkan teks petunjuk (opsional), menunggu pengguna menekan Enter, lalu mengembalikan apa yang diketik sebagai <b>str</b>. Karena itu angka harus dikonversi. Penelusuran berikut memakai masukan "Dewi" dan "17"; perhatikan tipe tiap variabel pada panel memori.`,
            { trace: true, input: 'Dewi\n17\n', code: py`nama = input("Nama: ")
umur_teks = input("Umur: ")
umur = int(umur_teks)
print(f"Halo {nama}, tahun depan umur Anda {umur + 1}.")` },
            { callout: 'Jika pengguna mengetik "tujuh belas", <code>int()</code> akan menimbulkan <code>ValueError</code> dan program berhenti. Menangani masukan yang salah dibahas pada materi exception handling. Untuk sementara, anggap masukan selalu benar.', kind: 'warn', title: 'Masukan tidak selalu sesuai harapan' },
            { h3: 'Membaca beberapa nilai dalam satu baris' },
            { code: py`a, b = map(int, input().split())
print("Jumlah:", a + b)
print("Rata-rata:", (a + b) / 2)`, lang: 'python', run: true, input: '3 4\n', caption: 'Masukan "3 4": split() memecah teks menjadi ["3", "4"], map(int, ...) mengonversi tiap elemen, lalu hasilnya di-unpack ke a dan b.' },
            { h2: 'f-string: format yang mudah dibaca' },
            `Awali string dengan <code>f</code> dan taruh ekspresi di dalam kurung kurawal. Setelah titik dua, Anda dapat menambahkan <i>spesifikasi format</i>.`,
            { code: py`nama, harga, diskon = "Buku", 1234567.891, 0.256
print(f"Barang: {nama}")
print(f"Harga : {harga:,.2f}")        # pemisah ribuan, 2 desimal
print(f"Diskon: {diskon:.1%}")         # persen, 1 desimal
print(f"Kode  : {42:05d}")             # lebar 5, diisi nol
print(f"|{'kiri':<8}|{'tengah':^8}|{'kanan':>8}|")
print(f"{255:b} {255:o} {255:x} {255:X}")   # biner, oktal, heksa
print(f"{3.14159:8.3f}|")               # lebar 8, 3 desimal
print(f"{nama=}")                       # menampilkan nama dan nilainya`, lang: 'python', run: true },
            { table: { head: ['Spesifikasi', 'Arti', 'Contoh dan hasil'], rows: [[':.2f', 'Pecahan dengan 2 desimal', '{3.14159:.2f} → 3.14'], [':,', 'Pemisah ribuan', '{1234567:,} → 1,234,567'], [':>10', 'Rata kanan, lebar 10', '{"a":>10} → "         a"'], [':<10', 'Rata kiri', ''], [':^10', 'Rata tengah', ''], [':05d', 'Bilangan bulat, lebar 5, awalan nol', '{42:05d} → 00042'], [':.1%', 'Persen', '{0.256:.1%} → 25.6%'], [':b  :x  :o', 'Biner, heksa, oktal', '{255:x} → ff'], [':e', 'Notasi ilmiah', '{12345.678:.2e} → 1.23e+04']] } },
            { h2: 'Contoh: struk belanja yang rapi' },
            { code: py`barang = [("Beras 5kg", 1, 68000), ("Minyak 1L", 2, 18500), ("Telur 1kg", 1, 31000)]
total = 0
print(f"{'Barang':<12}{'Qty':>4}{'Harga':>10}{'Subtotal':>12}")
print("-" * 38)
for nama, qty, harga in barang:
    sub = qty * harga
    total += sub
    print(f"{nama:<12}{qty:>4}{harga:>10,}{sub:>12,}")
print("-" * 38)
print(f"{'TOTAL':<26}{total:>12,}")`, lang: 'python', run: true },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tipe data hasil <code>input()</code> adalah...', options: ['int', 'str', 'Tergantung yang diketik'], answer: 1, why: 'input() selalu mengembalikan str.' }, { q: '<code>print("a", "b", sep="")</code> mencetak...', options: ['a b', 'ab', 'a,b'], answer: 1, why: 'sep mengganti pemisah bawaan (spasi) dengan string kosong.' }, { q: '<code>f"{0.5:.0%}"</code> menghasilkan...', options: ['0.5', '50%', '5%'], answer: 1, why: ':.0% mengalikan 100 dan menampilkan tanpa desimal.' }] },
            { exercise: [['Tulis program yang membaca dua bilangan bulat (satu per baris), lalu mencetak hasil bagi bulat dan sisanya dengan format "17 dibagi 5 = 3 sisa 2".', '<code>a = int(input()); b = int(input())\nprint(f"{a} dibagi {b} = {a // b} sisa {a % b}")</code>'], ['Cetak nilai 1234.5 sebagai "Rp 1.234,50" (gaya Indonesia). Petunjuk: format dulu dengan koma ribuan lalu tukar tanda.', '<code>s = f"{1234.5:,.2f}"  # 1,234.50\nprint("Rp " + s.replace(",", "X").replace(".", ",").replace("X", "."))</code> menghasilkan Rp 1.234,50.'], ['Mengapa <code>input() + 1</code> menimbulkan error?', 'input() mengembalikan str, dan str tidak bisa dijumlahkan dengan int. Ubah dulu: <code>int(input()) + 1</code>.']] },
            { summary: ['print punya parameter sep dan end untuk mengatur pemisah dan akhir baris.', 'input() selalu menghasilkan str, konversi sendiri ke int atau float.', 'f-string dengan spesifikasi format menyederhanakan tampilan angka dan tabel.', 'Pemisahan masukan satu baris: map(int, input().split()).'] },
        ],
        faq: [['Apa bedanya f-string dengan format() dan %?', 'f-string (sejak Python 3.6) paling ringkas dan cepat. <code>str.format()</code> dan operator <code>%</code> masih berfungsi, tetapi f-string direkomendasikan untuk kode baru.'], ['Bagaimana menampilkan kurung kurawal literal di f-string?', 'Gandakan: <code>f"{{ dan }}"</code> mencetak <code>{ dan }</code>.'], ['Bagaimana membaca banyak baris masukan sampai selesai?', 'Gunakan perulangan <code>for baris in sys.stdin:</code> setelah <code>import sys</code>, yang sering dipakai pada soal kompetisi.']],
        sources: [['Dokumentasi Python: Input and Output (tutorial)', 'https://docs.python.org/3/tutorial/inputoutput.html'], ['Dokumentasi Python: Format Specification Mini-Language', 'https://docs.python.org/3/library/string.html#formatspec'], ['PEP 498, Literal String Interpolation', 'https://peps.python.org/pep-0498/'], REF_THINK],
    },

    {
        slug: 'percabangan-python-if-elif-else-dan-match-case',
        title: 'Percabangan Python: if, elif, else, dan match-case',
        description: 'Pelajari percabangan Python: if, elif, else, ekspresi ternary, truthiness, dan match-case, dengan contoh yang dijalankan serta jebakan umum.',
        date: D, category: C, level: 'Dasar', tags: ['if else Python', 'percabangan', 'elif', 'match case', 'kondisi'], cta: 'none',
        prereq: ['operator perbandingan dan logika'],
        lead: 'Percabangan memungkinkan program mengambil keputusan: melakukan sesuatu hanya bila suatu syarat terpenuhi. Di balik kesederhanaannya, ada banyak bug klasik: urutan syarat yang salah, batas yang meleset satu angka, atau kondisi yang tidak mencakup semua kemungkinan. Materi ini membekali Anda cara merancangnya dengan teliti.',
        body: [
            { objectives: ['menulis if, if-else, dan if-elif-else dengan indentasi yang benar', 'menyusun urutan elif yang tepat dan mencakup semua kasus', 'memakai ekspresi kondisional dan match-case', 'menjelaskan nilai yang dianggap salah (falsy) di Python', 'menguji kondisi pada nilai batas'] },
            { h2: 'Bentuk dasar' },
            { svg: 'diagram', w: 640, h: 210, label: 'Tiga bentuk percabangan', nodes: [{ id: 't1', x: 100, y: 12, shape: 'text', t: 'if', weight: 700 }, { id: 'd1', x: 100, y: 70, shape: 'diamond', w: 120, h: 60, t: 'syarat?' }, { id: 'p1', x: 100, y: 160, t: 'blok if', w: 100, h: 40 }, { id: 't2', x: 320, y: 12, shape: 'text', t: 'if-else', weight: 700 }, { id: 'd2', x: 320, y: 70, shape: 'diamond', w: 120, h: 60, t: 'syarat?' }, { id: 'p2a', x: 260, y: 160, t: 'if', w: 80, h: 40 }, { id: 'p2b', x: 380, y: 160, t: 'else', w: 80, h: 40 }, { id: 't3', x: 540, y: 12, shape: 'text', t: 'if-elif-else', weight: 700 }, { id: 'd3', x: 540, y: 70, shape: 'diamond', w: 100, h: 56, t: 'syarat 1?' }, { id: 'p3a', x: 470, y: 160, t: 'blok 1', w: 70, h: 36 }, { id: 'd4', x: 610, y: 150, shape: 'diamond', w: 100, h: 56, t: 'syarat 2?' }], edges: [{ from: 'd1', to: 'p1', label: 'ya' }, { from: 'd2', to: 'p2a', label: 'ya' }, { from: 'd2', to: 'p2b', label: 'tidak' }, { from: 'd3', to: 'p3a', label: 'ya' }, { from: 'd3', to: 'd4', label: 'tidak' }], caption: 'Hanya satu cabang yang dijalankan pada if-elif-else: cabang pertama yang syaratnya benar.' },
            { code: py`suhu = 31
if suhu >= 35:
    print("Panas sekali")
elif suhu >= 28:
    print("Hangat")
elif suhu >= 20:
    print("Sejuk")
else:
    print("Dingin")`, lang: 'python', run: true },
            { callout: 'Blok dalam Python ditentukan oleh <b>indentasi</b> dan diawali tanda titik dua. Menggeser satu baris saja bisa mengubah arti program. Biasakan 4 spasi per tingkat.', kind: 'warn', title: 'Indentasi bukan hiasan' },
            { h2: 'Telusuri: pengelompokan nilai' },
            `Perhatikan bahwa begitu satu syarat benar, sisanya dilewati.`,
            { trace: true, code: py`nilai = 77
if nilai >= 85:
    grade = "A"
elif nilai >= 75:
    grade = "B"
elif nilai >= 65:
    grade = "C"
else:
    grade = "D"
print("Grade:", grade)` },
            { h2: 'Mengapa urutan elif penting' },
            `Kesalahan klasik: menyusun syarat dari yang paling longgar. Dibandingkan di bawah, nilai 90 seharusnya "A".`,
            { code: py`def grade_salah(n):
    if n >= 65:
        return "C"      # nilai 90 berhenti di sini
    elif n >= 75:
        return "B"
    elif n >= 85:
        return "A"
    return "D"

def grade_benar(n):
    if n >= 85: return "A"
    elif n >= 75: return "B"
    elif n >= 65: return "C"
    return "D"

print(grade_salah(90), grade_benar(90))`, lang: 'python', run: true, caption: 'Urutkan dari syarat yang paling ketat ke yang paling longgar, atau buat syarat saling lepas.' },
            { h2: 'Truthiness: apa yang dianggap benar?' },
            `Kondisi tidak harus bool. Python menganggap nilai berikut <b>salah</b> (falsy): <code>False</code>, <code>None</code>, <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>()</code>, <code>{}</code>, <code>set()</code>. Selebihnya benar.`,
            { code: py`for nilai in [0, 1, "", "a", [], [0], None]:
    print(repr(nilai), "->", "benar" if nilai else "salah")`, lang: 'python', run: true },
            { h2: 'Ekspresi kondisional dan match-case' },
            { code: py`umur = 17
status = "dewasa" if umur >= 18 else "belum dewasa"
print(status)

def nama_hari(n):
    match n:
        case 1 | 7:
            return "akhir pekan"
        case 2 | 3 | 4 | 5 | 6:
            return "hari kerja"
        case _:
            return "tidak valid"

print(nama_hari(7), nama_hari(3), nama_hari(9))`, lang: 'python', run: true, caption: 'match-case tersedia sejak Python 3.10. Pola dapat berupa nilai, daftar, kamus, atau objek.' },
            { h2: 'Contoh: tahun kabisat' },
            { code: py`def kabisat(y):
    return (y % 4 == 0 and y % 100 != 0) or y % 400 == 0

for y in [1900, 2000, 2023, 2024, 2100]:
    print(y, "kabisat" if kabisat(y) else "bukan")`, lang: 'python', run: true },
            { h2: 'Uji di nilai batas' },
            { w: 'checklist', title: 'Daftar uji kondisi', items: ['Nilai tepat di batas (misalnya 85 untuk syarat >= 85).', 'Satu di bawah dan satu di atas batas (84 dan 86).', 'Nilai ekstrem (0, negatif, sangat besar).', 'Masukan yang tidak mencakup cabang mana pun apakah ada else yang aman.', 'Syarat berurutan: pastikan tidak ada yang tak pernah tercapai.', 'Perbandingan float: hindari == langsung.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Apa keluaran <code>if []: print("A") else: print("B")</code>?', options: ['A', 'B', 'Error'], answer: 1, why: 'List kosong dianggap falsy.' }, { q: 'Pada rangkaian if-elif-else, berapa cabang yang dijalankan?', options: ['Semua yang syaratnya benar', 'Paling banyak satu', 'Selalu dua'], answer: 1, why: 'Hanya cabang pertama yang syaratnya benar.' }, { q: 'Mana penulisan yang benar untuk memeriksa x antara 1 dan 10 (termasuk)?', options: ['1 <= x <= 10', 'x >= 1 and <= 10', '1 <= x and 10'], answer: 0, why: 'Perbandingan berantai valid di Python.' }] },
            { exercise: [['Tulis fungsi <code>tipe_segitiga(a, b, c)</code> yang mengembalikan "sama sisi", "sama kaki", atau "sembarang".', '<code>if a == b == c: return "sama sisi"\nelif a == b or b == c or a == c: return "sama kaki"\nreturn "sembarang"</code>. (Syarat ada-tidaknya segitiga: jumlah dua sisi harus lebih besar dari sisi ketiga, perlu pengecekan terpisah.)'], ['Apa yang salah dengan <code>if x = 5:</code>?', 'Itu penugasan, bukan perbandingan. Python menolaknya (SyntaxError). Yang benar: <code>if x == 5:</code>.'], ['Tulis kondisi untuk "diskon berlaku bila total belanja minimal 100.000 atau anggota VIP, tetapi bukan pada hari libur".', '<code>(total >= 100000 or vip) and not libur</code>. Kurung penting karena and lebih kuat dari or.']] },
            { summary: ['if-elif-else menjalankan paling banyak satu cabang: yang pertama benar.', 'Urutkan syarat dengan cermat dan uji di nilai batas.', 'Falsy: False, None, 0, "", [], (), {}, set().', 'Ekspresi kondisional untuk nilai sederhana, match-case untuk pencocokan pola (Python 3.10+).'] },
        ],
        faq: [['Apakah Python punya switch seperti Java?', 'Python 3.10 menambahkan match-case yang lebih kuat dari switch klasik karena mendukung pencocokan pola. Sebelumnya orang memakai rantai elif atau kamus.'], ['Apa bedanya if dan elif?', 'elif hanya diperiksa bila semua syarat sebelumnya salah, sedangkan serangkaian if terpisah masing-masing diperiksa independen.'], ['Bolehkah if di dalam if?', 'Boleh (nested if), tetapi bila terlalu dalam, pertimbangkan menggabungkan syarat dengan and atau memecahnya menjadi fungsi.']],
        sources: [['Dokumentasi Python: if Statements', 'https://docs.python.org/3/tutorial/controlflow.html#if-statements'], ['Dokumentasi Python: match Statements', 'https://docs.python.org/3/tutorial/controlflow.html#match-statements'], ['PEP 634, Structural Pattern Matching: Specification', 'https://peps.python.org/pep-0634/'], ['Dokumentasi Python: Truth Value Testing', 'https://docs.python.org/3/library/stdtypes.html#truth-value-testing'], REF_THINK],
    },

    {
        slug: 'perulangan-python-for-while-break-continue',
        title: 'Perulangan Python: for, while, break, continue, dan else',
        description: 'Kuasai perulangan Python: for, while, range, enumerate, zip, break, continue, else pada loop, dan pola umum, dengan kode yang dijalankan dan latihan.',
        date: D, category: C, level: 'Dasar', tags: ['for loop', 'while loop', 'range', 'break continue', 'perulangan Python'], cta: 'none',
        prereq: ['percabangan', 'operator'],
        lead: 'Perulangan adalah alasan komputer berguna: mengerjakan ribuan langkah tanpa lelah. Kuncinya memilih jenis perulangan yang tepat, memastikan perulangan pasti berhenti, dan memahami apa yang berubah pada setiap putaran. Materi ini membangun kemampuan itu lewat contoh yang bisa Anda telusuri sendiri.',
        body: [
            { objectives: ['memilih antara for dan while sesuai situasi', 'memakai range dengan awal, akhir, dan langkah', 'menulis pola akumulator, penghitung, dan pencari maksimum', 'memakai break, continue, dan else pada perulangan', 'memastikan sebuah while pasti berhenti'] },
            { h2: 'for: mengulang untuk setiap elemen' },
            `Pakai <code>for</code> bila jumlah putaran diketahui atau Anda ingin memproses setiap elemen sebuah urutan.`,
            { code: py`for huruf in "ABC":
    print(huruf)
for buah in ["apel", "jeruk"]:
    print(buah.upper())
for i in range(3):          # 0, 1, 2
    print("putaran", i)`, lang: 'python', run: true },
            { h3: 'range(awal, akhir, langkah)' },
            { code: py`print(list(range(5)))          # 0..4  (akhir tidak termasuk)
print(list(range(2, 8)))        # 2..7
print(list(range(0, 20, 5)))    # 0, 5, 10, 15
print(list(range(5, 0, -1)))    # menurun: 5..1
print(sum(range(1, 101)))       # 5050`, lang: 'python', run: true, caption: 'range menghasilkan angka secara malas (lazy), tidak menyimpan semuanya di memori.' },
            { h2: 'while: mengulang selama syarat benar' },
            `Pakai <code>while</code> bila jumlah putaran <b>tidak diketahui</b> di awal. Syarat diperiksa <i>sebelum</i> setiap putaran.`,
            { trace: true, title: 'Telusuri while: hitung mundur dan penjumlahan', code: py`n = 4
total = 0
while n > 0:
    total += n
    n -= 1
print("Jumlah:", total)` },
            { callout: 'Setiap <code>while</code> harus memiliki sesuatu di badannya yang <b>mengubah syarat</b> menuju salah. Lupa baris <code>n -= 1</code> pada contoh di atas menghasilkan perulangan tak berhingga. Hentikan program yang menggantung dengan <b>Ctrl+C</b>.', kind: 'warn', title: 'Pastikan perulangan berhenti' },
            { w: 'compare', title: 'for atau while?', tabs: [{ label: 'for', html: '<b>Gunakan bila:</b> memproses setiap elemen list, string, atau rentang angka.<br><b>Kelebihan:</b> lebih singkat, tidak perlu mengatur penghitung sendiri, tidak bisa lupa menaikkan penghitung.' }, { label: 'while', html: '<b>Gunakan bila:</b> berulang sampai suatu kejadian (masukan valid, nilai konvergen, permainan selesai).<br><b>Waspada:</b> perlu mengatur kondisi berhenti sendiri.' }] },
            { h2: 'Pola-pola perulangan yang wajib dikuasai' },
            { code: py`data = [12, 7, 25, 3, 18]

total = 0                      # akumulator (penjumlahan)
for x in data:
    total += x

genap = 0                      # penghitung
for x in data:
    if x % 2 == 0:
        genap += 1

terbesar = data[0]             # pencari maksimum
for x in data[1:]:
    if x > terbesar:
        terbesar = x

print(total, genap, terbesar, total / len(data))`, lang: 'python', run: true },
            { h2: 'enumerate dan zip' },
            { code: py`nama = ["Ani", "Budi", "Citra"]
nilai = [88, 72, 95]
for i, n in enumerate(nama, start=1):   # nomor urut sekaligus elemen
    print(i, n)
for n, v in zip(nama, nilai):           # dua urutan paralel
    print(f"{n}: {v}")`, lang: 'python', run: true },
            { h2: 'break, continue, dan else' },
            { table: { head: ['Pernyataan', 'Efek'], rows: [['break', 'Menghentikan perulangan seketika'], ['continue', 'Melompat ke putaran berikutnya'], ['else (pada perulangan)', 'Dijalankan bila perulangan selesai <b>tanpa</b> break']] } },
            { code: py`def prima(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False       # ketemu pembagi: bukan prima, berhenti
    return True

hasil = []
for n in range(2, 30):
    if prima(n):
        hasil.append(n)
print(hasil)

for n in [4, 6, 9, 7]:
    for d in range(2, n):
        if n % d == 0:
            print(n, "bukan prima, habis dibagi", d)
            break
    else:                       # tidak ada break: tidak ada pembagi
        print(n, "prima")`, lang: 'python', run: true },
            { h2: 'Contoh klasik: dugaan Collatz' },
            `Mulai dari bilangan n. Bila genap, bagi 2. Bila ganjil, kalikan 3 lalu tambah 1. Ulangi sampai n = 1. Tidak ada yang pernah menemukan angka yang gagal berhenti, tetapi belum ada pula yang berhasil membuktikannya: contoh sempurna di mana kita tidak bisa memastikan sebuah while berhenti.`,
            { code: py`n, langkah = 6, 0
while n != 1:
    print(n, end=" -> ")
    n = n // 2 if n % 2 == 0 else 3 * n + 1
    langkah += 1
print(1)
print("langkah:", langkah)`, lang: 'python', run: true },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Berapa kali badan <code>for i in range(2, 10, 3)</code> dijalankan?', options: ['2', '3', '8'], answer: 1, why: 'Nilai i: 2, 5, 8, tiga kali.' }, { q: 'Kapan blok else pada perulangan dijalankan?', options: ['Bila ada break', 'Bila perulangan selesai tanpa break', 'Selalu'], answer: 1, why: 'else pada perulangan berarti "tidak dihentikan paksa".' }, { q: 'Apa yang dilakukan continue?', options: ['Menghentikan program', 'Melewati sisa badan dan lanjut ke putaran berikutnya', 'Mengulang putaran yang sama'], answer: 1, why: 'continue melompat ke iterasi berikutnya.' }] },
            { exercise: [['Tulis program yang mencetak semua bilangan kelipatan 7 dari 1 sampai 100.', '<code>for i in range(7, 101, 7): print(i)</code> atau <code>for i in range(1, 101): if i % 7 == 0: print(i)</code>.'], ['Hitung berapa kali sebuah bilangan n dapat dibagi 2 sampai hasilnya ganjil (misalnya 40 → 3 kali).', '<code>c = 0\nwhile n % 2 == 0:\n    n //= 2\n    c += 1</code>. Untuk n = 40: 40 → 20 → 10 → 5, jadi 3 kali.'], ['Mengapa <code>while True:</code> sering dipakai bersama break?', 'Untuk perulangan yang kondisi berhentinya baru diketahui di tengah badan, misalnya membaca masukan sampai pengguna mengetik "selesai".'], ['Apa yang tercetak: <code>for i in range(3): print(i)</code> lalu <code>print(i)</code> di luar perulangan?', '0, 1, 2, lalu 2. Variabel perulangan tetap ada setelah perulangan selesai dengan nilai terakhirnya.']] },
            { summary: ['for untuk elemen atau jumlah putaran yang diketahui, while untuk berulang sampai suatu kejadian.', 'range(awal, akhir, langkah) tidak menyertakan nilai akhir.', 'Pola dasar: akumulator, penghitung, dan pencari maksimum.', 'break menghentikan, continue melewati, else dijalankan bila tidak ada break.', 'Pastikan setiap while mengubah kondisinya menuju salah.'] },
        ],
        faq: [['Apakah Python punya do-while?', 'Tidak. Biasanya ditiru dengan <code>while True:</code> yang berisi break di akhir blok.'], ['Bolehkah mengubah list saat sedang di-for?', 'Tidak disarankan karena indeks bergeser dan elemen bisa terlewat. Bangun list baru atau iterasi pada salinan.'], ['Mana yang lebih cepat, for atau while?', 'Untuk jumlah putaran yang diketahui, for dengan range biasanya sedikit lebih cepat dan jauh lebih mudah dibaca.']],
        sources: [['Dokumentasi Python: for Statements dan range()', 'https://docs.python.org/3/tutorial/controlflow.html#for-statements'], ['Dokumentasi Python: break, continue, dan else pada loop', 'https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops'], REF_MIT, REF_THINK],
    },

    {
        slug: 'nested-loop-dan-pola-bintang-python',
        title: 'Nested Loop dan Pola Bintang di Python',
        description: 'Pelajari perulangan bersarang di Python lewat pola bintang, tabel perkalian, dan matriks, dengan penelusuran urutan eksekusi i dan j serta kompleksitasnya.',
        date: D, category: C, level: 'Dasar', tags: ['nested loop', 'pola bintang', 'perulangan bersarang', 'tabel perkalian', 'O(n^2)'], cta: 'none',
        prereq: ['perulangan for dan while'],
        lead: 'Soal pola bintang hampir pasti muncul di ujian praktikum algoritma. Bukan karena polanya penting, tetapi karena ia melatih satu keterampilan inti: memahami bagaimana perulangan di dalam perulangan bekerja dan bagaimana setiap baris, kolom, dan spasi dihitung. Kuasai pola berpikirnya, dan semua variasi akan mengikuti.',
        body: [
            { objectives: ['menjelaskan urutan eksekusi perulangan bersarang', 'membangun pola dengan menghitung jumlah spasi dan simbol per baris', 'membuat tabel perkalian dan pola angka', 'menghitung jumlah eksekusi badan perulangan dan mengaitkannya dengan O(n²)'] },
            { h2: 'Cara kerja: perulangan dalam selesai penuh dulu' },
            `Pada <code>for i ...: for j ...:</code>, untuk <b>setiap nilai i</b> perulangan dalam <code>j</code> berjalan dari awal sampai habis. Coba animasi berikut sampai urutan kunjungan sel (i, j) terasa natural.`,
            { w: 'loopgrid', title: 'Urutan kunjungan (i, j)', desc: 'Sel kuning adalah eksekusi saat ini, biru muda sudah dikunjungi. Angka kecil adalah urutan ke berapa.', rows: 4, cols: 5 },
            { trace: true, title: 'Telusuri perulangan bersarang kecil', code: py`for i in range(2):
    for j in range(3):
        print(i, j)
print("selesai")` },
            { h2: 'Pola 1: segitiga siku-siku' },
            { code: py`n = 5
for i in range(1, n + 1):
    print("*" * i)`, lang: 'python', run: true, caption: 'Baris ke-i berisi i bintang. Perkalian string menggantikan perulangan dalam.' },
            `Versi dengan perulangan bersarang eksplisit (yang biasanya diminta dosen):`,
            { code: py`n = 5
for i in range(1, n + 1):          # baris
    for j in range(i):              # kolom: i kali
        print("*", end="")
    print()                         # pindah baris`, lang: 'python', run: true },
            { h2: 'Pola 2: segitiga terbalik dan rata kanan' },
            { code: py`n = 5
for i in range(n, 0, -1):
    print("*" * i)
print()
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * i)`, lang: 'python', run: true },
            { h2: 'Pola 3: piramida' },
            `Rumus per baris i (mulai 1) dari n baris: spasi = <code>n - i</code>, bintang = <code>2i - 1</code>.`,
            { table: { head: ['Baris i', 'Spasi (n - i)', 'Bintang (2i - 1)'], rows: [['1', '4', '1'], ['2', '3', '3'], ['3', '2', '5'], ['4', '1', '7'], ['5', '0', '9']] } },
            { code: py`n = 5
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))`, lang: 'python', run: true },
            { h2: 'Pola 4: belah ketupat' },
            { code: py`n = 4
for i in range(1, n + 1):                       # bagian atas
    print(" " * (n - i) + "*" * (2 * i - 1))
for i in range(n - 1, 0, -1):                   # bagian bawah
    print(" " * (n - i) + "*" * (2 * i - 1))`, lang: 'python', run: true },
            { h2: 'Pola angka dan tabel perkalian' },
            { code: py`for i in range(1, 6):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
print()
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i * j:3d}", end="")
    print()`, lang: 'python', run: true },
            { h2: 'Berapa langkah? Hubungannya dengan O(n²)' },
            `Pada dua perulangan bersarang yang masing-masing n kali, badan terdalam dijalankan n × n kali. Pada pola segitiga, jumlahnya 1 + 2 + ... + n = n(n+1)/2, yang tetap tumbuh seperti n². Itu sebabnya algoritma dengan dua perulangan bersarang disebut berkompleksitas kuadrat.`,
            { code: py`def hitung(n):
    c = 0
    for i in range(1, n + 1):
        for j in range(i):
            c += 1
    return c

for n in [5, 10, 100]:
    print(n, hitung(n), n * (n + 1) // 2)`, lang: 'python', run: true },
            { callout: 'Bila n digandakan, jumlah langkah menjadi sekitar <b>empat kali</b> lipat. Itu alasan nested loop pada data besar harus dipertimbangkan matang-matang.', kind: 'info', title: 'Dampak praktis' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Pada <code>for i in range(3): for j in range(4): ...</code>, berapa kali badan terdalam dijalankan?', options: ['7', '12', '3'], answer: 1, why: '3 × 4 = 12.' }, { q: 'Pada piramida n baris, berapa bintang di baris ke-i?', options: ['i', '2i - 1', 'n - i'], answer: 1, why: 'Baris 1: 1, baris 2: 3, baris 3: 5, dan seterusnya.' }, { q: 'Mengapa print() tanpa argumen ditaruh setelah perulangan dalam?', options: ['Agar pindah baris', 'Agar program berhenti', 'Agar j bertambah'], answer: 0, why: 'end="" mencegah baris baru, sehingga perlu satu print() untuk pindah baris setelah satu baris selesai.' }] },
            { exercise: [['Buat pola berikut untuk n = 4: baris ke-i berisi bilangan i yang diulang i kali (1 / 22 / 333 / 4444).', '<code>for i in range(1, 5):\n    print(str(i) * i)</code>'], ['Buat pola papan catur 4×4 dengan "#" dan ".", bergantian.', '<code>for i in range(4):\n    print("".join("#" if (i + j) % 2 == 0 else "." for j in range(4)))</code>'], ['Buat segitiga Pascal 5 baris. Petunjuk: tiap angka adalah jumlah dua angka di atasnya.', 'Gunakan list: <code>baris = [1]\nfor _ in range(5):\n    print(baris)\n    baris = [1] + [baris[k] + baris[k+1] for k in range(len(baris) - 1)] + [1]</code>.'], ['Berapa kali "*" dicetak oleh belah ketupat n = 4 di atas?', 'Baris atas: 1 + 3 + 5 + 7 = 16; bagian bawah: 5 + 3 + 1 = 9 (i = 3, 2, 1). Total 25.']] },
            { summary: ['Perulangan dalam selesai penuh untuk setiap nilai perulangan luar.', 'Pola: tentukan jumlah spasi dan simbol per baris sebagai rumus dari i dan n.', 'print() kosong memindahkan baris setelah satu baris pola selesai.', 'Dua perulangan bersarang menghasilkan n² langkah, tumbuh seperti kuadrat.'] },
        ],
        faq: [['Bolehkah memakai perkalian string alih-alih perulangan dalam?', 'Dalam praktik ya, dan itu lebih ringkas. Dalam ujian, ikuti instruksi: sering diminta memakai perulangan bersarang eksplisit.'], ['Bagaimana cara berlatih pola?', 'Gambar polanya, isi tabel (baris, spasi, simbol), cari rumusnya, baru tulis kode. Jangan menebak langsung dari kode.'], ['Apa itu nested loop tiga tingkat?', 'Perulangan di dalam perulangan di dalam perulangan, dengan n³ langkah, misalnya pada perkalian matriks naif.']],
        sources: [REF_THINK, REF_MIT, ['Dokumentasi Python: Built-in Types, Sequence Types (perkalian string)', 'https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range'], ['Anany Levitin, Introduction to the Design and Analysis of Algorithms, bab analisis perulangan bersarang', '']],
    },

    {
        slug: 'string-python-indexing-slicing-dan-metode',
        title: 'String Python: Indexing, Slicing, dan Metode Penting',
        description: 'Pelajari string Python: indexing, slicing, metode penting, f-string, immutability, dan encoding, dengan contoh kode yang dijalankan dan latihan.',
        date: D, category: C, level: 'Dasar', tags: ['string Python', 'slicing', 'indexing', 'metode string', 'palindrom'], cta: 'none',
        prereq: ['variabel dan tipe data', 'perulangan for'],
        lead: 'Hampir semua data dalam kehidupan nyata berbentuk teks: nama, alamat, email, isi pesan. Menguasai string berarti menguasai cara memotong, mencari, mengganti, dan memeriksa teks. Fitur slicing Python membuat banyak pekerjaan yang butuh puluhan baris di bahasa lain cukup satu ekspresi.',
        body: [
            { objectives: ['mengakses karakter dengan indeks positif dan negatif', 'memakai slicing s[awal:akhir:langkah] dan membaca hasilnya dengan benar', 'menjelaskan mengapa string immutable', 'memakai metode string yang paling sering dibutuhkan', 'menulis algoritma sederhana berbasis string, seperti palindrom'] },
            { h2: 'String adalah urutan karakter berindeks' },
            { svg: 'diagram', w: 520, h: 150, label: 'Indeks positif dan negatif pada string PYTHON', nodes: ['P', 'Y', 'T', 'H', 'O', 'N'].flatMap((c, i) => [{ id: 'c' + i, x: 50 + i * 80, y: 70, shape: 'rect', w: 56, h: 48, t: c, fill: '#e8f1ff' }, { id: 'p' + i, x: 50 + i * 80, y: 122, shape: 'text', t: String(i), color: '#1e5ab2', weight: 700 }, { id: 'n' + i, x: 50 + i * 80, y: 22, shape: 'text', t: String(i - 6), color: '#6b7280' }]), edges: [], caption: 'Indeks positif dari kiri (mulai 0), indeks negatif dari kanan (mulai -1). s[0] dan s[-6] sama-sama "P".' },
            { code: py`s = "PYTHON"
print(s[0], s[5], s[-1], s[-6])
print(len(s))
for ch in s:
    print(ch, end=" ")`, lang: 'python', run: true },
            { h2: 'Slicing: mengambil bagian string' },
            `Bentuknya <code>s[awal:akhir:langkah]</code>. Indeks <b>awal termasuk</b>, <b>akhir tidak termasuk</b>. Bagian yang dikosongkan memakai nilai bawaan. Slicing tidak pernah menimbulkan IndexError meski indeksnya melebihi panjang.`,
            { w: 'slice', title: 'Bermain dengan slicing', desc: 'Ubah awal, akhir, dan langkah (kosongkan untuk bawaan). Huruf terpilih diberi warna. Coba langkah -1 untuk membalik.', text: 'PYTHON', start: '1', stop: '4', step: '' },
            { code: py`s = "PYTHON"
print(s[1:4])      # YTH
print(s[:3])       # PYT   (dari awal)
print(s[3:])       # HON   (sampai akhir)
print(s[::2])      # PTO   (tiap 2 huruf)
print(s[::-1])     # NOHTYP (dibalik)
print(s[-3:])      # HON   (3 terakhir)
print(s[2:100])    # THON  (melebihi panjang tidak error)`, lang: 'python', run: true },
            { h2: 'String bersifat immutable' },
            { code: py`s = "halo"
try:
    s[0] = "H"
except TypeError as e:
    print("Error:", e)
s = "H" + s[1:]        # membuat string BARU, lalu s menunjuk ke sana
print(s)`, lang: 'python', run: true },
            { callout: 'Penggabungan berulang dengan <code>+=</code> di dalam perulangan panjang membuat banyak string baru dan lambat. Kumpulkan potongan dalam list lalu gabungkan sekali dengan <code>"".join(potongan)</code>.', kind: 'good', title: 'Tip performa' },
            { h2: 'Metode string yang paling sering dipakai' },
            { table: { head: ['Metode', 'Fungsi', 'Contoh'], rows: [['upper() / lower()', 'Huruf besar / kecil', '"Halo".upper() → "HALO"'], ['strip()', 'Buang spasi di kedua ujung', '"  a ".strip() → "a"'], ['split(sep)', 'Pecah menjadi list', '"a,b,c".split(",") → ["a","b","c"]'], ['join(iter)', 'Gabung list menjadi string', '"-".join(["a","b"]) → "a-b"'], ['replace(a, b)', 'Ganti semua kemunculan', '"aab".replace("a","x") → "xxb"'], ['find(x) / index(x)', 'Posisi pertama (find memberi -1 bila tak ada)', '"halo".find("l") → 2'], ['count(x)', 'Hitung kemunculan', '"banana".count("a") → 3'], ['startswith / endswith', 'Periksa awalan / akhiran', '"a.py".endswith(".py") → True'], ['isdigit() / isalpha()', 'Periksa jenis karakter', '"123".isdigit() → True']] } },
            { code: py`kalimat = "  Belajar Python itu Menyenangkan  "
bersih = kalimat.strip()
print(bersih)
kata = bersih.split()
print(kata, len(kata))
print("-".join(kata).lower())
print(bersih.replace("Python", "Algoritma"))
print(bersih.count("a"), bersih.find("Python"), bersih.startswith("Belajar"))`, lang: 'python', run: true },
            { h2: 'Karakter dan kode Unicode' },
            { code: py`print(ord("A"), ord("a"), chr(66), chr(0x1F600))
huruf = "geser"
print("".join(chr((ord(c) - 97 + 3) % 26 + 97) for c in huruf))  # sandi Caesar, geser 3
print("apel" < "jeruk", "Z" < "a")   # urutan kamus berdasarkan kode Unicode`, lang: 'python', run: true },
            { h2: 'Algoritma: memeriksa palindrom' },
            `Palindrom dibaca sama dari depan maupun belakang, misalnya "katak". Untuk kalimat, abaikan spasi dan huruf besar.`,
            { code: py`def palindrom(teks):
    bersih = "".join(c.lower() for c in teks if c.isalnum())
    return bersih == bersih[::-1]

for t in ["katak", "Kasur ini rusak", "Python"]:
    print(repr(t), palindrom(t))`, lang: 'python', run: true },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Apa hasil <code>"PYTHON"[1:4]</code>?', options: ['PYT', 'YTH', 'YTHO'], answer: 1, why: 'Indeks 1, 2, 3 (4 tidak termasuk).' }, { q: 'Apa hasil <code>"abcdef"[::-2]</code>?', options: ['fdb', 'ace', 'fed'], answer: 0, why: 'Langkah -2 dari belakang: f, d, b.' }, { q: 'Mengapa <code>s[0] = "H"</code> menimbulkan error?', options: ['Indeks 0 tidak valid', 'String immutable', 'H bukan karakter'], answer: 1, why: 'String tidak dapat diubah di tempat.' }] },
            { exercise: [['Tulis ekspresi untuk mengambil 3 huruf terakhir dan 3 huruf pertama dari s, lalu menggabungkannya.', '<code>s[-3:] + s[:3]</code>'], ['Hitung jumlah huruf vokal dalam sebuah kalimat.', '<code>sum(1 for c in kalimat.lower() if c in "aiueo")</code>'], ['Ubah "nama_lengkap_pengguna" menjadi "NamaLengkapPengguna".', '<code>"".join(k.capitalize() for k in "nama_lengkap_pengguna".split("_"))</code>'], ['Cek apakah dua kata anagram (huruf sama, urutan beda), misalnya "listen" dan "silent".', '<code>sorted(a) == sorted(b)</code>. Mengurutkan huruf keduanya lalu membandingkan.']] },
            { summary: ['Indeks mulai 0 dari kiri, atau -1 dari kanan.', 's[awal:akhir:langkah]: awal termasuk, akhir tidak termasuk, langkah negatif membalik.', 'String immutable; operasi yang "mengubah" membuat string baru.', 'Metode utama: strip, split, join, replace, find, count, upper, lower.', 'Palindrom: bersihkan teks lalu bandingkan dengan kebalikannya (s[::-1]).'] },
        ],
        faq: [['Apa bedanya find() dan index()?', 'Keduanya mencari posisi. Bila tidak ketemu, find() mengembalikan -1, sedangkan index() menimbulkan ValueError.'], ['Bagaimana menangani teks Unicode seperti emoji?', 'String Python menyimpan karakter Unicode, jadi len("😀") adalah 1. Untuk berkas, tentukan encoding="utf-8" saat membuka.'], ['Apa bedanya single quote dan double quote?', 'Tidak ada. Pilih salah satu secara konsisten; pakai yang satunya bila teks mengandung tanda kutip yang lain.']],
        sources: [['Dokumentasi Python: Text Sequence Type (str)', 'https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str'], ['Dokumentasi Python: Strings (tutorial)', 'https://docs.python.org/3/tutorial/introduction.html#strings'], ['Dokumentasi Python: Unicode HOWTO', 'https://docs.python.org/3/howto/unicode.html'], REF_THINK],
    },
];
