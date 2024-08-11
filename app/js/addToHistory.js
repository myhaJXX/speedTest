/**
 * @param {object} item 
 */
export const addToHis = (item) => {
    let oldHis = JSON.parse(localStorage.getItem('history'))
    if(oldHis && oldHis.length == 10) oldHis.shift() //10 - limit; delete first and push
    localStorage.setItem('history', JSON.stringify(oldHis ? [...oldHis, item] : [item])) //save it
}