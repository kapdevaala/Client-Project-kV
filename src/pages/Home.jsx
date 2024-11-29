import React from "react";
import link from "../assets/Main-Image.png";
import { Featured } from "../components/Featured";
import { TopSelling } from "../components/TopSelling";
import { CustomerReview } from "../components/CustomerReview";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className=" max-w-[1800px]  min-h-[100vh] w-[100%] flex flex-col items-center mb-8 mt-4 p-2 gap-9">
      {/* Featured products */}
      <Featured />
      {/* Top-Selling Products */}
      <TopSelling />

      {/* Customer Review */}
      <CustomerReview />
      {/* Footer */}
      <Footer />
    </div>
  );
}