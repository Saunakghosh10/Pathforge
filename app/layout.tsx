import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";
import { Providers } from "./providers";
import AuthProvider from './providers/AuthProvider';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'PathForge - Learning Platform',
  description: 'Interactive learning platform for developers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-secondary text-primary min-h-screen font-sans ${spaceGrotesk.variable} antialiased`}
      >
        <Providers>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
