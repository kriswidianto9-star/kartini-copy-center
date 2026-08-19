import "./App.css";

const layanan = [
  {
    icon: "📄",
    title: "Fotokopi",
    description: "Fotokopi hitam putih dan warna untuk ukuran A4, F4, dan A3.",
  },
  {
    icon: "📕",
    title: "Jilid Hardcover",
    description: "Jilid hardcover untuk laporan, skripsi, tugas, dan dokumen penting.",
  },
  {
    icon: "📘",
    title: "Jilid Softcover",
    description: "Jilid softcover yang rapi dan cocok untuk berbagai kebutuhan dokumen.",
  },
  {
    icon: "🔖",
    title: "Pembuatan Stempel",
    description: "Pembuatan stempel untuk kebutuhan usaha, kantor, organisasi, dan pribadi.",
  },
  {
    icon: "🪧",
    title: "Cetak Spanduk",
    description: "Cetak spanduk untuk promosi, acara, usaha, dan berbagai kebutuhan lainnya.",
  },
  {
    icon: "🖨️",
    title: "Layanan Print",
    description: "Print dokumen dan berbagai kebutuhan cetak dengan hasil yang rapi.",
  },
  {
    icon: "📚",
    title: "Jilid Spiral",
    description: "Jilid spiral besi dan plastik untuk laporan, modul, buku, dan dokumen.",
  },
  {
    icon: "✨",
    title: "Laminating",
    description: "Laminating dokumen agar lebih terlindungi, awet, dan terlihat rapi.",
  },
  {
    icon: "🖼️",
    title: "Cetak Poster",
    description: "Cetak poster untuk promosi, pengumuman, kegiatan, dan kebutuhan lainnya.",
  },
];

const nomorWhatsApp = "6289530495636";

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">K</div>

          <div>
            <h2>Kartini</h2>
            <span>Copy Center</span>
          </div>
        </div>

        <nav>
        <a href="#beranda">Beranda</a>
        <a href="#layanan">Layanan</a>
        <a href="#pesan">Pesan</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#tentang">Tentang Kami</a>
        <a href="#kontak">Kontak</a>
      </nav>

        <a
          className="nav-button"
          href={`https://wa.me/${nomorWhatsApp}`}
          target="_blank"
          rel="noreferrer"
        >
          Pesan Sekarang
        </a>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="beranda">
          <div className="hero-content">
            <div className="badge">
              ✦ Melayani Setiap Hari • 07.00–00.00
            </div>

            <h1>
              Cetak Kebutuhanmu.
              <br />
              <span>Lebih Cepat & Berkualitas.</span>
            </h1>

            <p>
              Selamat datang di Kartini Copy Center. Kami melayani berbagai
              kebutuhan fotokopi, print, jilid, stempel, spanduk, laminating,
              poster, dan kebutuhan percetakan lainnya.
            </p>

            <div className="hero-buttons">
              <a
                href={`https://wa.me/${nomorWhatsApp}`}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                💬 Pesan via WhatsApp
              </a>

              <a href="#layanan" className="secondary-button">
                Lihat Layanan →
              </a>
            </div>

            <div className="hero-info">
              <div>
                <strong>9+</strong>
                <span>Layanan Percetakan</span>
              </div>

              <div>
                <strong>✓</strong>
                <span>Hasil Berkualitas</span>
              </div>

              <div>
                <strong>17 Jam</strong>
                <span>Buka Setiap Hari</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="printer-icon">🖨️</div>

            <h3>Kartini Copy Center</h3>

            <p>
              Fotokopi • Print • Jilid
              <br />
              Spanduk • Stempel • Laminating
            </p>

            <div className="paper">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>

        {/* LAYANAN */}
        <section className="services" id="layanan">
          <div className="section-title">
            <span>LAYANAN KAMI</span>

            <h2>Semua Kebutuhan Cetak, Ada di Sini</h2>

            <p>
              Pilih layanan yang kamu butuhkan dan hubungi kami untuk
              mendapatkan informasi harga dan pengerjaan.
            </p>
          </div>

          <div className="service-grid">
            {layanan.map((item) => (
              <div className="service-card" key={item.title}>
                <div className="service-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a
                  href={`https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(
                    `Halo Kartini Copy Center, saya ingin bertanya mengenai layanan ${item.title}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="service-link"
                >
                  Tanya via WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </section>
            {/* PEMESANAN */}
<section className="order-section" id="pesan">
  <div className="order-heading">
    <span>PESANAN ONLINE</span>

    <h2>Pesan Kebutuhan Cetakmu</h2>

    <p>
      Isi form di bawah ini. Setelah dikirim, pesanan akan diteruskan
      ke WhatsApp Kartini Copy Center.
    </p>
  </div>

  <div className="order-box">
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const nama = form.get("nama");
        const layanan = form.get("layanan");
        const jumlah = form.get("jumlah");
        const detail = form.get("detail");

        const pesan = `Halo Kartini Copy Center 👋

Saya ingin melakukan pemesanan.

Nama: ${nama}
Layanan: ${layanan}
Jumlah: ${jumlah}

Detail pesanan:
${detail}

Mohon diinformasikan harga dan estimasi pengerjaannya. Terima kasih.`;

        window.open(
          `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`,
          "_blank"
        );
      }}
    >
      <div className="form-group">
        <label>Nama</label>
        <input
          type="text"
          name="nama"
          placeholder="Masukkan nama kamu"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Pilih Layanan</label>

          <select name="layanan" required>
            <option value="">-- Pilih layanan --</option>

            {layanan.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Jumlah</label>

          <input
            type="text"
            name="jumlah"
            placeholder="Contoh: 10 lembar"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label>Detail Pesanan</label>

        <textarea
          name="detail"
          rows="5"
          placeholder="Contoh: Print warna A4, 2 sisi, kertas 80 gsm..."
          required
        ></textarea>
      </div>

      <button type="submit" className="order-button">
        💬 Kirim Pesanan via WhatsApp
      </button>
    </form>
  </div>
</section>
            {/* PORTFOLIO */}
<section className="portfolio-section" id="portfolio">
  <div className="portfolio-heading">
    <span>PORTFOLIO KAMI</span>

    <h2>Hasil Pekerjaan Kartini Copy Center</h2>

    <p>
      Berbagai layanan printing dan percetakan yang kami kerjakan
      untuk kebutuhan pelanggan.
    </p>
  </div>

  <div className="portfolio-grid">
    <div className="portfolio-card">
      <div className="portfolio-placeholder">
        🪧
      </div>

      <div className="portfolio-info">
        <h3>Cetak Spanduk</h3>
        <p>Spanduk untuk promosi dan berbagai kebutuhan acara.</p>
      </div>
    </div>

    <div className="portfolio-card">
      <div className="portfolio-placeholder">
        📕
      </div>

      <div className="portfolio-info">
        <h3>Jilid Hardcover</h3>
        <p>Jilid laporan, skripsi, tugas, dan dokumen penting.</p>
      </div>
    </div>

    <div className="portfolio-card">
      <div className="portfolio-placeholder">
        🔖
      </div>

      <div className="portfolio-info">
        <h3>Pembuatan Stempel</h3>
        <p>Stempel untuk kebutuhan usaha, kantor, dan organisasi.</p>
      </div>
    </div>

    <div className="portfolio-card">
      <div className="portfolio-placeholder">
        🖼️
      </div>

      <div className="portfolio-info">
        <h3>Cetak Poster</h3>
        <p>Poster untuk promosi, kegiatan, dan berbagai kebutuhan.</p>
      </div>
    </div>
  </div>
</section>
        {/* TENTANG */}
        <section className="about" id="tentang">
          <div className="about-box">
            <div>
              <span className="small-title">TENTANG KAMI</span>

              <h2>
                Kartini Copy Center
                <br />
                Siap Membantu Kebutuhan Cetakmu.
              </h2>
            </div>

            <p>
              Kartini Copy Center hadir untuk membantu kebutuhan fotokopi,
              printing, jilid, dan percetakan dengan pelayanan yang mudah,
              cepat, dan praktis.
              <br />
              <br />
              Kami melayani pelanggan setiap hari mulai pukul{" "}
              <strong>07.00 sampai 00.00</strong>.
            </p>
          </div>
        </section>

        {/* KONTAK */}
        <section className="contact-section" id="kontak">
          <div className="contact-heading">
            <span>KUNJUNGI KAMI</span>

            <h2>Butuh cetak sesuatu?</h2>

            <p>
              Datang langsung ke Kartini Copy Center atau hubungi kami melalui
              WhatsApp.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>

              <h3>Alamat</h3>

              <p>
                Jl. Perjuangan No.59, Sempaja Sel.,
                <br />
                Kec. Samarinda Utara,
                <br />
                Kota Samarinda, Kalimantan Timur 75117
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🕐</div>

              <h3>Jam Operasional</h3>

              <p>
                Senin – Minggu
                <br />
                <strong>07.00 – 00.00</strong>
                <br />
                Buka setiap hari
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💬</div>

              <h3>WhatsApp</h3>

              <p>
                0811-5555-379
                <br />
                <br />

                <a
                  href={`https://wa.me/${nomorWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-button"
                >
                  Chat Sekarang
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div>
            <span>SIAP MENCETAK?</span>

            <h2>Kirim kebutuhan cetakmu kepada kami.</h2>

            <p>
              Tanyakan harga dan detail pesanan melalui WhatsApp.
            </p>
          </div>

          <a
            href={`https://wa.me/${nomorWhatsApp}`}
            target="_blank"
            rel="noreferrer"
          >
            💬 Hubungi Kami
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>Kartini Copy Center</strong>

          <p>
            Fotokopi • Print • Jilid • Spanduk • Stempel • Laminating
          </p>
        </div>

        <div>
          <p>
            Jl. Perjuangan No.59, Samarinda Utara
          </p>

          <p>© 2026 Kartini Copy Center</p>
        </div>
      </footer>
    </div>
  );
}

export default App;