import React from 'react'
import ThemeButton from '../ThemeButton/ThemeButton'
import { useDispatch, useSelector } from 'react-redux'

const ThemesChangerItem = ({title, colors}) => {
    const dis = useDispatch()
    const colorsStore = useSelector(state=>state.colorsStore)
  return (
    <article onClick={()=>{
      dis({type: 'changeColors', payload: colors})
      localStorage.setItem('colors', JSON.stringify(colors)) //save local colors
    }}>
        <h4 style={{color: colorsStore.textA, cursor: 'pointer'}}>{title}</h4>
        <ThemeButton colors={colors}/>
    </article>
  )
}

export default ThemesChangerItem