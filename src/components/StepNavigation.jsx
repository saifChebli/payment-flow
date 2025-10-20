import React from 'react'
import { usePayment } from '../context/PaymentContext'
import Button from '../ui/Button'

const StepNavigation = () => {

    const { state , dispatch } = usePayment()

    console.log(state)


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
            <Button>
              {state.loading ? "Processing..." : "Pay & Confirm"}
            </Button>
          )
        }
       


    </div>
  )
}

export default StepNavigation