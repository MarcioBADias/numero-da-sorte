import React from 'react';
import { Button } from './style';

const DrawButton = ({ dispatch }) => {
  const drawNumbers = () => {
    const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
    const shuffled = numbers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);
    dispatch({ type: 'DRAW_NUMBERS', payload: selected });
  };

  return <Button onClick={drawNumbers}>Sortear Números</Button>;
}

export { DrawButton }