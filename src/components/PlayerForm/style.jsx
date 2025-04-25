import styled from 'styled-components'

export const FormWrapper = styled.div`
  margin: 2rem 0;
`

export const Button = styled.button`
  padding: 10px 20px;
  margin: 0.5rem;
  border: none;
  border-radius: 20px;
  background-color: ${({ cancel }) => (cancel ? '#aaa' : '#4c53af')};
  color: white;
  cursor: pointer;
`

export const BallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 8px;
  margin: 1rem 0;
`

export const Ball = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? '#4CAF50' : '#eee')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  border: 1px solid #ccc;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`
