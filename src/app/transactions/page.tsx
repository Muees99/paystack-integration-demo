"use client";

import { useEffect, useState } from "react";
import { Transaction } from "../@types";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
      setLoading(false);
    };

    fetchTransactions();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Dashboard
      </h1>

      {loading ? (
        <p className="text-center my-40 font-light">Loading...</p>
      ) : (
        <div className="w-full overflow-x-auto mt-6">
          <table className="w-full table-auto bg-white shadow rounded-lg border">
            <thead className="bg-gray-200">
              <tr className="text-left text-sm font-semibold">
                <th className="p-4">Reference</th>
                <th className="p-4">Email</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Paid At</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-t text-sm hover:bg-gray-50 transition"
                >
                  <td className="p-4">{tx.reference}</td>
                  <td className="p-4">{tx.customer.email}</td>
                  <td className="p-4">₦{(tx.amount / 100).toFixed(2)}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        tx.status === "success"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "failed"
                          ? "bg-red-100 text-red-600"
                          : tx.status === "abandoned"
                          ? "bg-gray-200 text-gray-600"
                          : tx.status === "cancelled"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {new Date(tx.paid_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
