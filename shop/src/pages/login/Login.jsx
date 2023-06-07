import React, { useEffect , useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import ModalContainer from '../../components/SignupLogin/modalContainer/ModalContainer'
import SlideControls from '../../components/SignupLogin/slideControls/SlideControls'
import TitleText from '../../components/SignupLogin/titleText/TitleText'
import Inputs from '../../components/SignupLogin/inputs/Inputs'
import { WrapperContext } from '../../context/signupLogin/FormContext'
import { LoginFormContext } from '../../context/signupLogin/FormContext'
import './login.scss'

function Login() {

  const [wrapper , setWrapper] = useContext(WrapperContext)
  const [loginForm , setLoginForm] = useContext(LoginFormContext)
  const loginUser = useNavigate()
  
  useEffect(() => {
    document.title = 'Login | Online Shop'

    let loginBet = false
    if (!loginBet) {
      loginUser('/login')
    }
  }, [])

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
              />

              <Inputs
              types={['password']}
              lPassBet={true}
              />

                <div className='field'>
                <input  type='submit' value='Login'/>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      <ModalContainer />
    </>
  );
}

export default Login;

