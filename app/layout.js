import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.globalwonders.co"),
  title: {
    default: "Global Wonders — Capital Advisory for Private Companies",
    template: "%s | Global Wonders",
  },
  description:
    "Capital advisory for private companies focused on equity & strategic capital. A practical execution partner for companies preparing to raise equity or strategic capital, with 150+ active fund relationships.",
  keywords: [
    "capital advisory",
    "fundraising advisory",
    "startup fundraising India",
    "equity capital raise",
    "investor introductions",
    "investment readiness",
    "venture capital advisory",
    "Global Wonders",
    "Mumbai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.globalwonders.co",
    siteName: "Global Wonders",
    title: "Global Wonders — Capital Advisory for Private Companies",
    description:
      "A practical execution partner for private companies preparing to raise equity or strategic capital. 150+ active fund relationships across VCs, family offices and angels.",
    images: [
      {
        url: "/deck/slide-02.jpg",
        width: 2000,
        height: 1125,
        alt: "Global Wonders — capital advisory for private companies focused on equity and strategic capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Wonders — Capital Advisory for Private Companies",
    description:
      "A practical execution partner for private companies preparing to raise equity or strategic capital.",
    images: ["/deck/slide-02.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Global Wonders",
  legalName: "Raman Globalwonders Consulting Private Limited",
  url: "https://www.globalwonders.co",
  logo: "https://www.globalwonders.co/logo-globalwonders.png",
  email: "info@globalwonders.co",
  telephone: "+919867023787",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400071",
    addressCountry: "IN",
  },
  description:
    "Capital advisory for private companies focused on equity and strategic capital: investment readiness, targeted investor access, and transaction process support.",
  slogan: "The Right Connection. The Right Direction.",
};

export default function RootLayout({ children }) {
  const isProd =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="scroll-smooth">
        {isProd && (
          <Script
            id="apollo-website-tracker"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                function initApollo(){
                  var n = Math.random().toString(36).substring(7),
                      o = document.createElement("script");
                  o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
                  o.async = !0;
                  o.defer = !0;
                  o.onload = function(){
                    window.trackingFunctions.onLoad({appId:"698f0cfa628299000dfca1d1"})
                  };
                  document.head.appendChild(o)
                }
                initApollo();
              `,
            }}
          />
        )}
        {children}
      </body>
    </html>
  );
}
