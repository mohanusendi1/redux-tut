import {ADD_BUG} from '../constants'

const initialState ={
    cardData=[]
}

export default function cardReducer(state=initialState,action){

    switch (action.type) {
        case ADD_BUG:
            return{
                ...state,
                cardData:action.data
            }
            break;
    
        default:
            return state
            break;
    }
}