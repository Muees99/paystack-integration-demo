"use client";
import { Suspense } from "react";
import Image from "next/image";
import NotFoundImage from "@/../public/assets/Notfound.png";
import { useRouter } from "next/navigation";


function NotfoundpageContent() {
  const router = useRouter();

  return (
    <div className="w-[90%] max-w-[500px]  translate-y-[5%]  mx-auto z-10">
      <div className="flex flex-col md:flex-row justify-center items-center max-h-[550px]">
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-6 bg-white border rounded-lg shadow-lg">
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src={NotFoundImage}
              alt="Not found Page"
              className="max-w-[150px] md:max-w-[200px]"
            />
            <h2 className="text-lg md:text-2xl font-bold mt-4">
              Page not found
            </h2>
            <p className="text-sm   text-gray-600 mt-2">
              We are sorry, please confirm this is correct page with the right
              url and refresh the page
            </p>
            <button
              onClick={() => {
                if (
                  document.referrer &&
                  new URL(document.referrer).origin === window.location.origin
                ) {
                  router.back(); // Go back to previous page if it’s from same origin
                } else {
                  router.push("/"); // Otherwise go to home
                }
              }}
              className="w-full h-12 mt-6 bg-[#2F7889] text-white rounded-md hover:opacity-90 transition"
              type="button"
            >
              Go back
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
      <NotfoundpageContent />
    </Suspense>
  );
}
