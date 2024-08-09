import React, { useEffect, useMemo, useState } from 'react'
import cl from './TextSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { GameLogic } from './gameLogic'

const Text = ({text}) => {
  const colorsStore = useSelector(state=>state.colorsStore)
  const gameItems = useSelector(state=>state.gameItems)
  const gameStats = useSelector(state=>state.gameStats)

  const [cursor, setCuros] = useState(false)

  useEffect(()=>{
    setCuros(false)
  }, [gameItems.text, gameStats.finished])

  return (
    <div className={cl.box} onClick={()=>setCuros(true)}>
      <GameLogic/>
      {cursor ? <div style={{backgroundColor: colorsStore.logo}} id='cursor'/> : <></>}
      <article style={{marginTop: '0px'}}>
        {text.split('').map((e,i)=><span id='letter' style={{color: colorsStore.textU}} key={i}>{e}</span>)}
      </article>
    </div>
  )
}

export default Text