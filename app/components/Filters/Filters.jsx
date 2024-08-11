import React from 'react'
import { useSelector } from 'react-redux';
import cl from './Filters.module.scss'
import FiltersLinks from './FiltersLinks';

/*
cont ainer of the links 
on the top of screen
*/

const Filters = () => {

    const colorsStore = useSelector(state=>state.colorsStore)

  return (
    <aside style={{backgroundColor: colorsStore.bgD}} className={cl.cont}>
        <FiltersLinks links={['punctuation', 'without']} type='punctuation' key='p'/>
        <hr style={{backgroundColor: colorsStore.bg}}/>
        <FiltersLinks links={['words', 'time']} type='type' key='t'/>
        <hr style={{backgroundColor: colorsStore.bg}}/>
        <FiltersLinks links={['5', '15', '30', '45']} type='restrictions' key='r'/>
    </aside>
  )
}

export default Filters