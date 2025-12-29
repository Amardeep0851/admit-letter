import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://admit-letter.pages.dev"),
  title: {
    default: "Admit Letter | Verified University Offer Letters",
    template: "%s | Admit Letter",
  },
  description:
    "Get verified university offer letters from top global universities with expert guidance.",
   robots: {
    index: false,
    follow: false,
    nocache: true,
    noimageindex: true,
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
