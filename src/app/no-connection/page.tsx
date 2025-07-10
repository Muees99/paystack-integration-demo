"use client";

import React, { useEffect, Suspense } from "react";
// import WebLayout from "@/../layout/webLayout";
import Image from "next/image";
import Noconnect from "../../../public/assets/no-connection.png";

function NoconnectionContent() {
  useEffect(() => {
    const handleOnline = () => {
      const lastVisited = sessionStorage.getItem("last-visited") || "/";
      window.location.href = lastVisited;
    };

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  const handleManualRefresh = () => {
    if (navigator.onLine) {
      const lastVisited = sessionStorage.getItem("last-visited") || "/";
      window.location.href = lastVisited;
    } else {
      alert("You're still offline. Please connect to the internet.");
    }
  };

  return (
      <div className="w-[90%] max-w-[500px] translate-y-[5%] mx-auto z-10">
        <div className="flex flex-col md:flex-row justify-center items-center max-h-[550px]">
          <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-6 bg-white border rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-center text-center">
              <Image
                src={Noconnect}
                alt="No Connection"
                className="max-w-[150px] md:max-w-[200px]"
              />
              <h2 className="text-lg md:text-2xl font-bold mt-4">
                No internet connection
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                We are sorry, please confirm you are connected to the internet
                and refresh the page
              </p>
              <button
                className="w-full h-12 mt-6 bg-[#2388bf] text-white rounded-md hover:opacity-90 transition"
                type="button"
                onClick={handleManualRefresh}
              >
                Refresh page
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default function Noconnectionpage() {
  return (
    <Suspense
      fallback={
        <div className=" flex justify-center items-center text-center mt-10">
          Loading...
        </div>
      }
    >
      <NoconnectionContent />
    </Suspense>
  );
}
