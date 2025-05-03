import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`

export const PlayerCard = styled.div`
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
`

export const NumberBall = styled.span`
  display: inline-block;
  margin: 4px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ matched }) => (matched ? '#4caf50' : '#ddd')};
`
