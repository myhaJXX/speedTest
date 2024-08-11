import React from 'react'
import { useSelector } from 'react-redux'
import cl from './GameResults.module.scss'
import GameResultBox from './GameResultBox'
/*
window with results
it has 2 sides (speed & accuracy)
*/
const GameResult = () => {
  const colorsStore = useSelector(state => state.colorsStore)

  return (
    <section className={cl.cont} style={{backgroundColor: colorsStore.bg}}>
      <h1 style={{color: colorsStore.bgD}}>Your Results</h1>

      <GameResultBox title='Accuracy' parameters={['acc', 'failed', 'total', 'totalFailed']}/>
      <GameResultBox title='Speed' parameters={['time', 'wpm', 'rwa']}/>
    </section>
  )
}

export default GameResult