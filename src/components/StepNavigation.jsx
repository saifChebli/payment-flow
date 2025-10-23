import React from 'react'
import { usePayment } from '../context/PaymentContext'
import Button from '../ui/Button'
import toast from 'react-hot-toast'

const StepNavigation = () => {

    const { state , dispatch } = usePayment()

    const paymentSubmission = () => {
      dispatch({type : "SUBMIT_START"}) // start the payment process
      // pretend that we are using an API
      setTimeout(() => {
        if(Math.random() > 0.09){
          const receipt = `RCP-${Date.now()}`
          dispatch({type : "SUBMIT_SUCCESS" , payload : { receiptId : receipt }})
          toast.success('Payment successful')
        }else{
          dispatch({type : "SUBMIT_ERROR" , payload : {error : "Card declined"}})
          toast.error('Payment Failed')
        }
      },1500)
    }

  return (
    <div className='mt-6 flex justify-between items-center'>
        <Button
         onClick={() => dispatch({type :"PREV_STEP"})}
         disabled={state.step === 1}
         className='border px-3 py-2 cursor-pointer'
         >
            Back
        </Button>
        {
          state.step < 3 && (
             <Button 
                onClick={() => dispatch({type : "NEXT_STEP"})}
                className='cursor-pointer'
                >
                  Continue
              </Button>
          )
        }

        {
          state.step === 3 && (
            <Button onClick={() => paymentSubmission()}>
              {state.loading ? "Processing..." : "Pay & Confirm"}
            </Button>
          )
        }
       


    </div>
  )
}

export default StepNavigation