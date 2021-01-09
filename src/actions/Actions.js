import {CHAT_AREA} from '../types/types'

export const showChatAction =(data)=>{
    return{
        type: CHAT_AREA,
        payload: {
            data: data
        }
    }
}