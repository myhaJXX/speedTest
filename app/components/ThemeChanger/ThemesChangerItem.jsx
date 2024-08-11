import React from 'react'
import ThemeButton from '../ThemeButton/ThemeButton'
import { useDispatch, useSelector } from 'react-redux'

/**
 * 
 * @param {string} title 
 * @param {object} colors 
 * line of theme
 * if clicked theme of SPA will change
 */

const ThemesChangerItem = ({title, colors}) => {
    const dis = useDispatch()
    const colorsStore = useSelector(state=>state.colorsStore)
  return (
    <article onClick={()=>{
      dis({type: 'changeColors', payload: colors})
      localStorage.setItem('colors', JSON.stringify(colors)) //save colors theme in localstorage
    }}>
        <h4 style={{color: colorsStore.textA, cursor: 'pointer'}}>{title}</h4>
        <ThemeButton colors={colors}/> {/*component which conain colors info about theme*/}
    </article>
  )
}

export default ThemesChangerItem