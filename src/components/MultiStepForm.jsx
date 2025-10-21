import React from 'react'
import ProgressBar from './ProgressBar'
import StepNavigation from './StepNavigation'
import CustomerStep from './paymentSteps/CustomerStep'
import PaymentStep from './paymentSteps/PaymentStep'
import { PaymentProvider } from '../context/PaymentContext'
import Card from '../ui/Card'
import { usePayment } from '../context/PaymentContext'
import ReviewStep from './paymentSteps/ReviewStep'
import SuccessStep from './paymentSteps/SuccessStep'


const StepContent = () => {
    const { state } = usePayment()

    switch (state.step) {
        case 1: return <CustomerStep />
        case 2: return <PaymentStep />
        case 3: return <ReviewStep />
        case 4: return <SuccessStep />
        default: return null
    }
}


const MultiStepForm = () => {

    

  return (
    <PaymentProvider>
        <div className='max-w-3xl mx-auto p-4'>
            <Card className='overflow-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                      <div className='p-4 flex flex-col w-full justify-between'>
                        <div>

                        
                            <h1 className='text-2xl font-bold mb-2'>Checkout</h1>
                            <p>Secure payment - Demo mode</p>

                                <div className='mt-4 flex-1 w-full'>

                                    <ProgressBar />
                                    <div className='border border-gray-200 rounded p-4 bg-gray-50'>
                                        <StepContent />
                                        <StepNavigation />
                                    </div>
                                </div>
                        
                        </div>
                      </div>
                                {/* <aside className='p-4 bg-gradient-to-b from-white to-indigo-50 rounded-lg'>
                                    <div>
                                        <h3>Order summary</h3>
                                        <div>Premium Plan</div>
                                        <div>$29.99</div>
                                    </div>
                                    <div>
                                        <h3>Payment tips</h3>
                                        <ul>
                                            <li>Use test card : <span>4242 4242 4242 4242</span></li>
                                        </ul>
                                    </div>
                                </aside>
                */}
                       
                 </div>
            </Card>
        </div>
    </PaymentProvider>
  )
}

export default MultiStepForm