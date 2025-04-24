# 🎯 Mega Sorte Semanal

Este é um projeto em React que simula uma loteria semanal interativa. Cada jogador escolhe 6 números entre 1 e 50 e participa de sorteios semanais. Números sorteados são destacados, e o jogador que acertar todos os 6 números ganha o prêmio acumulado!

## 🚀 Funcionalidades

- Cadastro de jogadores com nome e 6 números
- Sorteio semanal de 6 números aleatórios
- Destaque visual para os números acertados por jogador
- Exibição de vencedor ao acertar todos os números
- Histórico de sorteios com data e números sorteados
- Estado global gerenciado com `useReducer`

## 🛠️ Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Styled-components](https://styled-components.com/)
- [React-icons](https://react-icons.github.io/react-icons/)
- `useReducer` + custom hook para gerenciamento de estado


🧠 Organização do Projeto

src/
├── components/
│   ├── TopHeader.jsx
│   ├── DrawButton.jsx
│   ├── PlayerForm.jsx
│   ├── PlayerList.jsx
│   └── HistoryLog.jsx
├── hooks/
│   └── useLotteryReducer.js
├── App.jsx
├── style.js
└── main.jsx

🧪 Exemplos de uso
Adicione jogadores e veja seus números serem destacados em verde conforme forem sorteados.

A cada sorteio, os acertos são atualizados e exibidos visualmente.

Ao acertar os 6 números, um vencedor é anunciado e o prêmio acumulado é entregue.

✨ Melhorias futuras
Salvar jogadores e sorteios no banco de dados

Página de administração e histórico detalhado

Design responsivo com animações de sorteio

Suporte para reset semanal automático
