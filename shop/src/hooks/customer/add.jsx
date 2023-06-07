import React, { useContext, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { ValueNullBetContext } from '../../context/signupLogin/FormContext'
import { ModalContainerContext } from '../../context/signupLogin/FormContext'
import { SignupFormBetContext } from '../../context/signupLogin/FormContext'

function Add({ inputsValue , clickBet , isRunning , setIsRunning , isDone , setIsDone}) {

  const [valueNullBet, setValueNullBet] = useContext(ValueNullBetContext)
  const [modalContainer , setModalContainer] = useContext(ModalContainerContext)
  const [signupFormBet, setSignupFormBet] = useContext(SignupFormBetContext)
  const submitDuration = 2000
  const resetDuration = 1500
  const signupUser = useNavigate()

  useEffect(() => {
    if (clickBet) {

      const currentdate = new Date()
      const registrationTime = `${currentdate.getFullYear()}/${currentdate.getDate()}/${currentdate.getMonth()+ 1}  |  ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`

      let formData = {
        'username': inputsValue.username,
        'nameLastname': inputsValue.nameLastname,
        'password': inputsValue.password,
        'email': inputsValue.email,
        'phoneNumber': '0'+inputsValue.phoneNumber,
        'city': inputsValue.city,
        'address': inputsValue.address,
        'nationalCode': inputsValue.nationalCode,
        'registrationTime': registrationTime,
      }

      fetch('http://127.0.0.1:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            if (isRunning || isDone) return
        
            setIsRunning(true)
            
            setTimeout(() => {
              setIsRunning(false)
              setIsDone(true)
              
            setTimeout(() => {
              setIsDone(false)
            }, resetDuration)
          }, 600 + submitDuration)
            setValueNullBet(true)
            setTimeout(()=>{
            setModalContainer({
              display: 'block' ,
              description: 'Registration was successful',
              icon: 'bi bi-check-circle-fill',
              backgroundColor: 'rgb(84, 169, 84)',
              color: '#fff'
            })
            },2300)
            setTimeout(()=>{
              setModalContainer({display: 'none'})
              setSignupFormBet(false)
              signupUser('/login')
            },5000)
          } else {
              setModalContainer({
                display: 'block' ,
                description: 'Server problem, please try again',
                icon: 'bi bi-exclamation-triangle-fill',
                backgroundColor: 'rgb(232, 44, 44)',
                color: '#fff'
              })
              setTimeout(()=>{
                setModalContainer({display: 'none'})
              },5000)
          }
        })
        .catch((error) => {
          console.log(error)
        })

      }
    }, [clickBet])
}

export default Add
