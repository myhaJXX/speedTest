import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import cl from './Filters.module.scss'

/**
 * 
 * @param {Array} links 
 * @param {string} type 
 * @returns {Component}
 */

const FiltersLinks = ({links, type}) => {
    const dis = useDispatch()
    const filtersStore = useSelector(state=>state.filtersStore)
    const colorsStore = useSelector(state=>state.colorsStore)
    const refreshText = useSelector(select => select.refreshText)
  return (
    <div className={cl.box}>
        {links.map((e,i)=> //create links in every section of the box
            <p 
            style={{color: filtersStore[`${type}`] == e ? colorsStore.textA : colorsStore.textU}}
            onClick={()=>{
              dis({type:'changeFilters', payload: {...filtersStore, [`${type}`]: e}}) //change active filters
              dis({type: 'refreshText', payload: !refreshText}) //refresh text
            }} key={i}
            >{e}</p>
        )}
    </div>
  )
}

export default FiltersLinks