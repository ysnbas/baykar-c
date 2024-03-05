import React from "react";
import styles from "./style.module.css";
/* Modules */
import Header from "@/modules/Landing/Header";
import HeroSection from "@/modules/Landing/HeroSection";
import FeaturesSection from "@/modules/Landing/FeaturesSection";
import SuggestionSection from "@/modules/Landing/SuggestionSection";

export default function LandingPage() {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className={styles.triangle}></div>
        <HeroSection />
        <FeaturesSection />
      </div>
      <div className={styles.suggestionContainer}>
        <SuggestionSection />
      </div>
    </div>
  );
}
