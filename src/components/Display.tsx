import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

type DisplayPropsType = {
  display?: string;
  operator: string;
};

const Wrap = styled(Box)(({ theme }) => ({
  fontSize: '60px',
  width: '100%',
  margin: '0 auto',
}));

const Display = React.memo((props: DisplayPropsType): JSX.Element => {
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
      {props.display && <Wrap>{props.display}</Wrap>}
      {props.operator && <div>{disp_operator}</div>}
    </Box>
  );
});
export default Display;
