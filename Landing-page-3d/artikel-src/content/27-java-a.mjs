const D = '2026-10-23';
const C = 'PBO dengan Java';
const jv = String.raw;

const REF_TUT = ['Oracle: The Java Tutorials', 'https://docs.oracle.com/javase/tutorial/'];
const REF_DEVJ = ['dev.java: Learn Java (Oracle)', 'https://dev.java/learn/'];
const REF_API = ['Java SE API Documentation', 'https://docs.oracle.com/en/java/javase/21/docs/api/index.html'];
const REF_JLS = ['The Java Language Specification', 'https://docs.oracle.com/javase/specs/jls/se21/html/index.html'];
const REF_INTRO = ['Sedgewick dan Wayne, Introduction to Programming in Java', 'https://introcs.cs.princeton.edu/java/home/'];

export default [
    {
        slug: 'pengenalan-java-jdk-jvm-dan-program-pertama',
        title: 'Pengenalan Java: JDK, JVM, dan Program Pertama',
        description: 'Kenali Java dari nol: perbedaan JDK, JRE, dan JVM, alur compile-run, struktur program Hello World, cara membaca pesan error, dan mengapa Java dipakai di industri.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'JDK', 'JVM', 'Hello World', 'bytecode'], cta: 'none',
        prereq: ['dasar menggunakan komputer'],
        lead: 'Java adalah bahasa berorientasi objek yang dikompilasi menjadi bytecode dan dijalankan oleh Java Virtual Machine. Slogan lamanya, "tulis sekali, jalankan di mana saja", berasal dari rancangan itu. Materi ini mengurai bagian-bagiannya agar Anda paham apa yang terjadi saat menekan Run.',
        body: [
            { objectives: ['membedakan JDK, JRE, dan JVM', 'menjelaskan alur dari kode sumber .java ke bytecode .class sampai berjalan', 'menulis, mengompilasi, dan menjalankan program Java sederhana', 'membaca pesan error kompilasi dan runtime', 'menjelaskan unsur dasar struktur program: class, method main, statement'] },
            { h2: 'Dari kode sumber sampai berjalan' },
            { svg: 'flow', label: 'Alur kompilasi Java', steps: [{ t: 'Main.java', d: 'kode sumber yang Anda tulis' }, { t: 'javac', d: 'kompiler memeriksa dan menghasilkan bytecode' }, { t: 'Main.class', d: 'bytecode, netral terhadap mesin' }, { t: 'JVM (java)', d: 'menafsirkan dan mengompilasi ke kode mesin saat berjalan' }], caption: 'Bytecode yang sama dapat berjalan pada Windows, macOS, atau Linux selama ada JVM.' },
            { table: { head: ['Istilah', 'Isi', 'Untuk siapa'], rows: [['JVM', 'Mesin virtual yang menjalankan bytecode', 'Dipakai saat program berjalan'], ['JRE', 'JVM + pustaka kelas standar', 'Pengguna yang hanya menjalankan'], ['JDK', 'JRE + alat pengembang (javac, jar, jshell, dan lainnya)', 'Pengembang']] }, },
            { callout: 'Sejak Java 11 Oracle tidak lagi menyediakan paket JRE terpisah untuk umum. Yang Anda pasang untuk belajar adalah <b>JDK</b> (misalnya OpenJDK atau Temurin).', kind: 'info', title: 'Catatan praktis' },
            { h2: 'Program pertama' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        System.out.println("Halo, dunia!");
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Simpan sebagai Main.java. Nama file harus sama dengan nama class public.' },
            { w: 'cards', title: 'Bedah setiap bagian (ketuk kartu)', items: [{ tag: 'public class Main', front: 'Semua kode Java berada di dalam class', backTag: 'Arti', back: 'Class adalah wadah kode. "public" berarti dapat diakses dari mana saja; nama class harus cocok dengan nama berkas.' }, { tag: 'public static void main', front: 'Titik masuk program', backTag: 'Arti', back: 'JVM mencari method ini untuk memulai. static: dipanggil tanpa membuat objek; void: tidak mengembalikan nilai.' }, { tag: 'String[] args', front: 'Parameter dari baris perintah', backTag: 'Arti', back: 'Larik teks yang diberikan saat menjalankan program, misalnya java Main satu dua.' }, { tag: 'System.out.println', front: 'Mencetak ke layar', backTag: 'Arti', back: 'System.out adalah keluaran standar; println mencetak lalu pindah baris.' }] },
            { h2: 'Menjalankan dari terminal' },
            { code: jv`javac Main.java      # menghasilkan Main.class
java Main            # menjalankan JVM dengan class Main

# sejak Java 11, berkas tunggal bisa langsung dijalankan:
java Main.java`, lang: 'bash' },
            { h2: 'Membaca pesan error' },
            `Ada dua jenis kesalahan utama. <b>Kesalahan kompilasi</b> terdeteksi sebelum program berjalan (salah sintaks, tipe tidak cocok). <b>Kesalahan runtime</b> baru muncul saat program berjalan (misalnya pembagian dengan nol).`,
            { code: jv`public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        System.out.println("Sebelum pembagian");
        System.out.println(a / b);
    }
}`, lang: 'java', run: true, expectError: true, file: 'Main.java', caption: 'Keluaran menunjukkan ArithmeticException beserta nomor baris: baris pertama stack trace adalah petunjuk utama.' },
            { callout: 'Kesalahan kompilasi seperti titik koma hilang atau variabel belum dideklarasikan ditolak oleh javac dan tidak pernah sampai berjalan. Itu keunggulan bahasa bertipe statis: banyak kesalahan tertangkap lebih awal.', kind: 'good', title: 'Mengapa ini baik' },
            { h2: 'Mengapa Java masih dipakai' },
            { ul: ['<b>Ekosistem matang</b>: pustaka dan kerangka kerja (Spring, Jakarta EE) untuk sistem perusahaan, perbankan, dan telekomunikasi.', '<b>Android</b>: Java dan Kotlin berjalan di JVM; banyak kode lama masih Java.', '<b>Performa</b>: JIT compiler mengoptimalkan kode panas saat berjalan.', '<b>Tooling</b>: IDE kuat (IntelliJ IDEA, Eclipse, NetBeans, VS Code) dan alat build (Maven, Gradle).', '<b>Cocok untuk belajar PBO</b>: sintaks eksplisit memaksa kita memikirkan tipe dan desain kelas.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Apa hasil kompilasi javac?', options: ['Kode mesin', 'Bytecode (.class)', 'Teks biasa'], answer: 1, why: 'Bytecode dijalankan oleh JVM.' }, { q: 'Yang dibutuhkan pengembang untuk menulis dan mengompilasi Java?', options: ['JVM saja', 'JRE saja', 'JDK'], answer: 2, why: 'JDK memuat kompiler dan alat lainnya.' }, { q: 'Mengapa method main bersifat static?', options: ['Agar JVM dapat memanggilnya tanpa membuat objek', 'Agar lebih cepat', 'Karena aturan IDE'], answer: 0, why: 'Belum ada objek saat program dimulai.' }] },
            { exercise: [['Ubah program agar mencetak nama Anda dan jurusan pada dua baris.', 'Dua pemanggilan System.out.println dengan teks berbeda.'], ['Apa bedanya print dan println?', 'println menambahkan pindah baris di akhir; print tidak.'], ['Apa yang terjadi bila nama class berbeda dengan nama berkas pada class public?', 'javac menolak dengan pesan bahwa class public harus dideklarasikan dalam berkas dengan nama yang sama.'], ['Mengapa kita bisa menjalankan bytecode yang sama pada sistem operasi berbeda?', 'Karena JVM tersedia untuk tiap platform dan menerjemahkan bytecode ke instruksi mesin setempat.']] },
            { summary: ['JDK = alat pengembang + JRE; JRE = JVM + pustaka; JVM menjalankan bytecode.', 'Alur: .java → javac → .class → JVM.', 'Program Java berada dalam class; main adalah titik masuk.', 'Kesalahan kompilasi dicegat lebih awal, kesalahan runtime muncul sebagai exception.'] },
        ],
        faq: [['Versi Java mana yang sebaiknya dipasang?', 'Pilih rilis LTS terbaru (misalnya Java 21 atau 25) dari penyedia OpenJDK seperti Temurin atau dari Oracle. LTS mendapat pembaruan dalam waktu lama.'], ['Apakah Java sama dengan JavaScript?', 'Tidak. Namanya mirip karena alasan pemasaran masa lalu; bahasanya, cara kerjanya, dan tempat dijalankannya berbeda.'], ['Apakah harus memakai IDE?', 'Tidak wajib. Untuk belajar dasar, editor teks dan terminal sudah cukup; IDE membantu proyek yang lebih besar.']],
        sources: [REF_TUT, REF_DEVJ, REF_JLS, REF_INTRO],
    },

    {
        slug: 'tipe-data-variabel-dan-operator-java',
        title: 'Tipe Data, Variabel, dan Operator di Java',
        description: 'Pelajari tipe primitif Java, variabel, casting, operator, presisi double, integer overflow, dan perbedaan primitif dengan referensi, lengkap dengan kode yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'tipe data', 'variabel', 'operator', 'casting'], cta: 'none',
        prereq: ['program Java pertama'],
        lead: 'Java bertipe statis: setiap variabel punya tipe yang ditetapkan saat dideklarasikan, dan kompiler menolak penggunaan yang tidak cocok. Aturan ketat ini menghindarkan banyak kesalahan, tetapi memunculkan jebakan seperti overflow dan pembagian bilangan bulat yang perlu dipahami.',
        body: [
            { objectives: ['menyebutkan delapan tipe primitif beserta rentangnya', 'mendeklarasikan variabel, konstanta (final), dan memakai var', 'melakukan casting melebar dan menyempit', 'menjelaskan integer overflow, pembagian bilangan bulat, dan presisi double', 'membedakan tipe primitif dan tipe referensi'] },
            { h2: 'Delapan tipe primitif' },
            { table: { head: ['Tipe', 'Ukuran', 'Rentang atau isi', 'Contoh'], rows: [['byte', '8 bit', '−128 .. 127', 'byte b = 100;'], ['short', '16 bit', '−32.768 .. 32.767', 'short s = 30000;'], ['int', '32 bit', '≈ ±2,1 miliar', 'int n = 42;'], ['long', '64 bit', '≈ ±9,2 × 10¹⁸', 'long z = 9_000_000_000L;'], ['float', '32 bit', 'desimal, ±7 digit', 'float f = 3.14f;'], ['double', '64 bit', 'desimal, ±15 digit', 'double d = 3.14;'], ['char', '16 bit', 'satu karakter Unicode', "char c = 'A';"], ['boolean', '', 'true atau false', 'boolean ok = true;']] } },
            { code: jv`public class Main {
    public static void main(String[] args) {
        int umur = 20;
        double ipk = 3.75;
        char grade = 'A';
        boolean lulus = true;
        final double PPN = 0.11;          // final: tidak boleh diubah lagi
        var nama = "Ani";                 // var: tipe disimpulkan kompiler (String)

        System.out.println(nama + ", " + umur + " tahun, IPK " + ipk + ", grade " + grade + ", lulus=" + lulus);
        System.out.println("Harga + PPN: " + (100_000 * (1 + PPN)));
        System.out.println("Batas int : " + Integer.MIN_VALUE + " .. " + Integer.MAX_VALUE);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Casting' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        int i = 7;
        double d = i;                  // melebar (otomatis, aman)
        System.out.println(d);

        double pi = 3.99;
        int potong = (int) pi;         // menyempit (eksplisit, data bisa hilang)
        System.out.println(potong);    // desimal dibuang, bukan dibulatkan

        long besar = 3_000_000_000L;
        int salah = (int) besar;       // tidak muat di int
        System.out.println(salah);

        char huruf = 'A';
        System.out.println((int) huruf + " " + (char) (huruf + 2));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Casting menyempit tidak melempar error: nilainya terpotong diam-diam, sehingga berbahaya bila tidak disadari.' },
            { h2: 'Tiga jebakan klasik' },
            { h3: '1. Pembagian bilangan bulat' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        System.out.println(7 / 2);          // 3, bukan 3.5
        System.out.println(7 / 2.0);        // 3.5
        System.out.println(7 % 2);          // sisa bagi: 1
        System.out.println(-7 / 2 + " " + -7 % 2);   // dipotong ke arah nol
        int total = 17, jumlah = 5;
        System.out.println("rata-rata salah: " + total / jumlah);
        System.out.println("rata-rata benar: " + (double) total / jumlah);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h3: '2. Integer overflow' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        int maks = Integer.MAX_VALUE;
        System.out.println(maks + 1);                  // berputar ke nilai negatif
        long aman = (long) maks + 1;
        System.out.println(aman);
        try {
            Math.addExact(maks, 1);                    // versi yang melempar exception
        } catch (ArithmeticException e) {
            System.out.println("terdeteksi: " + e.getMessage());
        }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Java tidak memberi peringatan saat overflow. Gunakan Math.addExact atau tipe lebih besar bila nilai bisa melampaui batas.' },
            { h3: '3. Presisi bilangan desimal' },
            { code: jv`import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);                 // bukan tepat 0.3
        System.out.println(0.1 + 0.2 == 0.3);
        System.out.println(Math.abs(0.1 + 0.2 - 0.3) < 1e-9);   // bandingkan dengan toleransi
        BigDecimal harga = new BigDecimal("0.1").add(new BigDecimal("0.2"));
        System.out.println(harga);                     // tepat 0.3, cocok untuk uang
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { callout: 'Untuk uang, jangan pakai float atau double. Gunakan <b>BigDecimal</b> (dibuat dari String) atau simpan dalam satuan terkecil sebagai long (misalnya rupiah penuh atau sen).', kind: 'warn', title: 'Aturan praktis' },
            { h2: 'Operator' },
            { table: { head: ['Kelompok', 'Operator', 'Catatan'], rows: [['Aritmetika', '+ − * / %', '/ pada int membuang desimal'], ['Penugasan', '= += −= *= /= ++ −−', 'x++ lalu x berubah setelah nilai dipakai'], ['Perbandingan', '== != < > <= >=', '== pada objek membandingkan referensi, bukan isi'], ['Logika', '&& || !', '&& dan || berhenti lebih awal (short-circuit)'], ['Ternary', 'kondisi ? a : b', 'ekspresi bersyarat singkat']] } },
            { h2: 'Primitif vs referensi' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        int a = 5, b = a;      // salinan nilai
        b = 9;
        System.out.println(a + " " + b);

        int[] x = {1, 2, 3};
        int[] y = x;           // y menunjuk larik yang SAMA
        y[0] = 99;
        System.out.println(x[0]);

        String s1 = new String("java"), s2 = new String("java");
        System.out.println((s1 == s2) + " " + s1.equals(s2));   // == bandingkan alamat, equals bandingkan isi
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Hasil 9 / 2 pada Java dengan dua int?', options: ['4.5', '4', '5'], answer: 1, why: 'Pembagian int membuang bagian desimal.' }, { q: 'Cara yang benar membandingkan isi dua String?', options: ['==', 'equals()', '='], answer: 1, why: '== membandingkan referensi.' }, { q: 'Tipe terbaik untuk menyimpan nilai uang yang tepat?', options: ['double', 'float', 'BigDecimal'], answer: 2, why: 'double tidak merepresentasikan sebagian besar pecahan desimal secara tepat.' }] },
            { exercise: [['Berapa hasil (int) 7.9 dan (int) -7.9?', '7 dan −7; casting memotong ke arah nol.'], ['Mengapa 0.1 + 0.2 tidak sama dengan 0.3?', 'Bilangan 0.1 dan 0.2 tidak dapat dinyatakan persis dalam biner, sehingga hasil jumlahnya sedikit melenceng.'], ['Tulis ekspresi untuk menghitung rata-rata tiga int a, b, c sebagai double.', '<code>(a + b + c) / 3.0</code>'], ['Mengapa Integer.MAX_VALUE + 1 menghasilkan bilangan negatif?', 'Bit tanda terbalik akibat limpahan pada representasi komplemen dua; nilai berputar ke batas bawah.']] },
            { summary: ['Delapan primitif: byte, short, int, long, float, double, char, boolean.', 'Casting menyempit dapat membuang data tanpa peringatan.', 'Waspadai pembagian int, overflow, dan presisi double; uang pakai BigDecimal.', '== membandingkan nilai pada primitif tetapi alamat pada objek.'] },
        ],
        faq: [['Kapan memakai var?', 'Saat tipe jelas dari sisi kanan, misalnya var daftar = new ArrayList<String>(). Hindari bila membuat pembaca bingung tentang tipe sebenarnya.'], ['Apa bedanya int dan Integer?', 'int adalah primitif; Integer adalah kelas pembungkus (wrapper) yang dapat bernilai null dan dipakai di koleksi seperti List<Integer>.'], ['Apakah char dan String sama?', 'Tidak. char satu karakter dengan tanda kutip tunggal; String adalah objek berisi rangkaian karakter dengan tanda kutip ganda.']],
        sources: [['Oracle: Primitive Data Types', 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html'], REF_JLS, REF_API, ['Goldberg, What Every Computer Scientist Should Know About Floating-Point Arithmetic (ACM Computing Surveys, 1991)', '']],
    },

    {
        slug: 'kontrol-alur-java-if-switch-for-while',
        title: 'Kontrol Alur Java: if, switch, for, while',
        description: 'Pelajari percabangan dan perulangan di Java: if/else, switch klasik dan ekspresi switch modern, for, while, do-while, break, continue, label, dan pola umum perulangan.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'if', 'switch', 'for', 'while'], cta: 'none',
        prereq: ['tipe data dan operator Java'],
        lead: 'Program yang berguna harus bisa memutuskan dan mengulang. Java menyediakan if dan switch untuk memilih jalur, serta for, while, dan do-while untuk berulang. Java modern juga menambahkan ekspresi switch yang lebih aman dan ringkas.',
        body: [
            { objectives: ['menulis if/else bertingkat dan ekspresi ternary', 'memakai switch klasik dan ekspresi switch modern', 'memilih for, while, atau do-while sesuai kebutuhan', 'memakai break, continue, dan label dengan tepat', 'menghindari kesalahan umum seperti off-by-one dan fall-through'] },
            { h2: 'Percabangan: if' },
            { code: jv`public class Main {
    static String grade(int nilai) {
        if (nilai >= 85) return "A";
        else if (nilai >= 70) return "B";
        else if (nilai >= 55) return "C";
        else return "D";
    }

    public static void main(String[] args) {
        int[] nilai = {92, 74, 55, 30};
        for (int n : nilai) {
            System.out.println(n + " -> " + grade(n));
        }
        int umur = 17;
        String status = (umur >= 17) ? "boleh membuat KTP" : "belum";
        System.out.println(status);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'switch klasik dan jebakan fall-through' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        int hari = 3;
        switch (hari) {
            case 1:
                System.out.println("Senin");
                break;
            case 2:
                System.out.println("Selasa");
            case 3:
                System.out.println("Rabu");      // tanpa break, lanjut ke case berikutnya
            case 4:
                System.out.println("Kamis");
                break;
            default:
                System.out.println("lainnya");
        }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Hari = 3 mencetak Rabu dan Kamis karena case 3 tidak diakhiri break. Itulah fall-through.' },
            { h2: 'Ekspresi switch modern' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        for (int bulan : new int[]{2, 4, 12}) {
            int hari = switch (bulan) {
                case 1, 3, 5, 7, 8, 10, 12 -> 31;
                case 4, 6, 9, 11 -> 30;
                case 2 -> 28;                       // abaikan tahun kabisat
                default -> throw new IllegalArgumentException("bulan tidak valid");
            };
            System.out.println("bulan " + bulan + ": " + hari + " hari");
        }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Tanda panah -> tidak fall-through, dan switch menghasilkan nilai. Kompiler memastikan semua kasus tercakup.' },
            { h2: 'Perulangan' },
            { table: { head: ['Jenis', 'Kapan dipakai', 'Pola'], rows: [['for', 'Jumlah iterasi diketahui', 'for (int i = 0; i < n; i++)'], ['for-each', 'Menelusuri larik atau koleksi', 'for (T x : koleksi)'], ['while', 'Berulang selama kondisi benar', 'while (kondisi) { ... }'], ['do-while', 'Minimal satu kali dijalankan', 'do { ... } while (kondisi);']] } },
            { code: jv`public class Main {
    public static void main(String[] args) {
        // for: tabel kuadrat
        for (int i = 1; i <= 5; i++) System.out.print(i * i + " ");
        System.out.println();

        // while: jumlah digit
        int n = 4821, jumlah = 0;
        while (n > 0) { jumlah += n % 10; n /= 10; }
        System.out.println("jumlah digit: " + jumlah);

        // do-while: dijalankan minimal sekali
        int k = 10;
        do { System.out.println("k = " + k); k++; } while (k < 5);

        // break & continue
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) continue;     // lewati genap
            if (i > 7) break;             // berhenti
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Perulangan bersarang dan label' },
            { code: jv`public class Main {
    public static void main(String[] args) {
        for (int baris = 1; baris <= 4; baris++) {
            for (int kolom = 1; kolom <= baris; kolom++) System.out.print("*");
            System.out.println();
        }

        // label: keluar dari dua perulangan sekaligus
        int[][] m = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        cari:
        for (int[] baris : m) {
            for (int x : baris) {
                if (x == 5) { System.out.println("ditemukan 5"); break cari; }
            }
        }
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { callout: 'Kesalahan off-by-one: untuk larik berukuran n, indeks sah 0 sampai n−1. Memakai <code>i <= n</code> memicu ArrayIndexOutOfBoundsException. Pakai for-each bila indeks tidak diperlukan.', kind: 'warn', title: 'Jebakan umum' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Kapan do-while berguna?', options: ['Saat badan perulangan harus berjalan minimal sekali', 'Saat jumlah iterasi tetap', 'Pada larik saja'], answer: 0, why: 'Kondisi diperiksa setelah badan dijalankan.' }, { q: 'Apa penyebab fall-through pada switch klasik?', options: ['Tidak ada break', 'Terlalu banyak case', 'Tidak ada default'], answer: 0, why: 'Eksekusi berlanjut ke case berikutnya.' }, { q: 'continue melakukan...', options: ['Mengakhiri seluruh perulangan', 'Melompat ke iterasi berikutnya', 'Mengulang dari awal program'], answer: 1, why: 'Sisa badan iterasi dilewati.' }] },
            { exercise: [['Tulis FizzBuzz 1..15 dengan for dan if.', 'Cek kelipatan 15 lebih dulu, lalu 3, lalu 5, selain itu cetak angkanya.'], ['Tulis perulangan yang menjumlahkan bilangan 1..100.', 'Hasil 5050; for dengan jumlah += i.'], ['Ubah grade() memakai ekspresi switch? Mengapa tidak cocok?', 'Switch bekerja pada nilai diskret; rentang nilai lebih alami memakai if/else atau switch dengan pola dan guard pada Java modern.'], ['Cetak segitiga bintang terbalik 4 baris.', 'Perulangan luar turun dari 4 ke 1, perulangan dalam mencetak sebanyak nomor baris.']] },
            { summary: ['if/else untuk keputusan, ternary untuk ekspresi singkat.', 'Ekspresi switch modern dengan -> lebih aman daripada switch klasik.', 'for untuk jumlah pasti, while untuk kondisi, do-while minimal sekali.', 'break, continue, dan label mengatur lompatan; awas off-by-one.'] },
        ],
        faq: [['Apakah switch bisa dipakai untuk String?', 'Ya, sejak Java 7. Java modern juga mendukung pencocokan pola pada switch.'], ['Kapan memakai for-each?', 'Bila hanya perlu membaca elemen tanpa indeks. Jika perlu mengubah elemen larik atau memerlukan indeks, pakai for biasa.'], ['Bagaimana menghindari perulangan tak berhingga?', 'Pastikan variabel dalam kondisi berubah menuju kondisi berhenti di setiap iterasi.']],
        sources: [['Oracle: Control Flow Statements', 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html'], ['dev.java: Switch Expressions', 'https://dev.java/learn/language-basics/switch-expression/'], REF_JLS, REF_INTRO],
    },

    {
        slug: 'array-dan-arraylist-java-ukuran-tetap-vs-dinamis',
        title: 'Array dan ArrayList di Java: Tetap vs Dinamis',
        description: 'Pelajari array satu dan dua dimensi, ArrayList, wrapper type, penelusuran, pencarian, pengurutan, dan kapan memilih masing-masing, dengan kode Java yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'array', 'ArrayList', 'koleksi', 'sorting'], cta: 'none',
        prereq: ['kontrol alur Java'],
        lead: 'Larik (array) adalah kumpulan elemen bertipe sama dengan ukuran tetap; ArrayList membungkusnya agar bisa tumbuh dan menyusut. Memahami keduanya, termasuk di mana datanya disimpan dan apa yang terjadi saat menyalin, mencegah banyak bug.',
        body: [
            { objectives: ['mendeklarasikan, mengisi, dan menelusuri array', 'memakai array dua dimensi', 'memakai ArrayList dan metode utamanya', 'memahami boxing dan wrapper type', 'menyalin, mencari, dan mengurutkan dengan Arrays dan Collections'] },
            { h2: 'Array' },
            { code: jv`import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] nilai = new int[5];                 // lima elemen, bernilai 0
        int[] skor = {80, 95, 70, 88};            // literal
        nilai[0] = 10;
        System.out.println("panjang skor: " + skor.length);

        int total = 0;
        for (int s : skor) total += s;
        System.out.println("rata-rata: " + (double) total / skor.length);

        System.out.println(Arrays.toString(nilai));
        Arrays.sort(skor);
        System.out.println(Arrays.toString(skor));
        System.out.println("indeks 88: " + Arrays.binarySearch(skor, 88));   // hanya pada larik terurut

        try { System.out.println(skor[4]); }
        catch (ArrayIndexOutOfBoundsException e) { System.out.println("di luar batas: " + e.getMessage()); }
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h3: 'Menyalin array: referensi vs isi' },
            { code: jv`import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] a = {1, 2, 3};
        int[] alias = a;                         // bukan salinan
        int[] salinan = Arrays.copyOf(a, a.length);
        a[0] = 99;
        System.out.println(alias[0] + " " + salinan[0]);
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h3: 'Array dua dimensi' },
            { code: jv`import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}};
        System.out.println(m.length + " baris, " + m[0].length + " kolom");
        int[][] t = new int[3][2];                // transpos
        for (int i = 0; i < m.length; i++)
            for (int j = 0; j < m[i].length; j++)
                t[j][i] = m[i][j];
        System.out.println(Arrays.deepToString(t));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'ArrayList' },
            { code: jv`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> daftar = new ArrayList<>();
        daftar.add("Citra");
        daftar.add("Ani");
        daftar.add("Budi");
        daftar.add(1, "Dewi");                  // sisip di indeks 1
        System.out.println(daftar + " ukuran " + daftar.size());

        daftar.remove("Ani");
        Collections.sort(daftar);
        System.out.println(daftar + " ada Budi? " + daftar.contains("Budi") + " indeks Dewi: " + daftar.indexOf("Dewi"));

        List<Integer> angka = new ArrayList<>(List.of(5, 3, 8));
        angka.add(1);                           // boxing otomatis: int -> Integer
        int jumlah = 0;
        for (int x : angka) jumlah += x;        // unboxing otomatis
        System.out.println(angka + " jumlah " + jumlah);
        angka.remove(Integer.valueOf(8));       // hapus NILAI 8
        angka.remove(0);                        // hapus INDEKS 0
        System.out.println(angka);
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'ArrayList hanya menyimpan objek, jadi tipe primitif dibungkus (Integer, Double, ...). Perhatikan perbedaan remove(nilai) dan remove(indeks).' },
            { h2: 'Mana yang dipilih?' },
            { table: { head: ['Aspek', 'Array', 'ArrayList'], rows: [['Ukuran', 'Tetap sejak dibuat', 'Tumbuh dan menyusut otomatis'], ['Tipe elemen', 'Primitif atau objek', 'Hanya objek (wrapper untuk primitif)'], ['Sintaks', 'a[i], a.length', 'list.get(i), list.size()'], ['Performa', 'Sedikit lebih cepat dan hemat untuk primitif', 'Cukup untuk hampir semua kasus'], ['Cocok untuk', 'Data berukuran tetap, performa tinggi, matriks', 'Daftar yang jumlahnya berubah']] } },
            { callout: 'Operasi <code>add</code> di akhir ArrayList berbiaya O(1) teramortisasi, sedangkan sisip atau hapus di tengah O(n) karena elemen digeser. Pencarian dengan <code>contains</code> adalah O(n).', kind: 'info', title: 'Kompleksitas' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Indeks elemen terakhir array berukuran n?', options: ['n', 'n−1', '1'], answer: 1, why: 'Indeks dimulai dari 0.' }, { q: 'Mengapa List<int> tidak diperbolehkan?', options: ['Koleksi generik hanya menerima tipe referensi', 'int terlalu kecil', 'Karena aturan IDE'], answer: 0, why: 'Gunakan List<Integer>.' }, { q: 'int[] b = a; menghasilkan...', options: ['Salinan terpisah', 'Referensi ke array yang sama', 'Error kompilasi'], answer: 1, why: 'Kedua variabel menunjuk objek array yang sama.' }] },
            { exercise: [['Tulis metode yang mencari nilai maksimum dalam int[].', 'Inisialisasi dengan elemen pertama lalu bandingkan satu per satu.'], ['Balik isi sebuah int[] di tempat.', 'Tukar elemen i dengan n−1−i hingga tengah.'], ['Hapus semua nilai genap dari List<Integer>.', '<code>angka.removeIf(x -> x % 2 == 0);</code>'], ['Apa yang terjadi bila memanggil list.get(5) pada list berukuran 3?', 'IndexOutOfBoundsException dilempar.']] },
            { summary: ['Array: ukuran tetap, cepat; ArrayList: dinamis, lebih nyaman.', 'Penugasan array menyalin referensi, bukan isi; gunakan Arrays.copyOf.', 'Wrapper type dan boxing menjembatani primitif dengan koleksi.', 'Array.sort, binarySearch, dan Collections.sort tersedia di pustaka standar.'] },
        ],
        faq: [['Apakah ArrayList memakai array di dalamnya?', 'Ya. Ketika kapasitas habis, ia membuat array lebih besar dan menyalin isinya.'], ['Kapan memakai LinkedList?', 'Jarang. ArrayList biasanya lebih cepat karena lokalitas memori, bahkan untuk banyak kasus sisip.'], ['Bagaimana membuat list tidak dapat diubah?', 'Gunakan List.of(...) atau Collections.unmodifiableList.']],
        sources: [['Oracle: Arrays (Java Tutorials)', 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html'], ['Java SE API: ArrayList', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html'], ['Java SE API: Arrays', 'https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html'], REF_INTRO],
    },

    {
        slug: 'method-java-parameter-return-overloading-dan-pass-by-value',
        title: 'Method Java: Parameter, Return, dan Overloading',
        description: 'Pelajari method di Java: parameter, return, overloading, varargs, rekursi, static vs instance, dan mengapa Java selalu pass-by-value, termasuk saat parameternya objek.',
        date: D, category: C, level: 'Pemula', tags: ['Java', 'method', 'overloading', 'pass by value', 'varargs'], cta: 'none',
        prereq: ['kontrol alur Java', 'array'],
        lead: 'Method adalah blok kode bernama yang dapat dipanggil berulang. Ia memecah program menjadi bagian kecil yang bisa dipahami dan diuji sendiri. Satu hal yang sering membingungkan pemula: Java selalu mengirim argumen dengan <b>pass-by-value</b>, bahkan untuk objek.',
        body: [
            { objectives: ['mendefinisikan dan memanggil method dengan parameter dan nilai balik', 'memakai overloading dan varargs', 'menjelaskan pass-by-value pada primitif dan referensi', 'membedakan method static dan instance', 'menulis method rekursif sederhana'] },
            { h2: 'Anatomi method' },
            { code: jv`public class Main {
    // [modifier] [static] tipeKembali namaMethod(parameter)
    static int luasPersegiPanjang(int panjang, int lebar) {
        return panjang * lebar;
    }

    static void sapa(String nama) {            // void: tidak mengembalikan nilai
        System.out.println("Halo, " + nama);
    }

    static boolean genap(int n) {
        return n % 2 == 0;
    }

    public static void main(String[] args) {
        sapa("Ani");
        System.out.println(luasPersegiPanjang(4, 5));
        System.out.println(genap(7) + " " + genap(10));
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { h2: 'Overloading dan varargs' },
            { code: jv`public class Main {
    static int jumlah(int a, int b)           { return a + b; }
    static double jumlah(double a, double b)  { return a + b; }
    static int jumlah(int a, int b, int c)    { return a + b + c; }

    static int total(int... angka) {           // varargs: jumlah argumen bebas
        int t = 0;
        for (int x : angka) t += x;
        return t;
    }

    public static void main(String[] args) {
        System.out.println(jumlah(1, 2));          // memilih versi int, int
        System.out.println(jumlah(1.5, 2.5));      // double, double
        System.out.println(jumlah(1, 2, 3));
        System.out.println(total() + " " + total(5) + " " + total(1, 2, 3, 4));
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Overloading: nama sama, daftar parameter berbeda. Tipe kembalian saja tidak cukup untuk membedakan.' },
            { h2: 'Java selalu pass-by-value' },
            `Saat memanggil method, Java menyalin <b>nilai</b> argumen ke parameter. Untuk primitif, yang disalin adalah angkanya. Untuk objek, yang disalin adalah <i>nilai referensinya</i> (alamat), sehingga method dapat mengubah isi objek tetapi tidak dapat membuat variabel pemanggil menunjuk objek lain.`,
            { code: jv`import java.util.Arrays;

public class Main {
    static void ubahInt(int x) { x = 100; }                       // hanya mengubah salinan

    static void ubahIsi(int[] a) { a[0] = 100; }                  // mengubah objek yang ditunjuk

    static void gantiRujukan(int[] a) { a = new int[]{7, 7, 7}; } // hanya mengubah salinan referensi

    public static void main(String[] args) {
        int n = 5;
        ubahInt(n);
        System.out.println("n = " + n);

        int[] data = {1, 2, 3};
        ubahIsi(data);
        System.out.println(Arrays.toString(data));

        gantiRujukan(data);
        System.out.println(Arrays.toString(data));    // tidak berubah menjadi [7, 7, 7]
    }
}`, lang: 'java', run: true, file: 'Main.java' },
            { svg: 'versus', label: 'Primitif vs referensi saat dikirim', left: { title: 'Primitif', items: ['Angka disalin', 'Perubahan pada parameter tidak terlihat dari luar'] }, right: { title: 'Objek', items: ['Alamat objek disalin', 'Isi objek dapat berubah lewat alamat itu', 'Alamat variabel pemanggil tidak berubah'] } },
            { h2: 'static vs instance' },
            { table: { head: ['Jenis', 'Dimiliki oleh', 'Dipanggil dengan', 'Dapat memakai atribut instance?'], rows: [['static', 'Class', 'NamaClass.method()', 'Tidak (tanpa objek)'], ['instance', 'Objek', 'objek.method()', 'Ya']] } },
            { h2: 'Rekursi' },
            { code: jv`public class Main {
    static long faktorial(int n) {
        if (n <= 1) return 1;                   // kasus dasar
        return n * faktorial(n - 1);            // langkah rekursif
    }

    static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }

    public static void main(String[] args) {
        System.out.println(faktorial(5) + " " + faktorial(20));
        System.out.println(fib(10));
        try { faktorial(-1); faktorial(100000); }
        catch (StackOverflowError e) { System.out.println("StackOverflowError"); }
    }
}`, lang: 'java', run: true, file: 'Main.java', caption: 'Rekursi tanpa kasus dasar atau terlalu dalam menghabiskan stack: StackOverflowError.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Overloading berarti...', options: ['Nama sama dengan parameter berbeda', 'Nama berbeda dengan parameter sama', 'Mengganti method induk'], answer: 0, why: 'Mengganti method induk disebut overriding.' }, { q: 'Setelah gantiRujukan(data), isi data...', options: ['Menjadi array baru', 'Tidak berubah', 'null'], answer: 1, why: 'Hanya salinan referensi di dalam method yang diganti.' }, { q: 'main harus static karena...', options: ['Dipanggil JVM tanpa objek', 'Aturan IDE', 'Supaya cepat'], answer: 0, why: 'Belum ada objek saat program dimulai.' }] },
            { exercise: [['Tulis method yang menukar dua nilai int pada array [a, b] di indeks i dan j.', 'Pakai variabel sementara: t = a[i]; a[i] = a[j]; a[j] = t.'], ['Tulis method rata-rata dengan varargs.', '<code>static double rata(double... x)</code> yang menjumlahkan lalu membagi x.length (waspadai x.length = 0).'], ['Mengapa tidak bisa membuat method swap(int a, int b) yang berhasil menukar variabel pemanggil?', 'Karena yang dikirim adalah salinan nilai; perubahan pada parameter tidak memengaruhi variabel asal.'], ['Tulis method rekursif untuk menghitung jumlah digit bilangan.', '<code>n < 10 ? n : n % 10 + jumlahDigit(n / 10)</code>']] },
            { summary: ['Method memecah program menjadi bagian bernama yang dapat dipakai ulang.', 'Overloading: nama sama, parameter berbeda; varargs menerima banyak argumen.', 'Java selalu pass-by-value; untuk objek, yang disalin adalah referensinya.', 'Rekursi memerlukan kasus dasar dan memakai stack.'] },
        ],
        faq: [['Apakah Java memiliki pass-by-reference?', 'Tidak. Kebingungan muncul karena salinan referensi tetap menunjuk objek yang sama sehingga isinya bisa diubah.'], ['Mengapa overloading tidak bisa berbeda hanya pada tipe kembalian?', 'Kompiler memilih method dari argumen pemanggilan; nilai kembalian tidak ikut menentukan.'], ['Berapa banyak parameter yang disarankan?', 'Semakin sedikit semakin baik; lebih dari tiga atau empat menandakan perlu pengelompokan ke objek.']],
        sources: [['Oracle: Defining Methods', 'https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html'], ['Oracle: Passing Information to a Method', 'https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html'], REF_JLS, REF_INTRO],
    },
];
