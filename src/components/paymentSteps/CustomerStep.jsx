import React from 'react'

const CustomerStep = () => {
  return (
    <div>
        <h3 className='text-lg font-semibold mb-3'>Customer Information</h3>
        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Full name</span>
            <input type="text"   className='block w-full p-2 mt-1 border rounded' placeholder='Enter your fullname ...'/>
        </label>

        <label className='block mb-3' htmlFor="">
            <span className='text-sm text-gray-600'>Email</span>
            <input type="text" className='block w-full p-2 mt-1 border rounded' placeholder='Enter your email ...'/>
        </label>
    </div>
  )
}

export default CustomerStep