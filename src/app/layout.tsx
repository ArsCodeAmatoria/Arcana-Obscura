import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Cinzel_Decorative } from "next/font/google";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  variable: "--font-esoterica",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcana Obscura | The Secret Teachings Portal",
  description: "Explore the ancient mysteries and esoteric knowledge of secret traditions throughout history.",
  keywords: "esoteric, occult, hermeticism, kabbalah, freemasonry, mystery traditions, sacred knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${cinzel.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
