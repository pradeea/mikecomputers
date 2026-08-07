import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CORE_SERVICES, WHY_CHOOSE, INDUSTRIES } from "../data/constants";

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckSvg = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── HERO ── */
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="mc-hero mc-hero-centered">
      <div className="mc-hero-grid-bg" />
      <div className="mc-hero-orb1" />
      <div className="mc-hero-orb2" />

      <div className="mc-hero-content" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <div className="mc-hero-badge" style={{ justifyContent: "center" }}>
          <span className="mc-dot" />
          Brampton, ON — Serving the GTA
        </div>
        <h1 className="mc-hero-h1">
          Security.<br />
          <span className="mc-hero-accent">Connectivity. Control.</span>
        </h1>
        <p className="mc-hero-sub" style={{ maxWidth: 560, margin: "0 auto 2rem" }}>
          End-to-end solutions in surveillance, access control, networking, and system integration.
        </p>
        <div className="mc-hero-btns" style={{ justifyContent: "center" }}>
          <button className="mc-btn-primary" onClick={() => navigate("/contact")}>
            Request a Quote
          </button>
          <button className="mc-btn-ghost" onClick={() => navigate("/contact")}>
            <PhoneIcon /> Contact Us
          </button>
        </div>
        <div className="mc-hero-tags" style={{ justifyContent: "center" }}>
          {["Surveillance", "Access Control", "Networking", "AV Systems", "Alarm Systems"].map((t, i) => (
            <span key={i} className="mc-tag">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TRUST BAR ── */
function TrustBar() {
  const items = [
    "Integrated Security & Infrastructure",
    "Commercial · Industrial · Residential",
    "Surveillance & Access Control",
    "Network & Cabling Solutions",
    "Serving the GTA",
  ];
  return (
    <div className="mc-trust">
      <div className="mc-trust-inner">
        {items.map((t, i) => (
          <div key={i} className="mc-trust-item">
            <span className="mc-trust-dot" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── CORE SERVICES ── */
function CoreServices() {
  return (
    <section className="mc-section">
      <div className="mc-container">
        <div className="mc-section-head">
          <span className="mc-label">Core Services</span>
          <h2 className="mc-section-title">What We Do</h2>
          <p className="mc-section-sub">
            Security, networking, and infrastructure solutions built for commercial, industrial, and residential environments.
          </p>
        </div>
        <div className="mc-core-grid">
          {CORE_SERVICES.map((s, i) => (
            <div key={i} className="mc-core-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="mc-core-icon">{s.icon}</span>
              <h3 className="mc-core-title">{s.title}</h3>
              <p className="mc-core-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY CHOOSE MIKECOM ── */
function WhyChoose() {
  return (
    <section className="mc-section mc-section-alt">
      <div className="mc-container">
        <div className="mc-section-head">
          <span className="mc-label">Why Choose Mikecom</span>
          <h2 className="mc-section-title">Built for the Job</h2>
          <p className="mc-section-sub">
            Professional security and infrastructure installations — clean, scalable, and built to last.
          </p>
        </div>
        <div className="mc-check-grid">
          {WHY_CHOOSE.map((item, i) => (
            <div key={i} className="mc-check-item">
              <div className="mc-check-dot"><CheckSvg /></div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── INDUSTRIES SERVED ── */
function Industries() {
  return (
    <div className="mc-industries">
      <div className="mc-container">
        <div className="mc-section-head" style={{ marginBottom: "0" }}>
          <span className="mc-label">Who We Serve</span>
          <h2 className="mc-section-title" style={{ marginTop: "0.5rem" }}>Industries Served</h2>
        </div>
        <div className="mc-industry-grid">
          {INDUSTRIES.map((ind, i) => (
            <span key={i} className="mc-industry-tag">{ind}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── CTA BANNER ── */
function CTABanner() {
  const navigate = useNavigate();
  return (
    <div className="mc-cta-banner">
      <div className="mc-cta-banner-orb" />
      <div className="mc-container mc-cta-inner">
        <div>
          <h2 className="mc-cta-title">Ready to secure your environment?</h2>
          <p className="mc-cta-sub">Contact us today for a free site assessment and custom quote.</p>
        </div>
        <button className="mc-btn-primary mc-btn-lg" onClick={() => navigate("/contact")}>
          <PhoneIcon /> Request a Quote
        </button>
      </div>
    </div>
  );
}

/* ── PAGE ── */
export default function HomePage() {
  return (
    <div className="mc-page">
      <Header />
      <Hero />
      <TrustBar />
      <CoreServices />
      <WhyChoose />
      <Industries />
      <CTABanner />
      <Footer />
    </div>
  );
}
