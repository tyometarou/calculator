import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

type DisplayPropsType = {
  display: string;
  operator: string;
};

const Wrap = styled(Box)(({ theme }) => ({
  fontSize: '60px',
  width: '100%',
  margin: '0 auto',
}));

const OperatorWrap = styled(Box)(({ theme }) => ({
  fontSize: '60px',
}));

const Display: React.FC<DisplayPropsType> = (props) => {
  let disp_operator = props.operator;

  switch (disp_operator) {
    case 'add':
      disp_operator = '+';
      break;
    case 'subtract':
      disp_operator = '-';
      break;
    case 'multiply':
      disp_operator = '×';
      break;
    case 'divide':
      disp_operator = '÷';
      break;
    default:
      disp_operator = '';
  }

  //-- Render --------------------------------------------------------
  return (
    <Box display="flex">
      {props.display && <Wrap data-testid="display">{props.display}</Wrap>}
      {props.operator && <OperatorWrap>{disp_operator}</OperatorWrap>}
    </Box>
  );
};
export default React.memo(Display);
