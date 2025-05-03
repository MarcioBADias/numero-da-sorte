import React, { useEffect } from 'react'
import { Button } from './style'
import useLotteryReducer from '../../hooks/useLotteryReducer'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const Dashboard = () => {
  const { state, dispatch } = useLotteryReducer()

  useEffect(() => {
    const fetchTickets = async () => {
      const { data, error } = await supabase
        .from('pending_tickets')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Erro ao buscar tickets:', error)
      } else {
        data.forEach((ticket) => {
          dispatch({ type: 'ADD_PENDING_TICKET', payload: ticket })
        })
      }
    }

    fetchTickets()
  }, [dispatch])

  const handleApprove = async (ticket) => {
    const { error } = await supabase
      .from('pending_tickets')
      .update({ status: 'approved' })
      .eq('id', ticket.id)

    if (error) {
      console.error('Erro ao aprovar ticket:', error)
    } else {
      dispatch({ type: 'APPROVE_TICKET', payload: ticket })
    }
  }

  const handleReject = async (ticket) => {
    const { error } = await supabase
      .from('pending_tickets')
      .update({ status: 'rejected' })
      .eq('id', ticket.id)

    if (error) {
      console.error('Erro ao reprovar ticket:', error)
    } else {
      dispatch({ type: 'REJECT_TICKET', payload: ticket })
    }
  }

  return (
    <div>
      <h2>Tickets Pendentes</h2>
      {state.pendingTickets.length === 0 && <p>Nenhum ticket pendente.</p>}
      {state.pendingTickets.map((ticket, index) => (
        <div
          key={index}
          style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
        >
          <p>
            <strong>Nome:</strong> {ticket.player_name}
          </p>
          <p>
            <strong>Números:</strong> {ticket.player_numbers.join(', ')}
          </p>
          <Button onClick={() => handleApprove(ticket)}>Aprovar</Button>
          <Button cancel onClick={() => handleReject(ticket)}>
            Reprovar
          </Button>
        </div>
      ))}
    </div>
  )
}

export { Dashboard }
