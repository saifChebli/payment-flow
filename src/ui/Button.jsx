import React from 'react'

const Button = ({children , disabled = false , type = 'button' , onClick}) => {
  return (
    <button 
        type={type}
        disabled={disabled}
        onClick={onClick}
        className='items-center rounded-md px-4 py-2 shadow-sm font-medium cursor-pointer'
    >
        {children}
    </button>
  )
}

export default Button