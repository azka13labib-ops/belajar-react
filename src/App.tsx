import './App.css';
import Threads from './components/Threads';

const SKILLS = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    title: 'UI/UX',
    items: [
      'Wireframe',
      'Design System',
      'Responsive Layout',
      'Accessibility dasar',
    ],
  },
  { title: 'Tools', items: ['Figma', 'VS Code', 'Git/GitHub', 'Linux'] },
];

const PROJECTS = [
  {
    title: 'Redesign Website Kampus (ITB WIGA)',
    desc: 'Website kampus yang lebih rapi, modern, responsif, dan mudah dipahami pengguna.',
    tech: ['HTML', 'CSS', 'JS'],
    linkText: 'Lihat Demo (isi nanti)',
    href: '#',
  },
  {
    title: 'AzkaGo (Konsep Super App)',
    desc: 'Konsep aplikasi layanan dengan beberapa halaman dan sistem data simulasi.',
    tech: ['HTML', 'Tailwind', 'JS'],
    linkText: 'Lihat Demo (isi nanti)',
    href: '#',
  },
  {
    title: 'Portfolio v1',
    desc: 'Portfolio awal untuk menampilkan perjalanan belajar dan proyek-proyek.',
    tech: ['Vite', 'React', 'TS'],
    linkText: 'Repo (isi nanti)',
    href: '#',
  },
];

const ACHIEVEMENTS = [
  {
    year: '2025',
    title: 'Web Design & Development Competition',
    desc: 'Membuat redesign website kampus dan presentasi.',
  },
  {
    year: '2024',
    title: 'Belajar Frontend Konsisten',
    desc: 'Membangun beberapa mini project UI dan latihan DOM.',
  },
];

const EDUCATION = [
  {
    year: '2023 - Sekarang',
    title: 'MTs RAUDLATUL ULUM',
    desc: 'Fokus belajar, aktif eksplorasi web development.',
  },
  {
    year: 'Target',
    title: 'Teknik Informatika (ITB)',
    desc: 'Menyiapkan skill dasar dan portfolio untuk jenjang berikutnya.',
  },
];

export default function App() {
  return (
    <div className="az-app">
      {/* Background Threads (full screen) */}
      <div className="az-bg" aria-hidden="true">
        <div className="az-bg__inner">
          <Threads />
        </div>
        <div className="az-bg__overlay" />
      </div>

      {/* Top Nav */}
      <header className="az-nav">
        <div className="az-container az-nav__inner">
          <div className="az-brand">Azka</div>
          <nav className="az-links">
            <a href="#about">About</a>
            <a href="#journey">Perjalanan</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Prestasi</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>
      </header>

      <main className="az-main">
        {/* Hero */}
        <section className="az-hero">
          <div className="az-container az-hero__grid">
            <div>
              <p className="az-kicker">Portfolio</p>
              <h1 className="az-title">
                Halo, saya <span className="az-accent">Azka</span>.
              </h1>
              <p className="az-subtitle">
                Front-end Developer & UI/UX Enthusiast. Saya suka bikin UI yang
                bersih, modern, dan gampang dipakai.
              </p>

              <div className="az-hero__cta">
                <a className="az-btn az-btn--primary" href="#projects">
                  Lihat Proyek
                </a>
                <a className="az-btn az-btn--ghost" href="#contact">
                  Hubungi
                </a>
              </div>

              <div className="az-badges">
                <span className="az-badge">React + TypeScript</span>
                <span className="az-badge">Responsive UI</span>
                <span className="az-badge">Clean Code</span>
              </div>
            </div>

            <div className="az-card az-card--hero">
              <h3 className="az-card__title">Ringkas</h3>
              <div className="az-split">
                <div className="az-mini">
                  <div className="az-mini__label">Fokus</div>
                  <div className="az-mini__value">Frontend & UI</div>
                </div>
                <div className="az-mini">
                  <div className="az-mini__label">Stack</div>
                  <div className="az-mini__value">Vite · React · TS</div>
                </div>
                <div className="az-mini">
                  <div className="az-mini__label">Goal</div>
                  <div className="az-mini__value">Portfolio yang kuat</div>
                </div>
                <div className="az-mini">
                  <div className="az-mini__label">Lokasi</div>
                  <div className="az-mini__value">Lumajang</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="az-section">
          <div className="az-container">
            <div className="az-section__head">
              <h2>About Me</h2>
              <p>Sedikit tentang saya dan cara saya membangun website.</p>
            </div>

            <div className="az-grid2">
              <div className="az-card">
                <h3 className="az-card__title">Profil</h3>
                <p className="az-text">
                  Saya fokus di pembuatan tampilan web yang modern, rapi, dan
                  enak dipakai. Saya suka bikin struktur yang jelas, spacing
                  nyaman, dan komponen yang konsisten.
                </p>
                <div className="az-divider" />
                <p className="az-text">
                  Saat ini saya sering latihan React/TypeScript, eksplor animasi
                  ringan, dan membangun project yang bisa dipakai sebagai bukti
                  kemampuan.
                </p>
              </div>

              <div className="az-card">
                <h3 className="az-card__title">Yang Saya Utamakan</h3>
                <ul className="az-list">
                  <li>Layout responsif (mobile sampai desktop)</li>
                  <li>Struktur komponen jelas</li>
                  <li>Warna dan tipografi konsisten</li>
                  <li>UI cepat dipahami pengguna</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Journey / Education */}
        <section id="journey" className="az-section">
          <div className="az-container">
            <div className="az-section__head">
              <h2>Perjalanan Sekolah</h2>
              <p>Timeline pendidikan dan target belajar saya.</p>
            </div>

            <div className="az-card">
              <div className="az-timeline">
                {EDUCATION.map((it) => (
                  <div className="az-timeline__item" key={it.title}>
                    <div className="az-timeline__year">{it.year}</div>
                    <div className="az-timeline__body">
                      <div className="az-timeline__title">{it.title}</div>
                      <div className="az-timeline__desc">{it.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="az-section">
          <div className="az-container">
            <div className="az-section__head">
              <h2>Skills</h2>
              <p>Teknologi dan kemampuan yang sering saya pakai.</p>
            </div>

            <div className="az-grid3">
              {SKILLS.map((s) => (
                <div className="az-card" key={s.title}>
                  <h3 className="az-card__title">{s.title}</h3>
                  <div className="az-tags">
                    {s.items.map((x) => (
                      <span className="az-tag" key={x}>
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="az-section">
          <div className="az-container">
            <div className="az-section__head">
              <h2>Projects</h2>
              <p>
                Beberapa project yang bisa kamu lihat (link bisa kamu isi
                belakangan).
              </p>
            </div>

            <div className="az-grid3">
              {PROJECTS.map((p) => (
                <article className="az-card az-card--project" key={p.title}>
                  <h3 className="az-card__title">{p.title}</h3>
                  <p className="az-text">{p.desc}</p>
                  <div className="az-tags">
                    {p.tech.map((t) => (
                      <span className="az-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a className="az-link" href={p.href}>
                    {p.linkText}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="az-section">
          <div className="az-container">
            <div className="az-section__head">
              <h2>Prestasi</h2>
              <p>Pencapaian dan milestone penting.</p>
            </div>

            <div className="az-card">
              <div className="az-timeline">
                {ACHIEVEMENTS.map((it) => (
                  <div className="az-timeline__item" key={it.title}>
                    <div className="az-timeline__year">{it.year}</div>
                    <div className="az-timeline__body">
                      <div className="az-timeline__title">{it.title}</div>
                      <div className="az-timeline__desc">{it.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="az-section az-section--last">
          <div className="az-container">
            <div className="az-section__head">
              <h2>Kontak</h2>
              <p>
                Isi nanti: email/IG/GitHub. Untuk sekarang placeholder dulu.
              </p>
            </div>

            <div className="az-grid2">
              <div className="az-card">
                <h3 className="az-card__title">Info</h3>
                <div className="az-contact">
                  <div className="az-contact__row">
                    <div className="az-contact__label">Email</div>
                    <div className="az-contact__value">
                      azka13labib@gmail.com
                    </div>
                  </div>
                  <div className="az-contact__row">
                    <div className="az-contact__label">GitHub</div>
                    <div className="az-contact__value">azka13labib-ops</div>
                  </div>
                  <div className="az-contact__row">
                    <div className="az-contact__label">Instagram</div>
                    <div className="az-contact__value">trynafind-azka</div>
                  </div>
                </div>
              </div>

              <div className="az-card">
                <h3 className="az-card__title">Pesan</h3>
                <form className="az-form" onSubmit={(e) => e.preventDefault()}>
                  <input className="az-input" placeholder="Nama" />
                  <input className="az-input" placeholder="Email" />
                  <textarea
                    className="az-input az-textarea"
                    placeholder="Tulis pesan..."
                  />
                  <button className="az-btn az-btn--primary" type="submit">
                    Kirim (dummy)
                  </button>
                </form>
              </div>
            </div>

            <footer className="az-footer">
              <div className="az-container az-footer__inner">
                <span>© {new Date().getFullYear()} Azka</span>
                <span>Built with Vite + React</span>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
