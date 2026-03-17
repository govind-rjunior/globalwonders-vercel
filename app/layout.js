import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "GlobalWonders — Funding & Growth Advisory",
  description: "Connecting smart funds with game-changing startups.",
};

export default function RootLayout({ children }) {
  const isProd =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head />
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
