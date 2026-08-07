import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ABOUT_FOCUS } from "../data/constants";

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function AboutContent() {
  return (
    <section className="mc-section">
      <div className="mc-container" style={{ maxWidth: 800 }}>
        <div style={{
          background: "#ffffff",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: "2.5rem",
          boxShadow: "0 1px 3px rgba(15,23,42,0.05)",
        }}>
          <p style={{ fontSize: 16, color: "#0f172a", lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Mikecom Computers &amp; Electronics Inc. specializes in integrated security, networking,
            and technology solutions.
          </p>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.85, marginBottom: "2rem" }}>
            We deliver reliable, scalable systems tailored to commercial, industrial, and residential
            environments, with a strong focus on clean installations, system performance, and
            long-term support.
          </p>

          <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--blue)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Core Focus
          </p>
          <div className="mc-focus-grid" style={{ justifyContent: "flex-start" }}>
            {ABOUT_FOCUS.map((f, i) => (
              <span key={i} className="mc-focus-badge">
                <span className="mc-focus-dot" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectorsSection() {
  const sectors = [
    {
      icon: "🏢",
      title: "Commercial",
      desc: "Office buildings, retail spaces, and multi-tenant facilities requiring reliable access control, surveillance, and networking.",
    },
    {
      icon: "🏭",
      title: "Industrial",
      desc: "Warehouses, manufacturing plants, and large-scale facilities with complex security and networking infrastructure needs.",
    },
    {
      icon: "🏠",
      title: "Residential",
      desc: "Homeowners looking for professional surveillance, smart access control, and structured network installations.",
    },
  ];

  return (
    <section className="mc-section mc-section-alt">
      <div className="mc-container">
        <div className="mc-section-head">
          <span className="mc-label">Who We Serve</span>
          <h2 className="mc-section-title">Our Clients</h2>
          <p className="mc-section-sub">
            Security and infrastructure solutions scaled to the demands of every environment we serve.
          </p>
        </div>
        <div className="mc-why-points">
          {sectors.map((s, i) => (
            <div key={i} className="mc-why-card">
              <span className="mc-why-icon">{s.icon}</span>
              <h3 className="mc-why-title">{s.title}</h3>
              <p className="mc-why-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const navigate = useNavigate();
  return (
    <div className="mc-cta-banner">
      <div className="mc-cta-banner-orb" />
      <div className="mc-container mc-cta-inner">
        <div>
          <h2 className="mc-cta-title">Ready to work with us?</h2>
          <p className="mc-cta-sub">Get in touch to discuss your security and infrastructure requirements.</p>
        </div>
        <button className="mc-btn-primary mc-btn-lg" onClick={() => navigate("/contact")}>
          <PhoneIcon /> Contact Us
        </button>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mc-page">
      <Header />
      <div className="mc-page-hero">
        <div className="mc-page-hero-content">
          <span className="mc-label">The Company</span>
          <h1 className="mc-section-title" style={{ marginTop: "0.75rem" }}>About Mikecom</h1>
          <p className="mc-section-sub">
            Integrated Security &amp; Infrastructure Solutions for Commercial, Industrial, and Residential Environments.
          </p>
        </div>
      </div>
      <AboutContent />
      <SectorsSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
