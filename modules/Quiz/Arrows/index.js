import React from "react";

export default function Arrows({
  goToNext,
  goToPrevious,
  disablePrevious,
  disableNext,
}) {
  return (
    <div className="flex gap-3">
      <button
        disabled={disablePrevious}
        className="text-lg font-bold cursor-pointer"
        onClick={goToPrevious}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#78350F"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </button>
      <button className="text-lg font-bold cursor-pointer" onClick={goToNext}>
        <div>
          {disableNext ? (
            "Finish"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#78350F"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
