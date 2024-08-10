import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import cl from './header.module.scss'
import Link from 'next/link'

const HistoryButton = () => {
    const colorsStore = useSelector(state=>state.colorsStore)
  return (
    <Link href='/historypage' className={cl['history-box']}>
        <h4 style={{color: colorsStore.textA}}>history</h4>
        <FontAwesomeIcon icon={faClockRotateLeft} style={{color: colorsStore.textA}}/>
    </Link>
  )
}

export default HistoryButton