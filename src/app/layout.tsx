import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export const metadata: Metadata = {
  title: "Paystack-integration-demo",
  description:
    "Small payment platform that implements at least 2 of Paystack APIs",
};

export interface LayoutProps {
  children: React.ReactNode;
  types: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function RootLayout({ children, types }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://js.paystack.co/v1/inline.js"
          strategy="beforeInteractive"
        />
      </head>
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="bg-[#007BFF] text-white text-center text-sm py-6">
          &copy; {currentYear} PayDemo by Muees99. | All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
