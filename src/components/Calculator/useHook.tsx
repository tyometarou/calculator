import { useState, useCallback } from "react";
import useSound from "use-sound";
import Sound from "../../music/sample.mp3";

export const useHook = () => {
  const [playLoud] = useSound(Sound, { volume: 1 });
  //-- State ---------------------------------------------------------

  //5+7 でいうところの5
  const [firstNumber, setFirstNumber] = useState<string>("0");
  //5+7 でいうところの7
  const [secondNumber, setSecondNumber] = useState<string>("0");
  //演算子
  const [operator, setOperator] = useState<string>("");
  //.ボタンが押されて小数点以下入力になっているか判別するboolean
  const [isDecimalInput, setIsDecimalInput] = useState<boolean>(false);
  //=ボタンが押された直後の判定用
  const [isAnswerDisplay, setIsAnswerDisplay] = useState<boolean>(false);

  //-- Event ---------------------------------------------------------

  /**
   * 数字ボタンを押したとき
   */
  const handleNumberClick = (num: number) => {
    const updateNumber = (currentNumber: string) =>
      isDecimalInput
        ? currentNumber + String(num)
        : String(Number(currentNumber) * 10 + num);

    if (isAnswerDisplay) {
      setFirstNumber(String(num));
      setSecondNumber("0");
      setOperator("");
      setIsAnswerDisplay(false);
      setIsDecimalInput(false);
    } else {
      if (!operator) {
        setFirstNumber(updateNumber(firstNumber));
      } else {
        setSecondNumber(updateNumber(secondNumber));
      }
    }
  };
  /**
   * 00ボタンを押したとき
   */
  const handleDoubleZeroClick = () => {
    const appendOrMultiplyBy100 = (value: string) =>
      isDecimalInput ? value + "00" : String(Number(value) * 100);

    if (!operator) {
      setFirstNumber(appendOrMultiplyBy100(firstNumber));
    } else {
      setSecondNumber(appendOrMultiplyBy100(secondNumber));
    }
  };

  /**
   * CAボタンを押したとき
   */

  const handleClearAllClick = () => {
    setIsDecimalInput(false);
    //CAのときはすべてリセット
    setFirstNumber("0");
    setSecondNumber("0");
    setOperator("");
    setIsAnswerDisplay(false);
  };

  /**
   * CEボタンを押したとき
   */

  const handleClearEnterClick = () => {
    setIsDecimalInput(false);

    if (isAnswerDisplay) {
      setFirstNumber("0");
      return;
    }

    if (!operator) {
      setFirstNumber("0");
    } else {
      setSecondNumber("0");
    }
  };

  /**
   * 演算子を押したとき 引数はadd subtract divide multiplyのどれか
   */

  const handleOperatorClick = (click_operator: string) => {
    setIsDecimalInput(false);
    setSecondNumber("0");

    if (isAnswerDisplay) {
      setIsAnswerDisplay(false);
      setOperator(click_operator);
      return;
    }

    if (secondNumber !== "0") {
      const operations: { [key: string]: (a: number, b: number) => number } = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
      };

      const operation = operations[click_operator];
      if (operation) {
        const result = operation(Number(firstNumber), Number(secondNumber));
        setFirstNumber(String(result));
      }
    }

    setOperator(click_operator);
  };
  /**
   *  .ボタンを押したとき
   */

  const handleDecimalPointClick = () => {
    if (isDecimalInput) return;

    setIsDecimalInput(true);
    if (!operator) {
      setFirstNumber(String(firstNumber) + ".");
    } else {
      setSecondNumber(String(secondNumber) + ".");
    }
  };

  /**
   * =ボタンを押したとき
   */
  const handleAnswerClick = () => {
    setIsDecimalInput(false);
    setIsAnswerDisplay(true);

    const operations = {
      add: (a: number, b: number) => a + b,
      subtract: (a: number, b: number) => a - b,
      multiply: (a: number, b: number) => a * b,
      divide: (a: number, b: number) => a / b,
    };

    const performOperation = (operation: (a: number, b: number) => number) => {
      const firstNum = Number(firstNumber);
      const secondNum = secondNumber === "0" ? firstNum : Number(secondNumber);
      setSecondNumber(String(secondNum));
      setFirstNumber(String(operation(firstNum, secondNum)));
    };

    if (operator && operations[operator]) {
      performOperation(operations[operator]);
    }
  };

  /**
   * 大きい桁数や小数点以下桁数の調整
   */
  const fixDigits = useCallback((num: number) => {
    return num >= 10e8
      ? num.toExponential(2)
      : Math.round(num * 1000000) / 1000000;
  }, []);
  //-- 表示する数字 ---------------------------------------------------------

  const displayMarkup =
    !isAnswerDisplay && operator
      ? String(fixDigits(Number(secondNumber)))
      : String(fixDigits(Number(firstNumber)));

  return {
    playLoud,
    firstNumber,
    secondNumber,
    operator,
    isDecimalInput,
    isAnswerDisplay,
    handleNumberClick,
    handleDoubleZeroClick,
    handleClearAllClick,
    handleClearEnterClick,
    handleOperatorClick,
    handleDecimalPointClick,
    handleAnswerClick,
    displayMarkup,
  };
};
