import { useReducer } from 'react'

const initialState = {
  drawnNumbers: [],
  players: [],
  pendingTickets: [],
  winner: '',
  history: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [
          ...state.players,
          { ...action.payload, matched: Array(6).fill(false) },
        ],
      }
    case 'DRAW_NUMBERS':
      const newDraw = action.payload
      const updatedPlayers = state.players.map((player) => {
        const matched = player.numbers.map((num) => newDraw.includes(num))
        return { ...player, matched }
      })
      const winner =
        updatedPlayers.find((p) => p.matched.every(Boolean))?.name || null
      return {
        ...state,
        drawnNumbers: newDraw,
        history: [
          ...state.history,
          { date: new Date().toLocaleDateString(), numbers: newDraw },
        ],
        players: updatedPlayers,
        winner: winner,
        jackpot: winner ? 0 : state.jackpot + 100,
      }
    case 'ADD_PENDING_TICKET':
      return {
        ...state,
        pendingTickets: [...state.pendingTickets, action.payload],
      }
    case 'APPROVE_TICKET':
      return {
        ...state,
        players: [...state.players, action.payload],
        pendingTickets: state.pendingTickets.filter(
          (ticket) => ticket.id !== action.payload.id,
        ),
      }
    case 'REJECT_TICKET':
      return {
        ...state,
        pendingTickets: state.pendingTickets.filter(
          (ticket) => ticket.id !== action.payload.id,
        ),
      }
    default:
      return state
  }
}

export default function useLotteryReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return { state, dispatch }
}
