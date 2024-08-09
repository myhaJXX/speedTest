import React from 'react'
import { useSelector } from 'react-redux'
import GameResultCard from './GameCard/GameResultCard'

const GameResultBox = ({title, parameters}) => {
    const colorsStore = useSelector(state => state.colorsStore)
    const results = useSelector(state => state.gameStats)
  return (
    <div>
        <h2 style={{color: colorsStore.logo}}>{title}</h2>
        {parameters.map((e,i)=><GameResultCard title={e} parameter={results[`${e}`]}key={i}/>)}
    </div>
  )
}

export default GameResultBox