import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

type DisplayPropsType = {
  display: string;
  operator: string;
};

const Wrap = styled(Box)(({ theme }) => ({
  fontSize: "60px",
  width: "100%",
  margin: "0 auto",
}));

const OperatorWrap = styled(Box)(({ theme }) => ({
  fontSize: "60px",
}));

const Display: FC<DisplayPropsType> = ({ display, operator }) => {
  const operatorMapping = {
    add: "+",
    subtract: "-",
    multiply: "×",
    divide: "÷",
  };

  return (
    <Box display="flex">
      {display && <Wrap data-testid="display">{display}</Wrap>}
      {operator && (
        <OperatorWrap>{operatorMapping[operator] || ""}</OperatorWrap>
      )}
    </Box>
  );
};
export default React.memo(Display);
