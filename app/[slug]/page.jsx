import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { baseUrl, servicePages, serviceSlugs } from "../site-content";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = servicePages[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.meta,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: `${page.title} | GlassNow`,
      description: page.meta,
      url: `${baseUrl}/${slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const page = servicePages[slug];

  if (!page) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    provider: {
      "@type": "Organization",
      name: "GlassNow",
    },
    areaServed: ["New Jersey", "NYC metro area"],
    description: page.meta,
  };

  return (
    <main className="detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="detail-header">
        <Link className="detail-brand" href="/" aria-label="GlassNow home">
          <Image
            src="/images/brand/logos/glassnow-logo-tight.png"
            alt="GlassNow mobile auto glass logo"
            width={1295}
            height={562}
            priority
          />
        </Link>
        <div>
          <Link href="/#quote">Get My Quote</Link>
          <a href="tel:+12018771720">Call for Service</a>
        </div>
      </header>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <span>{page.title}</span>
      </nav>

      <section className="detail-hero">
        <p>GlassNow service</p>
        <h1>{page.heading}</h1>
        <span>{page.intro}</span>
        <div className="detail-actions">
          <Link className="glass-button glass-button--primary" href="/#quote">
            Get My Quote <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="glass-button glass-button--secondary" href="/#services">
            View Services
          </Link>
        </div>
      </section>

      <section className="detail-grid">
        <article className="glass-panel detail-panel">
          <h2>What to know</h2>
          {page.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </article>

        <aside className="glass-panel detail-panel">
          <h2>Related request types</h2>
          <ul>
            {page.services.map((service) => (
              <li key={service}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {service}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="detail-cta glass-panel">
        <h2>Start with the details you have.</h2>
        <p>
          Tell GlassNow what happened, where the vehicle is, and what you drive.
          We will help coordinate quote information and availability from there.
        </p>
        <Link className="glass-button glass-button--primary" href="/#quote">
          Start My Quote
        </Link>
      </section>
    </main>
  );
}
