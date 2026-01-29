import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrackingPixels } from "./components/Tracking";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://precision-dutasteride.vercel.app'),
  title: "Precision Dutasteride | 2-3x Higher Follicular Delivery | Anagen",
  description:
    "The most advanced topical dutasteride formulation. 2-3x higher follicular delivery with lower systemic exposure. Developed through 2-year research collaboration with University of Brasília. Beat 60+ competing delivery systems.",
  keywords: [
    "dutasteride",
    "topical dutasteride",
    "hair loss treatment",
    "androgenetic alopecia",
    "DHT blocker",
    "hair regrowth",
    "precision dutasteride",
    "anagen",
  ],
  openGraph: {
    title: "Precision Dutasteride | 2-3x Higher Follicular Delivery",
    description:
      "The most advanced topical dutasteride formulation. Beat 60+ delivery systems. Lower systemic exposure.",
    url: "https://anagen.xyz/products/precision-dutasteride",
    siteName: "Anagen by HairDAO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Precision Dutasteride by Anagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Precision Dutasteride | 2-3x Higher Follicular Delivery",
    description:
      "The most advanced topical dutasteride formulation. Beat 60+ delivery systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <TrackingPixels />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
