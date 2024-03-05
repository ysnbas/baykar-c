import React from "react";

export default function ButtonGroup({ children, gap }) {
  return <div className={`flex ${gap} items-center`}>{children}</div>;
}
