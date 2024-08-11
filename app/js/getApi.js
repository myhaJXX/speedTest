import axios from "axios"
/**
 * 
 * @param {object} params 
 * @returns {string}
 */
export const getText = async (params)=>{

    try{
        const response = await axios.get('https://fish-text.ru/get?&type=sentence&number=6') //get 6 sentences
        let text = response.data.text
        
        if(params.punctuation === 'without'){
            text = text.replaceAll(/,|\.|!|\?|\(|\)|-|—|:/g, '') //delete all punctuation
            text = text.toLowerCase()
        }
    
        if(params.type === 'words'){
            text = text.split(' ').slice(0, params.restrictions).join(' ') //separate the required number of words
        }
        
        return text
    } catch(e){
        return 'We apologize, there is no way to connect to the API'
    }
}