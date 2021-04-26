import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ clicked, value, className }) => {
  return (
    <div className={className} onClick={clicked}>
      {value}
    </div>
  );
};

export default Square;
