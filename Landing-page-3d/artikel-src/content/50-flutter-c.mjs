const D = '2026-10-30';
const C = 'Flutter & Mobile';
const dart = (strings) => strings.raw.map(r => r.split('\\$').join('$')).join('');
const NOTE_FLUTTER = { callout: 'Contoh Flutter ditampilkan sebagai kode yang mengikuti dokumentasi Flutter 3.x. Logika Dart murni dijalankan sungguhan dengan Dart SDK; kode yang butuh Flutter (widget, uji widget) tidak dijalankan di halaman ini.', kind: 'info', title: 'Tentang contoh kode' };

export default [
    {
        slug: 'ui-responsif-flutter-mediaquery-layoutbuilder-dan-breakpoint',
        title: 'UI Responsif Flutter: MediaQuery dan LayoutBuilder',
        description: 'Membuat UI Flutter yang responsif dan adaptif: MediaQuery, LayoutBuilder, breakpoint, Flexible, orientasi, text scale, dan SafeArea, dengan logika breakpoint yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['responsif', 'MediaQuery', 'LayoutBuilder', 'adaptif', 'Flutter'], cta: 'jasa',
        prereq: ['widget Flutter dasar', 'Row dan Column'],
        lead: 'Satu aplikasi Flutter kini berjalan di ponsel kecil, tablet, lipat, jendela desktop, dan web. UI yang hanya tampak bagus di satu ukuran layar akan terasa rusak di yang lain. Responsif berarti tata letak menyesuaikan ruang yang tersedia; adaptif berarti perilaku dan komponen menyesuaikan platform dan cara input.',
        body: [
            { objectives: ['membedakan MediaQuery (ukuran layar) dan LayoutBuilder (ukuran ruang induk)', 'mendefinisikan breakpoint dan memilih tata letak per kelas ukuran', 'memakai Flexible, Expanded, Wrap, dan AspectRatio agar elastis', 'menghormati SafeArea, text scale, dan orientasi', 'menguji berbagai ukuran layar'] },
            NOTE_FLUTTER,
            { h2: 'MediaQuery vs LayoutBuilder' },
            { table: { head: ['Alat', 'Mengukur', 'Pakai ketika'], rows: [['MediaQuery.sizeOf(context)', 'Ukuran seluruh jendela/layar', 'Keputusan global: pilih navigasi bawah atau samping'], ['LayoutBuilder', 'Batas (constraints) yang diberikan induk', 'Komponen yang harus menyesuaikan ruangnya sendiri (kartu, grid)'], ['MediaQuery.paddingOf / viewInsetsOf', 'Area aman dan keyboard', 'Menghindari notch dan keyboard'], ['MediaQuery.textScalerOf', 'Pengaturan ukuran teks pengguna', 'Menjaga tata letak tetap utuh saat teks diperbesar']] } },
            { callout: 'Lebih baik memakai <b>LayoutBuilder</b> untuk komponen yang dipakai ulang: ia peduli pada ruang yang <i>benar-benar</i> ia dapat, bukan ukuran layar. Satu kartu di panel samping sempit harus terlihat benar walau layarnya lebar.', kind: 'good', title: 'Prinsip' },
            { h2: 'Breakpoint' },
            { code: dart`enum KelasUkuran { ringkas, sedang, luas }

KelasUkuran kelasDariLebar(double lebar) {
  if (lebar < 600) return KelasUkuran.ringkas;      // ponsel
  if (lebar < 840) return KelasUkuran.sedang;       // tablet kecil, ponsel lipat terbuka
  return KelasUkuran.luas;                          // tablet besar, desktop, web
}

int kolomGrid(double lebar, {double lebarKartu = 220}) {
  final n = (lebar / lebarKartu).floor();
  return n < 1 ? 1 : n;
}

void main() {
  for (final lebar in [320.0, 411.0, 600.0, 768.0, 840.0, 1280.0, 1920.0]) {
    print('lebar \${lebar.toStringAsFixed(0).padLeft(4)} -> \${kelasDariLebar(lebar).name.padRight(7)} grid \${kolomGrid(lebar)} kolom');
  }
}`, lang: 'dart', run: true, caption: 'Material 3 menyarankan kelas ukuran jendela (compact < 600, medium 600-839, expanded 840+). Menaruh keputusan ini di satu fungsi menjaga seluruh aplikasi konsisten dan membuatnya mudah diuji.' },
            { h2: 'Tata letak yang berubah' },
            { code: dart`class Beranda extends StatelessWidget {
  const Beranda({super.key});
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, batas) {
      final kelas = kelasDariLebar(batas.maxWidth);
      switch (kelas) {
        case KelasUkuran.ringkas:
          return Scaffold(
            body: const DaftarArtikel(),
            bottomNavigationBar: const NavigationBar(destinations: tujuan),   // navigasi di bawah
          );
        case KelasUkuran.sedang:
        case KelasUkuran.luas:
          return Scaffold(
            body: Row(children: [
              NavigationRail(destinations: tujuanRail, selectedIndex: 0, extended: kelas == KelasUkuran.luas),   // navigasi samping
              const VerticalDivider(width: 1),
              const Expanded(child: DaftarArtikel()),
              if (kelas == KelasUkuran.luas) const SizedBox(width: 360, child: PanelDetail()),   // panel detail berdampingan
            ]),
          );
      }
    });
  }
}`, lang: 'dart', caption: 'Pola list-detail: di ponsel, daftar dan detail adalah dua layar; di layar lebar keduanya tampil berdampingan.' },
            { h2: 'Alat elastis' },
            { code: dart`// Grid yang jumlah kolomnya menyesuaikan lebar
GridView.builder(
  gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 220, mainAxisSpacing: 12, crossAxisSpacing: 12),
  itemBuilder: (_, i) => KartuProduk(produk: daftar[i]),
  itemCount: daftar.length,
)

// Tata letak yang membungkus ke baris berikutnya
Wrap(spacing: 8, runSpacing: 8, children: [for (final t in tag) Chip(label: Text(t))])

// Batasi lebar konten agar teks tidak terlalu panjang di layar lebar
Center(child: ConstrainedBox(constraints: const BoxConstraints(maxWidth: 720), child: isiArtikel))

// Rasio tetap untuk gambar/video
AspectRatio(aspectRatio: 16 / 9, child: Image.network(url, fit: BoxFit.cover))

// Area aman: hindari lekukan layar dan bilah sistem
SafeArea(child: konten)

// Teks yang tidak meluap
Flexible(child: Text(judul, maxLines: 2, overflow: TextOverflow.ellipsis))`, lang: 'dart' },
            { h2: 'Aksesibilitas ukuran' },
            ,
            { ul: ['<b>Text scale</b>: pengguna dapat memperbesar teks hingga 200%+. Hindari tinggi tetap pada wadah berisi teks; pakai constraints minimum atau biarkan wadah tumbuh.', '<b>Area sentuh</b>: minimal 48x48 dp untuk tombol dan ikon.', '<b>Orientasi</b>: pertimbangkan lanskap; jangan mengunci portrait tanpa alasan.', '<b>Keyboard</b>: gunakan <code>resizeToAvoidBottomInset</code> dan <code>SingleChildScrollView</code> agar kolom isian tidak tertutup.', '<b>Input</b>: di desktop dan web dukung mouse (hover), keyboard (fokus dan pintasan), dan scroll.'] },
            { h2: 'Menguji' },
            { ul: ['Gunakan <b>Device Preview</b> (paket device_preview) atau jendela yang dapat diubah ukurannya di Chrome/desktop.', 'Uji widget dengan ukuran layar tertentu: <code>tester.view.physicalSize = const Size(1200, 800)</code> lalu <code>pumpWidget</code>.', 'Cek tiga ukuran minimal: 360x640 (kecil), 768x1024 (tablet), 1280x800 (desktop).', 'Aktifkan font terbesar di pengaturan perangkat dan periksa tidak ada overflow (garis kuning-hitam).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'LayoutBuilder mengukur...', options: ['Batas dari widget induk', 'Ukuran seluruh layar', 'Ukuran font'], answer: 0, why: 'Cocok untuk komponen yang dipakai ulang.' }, { q: 'Untuk apa SafeArea?', options: ['Menghindari notch dan bilah sistem', 'Mempercepat render', 'Menyimpan data'], answer: 0, why: 'Konten tidak tertutup elemen sistem.' }, { q: 'Mengapa hindari tinggi tetap pada wadah teks?', options: ['Teks diperbesar pengguna bisa meluap', 'Lebih lambat', 'Tidak diizinkan'], answer: 0, why: 'Biarkan wadah menyesuaikan.' }] },
            { exercise: [['Tentukan navigasi untuk lebar 500, 700, dan 1000.', 'Ringkas (500): NavigationBar bawah. Sedang (700): NavigationRail. Luas (1000): rail yang diperluas dan panel detail.'], ['Berapa kolom grid untuk lebar 900 dan lebarKartu 220?', 'floor(900/220) = 4 kolom.'], ['Mengapa membatasi lebar maksimum teks bacaan?', 'Baris yang terlalu panjang sulit dibaca; sekitar 60-80 karakter per baris nyaman.'], ['Apa bedanya responsif dan adaptif?', 'Responsif: tata letak menyesuaikan ruang. Adaptif: komponen dan perilaku menyesuaikan platform dan input (misal dialog gaya iOS vs Android, hover di desktop).']] },
            { summary: ['MediaQuery untuk keputusan global; LayoutBuilder untuk komponen sesuai ruang induknya.', 'Tentukan breakpoint di satu tempat (compact/medium/expanded).', 'Gunakan GridView max extent, Wrap, Flexible, ConstrainedBox, AspectRatio.', 'Hormati SafeArea, text scale, area sentuh, keyboard; uji tiga ukuran.'] },
        ].filter(x => x !== undefined),
        faq: [['Apakah perlu paket responsif pihak ketiga?', 'Tidak wajib; MediaQuery dan LayoutBuilder cukup. Paket seperti flutter_adaptive_scaffold membantu pola umum.'], ['Bagaimana dengan ukuran font?', 'Pakai tema dan skala teks sistem; hindari ukuran absolut yang dihitung dari lebar layar.'], ['Bagaimana mendukung web dan desktop?', 'Tambahkan platform lewat flutter create, perhatikan input mouse/keyboard, dan batasi lebar konten.']],
        sources: [['Flutter: Adaptive and responsive design', 'https://docs.flutter.dev/ui/adaptive-responsive'], ['Material 3: Window size classes', 'https://m3.material.io/foundations/layout/applying-layout/window-size-classes'], ['API: LayoutBuilder', 'https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html'], ['Flutter: Accessibility', 'https://docs.flutter.dev/ui/accessibility-and-internationalization/accessibility']],
    },

    {
        slug: 'testing-flutter-unit-test-widget-test-dan-integration-test',
        title: 'Testing Flutter: Unit, Widget, dan Integration Test',
        description: 'Memahami tiga tingkat pengujian Flutter: unit test, widget test, dan integration test, piramida pengujian, mocking, golden test, dan contoh unit test Dart yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['testing Flutter', 'unit test', 'widget test', 'integration test', 'mock'], cta: 'jasa',
        prereq: ['dasar Dart', 'widget Flutter'],
        lead: 'Tanpa tes, setiap perubahan adalah taruhan: memperbaiki satu layar bisa merusak layar lain tanpa ketahuan sampai pengguna mengeluh. Flutter menyediakan tiga tingkat pengujian dengan biaya dan manfaat berbeda. Kuncinya memilih tingkat yang tepat untuk setiap jenis kode.',
        body: [
            { objectives: ['menjelaskan perbedaan unit, widget, dan integration test', 'menerapkan piramida pengujian pada aplikasi Flutter', 'menulis unit test dengan pola Arrange-Act-Assert', 'memakai fake dan mock untuk memisahkan dependensi', 'mengenal golden test dan menjalankan semua tes dengan flutter test'] },
            NOTE_FLUTTER,
            { h2: 'Tiga tingkat' },
            { table: { head: ['Tingkat', 'Menguji', 'Kecepatan', 'Contoh'], rows: [['Unit test', 'Fungsi/kelas tunggal, tanpa UI', 'Milidetik', 'Validator, model.fromJson, perhitungan total, Cubit'], ['Widget test', 'Satu widget/layar dalam lingkungan tes Flutter', 'Detik (cepat)', 'Tombol menambah jumlah; form menampilkan galat'], ['Integration test', 'Aplikasi utuh di perangkat/emulator', 'Lambat (menit)', 'Alur login hingga checkout']] } },
            { svg: 'diagram', w: 620, h: 200, label: 'Piramida pengujian', nodes: [{ id: 'a', x: 310, y: 40, shape: 'rect', w: 160, h: 40, t: 'Integration (sedikit)' }, { id: 'b', x: 310, y: 100, shape: 'rect', w: 300, h: 40, t: 'Widget test (cukup)' }, { id: 'c', x: 310, y: 160, shape: 'rect', w: 460, h: 40, t: 'Unit test (banyak)' }], edges: [] },
            { callout: 'Banyak di bawah, sedikit di atas: tes bawah cepat dan stabil sehingga bisa dijalankan setiap simpan; tes atas lambat dan rapuh sehingga cukup untuk alur kritis.', kind: 'info', title: 'Piramida' },
            { h2: 'Unit test: Arrange, Act, Assert' },
            { code: dart`// test/keranjang_test.dart
import 'package:flutter_test/flutter_test.dart';
import 'package:toko/keranjang.dart';

void main() {
  group('Keranjang', () {
    late Keranjang keranjang;
    setUp(() => keranjang = Keranjang());                 // keadaan segar untuk setiap tes

    test('total harga menjumlahkan harga x jumlah', () {
      keranjang.tambah('Kopi', 20000);                    // Arrange / Act
      keranjang.tambah('Kopi', 20000);
      keranjang.tambah('Teh', 15000);
      expect(keranjang.totalHarga, 55000);                // Assert
    });

    test('mengurangi hingga nol menghapus item', () {
      keranjang.tambah('Teh', 15000);
      keranjang.kurang('Teh');
      expect(keranjang.item, isEmpty);
    });

    test('mengurangi item yang tidak ada tidak melempar galat', () {
      expect(() => keranjang.kurang('Gula'), returnsNormally);
    });
  });
}
// jalankan:  flutter test`, lang: 'dart', caption: 'Satu tes, satu perilaku, dengan nama yang menjelaskan apa yang diharapkan. group mengelompokkan, setUp menyiapkan keadaan baru agar tes tidak saling memengaruhi.' },
            { h2: 'Contoh yang dijalankan: mini test runner' },
            `Berikut logika yang sama dijalankan sungguhan dengan Dart murni memakai pembungkus kecil yang meniru <code>test</code>/<code>expect</code>. Di proyek nyata Anda memakai paket <code>test</code> atau <code>flutter_test</code>.`,
            { code: dart`class Diskon {
  static int hitung(int harga, {required int persen, int maks = 50000}) {
    if (persen < 0 || persen > 100) throw ArgumentError('persen harus 0-100');
    final potongan = harga * persen ~/ 100;
    return potongan > maks ? maks : potongan;
  }
}

int lulus = 0, gagal = 0;
void test(String nama, void Function() isi) {
  try { isi(); lulus++; print('  ok    \$nama'); }
  catch (e) { gagal++; print('  GAGAL \$nama: \$e'); }
}
void harapkan(Object? aktual, Object? benar) {
  if (aktual != benar) throw 'diharapkan \$benar, didapat \$aktual';
}

void main() {
  test('diskon 10% dari 100000 = 10000', () => harapkan(Diskon.hitung(100000, persen: 10), 10000));
  test('diskon dibatasi maksimum', () => harapkan(Diskon.hitung(1000000, persen: 20), 50000));
  test('persen 0 = tanpa potongan', () => harapkan(Diskon.hitung(80000, persen: 0), 0));
  test('persen di luar rentang melempar ArgumentError', () {
    try { Diskon.hitung(1000, persen: 150); throw 'tidak melempar'; }
    on ArgumentError { /* sesuai harapan */ }
  });
  test('sengaja salah untuk melihat laporan gagal', () => harapkan(Diskon.hitung(100000, persen: 10), 9999));
  print('\$lulus lulus, \$gagal gagal');
}`, lang: 'dart', run: true, caption: 'Perhatikan tes batas (persen 0, di luar rentang, melewati maksimum): bug paling sering bersembunyi di tepi. Satu tes sengaja gagal agar Anda melihat bentuk laporan kegagalan.' },
            { h2: 'Memisahkan dependensi: fake dan mock' },
            { code: dart`// Kode produksi bergantung pada antarmuka, bukan implementasi jaringan
abstract class RepositoriProduk { Future<List<Produk>> semua(); }

class ViewModelProduk {
  ViewModelProduk(this._repo);
  final RepositoriProduk _repo;
  Future<String> ringkasan() async {
    final daftar = await _repo.semua();
    return daftar.isEmpty ? 'Belum ada produk' : '\${daftar.length} produk';
  }
}

// Fake: implementasi sederhana buatan tangan
class RepoPalsu implements RepositoriProduk {
  RepoPalsu(this.data);
  final List<Produk> data;
  @override Future<List<Produk>> semua() async => data;
}

class RepoGagal implements RepositoriProduk {
  @override Future<List<Produk>> semua() async => throw Exception('tidak ada jaringan');
}

test('ringkasan saat kosong', () async {
  expect(await ViewModelProduk(RepoPalsu([])).ringkasan(), 'Belum ada produk');
});
test('galat jaringan diteruskan', () {
  expect(ViewModelProduk(RepoGagal()).ringkasan(), throwsException);
});
// Mock otomatis: paket mocktail (when(() => repo.semua()).thenAnswer(...)) dan verify(...)`, lang: 'dart', caption: 'Tes tidak boleh memanggil jaringan sungguhan: lambat, tidak stabil, dan tidak bisa mensimulasikan kegagalan. Injeksi dependensi lewat konstruktor memungkinkan penggantian itu.' },
            { h2: 'Widget test' },
            { code: dart`testWidgets('menambah jumlah saat tombol ditekan', (tester) async {
  await tester.pumpWidget(const MaterialApp(home: Penghitung()));

  expect(find.text('0'), findsOneWidget);                 // keadaan awal

  await tester.tap(find.byIcon(Icons.add));               // ketuk tombol
  await tester.pump();                                     // bangun ulang frame

  expect(find.text('1'), findsOneWidget);
  expect(find.text('0'), findsNothing);
});

testWidgets('form menampilkan galat bila surel salah', (tester) async {
  await tester.pumpWidget(const MaterialApp(home: Scaffold(body: FormDaftar())));
  await tester.enterText(find.byType(TextFormField).at(1), 'bukan-surel');
  await tester.tap(find.text('Daftar'));
  await tester.pumpAndSettle();                            // tunggu animasi/frame selesai
  expect(find.text('Format surel belum benar.'), findsOneWidget);
});`, lang: 'dart', caption: 'Pola: pumpWidget → find → tap/enterText → pump → expect. Cari widget lewat teks, ikon, tipe, atau Key. Semantics label juga membantu aksesibilitas sekaligus tes.' },
            { h2: 'Integration test dan golden test' },
            { ul: ['<b>Integration test</b> (paket <code>integration_test</code>) menjalankan aplikasi utuh di emulator/perangkat dan menggerakkannya seperti pengguna. Jalankan: <code>flutter test integration_test</code>. Pakai untuk 3-5 alur kritis (daftar, masuk, beli).', '<b>Golden test</b> membandingkan tangkapan layar widget dengan berkas gambar acuan: <code>await expectLater(find.byType(Kartu), matchesGoldenFile("kartu.png"))</code>. Perbarui acuan dengan <code>flutter test --update-goldens</code>. Berguna untuk mencegah regresi visual, tetapi rapuh antar platform.', '<b>Cakupan</b>: <code>flutter test --coverage</code> menghasilkan lcov. Cakupan adalah petunjuk, bukan tujuan; 100% cakupan dengan tes tanpa asersi tidak berarti.', '<b>CI</b>: jalankan flutter analyze dan flutter test pada setiap pull request.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tes mana yang paling banyak dalam piramida?', options: ['Unit test', 'Integration test', 'Manual'], answer: 0, why: 'Cepat dan murah.' }, { q: 'Mengapa tes tidak memanggil API sungguhan?', options: ['Lambat, tidak stabil, sulit mensimulasikan galat', 'Tidak diizinkan', 'Tidak ada gunanya'], answer: 0, why: 'Gunakan fake/mock.' }, { q: 'pumpAndSettle dipakai untuk...', options: ['Menunggu animasi dan frame selesai', 'Menghapus tes', 'Memulai server'], answer: 0, why: 'Memastikan UI stabil.' }] },
            { exercise: [['Tulis tiga kasus uji untuk fungsi yang memvalidasi umur 17-100.', 'Batas bawah (17 valid, 16 tidak), batas atas (100 valid, 101 tidak), dan input bukan angka.'], ['Mengapa setUp penting dalam group?', 'Memberi keadaan baru pada tiap tes sehingga tidak saling bergantung.'], ['Kapan golden test berguna?', 'Untuk widget dengan tampilan penting yang tidak boleh berubah tak sengaja (kartu, tema); hati-hati dengan perbedaan font antar platform.'], ['Apa risiko integration test berlebihan?', 'Lambat dan rapuh sehingga pengembang mulai mengabaikannya; batasi pada alur kritis.']] },
            { summary: ['Tiga tingkat: unit (banyak, cepat), widget (cukup), integration (sedikit, kritis).', 'Pola Arrange-Act-Assert; satu tes satu perilaku; uji nilai batas dan galat.', 'Pisahkan dependensi lewat antarmuka dan fake/mocktail.', 'Jalankan flutter analyze dan flutter test di CI.'] },
        ],
        faq: [['Apakah wajib TDD?', 'Tidak wajib, tetapi menulis tes bersamaan dengan kode (terutama untuk logika) membuat desain lebih mudah diuji.'], ['Berapa target cakupan?', 'Tidak ada angka ajaib; fokus pada logika bisnis dan alur kritis, 70-80% pada logika sudah baik.'], ['Bagaimana menguji kode async dan Stream?', 'Gunakan async/await dalam tes, expectLater dengan emitsInOrder untuk Stream.']],
        sources: [['Flutter: Testing overview', 'https://docs.flutter.dev/testing/overview'], ['Flutter: Unit testing', 'https://docs.flutter.dev/cookbook/testing/unit/introduction'], ['Flutter: Widget testing', 'https://docs.flutter.dev/cookbook/testing/widget/introduction'], ['mocktail', 'https://pub.dev/packages/mocktail']],
    },

    {
        slug: 'rilis-aplikasi-flutter-build-apk-aab-signing-dan-play-store',
        title: 'Rilis Aplikasi Flutter: APK, AAB, Signing, Play Store',
        description: 'Langkah merilis aplikasi Flutter ke Android: identitas dan versi, keystore signing, build AAB, obfuscation, pengujian internal, dan checklist Play Store.',
        date: D, category: C, level: 'Menengah', tags: ['rilis Flutter', 'APK', 'AAB', 'Play Store', 'signing'], cta: 'jasa',
        prereq: ['aplikasi Flutter yang berjalan', 'akun pengembang Google Play'],
        lead: 'Aplikasi yang berjalan di emulator belum tentu siap dirilis. Ada identitas aplikasi, penandatanganan, versi, pengecilan kode, pengujian pada perangkat nyata, dan aturan toko yang harus dilewati. Pekerjaan ini membosankan tetapi berulang, sehingga layak dibuat sebagai daftar periksa dan diotomasi.',
        body: [
            { objectives: ['menyiapkan identitas aplikasi: nama, ID paket, ikon, dan versi', 'membuat keystore dan mengonfigurasi signing dengan aman', 'membangun AAB untuk Play Store dan APK untuk distribusi langsung', 'memahami R8, obfuscation, dan simbol debug', 'mengikuti jalur pengujian internal sampai produksi dan checklist kebijakan'] },
            NOTE_FLUTTER,
            { h2: 'Alur rilis' },
            { svg: 'flow', label: 'Dari kode ke toko', steps: [{ t: 'Siapkan identitas', d: 'nama, applicationId, ikon, splash, versi' }, { t: 'Buat keystore dan signing', d: 'kunci unggah disimpan aman' }, { t: 'Bangun AAB rilis', d: 'flutter build appbundle --release' }, { t: 'Uji internal', d: 'track pengujian internal Play Console' }, { t: 'Rilis bertahap', d: 'persentase pengguna, pantau crash' }] },
            { h2: '1. Identitas dan versi' },
            { code: dart`# pubspec.yaml
name: toko
version: 1.2.0+7          # 1.2.0 = nama versi (terlihat pengguna), 7 = kode versi (HARUS naik setiap unggahan)

# android/app/build.gradle (atau build.gradle.kts)
# applicationId "id.web.muchson.toko"   <- unik, permanen: tidak bisa diganti setelah dirilis
# minSdkVersion / targetSdkVersion mengikuti syarat Play Store terbaru

# android/app/src/main/AndroidManifest.xml
# android:label="Toko Kopi"            <- nama di layar utama
# <uses-permission android:name="android.permission.INTERNET"/>   <- hanya izin yang benar-benar dibutuhkan`, lang: 'bash', caption: 'applicationId tidak dapat diubah setelah rilis. Pilih dengan hati-hati, biasanya kebalikan nama domain.' },
            { code: 'dart run flutter_launcher_icons\ndart run flutter_native_splash:create', lang: 'bash', caption: 'Ikon dan splash screen dapat dihasilkan dari satu gambar sumber memakai paket flutter_launcher_icons dan flutter_native_splash.' },
            { h2: '2. Keystore dan signing' },
            { code: 'keytool -genkey -v -keystore upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload', lang: 'bash' },
            { code: dart`# android/key.properties   <- JANGAN di-commit (masukkan ke .gitignore)
storePassword=<kata-sandi>
keyPassword=<kata-sandi>
keyAlias=upload
storeFile=/aman/lokasi/upload-keystore.jks

# android/app/build.gradle: baca key.properties dan pasang signingConfigs.release
# (lihat dokumentasi "Build and release an Android app" untuk potongan Gradle terkini)`, lang: 'bash', caption: 'Dengan Play App Signing, Google menyimpan kunci penandatangan akhir dan Anda memakai kunci unggah. Jika kunci unggah hilang, Anda dapat meminta reset lewat Google; tanpa Play App Signing, kunci yang hilang berarti tidak bisa memperbarui aplikasi.' },
            { callout: 'Cadangkan keystore dan kata sandinya di tempat aman (pengelola kata sandi, brankas terenkripsi), terpisah dari repositori. <b>Jangan pernah</b> menaruh keystore atau key.properties di Git. Siapa pun yang memegang kunci dapat menerbitkan pembaruan atas nama Anda.', kind: 'warn', title: 'Rahasia' },
            { h2: '3. Membangun' },
            { code: 'flutter clean\nflutter pub get\nflutter analyze\nflutter test\n\n# Play Store: App Bundle (ukuran unduhan lebih kecil per perangkat)\nflutter build appbundle --release --obfuscate --split-debug-info=build/simbol\n\n# distribusi langsung / uji: APK per arsitektur\nflutter build apk --release --split-per-abi', lang: 'bash', caption: 'Hasil: build/app/outputs/bundle/release/app-release.aab. Simpan folder simbol (--split-debug-info) agar jejak crash dapat dibaca kembali.' },
            { table: { head: ['Format', 'Dipakai untuk', 'Catatan'], rows: [['AAB (.aab)', 'Unggah ke Google Play', 'Wajib untuk aplikasi baru; Google membuat APK optimal per perangkat'], ['APK (.apk)', 'Distribusi langsung, uji internal, toko lain', '--split-per-abi menghasilkan berkas lebih kecil per arsitektur'], ['IPA', 'App Store (iOS)', 'Butuh Mac, Xcode, dan akun Apple Developer berbayar']] } },
            { h2: 'Contoh yang dijalankan: kode versi' },
            { code: dart`// Periksa urutan versi dari pubspec seperti yang dilakukan toko: kode versi harus naik.
class Versi {
  Versi(this.nama, this.kode);
  final String nama; final int kode;
  factory Versi.dari(String s) {                        // "1.2.0+7"
    final bagian = s.split('+');
    return Versi(bagian[0], int.parse(bagian[1]));
  }
  @override String toString() => '\$nama+\$kode';
}

String periksa(Versi terakhir, Versi baru) {
  if (baru.kode <= terakhir.kode) return 'DITOLAK: kode versi harus lebih besar dari \${terakhir.kode}';
  return 'diterima';
}

void main() {
  final terakhir = Versi.dari('1.2.0+7');
  for (final s in ['1.2.0+7', '1.2.1+6', '1.2.1+8', '2.0.0+9']) {
    print('\${terakhir} -> \$s : \${periksa(terakhir, Versi.dari(s))}');
  }
}`, lang: 'dart', run: true, caption: 'Kesalahan paling umum saat unggah: lupa menaikkan angka setelah tanda plus. Anda dapat menaikkannya otomatis di CI (misalnya dari nomor build).' },
            { h2: '4. Pengecilan dan keamanan kode' },
            { ul: ['<b>R8/ProGuard</b> mengecilkan dan mengaburkan kode Java/Kotlin pada build rilis (aktif secara bawaan dengan minify); tambahkan aturan keep untuk pustaka yang memakai refleksi.', '<b>--obfuscate</b> mengaburkan nama Dart; simpan simbol untuk membaca crash.', 'Obfuscation memperlambat rekayasa balik tetapi <b>bukan perlindungan rahasia</b>: jangan menanam kunci API privat di aplikasi; taruh di server.', 'Aktifkan <b>Crashlytics</b> atau Sentry untuk melihat crash nyata dan unggah simbol agar jejaknya terbaca.'] },
            { h2: '5. Play Console' },
            { ol: ['Buat aplikasi dan isi detail: nama, deskripsi singkat/panjang, ikon 512x512, grafik fitur 1024x500, tangkapan layar.', 'Isi <b>Konten aplikasi</b>: kebijakan privasi (URL), deklarasi keamanan data, peringkat konten, target audiens, izin sensitif.', 'Unggah AAB ke track <b>Pengujian internal</b> dan undang penguji; uji pada perangkat nyata.', 'Untuk akun pribadi baru, ikuti syarat pengujian tertutup yang berlaku (jumlah penguji dan durasi) sebelum mengajukan produksi; periksa kebijakan terbaru di Play Console.', 'Rilis ke <b>produksi bertahap</b> (misalnya 10% → 50% → 100%) dan pantau crash dan ulasan sebelum menaikkan.', 'Pasang jalur pembaruan: setiap rilis menaikkan kode versi; baca catatan rilis dalam bahasa pengguna.'] },
            { callout: 'Kebijakan Play Store dan App Store berubah dari waktu ke waktu (versi API target minimum, deklarasi data, syarat akun baru). Selalu cek halaman kebijakan resmi sebelum rilis, bukan hanya panduan lama.', kind: 'info', title: 'Cek kebijakan terbaru' },
            { h2: 'Checklist sebelum menekan Rilis' },
            { ul: ['flutter analyze dan flutter test lulus', 'Nama, ikon, splash, dan versi benar; kode versi naik', 'Tidak ada log debug, URL pengembangan, atau kunci rahasia tertinggal', 'Izin minimal dan dijelaskan; kebijakan privasi tersedia', 'Diuji di perangkat nyata (RAM kecil, Android lama, koneksi lambat, mode gelap, teks besar)', 'Crash reporting aktif dan simbol tersimpan', 'Keystore dicadangkan dengan aman'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Yang harus naik setiap unggahan baru?', options: ['Kode versi (angka setelah +)', 'Nama aplikasi', 'Ukuran berkas'], answer: 0, why: 'Toko menolak kode versi yang tidak lebih besar.' }, { q: 'Apakah keystore boleh di Git?', options: ['Tidak, simpan terpisah dan aman', 'Boleh di repositori publik', 'Boleh jika diberi nama lain'], answer: 0, why: 'Pemegang kunci dapat menerbitkan pembaruan.' }, { q: 'Obfuscation melindungi...', options: ['Menyulitkan rekayasa balik, bukan menyembunyikan rahasia', 'Semua rahasia API', 'Dari virus'], answer: 0, why: 'Rahasia tetap harus di server.' }] },
            { exercise: [['Versi 1.4.2+18 akan dirilis dengan perbaikan kecil. Tulis versi berikutnya.', '1.4.3+19 (nama versi naik patch, kode versi naik minimal satu).'], ['Mengapa AAB lebih baik daripada APK untuk Play Store?', 'Google membuat APK yang dioptimalkan per perangkat sehingga unduhan lebih kecil.'], ['Mengapa rilis bertahap?', 'Membatasi dampak bug serius: hanya sebagian pengguna terkena, dan Anda dapat menghentikan peluncuran.'], ['Apa yang disimpan saat memakai --split-debug-info?', 'Berkas simbol untuk menerjemahkan jejak crash yang dikaburkan kembali menjadi nama asli.']] },
            { summary: ['Siapkan identitas: applicationId permanen, ikon, nama, versi (nama+kode).', 'Keystore dan key.properties disimpan aman, tidak di Git.', 'Bangun AAB rilis; simpan simbol; analisis dan tes lebih dulu.', 'Uji internal, rilis bertahap, pantau crash; ikuti kebijakan toko terbaru.'] },
        ],
        faq: [['Apakah bisa tanpa Play Store?', 'Bisa: bagikan APK langsung, lewat Firebase App Distribution, atau toko lain; pengguna perlu mengizinkan pemasangan dari sumber luar.'], ['Bagaimana rilis iOS?', 'Perlu Mac, Xcode, akun Apple Developer, sertifikat dan provisioning profile, lalu TestFlight dan App Store Connect.'], ['Bisakah rilis diotomasi?', 'Ya: GitHub Actions atau Codemagic untuk build, tes, penandatanganan, dan unggah dengan fastlane.']],
        sources: [['Flutter: Build and release an Android app', 'https://docs.flutter.dev/deployment/android'], ['Flutter: Obfuscate Dart code', 'https://docs.flutter.dev/deployment/obfuscate'], ['Play Console Help', 'https://support.google.com/googleplay/android-developer'], ['Flutter: CI/CD', 'https://docs.flutter.dev/deployment/cd']],
    },
];
