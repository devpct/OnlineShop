import { createContext , useState , useEffect } from "react"

export const SignupFormBetContext = createContext()
export const WrapperContext = createContext()
export const SignupFormContext = createContext()
export const LoginFormContext = createContext()
export const LoginTextContext = createContext()
export const SlideTabContext = createContext()
export const TextLoginContext = createContext()
export const TextSignupContext = createContext()
export const SignupDataContext = createContext()
export const ModalContainerContext = createContext()
export const ValueNullBetContext = createContext()
export const AlertunameContext = createContext()


const FormProvider = ({ children }) => {

    const [signupFormBet, setSignupFormBet] = useState()
    const [wrapper , setWrapper] = useState()
    const [signupForm , setSignupForm] = useState()
    const [loginForm , setLoginForm] = useState()
    const [loginText , setLoginText] = useState()
    const [slideTab , setSlideTab] = useState()
    const [textLogin , setTextLogin] = useState()
    const [textSignup , setTextSignup] = useState()
    const [modalContainer , setModalContainer] = useState({display: 'none'})
    const [valueNullBet, setValueNullBet] = useState(false)
    const [alertuname, setAlertuname] = useState({display: 'none'})
    
    useEffect(() => {
          if(signupFormBet){
            setTextLogin({color: '#6f6f6f'})
            setTextSignup({color: 'rgb(35, 35, 35)'})
            setSignupForm({ display: 'block' })
            setLoginForm({ marginLeft: '-45%' })
            setLoginText({ marginLeft: '-50%' })
            setSignupForm({ marginLeft: '0%' })
            setSlideTab({ left: '50%' })
          }else{
            setTextLogin({color: 'rgb(35, 35, 35)'})
            setTextSignup({color: '#6f6f6f'})
            setLoginForm({display: 'block'})
            setSignupForm({ marginLeft: '32%' })
            setWrapper({ marginTop: '12%' })
            setLoginText({marginLeft: '0%'})
            setSlideTab({ left: '0' })
            setTimeout(()=>{
              if (!setSignupFormBet) { 
                setSignupForm({ display: 'none' })
                setWrapper({marginTop: '13%'})
              }
            },300)
          }
    }, [signupFormBet])

    return(
        <SignupFormBetContext.Provider value={[signupFormBet, setSignupFormBet]}>
        <WrapperContext.Provider value={[wrapper , setWrapper]}>
        <SignupFormContext.Provider value={[signupForm , setSignupForm]}>
        <LoginFormContext.Provider value={[loginForm , setLoginForm]}>
        <LoginTextContext.Provider value={[loginText , setLoginText]}>
        <SlideTabContext.Provider value={[slideTab , setSlideTab]}>
        <TextLoginContext.Provider value={[textLogin,setTextLogin]}>
        <TextSignupContext.Provider value={[textSignup,setTextSignup]}>
        <ModalContainerContext.Provider value={[modalContainer,setModalContainer]}>
        <ValueNullBetContext.Provider value={[valueNullBet,setValueNullBet]}>
        <AlertunameContext.Provider value={[alertuname,setAlertuname]}>
            {children}
        </AlertunameContext.Provider>
        </ValueNullBetContext.Provider>
        </ModalContainerContext.Provider>
        </TextSignupContext.Provider>
        </TextLoginContext.Provider>
        </SlideTabContext.Provider>
        </LoginTextContext.Provider>
        </LoginFormContext.Provider>
        </SignupFormContext.Provider>
        </WrapperContext.Provider>
        </SignupFormBetContext.Provider>
    )
}

export default FormProvider


