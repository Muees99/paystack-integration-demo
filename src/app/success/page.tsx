"use client";

import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-blue-600">Processing Transaction...</h1>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SuccessContent />
    </Suspense>
  );
}
