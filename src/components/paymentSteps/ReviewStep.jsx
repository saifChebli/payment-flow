import React from 'react'
import { usePayment } from '../../context/PaymentContext'

const ReviewStep = () => {

  const { state : { customer , payment , error } } = usePayment()

  // const { customer , payment , error } = state

  return (
    <div>
        <h3 className='text-lg font-semibold'>Review</h3>
        {error && <div className='bg-red-50 text-red-700 mb-3 p-3'>{error}</div>}
        <div className='mb-4'>
            <h2 className='text-sm text-gray-500'>Customer</h2>
            <h2 className='font-medium'>Full name : {customer.fullName}</h2>
            <h2 className='text-xs text-gray-500'>Email : {customer.email} </h2>
        </div>

        <div>
            <h2 className='text-sm text-gray-500'>Payment</h2>
            <h2 className='font-medium'>Card Number : {payment.cardNumber}</h2>
            <h2 className='text-xs text-gray-500'>Expiry : {payment.expiry}</h2>
        </div>
    </div>
  )
}

export default ReviewStep