import React , { useState , useRef ,useContext } from 'react'
import { SignupDataContext } from '../../../context/signupLogin/FormContext'

function RegistrationEntries({id , typeOne = 'text' , typeTwo = 'text' ,
maxLengthOne , maxLengthTwo , minLengthOne , minLengthTwo , labelOne , labelTwo , idLabel , neBet = false , alertunameBet = false , handlerKeyPressBet = false , phoneNumberBet = false , inputSignupUsername = false , inputNameLastname = false , inputCity = false , inputPhoneNumber = false }) {

  const [signupData , setSignupData] = useContext(SignupDataContext)
  const [phoneNumber, setPhoneNumber] = useState('')

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, '')
    const formattedValue = cleanedValue.replace(/(\d{3})(?=\d{4})/g, '$1 ')
    return formattedValue;
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target
    const formattedValue = formatPhoneNumber(value)
    setPhoneNumber(formattedValue)
  }



  const input = useRef()
  const [inputLabel , setInputLabel] = useState({ top: '50%' })

  const inputClick = ()=>{
    if (input.current.value === '' && inputLabel.top === '50%') {
      setInputLabel({ top: '0%' })
    }
  }

  const inputBlur = ()=>{

    if (inputSignupUsername) {
    setSignupData(prevState => ({
        ...prevState ,
        username: input.current.value
    }))
    inputSignupUsername = false
    }else if(inputNameLastname){
      setSignupData(prevState => ({
        ...prevState ,
        nameLastname: input.current.value
    }))
    inputNameLastname = false
    }else if(inputPhoneNumber){
      setSignupData(prevState => ({
        ...prevState ,
        phoneNumber: input.current.value
    }))
    inputPhoneNumber = false
    }else if(inputCity){
      setSignupData(prevState => ({
        ...prevState ,
        city: input.current.value
    }))
    inputCity = false
    }

    if (input.current.value === '') {
      setInputLabel({ top: '50%' })
    }
  }

  const inputKeyUp = ()=>{
    if (input.current.value === ''){
      setInputLabel({top: '50%'})
    }else{
      setInputLabel({top: '0%'})
    }
  }

  // return (
  //   <>
  //   <div className='tow-box'>

  //       <div className='field'>
  //           <input 
  //           id={id} 
  //           type={typeOne} 
  //           maxLength={maxLengthOne} 
  //           minLength={minLengthOne}
  //           {...(phoneNumberBet && { value: phoneNumber, onChange: handlePhoneNumberChange })}
  //           ref={input}
  //           onClick={() => inputClick()}
  //           onBlur={() => inputBlur()}
  //           onKeyUp={() => inputKeyUp()}
  //           required
  //           />
  //           <label id={idLabel}>{labelOne}</label>
  //           {neBet &&
  //           <p className='Ne'>+98</p>
  //           }
  //       </div>

  //       <div className='field'>
  //           <input 
  //           type={typeTwo} 
  //           maxLength={maxLengthTwo} 
  //           minLength={minLengthTwo}
  //           onKeyPress={handlerKeyPressBet ? (event) => handlerKeyPress(event) : null}
  //           ref={input}
  //           onClick={() => inputClick()}
  //           onBlur={() => inputBlur()}
  //           onKeyUp={() => inputKeyUp()}
  //           required
  //           />
  //           <label>{labelTwo}</label>
  //       </div>
  //       {alertunameBet &&
  //       <p id='alertuname'>This name has already been used</p>
  //       }
  //   </div>
  //   </>
  // )
}

export default RegistrationEntries