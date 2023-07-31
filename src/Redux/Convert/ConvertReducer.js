import { CONVERT_REQUEST, CONVERT_SUCCESS, CONVERT_FALIURE } from "./CovertType"
const initialState ={
    loading: false,
    data: [],
    error: ''
}

export const convertReducer = (state = initialState, action) => {
    switch(action.type){
        case CONVERT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case CONVERT_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            }
        case CONVERT_FALIURE:
            return{
                loading:false,
                data: [],
                error: action.payload
            }
        default: return state
    }
}
