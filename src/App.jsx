import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICES = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Modern, professional websites designed to make your business look credible and convert visitors into enquiries.",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Focused landing pages built around a clear message, strong presentation and a specific goal.",
  },
  {
    number: "03",
    title: "Website Redesign",
    description:
      "Refresh an outdated website with a cleaner visual system, better structure and a modern user experience.",
  },
  {
    number: "04",
    title: "Custom Development",
    description:
      "Custom website experiences built around the requirements of your business.",
  },
];

const PROCESS = [
  {
    title: "Understand",
    description:
      "We first understand your business, audience, goals and what the website needs to achieve.",
  },
  {
    title: "Design",
    description:
      "We create a visual direction that fits your brand and gives your business a professional online presence.",
  },
  {
    title: "Build",
    description:
      "The approved design is developed into a responsive, fast and functional website.",
  },
  {
    title: "Launch",
    description:
      "Once everything is ready, your website is prepared for launch and handed over.",
  },
];

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        business: formData.business,
        budget: formData.budget,
        message: formData.message,
        name: formData.name,
        email: formData.email,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({
        type: "success",
        message: "Thanks! Your project enquiry has been sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("EMAILJS STATUS:", error?.status);
      console.error("EMAILJS MESSAGE:", error?.text);
      console.error("FULL EMAILJS ERROR:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your enquiry. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Velnox Studio! I'm interested in getting a website for my business. I'd like to know more about your services."
  );

  return (
    <div className="site">
      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className="navbar">
        <button
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Velnox Studio home"
        >
          VELNOX <span className="logo-light">STUDIO</span>
        </button>

        <nav className="nav-links">
          <button onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button onClick={() => scrollToSection("process")}>
            Process
          </button>

        

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>

        <button
          className="nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Get Started
        </button>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <main>
        <section className="hero">
          <div className="hero-background">
            <div className="architecture-line line-one" />
            <div className="architecture-line line-two" />
            <div className="architecture-line line-three" />

            <div className="hero-floor" />

            <div className="hero-light" />

            <div className="hero-object">
              <div className="object-inner" />
              <div className="object-highlight" />
            </div>

            <div className="hero-object-shadow" />

            <div className="floating-fragment fragment-one" />
            <div className="floating-fragment fragment-two" />
            <div className="floating-fragment fragment-three" />
          </div>

          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              <span>Available for new projects</span>
            </div>

            <h1>
              Your business deserves
              <br />
              <span>a better website.</span>
            </h1>

            <p className="hero-description">
              We design and build modern websites for businesses that want to
              look professional, earn trust and grow online.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollToSection("contact")}
              >
                Start a project
                <span>↗</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("services")}
              >
                Explore services
              </button>
            </div>
          </div>

          <div className="hero-line" />
        </section>

        {/* =====================================================
            SERVICES
            ===================================================== */}

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <div className="section-label">Services</div>

              <h2>
                Websites built
                <br />
                with purpose.
              </h2>
            </div>

            <p className="section-intro">
              From a completely new website to a complete redesign, we focus
              on creating digital experiences that make your business look
              credible and easy to understand.
            </p>
          </div>

          <div className="services-list">
            {SERVICES.map((service) => (
              <div className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>

                <div className="service-main">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            PROCESS
            ===================================================== */}

        <section className="section process-section" id="process">
          <div className="section-heading">
            <div>
              <div className="section-label">Process</div>

              <h2>
                Simple process.
                <br />
                Serious results.
              </h2>
            </div>

            <p className="section-intro">
              A straightforward process keeps the project clear from the
              initial idea to the final website.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS.map((step, index) => (
              <div className="process-item" key={step.title}>
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            CONTACT
            ===================================================== */}

        <section className="section contact-section" id="contact">
          <div className="contact-intro">
            <div className="section-label">Contact</div>

            <h2>
              Let's build something
              <br />
              <span>worth visiting.</span>
            </h2>

            <p>
              Tell us a little about your business and what you need. We'll
              get back to you with the next steps.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="business">Business</label>

                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Your business name"
                  value={formData.business}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget</label>

              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget</option>
                <option value="Under ₹3,000">Under ₹3,000</option>
                <option value="₹3,000 - ₹10,000">₹3,000 - ₹10,000</option>
                <option value="₹10,000 - ₹25,000">
                  ₹10,000 - ₹25,000
                </option>
                <option value="₹25,000+">₹25,000+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project</label>

              <textarea
                id="message"
                name="message"
                placeholder="What would you like to build?"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-submit-row">
              <button
                className="form-submit"
                type="submit"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Enquiry"}
              </button>

              {status.message && (
                <p
                  className={`form-status ${
                    status.type === "success" ? "success" : "error"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </section>
      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              VELNOX <span>STUDIO</span>
            </div>

            <p>
              Modern websites for businesses that want to build trust and
              grow online.
            </p>
          </div>

          <div className="footer-links">
            <button onClick={() => scrollToSection("services")}>
              Services
            </button>

            <button onClick={() => scrollToSection("process")}>
              Process
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Velnox Studio</span>

          <span>All rights reserved.</span>
        </div>
      </footer>

      {/* =====================================================
          WHATSAPP
          ===================================================== */}

      <a
        className="whatsapp-float"
        href={`https://wa.me/916230162159?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Velnox Studio on WhatsApp"
      >
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.85c0 2.09.55 4.13 1.59 5.93L.13 24l6.37-1.67a11.83 11.83 0 0 0 5.58 1.42h.01c6.52 0 11.84-5.31 11.84-11.84 0-3.17-1.24-6.15-3.41-8.43ZM12.09 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.78.99 1.01-3.69-.23-.38a9.82 9.82 0 0 1-1.51-5.19C2.2 6.42 6.63 2 12.09 2a9.79 9.79 0 0 1 6.97 2.89 9.79 9.79 0 0 1 2.89 6.97c0 5.46-4.44 9.84-9.86 9.84Zm5.4-7.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>

        <span className="whatsapp-text">Chat with us</span>
      </a>
    </div>
  );
}