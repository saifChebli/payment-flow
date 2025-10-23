import { CheckCircle } from 'lucide-react'
import React from 'react'
import { usePayment } from '../../context/PaymentContext'

const SuccessStep = () => {

  const {state : { receiptId }} = usePayment()

  return (
    <div className='text-center'>
        <CheckCircle className='mx-auto' />
        <h3 className='text-xl font-semibold'>Payment successful</h3>
        <p className='mt-2 text-sm text-gray-600'>Receipt : {receiptId}</p>
    </div>
  )
}

export default SuccessStep