// import Navbar from "@/components/Navbar";
// import BackgroundImages from "../src/components/BackgroundImages";
import React, { FC } from "react";
import CheckInternetLayout from "./CheckInternetLayout";
import Navbar from "@/app/components/Navbar";
// import CheckInternetLayout from "./CheckInternetLayout";


// const WebLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   return (
//     <CheckInternetLayout>
//       <div className="relative flex flex-col w-full min-h-screen max-w-screen bg-[#F7F9FC] overflow-hidden">
//         {/* Background decorations behind everything */}
//         {/* <div className="absolute inset-0 -z-10 pointer-events-none">
//           <BackgroundImages />
//         </div> */}

//         {/* Main content */}
//         <Navbar />

//         <main className="relative min-h-[90vh] max-h-[90dvh] z-10 w-full flex justify-center items-center px-2">
//           {children}
//         </main>

//         {/* Copyright */}
//         <div className="container mx-auto z-10">
//           <div className="flex flex-col justify-start items-start text-sm text-[#808080] w-full px-4">
//             &copy; {currentYear} RockBottom SickleCell Initiative. | All rights
//             reserved.
//           </div>
//         </div>
//       </div>
//     </CheckInternetLayout>
const WebLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    return (
      <CheckInternetLayout>
        <Navbar />
        {children}
        <footer className="text-center text-gray-500 text-sm py-6">
          &copy; {currentYear} All rights reserved
        </footer>
      </CheckInternetLayout>
    );
};

export default WebLayout;
