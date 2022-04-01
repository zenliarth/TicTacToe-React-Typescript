import React from 'react';
import Square from '../Square';
import { Container } from './style';

interface IBoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board = ({ squares, onClick }: IBoardProps): JSX.Element => {
  return (
    <Container>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </Container>
  );
};

export default Board;
