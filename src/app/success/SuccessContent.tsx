"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import PayStackLogo from "@/../public/assets/Paystack.png";

export default function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (!ref) return;

    const verifyTransaction = async () => {
      const res = await fetch(`/api/verify?ref=${ref}`);
      const data = await res.json();
      setStatus(data.message);
      setLoading(false);
      setShowToast(true);

      // Redirect after 5s
      setTimeout(() => {
        router.push("/");
      }, 5000);
    };

    verifyTransaction();
  }, [searchParams, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 text-center">
        <Image
          src={PayStackLogo}
          alt="Paystack Logo"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Payment {loading ? "Processing..." : "Verified!"}
        </h1>
        <p className="text-gray-700 mb-6">
          {loading ? "We are confirming your transaction..." : status}
        </p>

        <div className="text-sm text-gray-500">
          Redirecting you to homepage shortly...
        </div>
      </div>

      {/* ✅ Toast Notification */}
      {showToast && (
        // <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 animate-fade-in-out">
        <div className="fixed top-20 right-5 z-40 bg-green-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2 animate-fade-in-out">
          <Image
            src={PayStackLogo}
            alt="Paystack Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span>Payment Successful!🎉</span>
        </div>
      )}
    </main>
  );
}
