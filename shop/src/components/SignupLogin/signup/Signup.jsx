import React, { useState, useEffect , useContext } from 'react';
import BtnSvg from '../btnSvg/BtnSvg';
import RegistrationEntrie from '../registrationEntrie/RegistrationEntrie'
import RegistrationEntries from '../registrationEntries/RegistrationEntries'
import PasswordInput from '../passwordInput/PasswordInput';
import { SignupFormContext } from '../../../context/signupLogin/FormContext'

function Signup() {

  const signupForm = useContext(SignupFormContext);  

  const signup = () => {
    let formData = {
      // 'username': username,
      // 'nameLastname': username.value,
      // 'password': lastname.value,
      // 'email': lastname.value,
      // 'phoneNumber': lastname.value,
      // 'city': lastname.value,
      // 'address': lastname.value,
      // 'nationalCode': lastname.value,
      // 'registrationTime': lastname.value,
    };

    fetch('http://127.0.0.1:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    //error style={signupForm}
      <form style={signupForm} className="signup">
        <RegistrationEntries
          maxLengthOne={35}
          labelOne={'Name and Last Name'}
          handlerKeyPressBet={true}
          labelTwo={'User Name'}
        />

        <div className="tow-box">
          <PasswordInput />

          {/* <RegistrationEntrie 
        type={'email'} 
        maxLength={35} 
        label={'Email'} 
        /> */}
        </div>

        <RegistrationEntries
          id={'phoneNum'}
          maxLengthOne={11}
          minLengthOne={11}
          labelOne={'Phone Number'}
          idLabel={'lphoneNum'}
          minLengthTwo={2}
          maxLengthTwo={15}
          labelTwo={'City'}
          neBet={true}
          phoneNumberBet={true}
          textBetTwo={true}
          textBetOne={false}
        />

        {/* <RegistrationEntrie 
        maxLength={120} 
        label={'Address'} 
        textarea={true}
        /> */}

        {/* <RegistrationEntrie 
        maxLength={10} 
        minLength={7} 
        label={'National Code'} 
        /> */}

        <div className="field">
          <button onClick={() => signup()} className="btn btn-signup" type="submit">
            <span className="btn__text">Signup</span>
            <BtnSvg />
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;

