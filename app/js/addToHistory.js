export const addToHis = (item) => {
    console.log(item)
    let oldHis = JSON.parse(localStorage.getItem('history'))
    if(oldHis && oldHis.length == 10) oldHis.shift()
    localStorage.setItem('history', JSON.stringify(oldHis ? [...oldHis, item] : [item]))
}