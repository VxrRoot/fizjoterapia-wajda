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
      <body className={`${syne.className} antialiased`}>
        <Header />
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
