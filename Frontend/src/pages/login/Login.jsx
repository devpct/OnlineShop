import React, { useEffect , useContext , useState } from 'react'
import { useNavigate} from 'react-router-dom'
import ModalContainer from '../../components/SignupLogin/modalContainer/ModalContainer'
import SlideControls from '../../components/SignupLogin/slideControls/SlideControls'
import TitleText from '../../components/SignupLogin/titleText/TitleText'
import Inputs from '../../components/SignupLogin/inputs/Inputs'
import { WrapperContext } from '../../context/signupLogin/FormContext'
import { LoginFormContext } from '../../context/signupLogin/FormContext'
import Get from '../../hooks/customer/get'
import './login.scss'

function Login() {

  const [wrapper , setWrapper] = useContext(WrapperContext)
  const [loginForm , setLoginForm] = useContext(LoginFormContext)
  const [inputsValueLogin, setinputsValueLogin] = useState()
  const [clickBetLogin , setclickBetLogin] = useState(false)
  const loginUser = useNavigate()

  useEffect(() => {
    document.title = 'Login | Online Shop'

    let loginBet = false
    if (!loginBet) {
      loginUser('/login')
    }
  }, [])

  const login = (event)=>{
    event.preventDefault()
    if (
      inputsValueLogin.username !== undefined &&
      inputsValueLogin.password !== undefined
    ) {
      setclickBetLogin(true)
    }else{
      setclickBetLogin(false)
    }
}

  return (
    <>
        <img className='mooj' src="../../../public/images/mooj.png" alt="Logo" />

        <div className='container'>
          <div style={wrapper} className='wrapper'>
            <TitleText />

            <div className='form-container'>
              <SlideControls />

              <div className='form-inner'>
              <form style={loginForm} className='login'>

              <Inputs
              labels={['User Name']} 
              maxLengths={[22]}
              setinputsValueLogin={setinputsValueLogin}
              />

              <Inputs
              types={['password']}
              lPassBet={true}
              setinputsValueLogin={setinputsValueLogin}
              />

                <div className='field'>
                <input type='submit' value='Login' onClick={login}/>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      <ModalContainer />
      <Get 
      inputsValueLogin={inputsValueLogin}
      clickBetLogin={clickBetLogin}
      setclickBetLogin={setclickBetLogin}
      />
    </>
  )
}

export default Login

