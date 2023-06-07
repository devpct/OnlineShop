import React, { useContext, useEffect } from 'react'
import { ValueNullBetContext } from '../../context/signupLogin/FormContext'
import { ModalContainerContext } from '../../context/signupLogin/FormContext'
import { useNavigate} from 'react-router-dom'

function Add({ inputsValue , clickBet }) {

  const [valueNullBet, setValueNullBet] = useContext(ValueNullBetContext)
  const [modalContainer , setModalContainer] = useContext(ModalContainerContext)
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
        })
        .catch((error) => {
          console.log(error)
        })
        setValueNullBet(true)
        setTimeout(()=>{
        setModalContainer({
          display: 'block' ,
          description: 'Registration was successful',
          icon: 'bi bi-check2-circle',
          color: '#347d39'
        })
        },2300)
        setTimeout(()=>{
          setModalContainer({display: 'none'})
          signupUser('/login')
        },5000)
      }
    }, [clickBet])
}

export default Add
