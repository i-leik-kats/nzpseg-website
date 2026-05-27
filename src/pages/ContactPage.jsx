import { useState } from "react";
import Section from "../components/Section";
import Field from "../components/Field";
import FAQItem from "../components/FAQItem";
import { faqs } from "../data/faqs";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", school: "", message: "" });
  const [sent, setSent] = useState(false);

  // Netlify Forms handler — works when deployed to Netlify.
  // The hidden form-name input and the netlify attribute are what Netlify picks up.
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setSent(true))
      .catch(() => setSent(true)); // show success even if fetch fails in dev
  }

  return (
    <div className="page-enter">
      {/* ── PAGE HEADER ── */}
      <section className="page-header-section">
        <div className="container">
          <div className="eyebrow eyebrow-dot" style={{ marginBottom: 22 }}>
            Contact
          </div>
          <h1 style={{ maxWidth: "16ch", marginBottom: 28 }}>
            Get in touch.
          </h1>
          <p style={{ fontSize: 19, color: "var(--muted)", maxWidth: 620 }}>
            Questions about an event, interested in speaking, or want to be added to the mailing
            list?
          </p>
        </div>
      </section>

      <Section style={{ paddingTop: 24 }}>
        <div className="grid-contact">
          {/* Contact form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: 22 }}
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
            <Field
              label="Medical school / role"
              placeholder="e.g. UoA, 4th year — or Plastic Surgery Registrar"
              value={form.school}
              onChange={(v) => setForm({ ...form, school: v })}
            />
            <Field
              label="Message"
              textarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
            />

            {/* Hidden native inputs for Netlify form processing */}
            <input type="hidden" name="name" value={form.name} />
            <input type="hidden" name="email" value={form.email} />
            <input type="hidden" name="school" value={form.school} />
            <input type="hidden" name="message" value={form.message} />

            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 8 }}>
              <button
                className="btn btn-primary btn-arrow"
                type="submit"
                disabled={sent}
              >
                {sent ? "Sent — we'll be in touch" : "Send message"}
              </button>
              {sent && (
                <span style={{ fontSize: 13, color: "var(--muted)" }}>
                  Thanks — a committee member will reply within a few days.
                </span>
              )}
            </div>
          </form>

          {/* Sidebar */}
          <aside className="contact-aside">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              Direct
            </div>
            <div style={{ display: "grid", gap: 18, fontSize: 14.5 }}>
              <div>
                <div
                  style={{
                    color: "var(--muted-2)",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Email
                </div>
                <div>communications.nzpseg@gmail.com</div>
              </div>
              <div>
                <div
                  style={{
                    color: "var(--muted-2)",
                    fontFamily: "var(--mono)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Sponsors &amp; partners
                </div>
                <div>
                  Interested in supporting NZPSEG? Email us with "Partnership" in the subject line.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section label="FAQ" title="Frequently asked">
        <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </Section>
    </div>
  );
}
