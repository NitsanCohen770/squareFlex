import React from 'react';
import './SquareFlex.css';
import { nanoid } from 'nanoid';
const SquareFlex = ({ squareSize }) => {
  const printNewNumber = event => {
    const newNumber = Math.floor(Math.random() * 11);
    if (event.target.value) {
      alert('Sorry, this square is already taken');
      return;
    }
    event.target.value = newNumber;
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
                >
                  <input type="number"></input>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SquareFlex;
