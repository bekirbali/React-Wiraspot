import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://wiraspot.com"
  ),
  icons: {
    icon: [{ url: "/wifi.ico", sizes: "any" }],
    apple: { url: "/wifi.ico" },
  },
  title: "Wiraspot - High-Speed Internet Anywhere",
  description:
    "Experience lightning-fast connectivity with our advanced hotspot service. Stay connected wherever life takes you.",
  keywords: [
    "hotspot",
    "internet",
    "wifi",
    "bağlantı",
    "hızlı internet",
    "mobil internet",
    "kvkk 5651 loglama",
    "log",
    "loglama",
    "internet loglama",
    "loglama nasıl çalışır",
  ],
  openGraph: {
    title: "Wiraspot - High-Speed Internet Anywhere",
    description:
      "Experience lightning-fast connectivity with our advanced hotspot service. Stay connected wherever life takes you.",
    url: "/",
    siteName: "Wiraspot",
    images: [
      {
        url: "/wifi.ico",
        width: 1200,
        height: 630,
        alt: "Wiraspot - High-Speed Internet Anywhere",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiraspot - High-Speed Internet Anywhere",
    description:
      "Experience lightning-fast connectivity with our advanced hotspot service. Stay connected wherever life takes you.",
    images: ["/wifi.ico"],
    creator: "@wiraspot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="shortcut icon" href="/wifi.ico" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
