import React, {useState} from 'react'
import RegistrationEntrie from '../registrationEntrie/RegistrationEntrie'
import PasswordInput from '../passwordInput/PasswordInput'

function Login() {
    const [loginForm, setloginForm] = useState()

  return (
    <>
    <form style={loginForm} className='login'>
        <RegistrationEntrie 
        maxLength={22} 
        label={'User Name'} 
        handlerKeyPressBet={true}
        // state={state}
        // stateHandler={setState}
        />

        <PasswordInput lPassBet={true}/>

        <div className='field'>
        <input className='btn-login' type='submit' value='Login'/>
        </div>
    </form>
    </>
  )
}

export default Login