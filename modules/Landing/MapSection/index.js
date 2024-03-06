import React from "react";
import { MAP } from "@/constant/landing";
import styles from "./style.module.css";

export default function MapSection() {
  return (
    <div className="relative px-20 py-20 flex flex-col justify-center items-center bg-brown h-mapHeight">
      <div className={`absolute z-[0] ${styles.map}`}>
        <div className="opacity-55">{MAP.map}</div>
        <div className="absolute left-[9px] -top-[111px]">
          <div className="absolute px-2 py-2 rounded-lg shadow-lg bg-white w-72 h-[286px] z-20">
            <img
              src="/images/twoShoes.jpeg"
              className="rounded-lg h-[270px] w-72"
            />
            <div className="absolute px-4 py-4 rounded-lg shadow-lg bg-lightGrey w-[275px] left-[8px] z-0">
              Emma Simpson collected one pair of <b>Cool Shoes.</b>
              <div className="absolute top-[80px] left-[50%]">
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
        <div className="text-white text-xxxl font-bold">11,658,467</div>
        <div className="text-white text-xl font-bold ">Shoes Collected</div>
      </div>
    </div>
  );
}
