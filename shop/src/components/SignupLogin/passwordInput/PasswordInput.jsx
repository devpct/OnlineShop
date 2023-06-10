import React ,{useRef , useState , useEffect} from 'react'
import './passwordInput.scss'

function PasswordInput({ lPassBet , setinputsValueSignup , setinputsValueLogin , value , Change}) {

  const iconPass = useRef()
  const password = useRef()

  const [alertPass, setAlertPass] = useState()

  const iconPassword = () => { 
    if (iconPass.current.className === 'icon-password  bi-eye-slash-fill') {
      iconPass.current.className = 'icon-password  bi-eye-fill'
      password.current.type = 'text'
    } else {
      iconPass.current.className = 'icon-password  bi-eye-slash-fill'
      password.current.type = 'password'
    }
  }

  const errorPassword = () => {
    if (password.current.value.length !== 8) {
      setAlertPass({ display: 'block' })
    }
    if (password.current.value === '') {
      setAlertPass({ display: 'none' })
    }
  }

  const errorPass = (event,lPassBet) => {
    if (!lPassBet) {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          password: event.target.value
        }
      })
    }
    if (lPassBet) {
      setinputsValueLogin((previnputsValueLogin) => {
        return {
          ...previnputsValueLogin,
          password: event.target.value
        }
      })
    }
    if (password.current.value.length === 8 || password.current.value.length === 0) {
      setAlertPass({ display: 'none' })
    }
  }


  return (
    <>
        <input
          ref={password}
          onKeyUp={(event) => errorPass(event,lPassBet)}
          onBlur={errorPassword}
          type='password'
          maxLength={8}
          value={value}
          onChange={Change}
          required
        />
        <label>Password</label>
        <i ref={iconPass} onClick={iconPassword} className='icon-password  bi-eye-slash-fill'></i>
      {lPassBet ? (
        <p style={alertPass} id='alertlpass'>
          The password must be 8 digits
        </p>
      ) : (
        <p style={alertPass} id='alertpass'>
          The password must be 8 digits
        </p>
      )}
    </>
  )
}


export default PasswordInput