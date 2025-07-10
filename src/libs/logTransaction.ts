// src/lib/logTransaction.ts
import fs from "fs";
import path from "path";

const logPath = path.resolve(process.cwd(), "transactions.json");

export interface Transaction {
  reference: string;
  [key: string]: unknown;
}

export function logTransaction(transaction: Transaction) {
  let existingData: Transaction[] = [];

  if (fs.existsSync(logPath)) {
    const raw = fs.readFileSync(logPath, "utf-8");
    existingData = JSON.parse(raw || "[]");
  }

  // Avoid duplicates
  const alreadyLogged = existingData.find(
    (tx) => tx.reference === transaction.reference
  );
  if (alreadyLogged) return;

  existingData.push(transaction);
  fs.writeFileSync(logPath, JSON.stringify(existingData, null, 2), "utf-8");
}

export function getLoggedTransactions(): Transaction[] {
  if (!fs.existsSync(logPath)) return [];
  const raw = fs.readFileSync(logPath, "utf-8");
  return JSON.parse(raw || "[]");
}
