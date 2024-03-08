"use client";
import React, { useEffect, useState } from "react";
import { getQuiz } from "@/services/quiz";
import CardWrapper from "@/modules/Quiz/CardWrapper";
import Questions from "@/modules/Quiz/Questions";
import Arrows from "@/modules/Quiz/Arrows";

export default function QuizPage() {
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [clickable, setClickable] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState(null);
  const [clickableTime, setClickableTime] = useState(10);
  const [questionTime, setQuestionTime] = useState(20);

  useEffect(() => {
    getQuiz().then((res) => {
      setQuiz(res.slice(0, 10));
    });
  }, []);

  useEffect(() => {
    if (currentQuestionIndex) {
      const myAnswer = JSON.parse(localStorage.getItem("myAnswer"));
      if (myAnswer) {
        setAnswers(myAnswer);
      }
    }
  }, [finished, currentQuestionIndex]);

  const resetTimer = () => {
    setClickable(false);
    setClickableTime(10);
    setQuestionTime(20);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex === quiz.length - 1) {
      setFinished(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetTimer();
    }
  };

  const goToPreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (clickable) {
      const interval = setInterval(() => {
        if (questionTime > 0) {
          setQuestionTime((prevTime) => prevTime - 1);
        } else {
          if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
          }
          if (currentQuestionIndex === quiz.length - 1) {
            setFinished(true);
          } else {
            resetTimer();
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [clickable, currentQuestionIndex, quiz, questionTime]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clickableTime > 0) {
        setClickableTime((prevTime) => prevTime - 1);
      } else {
        setClickable(true);
      }
    }, 1000);

    if (clickableTime === 0) {
      setClickable(true);
    }

    return () => clearTimeout(timer);
  }, [clickableTime]);

  const renderQuestions = () => {
    return (
      <>
        <div className="flex gap-5 sm:gap-0 sm:flex-row flex-col justify-between items-center">
          <h1 className="text-lg font-bold">{`Question ${quiz[currentQuestionIndex]?.id}`}</h1>
          <Arrows
            goToNext={goToNextQuestion}
            goToPrevious={goToPreviousQuestion}
            disablePrevious={true}
            disableNext={currentQuestionIndex === quiz.length - 1}
          />
        </div>
        <div className="text-lg text-brown text-center mt-10">
          {clickableTime === 0
            ? "You can mark now"
            : "Wait " + clickableTime + " seconds"}
        </div>
        {clickableTime === 0 && (
          <div className="text-lg text-brown text-center mt-7">
            {"Time Left: " + questionTime + " seconds"}
          </div>
        )}
        <Questions clickable={clickable} data={quiz[currentQuestionIndex]} />
      </>
    );
  };

  const renderTable = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg2 font-bold text-brown">Quiz Finished</h1>
        <h1 className="text-lg font-bold text-brown mt-5">
          <table className="table-auto border-collapse border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Question</th>
                <th className="border px-4 py-2">Answer</th>
              </tr>
            </thead>
            <tbody>
              {answers.map((item, index) => (
                <tr key={index}>
                  <td className="border text-darkBlue px-4 py-2">
                    {item.id}
                  </td>
                  <td className="border text-darkBlue px-4 py-2">
                    {item.answer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </h1>
      </div>
    );
  };

  return (
    <div className="px-10 py-10 sm:px-20 sm:py-20 flex items-center justify-center h-[100vh]">
      {quiz && (
        <CardWrapper>
          {finished ? renderTable() : renderQuestions()}
        </CardWrapper>
      )}
    </div>
  );
}
