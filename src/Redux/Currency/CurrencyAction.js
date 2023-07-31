import { CURRENCY_REQUEST, CURRENCY_SUCCESS, CURRENCY_FALIURE } from "./CurrencyType.js"
import axios from "axios"

export const currencyRequest = () =>{
    return{
        type: CURRENCY_REQUEST
    }
}

export const currencySuccess = (response) =>{
    return{
        type: CURRENCY_SUCCESS,
        payload: response
    }
}

export const currencyFaliure = (error) =>{
    return{
        type: CURRENCY_FALIURE,
        payload: error
    }
}

const baseUrl = "https://api.currencyapi.com/v3"


export const fetchcurrency = () => {
    return(dispatch) => {
        dispatch(currencyRequest())
        axios.get(`https://v6.exchangerate-api.com/v6/935c6dd0bb7c72c86e0feae8/latest/NGN`)
            .then( response => {
                const data = response.data.conversion_rates
                const currencyArray = Object?.keys(data)?.map(key => ({
                    code: key,
                    ...data[key]
                }));
                dispatch(currencySuccess(currencyArray))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(currencyFaliure(errorMsg))
            })
    }
}
