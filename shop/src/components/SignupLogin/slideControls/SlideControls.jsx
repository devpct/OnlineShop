import React, {useContext} from 'react'
import { WrapperContext , SignupFormContext } from '../../../context/signupLogin/FormContext'

function SlideControls() {
    const wrapper = useContext(WrapperContext);  
    const signupForm = useContext(SignupFormContext);  

    const signupBtn = () => {
        wrapper({marginTop: '5.5%'})
        signupForm({ display: 'block' })
        setloginForm({marginLeft: '-65%'})
        setloginText({marginLeft: '-50%'})
    } 
    
    const loginBtn = () => {
        setloginForm({display: 'block'})
        setloginText({marginLeft: '0%'})
        delysignup()
      }
      
      function delysignup() {
          setTimeout(()=>{
            signupForm({ display: 'none' })
            wrapper({marginTop: '13%'})
        },300)
      }
  return (
    <>
    <div className='slide-controls'>
        <input type='radio' name='slider' id='login' defaultChecked  />
        <input type='radio' name='slider' id='signup' />
        <label onClick={() => loginBtn()} htmlFor='login' className='slide'>Login</label>
        <label onClick={() => signupBtn()} htmlFor='signup' className='slide text-signup'>Signup</label>
        <span className='slide-tab'></span>
    </div>
    </>
  )
}

export default SlideControls

