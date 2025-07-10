"use client"
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

const CheckoutForm = dynamic(() => import("./components/CheckoutForm"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Paystack Demo</title>
      </Head>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
      />
      <main className="min-h-screen flex justify-center items-center bg-gray-100">
        <CheckoutForm />
      </main>
    </>
  );
}
