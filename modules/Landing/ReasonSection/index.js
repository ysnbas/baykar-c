import React from "react";
import styles from "./style.module.css";
import Button from "@/component/Button";
import Window from "./Window";

export default function ReasonSection() {
  return (
    <div className="px-20 py-6 flex items-center h-reasonHeight">
      <div className={`flex justify-between item-center w-full ${styles.card}`}>
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-xl font-bold">Why Join Us</h1>
          <div className="text-lg font-light">
            <ul>
              <li>
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
              <li>
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
              <li>
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
          <div className={styles.pink}></div>
          <div className={styles.blue}></div>
          <div className={styles.green}></div>
          <div className={styles.purple}></div>
          <div className={styles.red}></div>
          <div className={styles.yellow}></div>
        </Window>
      </div>
    </div>
  );
}
