"use client";
import React, { useEffect, useState } from "react";
import ButtonGroup from "../../../component/ButtonGroup";
import Logo from "./Logo";
import Button from "@/component/Button";
import { BUTTONS_GROUP } from "@/constant/landing";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const renderHamburger = () => {
    return (
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 5.5H13"
            stroke="#78350F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 12.5H8"
            stroke="#78350F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 19.5H3"
            stroke="#78350F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  };

  return (
    <header>
      <div className="px-8 lg:px-20 py-6 flex justify-between items-center w-full lg:w-1440px h-24">
        <Logo />
        {renderHamburger()}
        <div className="hidden w-full lg:block lg:w-auto">
          <ButtonGroup gap={"gap-2"}>
            {BUTTONS_GROUP.map((button, index) => {
              return (
                <div
                  key={index}
                  className="text-primary px-3 py-2 text-base font-medium"
                >
                  {button.label}
                </div>
              );
            })}
            <Button text="Sign In Now" color="text-primary" />
          </ButtonGroup>
        </div>
      </div>
      {showMenu && (
        <div className="px-10 py-10 flex flex-col rounded-lg items-center bg-white justify-center h-full">
          {BUTTONS_GROUP.map((button, index) => {
            return (
              <div
                key={index}
                className="text-primary px-3 py-2 text-base font-medium"
              >
                {button.label}
              </div>
            );
          })}
          <Button text="Sign In Now" color="text-primary" size={"w-[150px]"} />
        </div>
      )}
    </header>
  );
}
