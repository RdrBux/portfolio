import React from 'react';
import { useState, useEffect } from 'react';

export default function Game() {
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);
  const [computerTurn, setComputerTurn] = useState(false);
  const [result, setResult] = useState(false);

  function handleClick(i) {
    if (computerTurn === false && squares[i] === '') {
      setSquares((prev) => [...prev, (prev[i] = 'X')], setComputerTurn(true));
    }
  }

  useEffect(() => {
    if (computerTurn) {
      const emptySquare = squares.findIndex((square) => square === '');
      setSquares(
        (prev) => [...prev, (prev[emptySquare] = 'O')],
        setComputerTurn(false)
      );
    }
  }, [computerTurn]);

  function playComputerTurn() {
    const emptySquare = squares.findIndex((square) => square === '');
    setSquares((prev) => [...prev, (prev[emptySquare] = 'O')]);
  }

  function checkWin() {
    if (result) return;
    if (!squares.some((square) => square === '')) {
      return setResult('TIE');
    }
    const board = [...squares];
    const winningCombos = [
      board.slice(0, 3),
      board.slice(3, 6),
      board.slice(6, 9),
      [].concat(board[0], board[3], board[6]),
      [].concat(board[1], board[4], board[7]),
      [].concat(board[2], board[5], board[8]),
      [].concat(board[0], board[4], board[8]),
      [].concat(board[2], board[4], board[6]),
    ];
    winningCombos.forEach((combo) => {
      if (combo.every((square) => square === 'X')) {
        setResult('WON');
      }
      if (combo.every((square) => square === 'O')) {
        setResult('LOST');
      }
    });
  }

  function playAgain() {
    setSquares(['', '', '', '', '', '', '', '', '']);
    setResult(false);
  }

  checkWin();

  return (
    <div className="h-fit w-fit shrink-0 rounded-lg border border-black bg-white p-2 font-bold opacity-10 shadow-flat grayscale duration-300 hover:opacity-100 hover:grayscale-0 lg:opacity-20">
      <p className="text-center">TIC TAC TOE</p>
      <div className="relative flex cursor-pointer flex-col rounded-lg bg-gray-50">
        {result && (
          <div
            className={`absolute flex h-full w-full flex-col items-center justify-center rounded-lg ${
              result === 'WON'
                ? 'bg-green-200/80'
                : result === 'LOST'
                ? 'bg-red-200/80'
                : 'bg-gray-200/80'
            }`}
          >
            <div>YOU {result}</div>
            <button onClick={playAgain}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="flex">
          <div
            onClick={() => handleClick(0)}
            className="flex h-8 w-8 items-center justify-center rounded-tl-lg hover:bg-gray-100"
          >
            {squares[0]}
          </div>
          <div
            onClick={() => handleClick(1)}
            className="flex h-8 w-8 items-center justify-center border-x border-black hover:bg-gray-100"
          >
            {squares[1]}
          </div>
          <div
            onClick={() => handleClick(2)}
            className="flex h-8 w-8 items-center justify-center rounded-tr-lg hover:bg-gray-100"
          >
            {squares[2]}
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(3)}
            className="flex h-8 w-8 items-center justify-center border-y border-black hover:bg-gray-100"
          >
            {squares[3]}
          </div>
          <div
            onClick={() => handleClick(4)}
            className="flex h-8 w-8 items-center justify-center border border-black hover:bg-gray-100"
          >
            {squares[4]}
          </div>
          <div
            onClick={() => handleClick(5)}
            className="flex h-8 w-8 items-center justify-center border-y border-black hover:bg-gray-100"
          >
            {squares[5]}
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => handleClick(6)}
            className="flex h-8 w-8 items-center justify-center rounded-bl-lg hover:bg-gray-100"
          >
            {squares[6]}
          </div>
          <div
            onClick={() => handleClick(7)}
            className="flex h-8 w-8 items-center justify-center border-x border-black hover:bg-gray-100"
          >
            {squares[7]}
          </div>
          <div
            onClick={() => handleClick(8)}
            className="flex h-8 w-8 items-center justify-center rounded-br-lg hover:bg-gray-100"
          >
            {squares[8]}
          </div>
        </div>
      </div>
    </div>
  );
}
