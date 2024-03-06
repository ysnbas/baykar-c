import React from "react";
import styles from "./style.module.css";
import Button from "@/component/Button";

export default function BuyCard() {
  return (
    <div className="grid gap-12 grid-cols-3 grid-rows-1">
      <div className="relative">
        <div className={`flex flex-col gap-4 ${styles.card}`}>
          <div>
            <img src={"/images/buycardimg1.jpeg"} alt={"shoes"} />
          </div>
          <div className="pt-8 pr-8 pl-8 gap-4 flex flex-col">
            <div className="flex">
              <div className="text-white text-lg2 font-bold">Title</div>
            </div>
            <div className="text-white text-base font-medium">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
          </div>
          <div className="px-8 py-8 flex justify-center w-full">
            <Button text={"Buy Now"} color={"text-white"} size={"w-full"} />
          </div>
        </div>
        <div className={styles.pink}></div>
      </div>
      <div className="relative">
        <div className={`flex flex-col gap-4 ${styles.card}`}>
          <div>
            <img src={"/images/buycardimg2.jpeg"} alt={"shoes"} />
          </div>
          <div className="pt-8 pr-8 pl-8 gap-4 flex flex-col">
            <div className="flex">
              <div className="text-white text-lg2 font-bold">Title</div>
            </div>
            <div className="text-white text-base font-medium">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
          </div>
          <div className="px-8 py-8 flex justify-center w-full">
            <Button text={"Buy Now"} color={"text-white"} size={"w-full"} />
          </div>
        </div>
        <div className={styles.blue}></div>
        <div className={styles.orange}></div>
      </div>
      <div className="relative">
        <div className={`flex flex-col gap-4 ${styles.card}`}>
          <div>
            <img src={"/images/buycardimg3.jpeg"} alt={"shoes"} />
          </div>
          <div className="pt-8 pr-8 pl-8 gap-4 flex flex-col">
            <div className="flex">
              <div className="text-white text-lg2 font-bold">Title</div>
            </div>
            <div className="text-white text-base font-medium">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </div>
          </div>
          <div className="px-8 py-8 flex justify-center w-full">
            <Button text={"Buy Now"} color={"text-white"} size={"w-full"} />
          </div>
        </div>
        <div className={styles.green}></div>
        <div className={styles.purple}></div>
      </div>
    </div>
  );
}
