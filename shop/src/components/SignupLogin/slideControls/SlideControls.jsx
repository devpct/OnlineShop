import React from 'react'

function SlideControls() {

    // const signupBtn = () => {
    //     setWrapper({marginTop: '5.5%'})
    //     setSignupForm({ display: 'block' })
    //     setloginForm({marginLeft: '-65%'})
    //     setloginText({marginLeft: '-50%'})
    // } 
    
    // const loginBtn = () => {
    //     setloginForm({display: 'block'})
    //     setloginText({marginLeft: '0%'})
    //     delysignup()
    //   }
      
    //   function delysignup() {
    //       setTimeout(()=>{
    //         setSignupForm({ display: 'none' })
    //         setWrapper({marginTop: '13%'})
    //     },300)
    //   }
  return (
    <>
    <div className='slide-controls'>
        <input type='radio' name='slider' id='login' defaultChecked  />
        <input type='radio' name='slider' id='signup' />
        <label onClick={() => loginBtn()} htmlFor='login' className='slide'>Login</label>
        <label onClick={() => signupBtn()} htmlFor='signup' className='slide text-signup'>Signup</label>
        <span className='slide-tab'></span>
    </div>
    </>
  )
}

export default SlideControls