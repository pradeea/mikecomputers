import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { CERTIFICATIONS, AFFILIATIONS } from "../data/constants";

const CheckSvg = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldDot = () => (
  <div style={{
    width: 8, height: 8, borderRadius: "50%",
    background: "var(--cyan)", flexShrink: 0, marginTop: 4,
  }} />
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function CertList() {
  return (
    <section className="mc-section">
      <div className="mc-container">
        <div className="mc-cert-layout">
          {/* Certifications panel */}
          <div className="mc-cert-panel">
            <p className="mc-cert-panel-title">Certifications</p>
            <ul className="mc-cert-list">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i}>
                  <div className="mc-cert-check"><CheckSvg /></div>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliations panel */}
          <div className="mc-cert-panel">
            <p className="mc-cert-panel-title">Affiliations</p>
            <ul className="mc-affil-list">
              {AFFILIATIONS.map((aff, i) => (
                <li key={i}>
                  <ShieldDot />
                  {aff}
                </li>
              ))}
            </ul>
          </div>
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
          <h2 className="mc-cta-title">Work with certified professionals.</h2>
          <p className="mc-cta-sub">Integrated security and infrastructure solutions you can trust — installed right the first time.</p>
        </div>
        <button className="mc-btn-primary mc-btn-lg" onClick={() => navigate("/contact")}>
          <PhoneIcon /> Request a Quote
        </button>
      </div>
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <div className="mc-page">
      <Header />
      <div className="mc-page-hero">
        <div className="mc-page-hero-content">
          <span className="mc-label">Credentials</span>
          <h1 className="mc-section-title" style={{ marginTop: "0.75rem" }}>Certifications</h1>
          <p className="mc-section-sub">
            Certified across the security and infrastructure platforms we design, install, and support.
          </p>
        </div>
      </div>
      <CertList />
      <CTABanner />
      <Footer />
    </div>
  );
}
