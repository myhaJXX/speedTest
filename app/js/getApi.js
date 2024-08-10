//params: object
import axios from "axios"
export const getText = async (params)=>{
    // console.log(params)
    try{
        const response = await axios.get('https://fish-text.ru/get?&type=sentence&number=6')
        let text = response.data.text
    
        if(params.punctuation === 'without'){
            text = text.replaceAll(/,|\.|!|\?|\(|\)|-|—|:/g, '')
            text = text.toLowerCase()
        }
    
        if(params.type === 'words'){
            text = text.split(' ').slice(0, params.restrictions).join(' ')
        }
        // text = params.words ? text.split(" ").slice(0,params.words).join(' ') : text
        // console.log(text)
        return text
    } catch(e){
        return 'We apologize, there is no way to connect to the API'
    }
}