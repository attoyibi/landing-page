const D = '2026-10-28';
const C = 'Rekayasa Software';

export default [
    {
        slug: 'desain-rest-api-yang-baik-endpoint-status-error',
        title: 'Desain REST API yang Baik: Endpoint, Status, Error',
        description: 'Cara mendesain REST API yang mudah dipakai: penamaan endpoint, metode HTTP, kode status yang tepat, format error, pagination, versi API, dan contoh lengkapnya.',
        date: D, category: C, tags: ['REST API', 'desain API', 'HTTP status code', 'backend', 'API design'], cta: 'jasa',
        lead: 'API adalah antarmuka untuk developer lain, termasuk tim frontend dan aplikasi mobile Anda sendiri. API yang dirancang asal-asalan membuat setiap integrasi penuh tebakan. API yang konsisten bisa dipahami hanya dengan melihat beberapa contoh.',
        body: [
            { h2: 'Prinsip utama: sumber daya dan kata kerja' },
            `Di REST, URL menunjuk <b>sumber daya</b> (kata benda), sedangkan <b>metode HTTP</b> menyatakan tindakan. Hindari URL berisi kata kerja seperti <code>/getAllUsers</code> atau <code>/deleteOrder?id=5</code>.`,
            { table: { head: ['Tindakan', 'Metode + URL', 'Respons sukses'], rows: [['Daftar pesanan', '<code>GET /orders</code>', '200 OK + array'], ['Satu pesanan', '<code>GET /orders/42</code>', '200 OK'], ['Buat pesanan', '<code>POST /orders</code>', '201 Created + header Location'], ['Ganti seluruh data', '<code>PUT /orders/42</code>', '200 OK'], ['Ubah sebagian', '<code>PATCH /orders/42</code>', '200 OK'], ['Hapus', '<code>DELETE /orders/42</code>', '204 No Content'], ['Item milik pesanan', '<code>GET /orders/42/items</code>', '200 OK']] } },
            { ul: ['Pakai bentuk jamak dan huruf kecil: <code>/orders</code>, <code>/order-items</code>.', 'Jangan bersarang terlalu dalam; dua tingkat biasanya cukup.', 'Filter, urutan, dan pencarian lewat query: <code>GET /orders?status=paid&amp;sort=-created_at</code>.'] },

            { h2: 'Kode status: jujur kepada klien' },
            `Kesalahan paling umum adalah membalas <code>200 OK</code> untuk segala hal, lalu menulis "error" di dalam body. Klien jadi tidak bisa mengandalkan status HTTP.`,
            { w: 'cards', title: 'Ketuk: kode status apa yang tepat?', items: [
                { tag: 'Situasi', front: 'Email pada form pendaftaran tidak valid.', backTag: 'Status', back: '400 Bad Request, atau 422 Unprocessable Content untuk validasi.' },
                { tag: 'Situasi', front: 'Token login tidak ada atau kedaluwarsa.', backTag: 'Status', back: '401 Unauthorized (belum terautentikasi).' },
                { tag: 'Situasi', front: 'User login, tapi mencoba melihat pesanan orang lain.', backTag: 'Status', back: '403 Forbidden, atau 404 agar tidak membocorkan keberadaannya.' },
                { tag: 'Situasi', front: 'Mendaftar dengan email yang sudah terdaftar.', backTag: 'Status', back: '409 Conflict.' },
                { tag: 'Situasi', front: 'Klien mengirim terlalu banyak permintaan.', backTag: 'Status', back: '429 Too Many Requests, sertakan header Retry-After.' },
                { tag: 'Situasi', front: 'Database server mati.', backTag: 'Status', back: '500 Internal Server Error atau 503 Service Unavailable. Jangan tampilkan stack trace.' },
            ] },

            { h2: 'Format error yang konsisten' },
            `Pilih satu bentuk error dan pakai di seluruh API. RFC 9457 (Problem Details for HTTP APIs) adalah standar yang bisa langsung diikuti.`,
            { code: 'HTTP/1.1 422 Unprocessable Content\nContent-Type: application/problem+json\n\n{\n  "type": "https://api.toko.id/errors/validasi",\n  "title": "Data tidak valid",\n  "status": 422,\n  "detail": "Ada 2 kolom yang perlu diperbaiki.",\n  "errors": [\n    { "field": "email", "message": "Format email tidak valid" },\n    { "field": "jumlah", "message": "Minimal 1" }\n  ]\n}' },

            { h2: 'Pagination untuk data yang banyak' },
            { w: 'compare', title: 'Dua cara pagination', tabs: [
                { label: 'Offset', html: '<code>GET /orders?page=3&amp;per_page=20</code><br><b>Kelebihan:</b> mudah, bisa lompat ke halaman tertentu.<br><b>Kekurangan:</b> lambat pada data sangat besar, dan data bisa tergeser bila ada baris baru saat pengguna menggulir.' },
                { label: 'Cursor', html: '<code>GET /orders?limit=20&amp;after=ord_8f2a</code><br><b>Kelebihan:</b> stabil dan cepat untuk feed atau infinite scroll.<br><b>Kekurangan:</b> tidak bisa langsung lompat ke halaman 50.' },
            ] },
            { code: '{\n  "data": [ { "id": "ord_8f2b", "total": 150000 } ],\n  "meta": { "next_cursor": "ord_8f3c", "has_more": true }\n}' },

            { h2: 'Versi API dan perubahan yang aman' },
            `Begitu ada aplikasi mobile yang memakai API Anda, Anda tidak bisa memaksa semua pengguna memperbarui aplikasi. Karena itu perubahan perlu dijaga:`,
            { ul: ['<b>Aman:</b> menambah field baru, menambah endpoint baru, menambah parameter opsional.', '<b>Merusak:</b> menghapus atau mengganti nama field, mengubah tipe data, mengubah arti status.', 'Untuk perubahan yang merusak, buat versi baru: <code>/v2/orders</code> atau header versi, dan beri masa transisi.'] },

            { h2: 'Hal kecil yang sangat membantu' },
            { ul: ['Tanggal dalam format ISO 8601 dengan zona waktu: <code>2026-10-28T09:30:00+07:00</code>.', 'Uang disimpan sebagai bilangan bulat (rupiah atau sen), bukan float.', 'Satu gaya penamaan field: <code>snake_case</code> atau <code>camelCase</code>, jangan campur.', 'Dokumentasikan dengan OpenAPI agar bisa dicoba langsung di Swagger UI.', 'Gunakan HTTPS selalu dan batasi laju (rate limit).'] },
            { w: 'checklist', title: 'Review API Anda', items: ['URL berupa kata benda jamak, bukan kata kerja.', 'Metode HTTP sesuai tindakan.', 'Status code jujur, bukan 200 untuk semua.', 'Bentuk error sama di seluruh endpoint.', 'Daftar panjang memakai pagination.', 'Ada dokumentasi OpenAPI yang selalu diperbarui.', 'Perubahan merusak hanya terjadi di versi baru.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Respons paling tepat setelah berhasil membuat data baru?', options: ['200 OK', '201 Created', '204 No Content'], answer: 1, why: '201 menandakan sumber daya baru dibuat.' },
                { q: 'Mana desain URL yang lebih baik?', options: ['POST /createOrder', 'POST /orders', 'GET /orders/create'], answer: 1, why: 'URL kata benda, tindakannya dari metode POST.' },
                { q: 'Menghapus field "phone" dari respons termasuk perubahan...', options: ['Aman', 'Merusak (breaking)'], answer: 1, why: 'Klien yang membaca field itu akan rusak.' },
            ] },
        ],
        faq: [
            ['Apa beda PUT dan PATCH?', 'PUT mengganti seluruh representasi sumber daya, PATCH mengubah sebagian field saja.'],
            ['Haruskah semua API berbentuk REST?', 'Tidak. GraphQL cocok untuk kebutuhan data yang sangat bervariasi, dan RPC/gRPC cocok untuk komunikasi antar layanan internal. REST tetap pilihan yang paling mudah dipahami banyak orang.'],
            ['Bagaimana mengamankan API publik?', 'HTTPS, autentikasi (token atau OAuth), otorisasi per sumber daya, validasi input, rate limit, dan log akses.'],
        ],
        sources: [
            ['MDN: HTTP response status codes', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'],
            ['RFC 9457: Problem Details for HTTP APIs', 'https://www.rfc-editor.org/rfc/rfc9457'],
            ['OpenAPI Specification', 'https://spec.openapis.org/oas/latest.html'],
        ],
    },

    {
        slug: 'graphql-vs-rest-bedanya-dan-kapan-memakai',
        title: 'GraphQL vs REST: Bedanya dan Kapan Memakainya',
        description: 'Perbandingan GraphQL dan REST dengan contoh query: masalah over-fetching, skema, resolver, N+1, caching, keamanan, dan panduan memilih untuk proyek Anda.',
        date: D, category: C, tags: ['GraphQL', 'REST API', 'backend', 'Apollo', 'API'], cta: 'jasa',
        lead: 'GraphQL sering diperkenalkan sebagai "pengganti REST". Kenyataannya lebih menarik: GraphQL menyelesaikan masalah tertentu dengan sangat baik, tetapi membawa kerumitan baru. Artikel ini membandingkan keduanya dengan contoh yang sama agar Anda bisa memilih dengan sadar.',
        body: [
            { h2: 'Masalah yang ingin diselesaikan GraphQL' },
            `Bayangkan halaman profil di aplikasi mobile butuh: nama pengguna, tiga pesanan terakhir, dan nama produk tiap pesanan. Dengan REST klasik:`,
            { code: 'GET /users/7            → 30 field, padahal butuh 2 (over-fetching)\nGET /users/7/orders     → semua pesanan, padahal butuh 3\nGET /products/101       → satu per satu untuk tiap produk (under-fetching)\nGET /products/205\nGET /products/318' },
            `Dengan GraphQL, klien menulis satu query yang menyebutkan <b>persis</b> data yang dibutuhkan:`,
            { code: 'query {\n  user(id: 7) {\n    name\n    orders(last: 3) {\n      total\n      items { product { name } }\n    }\n  }\n}' },
            `Server menjawab dengan bentuk JSON yang sama persis dengan query. Satu permintaan, tanpa field berlebih.`,

            { h2: 'Bagaimana GraphQL bekerja di server' },
            { svg: 'flow', label: 'Perjalanan sebuah query GraphQL', steps: [{ t: 'Klien kirim query', d: 'POST /graphql' }, { t: 'Validasi ke skema', d: 'field dan tipe harus ada' }, { t: 'Resolver dijalankan', d: 'tiap field punya fungsi' }, { t: 'Gabung hasil', d: 'JSON sesuai bentuk query' }] },
            { code: '# Skema: kontrak antara klien dan server\ntype User {\n  id: ID!\n  name: String!\n  orders(last: Int): [Order!]!\n}\n\ntype Order {\n  id: ID!\n  total: Int!\n  items: [OrderItem!]!\n}\n\ntype Query {\n  user(id: ID!): User\n}' },

            { h2: 'Perbandingan langsung' },
            { table: { head: ['Aspek', 'REST', 'GraphQL'], rows: [['Endpoint', 'Banyak URL', 'Biasanya satu (/graphql)'], ['Bentuk data', 'Ditentukan server', 'Dipilih klien'], ['Caching HTTP', 'Mudah (GET + URL unik)', 'Perlu strategi khusus (persisted query, cache klien)'], ['Kontrak', 'OpenAPI (opsional)', 'Skema wajib dan bertipe'], ['Upload file', 'Sederhana', 'Butuh spesifikasi tambahan'], ['Kurva belajar', 'Rendah', 'Lebih tinggi'], ['Status error', 'Kode status HTTP', 'Sering 200 dengan array errors']] } },

            { h2: 'Jebakan yang perlu diketahui' },
            { w: 'cards', title: 'Ketuk untuk solusinya', items: [
                { tag: 'Masalah N+1', front: 'Query 50 pesanan, lalu resolver produk memanggil database 50 kali.', backTag: 'Solusi', back: 'Gunakan DataLoader (batching): kumpulkan semua id produk, ambil sekaligus dengan satu query.' },
                { tag: 'Query terlalu berat', front: 'Klien bisa meminta data bersarang sangat dalam dan membebani server.', backTag: 'Solusi', back: 'Batasi kedalaman dan kompleksitas query, pakai rate limit, atau hanya izinkan persisted queries.' },
                { tag: 'Otorisasi', front: 'Satu endpoint membuat aturan akses mudah terlupa di field tertentu.', backTag: 'Solusi', back: 'Periksa izin di lapisan bisnis atau resolver untuk setiap tipe, bukan hanya di pintu masuk.' },
                { tag: 'Introspection', front: 'Siapa pun bisa melihat seluruh skema di produksi.', backTag: 'Solusi', back: 'Pertimbangkan mematikan introspection di produksi untuk API privat.' },
            ] },

            { h2: 'Kapan memilih yang mana?' },
            { w: 'choose', title: 'Jawab tiga pertanyaan', questions: [
                { q: 'Siapa pemakai API Anda?', options: [{ t: 'Banyak klien berbeda (web, mobile, partner) dengan kebutuhan data berbeda', add: { gql: 3 } }, { t: 'Satu frontend milik sendiri', add: { rest: 2 } }, { t: 'Publik/pihak ketiga yang butuh dokumentasi sederhana', add: { rest: 3 } }] },
                { q: 'Seberapa rumit relasi datanya?', options: [{ t: 'Banyak relasi bersarang (user, pesanan, produk, ulasan)', add: { gql: 2 } }, { t: 'Cukup datar, CRUD biasa', add: { rest: 2 } }] },
                { q: 'Pengalaman tim?', options: [{ t: 'Sudah terbiasa GraphQL', add: { gql: 2 } }, { t: 'Baru pertama', add: { rest: 2 } }] },
            ], results: { gql: { title: 'GraphQL layak dipertimbangkan', text: 'Kebutuhan data yang beragam dan relasi bersarang adalah kekuatan GraphQL. Siapkan DataLoader, batas kompleksitas query, dan otorisasi per tipe sejak awal.' }, rest: { title: 'REST kemungkinan lebih tepat', text: 'Untuk CRUD biasa dan API publik, REST lebih sederhana, mudah di-cache, dan mudah dipahami. Anda selalu bisa menambah endpoint khusus untuk kebutuhan layar tertentu.' } } },
            { callout: 'Banyak perusahaan memakai keduanya: REST untuk API publik dan webhook, GraphQL sebagai lapisan untuk aplikasi frontend mereka sendiri.', kind: 'info', title: 'Bukan harus salah satu' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Masalah N+1 di GraphQL biasanya diatasi dengan...', options: ['Menambah server', 'Batching memakai DataLoader', 'Mengganti ke REST'], answer: 1, why: 'Batching menggabungkan banyak panggilan menjadi satu query.' },
                { q: 'Keunggulan utama GraphQL adalah...', options: ['Klien memilih persis data yang dibutuhkan', 'Caching HTTP otomatis', 'Tidak perlu skema'], answer: 0, why: 'Klien menentukan bentuk data.' },
            ] },
        ],
        faq: [
            ['Apakah GraphQL lebih cepat dari REST?', 'Tidak otomatis. GraphQL bisa mengurangi jumlah permintaan dari klien, tetapi performa server tergantung resolver dan query database Anda.'],
            ['Library apa yang dipakai?', 'Di Node.js: Apollo Server, GraphQL Yoga. Di Laravel: Lighthouse. Di Python: Strawberry, Graphene. Di klien: Apollo Client, urql, atau Relay.'],
            ['Apakah GraphQL butuh database khusus?', 'Tidak. GraphQL adalah lapisan API; datanya boleh dari PostgreSQL, MySQL, Firebase, atau REST API lain.'],
        ],
        sources: [
            ['GraphQL.org: Learn GraphQL', 'https://graphql.org/learn/'],
            ['GraphQL.org: Best Practices (pagination, caching, authorization)', 'https://graphql.org/learn/best-practices/'],
            ['DataLoader (GitHub graphql/dataloader)', 'https://github.com/graphql/dataloader'],
        ],
    },

    {
        slug: 'autentikasi-session-jwt-oauth-dijelaskan',
        title: 'Autentikasi: Session, JWT, dan OAuth Dijelaskan',
        description: 'Beda session cookie, JWT, dan OAuth 2.0 dengan diagram sederhana: cara kerja, risiko keamanan, tempat menyimpan token, dan kapan memakai masing-masing.',
        date: D, category: C, tags: ['autentikasi', 'JWT', 'OAuth 2.0', 'session', 'keamanan web'], cta: 'jasa',
        lead: 'Login terlihat sederhana: isi email dan password, masuk. Di balik layar, server harus terus mengingat siapa Anda di setiap klik berikutnya. Ada beberapa cara melakukannya, dan memilih yang salah bisa membuka celah keamanan.',
        body: [
            { h2: 'Autentikasi vs otorisasi' },
            { svg: 'versus', label: 'Dua pertanyaan berbeda', left: { title: 'Autentikasi', items: ['"Kamu siapa?"', 'Login, OTP, passkey', 'Gagal: 401 Unauthorized'] }, right: { title: 'Otorisasi', items: ['"Kamu boleh apa?"', 'Peran, izin, kepemilikan data', 'Gagal: 403 Forbidden'] } },

            { h2: '1. Session berbasis cookie' },
            `Cara klasik dan masih sangat baik untuk aplikasi web. Setelah login, server membuat <b>session</b> (disimpan di memori, database, atau Redis) dan mengirim <b>id session</b> acak dalam cookie. Browser otomatis mengirim cookie itu di setiap permintaan.`,
            { svg: 'flow', label: 'Alur session', steps: [{ t: 'Login', d: 'email + password' }, { t: 'Server simpan session', d: 'id acak → data user' }, { t: 'Set-Cookie', d: 'HttpOnly, Secure' }, { t: 'Permintaan berikutnya', d: 'cookie dikirim otomatis' }, { t: 'Logout', d: 'session dihapus di server' }] },
            { code: 'Set-Cookie: sid=9f8a7c...; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=86400' },
            { ul: ['<b>HttpOnly:</b> JavaScript tidak bisa membaca cookie, mengurangi dampak XSS.', '<b>Secure:</b> hanya dikirim lewat HTTPS.', '<b>SameSite:</b> membatasi pengiriman dari situs lain, mengurangi CSRF.'] },
            `Laravel, Django, Rails, dan Express (express-session) menyediakan ini bawaan.`,

            { h2: '2. JWT (JSON Web Token)' },
            `JWT adalah token yang <b>berisi data</b> (misalnya id user dan waktu kedaluwarsa) dan <b>ditandatangani</b> server. Server tidak perlu menyimpan session; cukup memeriksa tanda tangannya.`,
            { code: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzk5OTk5OTk5fQ.Tq3...\n\n# tiga bagian dipisah titik:\n# header  : {"alg":"HS256"}\n# payload : {"sub":"7","role":"admin","exp":1799999999}\n# signature: tanda tangan dari header + payload + kunci rahasia' },
            { callout: 'Payload JWT hanya di-encode Base64, <b>tidak dienkripsi</b>. Siapa pun yang memegang token bisa membaca isinya. Jangan simpan data sensitif di sana.', kind: 'warn', title: 'Bukan rahasia' },
            { table: { head: ['Kelebihan JWT', 'Kekurangan JWT'], rows: [['Tidak perlu penyimpanan session di server', 'Sulit dicabut sebelum kedaluwarsa'], ['Cocok untuk API dan banyak layanan', 'Token besar dikirim setiap permintaan'], ['Mudah dipakai aplikasi mobile', 'Mudah salah konfigurasi (algoritma, masa berlaku)']] } },
            `Praktik umum: <b>access token</b> berumur pendek (misalnya 15 menit) plus <b>refresh token</b> berumur panjang yang disimpan aman dan bisa dicabut di server.`,

            { h2: '3. OAuth 2.0 dan OpenID Connect' },
            `OAuth 2.0 bukan cara login, melainkan cara <b>memberi izin</b> aplikasi lain mengakses data Anda tanpa memberi password. Contoh: aplikasi kalender meminta izin membaca Google Calendar Anda. <b>OpenID Connect</b> (OIDC) adalah lapisan di atas OAuth untuk login ("Masuk dengan Google").`,
            { svg: 'flow', label: 'Alur Authorization Code + PKCE (disederhanakan)', steps: [{ t: 'Klik "Masuk dengan Google"', d: 'diarahkan ke Google' }, { t: 'Login & setujui izin', d: 'di halaman Google' }, { t: 'Kembali dengan code', d: 'ke redirect URI' }, { t: 'Tukar code', d: 'menjadi token' }, { t: 'Akses data', d: 'sesuai izin (scope)' }] },
            `Untuk aplikasi web dan mobile modern, alur yang direkomendasikan adalah <b>Authorization Code dengan PKCE</b>. Alur lama "implicit" sudah tidak dianjurkan.`,

            { h2: 'Jadi pakai yang mana?' },
            { w: 'cards', title: 'Ketuk untuk rekomendasi', items: [
                { tag: 'Kasus', front: 'Aplikasi web biasa dengan backend sendiri (Laravel, Django, Express).', backTag: 'Saran', back: 'Session cookie HttpOnly. Paling sederhana dan mudah di-logout.' },
                { tag: 'Kasus', front: 'Aplikasi mobile Flutter yang memanggil API.', backTag: 'Saran', back: 'Access token pendek + refresh token, disimpan di secure storage perangkat.' },
                { tag: 'Kasus', front: 'Ingin login dengan akun Google atau Microsoft.', backTag: 'Saran', back: 'OpenID Connect lewat library atau layanan (Firebase Auth, Auth0, Supabase Auth, Keycloak).' },
                { tag: 'Kasus', front: 'Banyak layanan internal saling memanggil.', backTag: 'Saran', back: 'Token bertanda tangan (JWT) dengan masa berlaku pendek, atau mTLS.' },
            ] },
            { callout: 'Menyimpan token di localStorage membuatnya bisa dicuri bila ada celah XSS. Untuk aplikasi web, cookie HttpOnly umumnya lebih aman.', kind: 'warn', title: 'Di mana menyimpan token?' },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Isi payload JWT...', options: ['Terenkripsi sehingga aman', 'Bisa dibaca siapa pun yang memegang token', 'Disimpan di server'], answer: 1, why: 'Hanya ditandatangani, tidak dienkripsi.' },
                { q: 'OAuth 2.0 pada dasarnya untuk...', options: ['Memberi izin akses tanpa membagikan password', 'Mengenkripsi database', 'Menggantikan HTTPS'], answer: 0, why: 'Login di atas OAuth ditangani OpenID Connect.' },
            ] },
        ],
        faq: [
            ['Apakah JWT lebih aman dari session?', 'Tidak otomatis. Keduanya aman bila dikonfigurasi benar. Session lebih mudah dicabut; JWT lebih mudah dipakai lintas layanan.'],
            ['Sebaiknya membuat sistem login sendiri?', 'Pakai fitur bawaan framework atau layanan autentikasi yang sudah teruji. Menulis kriptografi sendiri berisiko tinggi.'],
            ['Apa itu passkey?', 'Cara login tanpa password berbasis kriptografi kunci publik (WebAuthn). Lebih tahan phishing dan makin didukung browser serta ponsel.'],
        ],
        sources: [
            ['OWASP Cheat Sheet: Session Management', 'https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html'],
            ['RFC 7519: JSON Web Token (JWT)', 'https://www.rfc-editor.org/rfc/rfc7519'],
            ['RFC 7636: Proof Key for Code Exchange (PKCE)', 'https://www.rfc-editor.org/rfc/rfc7636'],
            ['OAuth.net: OAuth 2.0', 'https://oauth.net/2/'],
        ],
    },

    {
        slug: 'owasp-top-10-2025-untuk-developer',
        title: 'OWASP Top 10 2025: Risiko Keamanan Web untuk Developer',
        description: 'OWASP Top 10:2025 dengan bahasa sederhana: broken access control, supply chain, injection, salah konfigurasi, dan langkah pencegahan tiap risiko.',
        date: D, category: C, tags: ['OWASP Top 10', 'keamanan web', 'secure coding', 'SQL injection', 'cyber security'], cta: 'jasa',
        lead: 'OWASP Top 10 adalah daftar risiko keamanan aplikasi web yang paling kritis, disusun komunitas OWASP dari data pengujian ribuan aplikasi dan survei praktisi. Edisi 2025 adalah edisi kedelapan dan membawa dua kategori baru. Berikut penjelasan setiap risiko dan apa yang bisa Anda lakukan di kode sehari-hari.',
        body: [
            { h2: 'Daftar lengkap OWASP Top 10:2025' },
            { table: { head: ['No', 'Kategori', 'Inti masalah'], rows: [
                ['A01', 'Broken Access Control', 'Pengguna bisa melihat atau mengubah data yang bukan haknya.'],
                ['A02', 'Security Misconfiguration', 'Pengaturan default, debug menyala, izin cloud terlalu longgar.'],
                ['A03', 'Software Supply Chain Failures <i>(baru)</i>', 'Dependensi, build, atau pipeline yang tidak terjaga.'],
                ['A04', 'Cryptographic Failures', 'Data sensitif tidak dienkripsi atau memakai algoritma lemah.'],
                ['A05', 'Injection', 'Input pengguna dieksekusi sebagai perintah: SQL, XSS, command.'],
                ['A06', 'Insecure Design', 'Celah sejak rancangan, misalnya tidak ada batas percobaan OTP.'],
                ['A07', 'Authentication Failures', 'Login lemah, sesi tidak dikelola benar.'],
                ['A08', 'Software or Data Integrity Failures', 'Mempercayai kode atau data tanpa verifikasi.'],
                ['A09', 'Logging & Alerting Failures', 'Serangan terjadi tanpa tercatat atau tanpa ada yang diberi tahu.'],
                ['A10', 'Mishandling of Exceptional Conditions <i>(baru)</i>', 'Error ditangani salah sehingga sistem gagal secara tidak aman.'],
            ] } },
            `Dibanding edisi 2021, SSRF tidak lagi menjadi kategori sendiri dan digabung ke Broken Access Control, sedangkan Security Misconfiguration naik ke posisi kedua.`,

            { h2: 'A01: Broken Access Control, tetap nomor satu' },
            `Contoh klasik: URL <code>/invoice/1043</code> menampilkan invoice. Pengguna mengganti angka menjadi <code>1044</code> dan melihat invoice orang lain. Ini disebut IDOR.`,
            { code: '// Rentan: hanya mencari berdasarkan id\nconst invoice = await db.invoice.findUnique({ where: { id } });\n\n// Aman: id DAN pemiliknya harus cocok\nconst invoice = await db.invoice.findFirst({\n  where: { id, userId: req.user.id },\n});\nif (!invoice) return res.status(404).end();' },
            { ul: ['Tolak secara default; izinkan secara eksplisit.', 'Periksa kepemilikan di server untuk setiap permintaan, bukan hanya menyembunyikan tombol di frontend.', 'Gunakan policy atau middleware terpusat (misalnya Policy di Laravel).'] },

            { h2: 'A03: Supply chain, ancaman dari dependensi' },
            `Aplikasi modern berisi ratusan paket pihak ketiga. Satu paket yang dibajak atau typosquatting (nama mirip paket populer) bisa menyusupkan kode jahat.`,
            { ul: ['Commit lockfile dan pasang dengan <code>npm ci</code> atau setara.', 'Aktifkan pemindai dependensi (Dependabot, npm audit, composer audit).', 'Periksa paket baru sebelum dipasang: pengelola, jumlah unduhan, aktivitas.', 'Batasi izin token CI dan pin versi action pihak ketiga.'] },

            { h2: 'A05: Injection' },
            { code: "# Rentan SQL injection\ncursor.execute(f\"SELECT * FROM users WHERE email = '{email}'\")\n# input: ' OR '1'='1  → semua user terbaca\n\n# Aman: parameterized query\ncursor.execute(\"SELECT * FROM users WHERE email = %s\", (email,))" },
            `Untuk XSS, gunakan escaping otomatis dari framework (React, Vue, Blade sudah melakukannya) dan hindari <code>innerHTML</code>, <code>v-html</code>, atau <code>{!! !!}</code> untuk data dari pengguna.`,

            { h2: 'A10: Salah menangani kondisi tak terduga' },
            `Kategori baru ini mencakup error yang ditangani sembarangan: menampilkan stack trace ke pengguna, transaksi yang setengah jalan saat error, atau logika "gagal terbuka" (fail open), misalnya pemeriksaan izin yang error lalu dianggap lolos.`,
            { code: '// Gagal terbuka (berbahaya)\ntry { allowed = await checkPermission(user) } catch { allowed = true }\n\n// Gagal tertutup (aman)\ntry { allowed = await checkPermission(user) } catch (e) {\n  logger.error(e); allowed = false;\n}' },

            { h2: 'Cek cepat aplikasi Anda' },
            { w: 'checklist', title: 'Daftar periksa keamanan dasar', items: ['Setiap endpoint memeriksa kepemilikan data di server.', 'Mode debug mati di produksi dan pesan error tidak membocorkan detail.', 'Semua query database memakai parameter, bukan gabungan string.', 'Password disimpan dengan bcrypt atau Argon2.', 'Dependensi dipindai otomatis dan diperbarui rutin.', 'Login dibatasi percobaannya (rate limit) dan mendukung 2FA.', 'Kejadian penting (login gagal, perubahan izin) dicatat dan ada notifikasi.', 'Secret tidak ada di repositori.', 'HTTPS di semua halaman dengan header keamanan dasar.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Kategori nomor satu OWASP Top 10:2025?', options: ['Injection', 'Broken Access Control', 'Cryptographic Failures'], answer: 1, why: 'Broken Access Control tetap di posisi pertama.' },
                { q: 'Cara utama mencegah SQL injection?', options: ['Menyembunyikan form', 'Parameterized query / prepared statement', 'Memakai HTTPS'], answer: 1, why: 'Parameter memisahkan data dari perintah SQL.' },
                { q: 'Mengganti id di URL lalu melihat data orang lain termasuk...', options: ['Broken Access Control', 'Logging Failures', 'Supply Chain'], answer: 0, why: 'Server tidak memeriksa hak akses atas data itu.' },
            ] },
        ],
        faq: [
            ['Apakah OWASP Top 10 sebuah standar wajib?', 'Bukan standar sertifikasi, melainkan dokumen kesadaran. Untuk persyaratan yang bisa diuji, OWASP menyediakan ASVS (Application Security Verification Standard).'],
            ['Ada versi khusus untuk aplikasi AI?', 'Ada. OWASP Top 10 for LLM Applications membahas risiko seperti prompt injection dan kebocoran data lewat model.'],
            ['Seberapa sering daftar ini diperbarui?', 'Biasanya setiap tiga sampai empat tahun. Edisi sebelumnya terbit 2017 dan 2021.'],
        ],
        sources: [
            ['OWASP Top 10:2025 (situs resmi)', 'https://owasp.org/Top10/2025/'],
            ['OWASP Cheat Sheet: SQL Injection Prevention', 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html'],
            ['OWASP Application Security Verification Standard (ASVS)', 'https://owasp.org/www-project-application-security-verification-standard/'],
        ],
    },

    {
        slug: 'menyimpan-password-dengan-aman-hashing-bcrypt',
        title: 'Menyimpan Password dengan Aman: Hashing dan bcrypt',
        description: 'Kenapa password tidak boleh disimpan polos atau dengan MD5: hashing, salt, bcrypt, Argon2, contoh kode Node.js, Python, Laravel, dan kebijakan modern.',
        date: D, category: C, tags: ['hashing password', 'bcrypt', 'Argon2', 'keamanan aplikasi', 'salt'], cta: 'jasa',
        lead: 'Kebocoran database terjadi bahkan pada perusahaan besar. Pertanyaannya bukan hanya "bagaimana mencegah bocor", tetapi juga "bila bocor, apakah password pengguna ikut terbaca?". Jawabannya ditentukan oleh cara Anda menyimpan password sejak hari pertama.',
        body: [
            { h2: 'Empat cara menyimpan, dari terburuk' },
            { table: { head: ['Cara', 'Bila database bocor'], rows: [['Teks asli', 'Semua password langsung terbaca. Fatal.'], ['Enkripsi (bisa dibuka dengan kunci)', 'Bila kunci ikut bocor, semua terbuka.'], ['Hash cepat (MD5, SHA-1, SHA-256 polos)', 'Bisa ditebak miliaran kali per detik dengan GPU dan tabel siap pakai.'], ['Hash lambat + salt (bcrypt, Argon2, scrypt)', 'Menebak satu password saja menjadi sangat mahal.']] } },

            { h2: 'Apa itu hash?' },
            `Hash adalah fungsi satu arah: dari password menghasilkan "sidik jari" berukuran tetap, tetapi dari sidik jari tidak bisa dikembalikan ke password. Saat login, server menghitung hash dari password yang diketik lalu membandingkannya.`,
            { svg: 'flow', label: 'Pendaftaran dan login', steps: [{ t: 'Daftar', d: 'password "kopi123"' }, { t: 'Hash + salt', d: '$2b$12$Kx9...' }, { t: 'Simpan hash', d: 'bukan password' }, { t: 'Login', d: 'hash ulang yang diketik' }, { t: 'Cocok?', d: 'masuk / tolak' }] },

            { h2: 'Kenapa MD5 dan SHA-256 polos tidak cukup' },
            `MD5 dan SHA dirancang untuk <b>cepat</b>, berguna untuk memeriksa file. Untuk password, kecepatan justru membantu penyerang: GPU modern bisa mencoba miliaran tebakan per detik. Selain itu, password yang sama selalu menghasilkan hash yang sama, sehingga penyerang memakai tabel hash siap pakai (rainbow table).`,
            { h3: 'Salt: bumbu acak per pengguna' },
            `Salt adalah nilai acak unik yang ditambahkan ke password sebelum di-hash. Dua pengguna dengan password "kopi123" akan punya hash berbeda, dan tabel siap pakai menjadi tidak berguna. bcrypt dan Argon2 membuat dan menyimpan salt otomatis di dalam string hash.`,
            { h3: 'Work factor: sengaja dibuat lambat' },
            `bcrypt punya parameter <i>cost</i>. Setiap kenaikan 1 membuat perhitungan sekitar dua kali lebih lambat. Targetnya: cukup cepat untuk satu login (puluhan sampai ratusan milidetik), tetapi sangat mahal bagi penyerang yang mencoba miliaran kali.`,
            { w: 'calc', title: 'Kenaikan biaya bcrypt', desc: 'Bandingkan waktu relatif terhadap cost 10.', inputs: [{ id: 'c', label: 'Cost bcrypt', value: 12, min: 8, max: 16, step: 1 }], outputs: [{ label: 'Lebih lambat dari cost 10 sebanyak', expr: 'pow(2, c - 10)', fmt: 'num', unit: 'x', big: true, note: 'Waktu sebenarnya tergantung server. Ukur di server Anda dan pilih cost tertinggi yang login-nya masih terasa cepat.' }] },

            { h2: 'Contoh kode' },
            { w: 'compare', title: 'Pilih bahasa', tabs: [
                { label: 'Node.js', html: '<pre><code>import bcrypt from "bcrypt";\n\nconst hash = await bcrypt.hash(password, 12);\n// simpan hash ke database\n\nconst ok = await bcrypt.compare(input, hash);</code></pre>' },
                { label: 'Python', html: '<pre><code>from argon2 import PasswordHasher\nph = PasswordHasher()\n\nhash = ph.hash(password)\ntry:\n    ph.verify(hash, input)\nexcept Exception:\n    print("password salah")</code></pre>' },
                { label: 'Laravel', html: '<pre><code>use Illuminate\\Support\\Facades\\Hash;\n\n$hash = Hash::make($password);\n\nif (Hash::check($input, $hash)) {\n    // login berhasil\n}</code></pre>Laravel memakai bcrypt secara default dan bisa diatur ke Argon2.' },
            ] },
            { callout: 'Rekomendasi OWASP saat ini: Argon2id sebagai pilihan utama; bila tidak tersedia, scrypt; untuk sistem lama, bcrypt dengan work factor minimal 10. Jangan menulis algoritma hash sendiri.', kind: 'info', title: 'Algoritma yang dianjurkan' },

            { h2: 'Kebijakan password yang masuk akal' },
            `Pedoman NIST SP 800-63B (revisi terbaru) menggeser banyak kebiasaan lama:`,
            { ul: ['Utamakan <b>panjang</b>: izinkan password panjang (frasa sandi). Revisi 4 mensyaratkan minimal 15 karakter bila password menjadi satu-satunya faktor, dan minimal 8 bila dipakai bersama faktor kedua.', '<b>Jangan paksa</b> kombinasi rumit seperti "wajib simbol dan angka".', '<b>Jangan paksa ganti berkala</b> tanpa alasan; ganti bila ada indikasi bocor.', 'Tolak password yang ada di daftar password bocor atau terlalu umum.', 'Izinkan tempel (paste) agar pengguna bisa memakai password manager.', 'Batasi percobaan login dan tawarkan 2FA atau passkey.'] },
            { w: 'quiz', title: 'Kuis singkat', questions: [
                { q: 'Mengapa MD5 tidak cocok untuk password?', options: ['Terlalu lambat', 'Terlalu cepat sehingga mudah ditebak massal', 'Tidak bisa dipakai di PHP'], answer: 1, why: 'Kecepatan memudahkan brute force.' },
                { q: 'Fungsi salt adalah...', options: ['Membuat password yang sama menghasilkan hash berbeda', 'Mengenkripsi database', 'Mempercepat login'], answer: 0, why: 'Salt unik mematahkan tabel hash siap pakai.' },
            ] },
        ],
        faq: [
            ['Bisakah admin melihat password pengguna?', 'Seharusnya tidak bisa. Bila sistem bisa menampilkan atau mengirim password lama Anda lewat email, berarti password disimpan tidak aman.'],
            ['Bagaimana memigrasi hash MD5 lama?', 'Saat pengguna login berhasil, hash ulang password mereka dengan Argon2 atau bcrypt. Untuk yang tidak login, bungkus hash MD5 lama dengan bcrypt sementara, lalu paksa reset bila perlu.'],
            ['Apa itu pepper?', 'Rahasia tambahan yang disimpan terpisah dari database (misalnya di variabel lingkungan), sebagai lapisan pertahanan ekstra.'],
        ],
        sources: [
            ['OWASP Cheat Sheet: Password Storage', 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html'],
            ['NIST SP 800-63B: Digital Identity Guidelines, Authentication', 'https://pages.nist.gov/800-63-4/sp800-63b.html'],
            ['Laravel Docs: Hashing', 'https://laravel.com/docs/hashing'],
        ],
    },
];
