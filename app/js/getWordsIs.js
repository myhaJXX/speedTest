export const getWordsId = (words) =>{
    const dp = new Array(words.length+1).fill(0)
    words.forEach((e,i)=>{
        dp[i+1] = e.length + dp[i] + 1
    })

    //start of next word is ending of previous word + 1
    //where (+1) is because space
    return dp
}