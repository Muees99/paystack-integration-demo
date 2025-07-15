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
