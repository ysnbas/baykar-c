"use client";
import React, { useEffect, useState } from "react";

export default function Answers({ data, clickable }) {
  const [myAnswer, setMyAnswer] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState(null);
  const chooses = ["A", "B", "C", "D"];

  useEffect(() => {
    setQuestionAnswer(data?.body.split(" "));
  }, [data]);

  const handleChooseMyAnswer = (item) => {
    const updatedAnswers = myAnswer.filter((ans) => ans.id !== data.id);
    updatedAnswers.push({ id: data.id, answer: item });
    setMyAnswer(updatedAnswers);
  };

  useEffect(() => {
    localStorage.setItem("myAnswer", JSON.stringify(myAnswer));
  }, [myAnswer]);

  return (
    <div className="flex flex-col gap-5 ">
      {questionAnswer?.slice(0, 4).map((answer, index) => (
        <button
          key={index}
          className={`${
            myAnswer?.find((ans) => ans.id === data.id && ans.answer === answer)
              ? "bg-brown text-white"
              : "bg-white"
          } ${
            myAnswer?.find((ans) => ans.id === data.id && ans.answer === answer)
              ? ""
              : "hover:bg-lightGrey2 cursor-pointer"
          } rounded-xl px-2 py-2 transition-all duration-300 ease-in-out flex`}
          onClick={() => handleChooseMyAnswer(answer)}
          disabled={!clickable}
        >
          <span className="mr-2">{chooses[index] + ")"}</span>
          <div>{answer}</div>
        </button>
      ))}
    </div>
  );
}
