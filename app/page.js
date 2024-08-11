'use client'
import { useDispatch, useSelector } from 'react-redux';
import './App.scss'
import { useEffect } from 'react';
import Filters from './components/Filters/Filters';
import TextSection from './components/TextSection/TextSection';
import ThemeChanger from './components/ThemeChanger/ThemeChanger';
import GameResult from './components/GameResult/GameResult';

export default function Home() {
  const dis = useDispatch()
  const colorsStore = useSelector(state=>state.colorsStore)
  const active = useSelector(state=>state.changeWindow)
  const gameStats = useSelector(state => state.gameStats)

  useEffect(()=>{
    document.querySelector('body').style.backgroundColor = colorsStore.bg  //change color of bg at start
  }, [colorsStore])


  useEffect(()=>{    
    let localeColors;
    if(localStorage.getItem('colors')) localeColors = JSON.parse(localStorage.getItem('colors')) //try find color-theme locally
    if(localeColors) dis({type:'changeColors', payload: localeColors}) //change theme
  }, [])

  return (
    <main>
      <Filters/>
      <TextSection/>
      {active ? <ThemeChanger/> : <></>}
      {gameStats.finished ? <GameResult/> : <></>}
    </main>
  );
}
