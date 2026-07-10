import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://glassnow.com"),
  title: {
    default: "GlassNow | Mobile Auto Glass Repair & Replacement",
    template: "%s | GlassNow",
  },
  description:
    "GlassNow provides mobile windshield repair, windshield replacement, and auto-glass service across New Jersey and the greater NYC metro area.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GlassNow | Mobile Auto Glass. Today.",
    description:
      "Request mobile auto-glass service at your home, workplace, or safe service location across New Jersey and the NYC metro area.",
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
    title: "GlassNow | Mobile Auto Glass. Today.",
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
