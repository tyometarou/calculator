import React, { useState, useCallback } from 'react';
import useSound from 'use-sound';
import Sound from '../music/sample.mp3';

//components
import MyButton from '../components/Button';
import Display from '../components/Display';

//material-ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@wcj/dark-mode';

const Calculator: React.FC = () => {
  const [playLoud] = useSound(Sound, { volume: 1 });
  //-- State ---------------------------------------------------------

  //5+7 でいうところの5
  const [firstNumber, setFirstNumber] = useState<string>('0');
  //5+7 でいうところの7
  const [secondNumber, setSecondNumber] = useState<string>('0');
  //演算子
  const [operator, setOperator] = useState<string>('');
  //.ボタンが押されて小数点以下入力になっているか判別するboolean
  const [isDecimalInput, setIsDecimalInput] = useState<boolean>(false);
  //=ボタンが押された直後の判定用
  const [isAnswerDisplay, setIsAnswerDisplay] = useState<boolean>(false);

  //-- Event ---------------------------------------------------------

  /**
   * 数字ボタンを押したとき
   */
  const handleNumberClick = (num: number) => {
    //=ボタンを押した直後に数字を押した場合
    if (isAnswerDisplay) {
      setFirstNumber(String(num));
      setSecondNumber('0');
      setOperator('');
      setIsAnswerDisplay(false);
      setIsDecimalInput(false);
    } else {
      //演算子が押されていないときはfirstNumberを更新する
      if (!operator) {
        if (isDecimalInput) {
          setFirstNumber(String(firstNumber) + String(num));
        } else {
          setFirstNumber(String(Number(firstNumber) * 10 + num));
        }
        //演算子が押されているときはsecondNumberを更新する
      } else {
        if (isDecimalInput) {
          setSecondNumber(String(secondNumber) + String(num));
        } else {
          setSecondNumber(String(Number(secondNumber) * 10 + num));
        }
      }
    }
  };
  /**
   * 00ボタンを押したとき
   */
  const handleDoubleZeroClick = () => {
    if (!operator) {
      if (isDecimalInput) {
        setFirstNumber(String(firstNumber) + '00');
      } else {
        setFirstNumber(String(Number(firstNumber) * 100));
      }
    } else {
      if (isDecimalInput) {
        setSecondNumber(String(secondNumber) + '00');
      } else {
        setSecondNumber(String(Number(secondNumber) * 100));
      }
    }
  };

  /**
   * CAボタンを押したとき
   */

  const handleClearAllClick = () => {
    setIsDecimalInput(false);
    //CAのときはすべてリセット
    setFirstNumber('0');
    setSecondNumber('0');
    setOperator('');
    setIsAnswerDisplay(false);
  };

  /**
   * CEボタンを押したとき
   */

  const handleClearEnterClick = () => {
    setIsDecimalInput(false);
    if (isAnswerDisplay) {
      setFirstNumber('0');
    } else {
      if (!operator) {
        setFirstNumber('0');
      } else {
        setSecondNumber('0');
      }
    }
  };
  /**
   * 演算子を押したとき 引数はadd subtract divide multiplyのどれか
   */

  const handleOperatorClick = (click_operator: string) => {
    if (isAnswerDisplay) {
      setIsAnswerDisplay(false);
    } else {
      if (secondNumber !== '0') {
        if (click_operator === 'add') {
          setFirstNumber(String(Number(firstNumber) + Number(secondNumber)));
        } else if (click_operator === 'subtract') {
          setFirstNumber(String(Number(firstNumber) - Number(secondNumber)));
        } else if (click_operator === 'divide') {
          setFirstNumber(String(Number(firstNumber) / Number(secondNumber)));
        } else if (click_operator === 'multiply') {
          setFirstNumber(String(Number(firstNumber) * Number(secondNumber)));
        }
      }
    }
    setIsDecimalInput(false);
    setOperator(click_operator);
    setSecondNumber('0');
  };

  /**
   *  .ボタンを押したとき
   */

  const handleDecimalPointClick = () => {
    if (isDecimalInput) return;

    setIsDecimalInput(true);
    if (!operator) {
      setFirstNumber(String(firstNumber) + '.');
    } else {
      setSecondNumber(String(secondNumber) + '.');
    }
  };

  /**
   * =ボタンを押したとき
   */
  const handleAnswerClick = () => {
    setIsDecimalInput(false);
    setIsAnswerDisplay(true);
    if (operator === 'add') {
      if (secondNumber === '0') {
        //演算子が指定されたあと、secondNumberが入力されずに=が押された場合
        //例えば、5 + = と入力した場合、10と表示する。
        setSecondNumber(firstNumber);
        setFirstNumber(String(Number(firstNumber) + Number(firstNumber)));
      } else {
        setFirstNumber(String(Number(firstNumber) + Number(secondNumber)));
      }
    } else if (operator === 'subtract') {
      if (secondNumber === '0') {
        setSecondNumber(String(Number(firstNumber)));
        setFirstNumber(String(Number(firstNumber) - Number(firstNumber)));
      } else {
        setFirstNumber(String(Number(firstNumber) - Number(secondNumber)));
      }
    } else if (operator === 'divide') {
      if (secondNumber === '0') {
        setSecondNumber(String(Number(firstNumber)));
        setFirstNumber(String(Number(firstNumber) / Number(firstNumber)));
      } else {
        setFirstNumber(String(Number(firstNumber) / Number(secondNumber)));
      }
    } else if (operator === 'multiply') {
      if (secondNumber === '0') {
        setSecondNumber(String(Number(firstNumber)));
        setFirstNumber(String(Number(firstNumber) * Number(firstNumber)));
      } else {
        setFirstNumber(String(Number(firstNumber) * Number(secondNumber)));
      }
    }
  };

  /**
   * 大きい桁数や小数点以下桁数の調整
   */
  const fixDigits = useCallback((num: number) => {
    if (num >= 10e8) {
      return num.toExponential(2);
    } else {
      return Math.round(num * 1000000) / 1000000;
    }
  }, []);

  //-- 表示する数字 ---------------------------------------------------------

  const displayMarkup =
    !isAnswerDisplay && operator ? String(fixDigits(Number(secondNumber))) : String(fixDigits(Number(firstNumber)));

  //-- Render --------------------------------------------------------
  return (
    <>
      <div>
        <Typography variant="h5">電卓</Typography>
        <Display display={displayMarkup} operator={operator}></Display>

        <Box display="flex" flexDirection="column">
          <Box display="flex" justifyContent="center">
            <MyButton onClick={() => playLoud()} backgroundColor="#e0e0e0">
              <Typography variant="h5">Ex</Typography>
            </MyButton>
            <MyButton backgroundColor="gray" onClick={handleClearAllClick}>
              <Typography variant="h5">CA</Typography>
            </MyButton>

            <MyButton backgroundColor="gray" onClick={handleClearEnterClick}>
              <Typography variant="h5">CE</Typography>
            </MyButton>

            <MyButton backgroundColor="orange" onClick={() => handleOperatorClick('divide')}>
              <Typography variant="h5">÷</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton onClick={() => handleNumberClick(7)} backgroundColor="#e0e0e0">
              <Typography variant="h5">7</Typography>
            </MyButton>
            <MyButton onClick={() => handleNumberClick(8)} backgroundColor="#e0e0e0">
              <Typography variant="h5">8</Typography>
            </MyButton>
            <MyButton onClick={() => handleNumberClick(9)} backgroundColor="#e0e0e0">
              <Typography variant="h5">9</Typography>
            </MyButton>
            <MyButton backgroundColor="orange" onClick={() => handleOperatorClick('multiply')}>
              <Typography variant="h5">×</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton onClick={() => handleNumberClick(4)} backgroundColor="#e0e0e0">
              <Typography variant="h5">4</Typography>
            </MyButton>
            <MyButton onClick={() => handleNumberClick(5)} backgroundColor="#e0e0e0">
              <Typography variant="h5">5</Typography>
            </MyButton>
            <MyButton onClick={() => handleNumberClick(6)} backgroundColor="#e0e0e0">
              <Typography variant="h5">6</Typography>
            </MyButton>
            <MyButton backgroundColor="orange" onClick={() => handleOperatorClick('subtract')}>
              <Typography variant="h5">-</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton onClick={() => handleNumberClick(1)} backgroundColor="#e0e0e0">
              <Typography variant="h5">1</Typography>
            </MyButton>
            <MyButton onClick={() => handleNumberClick(2)} backgroundColor="#e0e0e0">
              <Typography variant="h5">2</Typography>
            </MyButton>
            <MyButton onClick={() => handleNumberClick(3)} backgroundColor="#e0e0e0">
              <Typography variant="h5">3</Typography>
            </MyButton>
            <MyButton backgroundColor="orange" onClick={() => handleOperatorClick('add')}>
              <Typography variant="h5">+</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton onClick={() => handleNumberClick(0)} backgroundColor="#e0e0e0">
              <Typography variant="h5">0</Typography>
            </MyButton>
            <MyButton onClick={handleDoubleZeroClick} backgroundColor="#e0e0e0">
              <Typography variant="h5">00</Typography>
            </MyButton>
            <MyButton onClick={handleDecimalPointClick} backgroundColor="#e0e0e0">
              <Typography variant="h5">.</Typography>
            </MyButton>
            <MyButton backgroundColor="orange" onClick={handleAnswerClick}>
              <Typography variant="h5">=</Typography>
            </MyButton>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default React.memo(Calculator);
