import React from 'react'
import { Button, TicketCard } from './style'
import useLotteryReducer from '../../hooks/useLotteryReducer'

const Dashboard = () => {
  const { state, dispatch } = useLotteryReducer()

  const handleApprove = (ticket) => {
    dispatch({ type: 'APPROVE_TICKET', payload: ticket })
  }

  const handleReject = (ticket) => {
    dispatch({ type: 'REJECT_TICKET', payload: ticket })
  }

  console.log(state.tickets)
  return (
    <div>
      <h2>Tickets Pendentes</h2>
      {state.tickets.length === 0 ? (
        <p>Nenhum ticket pendente</p>
      ) : (
        state.tickets.map((ticket) => (
          <TicketCard key={ticket.id}>
            <strong>{ticket.name}</strong>
            <p>Números: {ticket.numbers.join(', ')}</p>
            <Button onClick={() => handleApprove(ticket)}>Aprovar</Button>
            <Button danger onClick={() => handleReject(ticket)}>
              Reprovar
            </Button>
          </TicketCard>
        ))
      )}
    </div>
  )
}

export { Dashboard }
