import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClassicHeader from "./components/ClassicHeader";
import MinimalFooter from "./components/MinimalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natasha Johnson",
  description:
    "Personal Portfolio for Natasha Johnson, Software Engineer at Township.",
    twitter: {
      card: "summary_large_image"
    },
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
