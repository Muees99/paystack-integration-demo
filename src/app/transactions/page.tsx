// // "use client";

// // import { useEffect, useState } from "react";
// // import { Transaction } from "../@types";



// // export default function TransactionsPage() {
// //   const [transactions, setTransactions] = useState<Transaction[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchTransactions = async () => {
// //       const res = await fetch("/api/transactions");
// //       const data = await res.json();
// //       setTransactions(data);
// //       setLoading(false);
// //     };

// //     fetchTransactions();
// //   }, []);

// //   return (
// //     <main className="min-h-screen bg-gray-50 p-6">
// //       <h1 className="text-2xl font-bold m-20 flex justify-center items-center">
// //         Transaction Dashboard
// //       </h1>

// //       {loading ? (
// //         <p className=" flex justify-center items-center text-center m-40  font-light">
// //           Loading...
// //         </p>
// //       ) : (
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full bg-white shadow rounded rounded-b-lg">
// //             <thead>
// //               <tr className="bg-gray-200 text-left text-sm font-semibold">
// //                 <th className="p-4">Reference</th>
// //                 <th className="p-4">Email</th>
// //                 <th className="p-4">Amount</th>
// //                 <th className="p-4">Status</th>
// //                 <th className="p-4">Paid At</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {transactions.map((tx) => (
// //                 <tr key={tx.id} className="border-t text-sm">
// //                   <td className="p-4">{tx.reference}</td>
// //                   <td className="p-4">{tx.customer.email}</td>
// //                   <td className="p-4">₦{(tx.amount / 100).toFixed(2)}</td>
// //                   <td className="p-4">
// //                     <span
// //                       className={`px-2 py-1 rounded text-xs font-semibold ${
// //                         tx.status === "success"
// //                           ? "bg-green-100 text-green-600"
// //                           : "bg-yellow-100 text-yellow-700"
// //                       }`}
// //                     >
// //                       {tx.status}
// //                     </span>
// //                   </td>
// //                   <td className="p-4">
// //                     {new Date(tx.paid_at).toLocaleString()}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </main>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { Transaction } from "../@types";

// export default function TransactionsPage() {
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       const res = await fetch("/api/transactions");
//       const data = await res.json();
//       setTransactions(data);
//       setLoading(false);
//     };

//     fetchTransactions();
//   }, []);

//   return (
//     // <main className="min-h-screen bg-gray-50 p-6">
//     // <main className="min-h-screen  pt-20 p-6">
//     // <main className="min-h-screen bg-gray-50 pt-20 px-6">
//     //   {/* Sticky Title */}
//     //   {/* <h1 className="text-2xl font-bold sticky top-0 z-10 bg-gray-50 py-4 text-center shadow-sm">
//     //     Transaction Dashboard
//     //   </h1> */}
//     //   {/* <h1 className="text-2xl font-bold sticky top-16 z-10 py-4 text-center shadow-sm">
//     //     Transaction Dashboard
//     //   </h1> */}
//     //   <h1 className="text-2xl font-bold sticky top-16 z-10 text-center py-4">
//     //     Transaction Dashboard
//     //   </h1>

//     //   {loading ? (
//     //     <p className="text-center m-40 font-light">Loading...</p>
//     //   ) : (
//     //     // <div className="overflow-x-auto mt-4">
//     //     //   <table className="min-w-full bg-white shadow rounded">
//     //     //     <thead className="sticky top-[60px] bg-gray-200 z-0">
//     //     //       <tr className="text-left text-sm font-semibold">
//     //     //         <th className="p-4">Reference</th>
//     //     //         <th className="p-4">Email</th>
//     //     //         <th className="p-4">Amount</th>
//     //     //         <th className="p-4">Status</th>
//     //     //         <th className="p-4">Paid At</th>
//     //     //       </tr>
//     //     //     </thead>
//     //     //     <tbody>
//     //     //       {transactions.map((tx) => (
//     //     //         <tr key={tx.id} className="border-t text-sm">
//     //     //           <td className="p-4">{tx.reference}</td>
//     //     //           <td className="p-4">{tx.customer.email}</td>
//     //     //           <td className="p-4">₦{(tx.amount / 100).toFixed(2)}</td>
//     //     //           <td className="p-4">
//     //     //             <span
//     //     //               className={`px-2 py-1 rounded text-xs font-semibold ${
//     //     //                 tx.status === "success"
//     //     //                   ? "bg-green-100 text-green-600"
//     //     //                   : "bg-yellow-100 text-yellow-700"
//     //     //               }`}
//     //     //             >
//     //     //               {tx.status}
//     //     //             </span>
//     //     //           </td>
//     //     //           <td className="p-4">
//     //     //             {new Date(tx.paid_at).toLocaleString()}
//     //     //           </td>
//     //     //         </tr>
//     //     //       ))}
//     //     //     </tbody>
//     //     //   </table>
//     //     // </div>
//     //     <div className="overflow-x-auto mt-4">
//     //       <table className="min-w-full bg-white shadow rounded text-sm">
//     //         <thead className="bg-gray-200 sticky top-[60px] z-0">
//     //           <tr>
//     //             <th className="px-4 py-2 whitespace-nowrap">Reference</th>
//     //             <th className="px-4 py-2 whitespace-nowrap">Email</th>
//     //             <th className="px-4 py-2 whitespace-nowrap">Amount</th>
//     //             <th className="px-4 py-2 whitespace-nowrap">Status</th>
//     //             <th className="px-4 py-2 whitespace-nowrap">Paid At</th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {transactions.map((tx) => (
//     //             <tr key={tx.id} className="border-t">
//     //               <td className="px-4 py-2 break-all">{tx.reference}</td>
//     //               <td className="px-4 py-2 break-all">{tx.customer.email}</td>
//     //               <td className="px-4 py-2">₦{(tx.amount / 100).toFixed(2)}</td>
//     //               <td className="px-4 py-2">
//     //                 <span
//     //                   className={`px-2 py-1 rounded text-xs font-semibold ${
//     //                     tx.status === "success"
//     //                       ? "bg-green-100 text-green-600"
//     //                       : "bg-yellow-100 text-yellow-700"
//     //                   }`}
//     //                 >
//     //                   {tx.status}
//     //                 </span>
//     //               </td>
//     //               <td className="px-4 py-2 whitespace-nowrap">
//     //                 {new Date(tx.paid_at).toLocaleString()}
//     //               </td>
//     //             </tr>
//     //           ))}
//     //         </tbody>
//     //       </table>
//     //     </div>
//     //   )}
//     // </main>
//     // <main className="min-h-screen bg-gray-50 pt-20 px-4">
//     //   <h1 className="text-2xl font-bold sticky top-16 z-10 text-center py-4 bg-gray-50">
//     //     Transaction Dashboard
//     //   </h1>

//     //   {loading ? (
//     //     <p className="text-center m-40 font-light">Loading...</p>
//     //   ) : (
//     //     <div className="w-full overflow-x-auto mt-4">
//     //       <table className="w-full bg-white shadow rounded text-sm">
//     //         <thead className="bg-gray-200 sticky top-[60px] z-0">
//     //           <tr>
//     //             <th className="px-4 py-2 text-left">Reference</th>
//     //             <th className="px-4 py-2 text-left">Email</th>
//     //             <th className="px-4 py-2 text-left">Amount</th>
//     //             <th className="px-4 py-2 text-left">Status</th>
//     //             <th className="px-4 py-2 text-left">Paid At</th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {transactions.map((tx) => (
//     //             <tr key={tx.id} className="border-t">
//     //               <td className="px-4 py-2 break-all">{tx.reference}</td>
//     //               <td className="px-4 py-2 break-all">{tx.customer.email}</td>
//     //               <td className="px-4 py-2">₦{(tx.amount / 100).toFixed(2)}</td>
//     //               <td className="px-4 py-2">
//     //                 <span
//     //                   className={`px-2 py-1 rounded text-xs font-semibold ${
//     //                     tx.status === "success"
//     //                       ? "bg-green-100 text-green-600"
//     //                       : "bg-yellow-100 text-yellow-700"
//     //                   }`}
//     //                 >
//     //                   {tx.status}
//     //                 </span>
//     //               </td>
//     //               <td className="px-4 py-2 whitespace-nowrap">
//     //                 {new Date(tx.paid_at).toLocaleString()}
//     //               </td>
//     //             </tr>
//     //           ))}
//     //         </tbody>
//     //       </table>
//     //     </div>
//     //   )}
//     // </main>
//     <main className="min-h-screen bg-gray-50 pt-20 px-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold sticky top-16 z-10 text-center py-4 bg-gray-50">
//         Transaction Dashboard
//       </h1>

//       {loading ? (
//         <p className="text-center m-40 font-light">Loading...</p>
//       ) : (
//         // <div className="w-full overflow-x-auto mt-4">
//         //   <table className="w-full bg-white shadow rounded text-sm">
//         //     <thead className="bg-gray-200 sticky top-[60px] z-0">
//         //       <tr>
//         //         <th className="px-4 py-2 text-left">Reference</th>
//         //         <th className="px-4 py-2 text-left">Email</th>
//         //         <th className="px-4 py-2 text-left">Amount</th>
//         //         <th className="px-4 py-2 text-left">Status</th>
//         //         <th className="px-4 py-2 text-left">Paid At</th>
//         //       </tr>
//         //     </thead>
//         //     <tbody>
//         //       {transactions.map((tx) => (
//         //         <tr key={tx.id} className="border-t">
//         //           <td className="px-4 py-2 break-all">{tx.reference}</td>
//         //           <td className="px-4 py-2 break-all">{tx.customer.email}</td>
//         //           <td className="px-4 py-2">₦{(tx.amount / 100).toFixed(2)}</td>
//         //           <td className="px-4 py-2">
//         //             <span
//         //               className={`px-2 py-1 rounded text-xs font-semibold ${
//         //                 tx.status === "success"
//         //                   ? "bg-green-100 text-green-600"
//         //                   : "bg-yellow-100 text-yellow-700"
//         //               }`}
//         //             >
//         //               {tx.status}
//         //             </span>
//         //           </td>
//         //           <td className="px-4 py-2 whitespace-nowrap">
//         //             {new Date(tx.paid_at).toLocaleString()}
//         //           </td>
//         //         </tr>
//         //       ))}
//         //     </tbody>
//         //   </table>
//         // </div>
//         <div className="w-full overflow-auto mt-4">
//           <table className="w-full table-auto bg-white shadow rounded">
//             <thead className="sticky top-[60px] bg-gray-200 z-0">
//               <tr className="text-left text-sm font-semibold">
//                 <th className="p-4">Reference</th>
//                 <th className="p-4">Email</th>
//                 <th className="p-4">Amount</th>
//                 <th className="p-4">Status</th>
//                 <th className="p-4">Paid At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((tx) => (
//                 <tr key={tx.id} className="border-t text-sm">
//                   <td className="p-4">{tx.reference}</td>
//                   <td className="p-4">{tx.customer.email}</td>
//                   <td className="p-4">₦{(tx.amount / 100).toFixed(2)}</td>
//                   <td className="p-4">
//                     <span
//                       className={`px-2 py-1 rounded text-xs font-semibold ${
//                         tx.status === "success"
//                           ? "bg-green-100 text-green-600"
//                           : "bg-yellow-100 text-yellow-700"
//                       }`}
//                     >
//                       {tx.status}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     {new Date(tx.paid_at).toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </main>
//   );
// }


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
                    {/* <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        tx.status === "success"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {tx.status}
                    </span> */}
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
