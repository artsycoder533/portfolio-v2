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
    title: "Natasha Johnson | Portfolio",
    site: "https://www.natashajohnson.dev/",
    card: "summary_large_image",
    creator: '@artsycoder533',
    images: '/opengraph-image.png',
    description: "Personal Portfolio for Natasha Johnson, Software Engineer at Township.  Experienced in front-end development with frameworks such as Next.js, Vue, and React Native.",
  },
  keywords: ['Natasha Johnson', 'Software Engineer', 'Township', 'Next.js Developer', 'artsycoder533', '@artsycoder533', 'Self-taught developer', 'Freelance Web Developer', 'Front End Developer', 'Vue Developer', 'React Developer']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-accent">
      <body className={inter.className}>
        <ClassicHeader />
        <main className={`flex min-h-screen flex-col`}>
          {children}
        </main>
        <MinimalFooter />
      </body>
    </html>
  );
}
