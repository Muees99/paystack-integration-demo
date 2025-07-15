"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ToastTestPage() {
  useEffect(() => {
    toast.success("This is a test toast!");
  }, []);

  return <div>Toast test page</div>;
}
