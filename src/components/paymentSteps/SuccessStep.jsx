import { CheckCircle } from 'lucide-react'
import React from 'react'

const SuccessStep = () => {
  return (
    <div>
        <CheckCircle />
        <h3>Payment successful</h3>
        <p>Receipt : </p>
    </div>
  )
}

export default SuccessStep