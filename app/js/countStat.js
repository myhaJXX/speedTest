import { getWordsId } from "./getWordsIs";

export const countStat = (gameStats, mistakes, color, timeS, timeE, total, textN, textU) => {
    //let mistakesCount = mistakes.filter(e=>e!=0).length //filter array and get his length (filter: only ceils with mistakes)
    let totalWords = textN.slice(0, textU.length).split(" ").length
    let correctLetters = 0;

    let letIDs = getWordsId(textU.split(" "))

    let uncorrectWords = 0

    for(let i = 1;i<letIDs.length;i++){
        if(textN.slice(letIDs[i-1], letIDs[i]) !== textU.slice(letIDs[i-1], letIDs[i])) uncorrectWords++
    }

    //if we use .setAttribute hex convert in rgb
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const rgb = `rgb(${r}, ${g}, ${b})`

    let letters = document.querySelectorAll('#letter')
    letters.forEach(e=>{
        if(rgb == e.style.color) correctLetters++ //count correct letters
    })
    
    const acc = Number((correctLetters / (mistakes + correctLetters)).toFixed(2)) * 100 + '%' //find accuracy by pattern 0.00
    const time = Number(((timeE - timeS) / 1000).toFixed(2))
    const wpm = Number(((textU.length / 5 - uncorrectWords) / time * 60).toFixed(2)) //average word.length ~~5 letters
    const rwa = Number((textU.length / time * 60 / 5).toFixed(2))

    return  {
        ...gameStats, 
        total: totalWords, 
        failed: uncorrectWords,
        totalFailed: mistakes,
        acc, 
        finished: true,
        time,
        wpm,
        rwa
    }
}