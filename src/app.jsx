import React, { useState } from 'react'
import {
  Container,
  NavContainer,
  NavTabs,
  PageContainer,
  TabButton,
  Title,
} from './style'
import { TopHeader } from './components/TopHeader'
import { DrawButton } from './components/DrawButton'
import { PlayerForm } from './components/PlayerForm'
import { PlayerList } from './components/PlayerList'
import { HistoryLog } from './components/HistoryLog'
import { Dashboard } from './components/Dashboard'
import useLotteryReducer from './hooks/useLotteryReducer'

const App = () => {
  const { state, dispatch } = useLotteryReducer()
  const [activeTab, setActiveTab] = useState('jogo')

  return (
    <Container>
      <NavContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}
        >
          <NavTabs>
            <TabButton onClick={() => setActiveTab('jogo')}>
              Página do Jogo
            </TabButton>
            <TabButton onClick={() => setActiveTab('dashboard')}>
              Dashboard
            </TabButton>
          </NavTabs>
        </div>
      </NavContainer>
      <PageContainer>
        <Title>🎯 Mega Sorte Semanal</Title>
        {activeTab === 'jogo' ? (
          <>
            <TopHeader drawnNumbers={state.drawnNumbers} />
            <DrawButton dispatch={dispatch} />
            <PlayerForm dispatch={dispatch} />
            <PlayerList players={state.players} />
            {state.winner && (
              <h2>
                🎉 Parabéns, {state.winner}! Você ganhou o prêmio acumulado!
              </h2>
            )}
            <HistoryLog history={state.history} />
          </>
        ) : (
          <Dashboard />
        )}
      </PageContainer>
    </Container>
  )
}

export { App }
