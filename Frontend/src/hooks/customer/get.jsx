import React, { useEffect, useState , useContext} from 'react'
import { useNavigate} from 'react-router-dom'
import { AlertunameContext } from '../../context/signupLogin/FormContext'
import { ModalContainerContext } from '../../context/signupLogin/FormContext'
import { ValueNullBetContext } from '../../context/signupLogin/FormContext'


function Get({inputsValueSignup , clickBetLogin , inputsValueLogin , setclickBetLogin}) {
  const [customers, setCustomers] = useState([])
  const [alertuname, setAlertuname] = useContext(AlertunameContext)
  const [modalContainer , setModalContainer] = useContext(ModalContainerContext)
  const [valueNullBet, setValueNullBet] = useContext(ValueNullBetContext)
  const LoginUser = useNavigate()

  useEffect(() => {
    fetch('http://127.0.0.1:8000/data/customers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      setCustomers(response.data)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])


// usename signup
useEffect(() => {
  let found = false
  customers.forEach(customer => {
    if (inputsValueSignup && inputsValueSignup.username) {
      if (customer.username === inputsValueSignup.username) {
        setAlertuname({
          display: 'block'
        });
        found = true;
        return
      }
    }
  });
  
  if (!found) {
    setAlertuname({
      display: 'none'
    });
  }
}, [inputsValueSignup])


//login
useEffect(() => {
  if (clickBetLogin) {
    let found = false
    customers.forEach(customer => {
      if (inputsValueLogin && inputsValueLogin.username && inputsValueLogin.password) {
        if (customer.username === inputsValueLogin.username && customer.password === inputsValueLogin.password) {
          setValueNullBet(true)
          setModalContainer({
            display: 'block' ,
            description: 'Login was successful',
            icon: 'bi bi-check-circle-fill',
            backgroundColor: 'rgb(84, 169, 84)',
            color: '#fff'
          })

          localStorage.setItem('username', inputsValueLogin.username);

          setTimeout(()=>{
            setModalContainer({display: 'none'})
            LoginUser('/home')
          },3000)
          found = true
          return
        }
      }
    });
    
    if (!found) {
      setclickBetLogin(false)
      setModalContainer({
        display: 'block' ,
        description: 'The information entered is incorrect',
        icon: 'bi bi-exclamation-triangle-fill',
        backgroundColor: 'rgb(232, 44, 44)',
        color: '#fff'
      })
      setTimeout(()=>{
        setModalContainer({display: 'none'})
      },4000)
    }
    }
  }, [clickBetLogin])
}
export default Get