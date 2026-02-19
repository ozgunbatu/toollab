import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ToolLab - Free Online Developer Tools | 35+ Professional Tools",
  description: "Professional online tools for developers, designers, and content creators. JSON formatters, Base64 encoders, password generators, and 30+ more tools. All free, no signup required.",
  keywords: "online tools, developer tools, json formatter, base64 encoder, password generator, code formatter, web tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
