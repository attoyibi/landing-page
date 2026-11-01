const D = '2026-10-30';
const C = 'Flutter & Mobile';
const js = String.raw;
// Dart memakai $ untuk interpolasi; di template JavaScript tulis \$ (atau \${...}) dan tag ini mengembalikannya menjadi $
const dart = (strings) => strings.raw.map(r => r.split('\\$').join('$')).join('');

const REF_FLUTTER = ['Flutter Documentation', 'https://docs.flutter.dev/'];
const NOTE_FLUTTER = { callout: 'Contoh Flutter ditampilkan sebagai kode yang mengikuti dokumentasi Flutter 3.x (Material 3, Dart 3). Bagian logika Dart murni dijalankan sungguhan dengan Dart SDK agar keluarannya dapat dibuktikan; kode yang butuh Flutter (widget) tidak dijalankan di halaman ini.', kind: 'info', title: 'Tentang contoh kode' };

export default [
    {
        slug: 'state-management-flutter-provider-riverpod-dan-bloc-dibandingkan',
        title: 'State Management Flutter: Provider, Riverpod, dan Bloc',
        description: 'Bandingkan state management Flutter: setState, Provider, Riverpod, dan Bloc/Cubit, kapan memakai masing-masing, dengan contoh keranjang belanja yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['state management', 'Provider', 'Riverpod', 'Bloc', 'Flutter'], cta: 'jasa',
        prereq: ['StatefulWidget dan setState', 'async Dart'],
        lead: 'Pertanyaan yang paling sering muncul dari pemula Flutter: "pakai state management apa?" Jawaban jujurnya: tergantung. Semua pustaka menyelesaikan masalah yang sama (membagikan state antar widget dan memisahkannya dari tampilan) dengan filosofi berbeda. Memahami masalahnya lebih dulu membuat pilihan menjadi jelas, dan memindah pustaka kemudian menjadi jauh lebih mudah.',
        body: [
            { objectives: ['menjelaskan masalah yang diselesaikan state management', 'membedakan state lokal (ephemeral) dan state aplikasi', 'memahami pola ChangeNotifier + Provider, Notifier + Riverpod, dan Cubit/Bloc', 'memisahkan logika dari tampilan agar mudah diuji', 'memilih pendekatan sesuai ukuran dan tim proyek'] },
            NOTE_FLUTTER,
            { h2: 'Masalahnya' },
            { code: dart`// Dengan setState saja, data keranjang harus dikirim lewat banyak lapisan
HalamanBeranda(keranjang: keranjang, onTambah: tambah,
  child: DaftarProduk(keranjang: keranjang, onTambah: tambah,
    child: KartuProduk(produk: p, onTambah: tambah)))      // ikon keranjang di AppBar juga perlu jumlahnya...`, lang: 'dart', caption: 'Mengirim data dan callback lewat setiap tingkat widget ("prop drilling") membuat kode rapuh. State management menempatkan state di luar pohon widget dan memberi akses ke widget mana pun yang membutuhkannya.' },
            { table: { head: ['Jenis state', 'Contoh', 'Alat'], rows: [['Lokal (ephemeral)', 'Tab aktif, isi kotak ketik, animasi', 'StatefulWidget + setState'], ['Aplikasi (dibagi)', 'Keranjang, pengguna yang login, tema, pengaturan', 'Provider, Riverpod, Bloc, dll.'], ['Data server', 'Daftar produk dari API (cache, memuat, galat)', 'Riverpod AsyncNotifier, Bloc, atau pustaka cache']] } },
            { h2: 'Gagasan dasar: pola Observer' },
            `Semua pustaka bertumpu pada satu pola: objek yang menyimpan state, daftar pendengar, dan pemberitahuan saat state berubah. Berikut versi paling sederhananya dalam Dart murni (inilah yang dilakukan <code>ChangeNotifier</code>):`,
            { code: dart`class ChangeNotifierMini {
  final List<void Function()> _pendengar = [];
  void tambahPendengar(void Function() f) => _pendengar.add(f);
  void notifyListeners() { for (final f in _pendengar) { f(); } }
}

class ItemKeranjang {
  ItemKeranjang(this.nama, this.harga, this.jumlah);
  final String nama; final int harga; int jumlah;
}

class Keranjang extends ChangeNotifierMini {
  final Map<String, ItemKeranjang> _item = {};

  List<ItemKeranjang> get item => List.unmodifiable(_item.values);     // salinan baca-saja
  int get totalHarga => _item.values.fold(0, (j, i) => j + i.harga * i.jumlah);
  int get jumlahBarang => _item.values.fold(0, (j, i) => j + i.jumlah);

  void tambah(String nama, int harga) {
    _item.update(nama, (i) { i.jumlah++; return i; }, ifAbsent: () => ItemKeranjang(nama, harga, 1));
    notifyListeners();                                                   // beri tahu semua widget yang berlangganan
  }

  void kurang(String nama) {
    final i = _item[nama];
    if (i == null) return;
    if (--i.jumlah <= 0) _item.remove(nama);
    notifyListeners();
  }
}

void main() {
  final keranjang = Keranjang();
  // "widget" yang berlangganan: ikon di AppBar dan ringkasan total
  keranjang.tambahPendengar(() => print('  [ikon AppBar] badge = \${keranjang.jumlahBarang}'));
  keranjang.tambahPendengar(() => print('  [ringkasan]   total = Rp\${keranjang.totalHarga}'));

  print('tambah kopi');  keranjang.tambah('Kopi', 20000);
  print('tambah kopi');  keranjang.tambah('Kopi', 20000);
  print('tambah teh');   keranjang.tambah('Teh', 15000);
  print('kurang kopi');  keranjang.kurang('Kopi');
}`, lang: 'dart', run: true, caption: 'Logika keranjang berada di satu kelas Dart murni tanpa Flutter: mudah diuji, dan tidak peduli widget mana yang menampilkannya. Provider, Riverpod, dan Bloc pada dasarnya mengatur bagaimana objek seperti ini disediakan ke pohon widget dan bagaimana widget berlangganan.' },
            { h2: 'Provider + ChangeNotifier' },
            { code: dart`// pubspec: provider: ^6.x
class Keranjang extends ChangeNotifier {
  final Map<String, ItemKeranjang> _item = {};
  int get totalHarga => ...;

  void tambah(Produk p) { /* ubah _item */ notifyListeners(); }
}

void main() {
  runApp(
    ChangeNotifierProvider(                     // menyediakan satu instance ke seluruh pohon di bawahnya
      create: (_) => Keranjang(),
      child: const AplikasiSaya(),
    ),
  );
}

// membaca dan membangun ulang bila berubah
class IkonKeranjang extends StatelessWidget {
  const IkonKeranjang({super.key});
  @override
  Widget build(BuildContext context) {
    final jumlah = context.watch<Keranjang>().jumlahBarang;        // watch: rebuild saat berubah
    return Badge(label: Text('$jumlah'), child: const Icon(Icons.shopping_cart));
  }
}

// memanggil aksi tanpa ikut rebuild
FilledButton(
  onPressed: () => context.read<Keranjang>().tambah(produk),      // read: sekali, tidak berlangganan
  child: const Text('Tambah'),
)

// membangun ulang bagian kecil saja
Selector<Keranjang, int>(selector: (_, k) => k.totalHarga, builder: (_, total, __) => Text('Rp$total'))`, lang: 'dart', caption: 'Aturan emas: context.watch di dalam build, context.read di dalam callback (onPressed). Menukar keduanya menyebabkan rebuild berlebihan atau pembaruan yang tidak terjadi.' },
            { h2: 'Riverpod: provider global yang aman' },
            { code: dart`// pubspec: flutter_riverpod
final keranjangProvider = NotifierProvider<KeranjangNotifier, List<ItemKeranjang>>(KeranjangNotifier.new);

class KeranjangNotifier extends Notifier<List<ItemKeranjang>> {
  @override
  List<ItemKeranjang> build() => [];                      // state awal

  void tambah(Produk p) {
    final ada = state.any((i) => i.id == p.id);
    state = ada
        ? [for (final i in state) if (i.id == p.id) i.salinDengan(jumlah: i.jumlah + 1) else i]
        : [...state, ItemKeranjang.dari(p)];               // state immutable: selalu buat daftar BARU
  }
}

// provider turunan: dihitung otomatis dan di-cache
final totalProvider = Provider<int>((ref) => ref.watch(keranjangProvider).fold(0, (j, i) => j + i.harga * i.jumlah));

// data asinkron: status memuat/galat/data sudah dikelola
final produkProvider = FutureProvider<List<Produk>>((ref) => ref.watch(repositoryProvider).semua());

void main() => runApp(const ProviderScope(child: AplikasiSaya()));

class Beranda extends ConsumerWidget {
  const Beranda({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final produk = ref.watch(produkProvider);                                  // AsyncValue
    return produk.when(
      loading: () => const CircularProgressIndicator(),
      error: (e, _) => Text('Gagal: $e'),
      data: (daftar) => ListView(children: [for (final p in daftar) ListTile(title: Text(p.nama), onTap: () => ref.read(keranjangProvider.notifier).tambah(p))]),
    );
  }
}`, lang: 'dart', caption: 'Keunggulan Riverpod: provider tidak bergantung pada BuildContext (mudah diuji dan ditumpuk), ketergantungan antar provider otomatis, dan dukungan kelas satu untuk data asinkron. Sintaks pasti berubah antar versi mayor; ikuti dokumentasi resmi untuk versi yang Anda pakai.' },
            { h2: 'Bloc/Cubit: aliran peristiwa yang eksplisit' },
            { code: dart`// Cubit: kelas dengan emit(state baru)
class KeranjangState {
  const KeranjangState({this.item = const []});
  final List<ItemKeranjang> item;
}

class KeranjangCubit extends Cubit<KeranjangState> {
  KeranjangCubit() : super(const KeranjangState());
  void tambah(Produk p) => emit(KeranjangState(item: [...state.item, ItemKeranjang.dari(p)]));
}

BlocProvider(create: (_) => KeranjangCubit(), child: ...);
BlocBuilder<KeranjangCubit, KeranjangState>(builder: (context, state) => Text('\${state.item.length} barang'));
context.read<KeranjangCubit>().tambah(produk);

// Bloc penuh: event masuk, state keluar -> setiap perubahan tercatat sebagai peristiwa bernama
// on<TambahProduk>((event, emit) => emit(...));`, lang: 'dart', caption: 'Bloc menekankan aliran satu arah dan jejak peristiwa yang dapat diaudit dan diuji dengan tabel (peristiwa masuk → state keluar). Konsekuensinya: lebih banyak berkas dan seremoni, yang berguna di tim besar.' },
            { h2: 'Memilih' },
            { table: { head: ['Pendekatan', 'Kekuatan', 'Pertimbangan', 'Cocok untuk'], rows: [['setState + angkat state', 'Tanpa dependensi, sederhana', 'Tidak skala ke banyak layar', 'Prototipe, state lokal'], ['Provider (ChangeNotifier)', 'Mudah dipelajari, direkomendasikan dokumentasi Flutter untuk pemula', 'Bergantung BuildContext; mutable state perlu disiplin', 'Aplikasi kecil sampai menengah'], ['Riverpod', 'Aman terhadap waktu kompilasi, tanpa context, async kelas satu, mudah diuji', 'Konsep baru (provider, ref) dan pembaruan versi', 'Menengah sampai besar; banyak data server'], ['Bloc/Cubit', 'Struktur ketat, peristiwa terlacak, sangat teruji', 'Lebih banyak kode', 'Tim besar, domain kompleks, aplikasi perusahaan']] } },
            { callout: 'Jangan memilih berdasarkan popularitas di media sosial. Pilih yang <b>tim Anda pahami</b> dan konsisten memakainya. Yang terpenting lebih dari pustaka: <b>logika bisnis dipisahkan dari widget</b> sehingga dapat diuji sebagai kelas Dart biasa dan pustaka dapat diganti di kemudian hari.', kind: 'good', title: 'Pedoman' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'context.read vs context.watch pada Provider?', options: ['watch berlangganan dan rebuild; read hanya mengambil sekali', 'Sama saja', 'read berlangganan'], answer: 0, why: 'Pakai read di callback, watch di build.' }, { q: 'Mengapa state di Riverpod sebaiknya immutable?', options: ['Perubahan terdeteksi dari objek state baru', 'Lebih cepat dikompilasi', 'Wajib oleh Dart'], answer: 0, why: 'Pembaruan dengan membuat objek baru.' }, { q: 'Prinsip yang berlaku apa pun pustakanya?', options: ['Pisahkan logika dari widget', 'Selalu pakai Bloc', 'Hindari state'], answer: 0, why: 'Memudahkan pengujian dan penggantian.' }] },
            { exercise: [['Mengapa logika keranjang di kelas Dart murni mudah diuji?', 'Tidak bergantung widget atau BuildContext; cukup membuat objek, memanggil method, dan memeriksa hasil.'], ['Kapan setState sudah cukup?', 'Untuk state lokal satu widget (tab aktif, toggle, isi form sementara) yang tidak dibagi ke widget lain.'], ['Apa risiko memakai context.watch di dalam onPressed?', 'watch hanya boleh di build; di callback ia melempar galat. Pakai context.read.'], ['Apa gunanya Selector pada Provider?', 'Membangun ulang widget hanya saat bagian state tertentu berubah, mengurangi rebuild.']] },
            { summary: ['State management membagikan state aplikasi tanpa prop drilling dan memisahkan logika dari tampilan.', 'Pola dasar: objek state + pendengar + notifikasi (ChangeNotifier).', 'Provider sederhana, Riverpod aman dan kuat untuk data asinkron, Bloc ketat dan terlacak.', 'Pilih yang dipahami tim; yang utama: logika bisnis terpisah dan teruji.'] },
        ],
        faq: [['Apakah GetX layak dipakai?', 'Populer karena ringkas, tetapi memiliki kritik soal pola yang mencampur banyak tanggung jawab dan pemeliharaan; evaluasi dengan hati-hati untuk proyek jangka panjang.'], ['Bolehkah mencampur beberapa pustaka?', 'Bisa, tetapi tambah beban kognitif; lebih baik satu pendekatan utama.'], ['Bagaimana dengan state yang bertahan saat aplikasi ditutup?', 'Simpan ke penyimpanan lokal (shared_preferences, basis data) dan muat saat start; pustaka seperti hydrated_bloc mengotomasinya.']],
        sources: [['Flutter: State management', 'https://docs.flutter.dev/data-and-backend/state-mgmt/options'], ['Provider package', 'https://pub.dev/packages/provider'], ['Riverpod', 'https://riverpod.dev/'], ['Bloc library', 'https://bloclibrary.dev/']],
    },

    {
        slug: 'navigasi-flutter-navigator-go-router-dan-deep-link',
        title: 'Navigasi Flutter: Navigator, go_router, dan Deep Link',
        description: 'Pelajari navigasi Flutter: Navigator push dan pop, kirim data antar layar, routing go_router dengan parameter path, redirect login, dan deep link.',
        date: D, category: C, level: 'Menengah', tags: ['navigasi Flutter', 'go_router', 'Navigator', 'routing', 'deep link'], cta: 'jasa',
        prereq: ['widget Flutter', 'StatefulWidget'],
        lead: 'Aplikasi nyata punya banyak layar: daftar, detail, keranjang, profil. Cara berpindah di antaranya memengaruhi tombol kembali, tautan yang dapat dibagikan, dan kemampuan membuka aplikasi langsung ke halaman tertentu dari notifikasi atau browser. Flutter menyediakan Navigator klasik dan, untuk kebutuhan yang lebih besar, routing deklaratif seperti go_router.',
        body: [
            { objectives: ['memakai Navigator.push dan pop serta mengirim data antar layar', 'memahami tumpukan navigasi (stack) dan hasil dari layar yang ditutup', 'mendefinisikan rute dengan go_router, termasuk parameter path dan query', 'melindungi rute dengan redirect (login)', 'menjelaskan deep link dan cara kerjanya secara umum'] },
            NOTE_FLUTTER,
            { h2: 'Tumpukan layar' },
            { svg: 'diagram', w: 620, h: 190, label: 'Tumpukan navigasi', nodes: [{ id: 'a', x: 110, y: 150, shape: 'rect', w: 150, h: 36, t: 'Beranda (dasar)' }, { id: 'b', x: 110, y: 100, shape: 'rect', w: 150, h: 36, t: 'Detail Produk' }, { id: 'c', x: 110, y: 50, shape: 'rect', w: 150, h: 36, t: 'Keranjang (atas)' }, { id: 'n', x: 400, y: 100, shape: 'text', w: 340, h: 90, t: 'push menambah layar di atas; pop membuang layar teratas dan kembali ke yang di bawahnya. Tombol kembali (Android) menjalankan pop.' }], edges: [] },
            { h2: 'Navigator dasar' },
            { code: dart`// pindah ke layar baru
Navigator.push(
  context,
  MaterialPageRoute(builder: (_) => DetailProduk(produk: produk)),     // data lewat konstruktor
);

// kembali
Navigator.pop(context);

// kembali SAMBIL membawa hasil
final hasil = await Navigator.push<bool>(context, MaterialPageRoute(builder: (_) => const KonfirmasiHapus()));
if (hasil == true && context.mounted) { /* hapus item */ }
// di KonfirmasiHapus:  Navigator.pop(context, true);

// ganti layar tanpa bisa kembali (mis. setelah login)
Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => const Beranda()));

// rute bernama (sederhana)
MaterialApp(routes: {'/': (_) => const Beranda(), '/keranjang': (_) => const Keranjang()});
Navigator.pushNamed(context, '/keranjang');`, lang: 'dart', caption: 'Periksa context.mounted setelah await sebelum memakai context lagi. Navigator klasik mudah dipakai, tetapi tidak menangani alamat (URL) dan deep link dengan baik; di sana go_router unggul.' },
            { h2: 'go_router: routing deklaratif' },
            { code: 'flutter pub add go_router', lang: 'bash' },
            { code: dart`import 'package:go_router/go_router.dart';

final router = GoRouter(
  initialLocation: '/',
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const Beranda(),
      routes: [
        GoRoute(
          path: 'produk/:id',                                   // /produk/42
          builder: (context, state) {
            final id = int.parse(state.pathParameters['id']!);
            return DetailProduk(id: id);
          },
        ),
        GoRoute(
          path: 'cari',                                          // /cari?q=kopi
          builder: (context, state) => HalamanCari(kata: state.uri.queryParameters['q'] ?? ''),
        ),
      ],
    ),
    GoRoute(path: '/masuk', builder: (context, state) => const Masuk()),
  ],
  errorBuilder: (context, state) => const HalamanTidakDitemukan(),
);

void main() => runApp(MaterialApp.router(routerConfig: router));

// berpindah
context.go('/produk/42');        // ganti seluruh tumpukan sesuai alamat (seperti membuka URL)
context.push('/produk/42');      // tambah di atas tumpukan (dapat kembali)
context.pop();`, lang: 'dart', caption: 'Setiap layar punya alamat. Alamat yang sama menghasilkan layar yang sama, bekerja di web, dan dapat dipakai deep link dan notifikasi. go_router dikelola tim Flutter.' },
            { h2: 'Cara kerja pencocokan rute (peragaan)' },
            { code: dart`class Rute {
  Rute(this.pola);
  final String pola;
  Map<String, String>? cocok(String alamat) {
    final p = pola.split('/').where((s) => s.isNotEmpty).toList();
    final a = Uri.parse(alamat).pathSegments.where((s) => s.isNotEmpty).toList();
    if (p.length != a.length) return null;
    final params = <String, String>{};
    for (var i = 0; i < p.length; i++) {
      if (p[i].startsWith(':')) { params[p[i].substring(1)] = a[i]; }
      else if (p[i] != a[i]) { return null; }
    }
    return params;
  }
}

void main() {
  final daftar = [Rute('/'), Rute('/produk/:id'), Rute('/pengguna/:nama/pesanan/:no')];
  for (final alamat in ['/', '/produk/42', '/pengguna/ani/pesanan/7?urut=baru', '/tidak/ada']) {
    String hasil = '404 (errorBuilder)';
    for (final r in daftar) {
      final m = r.cocok(alamat);
      if (m != null) { hasil = '\${r.pola} \$m'; break; }
    }
    print('\${alamat.padRight(34)} -> \$hasil');
  }
}`, lang: 'dart', run: true, caption: 'Router mencocokkan segmen alamat dengan pola dan mengambil parameter. Query string (?urut=baru) tidak ikut dicocokkan path, tetapi tersedia terpisah.' },
            { h2: 'Redirect: melindungi layar yang butuh login' },
            { code: dart`final router = GoRouter(
  refreshListenable: authNotifier,                         // router memeriksa ulang saat status login berubah
  redirect: (context, state) {
    final masuk = authNotifier.sudahMasuk;
    final menujuLogin = state.matchedLocation == '/masuk';

    if (!masuk && !menujuLogin) return '/masuk?dari=\${Uri.encodeComponent(state.matchedLocation)}';   // belum login -> ke layar masuk
    if (masuk && menujuLogin) return '/';                                                            // sudah login -> jangan tampilkan login
    return null;                                                                                     // null = lanjutkan seperti biasa
  },
  routes: [ /* ... */ ],
);`, lang: 'dart', caption: 'Pembatasan di sisi aplikasi hanya pengalaman pengguna. Keamanan sebenarnya tetap di server: setiap API memeriksa token dan hak akses.' },
            { h2: 'Navigasi bertab dan bersarang' },
            `Aplikasi dengan bilah navigasi bawah (Beranda, Cari, Profil) biasanya mempertahankan tumpukan terpisah untuk setiap tab sehingga berpindah tab tidak menghilangkan posisi pengguna. Di go_router ini dilakukan dengan <code>StatefulShellRoute.indexedStack</code>; Flutter menyediakan <code>NavigationBar</code> (Material 3) untuk tampilannya.`,
            { h2: 'Deep link' },
            { ul: ['<b>Deep link</b> membuka aplikasi langsung di layar tertentu dari luar: tautan di surel, notifikasi push, atau kode QR.', '<b>Android App Links / iOS Universal Links</b> memakai alamat web biasa (https://contoh.id/produk/42) yang ditautkan ke aplikasi lewat berkas verifikasi di server (assetlinks.json, apple-app-site-association). Bila aplikasi terpasang, alamat dibuka di aplikasi; bila tidak, di browser.', 'Flutter meneruskan alamat itu ke router; dengan go_router, alamat yang sama dengan rute Anda langsung bekerja.', '<b>Notifikasi</b>: sertakan alamat tujuan dalam payload dan arahkan dengan context.go saat diketuk.', '<b>Uji</b> dengan perintah adb (adb shell am start -a android.intent.action.VIEW -d "https://contoh.id/produk/42") dan xcrun simctl openurl di simulator iOS.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Perbedaan go dan push di go_router?', options: ['go mengganti tumpukan sesuai alamat; push menambah di atas', 'Sama', 'push mengganti'], answer: 0, why: 'push dapat kembali dengan pop.' }, { q: 'Kapan redirect mengembalikan null?', options: ['Tidak ada pengalihan; lanjut ke layar tujuan', 'Menutup aplikasi', 'Menampilkan galat'], answer: 0, why: 'null berarti tidak mengubah tujuan.' }, { q: 'Manfaat rute berbasis alamat?', options: ['Bisa dipakai deep link, web, dan notifikasi', 'Lebih kecil', 'Tanpa kode'], answer: 0, why: 'Setiap layar dapat dituju dari luar.' }] },
            { exercise: [['Tulis rute /pesanan/:no dan baca parameternya.', 'GoRoute(path: "/pesanan/:no", builder: (c, s) => DetailPesanan(no: s.pathParameters["no"]!))'], ['Mengapa tidak cukup melindungi layar hanya dengan redirect di aplikasi?', 'Pengguna dapat memodifikasi aplikasi atau memanggil API langsung; server wajib memeriksa autentikasi dan otorisasi.'], ['Bagaimana mengirim hasil dari layar pilihan alamat kembali ke layar sebelumnya?', 'Navigator.pop(context, alamatTerpilih) atau context.pop(alamat); layar pemanggil menunggu dengan await push.'], ['Mengapa layar bertab perlu tumpukan terpisah?', 'Agar berpindah tab tidak menghapus posisi dan state di tab lain.']] },
            { summary: ['Navigator mengelola tumpukan layar: push, pop, pushReplacement, dan hasil lewat pop.', 'go_router: rute deklaratif berbasis alamat, parameter path dan query, errorBuilder.', 'redirect melindungi rute (UX); keamanan sejati di server.', 'Deep link (App Links/Universal Links) bekerja dengan rute berbasis alamat dan perlu verifikasi domain.'] },
        ],
        faq: [['Apakah Navigator klasik sudah usang?', 'Tidak; ia tetap valid dan dipakai untuk dialog serta alur sederhana. Untuk aplikasi dengan banyak layar dan deep link, routing deklaratif lebih nyaman.'], ['Bagaimana mengirim objek besar antar layar?', 'Kirim ID lalu muat data di layar tujuan (dari state management atau repository), bukan objek lewat alamat.'], ['Alternatif go_router?', 'auto_route dan Beamer; go_router populer karena dipelihara tim Flutter.']],
        sources: [['Flutter: Navigation and routing', 'https://docs.flutter.dev/ui/navigation'], ['go_router package', 'https://pub.dev/packages/go_router'], ['Flutter: Deep linking', 'https://docs.flutter.dev/ui/navigation/deep-linking'], ['Android: App Links', 'https://developer.android.com/training/app-links']],
    },

    {
        slug: 'form-dan-validasi-flutter-textformfield-formkey-dan-keyboard',
        title: 'Form dan Validasi Flutter: TextFormField dan FormKey',
        description: 'Membuat form Flutter yang baik: Form dan GlobalKey, TextFormField, validator, jenis keyboard, fokus, dan controller, dengan logika validasi yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['form Flutter', 'validasi', 'TextFormField', 'Form key', 'input'], cta: 'jasa',
        prereq: ['StatefulWidget', 'dasar Dart'],
        lead: 'Form adalah titik kontak utama dengan pengguna: pendaftaran, pencarian, pemesanan. Kualitasnya terlihat pada hal kecil: keyboard yang sesuai jenis isian, pesan galat yang membantu, fokus yang berpindah dengan wajar, dan tombol yang tidak menjebak. Flutter menyediakan Form dan TextFormField yang membuat semua itu terkelola.',
        body: [
            { objectives: ['membangun form dengan Form, GlobalKey<FormState>, dan TextFormField', 'menulis validator sebagai fungsi murni yang mudah diuji', 'mengatur jenis keyboard, aksi tombol, fokus, dan obscureText', 'mengelola controller dan melepasnya di dispose', 'menangani submit, status mengirim, dan galat dari server'] },
            NOTE_FLUTTER,
            { h2: 'Form dasar' },
            { code: dart`class FormDaftar extends StatefulWidget {
  const FormDaftar({super.key});
  @override
  State<FormDaftar> createState() => _FormDaftarState();
}

class _FormDaftarState extends State<FormDaftar> {
  final _kunci = GlobalKey<FormState>();                 // pegangan untuk memvalidasi seluruh form
  final _nama = TextEditingController();
  final _surel = TextEditingController();
  final _sandi = TextEditingController();
  bool _kirim = false;

  @override
  void dispose() {
    _nama.dispose(); _surel.dispose(); _sandi.dispose();  // jangan lupa melepas controller
    super.dispose();
  }

  Future<void> _submit() async {
    if (!_kunci.currentState!.validate()) return;          // jalankan semua validator; berhenti bila ada galat
    setState(() => _kirim = true);
    try {
      await api.daftar(_nama.text.trim(), _surel.text.trim(), _sandi.text);
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Pendaftaran berhasil')));
    } finally {
      if (mounted) setState(() => _kirim = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _kunci,
      autovalidateMode: AutovalidateMode.onUserInteraction,   // validasi setelah pengguna menyentuh kolom
      child: Column(children: [
        TextFormField(
          controller: _nama,
          decoration: const InputDecoration(labelText: 'Nama lengkap'),
          textInputAction: TextInputAction.next,               // tombol keyboard "Lanjut" memindahkan fokus
          textCapitalization: TextCapitalization.words,
          validator: Validator.nama,
        ),
        TextFormField(
          controller: _surel,
          decoration: const InputDecoration(labelText: 'Surel'),
          keyboardType: TextInputType.emailAddress,            // keyboard dengan tombol @
          textInputAction: TextInputAction.next,
          autofillHints: const [AutofillHints.email],
          validator: Validator.surel,
        ),
        TextFormField(
          controller: _sandi,
          decoration: const InputDecoration(labelText: 'Kata sandi'),
          obscureText: true,
          textInputAction: TextInputAction.done,
          onFieldSubmitted: (_) => _submit(),
          validator: Validator.sandi,
        ),
        const SizedBox(height: 16),
        FilledButton(onPressed: _kirim ? null : _submit, child: Text(_kirim ? 'Mengirim...' : 'Daftar')),
      ]),
    );
  }
}`, lang: 'dart', caption: 'Tombol dinonaktifkan selama mengirim untuk mencegah kirim ganda. mounted diperiksa setelah await karena pengguna mungkin telah meninggalkan layar.' },
            { h2: 'Validator sebagai fungsi murni' },
            `Validator Flutter adalah fungsi <code>String? Function(String?)</code>: mengembalikan <b>pesan galat</b> atau <b>null</b> bila valid. Karena murni, ia dapat diuji tanpa Flutter sama sekali.`,
            { code: dart`class Validator {
  static String? nama(String? v) {
    final t = v?.trim() ?? '';
    if (t.isEmpty) return 'Nama wajib diisi.';
    if (t.length < 3) return 'Nama minimal 3 karakter.';
    return null;
  }

  static String? surel(String? v) {
    final t = v?.trim() ?? '';
    if (t.isEmpty) return 'Surel wajib diisi.';
    if (!RegExp(r'^[^\s@]+@[^\s@]+\.[^\s@]{2,}$').hasMatch(t)) return 'Format surel belum benar.';
    return null;
  }

  static String? sandi(String? v) {
    if (v == null || v.isEmpty) return 'Kata sandi wajib diisi.';
    if (v.length < 8) return 'Minimal 8 karakter.';
    if (!v.contains(RegExp(r'[0-9]'))) return 'Sertakan setidaknya satu angka.';
    return null;
  }

  static String? ponsel(String? v) {
    final digit = (v ?? '').replaceAll(RegExp(r'[^\d+]'), '');
    final norm = digit.startsWith('+62') ? '0' + digit.substring(3) : digit.startsWith('62') ? '0' + digit.substring(2) : digit;
    return RegExp(r'^08\d{8,11}$').hasMatch(norm) ? null : 'Nomor ponsel tidak valid.';
  }
}

void main() {
  int lulus = 0, gagal = 0;
  void uji(String nama, String? aktual, String? harapan) {
    final ok = aktual == harapan;
    ok ? lulus++ : gagal++;
    print('\${ok ? "LULUS" : "GAGAL"}  \$nama -> \$aktual');
  }

  uji('nama kosong', Validator.nama(''), 'Nama wajib diisi.');
  uji('nama pendek', Validator.nama('Al'), 'Nama minimal 3 karakter.');
  uji('nama valid', Validator.nama(' Ani '), null);
  uji('surel salah', Validator.surel('ani@x'), 'Format surel belum benar.');
  uji('surel valid', Validator.surel('ani@contoh.id'), null);
  uji('sandi tanpa angka', Validator.sandi('abcdefgh'), 'Sertakan setidaknya satu angka.');
  uji('sandi valid', Validator.sandi('rahasia123'), null);
  uji('ponsel +62', Validator.ponsel('+62 812-3456-7890'), null);
  uji('ponsel salah', Validator.ponsel('12345'), 'Nomor ponsel tidak valid.');
  print('\$lulus lulus, \$gagal gagal');
}`, lang: 'dart', run: true, caption: 'Tes ini berjalan tanpa emulator. Memisahkan validator dari widget adalah kebiasaan yang membuat form besar tetap terkendali.' },
            { h2: 'Keyboard dan pengalaman input' },
            { table: { head: ['Properti', 'Fungsi', 'Contoh'], rows: [['keyboardType', 'Jenis keyboard', 'emailAddress, phone, number, url, multiline'], ['textInputAction', 'Tombol aksi keyboard', 'next (lanjut), done (selesai), search, send'], ['textCapitalization', 'Huruf kapital otomatis', 'words (nama), sentences, characters'], ['inputFormatters', 'Menyaring atau memformat ketikan', 'FilteringTextInputFormatter.digitsOnly, batas panjang'], ['autofillHints', 'Mengisi otomatis dari pengelola kata sandi/kontak', 'email, password, name, telephoneNumber'], ['obscureText + ikon mata', 'Sembunyikan/tampilkan kata sandi', 'Toggle di suffixIcon'], ['autovalidateMode', 'Kapan memvalidasi', 'onUserInteraction (disarankan), disabled, always']] } },
            { code: dart`// membatasi ketikan hanya angka dan panjang 13
TextFormField(
  keyboardType: TextInputType.number,
  inputFormatters: [FilteringTextInputFormatter.digitsOnly, LengthLimitingTextInputFormatter(13)],
  decoration: const InputDecoration(labelText: 'Nomor ponsel', prefixText: '+62 '),
)

// pindah fokus manual
final _fokusSurel = FocusNode();
TextFormField(textInputAction: TextInputAction.next, onFieldSubmitted: (_) => _fokusSurel.requestFocus());
TextFormField(focusNode: _fokusSurel /* dispose di dispose() */);

// menutup keyboard saat mengetuk di luar
GestureDetector(onTap: () => FocusScope.of(context).unfocus(), child: formulir)`, lang: 'dart' },
            { h2: 'Galat dari server' },
            { callout: 'Validasi di aplikasi hanya kenyamanan. Server tetap memvalidasi dan dapat menolak (misalnya "surel sudah terdaftar"). Tampilkan galat server pada kolom yang tepat (dari respons 422) alih-alih satu pesan umum. Simpan galat server di state dan kembalikan dari validator: <code>validator: (v) =&gt; _galatServer["surel"]</code>.', kind: 'info', title: 'Dua lapis validasi' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Validator Flutter mengembalikan...', options: ['Pesan galat, atau null bila valid', 'true/false', 'Selalu string'], answer: 0, why: 'String? Function(String?).' }, { q: 'Mengapa TextEditingController perlu dispose?', options: ['Melepas sumber daya dan mencegah kebocoran', 'Agar cepat', 'Wajib untuk keyboard'], answer: 0, why: 'Controller memegang listener.' }, { q: 'Mode validasi yang ramah pengguna?', options: ['onUserInteraction', 'always sejak awal', 'Tidak pernah'], answer: 0, why: 'Tidak menegur sebelum pengguna menyentuh kolom.' }] },
            { exercise: [['Tulis validator untuk "umur" yang menerima bilangan bulat 17 sampai 100.', 'Gunakan int.tryParse; kembalikan pesan bila null atau di luar rentang, selain itu null.'], ['Mengapa nonaktifkan tombol saat mengirim?', 'Mencegah kirim ganda dan memberi umpan balik bahwa proses berjalan.'], ['Apa fungsi textInputAction.next?', 'Mengubah tombol keyboard menjadi "Lanjut" dan memindahkan fokus ke kolom berikutnya saat ditekan.'], ['Bagaimana menampilkan galat 422 dari server pada kolom surel?', 'Simpan pesan per kolom dan kembalikan dari validator kolom itu, lalu panggil validate() ulang.']] },
            { summary: ['Form + GlobalKey<FormState> + TextFormField; validate() menjalankan semua validator.', 'Validator murni String? Function(String?) mudah diuji tanpa Flutter.', 'keyboardType, textInputAction, inputFormatters, autofillHints memperbaiki pengalaman.', 'Dispose controller dan FocusNode; cegah kirim ganda; validasi ulang di server.'] },
        ],
        faq: [['Apakah perlu paket form seperti flutter_form_builder?', 'Untuk form besar dan dinamis ia mengurangi kode berulang; untuk form kecil, Form bawaan sudah cukup.'], ['Bagaimana validasi lintas kolom (konfirmasi sandi)?', 'Validator kolom kedua membandingkan dengan nilai controller kolom pertama.'], ['Bagaimana menyimpan draf form saat aplikasi ditutup?', 'Simpan nilai controller ke penyimpanan lokal secara berkala dan pulihkan di initState.']],
        sources: [['Flutter: Forms', 'https://docs.flutter.dev/cookbook/forms'], ['Flutter: Build a form with validation', 'https://docs.flutter.dev/cookbook/forms/validation'], ['API: TextFormField', 'https://api.flutter.dev/flutter/material/TextFormField-class.html'], ['Material Design: Text fields', 'https://m3.material.io/components/text-fields/overview']],
    },

    {
        slug: 'penyimpanan-lokal-flutter-shared-preferences-sqlite-dan-secure-storage',
        title: 'Penyimpanan Lokal Flutter: Preferences, SQLite, Secure Storage',
        description: 'Pilih penyimpanan lokal Flutter: shared_preferences, secure storage untuk token, SQLite untuk data terstruktur, migrasi skema, dan pola offline-first.',
        date: D, category: C, level: 'Menengah', tags: ['penyimpanan lokal', 'shared_preferences', 'SQLite', 'secure storage', 'offline'], cta: 'jasa',
        prereq: ['async Dart', 'JSON dan model Dart'],
        lead: 'Aplikasi seluler harus tetap berguna saat sinyal hilang di lift atau terowongan, dan harus mengingat pilihan pengguna antar sesi. Flutter tidak memiliki satu penyimpanan bawaan; Anda memilih sesuai jenis data: pengaturan kecil, rahasia, atau data terstruktur dalam jumlah besar. Salah pilih bisa berarti token tercuri atau aplikasi yang melambat.',
        body: [
            { objectives: ['memilih penyimpanan yang tepat untuk setiap jenis data', 'memakai shared_preferences untuk pengaturan sederhana', 'menyimpan token dan rahasia dengan flutter_secure_storage', 'memakai SQLite (sqflite/drift) untuk data relasional dan memahami migrasi skema', 'merancang pola offline-first sederhana'] },
            NOTE_FLUTTER,
            { h2: 'Memilih penyimpanan' },
            { table: { head: ['Data', 'Pilihan', 'Alasan'], rows: [['Pengaturan sederhana (tema, bahasa, sudah melihat onboarding)', 'shared_preferences', 'Pasangan kunci-nilai kecil, API mudah'], ['Token, kata sandi, kunci', 'flutter_secure_storage', 'Memakai Keychain (iOS) dan Keystore (Android) yang terenkripsi'], ['Data terstruktur dan relasi, pencarian, banyak baris', 'SQLite via sqflite, drift', 'Query SQL, indeks, transaksi, migrasi'], ['Objek dokumen tanpa skema ketat', 'Hive, Isar, ObjectBox', 'Cepat dan mudah, dengan model data NoSQL'], ['Berkas (gambar, PDF, ekspor)', 'path_provider + dart:io', 'Direktori dokumen/cache aplikasi'], ['Cache respons API', 'Basis data lokal atau paket cache (dio_cache_interceptor)', 'Mengurangi permintaan dan mendukung offline']] } },
            { callout: 'Jangan menyimpan token atau rahasia di <code>shared_preferences</code>: nilainya tersimpan sebagai teks biasa (XML/plist) yang dapat dibaca pada perangkat yang di-root atau dari cadangan. Gunakan penyimpanan aman untuk apa pun yang sensitif, dan ingat bahwa <b>apa pun yang ada di perangkat pengguna pada akhirnya dapat diakses oleh pengguna itu</b>.', kind: 'warn', title: 'Rahasia' },
            { h2: 'shared_preferences' },
            { code: dart`import 'package:shared_preferences/shared_preferences.dart';

Future<void> simpanTema(bool gelap) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setBool('tema_gelap', gelap);
  await prefs.setString('bahasa', 'id');
  await prefs.setStringList('pencarian_terakhir', ['kopi', 'teh']);
}

Future<bool> bacaTema() async {
  final prefs = await SharedPreferences.getInstance();
  return prefs.getBool('tema_gelap') ?? false;          // selalu beri nilai bawaan: kunci belum tentu ada
}

// Versi baru (SharedPreferencesAsync / WithCache) tersedia pada paket terbaru; ikuti dokumentasi paket.`, lang: 'dart', caption: 'Cocok untuk data kecil. Jangan menyimpan daftar besar atau JSON berukuran ratusan KB di sini; pakai basis data.' },
            { h2: 'flutter_secure_storage' },
            { code: dart`import 'package:flutter_secure_storage/flutter_secure_storage.dart';

const _aman = FlutterSecureStorage();

Future<void> simpanToken(String token) => _aman.write(key: 'token_akses', value: token);
Future<String?> bacaToken() => _aman.read(key: 'token_akses');
Future<void> hapusSemua() => _aman.deleteAll();            // saat keluar (logout)

// Praktik: baca token saat aplikasi mulai, simpan di state management (memori), hapus saat logout
// atau saat server menjawab 401. Token berumur pendek + refresh token membatasi dampak kebocoran.`, lang: 'dart' },
            { h2: 'SQLite untuk data terstruktur' },
            { code: dart`import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

Future<Database> bukaDb() async {
  final jalur = join(await getDatabasesPath(), 'toko.db');
  return openDatabase(
    jalur,
    version: 2,                                                   // naikkan saat skema berubah
    onCreate: (db, versi) async {
      await db.execute('''
        CREATE TABLE produk (
          id INTEGER PRIMARY KEY,
          nama TEXT NOT NULL,
          harga INTEGER NOT NULL,
          diperbarui INTEGER NOT NULL
        )''');
      await db.execute('CREATE INDEX idx_produk_nama ON produk (nama)');
    },
    onUpgrade: (db, lama, baru) async {                           // MIGRASI: ubah skema tanpa kehilangan data pengguna
      if (lama < 2) await db.execute('ALTER TABLE produk ADD COLUMN stok INTEGER NOT NULL DEFAULT 0');
    },
  );
}

Future<void> simpanBanyak(Database db, List<Produk> daftar) async {
  await db.transaction((txn) async {                              // semua atau tidak sama sekali; jauh lebih cepat
    for (final p in daftar) {
      await txn.insert('produk', p.keMap(), conflictAlgorithm: ConflictAlgorithm.replace);
    }
  });
}

Future<List<Produk>> cari(Database db, String kata) async {
  final baris = await db.query('produk', where: 'nama LIKE ?', whereArgs: ['%$kata%'], orderBy: 'nama', limit: 50);   // selalu pakai whereArgs
  return baris.map(Produk.dariMap).toList();
}`, lang: 'dart', caption: 'Migrasi (onUpgrade) adalah hal yang paling sering dilupakan: pengguna yang memperbarui aplikasi membawa basis data versi lama. Menghapus dan membuat ulang basis data berarti kehilangan data mereka.' },
            { callout: 'Alternatif modern: <b>drift</b> (dahulu Moor) memberi query bertipe aman, migrasi terpandu, dan aliran reaktif di atas SQLite, sehingga UI otomatis diperbarui saat data berubah. Untuk skema yang berkembang, drift sering lebih nyaman daripada sqflite mentah.', kind: 'info', title: 'drift' },
            { h2: 'Pola offline-first' },
            { svg: 'flow', label: 'Offline-first', steps: [{ t: 'UI membaca dari basis data lokal', d: 'selalu cepat, tanpa menunggu jaringan' }, { t: 'Sinkronisasi di latar belakang', d: 'ambil dari server bila ada koneksi' }, { t: 'Simpan hasil ke basis data', d: 'UI otomatis diperbarui' }, { t: 'Perubahan pengguna masuk antrean', d: 'dikirim saat online' }] },
            { code: dart`// Inti sinkronisasi: ambil dari server lalu perbarui lokal; baca selalu dari lokal. Peragaan dengan Dart murni.
class Server {
  final Map<int, String> data = {1: 'Kopi', 2: 'Teh', 3: 'Gula'};
  Future<Map<int, String>> ambil() async => Map.of(data);
}

class DbLokal {
  final Map<int, String> data = {};
  final List<int> antreanHapus = [];
}

class Repo {
  Repo(this.server, this.lokal);
  final Server server; final DbLokal lokal;
  bool online = true;

  Map<int, String> bacaLokal() => lokal.data;                          // UI membaca dari sini

  Future<void> sinkron() async {
    if (!online) { print('  (offline: sinkronisasi ditunda)'); return; }
    final dariServer = await server.ambil();
    lokal.data..clear()..addAll(dariServer);                            // upsert; di praktiknya bandingkan versi/waktu pembaruan
    print('  disinkronkan: \${lokal.data.length} item');
  }
}

Future<void> main() async {
  final repo = Repo(Server(), DbLokal());
  print('buka aplikasi (data lokal kosong): \${repo.bacaLokal()}');
  await repo.sinkron();
  print('tampil: \${repo.bacaLokal()}');

  repo.online = false;                                                   // sinyal hilang
  print('offline, aplikasi tetap menampilkan: \${repo.bacaLokal()}');
  await repo.sinkron();
}`, lang: 'dart', run: true, caption: 'Prinsipnya: sumber kebenaran untuk tampilan adalah basis data lokal. Pengguna tidak pernah melihat layar kosong hanya karena jaringan lambat. Konflik (data diubah di dua tempat) memerlukan aturan: terakhir menang, penggabungan, atau tanya pengguna.' },
            { h2: 'Hal praktis' },
            { ul: ['<b>Versi dan migrasi</b>: rencanakan sejak awal; uji pembaruan dari versi lama.', '<b>Jangan menyimpan data pribadi sensitif</b> tanpa alasan; terapkan prinsip minimisasi dan hapus saat logout.', '<b>Cadangan platform</b>: Android Auto Backup dapat menyalin data aplikasi; kecualikan berkas sensitif.', '<b>Enkripsi basis data</b> (SQLCipher) bila menyimpan data sensitif secara lokal.', '<b>Ukuran dan kinerja</b>: indeks, transaksi untuk penyisipan massal, dan jangan membaca ribuan baris ke memori sekaligus (paginasi).'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tempat menyimpan token akses di Flutter?', options: ['flutter_secure_storage', 'shared_preferences', 'Variabel global'], answer: 0, why: 'Memakai Keychain/Keystore.' }, { q: 'Mengapa onUpgrade penting?', options: ['Memigrasi skema tanpa menghapus data pengguna', 'Mempercepat query', 'Menghapus cache'], answer: 0, why: 'Pengguna membawa basis data versi lama.' }, { q: 'Pada offline-first, UI membaca dari...', options: ['Basis data lokal', 'Langsung dari server', 'Memori sementara'], answer: 0, why: 'Cepat dan tahan koneksi putus.' }] },
            { exercise: [['Data apa yang cocok di shared_preferences dan apa yang tidak?', 'Cocok: tema, bahasa, flag onboarding. Tidak: token, daftar besar, data pribadi sensitif.'], ['Aplikasi sudah dirilis dengan tabel produk(id, nama). Anda menambah kolom harga. Apa yang dilakukan?', 'Naikkan version dan tambahkan ALTER TABLE di onUpgrade untuk versi lama.'], ['Mengapa transaksi mempercepat penyisipan ribuan baris?', 'Satu commit untuk semua baris menghindari biaya sinkronisasi disk per baris.'], ['Bagaimana menangani konflik saat dua perangkat mengubah data yang sama?', 'Tentukan aturan: terakhir menang berdasarkan waktu, penggabungan per bidang, atau minta pengguna memilih.']] },
            { summary: ['Pilih penyimpanan menurut data: shared_preferences (pengaturan), secure storage (rahasia), SQLite/drift (terstruktur), berkas (path_provider).', 'Jangan menyimpan rahasia di preferences; hapus saat logout.', 'Migrasi skema (onUpgrade) melindungi data pengguna saat pembaruan.', 'Offline-first: UI membaca dari basis data lokal, sinkronisasi di latar belakang, antrean perubahan.'] },
        ],
        faq: [['Hive atau SQLite?', 'Hive/Isar cepat dan sederhana untuk objek tanpa relasi rumit; SQLite lebih tepat untuk data relasional, pencarian, dan migrasi yang kuat.'], ['Di mana data aplikasi tersimpan?', 'Di direktori privat aplikasi; data hilang saat aplikasi dihapus (kecuali dicadangkan oleh platform).'], ['Apakah data lokal aman dari pengguna?', 'Tidak sepenuhnya. Pada perangkat yang di-root atau dengan akses fisik data dapat dibaca; enkripsi menaikkan hambatan tetapi kunci yang ada di perangkat tetap dapat diekstrak oleh penyerang yang gigih.']],
        sources: [['Flutter: Persist data with SQLite', 'https://docs.flutter.dev/cookbook/persistence/sqlite'], ['shared_preferences', 'https://pub.dev/packages/shared_preferences'], ['flutter_secure_storage', 'https://pub.dev/packages/flutter_secure_storage'], ['drift', 'https://drift.simonbinder.eu/']],
    },
];
