import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { areaPages, areaSlugs, baseUrl } from "../../site-content";

export function generateStaticParams() {
  return areaSlugs.map((area) => ({ area }));
}

export async function generateMetadata({ params }) {
  const { area } = await params;
  const page = areaPages[area];

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} Mobile Auto Glass`,
    description: page.meta,
    alternates: {
      canonical: `/service-areas/${area}`,
    },
    openGraph: {
      title: `${page.title} Mobile Auto Glass | GlassNow`,
      description: page.meta,
      url: `${baseUrl}/service-areas/${area}`,
      type: "website",
    },
  };
}

export default async function AreaPage({ params }) {
  const { area } = await params;
  const page = areaPages[area];

  if (!page) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Mobile auto glass service in ${page.title}`,
    provider: {
      "@type": "Organization",
      name: "GlassNow",
    },
    areaServed: page.title,
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
        <Link href="/service-areas/new-jersey">Service Areas</Link>
        <span>/</span>
        <span>{page.title}</span>
      </nav>

      <section className="detail-hero">
        <p>GlassNow service area</p>
        <h1>{page.heading}</h1>
        <span>{page.intro}</span>
        <div className="detail-actions">
          <Link className="glass-button glass-button--primary" href="/#quote">
            Check Availability <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="glass-button glass-button--secondary" href="/mobile-auto-glass">
            Mobile Auto Glass
          </Link>
        </div>
      </section>

      <section className="detail-grid">
        <article className="glass-panel detail-panel">
          <h2>Mobile coverage details</h2>
          <p>
            GlassNow coordinates windshield replacement, chip repair, side-window
            replacement, rear-window replacement, insurance information support,
            and fleet auto-glass requests where coverage is available.
          </p>
          <p>
            Service depends on safe vehicle access, glass availability, technician
            availability, and any calibration needs tied to your vehicle.
          </p>
          <p>
            Share your address, vehicle details, photos, and timing needs so the
            next step can be reviewed clearly.
          </p>
        </article>

        <aside className="glass-panel detail-panel">
          <h2>Nearby communities</h2>
          <ul>
            {page.nearby.map((community) => (
              <li key={community}>
                <MapPin size={18} aria-hidden="true" />
                {community}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="detail-cta glass-panel">
        <h2>Need auto glass service near {page.title}?</h2>
        <p>
          Request service and GlassNow will check coverage, availability, and
          quote details for your vehicle.
        </p>
        <Link className="glass-button glass-button--primary" href="/#quote">
          Request Service
        </Link>
      </section>
    </main>
  );
}
