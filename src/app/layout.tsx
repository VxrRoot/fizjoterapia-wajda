import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientLayout from "@/layouts/ClientLayout";
import { GoogleTagManager } from "@next/third-parties/google";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fizjoterapia Korczyna – Rehabilitacja i Masaż | Patrycja Wajda",
  description:
    "Profesjonalna fizjoterapia i rehabilitacja w Korczynie (Krosno). Sprawdź ofertę masaży i terapii manualnej. Umów wizytę już dziś!",

  keywords: [
    "fizjoterapia Korczyna",
    "rehabilitacja Korczyna",
    "masaż Korczyna",
    "terapia manualna Krosno",
    "fizjoterapeuta Korczyna",
    "fizjoterapeuta Krosno",
    "rehabilitacja Krosno",
    "masaż Krosno",
  ],

  openGraph: {
    title: "Fizjoterapia Korczyna – Rehabilitacja i Masaż | Patrycja Wajda",
    description:
      "Profesjonalna fizjoterapia i rehabilitacja w Korczynie (Krosno). Sprawdź ofertę masaży i terapii manualnej. Umów wizytę już dziś!",
    type: "website",
    locale: "pl_PL",
    url: "https://fizjoterapiawajda.pl/", // ← Podaj pełny URL
    siteName: "Fizjoterapia Patrycja Wajda",
    images: [
      {
        url: "https://fizjoterapiawajda.pl/og-image.png", // ← Pełny URL do obrazka!
        width: 1200,
        height: 630,
        alt: "Fizjoterapia Korczyna – Rehabilitacja i Masaż",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fizjoterapia Korczyna – Rehabilitacja i Masaż | Patrycja Wajda",
    description:
      "Profesjonalna fizjoterapia i rehabilitacja w Korczynie (Krosno). Sprawdź ofertę masaży i terapii manualnej. Umów wizytę już dziś!",
    images: ["https://fizjoterapiawajda.pl/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
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
    <html lang="pl" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-P8B6FLVS" />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P8B6FLVS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <body className={`${syne.className} antialiased overflow-x-hidden`}>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <a
          href="https://www.m.me/108440590840140"
          className="fixed bottom-4 right-4 lg:right-10 lg:bottom-10 w-16 h-16"
          target="_blank"
        >
          <img src="/msg-icon.webp" alt="Messenger" />
        </a>
      </body>
    </html>
  );
}
