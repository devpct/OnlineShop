import React, { useContext , useEffect, useState , useRef } from 'react'
import ButtonSignup from '../../../public/svg/ButtonSignup'
import ModalContainer from '../../components/SignupLogin/modalContainer/ModalContainer'
import SlideControls from '../../components/SignupLogin/slideControls/SlideControls'
import TitleText from '../../components/SignupLogin/titleText/TitleText'
import { SignupFormContext } from '../../context/signupLogin/FormContext'
import { SignupFormBetContext } from '../../context/signupLogin/FormContext'
import ComponentInputs from '../../components/SignupLogin/ComponentInputs'
import Add from '../../hooks/customer/add'

import './signup.css'

function Signup() {

  const [signupForm , setSignupForm] = useContext(SignupFormContext)
  const [signupFormBet, setSignupFormBet] = useContext(SignupFormBetContext)
  const [inputsValue, setInputsValue] = useState()
  const [clickBet , setClickBet] = useState(false)
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const submitDuration = 2000;
  const resetDuration = 1500;

  useEffect(()=>{
    document.title = 'Signup | Online Shop'
    setSignupFormBet(true)
  },[signupFormBet])

  const signup = (event) => {
    event.preventDefault();
    if (
      inputsValue.username !== undefined &&
      inputsValue.nameLastname !== undefined &&
      inputsValue.password !== undefined &&
      inputsValue.email !== undefined &&
      inputsValue.phoneNumber !== undefined &&
      inputsValue.city !== undefined &&
      inputsValue.address !== undefined &&
      inputsValue.nationalCode !== undefined
    ) {
        if (isRunning || isDone) return;
        
        setIsRunning(true);
        
        setTimeout(() => {
          setIsRunning(false);
          setIsDone(true);
          
        setTimeout(() => {
          setIsDone(false);
        }, resetDuration);
      }, 600 + submitDuration);
      setClickBet(true);
    } else {
      setClickBet(false);
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
        <ComponentInputs
        inputsCount={2}
        labels={['Name and Last Name','User Name']}
        maxLengths={[35,23]}
        inputsValue={inputsValue}
        setInputsValue={setInputsValue}
        />

        <ComponentInputs
        inputsCount={2}
        labels={['Paasword','Email']} 
        types={['password','email']}
        maxLengths={[
          35]}
        inputsValue={inputsValue}
        setInputsValue={setInputsValue}
        />

        <ComponentInputs
        inputsCount={2}
        labels={['Phone Number','City']} 
        ids={['phoneNum']}
        maxLengths={[11,15]}
        minLengths={[11,2]}
        idLabels={['lphoneNum']}
        inputsValue={inputsValue}
        setInputsValue={setInputsValue}
        />

        <ComponentInputs
        labels={['Address']}
        maxLengths={[120]} 
        inputsValue={inputsValue}
        setInputsValue={setInputsValue}
        />

        <ComponentInputs
        labels={['National Code']} 
        maxLengths={[10]}
        minLengths={[8]} 
        inputsValue={inputsValue}
        setInputsValue={setInputsValue}
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
    <Add clickBet={clickBet} inputsValue={inputsValue}/>
    </>
  );
}

export default Signup