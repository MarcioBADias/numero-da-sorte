import React, { useState } from 'react'
import { Ball, BallGrid, Button, FormWrapper } from './style'

const PlayerForm = ({ dispatch }) => {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [selectedNumbers, setSelectedNumbers] = useState([])

  const toggleForm = () => {
    setShowForm(!showForm)
    setName('')
    setSelectedNumbers([])
  }

  const handleNumberClick = (num) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num))
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, num])
    }
  }

  const handleBuy = () => {
    const jogo = selectedNumbers.sort((a, b) => a - b).join(', ')
    const msg = `Olá, me chamo ${name} e quero criar uma aposta com os números ${jogo}. Pode me atualizar o Pix e valor?`
    const encodedMsg = encodeURIComponent(msg)
    const whatsappURL = `https://wa.me/5521968465802?text=${encodedMsg}`
    dispatch({
      type: 'ADD_TICKET',
      payload: {
        id: Date.now(),
        name,
        numbers: selectedNumbers,
      },
    })
    window.open(whatsappURL, '_blank')
    toggleForm()
  }

  return (
    <FormWrapper>
      {!showForm && <Button onClick={toggleForm}>Comprar um jogo</Button>}

      {showForm && (
        <>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              style={{ margin: '10px 0', padding: '5px', width: '200px' }}
            />
          </div>

          <BallGrid>
            {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
              <Ball
                key={num}
                selected={selectedNumbers.includes(num)}
                onClick={() => handleNumberClick(num)}
              >
                {num.toString().padStart(2, '0')}
              </Ball>
            ))}
          </BallGrid>

          <div>
            <Button
              onClick={handleBuy}
              disabled={selectedNumbers.length !== 6 || !name}
            >
              Comprar
            </Button>
            <Button cancel onClick={toggleForm}>
              Cancelar
            </Button>
          </div>
        </>
      )}
    </FormWrapper>
  )
}

export { PlayerForm }
