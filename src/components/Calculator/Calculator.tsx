import React from "react";

//components
import MyButton from "../../components/Button";
import Display from "../../components/Display";

//material-ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@wcj/dark-mode";

import { useHook } from "./useHook";

const Calculator: React.FC = () => {
  const {
    playLoud,
    operator,
    handleNumberClick,
    handleDoubleZeroClick,
    handleClearAllClick,
    handleClearEnterClick,
    handleOperatorClick,
    handleDecimalPointClick,
    handleAnswerClick,
    displayMarkup,
  } = useHook();
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

            <MyButton
              backgroundColor="orange"
              onClick={() => handleOperatorClick("divide")}
            >
              <Typography variant="h5">÷</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton
              onClick={() => handleNumberClick(7)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">7</Typography>
            </MyButton>
            <MyButton
              onClick={() => handleNumberClick(8)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">8</Typography>
            </MyButton>
            <MyButton
              onClick={() => handleNumberClick(9)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">9</Typography>
            </MyButton>
            <MyButton
              backgroundColor="orange"
              onClick={() => handleOperatorClick("multiply")}
            >
              <Typography variant="h5">×</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton
              onClick={() => handleNumberClick(4)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">4</Typography>
            </MyButton>
            <MyButton
              onClick={() => handleNumberClick(5)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">5</Typography>
            </MyButton>
            <MyButton
              onClick={() => handleNumberClick(6)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">6</Typography>
            </MyButton>
            <MyButton
              backgroundColor="orange"
              onClick={() => handleOperatorClick("subtract")}
            >
              <Typography variant="h5">-</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton
              onClick={() => handleNumberClick(1)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">1</Typography>
            </MyButton>
            <MyButton
              onClick={() => handleNumberClick(2)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">2</Typography>
            </MyButton>
            <MyButton
              onClick={() => handleNumberClick(3)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">3</Typography>
            </MyButton>
            <MyButton
              backgroundColor="orange"
              onClick={() => handleOperatorClick("add")}
            >
              <Typography variant="h5">+</Typography>
            </MyButton>
          </Box>
          <Box display="flex" justifyContent="center">
            <MyButton
              onClick={() => handleNumberClick(0)}
              backgroundColor="#e0e0e0"
            >
              <Typography variant="h5">0</Typography>
            </MyButton>
            <MyButton onClick={handleDoubleZeroClick} backgroundColor="#e0e0e0">
              <Typography variant="h5">00</Typography>
            </MyButton>
            <MyButton
              onClick={handleDecimalPointClick}
              backgroundColor="#e0e0e0"
            >
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
