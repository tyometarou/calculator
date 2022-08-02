import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

type ButtonPropsType = {
  onClick: () => void;
  backgroundColor?: string;
  children?: JSX.Element; // 子要素
};

const MyButton: React.FC<ButtonPropsType> = (props) => {
  const ButtonStyle = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: props.backgroundColor,
  }));

  //-- Render --------------------------------------------------------
  return (
    <div>
      <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>
    </div>
  );
};
export default React.memo(MyButton);
