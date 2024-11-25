import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from 'next/font/google'
import "./globals.css";
import { Providers } from "./providers";
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PathForge - Forge Your Development Journey',
  description: 'Navigate your path to programming mastery with curated learning roadmaps.',
  other: {
    'vercel-analytics': 'false',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <Script id="disable-vercel" strategy="beforeInteractive">
          {`
            window.__VERCEL_NO_BANNER__ = true;
            window.__VERCEL_INSIGHTS_ENABLED__ = false;
          `}
        </Script>
      </head>
      <body
        className={`bg-secondary text-primary min-h-screen font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
