"use client"
import { Manrope, Cormorant_Garamond } from "next/font/google";

import { usePathname } from "next/navigation";

import "@/styles/_globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Copyright from "@/components/Footer/Copyright/Copyright";
import Footer from "@/components/Footer/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-accent",
});



export default function RootLayout({ children }) {
   const pathname = usePathname();

  const hideFooterRoutes = ["/", "/contact"];

  const showFooter = !hideFooterRoutes.includes(pathname);
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable}`}
      >
        <Navbar /> 
        {children}
        {showFooter && (
        <>
          <Footer />
        <Copyright/>
        </>
      )}
      </body>
    </html>
  );
}