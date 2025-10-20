import React from 'react'
import { usePayment } from '../context/PaymentContext'
import { User , CreditCard , Eye , Check } from 'lucide-react'

const ProgressBar = () => {

    const { state } = usePayment()

    const steps = [
        { icon : User , label : "Customer" },
        { icon : CreditCard , label : "Payment" },
        { icon : Eye , label : "Review" },
        { icon : Check , label : "Done" }
    ]
  return (
    <div className='flex items-center gap-4 mb-6'>
        {
            steps.map(step => {
                const Icon = step.icon
                return (
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center'>
                        <Icon size={18} />
                    </div>
                    <div className='text-sm text-gray-600'>{step.label}</div>
                </div>
                )
            })
        }
    </div>
  )
}

export default ProgressBar