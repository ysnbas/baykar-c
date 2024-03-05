import React from "react";
import Button from "@/component/Button";
import BuyCard from "./BuyCard";

export default function SuggestionSection() {
  return (
    <div className="px-20 pb-12 pt-20 flex flex-col justify-between items-center w-full h-suggestionHeight">
      <div className="flex justify-between w-full">
        <div className="text-xl font-bold text-white">The best of the best</div>
        <Button text={"Sign In Now"} color={"text-white"} />
      </div>
      <div>
        <BuyCard />
      </div>
    </div>
  );
}
