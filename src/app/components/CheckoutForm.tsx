"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { PaystackSetupOptions } from "../@types";

const CheckoutForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  // const [statusMessage, setStatusMessage] = useState("");
  const [paymentStarted, setPaymentStarted] = useState(false);

  
  
  const handlePayment = () => {
    // if (!email || !amount || Number(amount) <= 0) {
    //   alert("Please enter a valid email and amount.");
    //   return;
    // }
    setPaymentStarted(true); // 👈 mark that payment started
    setTimeout(() => {
      type PaystackPopType = {
        setup: (options: PaystackSetupOptions) => { openIframe: () => void };
      };

      const paystackPop = (window as { PaystackPop: PaystackPopType }).PaystackPop;
      const paystack = paystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email,
        amount: Number(amount) * 100, // Convert Naira to Kobo
        currency: "NGN",
        reference: new Date().getTime().toString(),
        callback: function (response: { reference: string }) {
          setPaymentStarted(false); // 👈 reset
          toast.success("Payment successful! Redirecting...");
          window.location.href = `/success?ref=${response.reference}`;
        },
        // onClose: function () {
        //   setStatusMessage("Payment was cancelled. You can try again anytime.");
        // },
  
        onClose: function () {
          if (paymentStarted) {
            toast.error("Payment was abandoned or cancelled.");
            setPaymentStarted(false); // Reset state after closing
          }
          // toast.error("Payment was abandoned or cancelled.");
        },
      });
      paystack.openIframe();
    }, 0);
  };

  return (
    // <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    //   <Image src={Paystack} alt="Paystack Logo" width={150} height={50} className="mb-6" />
    <div className="bg-white p-8 rounded shadow max-w-md w-full mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Pay with Paystack</h2>
      <label className="block mb-1 text-sm font-medium">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="border rounded w-full px-4 py-2 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!email && <p className="text-red-500 text-sm mb-2">Email is required</p>}
      <label className="block mb-1 text-sm font-medium">Amount (NGN)</label>
      <input
        type="number"
        placeholder="Amount (NGN)"
        className="border rounded w-full px-4 py-2 mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {amount && Number(amount) <= 0 && (
        <p className="text-red-500 text-sm mb-2">Enter a valid amount</p>
      )}

      {/* {statusMessage && (
        <p className="text-yellow-600 text-sm mb-4 text-center">
          {statusMessage}
        </p>
      )} */}
      
      <button
        onClick={handlePayment}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        // disabled={!email || !amount}
        disabled={!email || !amount || Number(amount) <= 0}
      >
        Pay Now
      </button>
    </div>
    // </div>
  );
};

export default CheckoutForm;
