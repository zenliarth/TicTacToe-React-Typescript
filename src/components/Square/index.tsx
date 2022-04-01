import React from 'react';
import { Button } from './style';

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps): JSX.Element => {
  const backgroundColor = () => {
    if (value === 'X') {
      return '#f44336';
    } else if (value === 'O') {
      return '#4caf50';
    }
    return '#fff';
  };

  return (
    <Button
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor(),
      }}
    >
      {value}
    </Button>
  );
};

export default Square;
