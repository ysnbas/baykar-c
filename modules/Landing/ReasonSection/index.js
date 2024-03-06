import React from "react";
import styles from "./style.module.css";
import Button from "@/component/Button";

export default function ReasonSection() {
  return (
    <div className="px-20 py-6 flex items-center h-reasonHeight">
      <div className={`flex justify-between item-center w-full ${styles.card}`}>
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-xl font-bold">Why Join Us</h1>
          <p className="text-lg font-light">
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
          </p>
          <Button text={"Sign In Now"} color={"text-primary"} size={"w-52"} />
        </div>
        <div className={`${styles.window}`}>
          <div className="px-2 py-4 flex gap-2">
            <div className={styles.circleRed}></div>
            <div className={styles.circleYellow}></div>
            <div className={styles.circleGreen}></div>
          </div>
          <div className={`${styles.video} relative`}>
            <img src="/images/windowImage.jpeg" className="object-cover" />
            <div className={styles.playBtn}>
              <svg
                width="144"
                height="145"
                viewBox="0 0 144 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.5"
                  width="144"
                  height="144"
                  rx="72"
                  fill="#121619"
                  fill-opacity="0.75"
                />
                <path
                  d="M99.28 74.592C99.5608 74.1512 99.7502 73.6585 99.837 73.1432C99.9238 72.6278 99.9062 72.1003 99.7854 71.5918C99.6645 71.0834 99.4428 70.6044 99.1334 70.1832C98.8239 69.7621 98.4331 69.4073 97.984 69.14L58.296 45.012C57.6506 44.6213 56.9104 44.4152 56.156 44.416C53.916 44.416 52.104 46.188 52.104 48.376V96.62C52.104 97.36 52.316 98.084 52.716 98.712C53.9 100.568 56.396 101.136 58.296 99.98L97.984 75.856C98.508 75.536 98.956 75.1 99.284 74.588L99.28 74.592ZM102.264 82.58L62.58 106.704C56.88 110.172 49.38 108.464 45.836 102.9C44.6378 101.025 44.0008 98.8456 44 96.62V48.38C44 41.816 49.44 36.5 56.16 36.5C58.428 36.5 60.652 37.12 62.58 38.292L102.264 62.42C107.964 65.884 109.712 73.204 106.164 78.772C105.18 80.316 103.844 81.62 102.264 82.58Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.pink}></div>
            <div className={styles.blue}></div>
            <div className={styles.green}></div>
            <div className={styles.purple}></div>
            <div className={styles.red}></div>
            <div className={styles.yellow}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
