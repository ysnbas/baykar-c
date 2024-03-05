import React from "react";
import ButtonGroup from "../../../component/ButtonGroup";
import Logo from "./Logo";
import Button from "@/component/Button";
import { BUTTONS_GROUP } from "@/constant/landing";

export default function Header() {
  return (
    <div className="px-20 py-6 flex justify-between items-center w-full md:w-1440px h-24">
      <Logo />
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
  );
}
