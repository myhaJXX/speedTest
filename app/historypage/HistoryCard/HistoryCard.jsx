import React, { useEffect, useState } from 'react'
import cl from './HistoryCard.module.scss'
import { useSelector } from 'react-redux'

const HistoryCard = ({info}) => {
    const colorsStore = useSelector(select => select.colorsStore)
    const [objArr, setObjArr] = useState([])

    useEffect(()=>{
        let newArr = []
        for(let key in info){
            newArr = [...newArr, {title: key, info: info[`${key}`]}]
        }
        setObjArr(newArr.slice(0,newArr.length - 1))
    }, [])
  return (
    <article className={cl.card} style={{borderColor: colorsStore.bgD}}>
        {objArr.map((e,i)=>{
            return  <div key={i}>
                        <h4 style={{color: colorsStore.textU}}>{e.title.toUpperCase()}</h4>
                        <p style={{color: colorsStore.textA}}>{e.info}</p>
                    </div>
        })}
    </article>
  )
}

export default HistoryCard