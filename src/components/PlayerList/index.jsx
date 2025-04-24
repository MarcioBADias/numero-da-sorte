import React from 'react';
import { List, NumberBall, PlayerCard } from './style';

const PlayerList = ({ players }) => {
  return (
    <List>
      {players.map((player, idx) => (
        <PlayerCard key={idx}>
          <strong>{player.name}</strong>
          <div>
            {player.numbers.map((num, i) => (
              <NumberBall key={i} matched={player.matched[i]}>{num}</NumberBall>
            ))}
          </div>
        </PlayerCard>
      ))}
    </List>
  );
}

export { PlayerList }