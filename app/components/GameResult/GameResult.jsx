import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import cl from './GameResults.module.scss'
import GameResultBox from './GameResultBox'
import createMark from '@/app/js/createMark'
import { marks } from '@/app/static/js/marks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
/*
window with results
it has 2 sides (speed & accuracy)
*/
const GameResult = () => {
  const colorsStore = useSelector(state => state.colorsStore)
  const results = useSelector(state => state.gameStats)

  const [mark, setMark] = useState('')

  useEffect(()=>{
    let res = createMark(results.wpm) //create mark
    setMark(marks[`${res}`])
  }, [])

  return (
    <section className={cl.cont} style={{backgroundColor: colorsStore.bg}}>
      {/* <h1 style={{color: colorsStore.bgD}}>Your Result &rarr; <strong style={{fontSize: '0.5em'}}>{mark}</strong></h1> */}
      <aside>
        <h1 style={{color: colorsStore.bgD}}>Your Result</h1>
        <FontAwesomeIcon icon={faArrowRight} style={{height: '40px', width: '40px', color: colorsStore.bgD}}/>
        <p style={{color: colorsStore.textA}}>{mark}</p>
      </aside>

      <GameResultBox title='Accuracy' parameters={['acc', 'failed', 'total', 'totalFailed']}/>
      <GameResultBox title='Speed' parameters={['time', 'wpm', 'rwa']}/>

    </section>
  )
}

export default GameResult