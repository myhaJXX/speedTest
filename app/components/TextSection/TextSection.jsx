'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import cl from './TextSection.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { getText } from '@/app/js/getApi'

const TextSection = () => {
    const colorsStore = useSelector(state=>state.colorsStore)
    const filtersStore = useSelector(state=>state.filtersStore)

    useEffect(()=>{
        getText(filtersStore)
    }, [filtersStore])
  return (
    <section className={cl.cont}>
        <div></div>
        <FontAwesomeIcon icon={faRepeat} color={colorsStore.textU}/>
    </section>
  )
}

export default TextSection