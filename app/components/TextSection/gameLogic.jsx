import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import cl from './TextSection.module.scss'

export const GameLogic = ({text})=>{
    const gameItems = useSelector(state=>state.gameItems)
    const colorsStore = useSelector(state=>state.colorsStore)

    const [id, setId] = useState(0)
    const [userText, setUserText] = useState('')

    const changeColor = (id, color)=>{
        let letters = document.querySelectorAll('#letter')
        letters[id].setAttribute('style', `color: ${color}`)
    }

    useEffect(()=>{
        let length = document.querySelectorAll('#letter').length
        if(length){
            id < userText.length ? (
                userText[id] === gameItems.text[id] ? changeColor(id, colorsStore.textA) : changeColor(id, 'red')
            ) : changeColor(id - 1, colorsStore.textU)
        }
        setId(userText.length)
    }, [userText])

    useEffect(()=>{ 
        let ele = document.querySelectorAll('#letter')[id]
        
        if(ele){
            let cursor = document.querySelector('#cursor')
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
    }, [id])

    return <textarea value={userText} onChange={(e)=>setUserText(e.target.value)}></textarea>
}