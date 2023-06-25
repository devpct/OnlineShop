import React ,{ useState , useRef , useEffect , useContext} from 'react'
import PasswordInput from '../passwordInput/PasswordInput'
import { ModalContainerContext , ValueNullBetContext , AlertunameContext } from '../../../context/signupLogin/FormContext'
import './inputs.scss'

function Inputs({ inputsCount, ids = [], value = [], types = ['text', 'text'], maxLengths = [], minLengths = [], labels = [], idLabels = [], lPassBet = false , setinputsValueSignup , userNameSignup = false , setinputsValueLogin}) {


  const [values, setValues] = useState(value)
  const inputRefs = useRef([])
  const [inputLabels, setInputLabels] = useState(Array(inputsCount).fill({ top: '50%' }))
  const [modalContainer , setModalContainer] = useContext(ModalContainerContext)
  const [valueNullBet, setValueNullBet] = useContext(ValueNullBetContext)
  const [alertuname, setAlertuname] = useContext(AlertunameContext)

  useEffect(()=>{
    if (value !== undefined) {
      setInputLabels(Array(inputsCount).fill({ top: '0%' }))
      for (let i = 0; i < 2; i++) {
      if (labels[i] === 'Name and Last Name') {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            nameLastname: value[i]
          }
        })
      }
      if (userNameSignup) {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            username: value[i]
          }
        })
      }
      if (labels[i] === 'Password') {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            password: value[i]
          }
        })
      }
      if (labels[i] === 'Email') {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            email: value[i]
          }
        })
      }
      if (labels[i] === 'Phone Number') {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            phoneNumber: value[i]
          }
        })
      }
      if (labels[i] === 'City') {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            city: value[i]
          }
        })
      }
      if (labels[i] === 'Address') {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            address: value[i]
          }
        })
      }
      if (labels[i] === 'National Code') {
        setinputsValueSignup((previnputsValueSignup) => {
          return {
            ...previnputsValueSignup,
            nationalCode: value[i]
          }
        })
      }
      if (i === 2) {
        i = 0
      }
    }
    }
  },[])

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
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          nameLastname: inputRefs.current[i].value
        }
      })
    }
    else if (userNameSignup) {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          username: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'Email') {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          email: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'Phone Number') {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          phoneNumber: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'City') {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          city: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'Address') {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          address: inputRefs.current[i].value
        }
      })
    }
    else if (label === 'National Code') {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          nationalCode: inputRefs.current[i].value
        }
      })
    }else if (!userNameSignup) {
      if (label === 'User Name') {
        setinputsValueLogin((previnputsValueLogin) => {
        return {
          ...previnputsValueLogin,
          username: inputRefs.current[i].value
        }
      })
    }
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
    
    let backgroundColor = localStorage.getItem('Theme')

    if (backgroundColor === null) {
      backgroundColor = '#fad02c'
    }

    if (!isCharacterValid) {
      event.preventDefault()
      setModalContainer({
      display: 'block' ,
      description: 'Username must be in English lowercase letters',
      icon: 'bi bi-info-circle-fill',
      backgroundColor: backgroundColor,
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
              setinputsValueSignup={setinputsValueSignup}
              setinputsValueLogin={setinputsValueLogin}
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
            {labels[i] === 'User Name' && <p style={{display: alertuname.display}} id="alertuname">This name has already been used</p>}
          </div>
        ))}
      </div>
    </>
  )
}

export default Inputs
