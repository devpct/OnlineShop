import React, {useState} from 'react'

function TitleText() {

  const [loginText, setloginText] = useState()

  return (
    <>
    <div className='title-text'>
        <h1 style={loginText} className='title'>Login</h1>
        <h1 className='title signup'>Signup</h1>
    </div>
    </>
  )
}

export default TitleText