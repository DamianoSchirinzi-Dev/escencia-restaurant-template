"use client";
import HomePageBanner from "@/components/HomePageBanner";
import HomePageIntroInfo from "@/components/HomePageIntroInfo";
import HomePageReservationBlock from "@/components/HomePageReservationBlock";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Home() {
  return (
    <main className="m-0 bg-custom_light_bg">
      <div className="absolute top-2 right-3">
        <Navigation />
      </div>
      
      <HomePageBanner />
      <HomePageIntroInfo />
      <HomePageReservationBlock />
    </main>
  );
}
