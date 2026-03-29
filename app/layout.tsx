import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TextBubbles - iMessage API for Developers",
  description:
    "Send blue bubbles, reactions, and rich media via a simple REST API. The iMessage API built for developers.",
  keywords: ["iMessage API", "SMS API", "messaging", "developer tools"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
