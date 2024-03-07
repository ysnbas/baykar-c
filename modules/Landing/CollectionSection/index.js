"use client";
import React, { useState, useRef } from "react";
import styles from "./style.module.css";
import { COLLECTION_CATEGORIES } from "@/constant/landing";

export default function CollectionSection() {
  const [isActive, setIsActive] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const containerRef = useRef(null);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (!startX) {
      return;
    }

    const currentX = event.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < COLLECTION_CATEGORIES.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }

      setStartX(null);
    }
  };
  return (
    <div className="px-8 lg:px-20 pt-32 pb-20 flex flex-col gap-20 lg:gap-36 overflow-hidden lg:overflow-auto">
      <div className="flex flex-col gap-8">
        <h1 className="text-lg3 text-center lg:text-start lg:text-xxl font-bold">
          Grow your collection
        </h1>
        <p className="text-center lg:text-start text-lg font-light">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div
        className="relative flex flex-col lg:flex-row gap-20 lg:gap-40 justify-between"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="flex flex-row lg:flex-col gap-4 sm:w-[3000px] lg:w-[299px] lg:!transform-none"
          style={{
            transform: `translateX(-${currentIndex * 384}px)`,
            transition: "transform 0.5s",
          }}
        >
          {COLLECTION_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className={`px-4 py-4 flex items-center gap-4 cursor-pointer ${
                isActive === category.id && "shadow-lg bg-white rounded-lg"
              }`}
              onClick={() => setIsActive(category.id)}
            >
              {category.icon}
              <span className="text-darkBlue text-lg font-bold w-48 mt-1">
                {category.title}
              </span>
              {isActive === category.id && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z"
                    fill="#0F172A"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
        <div className="relative flex mr-[150px]">
          <div>
            <div
              className={`${styles.window} relative w-[238px] lg:w-[759px] `}
            >
              <div className="px-2 py-4 flex gap-2">
                <div className={styles.circleRed}></div>
                <div className={styles.circleYellow}></div>
                <div className={styles.circleGreen}></div>
              </div>
              <div
                className={`${styles.video} relative h-[200px] lg:h-[410px]`}
              >
                <img
                  src={"/images/windowImage.jpeg"}
                  className="object-cover w-full h-[190px] lg:h-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute z-10 left-20 top-20">
            <div className={`${styles.window} relative w-[238px] lg:w-[759px]`}>
              <div className="px-2 py-4 flex gap-2">
                <div className={styles.circleRed}></div>
                <div className={styles.circleYellow}></div>
                <div className={styles.circleGreen}></div>
              </div>
              <div
                className={`${styles.video} relative h-[200px] lg:h-[410px]`}
              >
                <img
                  src={"/images/buycardimg2.jpeg"}
                  className="object-cover w-full h-[190px] lg:h-[400px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute z-20 px-2 py-2 rounded-lg shadow-lg bg-white left-[186px] lg:left-[642px] top-[140px] lg:top-48 w-[210px] h-[210px] lg:h-[286px]">
            <img
              src="/images/ironbat.jpeg"
              className="rounded-lg h-[167px] lg:h-[270px] w-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
