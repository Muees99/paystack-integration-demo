import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paystack-integration-demo",
  description:
    "Small payment platform that implements at least 2 of Paystack APIs",
};

export interface LayoutProps {
  children: React.ReactNode;
  types: React.ReactNode;
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
  // export default function RootLayout({
  //   children,
  // }: Readonly<{
  //   children: React.ReactNode;
  // }>) {
  //   return (
  //     <html lang="en">
  //       <head>
  //         {/* ✅ Paystack SDK Script */}
  //         <Script
  //           // type="text/javascript"
  //           // src="https://js.paystack.co/v1/inline.js"
  //           // async
  //           src="https://js.paystack.co/v1/inline.js"
  //           strategy="beforeInteractive"
  //         />
  //       </head>
  //       <body
  //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
  //       >
  //         <Navbar />
  //         {children}
  //       </body>
  //     </html>
  // export default function RootLayout({
  //   children,
  // }: {
  //   children: React.ReactNode;
  // }) {
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
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            {children}
          </body>
        </html>
      );
    }
