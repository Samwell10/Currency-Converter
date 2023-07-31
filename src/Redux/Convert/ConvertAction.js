import { CONVERT_REQUEST, CONVERT_SUCCESS, CONVERT_FALIURE } from "./CovertType"
import axios from "axios"

export const convertRequest = () =>{
    return{
        type: CONVERT_REQUEST
    }
}

export const convertSuccess = (response) =>{
    return{
        type: CONVERT_SUCCESS,
        payload: response
    }
}

export const convertFaliure = (error) =>{
    return{
        type: CONVERT_FALIURE,
        payload: error
    }
}

const baseUrl = "http://data.fixer.io/api"


export const fetchconvert = (selectcurrency, selectcurrency2, amount) => {
    return(dispatch) => {
        dispatch(convertRequest())
        axios.get(`https://v6.exchangerate-api.com/v6/935c6dd0bb7c72c86e0feae8/pair/${selectcurrency}/${selectcurrency2}/${amount}`)
            .then( response => {
                const data = response.data
                dispatch(convertSuccess(data))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(convertFaliure(errorMsg))
            })
    }
}
