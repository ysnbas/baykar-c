import React from "react";
import Answers from "../Answers";

export default function Questions({ data, clickable }) {
  return (
    <div className="flex flex-col justify-center h-[100%]">
      <p className="mb-5 font-bold px-2 py-2">{data?.title}</p>
      <Answers data={data} clickable={clickable} />
    </div>
  );
}
