import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import InputSize from './components/InputSize/InputSize';
import SquareFlex from './components/squareFlex/SquareFlex';

function App() {
  const [squareSize, setSquareSize] = useState([1, 1, 1]);
  const onSelectSize = squaresSize => {
    const squareSizeArray = [];
    for (let i = 0; i < squaresSize; i++) {
      squareSizeArray.push(1);
    }
    setSquareSize(squareSizeArray);
  };
  return (
    <div>
      <InputSize squareFlexSizeSelected={onSelectSize} />
      <SquareFlex squareSize={squareSize} />
    </div>
  );
}

export default App;
