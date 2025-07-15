// app/api/verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import { logTransaction } from "@/libs/logTransaction"; // ✅ Import

export async function GET(req: NextRequest) {
  const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

  const { searchParams } = new URL(req.url);
  const ref = searchParams.get("ref");

  if (!ref) {
    return NextResponse.json({ message: "Missing transaction reference" }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${ref}`, {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok || data.status !== true) {
      return NextResponse.json({ message: "Verification failed", data }, { status: 400 });
    }

    const transaction = data.data;

    // ✅ Log it if successful
    if (transaction.status === "success") {
      logTransaction(transaction);
    }

    return NextResponse.json({ message: "Payment verified successfully", data: transaction }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ message }, { status: 500 });
  }
}