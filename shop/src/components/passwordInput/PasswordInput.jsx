import React ,{useRef , useState} from 'react'

function PasswordInput({lPassBet = false}) {

  const iconPass = useRef()
  const password = useRef()
  const [alertPass , setAlertPass] = useState()

  const iconPassword = ()=> {
    if (iconPass.current.className == 'icon-password  bi-eye-slash-fill') {
      iconPass.current.className = 'icon-password bi-eye-fill'
      password.current.type = 'text'
    }else{
      iconPass.current.className = 'icon-password  bi-eye-slash-fill'
      password.current.type = 'password'
    }
  }

  const errorPassword = ()=> {
    if (password.current.value.length != 8 ) {
      setAlertPass({display: 'block'})
    }
    if (password.current.value == '') {
      setAlertPass({display: 'none'})
    }
  }

  const errorPass = ()=> {
    if (password.current.value.length == 8 ) {
      setAlertPass({display: 'none'})
    }
    if (password.current.value.length == 0 ) {
      setAlertPass({display: 'none'})
    }
  }

  return (
    <>
        <div className='field box-pass'>
            <input 
            ref={password} 
            onKeyUp={errorPass} 
            onBlur={errorPassword}
            type={'password'}
            maxLength={8} required
            />
            <label>Password</label>
            <i ref={iconPass} onClick={() => iconPassword()} className='icon-password  bi-eye-slash-fill'></i>
        </div>
            {lPassBet ?
              <p style={alertPass} id='alertlpass'>The password must be 8 digits</p>
            :
              <p style={alertPass} id='alertpass'>The password must be 8 digits</p>
            }
    </>
  )
}

export default PasswordInput