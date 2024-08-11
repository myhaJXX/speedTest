'use client'
import ThemeButton from '@/app/components/ThemeButton/ThemeButton'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ChangeTheme = () => {
  const dis = useDispatch()
  const colorsStore = useSelector(state=>state.colorsStore)
  const active = useSelector(state=>state.changeWindow)
  //click will open window where u can change theme
  return (
    <div onClick={()=>dis({type: 'changeWindow', payload: !active})}> 
      <ThemeButton colors={colorsStore}/>
    </div>
  )
}

export default ChangeTheme