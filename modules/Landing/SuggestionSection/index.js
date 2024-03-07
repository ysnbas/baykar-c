import React from "react";
import Button from "@/component/Button";
import BuyCard from "./BuyCard";

export default function SuggestionSection() {
  return (
    <div className="px-8 lg:px-20 pb-12 pt-20 flex flex-col justify-between items-center w-full h-mobileAutoHeight lg:suggestionHeight">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-5 lg:gap-0 items-center lg:items-start">
        <div className="text-lg3 lg:text-xl font-bold text-white">
          The best of the best
        </div>
        <Button text={"Sign In Now"} color={"text-white"} />
      </div>
      <div className="mt-10 lg:mt-10">
        <BuyCard />
      </div>
    </div>
  );
}
