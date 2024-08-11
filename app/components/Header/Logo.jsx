import React from 'react'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import cl from './header.module.scss'
import Link from 'next/link'

const Logo = () => {
    const dis = useDispatch()
    const colorsStore = useSelector(state=>state.colorsStore)
    const result = useSelector(state=>state.gameStats)
    const refreshText = useSelector(select => select.refreshText)
    //logo of SPA
  return (
    <Link href='/' className={cl.logo} onClick={()=>{
        dis({type: 'refreshText', payload: !refreshText}) //text will refresh
        dis({type: 'changeGameStats', payload: {...result, finished: false}}) //result window will close
      }}>
        <FontAwesomeIcon icon={faKeyboard} color={colorsStore.logo}/>
        <h3 style={{color: colorsStore.logo}}>MJXTyping</h3>
      </Link>
  )
}

export default Logo