import { combineReducers } from "redux";
import { currencyReducer } from "./Currency/CurrencyReducer";
import { convertReducer } from "./Convert/ConvertReducer";

const rootReducer = combineReducers({
    currency: currencyReducer,
    convert: convertReducer
})

export default rootReducer;