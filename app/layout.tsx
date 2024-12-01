import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  // Optional: you can specify custom weights if needed
  // weight: ['400', '500', '600', '700'],
  variable: '--font-inter' // This allows us to use it as a CSS variable
})

export const metadata: Metadata = {
  title: "Xtra Loft Space",
  description: "Leading provider of loft conversions in the UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
