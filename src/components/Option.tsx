import React from "react";
import { useState } from "react";

interface OptionProps {
  option: string;
  correct: string;
  onClick: () => void;
}
export const Option = ({ option, correct }: OptionProps): JSX.Element => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isTouched, setIsTouched] = useState(false);

  return (
    <li
      key={option}
      onClick={() => {
        setIsTouched(true);
        option.substring(0, 1) === correct
          ? setIsCorrect(true)
          : setIsCorrect(false);
      }}
      style={{ cursor: "pointer" }}
      className={
        !isCorrect && isTouched ? `animate__animated animate__shakeX` : ""
      }
    >
      {option}

      {isTouched ? (
        isTouched && isCorrect === true ? (
          <i className="fas fa-check" style={{ color: "green" }}></i>
        ) : (
          <i className="fa-solid fa-circle-xmark" style={{ color: "red" }}></i>
        )
      ) : (
        ""
      )}
    </li>
  );
};
