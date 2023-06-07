import React ,{ useState , useRef , useEffect , useContext} from 'react'
import PasswordInput from '../passwordInput/PasswordInput'
import { ModalContainerContext } from '../../../context/signupLogin/FormContext'
import { ValueNullBetContext } from '../../../context/signupLogin/FormContext'
import './inputs.scss'

function Inputs({ inputsCount, ids = [], value = [], types = ['text', 'text'], maxLengths = [], minLengths = [], labels = [], idLabels = [], lPassBet = false , setInputsValue , inputsValue}) {


  const [values, setValues] = useState(value)
  const inputRefs = useRef([])
  const [inputLabels, setInputLabels] = useState(Array(inputsCount).fill({ top: '50%' }))
  const [modalContainer , setModalContainer] = useContext(ModalContainerContext)
  const [valueNullBet, setValueNullBet] = useContext(ValueNullBetContext)


  useEffect(()=>{
    if (valueNullBet) {
      setValues('')
      setInputLabels(Array(inputsCount).fill({ top: '50%' }))
    }
  },[valueNullBet])

  const inputClick = (i) => {
    if (inputRefs.current[i].value === '' && inputLabels[i].top === '50%') {
      const newInputLabels = [...inputLabels]
      newInputLabels[i] = { top: '0%' }
      setInputLabels(newInputLabels)
    }
  }

  const inputBlur = (i) => {
    if (inputRefs.current[i].value === '') {
      const newInputLabels = [...inputLabels]
      newInputLabels[i] = { top: '50%' }
      setInputLabels(newInputLabels)
    }
  }

  const inputKeyUp = (label,i) => {
    if (label === 'Name and Last Name') {
      setInputsValue((prevInputsValue) => {
        return {
          ...prevInputsValue,
          nameLastname: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'User Name') {
      setInputsValue((prevInputsValue) => {
        return {
          ...prevInputsValue,
          username: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'Email') {
      setInputsValue((prevInputsValue) => {
        return {
          ...prevInputsValue,
          email: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'Phone Number') {
      setInputsValue((prevInputsValue) => {
        return {
          ...prevInputsValue,
          phoneNumber: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'City') {
      setInputsValue((prevInputsValue) => {
        return {
          ...prevInputsValue,
          city: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'Address') {
      setInputsValue((prevInputsValue) => {
        return {
          ...prevInputsValue,
          address: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'National Code') {
      setInputsValue((prevInputsValue) => {
        return {
          ...prevInputsValue,
          nationalCode: inputRefs.current[i].value
        }
      })
    }
    if (inputRefs.current[i].value === '') {
      const newInputLabels = [...inputLabels]
      newInputLabels[i] = { top: '50%' }
      setInputLabels(newInputLabels)
    } else {
      const newInputLabels = [...inputLabels]
      newInputLabels[i] = { top: '0%' }
      setInputLabels(newInputLabels)
    }
  }

  // input username
  const lowercaseLetters = (event) => {
    const char = event.key
    const isCharacterValid = /[a-z0-9_]/.test(char)
    
    if (!isCharacterValid) {
      event.preventDefault()
      setModalContainer({
      display: 'block' ,
      description: 'Username must be in English lowercase letters',
      icon: 'bi bi-info-circle-fill',
      backgroundColor: '#fad02c',
      color: '#000'
     })
      setTimeout(()=>{
      setModalContainer({display: 'none'})
      },5000)
    }
  }

  // input phonenumber
  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, '')
    const formattedValue = cleanedValue.replace(/(\d{3})(?=\d{4})/g, '$1 ')
    return formattedValue
  }

  const handlePhoneNumberChange = (event, i) => {
    const { value } = event.target
    const formattedValue = formatPhoneNumber(value)
    const newValues = [...values]
    newValues[i] = formattedValue
    setValues(newValues)
  }

  // input NationalCode
  const formatNationalCode = (value) => {
    const cleanedValue = value.replace(/\D/g, '')
    return cleanedValue
  }

  const handleNationalCodeChange = (event, i) => {
    const { value } = event.target
    const formattedValue = formatNationalCode(value)
    const newValues = [...values]
    newValues[i] = formattedValue
    setValues(newValues)
  }

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputsCount)
  }, [inputsCount])

  return (
    <>
      <div className='tow-box'>
        {Array.from(Array(inputsCount).keys()).map((i) => (
          <div className='field' key={i}>
            {labels[i] === 'Address' ? (
              <textarea
                ref={(el) => (inputRefs.current[i] = el)}
                maxLength={maxLengths[i]}
                onClick={() => inputClick(i)}
                onBlur={() => inputBlur(i)}
                onKeyUp={() => inputKeyUp(labels[i], i)}
                value={values[i] || ''}
                onChange={(e) => {
                      const newInputValues = [...values]
                      newInputValues[i] = e.target.value
                      setValues(newInputValues)
                }
                }
              ></textarea>
            ) : types[i] === 'password' ? (
              <PasswordInput 
              lPassBet={lPassBet}
              inputsValue={inputsValue}
              setInputsValue={setInputsValue}
              value={values[i] || ''}
              Change={(e) => {
                    const newInputValues = [...values]
                    newInputValues[i] = e.target.value
                    setValues(newInputValues)
                }
              }
              />
            ) : (
              <input
                key={i}
                id={ids[i]}
                value={values[i] || ''}
                type={types[i]}
                maxLength={maxLengths[i]}
                minLength={minLengths[i]}
                onChange={
                  labels[i] === 'Phone Number'
                  ? (event) => handlePhoneNumberChange(event, i)
                  : labels[i] === 'National Code'
                  ? (event) => handleNationalCodeChange(event, i)
                  : (e) => {
                      const newInputValues = [...values]
                      newInputValues[i] = e.target.value
                      setValues(newInputValues)
                    }
                }
                onKeyPress={labels[i] === 'User Name' ? (event) => lowercaseLetters(event) : null}
                ref={(el) => (inputRefs.current[i] = el)}
                onKeyUp={() => inputKeyUp(labels[i],i)}
                onBlur={() => inputBlur(i)}
                onClick={() => inputClick(i)}
                required
              />
            )}
            {labels[i] === 'Phone Number' ? (
              <label style={{ top: '0%' }} id={idLabels[i]}>
                {labels[i]}
              </label>
            ) : types[i] !== 'password' ? (
              <label style={inputLabels[i]} id={idLabels[i]}>
                {labels[i]}
              </label>
            ) : null}
            {labels[i] === 'Phone Number' && <p className='Ne'>+98</p>}
          </div>
        ))}
      </div>
    </>
  )
}

export default Inputs
