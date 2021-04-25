import React from 'react';
import './SquareFlex.css';
import { nanoid } from 'nanoid';
const SquareFlex = ({ squareSize }) => {
  const printNewNumber = event => {
    const newNumber = Math.floor(Math.random() * 11);
    if (event.target.innerText) {
      alert('Sorry, this square is already taken');
      return;
    }
    event.target.innerText = newNumber;
  };
  return (
    <div>
      {squareSize.map(squareCol => {
        return (
          <div className="flex-container" key={nanoid()}>
            {squareSize.map(squareRow => {
              return (
                <div
                  className="flex-item"
                  onClick={printNewNumber}
                  key={nanoid()}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SquareFlex;
