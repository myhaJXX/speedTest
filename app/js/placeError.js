/*
id - id of mistake
*/
export const placeError = (placesArr, id, mistakesArr)=>{
    let resultId;
    for(let i = 0; i < placesArr.length; i++){
        //finding id of word where we get mistake
        if(placesArr[i]>id) {
            //we find word which stay after our word
            resultId = i - 1
            break;
        }
    }
    //in cell with mistakes add 1 mistake
    mistakesArr[resultId] += 1
    return mistakesArr
}