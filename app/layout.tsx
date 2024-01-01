import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClassicHeader from "./components/ClassicHeader";
import MinimalFooter from "./components/MinimalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natasha Johnson | Portfolio",
  description: "Software Engineer Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={inter.className}>
        <main className={`${inter.className} flex min-h-screen flex-col`}>
          <ClassicHeader />
          {children}
          <MinimalFooter />
        </main>
      </body>
    </html>
  );
}
