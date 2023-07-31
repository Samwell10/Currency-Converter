import { CURRENCY_REQUEST, CURRENCY_SUCCESS, CURRENCY_FALIURE } from "./CurrencyType.js"

const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const currencyReducer = (state = initialState, action) => {
    switch(action.type){
        case CURRENCY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case CURRENCY_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case CURRENCY_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
