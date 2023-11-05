'use client'

import React, { useState } from 'react';

function RandomNumberGenerator({ length }) {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default RandomNumberGenerator;
