'use client'

import React, { useEffect, useState } from 'react'
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
    const refreshText = useSelector(select => select.refreshText)

    const dis = useDispatch()

    useEffect(()=>{
      const box = document.querySelector(`.${cl.box}`)
      const changeText = async ()=>{
        box.setAttribute('style', 'opacity: 0;') //hide text
        let newText = await getText(filtersStore) //get text from api
        box.setAttribute('style', 'opacity: 1;') //show text
        setText(newText)
        dis({type: 'changeLetter', payload: {...gameItems, text: newText}}) //update global value with this text
      }
      changeText()
    }, [refreshText])


  return (
    <section className={cl.cont}>
        <Text text={text}/>
        <FontAwesomeIcon icon={faRefresh} color={colorsStore.logo} style={{cursor: 'pointer'}}
        onClick={()=>dis({type:'refreshText', payload: !refreshText})}
        />
        {/*icon which refresh text*/}
    </section>
  )
}

export default TextSection