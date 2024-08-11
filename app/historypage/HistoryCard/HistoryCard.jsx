import React, { useEffect, useState } from 'react'
import cl from './HistoryCard.module.scss'
import { useSelector } from 'react-redux'

/**
 * 
 * @param {object} info 
 * info of every attempt
 * 
 */

const HistoryCard = ({info}) => {
    const colorsStore = useSelector(select => select.colorsStore)
    const [objArr, setObjArr] = useState([])
    //convert object of statistics into array of objects containing each parameter
    useEffect(()=>{
        let newArr = []
        for(let key in info){
            if(key === 'finished') continue
            newArr = [...newArr, {title: key, info: info[`${key}`]}]
        }
        setObjArr(newArr.slice(0,newArr.length))
    }, [])
  return (
    <article className={cl.card} style={{borderColor: colorsStore.bgD}}>
        {/*render every object in array*/}
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