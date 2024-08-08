'use client'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import cl from './header.module.scss'

const Header = () => {
  const colorsStore = useSelector(state=>state.colorsStore)
  return (
    <header>
        <div className={cl.logo}>
          <FontAwesomeIcon icon={faKeyboard} color={colorsStore.logo}/>
          <h3 style={{color: colorsStore.logo}}>MJXTyping</h3>
        </div>
    </header>
  )
}

export default Header