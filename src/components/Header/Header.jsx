import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const DEFAULT_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/Services" },
  { label: "About", href: "/About" },
  { label: "Certifications", href: "/Certifications" },
  { label: "Contact", href: "/contact" },
];

const MonitorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="13" rx="2" stroke="#fff" strokeWidth="1.7" />
    <path d="M8 19v2M16 19v2M6 22h12" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M6 10h3M6 13h5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round" />
    <rect x="14" y="9.5" width="4" height="4" rx="1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
  </svg>
);

export default function Header({
  brandName = "MikeCom",
  brandTag = "Security & Infrastructure",
  navLinks = DEFAULT_NAV_LINKS,
  ctaLabel = "Get a Quote",
  supportText = "24/7 Support",
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.toLowerCase().startsWith(href.toLowerCase());

  const handleCta = () => {
    navigate("/contact");
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=DM+Sans:wght@400;500&display=swap');

        @keyframes tcBlink { 0%,100%{opacity:1} 50%{opacity:0.25} }

        .tc-header * { box-sizing: border-box; margin: 0; padding: 0; }

        .tc-header {
          background: linear-gradient(135deg, #0a1628 0%, #1e3a8a 60%, #1d4ed8 100%);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 2px 16px rgba(10,22,40,0.3);
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .tc-bar {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          height: 64px;
        }

        .tc-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .tc-logo-icon {
          width: 34px;
          height: 34px;
          background: linear-gradient(135deg, #1d4ed8, #3b82f6);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 12px rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.12);
          flex-shrink: 0;
        }

        .tc-logo-name {
          font-family: 'Orbitron', monospace;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.06em;
          line-height: 1;
          display: block;
        }

        .tc-logo-sub {
          font-size: 9px;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.13em;
          text-transform: uppercase;
          line-height: 1;
          display: block;
          margin-top: 3px;
        }

        .tc-nav {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
        }

        .tc-nav a {
          display: block;
          padding: 6px 13px;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.18s, background 0.18s;
          white-space: nowrap;
        }

        .tc-nav a:hover { color: #ffffff; background: rgba(255,255,255,0.1); }
        .tc-nav a.active { color: #ffffff; font-weight: 600; background: rgba(255,255,255,0.12); }

        .tc-rhs {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .tc-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 11px;
          border-radius: 20px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .tc-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #86efac;
          animation: tcBlink 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }

        .tc-cta-btn {
          padding: 7px 17px;
          background: #ffffff;
          color: #0f172a;
          font-size: 13px;
          font-weight: 600;
          border: none;
          border-radius: 7px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          transition: opacity 0.18s, transform 0.15s;
          white-space: nowrap;
        }

        .tc-cta-btn:hover { opacity: 0.85; transform: translateY(-1px); }

        .tc-hbg {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 5px;
          background: none;
          border: none;
        }

        .tc-hbg span {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.2s, background 0.2s;
        }

        .tc-hbg:hover span { background: #ffffff; }
        .tc-hbg.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .tc-hbg.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .tc-hbg.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .tc-drawer {
          position: relative;
          z-index: 2;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.32s cubic-bezier(0.4, 0, 0.2, 1);
          border-top: 0px solid rgba(255,255,255,0.08);
          background: #1e3a8a;
        }

        .tc-drawer.open {
          max-height: 400px;
          border-top-width: 1px;
        }

        .tc-drawer-inner {
          padding: 6px 0 16px;
        }

        .tc-drawer a {
          display: block;
          padding: 11px 1.5rem;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.18s, background 0.18s;
        }

        .tc-drawer a:hover { color: #ffffff; background: rgba(255,255,255,0.08); }
        .tc-drawer a.active { color: #ffffff; font-weight: 600; }

        .tc-drawer-cta-btn {
          display: block;
          margin: 10px 1.5rem 0;
          padding: 10px;
          width: calc(100% - 3rem);
          background: #ffffff;
          color: #0f172a;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          text-align: center;
          cursor: pointer;
          border: none;
          font-family: 'DM Sans', sans-serif;
        }

        @media (max-width: 780px) {
          .tc-nav     { display: none; }
          .tc-pill    { display: none; }
          .tc-cta-btn { display: none; }
          .tc-hbg     { display: flex; }
        }

        @media (max-width: 440px) {
          .tc-bar { padding: 0 1rem; }
          .tc-logo-name { font-size: 12.5px; }
        }
      `}</style>

      <div className="tc-header">
        <div className="tc-bar">
          <Link className="tc-logo" to="/">
            <div className="tc-logo-icon">
              <MonitorIcon />
            </div>
            <div>
              <span className="tc-logo-name">{brandName}</span>
              <span className="tc-logo-sub">{brandTag}</span>
            </div>
          </Link>

          <ul className="tc-nav">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className={isActive(link.href) ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="tc-rhs">
            <div className="tc-pill">
              <span className="tc-dot" />
              {supportText}
            </div>

            <button className="tc-cta-btn" onClick={handleCta}>
              {ctaLabel}
            </button>

            <button
              className={`tc-hbg${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`tc-drawer${menuOpen ? " open" : ""}`}>
          <div className="tc-drawer-inner">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className={isActive(link.href) ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="tc-drawer-cta-btn" onClick={handleCta}>
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
