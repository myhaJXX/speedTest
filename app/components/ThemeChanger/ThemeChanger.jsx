'use client'
import React from 'react'
import { themes } from '@/app/static/theme/theme'
import { useDispatch, useSelector } from 'react-redux'
import ThemesChangerItem from './ThemesChangerItem'
import cl from './ThemeChanger.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const ThemeChanger = () => {
    const colorsStore = useSelector(state=>state.colorsStore)
    const active = useSelector(state=>state.changeWindow)
    const dis = useDispatch()
  return (
    <section className={cl.cont} onClick={()=>dis({type:'changeWindow', payload: false})}>
        <div onClick={(e)=>e.stopPropagation()} className={cl.box} style={{backgroundColor: colorsStore.bgD}}>
            <FontAwesomeIcon icon={faXmark} color={colorsStore.bg} onClick={()=>dis({type: 'changeWindow', payload: false})}/>
            {themes.map((e,i)=><ThemesChangerItem title={e.title} colors={e.colors} key={i}/>)}
        </div>
    </section>
  )
}

export default ThemeChanger