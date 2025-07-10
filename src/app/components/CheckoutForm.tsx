"use client";

import { useState } from "react";



const CheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    if (!email || !amount || Number(amount) <= 0) {
      alert("Please enter a valid email and amount.");
      return;
    }
      
    const paystack = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email,
      amount: Number(amount) * 100, // Convert Naira to Kobo
      currency: "NGN",
      callback: function (response: { reference: string }) {
        window.location.href = `/success?ref=${response.reference}`;
      },
      onClose: function () {
        alert("Payment cancelled");
      },
    });
    paystack.openIframe();
  };

  return (
    <div className="bg-white p-8 rounded shadow max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Pay with Paystack</h2>
      <input
        type="email"
        placeholder="Email"
        className="border rounded w-full px-4 py-2 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (NGN)"
        className="border rounded w-full px-4 py-2 mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {/* <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Pay Now
      </button> */}
      <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={!email || !amount}
      >
        Pay Now
      </button>
    </div>
  );
};

export default CheckoutForm;
