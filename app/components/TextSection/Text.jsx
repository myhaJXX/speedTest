import React, { useEffect, useMemo, useState } from 'react'
import cl from './TextSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { GameLogic } from './gameLogic'

const Text = ({text}) => {
  const colorsStore = useSelector(state=>state.colorsStore)
  const gameItems = useSelector(state=>state.gameItems)
  // useEffect(()=>{

  //   if(gameItems.activeLetter > -1){
  //     const nextLetter = document.querySelectorAll('#letter')[gameItems.activeLetter+2]
  //     let cursor = document.querySelector('#cursor')
  //     cursor.style.left = nextLetter.getBoundingClientRect().left + 'px'
  //     console.log(cursor)
  //   }

  // }, [gameItems.activeLetter])

  const [cursor, setCuros] = useState(false)
  return (
    <div className={cl.box} onClick={()=>setCuros(true)}>
      <GameLogic text={text}/>
      {cursor ? <div style={{backgroundColor: colorsStore.logo}} id='cursor'/> : <></>}
      <article style={{marginTop: '0px'}}>
        {text.split('').map((e,i)=><span id='letter' style={{color: colorsStore.textU}} key={i}>{e}</span>)}
      </article>
    </div>
  )
}

export default Text