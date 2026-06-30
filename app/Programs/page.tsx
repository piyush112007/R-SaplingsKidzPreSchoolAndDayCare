"use client";

import { useState } from "react";
import ProgramSection from "@/components/ProgramsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Programpage() {
  return (
    <>
      <Navbar></Navbar>
      <ProgramSection></ProgramSection>
      <Footer></Footer>
    </>
  );
}
