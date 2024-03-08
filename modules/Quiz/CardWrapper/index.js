import React from "react";

export default function CardWrapper({ children }) {
  return (
    <div className="bg-lightGrey shadow-lg shadow-indigo-500/40 px-10 py-10 rounded-lg max-w-screen-sm w-full h-auto">
      {children}
    </div>
  );
}
