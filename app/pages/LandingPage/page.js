import React from "react";
import styles from "./style.module.css";
/* Modules */
import Header from "@/modules/Landing/Header";
import HeroSection from "@/modules/Landing/HeroSection";
import FeaturesSection from "@/modules/Landing/FeaturesSection";
import SuggestionSection from "@/modules/Landing/SuggestionSection";
import ReasonSection from "@/modules/Landing/ReasonSection";
import CommentSection from "@/modules/Landing/CommentSection";
import CollectionSection from "@/modules/Landing/CollectionSection";
import MapSection from "@/modules/Landing/MapSection";
import Footer from "@/modules/Landing/Footer";

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
      <div>
        <ReasonSection />
      </div>
      <div>
        <CommentSection />
      </div>
      <div className="relative">
        <CollectionSection />
        <div className={styles.waveDarkYellow}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
        <div className={styles.waveYellow}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
        <div className={styles.waveBrown}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <MapSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
