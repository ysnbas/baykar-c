import React from "react";
import styles from "./style.module.css";
import Button from "@/component/Button";
import Window from "./Window";

export default function ReasonSection() {
  return (
    <div className="px-8 lg:px-20 py-6 flex items-center h-mobileReasonHeight lg:h-reasonHeight overflow-hidden">
      <div
        className={`flex flex-col lg:flex-row justify-between item-center w-full ${styles.card} px-8 py-4 h-mobileAutoHeight lg:px-24 lg:py-24`}
      >
        <div className="flex flex-col gap-8 w-full items-center lg:items-start">
          <h1 className="text-lg3 lg:text-xl font-bold mt-3 lg:mt-0">Why Join Us</h1>
          <div className="text-base lg:text-lg font-light">
            <ul>
              <li className="flex flex-row gap-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="green"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Est et in pharetra magna adipiscing ornare aliquam.
              </li>
              <li className="flex flex-row gap-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="green"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Tellus arcu sed consequat ac velit ut eu blandit.
              </li>
              <li className="flex flex-row gap-5 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="green"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                Ullamcorper ornare in et egestas dolor orci.
              </li>
            </ul>
          </div>
          <Button text={"Sign In Now"} color={"text-primary"} size={"w-52"} />
        </div>
        <Window playBtn={true} img="/images/windowImage.jpeg">
          <div className={`${styles.pink} left-[180px] lg:left-[420px]`}></div>
          <div className={`${styles.blue} left-[342px] lg:left-[448px]`}></div>
          <div className={styles.green}></div>
          <div
            className={`${styles.purple} left-[245px] top-[307px] lg:top-[279px] lg:left-[396px]`}
          ></div>
          <div className={styles.red}></div>
          <div className={`${styles.yellow} left-[-164px] lg:left-[-69px]`}></div>
        </Window>
      </div>
    </div>
  );
}
