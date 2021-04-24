import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap/';

const InputSize = ({ squareFlexSizeSelected }) => {
  const squareNumbersHandler = event => {
    squareFlexSizeSelected(event.target.value);
  };
  return (
    <div>
      <InputGroup onChange={squareNumbersHandler} size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Enter Field Size
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
};

export default InputSize;
