import { useNavigate } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SERVICES } from "../data/constants";

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ServicesGrid() {
  return (
    <section className="mc-section">
      <div className="mc-container">
        <div className="mc-services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="mc-service-card" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="mc-service-icon">{s.icon}</div>
              <h3 className="mc-service-title">{s.title}</h3>
              <ul className="mc-service-items">
                {s.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
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
          <h2 className="mc-cta-title">Need a custom solution?</h2>
          <p className="mc-cta-sub">We'll assess your site and design an integrated system that fits your environment.</p>
        </div>
        <button className="mc-btn-primary mc-btn-lg" onClick={() => navigate("/contact")}>
          <PhoneIcon /> Request a Quote
        </button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="mc-page">
      <Header />
      <div className="mc-page-hero">
        <div className="mc-page-hero-content">
          <span className="mc-label">What We Offer</span>
          <h1 className="mc-section-title" style={{ marginTop: "0.75rem" }}>Services</h1>
          <p className="mc-section-sub">
            Integrated security and infrastructure solutions for commercial, industrial, and residential environments.
          </p>
        </div>
      </div>
      <ServicesGrid />
      <CTABanner />
      <Footer />
    </div>
  );
}
