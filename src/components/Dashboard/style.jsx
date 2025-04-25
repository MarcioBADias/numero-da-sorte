import styled from 'styled-components'

export const TicketCard = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
`

export const Button = styled.button`
  margin-right: 10px;
  background-color: ${({ danger }) => (danger ? '#e74c3c' : '#2ecc71')};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
`
