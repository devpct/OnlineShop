import { createContext , useState } from "react"

export const WrapperContext = createContext()
export const SignupFormContext = createContext()

const FormProvider = ({ children }) => {

    const [wrapper , setWrapper] = useState({})
    const [signupForm, setSignupForm] = useState({})

    return(
        <WrapperContext.Provider value={setWrapper}>
        <SignupFormContext.Provider value={setSignupForm}>
            {children}
        </SignupFormContext.Provider>
        </WrapperContext.Provider>
    )
}

export default FormProvider


