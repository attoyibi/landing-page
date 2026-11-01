const D = '2026-10-30';
const C = 'Flutter & Mobile';
const js = String.raw;
// Dart memakai $ untuk interpolasi; di template JavaScript tulis \$ (atau \${...}) dan tag ini mengembalikannya menjadi $
const dart = (strings) => strings.raw.map(r => r.split('\\$').join('$')).join('');

const REF_FLUTTER = ['Flutter Documentation', 'https://docs.flutter.dev/'];
const REF_DART = ['Dart Language Tour', 'https://dart.dev/language'];
const NOTE_FLUTTER = { callout: 'Contoh Flutter ditampilkan sebagai kode yang mengikuti dokumentasi Flutter 3.x (Material 3, Dart 3). Bagian logika Dart murni dijalankan sungguhan dengan Dart SDK agar keluarannya dapat dibuktikan; kode yang butuh Flutter (widget) tidak dijalankan di halaman ini.', kind: 'info', title: 'Tentang contoh kode' };

export default [
    {
        slug: 'belajar-dart-untuk-flutter-tipe-null-safety-class-dan-koleksi',
        title: 'Belajar Dart untuk Flutter: Null Safety, Class, Koleksi',
        description: 'Dasar bahasa Dart untuk pengembang Flutter: tipe data, null safety, fungsi, class dan konstruktor, koleksi, serta fitur modern, dengan contoh yang dijalankan di Dart SDK.',
        date: D, category: C, level: 'Pemula', tags: ['Dart', 'null safety', 'Flutter', 'belajar Dart', 'class Dart'], cta: 'jasa',
        prereq: ['dasar pemrograman (variabel, fungsi, perulangan)'],
        lead: 'Flutter memakai bahasa Dart, dan pengalaman menulis aplikasi Flutter terasa jauh lebih ringan setelah Dart dikuasai. Kabar baiknya, bila Anda pernah memakai Java, JavaScript, atau Kotlin, Dart akan terasa akrab. Fitur yang paling penting dipahami sejak awal adalah null safety, yang menghilangkan satu kelas bug terbesar: akses ke nilai kosong.',
        body: [
            { objectives: ['memakai tipe dasar, var, final, dan const dengan benar', 'memahami null safety: tipe nullable, ?, ??, ?., dan !', 'menulis fungsi dengan parameter bernama dan opsional', 'membuat class dengan konstruktor, getter, dan konstruktor bernama', 'memakai List, Map, Set, serta metode map/where/fold'] },
            NOTE_FLUTTER,
            { h2: 'Variabel dan tipe' },
            { code: dart`void main() {
  var nama = 'Ani';              // tipe String disimpulkan
  int umur = 20;
  double ipk = 3.75;
  bool aktif = true;

  final dibuat = DateTime(2026, 10, 30);   // final: diisi sekali saat berjalan
  const pi2 = 3.14159 * 2;                 // const: konstanta saat kompilasi

  print('$nama ($umur) IPK $ipk aktif=$aktif');       // interpolasi string dengan $
  print('Tahun depan: \${umur + 1}');                  // ekspresi memakai \${...}
  print(dibuat.year);
  print(pi2.toStringAsFixed(2));
  print(nama.toUpperCase().padLeft(6, '*'));

  // umur = 'dua puluh';   // galat kompilasi: String tidak bisa ke int
}`, lang: 'dart', run: true, caption: 'Dart bertipe statis: kesalahan tipe ditangkap sebelum aplikasi berjalan. var menyimpulkan tipe dari nilai awal; tipenya tetap setelah itu.' },
            { h2: 'Null safety: nilai kosong harus dinyatakan' },
            `Pada Dart modern, tipe biasa (<code>String</code>) <b>tidak boleh null</b>. Bila nilai boleh kosong, tipenya diberi tanda tanya (<code>String?</code>) dan kompiler memaksa Anda menangani kasus null sebelum memakainya.`,
            { code: dart`String? cariNama(int id) => id == 1 ? 'Ani' : null;      // mungkin tidak ditemukan

void main() {
  String? a = cariNama(1);
  String? b = cariNama(9);

  // print(b.length);           // galat kompilasi: b bisa null
  print(b?.length);             // ?.  : bila null, hasilnya null (tidak crash)
  print(b ?? 'tidak ada');      // ??  : nilai cadangan
  print(a!.length);             // !   : "saya yakin tidak null" (crash bila ternyata null)

  if (b != null) {
    print(b.length);            // di dalam if, Dart tahu b pasti tidak null (promosi tipe)
  } else {
    print('b kosong');
  }

  int? skor;
  skor ??= 0;                   // ??= : isi hanya bila masih null
  print(skor);
}`, lang: 'dart', run: true, caption: 'Hindari operator ! kecuali Anda benar-benar yakin; lebih baik periksa null dengan if, ?., atau ??. Itulah inti manfaat null safety.' },
            { h2: 'Fungsi: parameter bernama' },
            `Flutter memakai parameter bernama di mana-mana (<code>Text("Halo", style: ...)</code>). Di Dart, parameter bernama ditulis di dalam kurung kurawal dan dapat ditandai <code>required</code>.`,
            { code: dart`// posisi biasa
int tambah(int a, int b) => a + b;

// bernama, dengan nilai bawaan dan required
String sapa({required String nama, String sapaan = 'Halo', bool seru = false}) {
  return '$sapaan, $nama' + (seru ? '!' : '.');
}

// posisi opsional dengan []
String gabung(String a, [String? b]) => b == null ? a : '$a $b';

void main() {
  print(tambah(2, 3));
  print(sapa(nama: 'Ani'));
  print(sapa(nama: 'Budi', sapaan: 'Selamat pagi', seru: true));
  print(gabung('Muhammad'));
  print(gabung('Muhammad', 'Muchson'));

  // fungsi adalah nilai: dapat dikirim sebagai argumen
  final angka = [1, 2, 3, 4, 5];
  print(angka.map((x) => x * x).toList());
}`, lang: 'dart', run: true },
            { h2: 'Class dan konstruktor' },
            { code: dart`class Produk {
  final String nama;
  final int harga;
  int stok;

  // konstruktor ringkas: this.nama langsung mengisi field
  Produk({required this.nama, required this.harga, this.stok = 0});

  // konstruktor bernama
  Produk.dariMap(Map<String, dynamic> m)
      : nama = m['nama'] as String,
        harga = m['harga'] as int,
        stok = (m['stok'] ?? 0) as int;

  // getter: dihitung saat dibaca
  bool get tersedia => stok > 0;

  // method
  int total(int jumlah) => harga * jumlah;

  @override
  String toString() => 'Produk(\$nama, Rp\$harga, stok \$stok)';
}

void main() {
  final kopi = Produk(nama: 'Kopi Gayo', harga: 65000, stok: 10);
  final teh = Produk.dariMap({'nama': 'Teh', 'harga': 40000});
  print(kopi);
  print(teh);
  print('kopi tersedia: \${kopi.tersedia}, teh tersedia: \${teh.tersedia}');
  print('3 kopi = Rp\${kopi.total(3)}');
  kopi.stok -= 3;
  print(kopi.stok);
}`, lang: 'dart', run: true, caption: 'Dalam Flutter, semua widget adalah class; konstruktor dengan parameter bernama dan required adalah pola yang akan Anda tulis setiap hari.' },
            { h2: 'Koleksi' },
            { code: dart`void main() {
  final tugas = <String>['tulis laporan', 'kirim surel', 'rapat'];
  tugas.add('belajar Flutter');
  print(tugas.length);
  print(tugas.where((t) => t.contains('r')).toList());
  print(tugas.map((t) => t.toUpperCase()).take(2).toList());

  final nilai = <String, int>{'Ani': 90, 'Budi': 72, 'Citra': 85};
  nilai['Dodi'] = 60;
  nilai.forEach((k, v) => print('\$k -> \$v'));

  final lulus = nilai.entries.where((e) => e.value >= 75).map((e) => e.key).toList();
  print('lulus: \$lulus');

  final total = nilai.values.fold<int>(0, (jumlah, n) => jumlah + n);
  print('rata-rata: \${(total / nilai.length).toStringAsFixed(1)}');

  final unik = {1, 2, 2, 3, 3, 3};
  print(unik);

  // collection-if dan collection-for: dipakai sangat sering untuk membangun daftar widget
  final admin = true;
  final menu = ['Beranda', if (admin) 'Pengaturan', for (var i = 1; i <= 2; i++) 'Item \$i'];
  print(menu);

  // spread
  print([...tugas.take(1), ...menu.take(2)]);
}`, lang: 'dart', run: true, caption: 'Pola collection-if dan collection-for adalah cara Flutter membangun daftar widget secara kondisional di dalam children: [...].' },
            { h2: 'Fitur modern Dart 3 yang perlu diketahui' },
            { table: { head: ['Fitur', 'Contoh', 'Kegunaan'], rows: [['Records', '(String, int) pasangan = ("Ani", 20);', 'Mengembalikan beberapa nilai tanpa membuat class'], ['Pattern matching', 'switch (x) { case int n when n > 0: ... }', 'Mendekonstruksi dan mencocokkan bentuk data'], ['Sealed class', 'sealed class Hasil {}', 'Hierarki tertutup; switch dicek kelengkapannya'], ['Enhanced enum', 'enum Status { baru("Baru"); final String label; ... }', 'Enum dengan data dan method'], ['Extension methods', 'extension on String { bool get kosong => trim().isEmpty; }', 'Menambah method ke tipe yang sudah ada']] } },
            { callout: 'Contoh di halaman ini sengaja memakai fitur yang bekerja di Dart 2.12 ke atas agar dapat dijalankan di mana pun. Proyek Flutter terbaru memakai Dart 3, yang menambahkan records, pattern matching, dan sealed class di atas semua yang dibahas di sini.', kind: 'info', title: 'Versi' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tipe String? berarti...', options: ['String yang boleh null', 'String wajib terisi', 'Daftar String'], answer: 0, why: 'Tanda ? menandai nullable.' }, { q: 'Operator ?? berfungsi...', options: ['Memberi nilai cadangan bila null', 'Memaksa non-null', 'Membandingkan tipe'], answer: 0, why: 'a ?? b: b dipakai bila a null.' }, { q: 'Parameter bernama ditulis...', options: ['Di dalam { }', 'Di dalam [ ]', 'Di luar kurung'], answer: 0, why: 'Dan dapat required atau memiliki nilai bawaan.' }] },
            { exercise: [['Tulis class Mahasiswa dengan nim, nama, ipk (default 0.0) dan getter lulus (ipk >= 2.0).', '<code>class Mahasiswa { final String nim; final String nama; double ipk; Mahasiswa({required this.nim, required this.nama, this.ipk = 0.0}); bool get lulus => ipk >= 2.0; }</code>'], ['Mengapa operator ! berisiko?', 'Bila nilainya ternyata null, aplikasi melempar galat saat berjalan; lebih baik periksa dengan if atau ?? agar kasus null ditangani.'], ['Ubah daftar harga [10000, 25000, 40000] menjadi daftar teks "Rp10000", dst.', '<code>harga.map((h) => "Rp$h").toList()</code>'], ['Apa beda final dan const?', 'final diisi sekali saat program berjalan; const adalah konstanta yang nilainya sudah diketahui saat kompilasi.']] },
            { summary: ['Dart bertipe statis dengan null safety: String vs String?; tangani null dengan ?., ??, ??=, dan if.', 'Parameter bernama dan required adalah pola utama di Flutter.', 'Class dengan konstruktor ringkas, konstruktor bernama, dan getter.', 'List, Map, Set dengan map/where/fold; collection-if dan collection-for untuk membangun UI.'] },
        ],
        faq: [['Apakah harus menguasai Dart dulu sebelum Flutter?', 'Dasar saja sudah cukup; Anda akan memperdalam Dart sambil membangun UI. Materi ini cukup untuk mulai.'], ['Apa bedanya Dart dan JavaScript?', 'Dart bertipe statis dengan null safety dan dikompilasi (AOT) menjadi kode native untuk rilis; JavaScript bertipe dinamis.'], ['Di mana mencoba Dart tanpa memasang apa pun?', 'DartPad (dartpad.dev) menjalankan Dart dan Flutter di browser.']],
        sources: [REF_DART, ['Dart: Null safety', 'https://dart.dev/null-safety'], ['DartPad', 'https://dartpad.dev/'], REF_FLUTTER],
    },

    {
        slug: 'widget-flutter-layout-row-column-expanded-dan-stack',
        title: 'Widget Flutter: Layout Row, Column, Expanded, dan Stack',
        description: 'Susun tampilan Flutter: pohon widget, Row, Column, Expanded, Stack, ListView, dan aturan constraints yang menjelaskan layout serta galat overflow.',
        date: D, category: C, level: 'Pemula', tags: ['Flutter', 'widget', 'layout', 'Row Column', 'Expanded'], cta: 'jasa',
        prereq: ['dasar Dart'],
        lead: 'Di Flutter, semuanya adalah widget: teks, tombol, jarak, bahkan penataan posisi. Antarmuka dibangun dengan menyusun widget kecil menjadi pohon besar. Awalnya terasa banyak kurung, tetapi begitu Anda memahami aturan tunggal yang mengatur ukuran dan posisi, yaitu constraints turun, ukuran naik, layout menjadi dapat diprediksi.',
        body: [
            { objectives: ['memahami pohon widget dan komposisi', 'menyusun layout dengan Row, Column, Expanded, Flexible, Stack, dan Padding', 'menjelaskan aturan constraints dan penyebab galat overflow', 'memakai ListView untuk daftar yang dapat digulir', 'merapikan kode dengan memecah widget'] },
            NOTE_FLUTTER,
            { h2: 'Widget dan pohon widget' },
            { code: dart`import 'package:flutter/material.dart';

void main() => runApp(const AplikasiSaya());

class AplikasiSaya extends StatelessWidget {
  const AplikasiSaya({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Toko',
      theme: ThemeData(colorSchemeSeed: Colors.teal, useMaterial3: true),
      home: const Beranda(),
    );
  }
}

class Beranda extends StatelessWidget {
  const Beranda({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Toko Saya')),
      body: const Center(child: Text('Halo, Flutter!')),
    );
  }
}`, lang: 'dart', caption: 'Pohon: MaterialApp → Scaffold → (AppBar, Center → Text). Setiap widget menerima widget anak lewat child atau children. Gunakan const di mana mungkin: widget konstan tidak dibangun ulang sehingga lebih hemat.' },
            { svg: 'diagram', w: 620, h: 230, label: 'Pohon widget', nodes: [{ id: 'a', x: 310, y: 30, shape: 'rect', w: 150, h: 36, t: 'MaterialApp' }, { id: 'b', x: 310, y: 95, shape: 'rect', w: 150, h: 36, t: 'Scaffold' }, { id: 'c', x: 170, y: 170, shape: 'rect', w: 130, h: 36, t: 'AppBar' }, { id: 'd', x: 450, y: 170, shape: 'rect', w: 130, h: 36, t: 'Center' }, { id: 'e', x: 450, y: 220, shape: 'rect', w: 130, h: 30, t: 'Text' }], edges: [{ from: 'a', to: 'b', head: 'none' }, { from: 'b', to: 'c', head: 'none' }, { from: 'b', to: 'd', head: 'none' }, { from: 'd', to: 'e', head: 'none' }] },
            { h2: 'Aturan utama layout: constraints' },
            { callout: '<b>Constraints turun, ukuran naik, induk menentukan posisi.</b> (1) Induk memberi anak batasan (lebar dan tinggi minimum/maksimum). (2) Anak memilih ukurannya sendiri dalam batas itu. (3) Induk menempatkan anak. Hampir semua galat layout Flutter bisa dijelaskan dengan aturan ini.', kind: 'info', title: 'Satu aturan' },
            { code: js`// Peragaan aturan constraints dalam JavaScript: induk memberi batas, anak memilih ukuran, induk menempatkan
function ukurText(batas, teks) {
    const lebarAlami = teks.length * 9;                       // lebar yang diinginkan teks
    return { lebar: Math.min(Math.max(lebarAlami, batas.minL), batas.maxL), tinggi: 20 };
}
function Row(batas, anak) {
    let x = 0; const posisi = [];
    for (const a of anak) {
        const ukur = ukurText({ minL: 0, maxL: Infinity }, a);    // Row memberi lebar TAK TERBATAS pada anak non-flex
        posisi.push({ teks: a, x, lebar: ukur.lebar }); x += ukur.lebar;
    }
    return { totalLebar: x, tersedia: batas.maxL, overflow: Math.max(0, x - batas.maxL), posisi };
}
const hasil = Row({ maxL: 200 }, ['Nama pengguna panjang', 'Tombol', 'Ikon']);
console.log('lebar tersedia:', hasil.tersedia, '| lebar total anak:', hasil.totalLebar, '| overflow:', hasil.overflow, 'px  <- "RenderFlex overflowed"');
console.log('solusi: bungkus anak yang boleh menyusut dengan Expanded/Flexible agar menerima batas, bukan lebar tak terbatas.');`, lang: 'javascript', run: true, caption: 'Row menanyakan ukuran tiap anak non-flex dengan lebar tak terbatas; bila jumlahnya melebihi ruang, muncul peringatan overflow bergaris kuning-hitam di layar.' },
            { h2: 'Row dan Column' },
            { code: dart`Column(
  mainAxisAlignment: MainAxisAlignment.start,        // sumbu utama (vertikal pada Column)
  crossAxisAlignment: CrossAxisAlignment.start,      // sumbu silang (horizontal)
  children: [
    const Text('Kopi Gayo', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
    const SizedBox(height: 4),                       // jarak
    const Text('Biji pilihan, sangrai medium'),
    const SizedBox(height: 12),
    Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,   // sebar ke dua ujung
      children: [
        const Text('Rp65.000', style: TextStyle(color: Colors.teal)),
        FilledButton(onPressed: () {}, child: const Text('Beli')),
      ],
    ),
  ],
)`, lang: 'dart', caption: 'Row bersumbu utama horizontal, Column vertikal. mainAxisAlignment mengatur penyebaran sepanjang sumbu utama; crossAxisAlignment mengatur penempatan pada sumbu lainnya.' },
            { table: { head: ['Nilai mainAxisAlignment', 'Efek pada Row'], rows: [['start', 'Rapat ke kiri'], ['end', 'Rapat ke kanan'], ['center', 'Di tengah'], ['spaceBetween', 'Sebar; anak pertama dan terakhir menempel tepi'], ['spaceAround / spaceEvenly', 'Sebar dengan jarak di sekitar anak']] } },
            { h2: 'Expanded dan Flexible: membagi sisa ruang' },
            { code: dart`Row(
  children: [
    const Icon(Icons.shopping_bag),                  // lebar alami
    const SizedBox(width: 8),
    Expanded(                                         // mengambil SEMUA sisa lebar; teks panjang dipotong
      child: Text('Nama produk yang sangat panjang sekali', overflow: TextOverflow.ellipsis),
    ),
    const SizedBox(width: 8),
    const Text('Rp65.000'),
  ],
)

// membagi menurut perbandingan
Row(
  children: [
    Expanded(flex: 2, child: Container(height: 40, color: Colors.teal)),    // 2 bagian
    Expanded(flex: 1, child: Container(height: 40, color: Colors.orange)),  // 1 bagian
  ],
)`, lang: 'dart', caption: 'Flexible boleh lebih kecil dari ruang yang disediakan; Expanded memaksa mengisi seluruhnya (Expanded adalah Flexible dengan fit: tight).' },
            { code: js`// Peragaan Expanded: bagi sisa ruang menurut flex
function bagiRuang(lebarTotal, anak) {
    const tetap = anak.filter(a => !a.flex).reduce((j, a) => j + a.lebar, 0);
    const sisa = Math.max(0, lebarTotal - tetap);
    const totalFlex = anak.reduce((j, a) => j + (a.flex || 0), 0);
    return anak.map(a => ({ nama: a.nama, lebar: a.flex ? Math.round(sisa * a.flex / totalFlex) : a.lebar }));
}
console.log(bagiRuang(360, [{ nama: 'ikon', lebar: 24 }, { nama: 'judul', flex: 2 }, { nama: 'harga', flex: 1 }]));
console.log(bagiRuang(360, [{ nama: 'ikon', lebar: 24 }, { nama: 'nama', flex: 1 }, { nama: 'harga', lebar: 80 }]));`, lang: 'javascript', run: true },
            { h2: 'Stack: menumpuk widget' },
            { code: dart`Stack(
  alignment: Alignment.bottomLeft,                  // penempatan anak tanpa Positioned
  children: [
    Image.network('https://contoh.id/banner.jpg', width: double.infinity, height: 180, fit: BoxFit.cover),
    Container(                                       // lapisan gelap di atas gambar
      padding: const EdgeInsets.all(12),
      color: Colors.black54,
      width: double.infinity,
      child: const Text('Promo Akhir Pekan', style: TextStyle(color: Colors.white, fontSize: 18)),
    ),
    const Positioned(top: 8, right: 8, child: Chip(label: Text('-20%'))),   // posisi absolut
  ],
)`, lang: 'dart', caption: 'Stack menumpuk anak dari bawah ke atas; Positioned menempatkan anak pada koordinat tertentu terhadap Stack.' },
            { h2: 'Daftar yang dapat digulir: ListView' },
            { callout: 'Jangan menaruh <code>Column</code> berisi banyak item di dalam layar yang perlu digulir. Column tidak dapat digulir dan akan overflow. Pakai <code>ListView</code>, dan <code>ListView.builder</code> untuk daftar panjang: item dibuat <b>malas</b> hanya saat terlihat, sehingga 10.000 item tetap ringan.', kind: 'warn', title: 'Salah umum' },
            { code: dart`ListView.builder(
  itemCount: produk.length,
  itemBuilder: (context, i) {
    final p = produk[i];
    return ListTile(
      leading: const CircleAvatar(child: Icon(Icons.coffee)),
      title: Text(p.nama),
      subtitle: Text('Stok \${p.stok}'),
      trailing: Text('Rp\${p.harga}'),
      onTap: () {},
    );
  },
)

// pemisah antar item: ListView.separated(separatorBuilder: (_, __) => const Divider(), ...)
// grid: GridView.builder(gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2), ...)`, lang: 'dart' },
            { h2: 'Memecah widget agar tetap terbaca' },
            { ul: ['Bila method <code>build</code> melewati sekitar 40–60 baris atau berkurung dalam, pecah menjadi widget terpisah (<code>class KartuProduk extends StatelessWidget</code>), bukan sekadar method pembantu.', 'Beri <code>const</code> pada konstruktor dan pemakaiannya bila semua field final.', 'Gunakan <code>Padding</code>, <code>SizedBox</code>, <code>Align</code>, dan <code>Container</code> hanya sesuai keperluan: Container yang hanya memberi padding lebih baik diganti Padding.', 'Aktifkan <b>Flutter Inspector</b> dan "Debug Paint" di DevTools untuk melihat batas dan ukuran widget saat menelusuri masalah layout.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Aturan layout Flutter?', options: ['Constraints turun, ukuran naik, induk menempatkan', 'Anak menentukan semuanya', 'Posisi absolut selalu'], answer: 0, why: 'Membantu menjelaskan sebagian besar galat layout.' }, { q: 'Widget untuk mengisi sisa ruang di Row?', options: ['Expanded', 'Padding', 'Align'], answer: 0, why: 'Mengambil sisa ruang menurut flex.' }, { q: 'Untuk daftar panjang yang dapat digulir sebaiknya...', options: ['ListView.builder', 'Column dengan banyak anak', 'Stack'], answer: 0, why: 'Membuat item secara malas.' }] },
            { exercise: [['Teks panjang di dalam Row menyebabkan overflow. Apa perbaikannya?', 'Bungkus Text dengan Expanded atau Flexible dan atur overflow: TextOverflow.ellipsis.'], ['Buat kartu: gambar di kiri (80x80), judul dan harga di kanan memenuhi sisa ruang.', 'Row dengan SizedBox/Image 80x80, SizedBox lebar 12, lalu Expanded berisi Column (judul dan harga).'], ['Kapan memakai Stack?', 'Saat widget perlu bertumpuk: lencana di atas gambar, teks di atas banner, tombol mengambang.'], ['Mengapa const pada widget bermanfaat?', 'Widget const dibuat sekali saat kompilasi dan tidak dibangun ulang, menghemat kerja saat state berubah.']] },
            { summary: ['Semua adalah widget; UI adalah pohon widget yang disusun lewat child dan children.', 'Constraints turun, ukuran naik, induk menempatkan: kunci memahami layout dan galat overflow.', 'Row/Column (sumbu utama dan silang), Expanded/Flexible (bagi sisa ruang), Stack/Positioned (menumpuk).', 'ListView.builder untuk daftar panjang; pecah widget dan gunakan const.'] },
        ],
        faq: [['Mengapa muncul garis kuning-hitam bertuliskan overflowed?', 'Anak lebih besar dari ruang yang tersedia; beri ruang dengan Expanded/Flexible, bungkus dengan SingleChildScrollView, atau ubah ukuran.'], ['Apa bedanya Container dan SizedBox?', 'Container memiliki banyak properti (warna, dekorasi, padding, margin); SizedBox lebih ringan untuk sekadar ukuran atau jarak.'], ['Bagaimana membuat layout responsif?', 'LayoutBuilder dan MediaQuery untuk membaca ukuran layar, lalu mengubah susunan (dibahas di materi responsif).']],
        sources: [['Flutter: Layouts', 'https://docs.flutter.dev/ui/layout'], ['Flutter: Understanding constraints', 'https://docs.flutter.dev/ui/layout/constraints'], ['Flutter: Widget catalog', 'https://docs.flutter.dev/ui/widgets'], ['Flutter: Inspector', 'https://docs.flutter.dev/tools/devtools/inspector']],
    },

    {
        slug: 'stateful-widget-flutter-setstate-lifecycle-dan-kapan-rebuild',
        title: 'StatefulWidget Flutter: setState, Lifecycle, dan Rebuild',
        description: 'Pahami StatefulWidget Flutter: setState dan rebuild, lifecycle initState dan dispose, mengangkat state, serta kesalahan umum setelah dispose.',
        date: D, category: C, level: 'Pemula', tags: ['StatefulWidget', 'setState', 'lifecycle', 'Flutter state', 'initState'], cta: 'jasa',
        prereq: ['widget dan layout Flutter', 'dasar Dart'],
        lead: 'Widget yang hanya menampilkan data itu statis. Aplikasi menjadi hidup ketika tampilan berubah sebagai tanggapan terhadap sentuhan, ketikan, atau data masuk. Di Flutter, perubahan itu dikelola lewat state, dan setState adalah mekanisme paling dasar yang perlu Anda pahami sebelum mempelajari pustaka manajemen state yang lebih besar.',
        body: [
            { objectives: ['membedakan StatelessWidget dan StatefulWidget', 'memakai setState dan memahami bahwa ia memicu build ulang', 'memahami siklus hidup State: initState, didUpdateWidget, dispose', 'melepas sumber daya (controller, langganan) dengan benar di dispose', 'mengangkat state ke induk untuk dibagikan antar widget'] },
            NOTE_FLUTTER,
            { h2: 'Stateless vs Stateful' },
            { table: { head: ['', 'StatelessWidget', 'StatefulWidget'], rows: [['Data yang berubah', 'Tidak ada; hanya dari parameter konstruktor', 'Ada: objek State yang hidup lebih lama dari widget'], ['Kapan build ulang', 'Saat induknya mengirim konfigurasi baru', 'Saat induk mengirim konfigurasi baru ATAU setState dipanggil'], ['Contoh', 'Teks judul, ikon, kartu produk statis', 'Penghitung, kotak centang, formulir, animasi']] } },
            { code: dart`import 'package:flutter/material.dart';

class Penghitung extends StatefulWidget {
  const Penghitung({super.key, this.awal = 0});
  final int awal;                                    // konfigurasi dari induk (tidak berubah)

  @override
  State<Penghitung> createState() => _PenghitungState();
}

class _PenghitungState extends State<Penghitung> {
  late int _jumlah;                                  // state: milik objek State ini

  @override
  void initState() {
    super.initState();
    _jumlah = widget.awal;                           // dijalankan SEKALI saat State dibuat
  }

  void _tambah() {
    setState(() {                                    // 1. ubah data di dalam setState
      _jumlah++;                                     // 2. Flutter menjadwalkan build ulang
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text('Klik: $_jumlah', style: Theme.of(context).textTheme.headlineMedium),
        FilledButton(onPressed: _tambah, child: const Text('Tambah')),
      ],
    );
  }
}`, lang: 'dart', caption: 'Widget (immutable, dibuat ulang sering) dan State (berumur panjang) dipisahkan agar data tidak hilang setiap build. Awalan _ membuat anggota privat pada berkas itu.' },
            { callout: 'setState hanya memberi tahu Flutter bahwa data berubah dan <b>build()</b> perlu dijalankan ulang. Mengubah variabel tanpa setState tidak memperbarui layar. Dan bangun ulang itu murah: yang dibuat ulang hanyalah deskripsi widget; Flutter hanya memperbarui bagian layar yang benar-benar berbeda.', kind: 'info', title: 'setState dan build' },
            { h2: 'Mengintip mekanismenya' },
            { code: dart`// Tiruan dalam Dart murni: State memegang data, setState menjadwalkan build ulang
class WidgetTiruan {
  int jumlah = 0;
  int jumlahBuild = 0;

  void setState(void Function() ubah) {
    ubah();                         // 1. data diubah
    build();                        // 2. "framework" membangun ulang
  }

  void build() {
    jumlahBuild++;
    print('build #\$jumlahBuild -> tampilkan "Klik: \$jumlah"');
  }
}

void main() {
  final w = WidgetTiruan();
  w.build();                        // build pertama
  w.setState(() => w.jumlah++);
  w.setState(() => w.jumlah++);

  w.jumlah += 10;                   // diubah TANPA setState
  print('data sekarang = \${w.jumlah}, tetapi layar masih menampilkan yang lama sampai build berikutnya');
  w.setState(() {});
}`, lang: 'dart', run: true, caption: 'Kesalahan klasik pemula: mengubah variabel dan heran mengapa layar tidak berubah. setState adalah sinyal yang memicu build.' },
            { h2: 'Siklus hidup State' },
            { svg: 'flow', label: 'Siklus hidup State', steps: [{ t: 'createState', d: 'objek State dibuat' }, { t: 'initState', d: 'sekali; siapkan data awal, controller' }, { t: 'build', d: 'berulang setiap perubahan' }, { t: 'didUpdateWidget', d: 'bila induk mengirim konfigurasi baru' }, { t: 'dispose', d: 'sekali; lepaskan sumber daya' }] },
            { code: dart`class _FormPencarianState extends State<FormPencarian> {
  late final TextEditingController _kontrol;
  StreamSubscription<int>? _langganan;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _kontrol = TextEditingController();
    _langganan = widget.aliran.listen((n) => setState(() => _terakhir = n));
    _timer = Timer.periodic(const Duration(seconds: 30), (_) => _segarkan());
  }

  @override
  void dispose() {
    _timer?.cancel();                 // WAJIB: tanpa ini timer terus berjalan setelah layar ditutup
    _langganan?.cancel();
    _kontrol.dispose();               // controller melepaskan sumber daya
    super.dispose();                  // super.dispose() DI AKHIR
  }
  // ...
}`, lang: 'dart', caption: 'Aturan: apa pun yang Anda buat atau berlangganan di initState (controller, timer, stream, FocusNode, AnimationController) harus dilepas di dispose.' },
            { h2: 'Galat umum: setState setelah dispose' },
            { code: dart`Future<void> _muat() async {
  final data = await api.ambil();      // tunggu jaringan; pengguna mungkin sudah menutup layar
  if (!mounted) return;                // PERIKSA dulu: State masih terpasang di pohon?
  setState(() => _data = data);
}
// Tanpa pemeriksaan mounted: "setState() called after dispose()" (galat/peringatan).
// Untuk BuildContext setelah await: periksa context.mounted (Flutter 3.7+) sebelum memakai context.`, lang: 'dart' },
            { h2: 'Mengangkat state' },
            `Bila dua widget bersaudara perlu berbagi data (misalnya filter dan daftar), pindahkan state ke <b>induk bersama</b> terdekat dan kirim nilai ke bawah serta callback ke atas, ide yang sama dengan React. Bila pohon sudah dalam, pustaka state management (Provider, Riverpod, Bloc) mencegah mengirim data lewat banyak tingkat.`,
            { code: dart`class Halaman extends StatefulWidget { const Halaman({super.key}); @override State<Halaman> createState() => _HalamanState(); }

class _HalamanState extends State<Halaman> {
  String _kategori = 'semua';                        // state diangkat ke induk

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      FilterKategori(terpilih: _kategori, onUbah: (k) => setState(() => _kategori = k)),   // data turun, aksi naik
      Expanded(child: DaftarProduk(kategori: _kategori)),
    ]);
  }
}`, lang: 'dart' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengubah variabel tanpa setState menyebabkan...', options: ['Layar tidak diperbarui', 'Aplikasi crash', 'Build dua kali'], answer: 0, why: 'setState memberi sinyal build ulang.' }, { q: 'Tempat melepas controller dan timer?', options: ['dispose()', 'initState()', 'build()'], answer: 0, why: 'Dijalankan saat State dibuang.' }, { q: 'Pemeriksaan sebelum setState setelah await?', options: ['mounted', 'initialized', 'visible'], answer: 0, why: 'Mencegah setState setelah dispose.' }] },
            { exercise: [['Buat toggle "favorit" yang mengganti ikon hati kosong dan penuh.', 'State bool _favorit; setState(() => _favorit = !_favorit); Icon(_favorit ? Icons.favorite : Icons.favorite_border).'], ['Mengapa AnimationController harus di-dispose?', 'Ia memegang Ticker; bila tidak dilepas terjadi kebocoran dan peringatan saat widget dibuang.'], ['Dua widget bersaudara perlu berbagi nilai slider. Di mana state ditaruh?', 'Di induk bersama; kirim nilai ke bawah dan callback onChanged ke atas.'], ['Apa bedanya initState dan build?', 'initState sekali saat State dibuat (inisialisasi); build berulang kali setiap perlu menggambar ulang dan harus murni.']] },
            { summary: ['StatelessWidget tanpa data berubah; StatefulWidget memiliki objek State berumur panjang.', 'setState(() {...}) mengubah data dan memicu build ulang; build harus murni dan cepat.', 'Siklus hidup: initState sekali, build berulang, dispose sekali untuk melepas sumber daya.', 'Periksa mounted setelah await; angkat state ke induk, dan pertimbangkan state management untuk pohon dalam.'] },
        ],
        faq: [['Apakah build ulang mahal?', 'Tidak terlalu; Flutter membandingkan pohon widget baru dengan elemen yang ada dan hanya memperbarui yang berubah. Hindari pekerjaan berat di build.'], ['Kapan beralih dari setState ke Provider/Riverpod?', 'Saat state dibagi antar banyak layar atau dikirim lewat banyak tingkat widget; untuk state lokal satu widget, setState cukup.'], ['Apa itu key pada widget?', 'Identitas untuk mempertahankan state saat urutan widget dalam daftar berubah, sama tujuannya dengan key di React.']],
        sources: [['Flutter: Adding interactivity', 'https://docs.flutter.dev/ui/interactivity'], ['Flutter: State management intro', 'https://docs.flutter.dev/data-and-backend/state-mgmt/intro'], ['API: State class', 'https://api.flutter.dev/flutter/widgets/State-class.html'], REF_FLUTTER],
    },

    {
        slug: 'async-dart-future-async-await-dan-stream-untuk-flutter',
        title: 'Async di Dart: Future, async/await, dan Stream',
        description: 'Pahami async di Dart: Future, async/await, Future.wait, Stream, StreamBuilder, dan isolate untuk pekerjaan berat, dengan contoh yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['Dart async', 'Future', 'Stream', 'async await', 'Flutter'], cta: 'jasa',
        prereq: ['dasar Dart', 'widget Flutter'],
        lead: 'Aplikasi seluler menunggu hal-hal lambat sepanjang waktu: jaringan, basis data lokal, berkas, sensor. Bila menunggu itu memblokir, layar membeku. Dart menangani ini dengan Future untuk satu hasil di masa depan dan Stream untuk rangkaian hasil, dengan sintaks async/await yang membuat kode asinkron terbaca seperti kode biasa.',
        body: [
            { objectives: ['menjelaskan event loop Dart dan mengapa UI tidak membeku saat menunggu', 'memakai Future, async/await, dan menangani error dengan try/catch', 'menjalankan beberapa Future paralel dengan Future.wait', 'memakai Stream dan memahami perbedaannya dengan Future', 'mengenali kapan perlu isolate (Isolate.run/compute) untuk pekerjaan CPU berat'] },
            NOTE_FLUTTER,
            { h2: 'Future: satu nilai di masa depan' },
            { code: dart`Future<String> ambilNama(int id) async {
  await Future.delayed(const Duration(milliseconds: 100));      // seolah permintaan jaringan
  if (id <= 0) throw ArgumentError('id harus positif');
  return 'Pengguna #$id';
}

void main() async {
  print('1. mulai');

  // cara 1: async/await
  final nama = await ambilNama(7);
  print('2. $nama');

  // cara 2: then (gaya callback)
  ambilNama(8).then((n) => print('3. $n'));
  print('   (baris ini tercetak SEBELUM hasil nomor 3: then tidak memblokir)');
  await Future.delayed(const Duration(milliseconds: 150));

  // penanganan error
  try {
    await ambilNama(-1);
  } catch (e) {
    print('4. galat tertangkap: $e');
  } finally {
    print('5. selesai');
  }
}`, lang: 'dart', run: true, caption: 'async/await membuat urutan terbaca linear. await menjeda fungsi async itu saja; event loop tetap bebas menangani sentuhan dan animasi.' },
            { h2: 'Beberapa Future: berurutan atau paralel' },
            { code: dart`Future<int> kerja(String nama, int ms) async {
  await Future.delayed(Duration(milliseconds: ms));
  return ms;
}

void main() async {
  var sw = Stopwatch()..start();
  await kerja('a', 200);
  await kerja('b', 200);
  await kerja('c', 200);
  print('berurutan : ~\${(sw.elapsedMilliseconds / 100).round() * 100} ms');

  sw = Stopwatch()..start();
  final hasil = await Future.wait([kerja('a', 200), kerja('b', 200), kerja('c', 200)]);
  print('paralel   : ~\${(sw.elapsedMilliseconds / 100).round() * 100} ms \$hasil');

  // Future.wait menolak bila salah satu gagal; eagerError: false menunggu semuanya
  try {
    await Future.wait([kerja('x', 50), Future<int>.error(StateError('gagal sengaja'))]);
  } catch (e) {
    print('galat dari Future.wait: \$e');
  }
}`, lang: 'dart', run: true, caption: 'Untuk beberapa permintaan yang tidak saling bergantung (profil, pesanan, notifikasi), Future.wait mempercepat pemuatan halaman.' },
            { h2: 'Stream: banyak nilai dari waktu ke waktu' },
            { table: { head: ['', 'Future', 'Stream'], rows: [['Jumlah hasil', 'Satu (atau galat)', 'Nol sampai banyak, lalu selesai'], ['Contoh', 'Satu respons HTTP, membaca satu berkas', 'Ketikan pengguna, lokasi GPS, pesan WebSocket, perubahan basis data (Firebase)'], ['Menunggu', 'await', 'await for atau listen'], ['Di Flutter', 'FutureBuilder', 'StreamBuilder']] } },
            { code: dart`import 'dart:async';

Stream<int> hitungMundur(int dari) async* {          // async* + yield menghasilkan aliran
  for (var i = dari; i >= 1; i--) {
    await Future.delayed(const Duration(milliseconds: 50));
    yield i;
  }
}

void main() async {
  // await for: proses setiap nilai saat tiba
  await for (final n in hitungMundur(3)) {
    print('tick \$n');
  }

  // transformasi aliran
  final genap = await hitungMundur(8).where((n) => n % 2 == 0).map((n) => 'genap \$n').toList();
  print(genap);

  // listen dan pembatalan langganan
  final langganan = hitungMundur(100).listen((n) => print('didengar \$n'));
  await Future.delayed(const Duration(milliseconds: 130));
  await langganan.cancel();
  print('langganan dibatalkan');

  // StreamController: membuat aliran sendiri
  final kontrol = StreamController<String>();
  kontrol.stream.listen((p) => print('pesan: \$p'), onDone: () => print('aliran selesai'));
  kontrol..add('halo')..add('dunia');
  await kontrol.close();
}`, lang: 'dart', run: true, caption: 'Selalu batalkan langganan (cancel) yang Anda buat sendiri, biasanya di dispose pada StatefulWidget. StreamBuilder mengelola langganan itu otomatis.' },
            { h2: 'Future dan Stream di antarmuka' },
            { code: dart`// FutureBuilder: tampilkan status memuat / galat / data
FutureBuilder<List<Produk>>(
  future: _janjiProduk,                       // buat Future di initState, BUKAN di dalam build (akan memanggil ulang tiap build)
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return const Center(child: CircularProgressIndicator());
    }
    if (snapshot.hasError) {
      return Center(child: Text('Gagal memuat: \${snapshot.error}'));
    }
    final data = snapshot.data ?? [];
    if (data.isEmpty) return const Center(child: Text('Belum ada produk.'));
    return ListView(children: data.map((p) => ListTile(title: Text(p.nama))).toList());
  },
)

// StreamBuilder: sama, untuk aliran
StreamBuilder<int>(
  stream: _aliranSensor,
  builder: (context, snapshot) => Text(snapshot.hasData ? 'Nilai: \${snapshot.data}' : 'Menunggu...'),
)`, lang: 'dart', caption: 'Tiga keadaan wajib ditangani: memuat, galat, dan data (termasuk kosong). Pengguna yang melihat layar putih tanpa penjelasan adalah pengalaman yang buruk.' },
            { h2: 'Pekerjaan berat: isolate' },
            { callout: 'Dart berjalan pada satu utas dengan event loop; <b>async/await tidak membuat kode CPU-berat menjadi paralel</b>. Mengurai JSON berukuran besar atau memproses gambar di utas utama membuat animasi tersendat. Pindahkan ke isolate: <code>Isolate.run(() => hitungBerat(data))</code> (Dart 2.19+) atau <code>compute()</code> di Flutter. Isolate tidak berbagi memori; data disalin lewat pesan.', kind: 'warn', title: 'Async bukan paralel' },
            { code: dart`import 'dart:isolate';

int fibonacci(int n) => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);   // sengaja mahal

void main() async {
  final sw = Stopwatch()..start();
  final hasil = await Isolate.run(() => fibonacci(32));       // berjalan di isolate terpisah
  print('fib(32) = \$hasil, selesai tanpa memblokir isolate utama');
  print('isolate utama tetap bebas selama menunggu: \${sw.elapsedMilliseconds >= 0}');
}`, lang: 'dart', run: true },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'await menjeda...', options: ['Fungsi async itu saja', 'Seluruh aplikasi', 'Hanya animasi'], answer: 0, why: 'Event loop tetap berjalan.' }, { q: 'Untuk menjalankan tiga Future independen bersamaan?', options: ['Future.wait', 'await berurutan', 'for biasa'], answer: 0, why: 'Waktu total mengikuti yang terlama.' }, { q: 'Mengurai JSON raksasa yang membuat UI tersendat sebaiknya dipindah ke...', options: ['Isolate', 'Future biasa', 'Stream'], answer: 0, why: 'async tidak memparalelkan CPU.' }] },
            { exercise: [['Mengapa Future untuk FutureBuilder dibuat di initState, bukan di build?', 'build dapat dipanggil sering; membuat Future di dalamnya memicu permintaan ulang setiap rebuild.'], ['Ubah tiga await berurutan yang independen menjadi paralel.', 'Panggil ketiganya tanpa await ke dalam Future.wait([...]) lalu baca hasilnya.'], ['Apa bedanya Stream broadcast dan single-subscription?', 'Single-subscription hanya satu pendengar; broadcast mengizinkan banyak pendengar tetapi tidak menyimpan nilai yang terlewat.'], ['Mengapa langganan Stream harus dibatalkan?', 'Agar tidak terjadi kebocoran memori dan callback yang memanggil setState pada widget yang sudah tidak ada.']] },
            { summary: ['Future = satu hasil nanti; async/await menuliskannya linear dan try/catch menangani galat.', 'Future.wait menjalankan beberapa Future bersamaan; Stream menghasilkan banyak nilai (async*, yield, listen, await for).', 'FutureBuilder/StreamBuilder menangani memuat, galat, dan data; buat Future di initState.', 'async bukan paralel: pekerjaan CPU berat dipindah ke isolate.'] },
        ],
        faq: [['Apa itu microtask dan event queue di Dart?', 'Dua antrean: microtask diproses sebelum event berikutnya; Future biasanya masuk event queue, sedangkan Future.microtask masuk microtask.'], ['Apakah ada setara Promise.all?', 'Ya: Future.wait. Setara Promise.allSettled bisa dibuat dengan menangani galat di setiap Future.'], ['Bagaimana menangani batas waktu?', 'future.timeout(Duration(seconds: 10), onTimeout: ...) mengembalikan galat TimeoutException atau nilai cadangan.']],
        sources: [['Dart: Asynchronous programming', 'https://dart.dev/libraries/async/async-await'], ['Dart: Streams', 'https://dart.dev/libraries/async/using-streams'], ['Flutter: Concurrency and isolates', 'https://docs.flutter.dev/perf/isolates'], ['Dart: Isolates', 'https://dart.dev/language/concurrency']],
    },

    {
        slug: 'http-dan-json-di-flutter-model-fromjson-dan-error-handling',
        title: 'HTTP dan JSON di Flutter: Model, fromJson, Error Handling',
        description: 'Ambil data API di Flutter: paket http, model dengan fromJson dan toJson, penanganan galat, lapisan repository, dan uji parsing tanpa jaringan.',
        date: D, category: C, level: 'Menengah', tags: ['Flutter HTTP', 'JSON Dart', 'fromJson', 'API Flutter', 'model data'], cta: 'jasa',
        prereq: ['async Dart', 'class Dart'],
        lead: 'Hampir setiap aplikasi seluler berbicara dengan server. Tugasnya tampak sederhana: panggil URL, dapatkan JSON, tampilkan. Namun yang membedakan aplikasi yang andal dari yang sering crash adalah cara Anda memodelkan data, menangani respons yang tidak diharapkan, dan memisahkan kode jaringan dari tampilan.',
        body: [
            { objectives: ['memanggil API dengan paket http dan membaca status serta isi', 'memodelkan JSON menjadi class Dart dengan fromJson dan toJson', 'menangani data yang hilang, bertipe salah, atau bernilai null dengan aman', 'membuat lapisan repository dengan galat bertipe', 'menguji parsing JSON tanpa jaringan'] },
            NOTE_FLUTTER,
            { h2: 'Memanggil API' },
            { code: 'flutter pub add http', lang: 'bash' },
            { code: dart`import 'dart:convert';
import 'package:http/http.dart' as http;

Future<List<Produk>> ambilProduk() async {
  final uri = Uri.https('api.contoh.id', '/v1/produk', {'halaman': '1'});     // query terenkode otomatis
  final respons = await http
      .get(uri, headers: {'Accept': 'application/json'})
      .timeout(const Duration(seconds: 10));                                   // jangan menunggu selamanya

  if (respons.statusCode != 200) {
    throw ApiGalat(respons.statusCode, 'Gagal memuat produk');
  }
  final json = jsonDecode(utf8.decode(respons.bodyBytes)) as Map<String, dynamic>;   // utf8.decode: aman untuk karakter non-ASCII
  return (json['data'] as List<dynamic>)
      .map((e) => Produk.fromJson(e as Map<String, dynamic>))
      .toList();
}`, lang: 'dart', caption: 'Di Android, izinkan akses internet di AndroidManifest (uses-permission INTERNET; sudah ada pada mode debug). Di macOS/iOS pastikan entitlements/App Transport Security sesuai (HTTPS).' },
            { h2: 'Model dengan fromJson dan toJson' },
            { code: dart`import 'dart:convert';

class Produk {
  final int id;
  final String nama;
  final int harga;
  final String? deskripsi;          // boleh tidak ada
  final DateTime dibuat;
  final List<String> tag;

  const Produk({
    required this.id,
    required this.nama,
    required this.harga,
    this.deskripsi,
    required this.dibuat,
    this.tag = const [],
  });

  factory Produk.fromJson(Map<String, dynamic> json) {
    return Produk(
      id: json['id'] as int,
      nama: json['nama'] as String,
      harga: (json['harga'] as num).toInt(),                        // num: angka bisa tiba sebagai int atau double
      deskripsi: json['deskripsi'] as String?,
      dibuat: DateTime.parse(json['dibuat'] as String),
      tag: (json['tag'] as List<dynamic>? ?? []).cast<String>(),
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'nama': nama,
        'harga': harga,
        'deskripsi': deskripsi,
        'dibuat': dibuat.toIso8601String(),
        'tag': tag,
      };

  @override
  String toString() => 'Produk(\$id, \$nama, Rp\$harga, tag: \$tag)';
}

void main() {
  const teks = '{"data":[{"id":1,"nama":"Kopi Gayo","harga":65000,"deskripsi":null,"dibuat":"2026-10-30T08:00:00Z","tag":["organik","lokal"]},'
      '{"id":2,"nama":"Teh Hijau","harga":40000.0,"dibuat":"2026-10-29T10:30:00Z"}]}';

  final json = jsonDecode(teks) as Map<String, dynamic>;
  final produk = (json['data'] as List<dynamic>).map((e) => Produk.fromJson(e as Map<String, dynamic>)).toList();
  for (final p in produk) {
    print(p);
  }
  print(jsonEncode(produk.first.toJson()));
  print('tahun dibuat: \${produk.first.dibuat.year}');
}`, lang: 'dart', run: true, caption: 'Perhatikan harga 40000.0 dan "deskripsi" yang tidak ada pada data kedua: model menangani keduanya (num.toInt dan String?). Ini jenis variasi data yang sering terjadi pada API nyata.' },
            { h2: 'Bila JSON tidak sesuai harapan' },
            { callout: 'Cast <code>as int</code> pada nilai yang ternyata <code>String</code> melempar <code>TypeError</code> saat berjalan dan membuat layar crash. API nyata berubah, mengirim null, atau mengirim bentuk berbeda. Putuskan sejak awal: <b>gagal keras dengan galat yang jelas</b> (dan dilaporkan) atau <b>toleran</b> dengan nilai bawaan, tetapi jangan membiarkannya crash tanpa penjelasan.', kind: 'warn', title: 'Data luar tidak dapat dipercaya' },
            { code: dart`class FormatTidakValid implements Exception {
  final String pesan;
  FormatTidakValid(this.pesan);
  @override
  String toString() => 'FormatTidakValid: \$pesan';
}

T ambil<T>(Map<String, dynamic> json, String kunci) {
  final nilai = json[kunci];
  if (nilai is! T) {
    throw FormatTidakValid('"\$kunci" diharapkan \$T tetapi \${nilai.runtimeType} (\$nilai)');
  }
  return nilai;
}

void main() {
  final bagus = {'id': 1, 'nama': 'Kopi'};
  print(ambil<int>(bagus, 'id'));

  final buruk = {'id': '1', 'nama': null};
  for (final kunci in ['id', 'nama', 'harga']) {
    try {
      print(ambil<Object>(buruk, kunci));
    } catch (e) {
      print(e);
    }
  }
  try {
    ambil<int>(buruk, 'id');
  } on FormatTidakValid catch (e) {
    print('ditangkap: \$e');
  }
}`, lang: 'dart', run: true, caption: 'Pesan galat yang menyebut kunci, tipe yang diharapkan, dan nilai sebenarnya mempercepat pencarian bug saat API berubah. Untuk model besar, paket seperti json_serializable atau freezed menghasilkan kode ini otomatis.' },
            { h2: 'Lapisan repository dengan galat bertipe' },
            { code: dart`sealed class ApiGalat implements Exception {
  const ApiGalat(this.pesan);
  final String pesan;
}
class TanpaKoneksi extends ApiGalat { const TanpaKoneksi() : super('Tidak ada koneksi internet.'); }
class WaktuHabis extends ApiGalat { const WaktuHabis() : super('Server terlalu lama menjawab.'); }
class StatusGalat extends ApiGalat { const StatusGalat(this.kode) : super('Server menolak (kode kode).'); final int kode; }
class DataRusak extends ApiGalat { const DataRusak(super.pesan); }

class ProdukRepository {
  ProdukRepository(this._klien);
  final http.Client _klien;                                // diinjeksi: mudah ditukar dengan tiruan saat tes

  Future<List<Produk>> semua() async {
    try {
      final r = await _klien.get(Uri.https('api.contoh.id', '/v1/produk')).timeout(const Duration(seconds: 10));
      if (r.statusCode != 200) throw StatusGalat(r.statusCode);
      return _urai(utf8.decode(r.bodyBytes));
    } on SocketException { throw const TanpaKoneksi(); }
    on TimeoutException { throw const WaktuHabis(); }
    on FormatException catch (e) { throw DataRusak('JSON rusak: \${e.message}'); }
  }
}

// Di antarmuka: ubah galat bertipe menjadi pesan ramah dan tombol "Coba lagi"
// switch (galat) { TanpaKoneksi() => ..., WaktuHabis() => ..., StatusGalat(:final kode) => ..., DataRusak() => ... }`, lang: 'dart', caption: 'Repository menerjemahkan detail teknis (SocketException, kode status) menjadi galat domain yang dapat diputuskan UI. Tampilan tidak perlu tahu tentang paket http.' },
            { h2: 'Praktik penting lain' },
            { ul: ['<b>Jangan menaruh kunci rahasia di aplikasi</b>: apa pun yang ada di APK dapat diekstrak. Rahasia berada di server; aplikasi memakai token pengguna.', '<b>HTTPS saja</b> dan pertimbangkan certificate pinning untuk aplikasi sensitif.', '<b>Caching dan offline</b>: simpan respons terakhir di penyimpanan lokal agar aplikasi tetap berguna tanpa koneksi.', '<b>Dio</b> adalah alternatif populer (interceptor, pembatalan, unggah progres); http cukup untuk banyak kasus.', '<b>Parsing berat</b> di isolate (compute) bila respons sangat besar.', '<b>Mock</b> klien HTTP di tes (http/testing MockClient) agar tes tidak memanggil jaringan.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa memakai (json["harga"] as num).toInt()?', options: ['Angka JSON bisa tiba sebagai int atau double', 'Agar lebih cepat', 'Wajib oleh Dart'], answer: 0, why: '40000 dan 40000.0 sama-sama sah dalam JSON.' }, { q: 'Fungsi factory Produk.fromJson?', options: ['Membuat objek dari Map hasil jsonDecode', 'Mengirim HTTP', 'Menyimpan basis data'], answer: 0, why: 'Konstruktor pabrik untuk parsing.' }, { q: 'Mengapa menaruh kunci rahasia API di aplikasi seluler berbahaya?', options: ['APK dapat didekompilasi dan kunci diekstrak', 'Memperlambat aplikasi', 'Dilarang Dart'], answer: 0, why: 'Rahasia harus di server.' }] },
            { exercise: [['Buat model Pengguna dengan id, nama, surel opsional, dan fromJson yang aman.', 'Field surel bertipe String?; nama dan id dengan cast; gunakan json["surel"] as String?.'], ['Mengapa menyuntikkan http.Client ke repository?', 'Agar dapat diganti klien tiruan saat tes, tanpa jaringan sungguhan.'], ['Apa yang terjadi pada aplikasi bila API mengirim "id": "1" (string) dan model memakai as int?', 'TypeError saat berjalan (crash) kecuali ditangani; pakai pemeriksaan tipe atau galat bertipe.'], ['Bagaimana menampilkan pesan ramah saat tidak ada koneksi?', 'Tangkap SocketException di repository, ubah ke galat TanpaKoneksi, dan UI menampilkan pesan serta tombol coba lagi.']] },
            { summary: ['Paket http: get dengan timeout; periksa statusCode; decode utf8 lalu jsonDecode.', 'Model dengan fromJson/toJson; tangani num, String?, dan daftar yang hilang.', 'Data luar tidak dapat dipercaya: galat jelas atau nilai bawaan, jangan crash diam-diam.', 'Repository menerjemahkan galat teknis menjadi galat bertipe; suntikkan klien untuk tes; rahasia tetap di server.'] },
        ],
        faq: [['Apakah perlu json_serializable?', 'Untuk model banyak dan kompleks, ya: ia menghasilkan fromJson/toJson dan mengurangi kesalahan ketik; untuk beberapa model sederhana, kode manual cukup.'], ['Bagaimana mengunggah berkas?', 'Dengan http.MultipartRequest atau Dio FormData; sertakan progres bagi pengguna.'], ['Bagaimana dengan GraphQL atau gRPC?', 'Ada paket (graphql_flutter, grpc), tetapi REST JSON tetap paling umum untuk kebanyakan aplikasi.']],
        sources: [['Flutter: Fetch data from the internet', 'https://docs.flutter.dev/cookbook/networking/fetch-data'], ['Flutter: JSON and serialization', 'https://docs.flutter.dev/data-and-backend/serialization/json'], ['Dart: dart:convert', 'https://api.dart.dev/stable/dart-convert/dart-convert-library.html'], ['pub.dev: http', 'https://pub.dev/packages/http']],
    },
];
