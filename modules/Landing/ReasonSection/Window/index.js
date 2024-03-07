import React from "react";
import styles from "./style.module.css";

export default function Window({ children, ...props }) {
  const { img, size, playBtn } = props;
  return (
    <div className={`${styles.window} relative ${size} lg:mt-0 ml-auto mr-auto mt-10`}>
      <div className="px-2 py-4 flex gap-2">
        <div className={styles.circleRed}></div>
        <div className={styles.circleYellow}></div>
        <div className={styles.circleGreen}></div>
      </div>
      <div className={`${styles.video} relative lg:w-[520px]`}>
        <img src={img} className="object-cover lg:w-[520px]" />
        {playBtn && (
          <div className={"absolute bottom-[50%] left-[25px] translate-y-1/2 translate-x-1/2 lg:left-[115px]"}>
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
        )}
      </div>
      {children}
    </div>
  );
}
