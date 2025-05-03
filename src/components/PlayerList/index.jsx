import React, { useEffect, useState } from 'react'
import { List, NumberBall, PlayerCard } from './style'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const PlayerList = () => {
  const [approvedPlayers, setApprovedPlayers] = useState([])

  useEffect(() => {
    const fetchApprovedPlayers = async () => {
      const { data, error } = await supabase
        .from('pending_tickets')
        .select('id, player_name, player_numbers, status')
        .eq('status', 'approved')

      if (error) {
        console.error('Erro ao buscar tickets aprovados:', error)
        return
      }

      const formattedPlayers = data.map((ticket) => ({
        id: ticket.id,
        name: ticket.player_name,
        numbers: ticket.player_numbers,
        matched: Array(6).fill(false),
      }))

      setApprovedPlayers(formattedPlayers)
    }

    fetchApprovedPlayers()
  }, [])

  return (
    <List>
      {approvedPlayers.map((player) => (
        <PlayerCard key={player.id}>
          <strong>{player.name}</strong>
          <div>
            {player.numbers.map((num, i) => (
              <NumberBall key={i} matched={player.matched[i]}>
                {num}
              </NumberBall>
            ))}
          </div>
        </PlayerCard>
      ))}
    </List>
  )
}

export { PlayerList }
