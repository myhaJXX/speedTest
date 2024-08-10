import React from 'react'
import cl from './GameResultCard.module.scss'
import { useSelector } from 'react-redux'

import { transcriber } from '@jsStatic/transcriber'

const GameResultCard = ({title, parameter}) => {
  const colorsStore = useSelector(state => state.colorsStore)
  return (
    <article className={cl.card} style={{borderColor: colorsStore.bgD}}>
        <h4 style={{color: colorsStore.textU}}>{transcriber[`${title}`]}</h4>
        <hr style={{backgroundColor: colorsStore.bgD}}/>
        <p style={{color: colorsStore.textA}}>{parameter}</p>
    </article>
  )
}

export default GameResultCard