import { Link } from "react-router";

const DEFAULT_LINKS = {
  services: [
    { label: "Security Systems", href: "/Services" },
    { label: "Access Control", href: "/Services" },
    { label: "Intrusion & Alarm Systems", href: "/Services" },
    { label: "Network Infrastructure", href: "/Services" },
    { label: "Audio Visual Systems", href: "/Services" },
  ],
  solutions: [
    { label: "Pre-Wiring & Construction", href: "/Services" },
    { label: "Maintenance & Support", href: "/Services" },
    { label: "Consulting & Design", href: "/Services" },
    { label: "Commercial Projects", href: "/Services" },
    { label: "Residential Services", href: "/Services" },
  ],
  company: [
    { label: "About Us", href: "/About" },
    { label: "Certifications", href: "/Certifications" },
    { label: "Services", href: "/Services" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const MonitorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="13" rx="2" stroke="#fff" strokeWidth="1.7" />
    <path d="M8 19v2M16 19v2M6 22h12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M6 10h3M6 13h5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeLinecap="round" />
    <rect x="14" y="9.5" width="4" height="4" rx="1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
    <path d="M2 7l10 7 10-7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer({
  brandName = "Mikecom",
  brandTag = "Computers & Electronics Inc.",
  brandDesc = "Integrated Security & Infrastructure Solutions for Commercial, Industrial, and Residential Environments.",
  phone = "+1 (647) 339-5771",
  email = "michaelbeharry@mikecom.ca",
  address = "Brampton, ON — Serving GTA and surrounding areas",
  links = DEFAULT_LINKS,
  year = new Date().getFullYear(),
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=DM+Sans:wght@400;500&display=swap');

        @keyframes mcfBlink { 0%,100%{opacity:1} 50%{opacity:0.2} }

        .mcf * { box-sizing: border-box; margin: 0; padding: 0; }

        .mcf {
          background: #060b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          border-top: 3px solid rgba(255,255,255,0.06);
        }

        .mcf-orb1 {
          position: absolute; width: 500px; height: 500px;
          top: -180px; left: -150px; border-radius: 50%;
          background: radial-gradient(circle, rgba(29,78,216,0.06), transparent 70%);
          pointer-events: none;
        }
        .mcf-orb2 {
          position: absolute; width: 400px; height: 400px;
          bottom: -100px; right: -80px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%);
          pointer-events: none;
        }

        /* Mission strip */
        .mcf-mission {
          position: relative; z-index: 2;
          padding: 1.2rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .mcf-mission-icon { flex-shrink: 0; margin-top: 2px; }

        .mcf-mission p {
          font-size: 12.5px;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          font-style: italic;
        }

        .mcf-mission p strong {
          color: rgba(255,255,255,0.85);
          font-style: normal;
          font-weight: 500;
        }

        /* Status strip */
        .mcf-strip {
          position: relative; z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 12px 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .mcf-strip-left {
          display: flex; align-items: center; gap: 8px;
          font-size: 12.5px; color: rgba(255,255,255,0.6);
        }

        .mcf-strip-left strong { color: #ffffff; font-weight: 500; }

        .mcf-pulse {
          width: 7px; height: 7px; border-radius: 50%;
          background: #86efac;
          animation: mcfBlink 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* Main grid */
        .mcf-body {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 2.5rem;
          padding: 2.5rem 2rem;
        }

        /* Brand col */
        .mcf-brand-logo {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 14px; text-decoration: none;
        }

        .mcf-brand-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 12px rgba(29,78,216,0.3);
          border: 1px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
        }

        .mcf-brand-name {
          font-family: 'Orbitron', monospace;
          font-size: 14px; font-weight: 700;
          color: #fff; letter-spacing: 0.06em;
          display: block; line-height: 1;
        }

        .mcf-brand-sub {
          font-size: 8.5px; color: rgba(255,255,255,0.55);
          letter-spacing: 0.1em; text-transform: uppercase;
          display: block; margin-top: 3px; line-height: 1.3;
        }

        .mcf-desc {
          font-size: 12.5px; color: rgba(255,255,255,0.55);
          line-height: 1.7; margin-bottom: 18px;
        }

        .mcf-contact-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 12.5px; color: rgba(255,255,255,0.65);
          margin-bottom: 8px; text-decoration: none;
          transition: color 0.18s;
        }

        .mcf-contact-item:hover { color: #ffffff; }

        /* Link columns */
        .mcf-col-title {
          font-size: 10.5px; font-weight: 600;
          color: rgba(255,255,255,0.85); letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 14px;
        }

        .mcf-col ul { list-style: none; }
        .mcf-col ul li { margin-bottom: 9px; }
        .mcf-col ul li a {
          font-size: 12.5px; color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.18s, padding-left 0.18s;
          display: inline-block;
        }
        .mcf-col ul li a:hover { color: #fff; padding-left: 4px; }

        /* Bottom bar */
        .mcf-bottom {
          position: relative; z-index: 2;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 10px;
          padding: 1rem 2rem; margin-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .mcf-bottom p { font-size: 11.5px; color: rgba(255,255,255,0.4); }

        .mcf-bottom-links { display: flex; gap: 18px; list-style: none; }
        .mcf-bottom-links a {
          font-size: 11.5px; color: rgba(255,255,255,0.4);
          text-decoration: none; transition: color 0.18s;
        }
        .mcf-bottom-links a:hover { color: rgba(255,255,255,0.75); }

        /* Responsive */
        @media (max-width: 960px) {
          .mcf-body { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }

        @media (max-width: 560px) {
          .mcf-body { grid-template-columns: 1fr; gap: 1.8rem; padding: 2rem 1.25rem; }
          .mcf-strip { padding: 12px 1.25rem; }
          .mcf-mission { padding: 1rem 1.25rem; }
          .mcf-bottom { padding: 1rem 1.25rem; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="mcf">
        <div className="mcf-orb1" />
        <div className="mcf-orb2" />

        {/* Mission statement strip */}
        <div className="mcf-mission">
          <div className="mcf-mission-icon"><ShieldIcon /></div>
          <p>
            <strong>Mikecom —</strong> Integrated Security &amp; Infrastructure Solutions for Commercial,
            Industrial, and Residential Environments. We design, install, and support the systems
            that protect and connect your property.
          </p>
        </div>

        {/* Status strip */}
        <div className="mcf-strip">
          <div className="mcf-strip-left">
            <span className="mcf-pulse" />
            <span>Serving <strong> Commercial, Industrial  &amp; Residential</strong> clients · Call us today</span>
          </div>
          <Link
            to="/contact"
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
              padding: "6px 16px",
              borderRadius: "6px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "0 0 10px rgba(59,130,246,0.3)",
              transition: "opacity 0.18s",
            }}
          >
            Get a Free Quote →
          </Link>
        </div>

        {/* Main grid */}
        <div className="mcf-body">

          {/* Brand + contact */}
          <div>
            <Link className="mcf-brand-logo" to="/">
              <div className="mcf-brand-icon"><MonitorIcon /></div>
              <div>
                <span className="mcf-brand-name">{brandName}</span>
                <span className="mcf-brand-sub">{brandTag}</span>
              </div>
            </Link>
            <p className="mcf-desc">{brandDesc}</p>

            {phone && (
              <a className="mcf-contact-item" href={`tel:${phone.replace(/\D/g, "")}`}>
                <PhoneIcon /> {phone}
              </a>
            )}
            {email && (
              <a className="mcf-contact-item" href={`mailto:${email}`}>
                <MailIcon /> {email}
              </a>
            )}
            {address && (
              <span className="mcf-contact-item">
                <LocationIcon /> {address}
              </span>
            )}
          </div>

          {/* Services */}
          <div className="mcf-col">
            <p className="mcf-col-title">Services</p>
            <ul>
              {links.services.map((l, i) => (
                <li key={i}><Link to={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="mcf-col">
            <p className="mcf-col-title">Solutions</p>
            <ul>
              {links.solutions.map((l, i) => (
                <li key={i}><Link to={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="mcf-col">
            <p className="mcf-col-title">Company</p>
            <ul>
              {links.company.map((l, i) => (
                <li key={i}><Link to={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mcf-bottom">
          <p>© {year} Mikecom Computers and Electronics Inc. All rights reserved.</p>
          <ul className="mcf-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
