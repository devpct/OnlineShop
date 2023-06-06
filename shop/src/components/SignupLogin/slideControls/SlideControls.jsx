import React, { useContext , useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { SignupFormBetContext } from '../../../context/signupLogin/FormContext'
import { SlideTabContext } from '../../../context/signupLogin/FormContext'
import { TextLoginContext } from '../../../context/signupLogin/FormContext'
import { TextSignupContext } from '../../../context/signupLogin/FormContext'

function SlideControls() {
  
    const [signupFormBet, setSignupFormBet] = useContext(SignupFormBetContext)
    const [slideTab, setSlideTab] = useContext(SlideTabContext)
    const [textLogin , setTextLogin] = useContext(TextLoginContext)
    const [textSignup , setTextSignup] = useContext(TextSignupContext)

    const Form = useNavigate()
    const signupBtn = () => {
      setSignupFormBet(true)
      Form('/signup')
    } 
    
    const loginBtn = () => {
      setSignupFormBet(false)
      Form('/login')
    }
      
  return (
    <>
        <div className='slide-controls'>
        <input type='radio' name='slider'  defaultChecked  />
        <input type='radio' name='slider' id='signup' />
        <label style={textLogin} onClick={() => loginBtn()} htmlFor='login' className='slide'>Login</label>
        <label style={textSignup} onClick={() => signupBtn()} htmlFor='signup' className='slide'>Signup</label>
        <span style={slideTab} className='slide-tab'></span>
        </div>
    </>
  )
}

export default SlideControls

