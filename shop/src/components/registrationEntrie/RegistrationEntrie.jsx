import React , {useRef , useState} from 'react'
import Login from '../../pages/Login/Login';

function RegistrationEntrie({ type = 'text' , maxLength , minLength , label , handlerKeyPressBet = false , textarea = false}) { 
  
  const [state, setState] = useState('hi');

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

  const inputKeyUp = (event)=>{
    if (input.current.value === ''){
      setInputLabel({top: '50%'})
    }else{
      setInputLabel({top: '0%'})
    }
    // setUsername(event.target.value)
  }

  return (
    <>
        <div className='field'>
          {textarea ?
            <textarea 
            ref={input}
            maxLength={maxLength}
            onClick={() => inputClick()}
            onBlur={() => inputBlur()}
            onKeyUp={() => inputKeyUp()}
            ></textarea>
          :
            <input 
            ref={input}
            type={type} 
            maxLength={maxLength} 
            minLength={minLength}
            onKeyPress={handlerKeyPressBet ? (event) => handlerKeyPress(event) : null} 
            onClick={() => inputClick()}
            onBlur={() => inputBlur()}
            onKeyUp={inputKeyUp}
            required
            />
          }
            <label style={inputLabel}>{label}</label>
        </div>
        <Login state={state} stateHandler={setState} />
    </>
  )
}

export default RegistrationEntrie