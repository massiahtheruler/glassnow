"use client";

import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Camera,
  Car,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Upload,
  Wrench,
} from "lucide-react";
import { useMemo, useState } from "react";

const CONTACT = {
  phoneDisplay: "(201) 877-1720",
  phoneHref: "tel:+12018771720",
  email: "hello@glassnow.com",
};

const INITIAL_FORM = {
  serviceType: "windshield-replacement",
  fullName: "",
  phone: "",
  email: "",
  contactMethod: "phone",
  street: "",
  city: "",
  state: "NJ",
  zipCode: "",
  vehicle: "",
  glassLocation: "",
  urgency: "soon",
  locationType: "home",
  paymentType: "self-pay",
  insuranceCompany: "",
  claimNumber: "",
  notes: "",
  consent: false,
  photoPlaceholder: "",
};

const SERVICE_OPTIONS = [
  ["windshield-replacement", "Windshield replacement"],
  ["windshield-chip-repair", "Windshield chip repair"],
  ["side-window-replacement", "Side-window replacement"],
  ["rear-window-replacement", "Rear-window replacement"],
  ["door-glass", "Door glass"],
  ["quarter-glass", "Quarter glass"],
  ["sunroof-moonroof", "Sunroof or moonroof"],
  ["fleet-service", "Fleet service"],
  ["not-sure", "Not sure"],
];

const OTHER_SERVICE_OPTIONS = [
  ["residential-glass", "Residential glass"],
  ["commercial-glass", "Commercial glass"],
  ["storefront-glass", "Storefront glass"],
  ["mirror-tabletop-custom", "Mirror, tabletop, or custom glass"],
];

const SERVICES = [
  {
    icon: Car,
    title: "Windshield Replacement",
    value: "windshield-replacement",
    image: "/images/services/windshield-install.jpg",
    alt: "Technician preparing a windshield replacement",
    description:
      "Mobile windshield replacement coordinated around your vehicle, glass availability, and location.",
  },
  {
    icon: Wrench,
    title: "Chip Repair",
    value: "windshield-chip-repair",
    image: "/images/services/windshield-damage.jpg",
    alt: "Close-up of damaged windshield glass",
    description:
      "Small chips and surface damage reviewed quickly so you know if repair is still the right move.",
  },
  {
    icon: Truck,
    title: "Side & Rear Glass",
    value: "side-window-replacement",
    image: "/images/services/auto-glass-replacement.jpg",
    alt: "Auto glass service professional replacing vehicle glass",
    description:
      "Side-window, rear-window, door, quarter, vent, and sunroof glass requests handled in one flow.",
  },
  {
    icon: Building2,
    title: "Fleet Auto Glass",
    value: "fleet-service",
    image: "/images/services/glass-sheets.jpg",
    alt: "Stacks of glass prepared for service",
    description:
      "Mobile auto-glass support for company vehicles, lots, and recurring fleet service needs.",
  },
];

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Tell us what happened",
    text: "Share your vehicle, location, damaged glass, photos if you have them, and timing needs.",
  },
  {
    icon: CalendarCheck,
    title: "We confirm the path",
    text: "GlassNow reviews availability, glass details, insurance information, and quote next steps.",
  },
  {
    icon: Wrench,
    title: "Service comes to you",
    text: "A GlassNow service professional comes to your safe service location and completes the job.",
  },
];

const AREAS = [
  "Jersey City",
  "Newark",
  "Clifton",
  "Paterson",
  "Passaic",
  "Hoboken",
  "Elizabeth",
  "Hackensack",
  "Fort Lee",
  "Bergen County",
  "Hudson County",
  "Essex County",
  "Passaic County",
  "Union County",
  "nearby NYC metro communities",
];

const FAQS = [
  {
    question: "Can GlassNow come to my location?",
    answer:
      "Yes. GlassNow focuses on mobile auto-glass service at homes, workplaces, driveways, parking lots, fleet locations, and other safe service locations.",
  },
  {
    question: "How quickly can my glass be replaced?",
    answer:
      "Fast scheduling depends on your vehicle, the glass needed, your location, and technician availability. Same-day appointments may be available.",
  },
  {
    question: "Do you repair chips?",
    answer:
      "Yes. We review the size, location, and spread of the damage to see whether chip repair is a realistic option before replacement.",
  },
  {
    question: "Do you work with insurance?",
    answer:
      "GlassNow can help make insurance information and documentation clearer, but we do not claim to represent your insurer.",
  },
  {
    question: "Will my vehicle need ADAS calibration?",
    answer:
      "Some modern vehicles require calibration after windshield replacement. We will help identify when calibration coordination may be needed.",
  },
  {
    question: "What information do you need for a quote?",
    answer:
      "We need your contact information, service location, vehicle year, make, model, damaged glass location, photos if possible, and insurance or self-pay preference.",
  },
];

function GlassPanel({ children, className = "", ...props }) {
  return (
    <div className={`glass-panel ${className}`} {...props}>
      {children}
    </div>
  );
}

function GlassButton({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}) {
  const classes = `glass-button glass-button--${variant} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup glassnow-lockup" href="#top" aria-label="GlassNow home">
        <span className="brand-mark brand-mark--glassnow">
          <Image
            src="/images/brand/logos/glassnow-logo-tight.png"
            alt=""
            width={1295}
            height={562}
            priority
          />
        </span>
        <span className="brand-text">
          <strong>GlassNow</strong>
          <small>Mobile Auto Glass</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#service-areas">Service Areas</a>
        <a href="#insurance">Insurance</a>
        <a href="#about">About</a>
      </nav>

      <div className="header-actions">
        <a className="phone-link" href={CONTACT.phoneHref}>
          <Phone size={17} aria-hidden="true" />
          {CONTACT.phoneDisplay}
        </a>
        <GlassButton href="#quote" className="header-cta">
          Get My Quote
        </GlassButton>
      </div>
    </header>
  );
}

function QuoteForm({ form, setForm, selectedLabel, onSubmit, submitted }) {
  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <GlassPanel className="estimate-card quote-card" id="quote">
      <div className="estimate-heading">
        <p>Quote request</p>
        <h2>Get auto glass help in minutes.</h2>
      </div>

      <form className="estimate-form" onSubmit={onSubmit}>
        <label className="span-2">
          <span>Service needed</span>
          <select
            value={form.serviceType}
            onChange={(event) => updateField("serviceType", event.target.value)}
            aria-label="Service needed"
          >
            <optgroup label="Auto Glass Services">
              {SERVICE_OPTIONS.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </optgroup>
            <optgroup label="Other Glass Services">
              {OTHER_SERVICE_OPTIONS.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <label>
          <span>Full name</span>
          <input
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your name"
            required
          />
        </label>

        <label>
          <span>Phone</span>
          <input
            inputMode="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="Best callback number"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="name@email.com"
          />
        </label>

        <label>
          <span>Preferred contact</span>
          <select
            value={form.contactMethod}
            onChange={(event) => updateField("contactMethod", event.target.value)}
          >
            <option value="phone">Phone call</option>
            <option value="text">Text message</option>
            <option value="email">Email</option>
          </select>
        </label>

        <label className="span-2">
          <span>Service address</span>
          <input
            value={form.street}
            onChange={(event) => updateField("street", event.target.value)}
            placeholder="Street address where the vehicle will be"
            required
          />
        </label>

        <label>
          <span>City</span>
          <input
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Jersey City"
            required
          />
        </label>

        <label>
          <span>ZIP code</span>
          <input
            inputMode="numeric"
            value={form.zipCode}
            onChange={(event) => updateField("zipCode", event.target.value)}
            placeholder="07302"
            required
          />
        </label>

        <label className="span-2">
          <span>Vehicle information</span>
          <input
            value={form.vehicle}
            onChange={(event) => updateField("vehicle", event.target.value)}
            placeholder="Year, make, model, body style, VIN if you have it"
            required
          />
        </label>

        <label>
          <span>Glass location</span>
          <input
            value={form.glassLocation}
            onChange={(event) => updateField("glassLocation", event.target.value)}
            placeholder="Windshield, driver door, rear glass..."
          />
        </label>

        <label>
          <span>Vehicle location type</span>
          <select
            value={form.locationType}
            onChange={(event) => updateField("locationType", event.target.value)}
          >
            <option value="home">Home or driveway</option>
            <option value="work">Workplace</option>
            <option value="parking-lot">Parking lot</option>
            <option value="fleet">Fleet location</option>
            <option value="other-safe-location">Other safe location</option>
          </select>
        </label>

        <label>
          <span>Urgency</span>
          <select
            value={form.urgency}
            onChange={(event) => updateField("urgency", event.target.value)}
          >
            <option value="today">Today if available</option>
            <option value="soon">Next few days</option>
            <option value="scheduled">Schedule ahead</option>
          </select>
        </label>

        <label>
          <span>Insurance or self-pay</span>
          <select
            value={form.paymentType}
            onChange={(event) => updateField("paymentType", event.target.value)}
          >
            <option value="self-pay">Self-pay</option>
            <option value="insurance">Using insurance</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </label>

        <label>
          <span>Insurance company</span>
          <input
            value={form.insuranceCompany}
            onChange={(event) => updateField("insuranceCompany", event.target.value)}
            placeholder="Optional"
          />
        </label>

        <label>
          <span>Claim number</span>
          <input
            value={form.claimNumber}
            onChange={(event) => updateField("claimNumber", event.target.value)}
            placeholder="Optional"
          />
        </label>

        <label className="span-2">
          <span>Describe the damage</span>
          <textarea
            value={form.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            placeholder="Tell us what happened, where the damage is, and any timing details."
            required
          />
        </label>

        <button
          className="upload-placeholder span-2"
          type="button"
          onClick={() => updateField("photoPlaceholder", "Photos can be attached in the live intake step.")}
        >
          <Upload size={18} aria-hidden="true" />
          <span>
            Upload photos
            <small>
              {form.photoPlaceholder ||
                "Photo upload placeholder ready for storage or form backend integration."}
            </small>
          </span>
        </button>

        <label className="consent-field span-2">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            required
          />
          <span>
            I agree GlassNow may contact me by call, text, or email about this
            service request. Consent is not prechecked.
          </span>
        </label>

        <SoftQuoteSummary selectedLabel={selectedLabel} urgency={form.urgency} />

        <GlassButton className="span-2 submit-button" type="submit">
          Get My Quote <ArrowRight size={18} aria-hidden="true" />
        </GlassButton>

        {submitted ? (
          <div className="success-message success-card" role="status">
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>
              Your request is in. A GlassNow service coordinator will review the
              details and contact you about pricing and availability.
            </span>
            <a href={CONTACT.phoneHref}>Need urgent help? Call {CONTACT.phoneDisplay}</a>
          </div>
        ) : null}
      </form>
    </GlassPanel>
  );
}

function SoftQuoteSummary({ selectedLabel, urgency }) {
  const urgencyText =
    urgency === "today"
      ? "Ask about today's availability"
      : urgency === "scheduled"
        ? "Scheduled around your timing"
        : "Fast scheduling based on availability";

  return (
    <div className="soft-range span-2" aria-live="polite">
      <div>
        <span>Selected service</span>
        <strong>{selectedLabel}</strong>
      </div>
      <p>
        <b>{urgencyText}.</b> Final pricing depends on your vehicle, glass,
        location, insurance details, and calibration needs where applicable.
      </p>
    </div>
  );
}

function HeroMedia() {
  return (
    <div className="hero-media" aria-label="GlassNow mobile auto glass service preview">
      <div className="hero-brand-badge glassnow-badge">
        <Image
            src="/images/brand/logos/glassnow-logo-tight.png"
          alt="GlassNow mobile auto glass logo"
          width={1295}
          height={562}
          sizes="(max-width: 980px) 42vw, 17vw"
          priority
        />
      </div>
      <div className="hero-image hero-image--main">
        <Image
          src="/images/services/windshield-install.jpg"
          alt="Mobile technician preparing windshield replacement"
          width={612}
          height={408}
          priority
          sizes="(max-width: 980px) 100vw, 46vw"
        />
      </div>
      <div className="hero-image hero-image--home">
        <Image
          src="/images/services/auto-glass-replacement.jpg"
          alt="Auto glass replacement at a service location"
          width={612}
          height={408}
          sizes="(max-width: 980px) 48vw, 18vw"
        />
      </div>
      <div className="hero-image hero-image--glass">
        <Image
          src="/images/services/windshield-damage.jpg"
          alt="Damaged windshield glass before repair"
          width={612}
          height={408}
          sizes="(max-width: 980px) 48vw, 18vw"
        />
      </div>
      <GlassPanel className="hero-proof-card">
        <strong>Mobile Auto Glass. Today.</strong>
        <span>One request. One team. One clear solution.</span>
      </GlassPanel>
    </div>
  );
}

function ServiceCard({ service, onSelect }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-image">
        <Image
          src={service.image}
          alt={service.alt}
          width={612}
          height={408}
          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
        />
      </div>
      <span className="service-icon">
        <Icon size={24} aria-hidden="true" />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a
        className="card-link"
        href="#quote"
        onClick={() => onSelect(service.value)}
        aria-label={`Start a quote for ${service.title}`}
      >
        Start quote <ChevronRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}

function StepCard({ step }) {
  const Icon = step.icon;

  return (
    <GlassPanel className="step-card">
      <span className="service-icon">
        <Icon size={23} aria-hidden="true" />
      </span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </GlassPanel>
  );
}

function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "AutoRepair"],
    name: "GlassNow",
    url: "https://glassnow.com",
    logo: "https://glassnow.com/images/brand/logos/glassnow-logo.png",
    areaServed: ["New Jersey", "NYC metro area"],
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    description:
      "GlassNow provides mobile auto glass repair and replacement service across New Jersey and the greater NYC metro area.",
    serviceType: [
      "Windshield replacement",
      "Windshield chip repair",
      "Side-window replacement",
      "Rear-window replacement",
      "Mobile auto glass service",
      "Insurance claim assistance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const selectedLabel = useMemo(() => {
    const allServices = [...SERVICE_OPTIONS, ...OTHER_SERVICE_OPTIONS];
    return allServices.find(([value]) => value === form.serviceType)?.[1] || "Auto glass service";
  }, [form.serviceType]);

  const selectService = (serviceType) => {
    setForm((current) => ({ ...current, serviceType }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="top">
      <FAQJsonLd />
      <BusinessJsonLd />
      <Header />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="hero-eyebrow">Mobile Auto Glass Across New Jersey & the NYC Metro</p>
          <h1>Broken Glass Shouldn't Break Your Day.</h1>
          <p>
            GlassNow provides mobile windshield repair, replacement, and
            auto-glass service at your home, workplace, or safe service
            location. Request a quote and we'll coordinate the rest.
          </p>

          <div className="hero-actions">
            <GlassButton href="#quote">
              Get My Quote <ArrowRight size={18} aria-hidden="true" />
            </GlassButton>
            <GlassButton href={CONTACT.phoneHref} variant="secondary">
              Call for Service
            </GlassButton>
          </div>
        </div>

        <HeroMedia />

        <div className="trust-row" aria-label="GlassNow service strengths">
          <span>
            <ShieldCheck size={18} aria-hidden="true" /> Mobile service
          </span>
          <span>
            <Clock3 size={18} aria-hidden="true" /> Fast scheduling
          </span>
          <span>
            <FileCheck2 size={18} aria-hidden="true" /> Insurance assistance
          </span>
          <span>
            <MapPin size={18} aria-hidden="true" /> Local coverage
          </span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Immediate trust points">
        <span>Mobile service at your location</span>
        <span>New Jersey and NYC metro coverage</span>
        <span>Fast quote process</span>
        <span>Professional installation</span>
        <span>Experienced auto-glass professionals</span>
      </section>

      <section className="estimate-section" aria-label="Quote request form">
        <div className="estimate-intro">
          <p>One Request. We Handle the Rest.</p>
          <h2>No calling around. No guessing who has the glass.</h2>
          <span>
            GlassNow coordinates glass sourcing, scheduling, service
            communication, and completion under one consistent customer
            experience.
          </span>
        </div>
        <QuoteForm
          form={form}
          setForm={setForm}
          selectedLabel={selectedLabel}
          onSubmit={handleSubmit}
          submitted={submitted}
        />
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <p>Auto glass services</p>
          <h2>Windshield and vehicle glass service built around your schedule.</h2>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} onSelect={selectService} />
          ))}
        </div>
      </section>

      <section className="steps-section" id="how-it-works">
        <div className="section-heading">
          <p>How it works</p>
          <h2>Simple from the first request to the finished glass.</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </div>
      </section>

      <section className="materials-section mobile-section" id="about">
        <GlassPanel className="materials-panel">
          <div className="materials-copy">
            <p>Mobile service</p>
            <h2>We come to the place that makes the job practical.</h2>
            <span>
              Home, work, driveway, parking lot, fleet lot, or another safe
              service location. GlassNow helps coordinate the service around
              your day so damaged auto glass does not turn into a bigger
              headache.
            </span>
          </div>
          <div className="materials-photo">
            <Image
              src="/images/services/auto-glass-replacement.jpg"
              alt="Mobile auto glass service professional working on vehicle glass"
              width={612}
              height={408}
              sizes="(max-width: 980px) 100vw, 38vw"
            />
          </div>
          <div className="materials-list">
            <span>Home</span>
            <span>Work</span>
            <span>Driveway</span>
            <span>Parking lot</span>
            <span>Fleet location</span>
            <span>Other safe locations</span>
          </div>
        </GlassPanel>
      </section>

      <section className="insurance-section" id="insurance">
        <GlassPanel className="insurance-panel">
          <div>
            <p>Insurance support</p>
            <h2>Using insurance? We'll help make the process clearer.</h2>
            <span>
              Share your insurer, claim number if you have one, and the damage
              details. GlassNow can help organize the information needed for
              your auto-glass request without claiming to represent your insurer.
            </span>
          </div>
          <div className="insurance-actions">
            <span>
              <FileCheck2 size={20} aria-hidden="true" /> Claim info
            </span>
            <span>
              <Camera size={20} aria-hidden="true" /> Damage photos
            </span>
            <span>
              <CalendarCheck size={20} aria-hidden="true" /> Availability check
            </span>
          </div>
        </GlassPanel>
      </section>

      <section className="service-area-section" id="service-areas">
        <div className="section-heading">
          <p>Service areas</p>
          <h2>Coverage across New Jersey and the greater NYC metro area.</h2>
        </div>
        <div className="area-grid">
          {AREAS.map((area) => (
            <a key={area} href="#quote">
              <MapPin size={16} aria-hidden="true" />
              {area}
            </a>
          ))}
        </div>
        <p className="area-note">
          Don't see your city listed? Request service and we'll check coverage.
        </p>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p>FAQ</p>
          <h2>Clear answers before you book.</h2>
        </div>
        <div className="faq-grid">
          {FAQS.map((faq) => (
            <GlassPanel className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="retention-section final-cta">
        <GlassPanel className="retention-panel">
          <div>
            <p>Get Clear. Get Moving.</p>
            <h2>Tell us what happened, where you are, and what you drive.</h2>
            <span>
              GlassNow will help coordinate the next step, from quote review to
              service availability.
            </span>
          </div>
          <div className="final-actions">
            <GlassButton href="#quote">Get My Quote</GlassButton>
            <GlassButton href={CONTACT.phoneHref} variant="secondary">
              Call for Service
            </GlassButton>
          </div>
        </GlassPanel>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="footer-brand-logo footer-glassnow-logo">
            <Image
              src="/images/brand/logos/glassnow-logo-tight.png"
              alt="GlassNow mobile auto glass logo"
              width={1295}
              height={562}
              sizes="(max-width: 640px) 58vw, 14vw"
            />
          </div>
          <div className="footer-brand-mascot">
            <Image
              src="/images/brand/mascots/mrglasscot.png"
              alt="Mr. Glass mascot, Chief Clarity Officer"
              width={1024}
              height={1536}
              sizes="(max-width: 640px) 18vw, 4vw"
            />
          </div>
        </div>
        <div>
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href="/windshield-replacement">Windshield replacement</a>
          <a href="/service-areas/new-jersey">New Jersey service areas</a>
          <span>Business address and hours pending verification</span>
        </div>
      </footer>
    </main>
  );
}
