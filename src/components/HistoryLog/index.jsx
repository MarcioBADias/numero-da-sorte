import React from 'react';
import { HistoryContainer, HistoryItem } from './style';

const HistoryLog = ({ history }) => {
  return (
    <HistoryContainer>
      <h3>Histórico de Sorteios</h3>
      {history.map((h, idx) => (
        <HistoryItem key={idx}>
          <strong>{h.date}:</strong> {h.numbers.join(', ')}
        </HistoryItem>
      ))}
    </HistoryContainer>
  );
}

export { HistoryLog }