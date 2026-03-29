import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TextBubbles - The iMessage & SMS API Built for Developers",
  description:
    "Send blue bubble iMessages, reactions, and rich media via a simple REST API. Automatic SMS fallback for Android. Built for developers who ship.",
  keywords: ["iMessage API", "SMS API", "messaging", "developer tools"],
  metadataBase: new URL("https://textbubbles.com"),
  openGraph: {
    title: "TextBubbles - The iMessage & SMS API Built for Developers",
    description: "Send blue bubble iMessages, reactions, and rich media via a simple REST API. Automatic SMS fallback for Android. Built for developers who ship.",
    url: "https://textbubbles.com",
    siteName: "TextBubbles",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TextBubbles - iMessage API",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TextBubbles - The iMessage & SMS API Built for Developers",
    description: "Send blue bubble iMessages, reactions, and rich media via a simple REST API. Automatic SMS fallback for Android.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
