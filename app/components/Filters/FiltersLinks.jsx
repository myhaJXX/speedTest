import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import cl from './Filters.module.scss'

const FiltersLinks = ({links, type}) => {
    const disp = useDispatch()
    const filtersStore = useSelector(state=>state.filtersStore)
    const colorsStore = useSelector(state=>state.colorsStore)
  return (
    <div className={cl.box}>
        {links.map((e,i)=>
            <p style={{color: filtersStore[`${type}`] == e ? colorsStore.textA : colorsStore.textU}}
            onClick={()=>disp({type:'changeFilters', payload: {...filtersStore, [`${type}`]: e}})}
            key={i}>
                {e}
            </p>
        )}
    </div>
  )
}

export default FiltersLinks