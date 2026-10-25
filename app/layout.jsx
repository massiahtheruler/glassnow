import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://glassnow.com"),
  title: {
    default: "Mobile Auto Glass Repair & Replacement in New Jersey | GlassNow",
    template: "%s | GlassNow",
  },
  description:
    "Request mobile windshield repair, windshield replacement, and vehicle glass service at your location across New Jersey and the greater NYC metro area.",
  alternates: {
    canonical: "/",
  },
  applicationName: "GlassNow",
  category: "Auto glass repair",
  keywords: [
    "mobile auto glass New Jersey",
    "windshield replacement New Jersey",
    "mobile windshield repair",
    "car window replacement",
    "fleet auto glass",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Mobile Auto Glass Repair & Replacement in New Jersey | GlassNow",
    description:
      "Request mobile windshield repair and replacement at your home, workplace, or another safe location across New Jersey and the NYC metro area.",
    url: "https://glassnow.com",
    siteName: "GlassNow",
    images: [
      {
        url: "/images/brand/logos/glassnow-logo.png",
        width: 1536,
        height: 1024,
        alt: "GlassNow mobile auto glass logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Auto Glass in New Jersey | GlassNow",
    description:
      "Mobile windshield repair and replacement across New Jersey and the NYC metro area.",
    images: ["/images/brand/logos/glassnow-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
