// // app/api/transactions/route.ts
// import { NextResponse } from "next/server";

// export async function GET() {
//   const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

//   const res = await fetch("https://api.paystack.co/transaction", {
//     headers: {
//       Authorization: `Bearer ${PAYSTACK_SECRET}`,
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     return NextResponse.json(
//       { error: data.message || "Failed to fetch transactions" },
//       { status: 500 }
//     );
//   }

//   return NextResponse.json(data.data); // Only return the array of transactions
// }

// app/api/transactions/route.ts
import { NextResponse } from "next/server";
import { getLoggedTransactions } from "@/libs/logTransaction";

export async function GET() {
  try {
    const transactions = getLoggedTransactions();
    return NextResponse.json(transactions);
  } catch {
    return NextResponse.json({ error: "Failed to load transactions" }, { status: 500 });
  }
}
