import React from 'react'
import { usePayment } from '../../context/PaymentContext'

const CustomerStep = () => {

const { state : { customer }, dispatch } = usePayment()

// const { customer } = state

console.log(customer)

const handleChange = (e) => {
  dispatch({ type : "SET_INPUT" , payload : { section : "customer" , name : e.target.name , value : e.target.value }})
}


  return (
    <div>
        <h3 className='text-lg font-semibold mb-3'>Customer Information</h3>
        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Full name</span>
            <input type="text" name='fullName' onChange={handleChange}  value={customer.name} className='block w-full p-2 mt-1 border border-gray-200 rounded' placeholder='Enter your fullname ...'/>
        </label>

        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Email</span>
            <input type="email" name='email' value={customer.email} onChange={handleChange} className='block w-full p-2 mt-1 border border-gray-200 rounded' placeholder='Enter your email ...'/>
        </label>
    </div>
  )
}

export default CustomerStep