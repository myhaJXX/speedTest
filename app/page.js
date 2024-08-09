'use client'
import { useDispatch, useSelector } from 'react-redux';
import './App.scss'
import { useEffect } from 'react';
import Filters from './components/Filters/Filters';
import TextSection from './components/TextSection/TextSection';

export default function Home() {
  const disp = useDispatch()
  const colorsStore = useSelector(state=>state.colorsStore)

  useEffect(()=>{
    document.querySelector('body').style.backgroundColor = colorsStore.bg
  }, [colorsStore])


  return (
    <main>
      <Filters/>
      <TextSection/>
    </main>
  );
}
