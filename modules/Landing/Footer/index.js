import React from "react";
import {
  FOOTER_LIST,
  SOCIAL_ITEMS,
  COPYRIGHT,
  FOOTER_LAST,
} from "@/constant/landing";

export default function Footer() {
  return (
    <footer>
      <div className="text-white relative px-8 lg:px-20 py-20 bg-darkBlue h-mobileAutoHeight lg:h-footerHeight">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-48 justify-center items-center lg:items-start">
          {FOOTER_LIST.map((item, index) => (
            <div key={index} className="mb-5">
              <div className="text-base font-bold text-center lg:text-start">{item.title}</div>
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="text-sm mt-9 text-center lg:text-start">
                  {subItem.label}
                </div>
              ))}
            </div>
          ))}
          <div className="flex flex-col justify-between items-center lg:items-start">
            {SOCIAL_ITEMS.map((item, index) => (
              <div key={index} className="mb-5">
                <div className="text-base font-bold text-center lg:text-start">{item.title}</div>
                {item?.title === "Get the App" ? (
                  <div className="flex flex-col mt-5">
                    {item.subItems.map((item, key) => (
                      <div key={key} className="mb-5">
                        {item.icon}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-5 lg:gap-0 lg:flex-row items-center mt-5">
                    {item.subItems.map((item, key) => (
                      <div key={key} className="mr-5">
                        {item.icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="border-grey mt-10 mb-5" />
        <div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-0 justify-between ">
            <div>{COPYRIGHT}</div>
            <div className="flex gap-8">
              {FOOTER_LAST.map((item, index) => (
                <div key={index} className="text-sm flex gap-1">
                  {item.icon && item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
