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
      <div className="text-white relative px-20 py-20 bg-darkBlue h-footerHeight">
        <div className="flex gap-80 justify-center">
          {FOOTER_LIST.map((item, index) => (
            <div key={index} className="mb-5">
              <div className="text-base font-medium">{item.title}</div>
              {item.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="text-sm mt-9">
                  {subItem.label}
                </div>
              ))}
            </div>
          ))}
          <div className="flex flex-col justify-between">
            {SOCIAL_ITEMS.map((item, index) => (
              <div key={index} className="mb-5">
                <div className="text-base font-medium">{item.title}</div>
                {item?.title === "Get the App" ? (
                  <div className="flex flex-col mt-5">
                    {item.subItems.map((item, key) => (
                      <div key={key} className="mb-5">
                        {item.icon}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-row items-center mt-5">
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
          <div className="flex justify-between">
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
