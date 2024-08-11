    //fix backspace
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import cl from './TextSection.module.scss'
const countStat = require('@/app/js/countStat')
import { addToHis } from "@/app/js/addToHistory"

export const GameLogic = ()=>{
    const dis = useDispatch()
    const gameItems = useSelector(state=>state.gameItems)
    const colorsStore = useSelector(state=>state.colorsStore)
    const filtersStore = useSelector(state => state.filtersStore)
    const refreshText = useSelector(select => select.refreshText)

    const [timeS, setTimeS] = useState() //contains start time

    const [timeoutStarted, setTimeoutStarted] = useState(true) //contain information about whether the timer is enabled

    const [timer, setTimer] = useState() //will contain setTimeout, and we can clear it when we need

    const [id, setId] = useState(0) //id of active letter
    const [userText, setUserText] = useState('') //active text

    const [totalMistakes, setTotalMistakes] = useState(0) //amout of all mistakes

    const [start, setStart] = useState(false) //true when the first letter is entered

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
            ) : changeColor(id - 1, colorsStore.textU) //textU when backspace
        }
        //if we see mistake start function which will find and place mistake
        if(userText[id] != gameItems.text[id] && userText){
            //the second condition discards character deletions
            if(id < userText.length) setTotalMistakes(totalMistakes+1) 
        }

        setId(userText.length) //change active letterId
        setStart(true) //game is started
    }, [userText])

    //move cursor
    useEffect(()=>{ 
        let ele = document.querySelectorAll('#letter')[id]
        let cursor = document.querySelector('#cursor')
        let cursorHeight = window.innerWidth <= 550 ? 32.8 : 50

        if(ele && cursor){
            //cursor is located to the left of the next letter
            //we need to move it down
            if(cursor.getBoundingClientRect().top < ele.getBoundingClientRect().top){ //if you need to go down a line
                console.log('down')
                let top = document.querySelector(`.${cl.box}>article`).style.marginTop
                top = Number(top.slice(0, top.indexOf('p')))
                document.querySelector(`.${cl.box}>article`).style.marginTop = top - cursorHeight + 'px' //move
            }

            else if(cursor.getBoundingClientRect().top > ele.getBoundingClientRect().top){ //if you need to go up a line
                console.log('top')
                let top = document.querySelector(`.${cl.box}>article`).style.marginTop
                top = Number(top.slice(0, top.indexOf('p')))
                document.querySelector(`.${cl.box}>article`).style.marginTop = top + cursorHeight + 'px' //move
            }
            //move cursor to the next letter
            let left = ele.getBoundingClientRect().left - document.querySelector(`.${cl.box}`).getBoundingClientRect().left
            cursor.style.left = `${left}px`
        }
        //cursor at the end of the text
        if(id == gameItems.text.length && cursor){
            document.querySelector('textarea').setAttribute('disabled', 'true') //off textarea
            let timeE = new Date().getTime() //get time of the end
            //change stats
            dis({
                type: 'changeGameStats', 
                payload: 
                countStat(totalMistakes, colorsStore.textA, timeS, timeE, gameItems.text, userText)
            })
            setStart(false)
            addToHis(countStat(totalMistakes, colorsStore.textA, timeS, timeE, gameItems.text, userText)) //add to localstorage stats
        }
    }, [id])

    useEffect(()=>{
        //clear all game after changes
        setTimer(clearTimeout(timer))
        setId(0)
        setUserText('')
        setStart(false)
        setTotalMistakes(0)
        setTimeoutStarted(true)
        document.querySelectorAll('#letter').forEach((e,i)=>{
            if(i>=0) e.style.color = colorsStore.textU
        })
        document.querySelector(`.${cl.box}>article`).style.marginTop = 0+'px'
        document.querySelector('textarea').removeAttribute('disabled')

    }, [gameItems.text])

    useEffect(()=>{
        if(start){
            setTimeS(new Date().getTime()) //start clock
            if(filtersStore.type === 'time'){
                let timeE = Number(filtersStore.restrictions) * 1000 //set end time

                if(document.querySelector('textarea') == document.activeElement){
                    setTimer(
                        setTimeout(()=>{
                            setStart(false)
                            setTimeoutStarted(false)
                        }, timeE)
                    )
                    //We put a timeout in the state so that it can be stopped at any time
                    //can’t set a variable because the value will disappear when redrawn
                }
            }
        }
    }, [start])

    useEffect(()=>{
        if(!timeoutStarted){ //when timer is ended
            let timeE = Number(filtersStore.restrictions) * 1000 //from s to ms
            dis({
                type: 'changeGameStats', 
                payload: 
                countStat(totalMistakes, colorsStore.textA, 0, timeE, gameItems.text, userText)
            })
            addToHis(countStat(totalMistakes, colorsStore.textA, 0, timeE, gameItems.text, userText)) //add to localstorage
        }
    }, [timeoutStarted])
    
    //...
    return  <textarea value={userText} 
            onChange={(e)=>setUserText(e.target.value)}
            onBlur={()=>dis({type: 'refreshText', payload: !refreshText})}/>
    //change => change text of user
    //value => text of user
    //unfocus => refresh game
}