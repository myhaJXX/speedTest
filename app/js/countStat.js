const getWordsId = require('./getWordsIs')

/**
 * @param {int} mistakes amount of failed symbols
 * @param {string} color correct letter
 * @param {int} timeS start time
 * @param {int} timeE end time
 * @param {string} textN default text
 * @param {string} textU user text
 * @returns {object}
 * return statistic
 */

const countStat = (mistakes, color, timeS, timeE, textN, textU) => {
    let totalWords = textN.slice(0, textU.length).split(" ").length //we need to count only words which have place in user Text
    let correctLetters = 0;
    let letIDs = getWordsId(textU.split(" ")) //get start id of every word (user text because it is shorter)
    let uncorrectWords = 0

    for(let i = 1;i<letIDs.length;i++){
        if(textN.slice(letIDs[i-1], letIDs[i]) !== textU.slice(letIDs[i-1], letIDs[i])) uncorrectWords++
        //calculate uncorrect words
    }

    //if we use .setAttribute hex convert in rgb
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const rgb = `rgb(${r}, ${g}, ${b})` //convert it back

    let letters = document.querySelectorAll('#letter')
    letters.forEach(e=>{
        if(rgb == e.style.color) correctLetters++ //count correct letters
    })
    
    let accNumber = Number((correctLetters / (mistakes + correctLetters))) //0/0 if change browser tab
    const acc = (accNumber ? accNumber : 0 * 100).toFixed(2) + '%' //find accuracy by pattern 0.00
    const time = Number(((timeE - timeS) / 1000).toFixed(2))
    const wpm = Number(((textU.length / 5 - uncorrectWords) / time * 60).toFixed(2)) //average word.length ~5 letters
    const rwa = Number((textU.length / time * 60 / 5).toFixed(2))

    return  {
        total: totalWords, 
        failed: uncorrectWords,
        totalFailed: mistakes,
        acc, 
        finished: true,
        time,
        wpm: wpm < 0 ? 0 : wpm,
        rwa
    }
}

module.exports = countStat