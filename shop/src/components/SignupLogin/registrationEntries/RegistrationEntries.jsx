import React , { useState , useRef } from 'react'

function RegistrationEntries({id , typeOne = 'text' , typeTwo = 'text' ,
maxLengthOne , maxLengthTwo , minLengthOne , minLengthTwo , labelOne , labelTwo , idLabel , neBet = false , alertunameBet = false , handlerKeyPressBet = false , phoneNumberBet = false}) {

  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, '');
    const formattedValue = cleanedValue.replace(/(\d{3})(?=\d{4})/g, '$1 ');
    return formattedValue;
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
  };

  const handlerKeyPress = (event) =>{
    const char = event.key;
    const isCharacterValid = /[a-z_]/.test(char);
    
    if (!isCharacterValid) {
      event.preventDefault();
    }
  }

  const input = useRef()
  const [inputLabel , setInputLabel] = useState({ top: '50%' })

  const inputClick = ()=>{
    if (input.current.value === '' && inputLabel.top === '50%') {
      setInputLabel({ top: '0%' });
    }
  }

  const inputBlur = ()=>{
    if (input.current.value === '') {
      setInputLabel({ top: '50%' });
    }
  }

  const inputKeyUp = ()=>{
    if (input.current.value === ''){
      setInputLabel({top: '50%'})
    }else{
      setInputLabel({top: '0%'})
    }
  }

  return (
    <>
    <div className='tow-box'>

        <div className='field'>
            <input 
            id={id} 
            type={typeOne} 
            maxLength={maxLengthOne} 
            minLength={minLengthOne}
            {...(phoneNumberBet && { value: phoneNumber, onChange: handlePhoneNumberChange })}
            ref={input}
            onClick={() => inputClick()}
            onBlur={() => inputBlur()}
            onKeyUp={() => inputKeyUp()}
            required
            />
            <label id={idLabel}>{labelOne}</label>
            {neBet &&
            <p className='Ne'>+98</p>
            }
        </div>

        <div className='field'>
            <input 
            type={typeTwo} 
            maxLength={maxLengthTwo} 
            minLength={minLengthTwo}
            onKeyPress={handlerKeyPressBet ? (event) => handlerKeyPress(event) : null}
            ref={input}
            onClick={() => inputClick()}
            onBlur={() => inputBlur()}
            onKeyUp={() => inputKeyUp()}
            required
            />
            <label>{labelTwo}</label>
        </div>
        {alertunameBet &&
        <p id='alertuname'>This name has already been used</p>
        }
    </div>
    </>
  )
}

export default RegistrationEntries