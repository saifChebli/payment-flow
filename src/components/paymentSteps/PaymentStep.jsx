import React from 'react'
import { usePayment } from '../../context/PaymentContext'

const PaymentStep = () => {

  const { state : { payment }, dispatch } = usePayment()
  
  console.log(payment)
  
  const handleChange = (e) => {
    dispatch({ type : "SET_INPUT" , payload : { section : "payment" , name : e.target.name , value : e.target.value }})
  }

  return (
    <div>
         <h3 className='text-lg font-semibold mb-3'>Payment Details</h3>
        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Card Number</span>
            <input type="text" name='cardNumber' onChange={handleChange} value={payment.cardNumber}  className='block w-full p-2 mt-1 border border-gray-200 rounded' placeholder='Enter your card number ...'/>
        </label>

        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Expiry</span>
            <input type="text" name='expiry' onChange={handleChange} value={payment.expiry} className='block w-full p-2 mt-1 border border-gray-200 rounded' placeholder='MM/YY'/>
        </label>

          <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>CVC</span>
            <input type="text" name='cvc' onChange={handleChange} value={payment.cvc} className='block w-full p-2 mt-1 border border-gray-200 rounded' placeholder='123'/>
        </label>
    </div>
  )
}

export default PaymentStep