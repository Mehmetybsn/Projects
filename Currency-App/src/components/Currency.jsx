import React, { useState } from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
const APİ_KEY = "fca_live_9N8EbXxWKNd9olV93ZzfEppGvEd7SVrkqTDwiM4h"


function Currency() {

    const[amount, setAmount] = useState(1)
    const[fromCurrency,setFromCurrency] = useState('USD')
    const[toCurrency,setToCurrency] = useState('TRY')
    const[result, setResult] = useState(0)

    const exChange= async ()=> {
        const response = await axios.get(`${BASE_URL}?apikey=${APİ_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2)
        setResult(result)
    }


  return (
    <div className='currency-div'>

        <div style={{ width:"100%", backgroundColor:"black", color:"white"}}>
            <h3 >DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div>
            <input value={amount} onChange={(e)=> setAmount(e.target.value) } type="number" className='amount'/>
            <select onChange={ (e) => {setFromCurrency(e.target.value)}} className='from-currency-option'>
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <FaRegArrowAltCircleRight style={ { fontSize: "25px" , marginRight: "10px"} }/>
            
            <select onChange={(e)=> {setToCurrency(e.target.value)} } className='to-currency-option'>
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <input value={result} type="number" className='result' />
        </div>

        <div >
            <button    onClick={exChange} className='exchange-button'>Çevir</button>
        </div>

        </div>
  )
}

export default Currency