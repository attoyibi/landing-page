const D = '2026-10-23';
const C = 'Dasar Informatika';
const py = String.raw;

const REF_KUROSE = ['James Kurose dan Keith Ross, Computer Networking: A Top-Down Approach (Pearson)', ''];
const REF_TANEN = ['Andrew Tanenbaum dan David Wetherall, Computer Networks (Pearson)', ''];
const REF_MDN = ['MDN Web Docs: HTTP', 'https://developer.mozilla.org/docs/Web/HTTP'];
const REF_RFC = ['RFC Editor: dokumen standar Internet', 'https://www.rfc-editor.org/'];
const REF_KATZ = ['Jonathan Katz dan Yehuda Lindell, Introduction to Modern Cryptography (CRC Press)', ''];
const REF_AHO = ['Aho, Lam, Sethi, Ullman, Compilers: Principles, Techniques, and Tools (Pearson)', ''];
const REF_CRAFT = ['Robert Nystrom, Crafting Interpreters (gratis)', 'https://craftinginterpreters.com/'];

export default [
    {
        slug: 'model-osi-dan-tcp-ip-bagaimana-data-menempuh-jaringan',
        title: 'Model OSI dan TCP/IP: Bagaimana Data Menempuh Jaringan',
        description: 'Pahami model OSI dan TCP/IP: lapisan, enkapsulasi, TCP vs UDP, dan perangkat jaringan, dengan simulasi enkapsulasi dan soket yang dijalankan.',
        date: D, category: C, level: 'Pemula', tags: ['OSI', 'TCP/IP', 'jaringan komputer', 'enkapsulasi', 'TCP UDP'], cta: 'none',
        prereq: ['sistem bilangan'],
        lead: 'Mengirim sebuah pesan melintasi planet melibatkan kabel, gelombang radio, ratusan perangkat perantara, dan miliaran perangkat berbeda. Semuanya bisa bekerja karena jaringan dirancang berlapis: tiap lapis memikirkan satu masalah dan menyerahkan sisanya kepada lapis lain lewat antarmuka sederhana.',
        body: [
            { objectives: ['menjelaskan gagasan arsitektur berlapis dan manfaatnya', 'menyebut tujuh lapis OSI dan empat lapis TCP/IP serta padanannya', 'menjelaskan enkapsulasi dan dekapsulasi', 'membedakan TCP dan UDP dan kapan memakainya', 'mengaitkan perangkat (hub, switch, router) dengan lapisnya'] },
            { h2: 'Mengapa berlapis' },
            `Bayangkan mengirim surat: Anda menulis isi surat, memasukkannya ke amplop beralamat, lalu kantor pos memilah, mengangkut, dan mengantarkannya. Anda tidak perlu tahu rute pesawat. Jaringan bekerja serupa: aplikasi tidak perlu tahu apakah data berjalan lewat kabel tembaga atau serat optik.`,
            { h2: 'Dua model' },
            { table: { head: ['Lapis OSI', 'Nama', 'Tugas', 'Contoh', 'Lapis TCP/IP'], rows: [['7', 'Aplikasi', 'Layanan untuk pengguna', 'HTTP, DNS, SMTP', 'Aplikasi'], ['6', 'Presentasi', 'Format dan enkripsi data', 'TLS, JSON, JPEG', 'Aplikasi'], ['5', 'Sesi', 'Mengelola dialog', 'Sesi dan soket', 'Aplikasi'], ['4', 'Transport', 'Pengiriman antar proses; keandalan', 'TCP, UDP', 'Transport'], ['3', 'Jaringan', 'Pengalamatan dan pemilihan rute', 'IP, ICMP', 'Internet'], ['2', 'Data link', 'Pengiriman antar perangkat bertetangga', 'Ethernet, Wi-Fi, alamat MAC', 'Akses jaringan (link)'], ['1', 'Fisik', 'Sinyal pada media', 'Kabel, radio, serat optik', 'Akses jaringan (link)']] } },
            { callout: 'OSI adalah model <b>referensi</b> untuk belajar dan berkomunikasi; Internet sebenarnya berjalan di atas tumpukan <b>TCP/IP</b> yang lebih ringkas. Ungkapan seperti "lapis 7" atau "lapis 3" tetap dipakai sehari-hari: load balancer lapis 7 memahami HTTP, router bekerja di lapis 3.', kind: 'info', title: 'Dua model, satu kenyataan' },
            { h2: 'Enkapsulasi' },
            `Setiap lapis membungkus data dari lapis di atasnya dengan <b>header</b> sendiri (dan terkadang trailer). Penerima membuka bungkus satu per satu dari bawah ke atas (dekapsulasi).`,
            { svg: 'layers', label: 'Enkapsulasi', items: [{ t: 'Aplikasi: DATA', d: 'misalnya permintaan HTTP "GET /beranda"' }, { t: 'Transport: [header TCP] + data', d: 'menambah port asal/tujuan, nomor urut: disebut segmen' }, { t: 'Jaringan: [header IP] + segmen', d: 'menambah alamat IP asal/tujuan: disebut paket' }, { t: 'Data link: [header Ethernet] + paket + [trailer]', d: 'menambah alamat MAC: disebut frame' }, { t: 'Fisik: bit pada media', d: 'sinyal listrik, cahaya, atau radio' }] },
            { code: py`# Simulasi enkapsulasi: setiap lapis menambahkan headernya
data = "GET /beranda"
segmen = {"port_asal": 51512, "port_tujuan": 80, "nomor_urut": 1, "isi": data}
paket  = {"ip_asal": "192.168.1.10", "ip_tujuan": "203.0.113.5", "ttl": 64, "isi": segmen}
frame  = {"mac_asal": "AA:BB:CC:00:00:01", "mac_tujuan": "AA:BB:CC:00:00:FE", "isi": paket}

def tampil(x, indent=0):
    for k, v in x.items():
        if isinstance(v, dict):
            print(" " * indent + f"{k}:"); tampil(v, indent + 4)
        else:
            print(" " * indent + f"{k} = {v}")
tampil(frame)

# router: membuka frame, memeriksa IP tujuan, lalu membungkus ulang dengan MAC baru untuk lompatan berikutnya
frame_baru = {"mac_asal": "AA:BB:CC:00:00:FE", "mac_tujuan": "11:22:33:44:55:66", "isi": frame["isi"]}
paket_baru = dict(frame_baru["isi"]); paket_baru["ttl"] -= 1
print("\nsetelah satu router: TTL =", paket_baru["ttl"], "| alamat IP tetap", paket_baru["ip_tujuan"], "| MAC berubah menjadi", frame_baru["mac_tujuan"])`, lang: 'python', run: true, caption: 'Alamat MAC berlaku per lompatan (hop) dan berubah di setiap router; alamat IP tujuan tetap dari ujung ke ujung. TTL berkurang satu di setiap router sehingga paket tak berputar selamanya.' },
            { h2: 'TCP dan UDP' },
            { w: 'compare', title: 'Dua protokol transport', tabs: [{ label: 'TCP', html: '<b>Berorientasi koneksi dan andal.</b> Jabat tangan tiga langkah (SYN, SYN-ACK, ACK), nomor urut, pengakuan (ACK), pengiriman ulang, kendali aliran dan kemacetan. Data tiba utuh dan berurutan. Dipakai: web (HTTP/1.1 dan /2), surel, transfer berkas, SSH.' }, { label: 'UDP', html: '<b>Tanpa koneksi dan "upaya terbaik".</b> Paket (datagram) dikirim tanpa jaminan tiba atau berurutan, tetapi dengan beban kecil dan latensi rendah. Dipakai: DNS, streaming dan panggilan suara/video, gim daring, dan QUIC (HTTP/3) yang membangun keandalan di atas UDP.' }] },
            { code: py`import socket, threading

# server TCP kecil di komputer ini (127.0.0.1), lalu klien terhubung dan bertukar data
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("127.0.0.1", 0)); server.listen(1)
port = server.getsockname()[1]

def layani():
    koneksi, _ = server.accept()               # menerima jabat tangan tiga langkah (dikerjakan OS)
    data = koneksi.recv(1024)
    koneksi.sendall(b"ECHO: " + data)
    koneksi.close()
threading.Thread(target=layani, daemon=True).start()

klien = socket.create_connection(("127.0.0.1", port))
klien.sendall(b"halo TCP")
print(klien.recv(1024).decode())
klien.close(); server.close()

# UDP: tanpa koneksi, langsung kirim datagram
u_server = socket.socket(socket.AF_INET, socket.SOCK_DGRAM); u_server.bind(("127.0.0.1", 0))
u_klien = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
u_klien.sendto(b"halo UDP", u_server.getsockname())
data, alamat = u_server.recvfrom(1024)
print("UDP diterima:", data.decode())`, lang: 'python', run: true },
            { h2: 'Perangkat dan lapisnya' },
            { table: { head: ['Perangkat', 'Lapis', 'Fungsi'], rows: [['Hub', '1', 'Mengulang sinyal ke semua port (kini jarang dipakai)'], ['Switch', '2', 'Meneruskan frame hanya ke port yang tepat berdasarkan alamat MAC'], ['Router', '3', 'Meneruskan paket antar jaringan berdasarkan alamat IP'], ['Firewall', '3–7', 'Menyaring lalu lintas menurut aturan (alamat, port, bahkan isi aplikasi)'], ['Load balancer', '4 atau 7', 'Membagi permintaan ke beberapa server'], ['Access point', '1–2', 'Menghubungkan perangkat nirkabel ke jaringan kabel']] } },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Lapis OSI tempat alamat IP berada?', options: ['Jaringan (3)', 'Transport (4)', 'Data link (2)'], answer: 0, why: 'IP mengatur pengalamatan dan rute.' }, { q: 'Protokol transport yang menjamin data tiba berurutan?', options: ['TCP', 'UDP', 'ICMP'], answer: 0, why: 'TCP menambahkan nomor urut dan pengakuan.' }, { q: 'Apa yang berubah di setiap router sepanjang rute?', options: ['Alamat MAC dan TTL', 'Alamat IP tujuan', 'Port tujuan'], answer: 0, why: 'IP dan port tetap dari ujung ke ujung.' }] },
            { exercise: [['Mengapa panggilan video lebih sering memakai UDP daripada TCP?', 'Keterlambatan lebih merugikan daripada kehilangan satu paket kecil; pengiriman ulang TCP akan menambah jeda.'], ['Pada lapis apa kabel yang putus menjadi masalah?', 'Lapis 1 (fisik).'], ['Apa fungsi nomor port?', 'Membedakan layanan atau proses pada satu perangkat (misalnya 80 untuk HTTP, 443 untuk HTTPS).'], ['Mengapa pembagian lapisan memudahkan inovasi?', 'Satu lapis dapat diganti (misalnya Wi-Fi 5 ke Wi-Fi 6) tanpa mengubah lapis lain selama antarmukanya tetap.']] },
            { summary: ['Arsitektur berlapis memecah masalah jaringan menjadi bagian yang dapat diganti.', 'OSI 7 lapis sebagai referensi; TCP/IP 4 lapis sebagai praktik.', 'Enkapsulasi menambah header di tiap lapis; router mengubah MAC dan TTL per lompatan.', 'TCP andal dan berurutan; UDP ringan dan cepat.', 'Switch lapis 2, router lapis 3.'] },
        ],
        faq: [['Apa itu alamat MAC?', 'Pengenal 48 bit pada antarmuka jaringan (misalnya AA:BB:CC:00:00:01), dipakai pada jaringan lokal.'], ['Apa bedanya HTTP dan HTTPS?', 'HTTPS adalah HTTP di dalam sambungan terenkripsi TLS sehingga isi tidak dapat dibaca atau diubah di tengah jalan.'], ['Apa itu NAT?', 'Penerjemahan alamat: banyak perangkat berbagi satu alamat IP publik; router mengganti alamat privat dengan alamat publik dan mengingat pemetaannya.']],
        sources: [REF_KUROSE, REF_TANEN, REF_MDN, REF_RFC],
    },

    {
        slug: 'alamat-ip-dan-subnetting-menghitung-jaringan-dan-host',
        title: 'Alamat IP dan Subnetting: Menghitung Jaringan dan Host',
        description: 'Kuasai alamat IPv4 dan subnetting: CIDR, mask, alamat jaringan dan broadcast, VLSM, alamat privat, dan IPv6, dengan kalkulator interaktif.',
        date: D, category: C, level: 'Menengah', tags: ['IPv4', 'subnetting', 'CIDR', 'subnet mask', 'IPv6'], cta: 'none',
        prereq: ['sistem bilangan biner', 'model OSI dan TCP/IP'],
        lead: 'Alamat IP seperti nomor rumah dengan nama jalan: sebagian untuk jaringan, sebagian untuk perangkat di dalamnya. Subnetting adalah seni membagi "jalan" itu menjadi blok yang pas. Setelah memahami biner, subnetting hanyalah menggeser garis pemisah antara bit jaringan dan bit host.',
        body: [
            { objectives: ['menjelaskan struktur alamat IPv4 dan notasi CIDR', 'menghitung alamat jaringan, broadcast, rentang host, dan jumlah host dari alamat dan prefiks', 'membagi blok jaringan menjadi subnet dengan kebutuhan tertentu', 'mengenali rentang alamat privat dan alamat khusus', 'menjelaskan perbedaan dasar IPv4 dan IPv6'] },
            { h2: 'Struktur alamat IPv4' },
            `Alamat IPv4 terdiri dari 32 bit, ditulis sebagai empat oktet desimal. Notasi CIDR <code>/n</code> menyatakan bahwa <b>n bit pertama</b> adalah bagian jaringan, sisanya bagian host.`,
            { svg: 'diagram', w: 660, h: 140, label: 'Alamat 192.168.1.130/26', nodes: [{ id: 'a', x: 190, y: 55, shape: 'rect', w: 300, h: 40, t: '11000000.10101000.00000001.10 | 000010' }, { id: 'b', x: 190, y: 105, shape: 'text', w: 300, h: 20, t: '26 bit jaringan' }, { id: 'c', x: 460, y: 105, shape: 'text', w: 150, h: 20, t: '6 bit host' }], edges: [], caption: '/26 berarti 26 bit jaringan; mask = 255.255.255.192; tersisa 6 bit untuk host sehingga 2⁶ = 64 alamat per subnet.' },
            { w: 'subnet', title: 'Kalkulator subnet', desc: 'Ubah alamat dan geser prefiks. Perhatikan bit yang menjadi bagian jaringan, alamat jaringan, broadcast, dan jumlah host.', ip: '192.168.1.130', prefix: 26 },
            { h2: 'Menghitung manual' },
            { ol: ['Ubah prefiks menjadi mask: /26 = 26 bit satu = 255.255.255.192.', '<b>Alamat jaringan</b> = alamat AND mask: 192.168.1.130 AND 255.255.255.192 = 192.168.1.128.', '<b>Broadcast</b> = alamat jaringan dengan seluruh bit host bernilai 1: 192.168.1.191.', '<b>Host valid</b>: dari jaringan + 1 sampai broadcast − 1: 192.168.1.129 – 192.168.1.190.', '<b>Jumlah host</b> = 2^(32 − prefiks) − 2 = 64 − 2 = 62 (dua alamat dipakai jaringan dan broadcast).'] },
            { code: py`import ipaddress

jaringan = ipaddress.ip_network("192.168.1.130/26", strict=False)
print("jaringan  :", jaringan.network_address)
print("mask      :", jaringan.netmask)
print("broadcast :", jaringan.broadcast_address)
hosts = list(jaringan.hosts())
print("host      :", hosts[0], "-", hosts[-1], f"({len(hosts)} host)")
print("alamat 192.168.1.130 termasuk jaringan ini?", ipaddress.ip_address("192.168.1.130") in jaringan)
print("alamat 192.168.1.200 termasuk?", ipaddress.ip_address("192.168.1.200") in jaringan)

# tabel prefiks umum
print("\nprefiks  mask               host valid")
for p in (8, 16, 24, 25, 26, 27, 28, 29, 30):
    n = ipaddress.ip_network(f"10.0.0.0/{p}")
    print(f"  /{p:<3}   {str(n.netmask):<17} {n.num_addresses - 2:>10,}")`, lang: 'python', run: true, caption: 'Modul ipaddress di pustaka standar Python membantu memeriksa hitungan manual Anda.' },
            { h2: 'Membagi jaringan (subnetting)' },
            `Kasus: blok <code>192.168.10.0/24</code> harus dibagi untuk empat departemen dengan kebutuhan host: Teknik 100, Keuangan 50, SDM 25, Tamu 10. Aturan: alokasikan dari kebutuhan terbesar, pilih prefiks terkecil yang cukup (VLSM, Variable Length Subnet Mask).`,
            { code: py`import ipaddress, math

induk = ipaddress.ip_network("192.168.10.0/24")
kebutuhan = {"Teknik": 100, "Keuangan": 50, "SDM": 25, "Tamu": 10}

alamat_berikut = int(induk.network_address)
for nama, host in sorted(kebutuhan.items(), key=lambda x: -x[1]):
    bit_host = math.ceil(math.log2(host + 2))            # +2 untuk alamat jaringan dan broadcast
    prefiks = 32 - bit_host
    subnet = ipaddress.ip_network((alamat_berikut, prefiks))
    hosts = list(subnet.hosts())
    print(f"{nama:<9} butuh {host:>3} host -> {str(subnet):<18} ({len(hosts):>3} host, {hosts[0]} - {hosts[-1]})")
    alamat_berikut = int(subnet.broadcast_address) + 1

sisa = ipaddress.ip_address(alamat_berikut)
print("alamat bebas berikutnya:", sisa)`, lang: 'python', run: true, caption: 'Teknik membutuhkan 100 host sehingga /25 (126 host); Keuangan /26 (62); SDM /27 (30); Tamu /28 (14). Setiap blok dimulai pada batas yang selaras dengan ukurannya.' },
            { h2: 'Alamat khusus' },
            { table: { head: ['Rentang', 'Fungsi'], rows: [['10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16', 'Alamat privat (RFC 1918): tidak dirutekan di Internet; dipakai di jaringan lokal dengan NAT'], ['127.0.0.0/8', 'Loopback: perangkat itu sendiri (localhost)'], ['169.254.0.0/16', 'Link-local: alamat otomatis saat tidak ada DHCP'], ['0.0.0.0', 'Alamat tidak ditentukan atau "semua antarmuka" pada server'], ['255.255.255.255', 'Broadcast terbatas'], ['224.0.0.0/4', 'Multicast']] } },
            { code: py`import ipaddress
for a in ("192.168.1.5", "8.8.8.8", "127.0.0.1", "172.20.4.9", "169.254.10.1", "10.20.30.40"):
    ip = ipaddress.ip_address(a)
    jenis = "privat" if ip.is_private else "publik"
    khusus = " (loopback)" if ip.is_loopback else " (link-local)" if ip.is_link_local else ""
    print(f"{a:<14} {jenis}{khusus}")`, lang: 'python', run: true },
            { h2: 'IPv6 sekilas' },
            { table: { head: ['Aspek', 'IPv4', 'IPv6'], rows: [['Panjang alamat', '32 bit', '128 bit'], ['Jumlah alamat', '≈ 4,3 miliar', '≈ 3,4 × 10³⁸'], ['Penulisan', '192.168.1.10', '2001:db8::1 (heksadesimal, :: menyingkat nol berurutan)'], ['Konfigurasi', 'DHCP dan NAT lazim', 'SLAAC dan alamat global; NAT tidak diperlukan'], ['Broadcast', 'Ada', 'Tidak ada (memakai multicast)']] } },
            { callout: 'Kehabisan alamat IPv4 mendorong NAT dan, jangka panjang, IPv6. Dua-duanya hidup berdampingan (dual-stack) selama bertahun-tahun. Subnet IPv6 umumnya /64 untuk satu jaringan lokal, jadi "menghemat alamat" tidak lagi menjadi tujuan subnetting.', kind: 'info', title: 'Konteks' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Jumlah host valid pada jaringan /24?', options: ['254', '256', '255'], answer: 0, why: '2⁸ − 2 = 254.' }, { q: 'Mask untuk /27?', options: ['255.255.255.224', '255.255.255.192', '255.255.255.240'], answer: 0, why: '27 = 24 + 3 bit; 256 − 32 = 224.' }, { q: 'Alamat mana yang privat?', options: ['172.16.5.4', '172.32.5.4', '8.8.8.8'], answer: 0, why: '172.16.0.0/12 mencakup 172.16–172.31.' }] },
            { exercise: [['Berapa alamat jaringan dan broadcast untuk 10.4.77.200/20?', '/20: blok 16 dalam oktet ketiga (256 − 240). 77 berada di blok 64–79; jaringan 10.4.64.0, broadcast 10.4.79.255.'], ['Perlu jaringan untuk 500 host. Prefiks apa yang paling kecil yang cukup?', '/23 (510 host); /24 hanya 254.'], ['Apakah 192.168.5.255/24 alamat host valid?', 'Bukan; itu alamat broadcast untuk jaringan 192.168.5.0/24.'], ['Mengapa 192.168.1.130 dan 192.168.1.60 berada di subnet berbeda pada /26?', 'Blok /26 berukuran 64: 192.168.1.0–63 dan 192.168.1.128–191 adalah subnet berbeda.']] },
            { summary: ['IPv4: 32 bit; CIDR /n berarti n bit jaringan.', 'Jaringan = alamat AND mask; broadcast = bit host semua 1; host = 2^(32−n) − 2.', 'VLSM: alokasikan kebutuhan terbesar lebih dulu dengan prefiks yang cukup.', 'Rentang privat, loopback, link-local, dan multicast memiliki fungsi khusus.', 'IPv6 memakai 128 bit dan menghilangkan kelangkaan alamat.'] },
        ],
        faq: [['Apa itu DHCP?', 'Protokol yang memberi perangkat alamat IP, mask, gateway, dan DNS secara otomatis.'], ['Apa itu default gateway?', 'Alamat router tempat perangkat mengirim lalu lintas yang tujuannya di luar jaringan lokal.'], ['Apa itu kelas A, B, C?', 'Sistem lama berdasarkan oktet pertama (A: /8, B: /16, C: /24). Digantikan oleh CIDR yang fleksibel sejak 1990-an.']],
        sources: [['RFC 4632: Classless Inter-domain Routing (CIDR)', 'https://www.rfc-editor.org/rfc/rfc4632'], ['RFC 1918: Address Allocation for Private Internets', 'https://www.rfc-editor.org/rfc/rfc1918'], ['Dokumentasi Python: ipaddress', 'https://docs.python.org/3/library/ipaddress.html'], REF_KUROSE],
    },

    {
        slug: 'apa-yang-terjadi-saat-mengetik-url-dns-tcp-tls-dan-http',
        title: 'Apa yang Terjadi Saat Mengetik URL: DNS, TCP, TLS, HTTP',
        description: 'Telusuri satu permintaan web: URL, DNS, TCP, TLS, HTTP, caching, sampai render halaman, dengan demonstrasi percakapan HTTP yang dijalankan.',
        date: D, category: C, level: 'Menengah', tags: ['HTTP', 'DNS', 'TLS', 'browser', 'web'], cta: 'none',
        prereq: ['model OSI dan TCP/IP', 'alamat IP'],
        lead: 'Pertanyaan wawancara klasik: "Apa yang terjadi ketika Anda mengetik google.com dan menekan Enter?" Jawabannya merangkum hampir seluruh ilmu jaringan dan web dalam satu cerita: dari teks di bilah alamat sampai piksel di layar, melalui DNS, TCP, TLS, HTTP, dan mesin render. Kita telusuri langkah demi langkah, termasuk melihat percakapan HTTP yang sebenarnya.',
        body: [
            { objectives: ['menguraikan bagian URL', 'menjelaskan resolusi DNS dan jenis rekamannya', 'menjelaskan jabat tangan TCP dan TLS', 'membaca permintaan dan respons HTTP: metode, header, kode status', 'menjelaskan caching dan langkah browser merender halaman'] },
            { h2: 'Peta perjalanan' },
            { svg: 'flow', label: 'Dari URL ke halaman', steps: [{ t: '1. Parsing URL', d: 'skema, host, port, path' }, { t: '2. DNS', d: 'nama → alamat IP' }, { t: '3. TCP', d: 'jabat tangan tiga langkah' }, { t: '4. TLS', d: 'enkripsi dan verifikasi sertifikat' }, { t: '5. HTTP', d: 'permintaan dan respons' }, { t: '6. Render', d: 'HTML, CSS, JavaScript menjadi piksel' }] },
            { h2: '1. Anatomi URL' },
            { code: py`from urllib.parse import urlparse, parse_qs

url = "https://www.contoh.id:8443/artikel/dns?topik=jaringan&hal=2#bagian-3"
u = urlparse(url)
print("skema   :", u.scheme)               # protokol: https
print("host    :", u.hostname)             # nama yang akan di-resolve oleh DNS
print("port    :", u.port or "(bawaan: 443 untuk https, 80 untuk http)")
print("path    :", u.path)
print("query   :", parse_qs(u.query))
print("fragmen :", u.fragment, "(tidak pernah dikirim ke server)")`, lang: 'python', run: true },
            { h2: '2. DNS: dari nama ke alamat' },
            `Komputer berkomunikasi lewat alamat IP, bukan nama. DNS (Domain Name System) adalah "buku telepon" terdistribusi. Browser dan sistem operasi memeriksa cache lebih dulu; bila tak ada, bertanya ke <b>resolver rekursif</b> (biasanya milik ISP atau layanan seperti 1.1.1.1 dan 8.8.8.8), yang menelusuri hierarki.`,
            { svg: 'diagram', w: 700, h: 260, label: 'Resolusi DNS', nodes: [{ id: 'b', x: 70, y: 130, shape: 'rect', w: 100, h: 44, t: 'Browser / OS' }, { id: 'r', x: 250, y: 130, shape: 'rect', w: 120, h: 44, t: 'Resolver rekursif' }, { id: 'root', x: 480, y: 40, shape: 'rect', w: 130, h: 40, t: 'Server root (.)' }, { id: 'tld', x: 480, y: 130, shape: 'rect', w: 130, h: 40, t: 'Server TLD (.id)' }, { id: 'auth', x: 480, y: 220, shape: 'rect', w: 180, h: 40, t: 'Server otoritatif contoh.id' }], edges: [{ from: 'b', to: 'r', label: 'www.contoh.id?' }, { from: 'r', to: 'root', label: 'siapa .id?' }, { from: 'r', to: 'tld', label: 'siapa contoh.id?' }, { from: 'r', to: 'auth', label: 'alamat www?' }], caption: 'Hasil disimpan sementara (cache) selama TTL yang ditentukan pemilik domain sehingga pertanyaan berikutnya jauh lebih cepat.' },
            { table: { head: ['Rekaman DNS', 'Fungsi', 'Contoh'], rows: [['A', 'Nama ke alamat IPv4', 'www.contoh.id → 203.0.113.5'], ['AAAA', 'Nama ke alamat IPv6', 'www.contoh.id → 2001:db8::5'], ['CNAME', 'Alias ke nama lain', 'blog.contoh.id → contoh.github.io'], ['MX', 'Server surel domain', 'contoh.id → mail.contoh.id'], ['TXT', 'Teks bebas: verifikasi dan kebijakan surel', 'v=spf1 include:_spf.google.com ~all'], ['NS', 'Server nama otoritatif', 'contoh.id → ns1.penyedia.net']] } },
            { code: py`import socket
# resolusi lokal tanpa internet: localhost selalu bisa di-resolve
for host in ("localhost",):
    for info in socket.getaddrinfo(host, 80, proto=socket.IPPROTO_TCP):
        print(host, "->", info[4][0], "(IPv6)" if info[0] == socket.AF_INET6 else "(IPv4)")

# Pada komputer yang terhubung internet, getaddrinfo("contoh.id", 443) melakukan resolusi DNS sungguhan
# melalui resolver yang dikonfigurasi sistem operasi (cache -> resolver rekursif -> ... -> server otoritatif).`, lang: 'python', run: true },
            { h2: '3 dan 4. TCP dan TLS' },
            { svg: 'diagram', w: 640, h: 300, label: 'Jabat tangan', nodes: [{ id: 'c', x: 110, y: 25, shape: 'text', w: 120, h: 24, t: 'Klien' }, { id: 's', x: 530, y: 25, shape: 'text', w: 120, h: 24, t: 'Server' }, { id: 'c1', x: 110, y: 70, shape: 'text', w: 12, h: 8, t: '' }, { id: 's1', x: 530, y: 90, shape: 'text', w: 12, h: 8, t: '' }, { id: 's2', x: 530, y: 115, shape: 'text', w: 12, h: 8, t: '' }, { id: 'c2', x: 110, y: 135, shape: 'text', w: 12, h: 8, t: '' }, { id: 'c3', x: 110, y: 160, shape: 'text', w: 12, h: 8, t: '' }, { id: 's3', x: 530, y: 180, shape: 'text', w: 12, h: 8, t: '' }, { id: 'c4', x: 110, y: 215, shape: 'text', w: 12, h: 8, t: '' }, { id: 's4', x: 530, y: 235, shape: 'text', w: 12, h: 8, t: '' }, { id: 's5', x: 530, y: 260, shape: 'text', w: 12, h: 8, t: '' }, { id: 'c5', x: 110, y: 280, shape: 'text', w: 12, h: 8, t: '' }], edges: [{ from: 'c1', to: 's1', label: 'SYN' }, { from: 's2', to: 'c2', label: 'SYN-ACK' }, { from: 'c3', to: 's3', label: 'ACK (TCP siap)' }, { from: 'c4', to: 's4', label: 'ClientHello (TLS)' }, { from: 's5', to: 'c5', label: 'ServerHello + sertifikat' }], caption: 'TCP butuh satu putaran pergi-pulang (RTT). TLS 1.3 menambah satu RTT lagi untuk menyepakati kunci; QUIC (HTTP/3) menggabungkan keduanya agar lebih cepat.' },
            { ul: ['<b>TCP</b>: SYN → SYN-ACK → ACK membuat koneksi andal antara klien dan server (port 443 untuk HTTPS).', '<b>TLS</b>: klien dan server menyepakati versi dan sandi, server membuktikan identitasnya dengan <b>sertifikat</b> yang ditandatangani otoritas sertifikat (CA) tepercaya browser, lalu keduanya menurunkan kunci sesi simetris.', 'Sesudah itu semua data HTTP terenkripsi: penyadap di jaringan hanya melihat nama server (SNI, kini dapat dienkripsi) dan volume data.'] },
            { h2: '5. HTTP: permintaan dan respons' },
            `HTTP adalah protokol berbasis teks (pada HTTP/1.1) berpola permintaan–respons. Kita jalankan server HTTP kecil di komputer ini dan melihat percakapan mentahnya.`,
            { code: py`import socket, threading
from http.server import BaseHTTPRequestHandler, HTTPServer

class Penangan(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/beranda":
            isi = "<h1>Halo dari server</h1>".encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Cache-Control", "max-age=60")
        else:
            isi = b"tidak ditemukan"
            self.send_response(404)
            self.send_header("Content-Type", "text/plain")
        self.send_header("Content-Length", str(len(isi)))
        self.end_headers()
        self.wfile.write(isi)
    def log_message(self, *a): pass

server = HTTPServer(("127.0.0.1", 0), Penangan)
port = server.server_address[1]
threading.Thread(target=server.serve_forever, daemon=True).start()

def minta(path):
    s = socket.create_connection(("127.0.0.1", port))
    s.sendall(f"GET {path} HTTP/1.1\r\nHost: contoh.id\r\nAccept: text/html\r\nConnection: close\r\n\r\n".encode())
    data = b""
    while chunk := s.recv(4096): data += chunk
    s.close()
    return data.decode()

for path in ("/beranda", "/tidak-ada"):
    jawaban = minta(path)
    kepala = jawaban.split("\r\n\r\n")[0].splitlines()
    print(f">>> GET {path}")
    print("\n".join("    " + b for b in kepala if not b.startswith(("Server", "Date"))))
    print("    --- isi:", jawaban.split("\r\n\r\n", 1)[1], "\n")
server.shutdown()`, lang: 'python', run: true, caption: 'Baris pertama respons berisi versi, kode status, dan keterangan; kemudian header; baris kosong; lalu isi. Header yang tepat (Cache-Control, Content-Type) memengaruhi perilaku browser. (Server contoh bawaan Python ini membalas dengan HTTP/1.0; format pesannya sama dengan HTTP/1.1 untuk keperluan ini.)' },
            { table: { head: ['Kelompok kode', 'Arti', 'Contoh'], rows: [['1xx', 'Informasi', '101 Switching Protocols (WebSocket)'], ['2xx', 'Sukses', '200 OK, 201 Created, 204 No Content'], ['3xx', 'Pengalihan', '301 Moved Permanently, 302 Found, 304 Not Modified'], ['4xx', 'Kesalahan klien', '400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests'], ['5xx', 'Kesalahan server', '500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable']] } },
            { table: { head: ['Metode', 'Makna', 'Aman/idempoten'], rows: [['GET', 'Mengambil sumber daya', 'Aman dan idempoten'], ['POST', 'Mengirim data untuk diproses (membuat)', 'Tidak idempoten'], ['PUT', 'Mengganti sumber daya', 'Idempoten'], ['PATCH', 'Mengubah sebagian', 'Tidak selalu idempoten'], ['DELETE', 'Menghapus', 'Idempoten']] } },
            { h2: 'Cache dan CDN' },
            { ul: ['<b>Cache browser</b>: berkas yang sudah diunduh dipakai ulang sesuai <code>Cache-Control</code>; validasi ulang dengan <code>ETag</code> mengembalikan <b>304 Not Modified</b> tanpa isi.', '<b>CDN</b> (Content Delivery Network): server tersebar di banyak lokasi menyimpan salinan sehingga permintaan dilayani dari yang terdekat.', '<b>Reverse proxy dan load balancer</b>: menerima permintaan lalu meneruskannya ke salah satu server aplikasi.'] },
            { h2: '6. Browser merender halaman' },
            { svg: 'flow', label: 'Rendering', steps: [{ t: 'Parse HTML', d: 'membangun pohon DOM' }, { t: 'Parse CSS', d: 'membangun CSSOM' }, { t: 'Render tree dan layout', d: 'menghitung ukuran dan posisi' }, { t: 'Paint dan composite', d: 'menggambar piksel di layar' }, { t: 'JavaScript', d: 'dapat mengubah DOM dan CSS kapan saja' }], caption: 'Sumber daya yang menghalangi render (CSS dan JavaScript sinkron di head) menunda tampilan pertama; karena itu optimasi kecepatan web berfokus pada mengurangi dan menunda sumber daya tersebut.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Tugas DNS?', options: ['Menerjemahkan nama domain menjadi alamat IP', 'Mengenkripsi lalu lintas', 'Menyimpan halaman web'], answer: 0, why: 'Buku telepon Internet.' }, { q: 'Kode status 404 berarti...', options: ['Sumber daya tidak ditemukan', 'Kesalahan server', 'Pengalihan'], answer: 0, why: 'Kelompok 4xx: kesalahan klien.' }, { q: 'Fungsi sertifikat dalam TLS?', options: ['Membuktikan identitas server', 'Mempercepat halaman', 'Menyimpan cookie'], answer: 0, why: 'Ditandatangani CA tepercaya.' }] },
            { exercise: [['Mengapa pengunjungan kedua ke suatu situs biasanya jauh lebih cepat?', 'DNS, koneksi, dan berkas statis dapat di-cache; sebagian besar langkah dilewati.'], ['Apa perbedaan 301 dan 302?', '301 permanen (mesin pencari memindahkan peringkat ke alamat baru); 302 sementara.'], ['Mengapa fragmen URL (#bagian) tidak dikirim ke server?', 'Fragmen dipakai browser untuk menggulir atau oleh JavaScript; bukan bagian dari permintaan HTTP.'], ['Sebutkan tiga sumber penundaan sebelum byte HTML pertama diterima.', 'Resolusi DNS, jabat tangan TCP, jabat tangan TLS, serta waktu proses server.']] },
            { summary: ['URL dipecah menjadi skema, host, port, path, query, fragmen.', 'DNS menerjemahkan nama menjadi IP lewat hierarki dan cache.', 'TCP membuat koneksi; TLS mengenkripsi dan memverifikasi identitas server.', 'HTTP: metode, header, kode status, isi; caching mempercepat.', 'Browser membangun DOM dan CSSOM, menata, dan menggambar.'] },
        ],
        faq: [['Apa bedanya HTTP/1.1, HTTP/2, dan HTTP/3?', 'HTTP/2 memultipleks banyak permintaan dalam satu koneksi TCP dan memampatkan header; HTTP/3 berjalan di atas QUIC (UDP) sehingga menghindari penyumbatan antar aliran dan mempercepat koneksi.'], ['Apa itu cookie?', 'Data kecil yang disimpan browser dan dikirim kembali pada permintaan berikutnya, dipakai untuk sesi dan preferensi.'], ['Mengapa kadang muncul "situs tidak aman"?', 'Karena sertifikat kedaluwarsa, tidak sesuai nama domain, atau tidak ditandatangani CA tepercaya; atau halaman memakai HTTP biasa.']],
        sources: [REF_MDN, ['MDN: How the web works', 'https://developer.mozilla.org/docs/Learn_web_development/Getting_started/Web_standards/How_the_Web_works'], ['RFC 9110: HTTP Semantics', 'https://www.rfc-editor.org/rfc/rfc9110'], ['Cloudflare Learning Center: What is DNS?', 'https://www.cloudflare.com/learning/dns/what-is-dns/']],
    },

    {
        slug: 'kriptografi-dasar-hash-enkripsi-simetris-rsa-dan-tanda-tangan-digital',
        title: 'Kriptografi Dasar: Hash, Simetris, RSA, dan Tanda Tangan',
        description: 'Pelajari dasar kriptografi: cipher klasik, hash SHA-256, enkripsi simetris dan asimetris, RSA, Diffie-Hellman, dan tanda tangan digital.',
        date: D, category: C, level: 'Menengah', tags: ['kriptografi', 'hash', 'RSA', 'Diffie-Hellman', 'tanda tangan digital'], cta: 'none',
        prereq: ['sistem bilangan', 'aritmetika modular (dasar)'],
        lead: 'Setiap kali Anda melihat gembok di browser, masuk ke perbankan, atau mengirim pesan terenkripsi, kriptografi bekerja. Materi ini membangun intuisi dengan contoh kecil yang dapat dihitung: dari cipher klasik yang mudah patah sampai ide jenius kunci publik. Perhatian: contoh di sini untuk belajar dan tidak aman untuk dipakai nyata.',
        body: [
            { objectives: ['menjelaskan tujuan kriptografi: kerahasiaan, integritas, autentikasi, nirsangkal', 'menjelaskan mengapa cipher klasik (Caesar, substitusi) mudah dipecahkan', 'memakai fungsi hash dan menjelaskan sifat-sifatnya', 'membedakan enkripsi simetris dan asimetris dan peran masing-masing', 'menjelaskan RSA, Diffie–Hellman, dan tanda tangan digital pada skala kecil'] },
            { callout: 'Peringatan penting: <b>jangan membuat kriptografi sendiri</b> untuk produksi. Kode di artikel ini sengaja disederhanakan untuk pemahaman dan memakai angka kecil. Gunakan pustaka yang teruji (misalnya libsodium, cryptography.io, atau pustaka TLS dari platform), dengan algoritma dan parameter yang direkomendasikan.', kind: 'warn', title: 'Hanya untuk belajar' },
            { h2: 'Tujuan kriptografi' },
            { table: { head: ['Tujuan', 'Arti', 'Alat utama'], rows: [['Kerahasiaan', 'Hanya penerima sah yang dapat membaca', 'Enkripsi'], ['Integritas', 'Data tidak berubah tanpa terdeteksi', 'Hash, MAC'], ['Autentikasi', 'Memastikan identitas pengirim', 'MAC, tanda tangan digital, sertifikat'], ['Nirsangkal', 'Pengirim tidak dapat menyangkal telah mengirim', 'Tanda tangan digital']] } },
            { h2: 'Cipher klasik dan mengapa patah' },
            { code: py`import collections, string

def caesar(teks, geser):
    hasil = []
    for ch in teks:
        if ch.isalpha():
            dasar = ord("A") if ch.isupper() else ord("a")
            hasil.append(chr((ord(ch) - dasar + geser) % 26 + dasar))
        else:
            hasil.append(ch)
    return "".join(hasil)

pesan = "Serangan dimulai saat fajar di gerbang barat"
sandi = caesar(pesan, 7)
print("sandi    :", sandi)
print("dekripsi :", caesar(sandi, -7))

# memecahkan dengan brute force: hanya 25 kemungkinan kunci
print("\npercobaan semua kunci:")
for k in range(1, 26):
    kandidat = caesar(sandi, -k)
    if "dimulai" in kandidat:
        print(f"  kunci {k}: {kandidat}   <- terbaca, kunci ditemukan")

# analisis frekuensi untuk substitusi umum: huruf paling sering di teks Indonesia biasanya A, N, I, E
teks = "aku pergi ke pasar untuk membeli beras minyak dan garam karena persediaan di rumah sudah habis"
frek = collections.Counter(c for c in teks if c.isalpha())
print("\nhuruf paling sering:", frek.most_common(4))`, lang: 'python', run: true, caption: 'Ruang kunci 25 terlalu kecil. Cipher substitusi dengan 26! kunci tampak aman tetapi runtuh oleh analisis frekuensi: pola bahasa bocor ke teks sandi. Pelajaran: ruang kunci besar tidak cukup; hasil sandi tidak boleh membocorkan pola.' },
            { h2: 'Fungsi hash' },
            `Fungsi hash memetakan masukan berukuran apa pun menjadi keluaran berukuran tetap ("sidik jari"). Sifat yang diinginkan: <b>deterministik</b>, <b>cepat dihitung</b>, <b>satu arah</b> (sulit mencari masukan dari keluaran), <b>tahan tabrakan</b> (sulit menemukan dua masukan berbeda dengan hash sama), dan <b>efek avalanche</b> (perubahan kecil pada masukan mengubah keluaran secara drastis).`,
            { code: py`import hashlib

def sha256(teks): return hashlib.sha256(teks.encode()).hexdigest()

a = "Transfer Rp1.000.000 ke Budi"
b = "Transfer Rp1.000.001 ke Budi"            # beda satu angka
print(sha256(a)); print(sha256(b))

# efek avalanche: berapa bit hash yang berubah?
x, y = int(sha256(a), 16), int(sha256(b), 16)
beda = bin(x ^ y).count("1")
print(f"\nbit yang berbeda: {beda} dari 256 ({beda/256*100:.0f}%) - sekitar separuh, hasil acak")

# verifikasi integritas berkas: bandingkan hash sebelum dan sesudah
dokumen = b"Isi dokumen penting versi 1"
hash_asli = hashlib.sha256(dokumen).hexdigest()
diterima = b"Isi dokumen penting versi 2"
print("integritas terjaga?", hashlib.sha256(diterima).hexdigest() == hash_asli)

# panjang keluaran tetap
for teks in ("a", "a" * 100000):
    print(len(sha256(teks)), "karakter heksa (256 bit)")`, lang: 'python', run: true, caption: 'Hash dipakai untuk memverifikasi unduhan, mendeteksi perubahan, struktur blockchain, dan (dengan garam dan fungsi lambat) menyimpan kata sandi.' },
            { callout: 'MD5 dan SHA-1 <b>sudah tidak aman</b> untuk keperluan keamanan karena tabrakan dapat dibuat. Gunakan keluarga SHA-2 (SHA-256) atau SHA-3. Untuk kata sandi, pakai fungsi lambat khusus (Argon2, scrypt, bcrypt), bukan SHA-256 polos.', kind: 'warn', title: 'Pilih algoritma yang benar' },
            { h2: 'Enkripsi simetris: satu kunci' },
            `Pengirim dan penerima berbagi kunci rahasia yang sama. Cepat dan efisien untuk data besar. Standar modern: <b>AES</b> (kunci 128/256 bit) dengan mode operasi seperti GCM yang juga menjamin integritas. Masalah utama: bagaimana kedua pihak berbagi kunci dengan aman sejak awal?`,
            { code: py`# One-Time Pad: XOR dengan kunci acak sepanjang pesan dan dipakai SEKALI.
# Satu-satunya cipher yang terbukti aman secara teori (Shannon), tetapi tidak praktis: kunci sepanjang pesan.
import secrets

pesan = "Rapat jam 9".encode()
kunci = secrets.token_bytes(len(pesan))
sandi = bytes(p ^ k for p, k in zip(pesan, kunci))
print("sandi (heksa):", sandi.hex())
print("dekripsi      :", bytes(s ^ k for s, k in zip(sandi, kunci)).decode())

# bahaya memakai ulang kunci: XOR dua sandi membocorkan XOR dua pesan
pesan2 = "Rapat jam 7".encode()
sandi2 = bytes(p ^ k for p, k in zip(pesan2, kunci))
bocor = bytes(a ^ b for a, b in zip(sandi, sandi2))
print("XOR dua sandi = XOR dua pesan:", bocor == bytes(a ^ b for a, b in zip(pesan, pesan2)))`, lang: 'python', run: true, caption: 'Kunci pakai-sekali menjadi alasan mengapa nonce dan IV pada AES-GCM tidak boleh berulang: pemakaian ulang membocorkan hubungan antar pesan.' },
            { h2: 'Enkripsi asimetris: sepasang kunci' },
            `Setiap orang memiliki <b>kunci publik</b> (boleh disebarkan) dan <b>kunci privat</b> (dirahasiakan). Yang dikunci dengan kunci publik hanya dapat dibuka dengan kunci privat pasangannya. Ini menyelesaikan masalah distribusi kunci, dengan harga komputasi yang lebih lambat sehingga biasanya dipakai untuk menyepakati kunci simetris atau menandatangani.`,
            { h3: 'RSA skala kecil' },
            `RSA bersandar pada kesulitan memfaktorkan hasil kali dua bilangan prima besar. Berikut contoh dengan angka kecil agar dapat dihitung tangan (kunci nyata berukuran 2048 bit atau lebih).`,
            { code: py`from math import gcd

p, q = 61, 53
n = p * q                          # 3233 : bagian dari kedua kunci
phi = (p - 1) * (q - 1)            # 3120
e = 17                              # eksponen publik (koprima dengan phi)
assert gcd(e, phi) == 1
d = pow(e, -1, phi)                 # eksponen privat: invers e modulo phi
print(f"kunci publik (n={n}, e={e}); kunci privat d={d}")

pesan = 65                          # pesan berupa angka < n
sandi = pow(pesan, e, n)            # enkripsi: pesan^e mod n
print("pesan", pesan, "-> sandi", sandi)
print("dekripsi:", pow(sandi, d, n))

# tanda tangan digital: "enkripsi" hash dengan kunci PRIVAT, siapa pun memverifikasi dengan kunci PUBLIK
hash_pesan = 123                    # anggap ini hash pesan (diperkecil agar < n)
tanda_tangan = pow(hash_pesan, d, n)
print("tanda tangan:", tanda_tangan, "| verifikasi (dengan kunci publik):", pow(tanda_tangan, e, n) == hash_pesan)
print("pesan dipalsukan, hash 124 :", pow(tanda_tangan, e, n) == 124)

# mengapa aman: penyerang hanya tahu n=3233, bukan p dan q. Faktorisasi n kecil itu mudah:
for k in range(2, 100):
    if n % k == 0: print("n difaktorkan:", k, "x", n // k, "-> kunci privat dapat dihitung; itu sebabnya n harus raksasa"); break`, lang: 'python', run: true, caption: 'Memfaktorkan 3233 trivial. Pada n sepanjang 2048 bit (≈ 617 digit), tidak ada algoritma klasik yang layak; komputer kuantum besar dengan algoritma Shor akan mengubah hal ini, sehingga kriptografi pasca-kuantum sedang distandarisasi (NIST).' },
            { h2: 'Pertukaran kunci Diffie–Hellman' },
            `Dua pihak menyepakati kunci rahasia bersama lewat saluran terbuka. Penyadap yang melihat semua pesan tetap tak dapat menghitung kuncinya, karena bergantung pada kesulitan logaritma diskret.`,
            { code: py`# parameter publik (kecil, untuk belajar)
p, g = 23, 5

a = 6                                   # rahasia Ani (tidak dikirim)
b = 15                                  # rahasia Budi (tidak dikirim)
A = pow(g, a, p)                        # Ani mengirim A = g^a mod p
B = pow(g, b, p)                        # Budi mengirim B = g^b mod p
print("terlihat penyadap: p =", p, "g =", g, "A =", A, "B =", B)

kunci_ani = pow(B, a, p)                # (g^b)^a mod p
kunci_budi = pow(A, b, p)               # (g^a)^b mod p
print("kunci Ani:", kunci_ani, "| kunci Budi:", kunci_budi, "| sama:", kunci_ani == kunci_budi)

# penyadap harus mencari a dari A: untuk p kecil mudah, untuk p 2048 bit tidak mungkin
print("penyadap mencoba semua a:", [x for x in range(1, p) if pow(g, x, p) == A])`, lang: 'python', run: true, caption: 'Pada TLS modern, kunci sesi disepakati dengan varian Diffie–Hellman (ECDHE) yang memberi forward secrecy: kebocoran kunci privat di masa depan tidak membuka rekaman lalu lintas lama.' },
            { h2: 'Menyatukan: apa yang terjadi di HTTPS' },
            { svg: 'flow', label: 'Peran tiap alat di TLS', steps: [{ t: 'Sertifikat dan tanda tangan', d: 'membuktikan server benar (asimetris)' }, { t: 'Pertukaran kunci', d: 'menyepakati kunci sesi (ECDHE)' }, { t: 'Enkripsi simetris', d: 'AES-GCM atau ChaCha20 untuk data' }, { t: 'Integritas', d: 'tag autentikasi memastikan tak ada perubahan' }], caption: 'Asimetris untuk identitas dan kesepakatan kunci, simetris untuk kecepatan, hash/MAC untuk integritas.' },
            { w: 'quiz', title: 'Kuis singkat', questions: [{ q: 'Mengapa cipher substitusi sederhana mudah dipecahkan?', options: ['Analisis frekuensi huruf', 'Kuncinya pendek sekali', 'Perlu komputer kuantum'], answer: 0, why: 'Pola bahasa bocor ke teks sandi.' }, { q: 'Dalam tanda tangan digital, penandatangan memakai...', options: ['Kunci privat', 'Kunci publik', 'Kunci simetris bersama'], answer: 0, why: 'Siapa pun memverifikasi dengan kunci publik.' }, { q: 'Efek avalanche pada hash berarti...', options: ['Perubahan kecil pada masukan mengubah keluaran secara drastis', 'Keluaran makin panjang', 'Hash dapat dibalik'], answer: 0, why: 'Sekitar separuh bit berubah.' }] },
            { exercise: [['Mengapa pesan besar tidak dienkripsi langsung dengan RSA?', 'RSA lambat dan terbatas ukuran pesan; praktiknya RSA/ECDH dipakai untuk menyepakati kunci simetris, lalu data dienkripsi dengan AES.'], ['Apa bedanya hash dan enkripsi?', 'Hash satu arah dan tak punya kunci (untuk verifikasi); enkripsi dua arah dengan kunci (untuk kerahasiaan).'], ['Mengapa kata sandi disimpan sebagai hash bergaram?', 'Agar bocornya basis data tidak mengungkap sandi dan hash identik tidak menunjukkan sandi yang sama.'], ['Apa itu serangan man-in-the-middle terhadap Diffie–Hellman polos?', 'Penyerang menyisip di tengah dan menyepakati kunci terpisah dengan masing-masing pihak; ditangkal dengan autentikasi (sertifikat atau tanda tangan).']] },
            { summary: ['Kriptografi menjamin kerahasiaan, integritas, autentikasi, dan nirsangkal.', 'Cipher klasik patah oleh brute force dan analisis frekuensi.', 'Hash: sidik jari satu arah dengan efek avalanche; pakai SHA-2/3, bukan MD5/SHA-1.', 'Simetris cepat tetapi berbagi kunci sulit; asimetris menyelesaikan distribusi kunci.', 'RSA, Diffie–Hellman, dan tanda tangan digital membentuk dasar HTTPS. Jangan membuat kriptografi sendiri.'] },
        ],
        faq: [['Apa itu kriptografi kurva eliptik (ECC)?', 'Alternatif RSA dengan kunci jauh lebih pendek untuk tingkat keamanan sama (256 bit ECC setara sekitar RSA 3072 bit); dipakai luas di TLS modern.'], ['Apakah enkripsi ujung-ke-ujung aman sepenuhnya?', 'Melindungi isi dari penyedia layanan dan penyadap jaringan, tetapi tidak dari perangkat yang telah disusupi, tidak dari metadata, dan tidak dari penerima yang membocorkannya.'], ['Apa itu kriptografi pasca-kuantum?', 'Algoritma yang diyakini tahan terhadap komputer kuantum; NIST telah memilih standar seperti ML-KEM (Kyber) dan ML-DSA (Dilithium).']],
        sources: [REF_KATZ, ['Dokumentasi Python: hashlib', 'https://docs.python.org/3/library/hashlib.html'], ['NIST: Post-Quantum Cryptography', 'https://csrc.nist.gov/projects/post-quantum-cryptography'], ['Rivest, Shamir, Adleman, A Method for Obtaining Digital Signatures and Public-Key Cryptosystems, CACM 21(2), 1978', 'https://dl.acm.org/doi/10.1145/359340.359342']],
    },
];
