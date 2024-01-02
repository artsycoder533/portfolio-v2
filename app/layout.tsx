import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClassicHeader from "./components/ClassicHeader";
import MinimalFooter from "./components/MinimalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.natashajohnson.dev'),
  openGraph: {
    images: '/opengraph-image.png',
    type: 'website',
    siteName: 'Natasha Johnson | Portfolio',
    locale: 'en_US'
  },
  title: "Natasha Johnson | Portfolio",
  description:
    "Personal Portfolio for Natasha Johnson, Software Engineer at Township.",
  twitter: {
    card: "summary_large_image",
    creator: '@artsycoder533'
  },
  keywords: ['Natasha Johnson', 'Software Engineer', 'Township', 'Next.js']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={inter.className}>
        <ClassicHeader />
        <main className={`${inter.className} flex min-h-screen flex-col`}>
          {children}
        </main>
        <MinimalFooter />
      </body>
    </html>
  );
}
