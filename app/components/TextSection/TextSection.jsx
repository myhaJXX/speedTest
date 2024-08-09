'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from './TextSection.module.scss'
import Text from './Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { getText } from '@/app/js/getApi'

const TextSection = () => {
    const [text, setText] = useState('')
    const gameItems = useSelector(select => select.gameItems)
    const filtersStore = useSelector(select=>select.filtersStore)
    const colorsStore = useSelector(select=>select.colorsStore)

    const dis = useDispatch()

    useEffect(()=>{
      const box = document.querySelector(`.${cl.box}`)
      const changeText = async ()=>{
        box.setAttribute('style', 'opacity: 0;')
        let newText = await getText(filtersStore)
        box.setAttribute('style', 'opacity: 1;')
        setText(newText)
        dis({type: 'changeLetter', payload: {...gameItems, text: newText}})
      }
      changeText()
    }, [filtersStore])


  return (
    <section className={cl.cont}>
        <Text text={text}/>
        <FontAwesomeIcon icon={faRefresh} color={colorsStore.logo}/>
    </section>
  )
}

export default TextSection