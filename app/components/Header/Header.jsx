'use client'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from './header.module.scss'

const Header = () => {
  const dis = useDispatch()
  const colorsStore = useSelector(state=>state.colorsStore)
  const result = useSelector(state=>state.gameStats)
  return (
    <header>
        <div className={cl.logo} onClick={()=>{
          dis({type: 'changeColors', payload: {...colorsStore}})
          dis({type: 'changeGameStats', payload: {...result, finished: false}})
        }}>
          <FontAwesomeIcon icon={faKeyboard} color={colorsStore.logo}/>
          <h3 style={{color: colorsStore.logo}}>MJXTyping</h3>
        </div>
    </header>
  )
}

export default Header