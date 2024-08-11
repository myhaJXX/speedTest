import React from 'react'
import { useSelector } from 'react-redux'
import GameResultCard from './GameCard/GameResultCard'

/**
 *
 * @param {string} title
 * @param {Array} parameters 
 * parameters - array characterizing this side
 */

const GameResultBox = ({title, parameters}) => {
    const colorsStore = useSelector(state => state.colorsStore)
    const results = useSelector(state => state.gameStats)
    //push side with cards with parameters
  return (
    <div>
        <h2 style={{color: colorsStore.logo}}>{title}</h2>
        {parameters.map((e,i)=><GameResultCard title={e} parameter={results[`${e}`]} key={i}/>)}
    </div>
  )
}

export default GameResultBox