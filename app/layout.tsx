import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "./landing/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FGGO Publicidad",
  description: "Diseñamos, producimos e instalamos soluciones de publicidad de alto impacto visual. Precisión, calidad y presencia real en todos lados.",
  icons: {
    icon: "img/fggo.png",
  },
  keywords: [
    "publicidad",
    "serigrafía",
    "vinilos",
    "viniles",
    "banderolas",
    "decoración interior",
    "decoración exterior",
    "publicidad corporativa",
    "publicidad para empresas",
    "publicidad para eventos",
    "decoración para hogar",
    "fiestas infantiles",
    "stickers",
    "rotulación",
    "activaciones de marca",
    "diseño publicitario",
    "impresión de gran formato",
    "señalética",
    "FGGO Publicidad",
  ],
  authors: [{ name: "FGGO Publicidad" }],
  creator: "FGGO Publicidad",
  publisher: "FGGO Publicidad",
  applicationName: "FGGO Publicidad",
  category: "Publicidad y Diseño",
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "FGGO Publicidad",
    title: "FGGO Publicidad",
    description: "Diseñamos, producimos e instalamos soluciones de publicidad de alto impacto visual. Precisión, calidad y presencia real en todos lados.",
    images: [
      {
        url: "img/fggo.png",
        width: 1200,
        height: 630,
        alt: "FGGO Publicidad - Diseño, serigrafía, vinilos y decoración",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FGGO Publicidad",
    description: "Diseñamos, producimos e instalamos soluciones de publicidad de alto impacto visual. Precisión, calidad y presencia real en todos lados.",
    images: ["img/fggo.png"],
  },
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${quicksand.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}