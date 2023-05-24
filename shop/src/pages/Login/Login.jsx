import React, { useEffect , useState } from 'react'
import BtnSvg from '../../components/btnSvg/BtnSvg'
import RegistrationEntrie from '../../components/registrationEntrie/RegistrationEntrie'
import RegistrationEntries from '../../components/registrationEntries/RegistrationEntries'
import PasswordInput from '../../components/passwordInput/PasswordInput'
import './Login.css'

function Login() {
  
  useEffect(() => {
    document.title = 'Signup & Login | Online Shop'
  }, [])
  
  const [loginForm, setloginForm] = useState()
  const [signupForm, setSignupForm] = useState()
  const [loginText, setloginText] = useState()
  const [wrapper , setWrapper] = useState()
  
  const signupBtn = () => {
    setWrapper({marginTop: '5.5%'})
    setSignupForm({ display: 'block' })
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
        setSignupForm({ display: 'none' })
        setWrapper({marginTop: '13%'})
    },300)
  }

  return (
    <>
      <img className='mooj' src='../../../public/images/mooj.png'></img>

      <div className='container'>
        <div style={wrapper} className='wrapper'>
          <div className='title-text'>
            <h1 style={loginText} className='title'>Login</h1>
            <h1 className='title signup'>Signup</h1>
          </div>

        <div className='form-container'>

        <div className='slide-controls'>
          <input type='radio' name='slider' id='login' defaultChecked  />
          <input type='radio' name='slider' id='signup' />
          <label onClick={() => loginBtn()} htmlFor='login' className='slide'>Login</label>
          <label onClick={() => signupBtn()} htmlFor='signup' className='slide text-signup'>Signup</label>
          <span className='slide-tab'></span>
        </div>

        <div className='form-inner'>

        <form style={loginForm} className='login'>

          <RegistrationEntrie 
          maxLength={22} 
          label={'User Name'} 
          handlerKeyPressBet={true}
          />

          <PasswordInput lPassBet={true}/>

          <div className='field'>
            <input className='btn-login' type='submit' value='Login'/>
          </div>

        </form>

        <form style={signupForm} className='signup'>

          <RegistrationEntries 
          maxLengthOne={35} 
          labelOne={'Name and Last Name'} 
          handlerKeyPressBet={true} 
          labelTwo={'User Name'} 
          />

          <div className='tow-box'>
          <PasswordInput/>

          <RegistrationEntrie 
          type={'email'} 
          maxLength={35} 
          label={'Email'} 
          />
          </div>

          <RegistrationEntries 
          id={'phoneNum'} 
          maxLengthOne={11}  
          minLengthOne={11} 
          labelOne={'Phone Number'} 
          idLabel={'lphoneNum'} 
          minLengthTwo={2} 
          maxLengthTwo={15} 
          labelTwo={'City'} 
          neBet={true} 
          phoneNumberBet={true} 
          textBetTwo={true} 
          textBetOne={false}
          />

          <RegistrationEntrie 
          maxLength={120} 
          label={'Address'} 
          textarea={true}
          />

          <RegistrationEntrie 
          maxLength={10} 
          minLength={7} 
          label={'National Code'} 
          />

          <div className='field'>
            <button className='btn btn-signup' type='submit'>
              <span className='btn__text'>Signup</span>
              <BtnSvg />
            </button>
          </div>
          
        </form>

        </div>
        </div>
      </div>
      </div>

    <div id='modalContainer'>
      <div className='modal-content'>
        <i className='bi bi-exclamation-circle-fill'></i>
        <p className='paragraf'>
          The information entered is incorrect
        </p>
        </div>
    </div>
    
    </>
  )
}

export default Login