import React from "react";
import { MAP } from "@/constant/landing";
import styles from "./style.module.css";

export default function MapSection() {
  return (
    <div className="relative px-8 lg:px-20 py-20 flex flex-col justify-center items-center bg-brown h-mapHeight">
      <div className={`absolute z-[0] ${styles.map}`}>
        <div className="opacity-55">{MAP.map}</div>
        <div className="absolute lg:left-[9px] lg:-top-[111px] left-[5px] -top-[14px]">
          <div className="absolute px-2 py-2 rounded-lg shadow-lg bg-white w-[13rem] lg:w-72 lg:h-[286px] h-[205px] z-20">
            <img
              src="/images/twoShoes.jpeg"
              className="rounded-lg h-[186px] lg:h-[270px] w-72"
            />
            <div className="absolute px-4 py-4 rounded-lg shadow-lg bg-lightGrey w-[189px] lg:w-[275px] left-[8px] z-0">
              Emma Simpson collected one pair of <b>Cool Shoes.</b>
              <div className="absolute lg:top-[80px] lg:left-[50%] top-[104px] left-[25%]">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 6L12 0H0L6 6Z" fill="#E2E8F0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center z-30">
        <div className="text-white text-lg4 lg:text-xxxl font-bold mt-16 lg:mt-0">11,658,467</div>
        <div className="text-white text-lg3 font-bold ">Shoes Collected</div>
      </div>
    </div>
  );
}
