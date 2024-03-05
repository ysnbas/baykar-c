import React from "react";
import styles from "./style.module.css";
import { FEATURES_SECTION } from "@/constant/landing";

export default function FeaturesSection() {
  return (
    <div className="px-20 py-6 grid gap-4 grid-cols-3 grid-rows-1">
      {FEATURES_SECTION?.map((feature, index) => {
        return (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative">
              <div>{feature.icon}</div>
              <div className="absolute bottom-6 left-8 ">{feature.triangle}</div>
            </div>
            <div className="text-lg font-medium">{feature.title}</div>
            <div className="text-base font-normal">{feature.description}</div>
          </div>
        );
      })}
    </div>
  );
}
