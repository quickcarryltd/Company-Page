import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuickCarry — Faster, Fairer, Smarter Delivery",
  description:
    "QuickCarry is Abuja's delivery ecosystem — instant delivery, sending anything, scheduled and multi-stop runs — with price locks, group delivery, and a business wallet built in.",
  openGraph: {
    title: "QuickCarry — Faster, Fairer, Smarter Delivery",
    description:
      "Instant delivery, send anything, scheduled and multi-stop runs, launching in Abuja — with price locks, group delivery, and a business wallet built in.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
