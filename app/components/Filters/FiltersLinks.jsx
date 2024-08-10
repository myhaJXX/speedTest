import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import cl from './Filters.module.scss'

const FiltersLinks = ({links, type}) => {
    const dis = useDispatch()
    const filtersStore = useSelector(state=>state.filtersStore)
    const colorsStore = useSelector(state=>state.colorsStore)
    const refreshText = useSelector(select => select.refreshText)
  return (
    <div className={cl.box}>
        {links.map((e,i)=>
            <p style={{color: filtersStore[`${type}`] == e ? colorsStore.textA : colorsStore.textU}}
            onClick={()=>{
              dis({type:'changeFilters', payload: {...filtersStore, [`${type}`]: e}})
              dis({type: 'refreshText', payload: !refreshText})
            }}
            key={i}>
                {e}
            </p>
        )}
    </div>
  )
}

export default FiltersLinks