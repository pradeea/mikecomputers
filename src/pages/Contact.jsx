import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SERVICES } from "../data/constants";

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (Gmail) → copy the Service ID
// 3. Create a Template → set "To Email" to pradeepkumar@gmail.com
//    Template variables: {{from_name}}, {{from_email}}, {{phone}}, {{service}}, {{message}}
// 4. Account → API Keys → copy your Public Key
const EMAILJS_SERVICE_ID  = "service_jrltkdp";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_jtpkteu";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "Cg-H1gTT8yqzUnoK4";   // e.g. "AbCdEfGhIjKlMnOp"
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_INFO = [
  { icon: "📞", label: "Phone", value: "+1 (647) 339-5771", href: "tel:+16473395771" },
  { icon: "📧", label: "Email", value: "michaelbeharry@mikecom.ca", href: "mailto:michaelbeharry@mikecom.ca" },
  { icon: "📍", label: "Location", value: "Brampton, ON — Serving GTA and surrounding areas", href: null },
  { icon: "🕐", label: "Hours", value: "Mon–Sat: 9am – 7pm", href: null },
];

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "sent" | "error"

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: "michaelbeharry@mikecom.ca",
          name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          title: form.service || "General Inquiry",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error — status:", err?.status, "| text:", err?.text, err);
      setStatus("error");
    }
  };

  return (
    <section className="mc-section">
      <div className="mc-container">
        <div className="mc-contact-layout">

          {/* Contact info */}
          <div className="mc-contact-info">
            <div className="mc-contact-block">
              <h3 className="mc-contact-block-title">Mikecom Computers & Electronics Inc.</h3>
              <p className="mc-contact-block-sub">
                Ready to start your project? Reach out and we'll get back to you promptly.
              </p>
            </div>
            {CONTACT_INFO.map((c, i) => (
              <div key={i} className="mc-contact-row">
                <span className="mc-contact-row-icon">{c.icon}</span>
                <div>
                  <p className="mc-contact-row-label">{c.label}</p>
                  {c.href ? (
                    <a className="mc-contact-row-value" href={c.href} style={{ textDecoration: "none", color: "inherit" }}>
                      {c.value}
                    </a>
                  ) : (
                    <p className="mc-contact-row-value">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="mc-contact-form">
            {status === "sent" ? (
              <div className="mc-form-success">
                <span style={{ fontSize: 36 }}>✓</span>
                <h3>Message sent!</h3>
                <p>Thanks {form.name}! Michael will get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                {status === "error" && (
                  <div style={{
                    background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: 8, padding: "12px 16px", marginBottom: 16,
                    color: "#fca5a5", fontSize: 13
                  }}>
                    Something went wrong. Please try again or email us directly at michaelbeharry@mikecom.ca
                  </div>
                )}
                <div className="mc-form-row">
                  <div className="mc-form-group">
                    <label className="mc-form-label">Your Name *</label>
                    <input
                      className="mc-form-input"
                      name="name"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mc-form-group">
                    <label className="mc-form-label">Email Address *</label>
                    <input
                      className="mc-form-input"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mc-form-group">
                  <label className="mc-form-label">Phone Number</label>
                  <input
                    className="mc-form-input"
                    name="phone"
                    type="tel"
                    placeholder="+1 (416) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mc-form-group">
                  <label className="mc-form-label">Service Needed</label>
                  <select
                    className="mc-form-input"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="mc-form-group">
                  <label className="mc-form-label">Project Details *</label>
                  <textarea
                    className="mc-form-input mc-form-textarea"
                    name="message"
                    placeholder="Describe your project or requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="mc-btn-primary mc-btn-full"
                  onClick={handleSubmit}
                  disabled={status === "sending" || !form.name || !form.email || !form.message}
                  style={{ opacity: (!form.name || !form.email || !form.message) ? 0.6 : 1, cursor: (!form.name || !form.email || !form.message) ? "not-allowed" : "pointer" }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="mc-page">
      <Header />
      <div className="mc-page-hero">
        <div className="mc-page-hero-content">
          <span className="mc-label">Get in Touch</span>
          <h1 className="mc-section-title" style={{ marginTop: "0.75rem" }}>Contact Us</h1>
          <p className="mc-section-sub">
            Ready to start your security or infrastructure project? Reach out and we'll get back to you promptly.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
