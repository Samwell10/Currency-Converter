import './Block.css'
import { connect } from 'react-redux';
import sdg from '../../Assets/SGD.png'
import {GiCash} from 'react-icons/gi'
import {HiChevronDown} from 'react-icons/hi'
import {BiTransferAlt} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { fetchcurrency } from '../../Redux/Currency/CurrencyAction';
import { fetchconvert } from '../../Redux/Convert/ConvertAction';
const Block = ({fetchcurrency, currency, fetchconvert, convert}) => {
    const [showBank, setShowBank] = useState(false);
    const [selectcurrency, setSelectCurrency]  = useState("SDG")
    const [showBank2, setShowBank2] = useState(false);
    const [selectcurrency2, setSelectCurrency2]  = useState("USD")
    const [amount, setAmount] = useState(null)
    const handleShow =()=>{
        setShowBank(!showBank)
    }
    const handleSelectedBank = (option) => {
        setSelectCurrency(option)
        fetchcurrency(option)
    };
    const handleShow2 =()=>{
        setShowBank2(!showBank2)
    }
    const handleSelectedBank2 = (option) => {
        setSelectCurrency2(option)
    };
    const handleAmount = (e) =>{
        const value = e.target.value
        let num = parseInt(value)
        setAmount(num)
    } 
    useEffect(()=>{
        fetchcurrency()
        fetchconvert(selectcurrency, selectcurrency2, amount)
    },[amount, selectcurrency, selectcurrency2])
    return ( 
        <div className="block-outer">
            <div className="block">
                <div className="block-amount">
                    <p className="block-amount-head">Amount</p>
                    <div className="block-amount-inner">
                        <div className="amount-inner-left">
                            <div className="country-flag">
                                <GiCash/>
                            </div>
                            <div className="currency-select" onClick={handleShow}>
                                <p>{selectcurrency}</p>
                                <HiChevronDown/>
                            </div>
                            {showBank && (
                                <div className='currency-option'> 
                                    {currency.map((currency)=>{
                                        return(
                                        <p key={currency.code} onClick={()=>{handleShow(); handleSelectedBank(currency.code)}}>{currency.code}</p>
                                    )})}
                                </div>
                            )}
                        </div>
                    
                        <div className="amount-inner-right">
                            <input  
                            type='number'
                            placeholder='0.00'
                            onChange={handleAmount}
                            onBlur={handleAmount}
                            >
                            </input>
                        </div>
                    </div>
                    
                </div>
                <div className="block-amount">
                    <div className="block-base">
                        <div className="block-icon">
                            <BiTransferAlt/>
                        </div>
                    </div>
                    <p className="block-amount-head block-amount-head-2">Converted Amount</p>
                    <div className="block-amount-inner block-amount-inner-2">
                        <div className="amount-inner-left">
                            <div className="country-flag country-flag-2">
                                <GiCash/>
                            </div>
                            <div className="currency-select" onClick={handleShow2}>
                                <p>{selectcurrency2}</p>
                                <HiChevronDown/>
                            </div>
                            {showBank2 && (
                                <div className='currency-option'> 
                                {currency.map((currency)=>{
                                        return(
                                        <p key={currency.code} onClick={()=>{handleShow2(); handleSelectedBank2(currency.code)}}>{currency.code}</p>
                                    )})}
                                </div>
                            )}
                        </div>
                        <div className="amount-inner-right">
                            <input
                            type='number'
                            placeholder='0.00'
                            value={convert.conversion_result}
                            disabled
                            >
                            </input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-footer">
                <p className='main-footer-head'>Indicative Exchange Rate</p>
                <p className='main-footer-text'>1 {selectcurrency} = {convert.conversion_rate} {selectcurrency2}</p>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    return {
        currency: state?.currency?.data,
        convert: state?.convert?.data
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchcurrency: () => dispatch(fetchcurrency()),
        fetchconvert: (selectcurrency, selectcurrency2, amount)=> dispatch(fetchconvert(selectcurrency, selectcurrency2, amount))
        
    };
}; 
export default connect(mapStoreToProps, mapDispatchToProps)(Block);