import React, { useState } from 'react';
import { calculateWinner } from '../../utils/helper';
import Board from '../Board';
import { Container, Button, Moviments, Status, Tie } from './styled';

const Game = (): JSX.Element => {
  const [board, setBoard] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [Player, setPlayer] = useState(true);
  const winner = calculateWinner(board[step]);
  const playerXorPlayerO = Player ? 'X' : 'O';
  let tie;
  let status;
  if (board.length === 10) {
    tie = <p>Tie!</p>;
  }

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${playerXorPlayerO}`;
  }

  const handleClick = (i: number): void => {
    // copy array
    const copyBoard = board.slice(0, step + 1);
    // take array length
    const current = copyBoard[copyBoard.length - 1];
    // return copy new array with new value
    const squares = current.slice();
    // check if winner
    if (winner || squares[i]) {
      return;
    }

    // select player
    squares[i] = playerXorPlayerO;
    // add new array sequence as new array
    setBoard(copyBoard.concat([squares]));
    setStep(copyBoard.length);
    setPlayer(!Player);
  };

  const jumpTo = (step: number): void => {
    setStep(step);
    setPlayer(step % 2 === 0);
  };

  const moves = board.map((_, i) => {
    const desc = i ? `Go to move #${i}` : 'Go to game start';
    return (
      <li key={i}>
        <button onClick={() => jumpTo(i)}>{desc}</button>
      </li>
    );
  });

  const handleReset = (): void => {
    setBoard([Array(9).fill(null)]);
    setStep(0);
    setPlayer(true);
  };
  return (
    <Container>
      <Status>
        <span>{status}</span>
      </Status>
      {tie && !winner ? <Tie>{tie}</Tie> : null}
      <Board squares={board[step]} onClick={handleClick} />
      <Moviments>{moves}</Moviments>
      <Button onClick={handleReset}>Reset</Button>
    </Container>
  );
};

export default Game;
