import type {Metadata} from "next";
import {Outfit} from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit'
})

export const metadata: Metadata = {
    icons: {
        icon: [
            {url: '/favicon.ico'},
            {url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
            {url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
        ],
        apple: [
            {url: '/apple-touch-icon.png'}
        ],
        other: [
            {
                rel: 'android-chrome-192x192',
                url: '/android-chrome-192x192.png',
            },
            {
                rel: 'android-chrome-512x512',
                url: '/android-chrome-512x512.png',
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${outfit.className} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}