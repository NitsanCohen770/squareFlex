import React, { useState } from 'react';
import './SquareFlex.css';
import { nanoid } from 'nanoid';
const SquareFlex = ({ squareSize }) => {
  let XO = 'X';
  const printNewXO = event => {
    console.log(event.target);
    if (event.target.innerText) {
      alert('Sorry, this square is already taken');
      return;
    }
    if (XO === 'X') {
      event.target.innerText = XO;
      XO = 'O';
      return;
    } else {
      event.target.innerText = XO;
      XO = 'X';
    }
  };
  //   useEffect(() => {

  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);
  return (
    <div>
      {squareSize.map((squareCol, index) => {
        return (
          <div id={index} className="flex-container" key={nanoid()}>
            {squareSize.map((squareRow, index) => {
              return (
                <div
                  className="flex-item"
                  id={index}
                  squareS
                  onClick={printNewXO}
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
