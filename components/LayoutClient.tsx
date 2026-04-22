"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";



export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, {
    margin: "-100px",
  });

  return (
    <>
      <Navbar hidden={isFooterInView} />

      <main>{children}</main>
      <Toaster position="top-right" />

      <Footer ref={footerRef}/>
      
    </>
  );
}