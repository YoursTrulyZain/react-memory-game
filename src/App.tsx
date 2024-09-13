import { useState } from 'react'
import './App.css'
import GameLayout from './components/GameLayout'
import Score from './components/Score'
import DeckSpace from './components/DeckSpace'

function App() {


  return (
    <>
      <GameLayout>
        <Score></Score>
        <DeckSpace></DeckSpace>
      </GameLayout>
    </>
  )
}

export default App
