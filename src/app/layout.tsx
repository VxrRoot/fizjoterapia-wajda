import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientLayout from "@/layouts/ClientLayout";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"] });

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

export const metadata: Metadata = {
  title: "Fizjoterapia korczyna",
  description: "Fizjoterapia Patrycja Wajda - Korczyna, Krosno",
  openGraph: {
    title: "Fizjoterapia korczyna",
    description: "Fizjoterapia Patrycja Wajda - Korczyna, Krosno",
    type: "website",
    locale: "pl",
    url: "",
    siteName: "Fizjoterapia Wajda",
  },
  robots: {
    index: isProduction ? true : false,
    follow: isProduction ? true : false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${syne.className} antialiased overflow-x-hidden`}>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
        <a
          href="https://www.m.me/108440590840140"
          className="fixed bottom-4 right-4 lg:right-10 lg:bottom-10 w-16 h-16"
          target="_blank"
        >
          <img src="/msg-icon.webp" />
        </a>
      </body>
    </html>
  );
}
