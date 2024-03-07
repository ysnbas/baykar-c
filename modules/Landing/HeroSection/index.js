import React from "react";
import ButtonGroup from "@/component/ButtonGroup";
import Button from "@/component/Button";
import styles from "./style.module.css";

export default function HeroSection() {
  return (
    <div className="px-4 lg:px-20 py-6 flex flex-col lg:flex-row justify-between items-center w-full h-reasonHeight lg:h-heroHeight gap-8">
      <div className="flex flex-col items-center lg:items-start gap-8 w-full">
        <h1 className="text-xxl text-center lg:text-start lg:text-xl font-bold">Collectible Sneakers</h1>
        <p className="text-base text-center lg:text-start lg:text-lg font-light">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <ButtonGroup gap={"gap-4"}>
          <Button text="Sign In Now" color="text-primary" />
          <div className="flex flex-row text-primary text-base font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
            <span className="px-2 py-0">Watch Demo</span>
          </div>
        </ButtonGroup>
      </div>
      <div className="relative">
        <img
          className="absolute z-10 object-contain"
          src={"/images/ayakkabi.png"}
          alt="sneakers"
        />
        <div className={styles.picture}></div>
      </div>
    </div>
  );
}
