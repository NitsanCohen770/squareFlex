import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import InputSize from './components/InputSize/InputSize';
import SquareFlex from './components/squareFlex/SquareFlex';

function App() {
  const [squareSize, setsquareSize] = useState([1, 1, 1, 1]);
  const onSelectSize = squaresSize => {
    const arrayList = [];
    for (let i = 0; i < squaresSize; i++) {
      arrayList.push(1);
    }
    setsquareSize(arrayList);
  };
  return (
    <div>
      <InputSize squareFlexSizeSelected={onSelectSize} />
      <SquareFlex squareSize={squareSize} />
    </div>
  );
}

export default App;
