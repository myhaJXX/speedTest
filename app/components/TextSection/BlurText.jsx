import React from 'react'
import cl from './TextSection.module.scss'
import { useSelector } from 'react-redux'

const BlurText = ({cursor}) => {
    const colorsStore = useSelector(state => state.colorsStore)
  return (
    <div className={cl.blur} style={{color: colorsStore.textA, backgroundColor: colorsStore.bg}}>Click to start</div>
  )
}

export default BlurText