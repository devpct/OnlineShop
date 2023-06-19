import React, { useContext , useEffect, useState } from 'react'
import ButtonSignup from '../../../public/svg/ButtonSignup'
import ModalContainer from '../../components/SignupLogin/modalContainer/ModalContainer'
import SlideControls from '../../components/SignupLogin/slideControls/SlideControls'
import TitleText from '../../components/SignupLogin/titleText/TitleText'
import { SignupFormContext , SignupFormBetContext , AlertunameContext} from '../../context/signupLogin/FormContext'
import Inputs from '../../components/SignupLogin/inputs/Inputs'
import Add from '../../hooks/customer/add'
import Get from '../../hooks/customer/get'
import './signup.scss'

function Signup() {

  const [signupForm , setSignupForm] = useContext(SignupFormContext)
  const [signupFormBet, setSignupFormBet] = useContext(SignupFormBetContext)
  const [alertuname, setAlertuname] = useContext(AlertunameContext)
  const [inputsValueSignup, setinputsValueSignup] = useState()
  const [clickBetSignup , setclickBetSignup] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isDone, setIsDone] = useState(false)


  useEffect(()=>{
    document.title = 'Signup | Online Shop'
    setSignupFormBet(true)
  },[signupFormBet])

  const signup = (event) => {
    event.preventDefault()
    if (
      inputsValueSignup.nameLastname !== undefined &&
      inputsValueSignup.username !== undefined &&
      inputsValueSignup.password !== undefined &&
      inputsValueSignup.email !== undefined &&
      inputsValueSignup.phoneNumber !== undefined &&
      inputsValueSignup.city !== undefined &&
      inputsValueSignup.address !== undefined &&
      inputsValueSignup.nationalCode !== undefined &&
      alertuname.display !== 'block'
    ) {
      setclickBetSignup(true)
    } else {
      setclickBetSignup(false)
    }
  }
  

  return (
    <>
    <img className="mooj" src="../../../public/images/mooj.png" alt="Logo" />
    <div className="container">
      <div className="wrapper">
        <TitleText />

    <div className="form-container">
      <SlideControls />

      <div className="form-inner">

      <form style={signupForm} className="signup">
        <Inputs
        inputsCount={2}
        labels={['Name and Last Name','User Name']}
        maxLengths={[35,23]}
        setinputsValueSignup={setinputsValueSignup}
        userNameSignup={true}
        />

        <Inputs
        inputsCount={2}
        labels={['Paasword','Email']} 
        types={['password','email']}
        maxLengths={[
          35]}
        setinputsValueSignup={setinputsValueSignup}
        />

        <Inputs
        inputsCount={2}
        labels={['Phone Number','City']} 
        ids={['phoneNum']}
        maxLengths={[11,15]}
        minLengths={[11,2]}
        idLabels={['lphoneNum']}
        setinputsValueSignup={setinputsValueSignup}
        />

        <Inputs
        labels={['Address']}
        maxLengths={[120]} 
        setinputsValueSignup={setinputsValueSignup}
        />

        <Inputs
        labels={['National Code']} 
        maxLengths={[10]}
        minLengths={[8]} 
        setinputsValueSignup={setinputsValueSignup}
        />

    <div className="field">
      <button className={`btn btn-signup ${isRunning ? 'btn--running' : ''} ${isDone ? 'btn--done' : ''}`} type="submit" onClick={signup}>
        <span className="btn__text">Signup</span>
        <ButtonSignup/>
      </button>
    </div>
      </form>

        </div>
       </div>
      </div>
    </div>

    <ModalContainer  />
    <Add 
    clickBetSignup={clickBetSignup} 
    inputsValueSignup={inputsValueSignup}
    isRunning={isRunning}
    setIsRunning={setIsRunning}
    isDone={isDone}
    setIsDone={setIsDone}
    />
    <Get inputsValueSignup={inputsValueSignup}/>
    </>
  )
}

export default Signup