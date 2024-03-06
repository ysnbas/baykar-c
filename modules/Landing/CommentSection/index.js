"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { COMMENT_CARD } from "@/constant/landing";

export default function CommentSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + COMMENT_CARD.length) % COMMENT_CARD.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % COMMENT_CARD.length;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="px-20 pb-20 pt-20 flex flex-col justify-between w-full h-commentHeight relative overflow-hidden">
      <div className="flex justify-between ">
        <div className="text-xl font-bold">Because they love us</div>
        <div className="flex">
          <div>
            <button onClick={() => handlePrev()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#78350F"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <div>
            <button onClick={() => handleNext()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#78350F"
                class="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.card} w-full`}>
        <div
          className={`grid grid-cols-7 grid-rows-1 gap-16 absolute w-commentCardWidth -left-48 -right-48 ${styles.commentContainer}`}
          style={{ transform: `translateX(-${currentIndex * 384}px)`,transition: "transform 0.5s"}}
        >
          {COMMENT_CARD.map((item, index) => (
            <div
              key={index}
              className={`${styles.commentCard} px-8 py-8 mt-10 grid grid-rows-3 w-full h-full`}
            >
              <div className="px-0 py-4 text-lg2 font-bold flex flex-row items-center gap-3">
                {item?.icon}
                {item?.title}
              </div>
              <div className="mt-4 text-lg2">{item?.description}</div>
              <div className="mt-4 flex items-center gap-4">
                <div>
                  <img src={item?.image} />
                </div>
                <div>
                  <div className="text-lg font-normal">{item?.name}</div>
                  <div className="text-grey">{item?.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
