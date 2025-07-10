// "use client";

// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow text-gray-800 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link href="/">
//           <span className="text-xl font-bold text-blue-600">MueesPay</span>
//         </Link>
//         <div className="space-x-4">
//           <Link href="/transactions">
//             <span className="text-blue-600 hover:underline">
//               View Transactions
//             </span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useRouter } from "next/navigation"; 


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-blue-600">
//           PayDemo
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-blue-600 font-medium">
//             Home
//           </Link>
//           <Link href="/success" className="hover:text-blue-600 font-medium">
//             Success
//           </Link>
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-2xl text-blue-600"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu Links */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
//           <Link
//             href="/"
//             className="block text-gray-700 hover:text-blue-600"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/success"
//             className="block text-gray-700 hover:text-blue-600"
//             onClick={() => setIsOpen(false)}
//           >
//             Success
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Transactions", path: "/transactions" },
  ];

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    // <nav className="bg-white shadow-md fixed top-0 w-full z-50">
    <nav className="fixed top-0 w-full z-30 bg-white shadow">

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          PayDemo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={linkClasses(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-blue-600"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${linkClasses(link.path)} block`}
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
