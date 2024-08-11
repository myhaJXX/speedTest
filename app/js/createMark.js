//types
const marks = {
    veryLow: 20,
    low: 30,
    normal: 40,
    good: 50,
    nice: 60,
    veryGood: 70,
    fast: 80
}
/**
 * 
 * @param {number} wpm 
 * @returns {key}
 */

const createMark = (wpm) => {
    let res = 'veryLow';
    for(let key in marks){
        if(wpm >= marks[`${key}`]) res = key //Find the required key
    }
    return res
}

module.exports = createMark