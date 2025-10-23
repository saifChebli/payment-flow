import { createContext , useContext , useReducer } from "react";


// Step 1 : create a new context
const PaymentContext = createContext()

// Initial state for the reducer

const initialState = {
    step : 1,
    customer : { fullName : "" , email : "" },
    payment: {cardNumber : "" , expiry : "" , cvc : ""},
    receiptId : null,
    error : null,
    loading : false
}

// Reducer function to update the state
//state parameter : current state value
//action : action object that describe what is the action (event) that user will take : { type , payload }
const paymentReducer = (state , action) => {
    switch (action.type) {
        // payload : {section : "customer" | "payment" , name , value}
        case 'SET_INPUT':
            return {
                ...state,
                [action.payload.section] : {
                    ...state[action.payload.section],
                    [action.payload.name] : action.payload.value
                }
            }

        case 'NEXT_STEP':
           return {
             ...state , step : Math.min(4 , state.step + 1)
           }
        case 'PREV_STEP':
            return {
                ...state , step : Math.max(1 , state.step - 1)
            }

        case "SUBMIT_START": 
           return {
                ...state,
                loading : true,
                error :null
           }
        case "SUBMIT_SUCCESS":
            return {
                ...state,
                loading : false,
                step : 4,
                receiptId : action.payload.receiptId
            }
        case "SUBMIT_ERROR":
            return {
                ...state,
                loading : false,
                error : action.payload.error
            }
    
        default:
            state;
    }
}





// Step 2 : Create the Provider Function
export const PaymentProvider = ({children}) => {

const [state , dispatch] = useReducer(paymentReducer , initialState)



    return (
        <PaymentContext.Provider value={{state , dispatch}}>
            {children}
        </PaymentContext.Provider>
    )
}


// Step 3 : Function to consume our context object
export const usePayment = () => useContext(PaymentContext)