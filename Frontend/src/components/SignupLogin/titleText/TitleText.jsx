import React, { useContext , useEffect} from 'react'
import { LoginTextContext } from '../../../context/signupLogin/FormContext'
import './titleText.scss'

function TitleText() {

  const [loginText , setLoginText] = useContext(LoginTextContext)


  return (
    <>
    <div className='title-text'>
        <h1 style={loginText} className='title'>Login</h1>
        <h1 className='title'>Signup</h1>
    </div>
    </>
  )
}

export default TitleText