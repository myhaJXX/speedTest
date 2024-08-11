'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeChanger from '../components/ThemeChanger/ThemeChanger'
import '../App.scss'
import cl from './history.module.scss'
import HistoryCard from './HistoryCard/HistoryCard'


const page = () => {
  const colorsStore = useSelector(state => state.colorsStore)
  const active = useSelector (state => state.changeWindow)
  const dis = useDispatch()
  useEffect(()=>{
    document.querySelector('body').setAttribute('style', `background-color: ${colorsStore.bg}`) //change bg
  }, [colorsStore])

  useEffect(()=>{
    const colors = JSON.parse(localStorage.getItem('colors')) //get colors from localstorage
    if(colors) dis({type: 'changeColors', payload: {...colors}}) //change theme to saved
  }, [])

  const [history, setHistory] = useState([])

  useEffect(()=>{
    let history = JSON.parse(localStorage.getItem('history')) //get history of attempts from localstorage
    setHistory(history ? history : [])
  }, [])
  return (
    <main>
      {active ? <ThemeChanger/> : <></>}
      <h2 style={{color: colorsStore.logo}}>History</h2>
      <section className={cl.box}>
        {history.map((e,i)=><HistoryCard info={e} key={i}/>)} {/*Push box with attempts*/}
      </section>
    </main>
  )
}

export default page