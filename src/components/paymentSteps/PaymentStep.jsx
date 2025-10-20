import React from 'react'

const PaymentStep = () => {
  return (
    <div>
         <h3 className='text-lg font-semibold mb-3'>Payment Details</h3>
        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Card Number</span>
            <input type="text"   className='block w-full p-2 mt-1 border rounded' placeholder='Enter your card number ...'/>
        </label>

        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Expiry</span>
            <input type="text" className='block w-full p-2 mt-1 border rounded' placeholder='MM/YY'/>
        </label>

          <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>CVC</span>
            <input type="text" className='block w-full p-2 mt-1 border rounded' placeholder='123'/>
        </label>
    </div>
  )
}

export default PaymentStep