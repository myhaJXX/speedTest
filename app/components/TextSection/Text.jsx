import React, { useEffect, useState } from 'react'
import cl from './TextSection.module.scss'
import { useSelector } from 'react-redux'
import { GameLogic } from './gameLogic'
import BlurText from './BlurText'

/**
 * 
 * @param {string} text 
 * text which come from api
 */

const Text = ({text}) => {
  const colorsStore = useSelector(state=>state.colorsStore)
  const gameItems = useSelector(state=>state.gameItems)
  const gameStats = useSelector(state=>state.gameStats)

  const [cursor, setCuros] = useState(false)
  const [copyC, setCopyC] = useState(false)

  useEffect(()=>{
    setCuros(false) //close cursor if text is updated or game is finished
  }, [gameItems.text, gameStats.finished])

  useEffect(()=>{
    if(cursor){
      setCopyC(cursor)
    } else {

    }
  }, [cursor])

  return (
    <div className={cl.box} onClick={()=>setCuros(true)}>
      <GameLogic/>
      {cursor ? <div style={{backgroundColor: colorsStore.logo}} id='cursor' className={cl.cursor}/> : <></>}
      <article style={{marginTop: '0px'}}>
        {text.split('').map((e,i)=><span id='letter' style={{color: colorsStore.textU}} key={i}>{e}</span>)}
        {/*spit text to spans to change the color of each letter*/}
      </article>
      {!cursor ? <BlurText cursor={cursor}/> : <></>}
    </div>
  )
}

export default Text