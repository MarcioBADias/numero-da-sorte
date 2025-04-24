import React, { useState } from 'react';
import { Button, Form, Input } from './style';

const PlayerForm = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [numbers, setNumbers] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const nums = numbers.split(',').map(n => parseInt(n.trim(), 10)).slice(0, 6);
    if (name && nums.length === 6 && nums.every(n => n >= 1 && n <= 50)) {
      dispatch({ type: 'ADD_PLAYER', payload: { name, numbers: nums } });
      setName('');
      setNumbers('');
    } else {
      alert('Insira um nome e 6 números válidos de 1 a 50 separados por vírgula.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
      <Input placeholder="Números (ex: 1,2,3,4,5,6)" value={numbers} onChange={e => setNumbers(e.target.value)} />
      <Button type="submit">Cadastrar Jogador</Button>
    </Form>
  );
}

export { PlayerForm }