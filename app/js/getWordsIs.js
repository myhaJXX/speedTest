/**
 * 
 * @param {Array} words 
 * array of words
 * @returns {Array}
 */
const getWordsId = (words) =>{
    const dp = new Array(words.length+1).fill(0)
    words.forEach((e,i)=>{
        dp[i+1] = e.length + dp[i] + 1
    })

    //start of next word is ending of previous word + 1
    //where (+1) is space between 2 words
    return dp
}

module.exports = getWordsId