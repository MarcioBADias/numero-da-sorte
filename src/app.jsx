import React from 'react';
import { Container, Title } from './style';
import { TopHeader } from './components/TopHeader';
import { DrawButton } from './components/DrawButton';
import { PlayerForm } from './components/PlayerForm';
import { PlayerList } from './components/PlayerList';
import { HistoryLog } from './components/HistoryLog';
import useLotteryReducer from './hooks/useLotteryReducer';

const App = () => {
  const { state, dispatch } = useLotteryReducer();

  return (
    <Container>
      <Title>🎯 Mega Sorte Semanal</Title>
      <TopHeader drawnNumbers={state.drawnNumbers} />
      <DrawButton dispatch={dispatch} />
      <PlayerForm dispatch={dispatch} />
      <PlayerList players={state.players} />
      {state.winner && <h2>🎉 Parabéns, {state.winner}! Você ganhou o prêmio acumulado!</h2>}
      <HistoryLog history={state.history} />
    </Container>
  );
}

export { App }