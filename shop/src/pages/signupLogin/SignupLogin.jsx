import React, { useEffect , useState } from 'react'
import Login from '../../components/SignupLogin/login/Login'
import Signup from '../../components/SignupLogin/signup/Signup'
import ModalContainer from '../../components/SignupLogin/modalContainer/ModalContainer'
import SlideControls from '../../components/SignupLogin/slideControls/SlideControls'
import TitleText from '../../components/SignupLogin/titleText/TitleText'
import './SignupLogin.css'

function SignupLogin() {
  
  useEffect(() => {
    document.title = 'Signup & Login | Online Shop'
  }, [])
  
  const [wrapper , setWrapper] = useState('')

  return (
    <>
      <img className='mooj' src='../../../public/images/mooj.png'></img>

      <div className='container'>
        <div style={wrapper} className='wrapper'>
        <TitleText/>

        <div className='form-container'>
        <SlideControls/>

        <div className='form-inner'>
        <Login/>
        <Signup wrapper={wrapper} setHandler={setWrapper}/>
        </div>

        </div>
        
      </div>
      </div>
      <ModalContainer/>
      {wrapper}
    </>
  )
}

export default SignupLogin