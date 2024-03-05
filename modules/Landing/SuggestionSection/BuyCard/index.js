import React from "react";
import styles from "./style.module.css";
import Button from "@/component/Button";
import { BUY_CARD } from "@/constant/landing";

export default function BuyCard() {
  return (
    <div className="grid gap-12 grid-cols-3 grid-rows-1">
      {BUY_CARD?.map((card, index) => {
        return (
          <div key={index} className={`flex flex-col gap-4 ${styles.card}`}>
            <div>
              <img src={card.image} alt={card.title} />
            </div>
            <div className="pt-8 pr-8 pl-8 gap-4 flex flex-col">
              <div className="flex">
                <div className="text-white text-lg2 font-bold">
                  {card.title}
                </div>
              </div>
              <div className="text-white text-base font-medium">
                {card.description}
              </div>
            </div>
            <div className="px-8 py-8 flex justify-center w-full">
              <Button text={"Buy Now"} color={"text-white"} size={"w-full"}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
