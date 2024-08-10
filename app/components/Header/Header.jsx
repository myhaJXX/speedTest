'use client'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from './header.module.scss'
import HistoryButton from './HistoryButton'
import Link from 'next/link'

const Header = () => {
  const dis = useDispatch()
  const colorsStore = useSelector(state=>state.colorsStore)
  const result = useSelector(state=>state.gameStats)
  const refreshText = useSelector(select => select.refreshText)
  return (
    <header>
        <Link href='/' className={cl.logo} onClick={()=>{
          dis({type: 'refreshText', payload: !refreshText})
          dis({type: 'changeGameStats', payload: {...result, finished: false}})
        }}>
          <FontAwesomeIcon icon={faKeyboard} color={colorsStore.logo}/>
          <h3 style={{color: colorsStore.logo}}>MJXTyping</h3>
        </Link>

        <HistoryButton/>

    </header>
  )
}

export default Header