//params: object
import axios from "axios"
export const getText = async (params)=>{
    console.log(params)
    const response = await axios.get('https://fish-text.ru/get?&type=sentence&number=15')
    let text = response.data.text

    if(params.punctuation === 'without'){
        text = text.replaceAll(/,|\.|!|\?|\(|\)|-|—/g, '')
    }
    // text = params.words ? text.split(" ").slice(0,params.words).join(' ') : text
    console.log(text)
    return text
}