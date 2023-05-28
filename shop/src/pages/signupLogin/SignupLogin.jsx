import React, { useEffect , useContext } from 'react'
import Login from '../../components/SignupLogin/login/Login'
import Signup from '../../components/SignupLogin/signup/Signup'
import ModalContainer from '../../components/SignupLogin/modalContainer/ModalContainer'
import SlideControls from '../../components/SignupLogin/slideControls/SlideControls'
import TitleText from '../../components/SignupLogin/titleText/TitleText'
import FormProvider from '../../context/signupLogin/FormContext'
import { WrapperContext } from '../../context/signupLogin/FormContext'
import './SignupLogin.css'

function SignupLogin() {

  useEffect(() => {
    document.title = 'Signup & Login | Online Shop';
  }, []);

  const wrapper = useContext(WrapperContext);  
  return (
    <>
      <FormProvider>
        <img className="mooj" src="../../../public/images/mooj.png" alt="Logo" />

        <div className="container">
          <div style={wrapper} className="wrapper">
            <TitleText />

            <div className="form-container">
              <SlideControls />

              <div className="form-inner">
                <Login />
                <Signup />
              </div>
            </div>
          </div>
        </div>

        <ModalContainer />
      </FormProvider>
    </>
  );
}

export default SignupLogin;

