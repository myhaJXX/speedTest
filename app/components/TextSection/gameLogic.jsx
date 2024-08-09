    //fix backspace
    //fix color theme
    //fix time
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import cl from './TextSection.module.scss'
import { countStat } from "@/app/js/countStat"

export const GameLogic = ()=>{
    const dis = useDispatch()
    const gameItems = useSelector(state=>state.gameItems)
    const colorsStore = useSelector(state=>state.colorsStore)
    const gameStats = useSelector(state=>state.gameStats)

    const [timeS, setTimeS] = useState()

    const [id, setId] = useState(0) //id of active letter
    const [userText, setUserText] = useState('') //active text

    const [totalMistakes, setTotalMistakes] = useState(0)

    const [start, setStart] = useState(false)

    //change color
    const changeColor = (id, color)=>{
        /*
        after reload we have
        id == userText.length
        this functions works like u trying to delete first symbol
        we check if id == -1, than we close this function
        */
        if(!(id+1) || id >= gameItems.text.length) return 
        let letters = document.querySelectorAll('#letter')
        letters[id].setAttribute('style', `color: ${color}`)
    }
    //check and change color of letter
    useEffect(()=>{
        let length = document.querySelectorAll('#letter').length
        if(length){
            id < userText.length ? (
                userText[id] === gameItems.text[id] ? changeColor(id, colorsStore.textA) : changeColor(id, colorsStore.textUncorrect)
            ) : changeColor(id - 1, colorsStore.textU)
        }
        //if we see mistake start function which will find and place mistake
        if(userText[id] != gameItems.text[id] && userText){
            if(id < userText.length) setTotalMistakes(totalMistakes+1)
        }

        setId(userText.length)
        setStart(true) 
        console.log(gameStats)
    }, [userText])

    useEffect(()=>{ 
        let ele = document.querySelectorAll('#letter')[id]
        let cursor = document.querySelector('#cursor')
        if(ele && cursor){
            //cursor is located to the right of the next letter
            //we need to move it down
            if(cursor.getBoundingClientRect().top < ele.getBoundingClientRect().top){
                let top = document.querySelector(`.${cl.box}>article`).style.marginTop
                top = Number(top.slice(0, top.indexOf('p')))
                document.querySelector(`.${cl.box}>article`).style.marginTop = top - 50 + 'px'
            }
            //move cursor to next letter
            let left = ele.getBoundingClientRect().left - document.querySelector(`.${cl.box}`).getBoundingClientRect().left
            cursor.style.left = `${left}px`
        }

        if(id == gameItems.text.length && cursor){
            document.querySelector('textarea').setAttribute('disabled', 'true') //off textarea
            let timeE = new Date().getTime()
            dis({
                type: 'changeGameStats', 
                payload: 
                countStat(gameStats, totalMistakes, colorsStore.textA, timeS, timeE, gameItems.text.split(' ').length, gameItems.text, userText)
            })
            setStart(false)
        }
    }, [id])

    useEffect(()=>{
        //clear all game after changes
        setId(0)
        setUserText('')
        setStart(false)
        setTotalMistakes(0)
        document.querySelectorAll('#letter').forEach((e,i)=>{
            if(i>=0) e.style.color = colorsStore.textU
        })
        document.querySelector(`.${cl.box}>article`).style.marginTop = 0+'px'
        

        document.querySelector('textarea').removeAttribute('disabled')
    }, [gameItems.text])

    useEffect(()=>{
        if(start){
            setTimeS(new Date().getTime())
        }
    }, [start])
    
    //...
    return  <textarea value={userText} 
            onChange={(e)=>setUserText(e.target.value)}
            onBlur={()=>dis({type: 'changeColors', payload: {...colorsStore}})}/>
}