export const metadata = {
  title: "GlobalWonders — Funding & Growth Advisory",
  description: "Connecting smart funds with game-changing startups.",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
