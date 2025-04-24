import React from 'react';
import { Header } from './style';

const TopHeader = ({ drawnNumbers }) => {
  return (
    <Header>
      Números Sorteados: {drawnNumbers.join(', ') || 'Nenhum número ainda'}
    </Header>
  );
}

export { TopHeader }