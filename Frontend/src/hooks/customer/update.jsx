import React,{ useEffect , useContext} from 'react'
import axios from 'axios'
import { ModalContainerContext } from '../../context/signupLogin/FormContext'
import { CustomerDataContext } from '../../context/home/HomeContext'

function Update({clickBetUpdate , inputsValueSignup , isRunning , setIsRunning , isDone , setIsDone , setclickBetUpdate}) {

    const [modalContainer , setModalContainer] = useContext(ModalContainerContext)  
    const [customerData, setCustomerData] = useContext(CustomerDataContext)
    const submitDuration = 2000
    const resetDuration = 1500
    
  useEffect(() => {
    if (clickBetUpdate) {
      axios.put('http://127.0.0.1:8000/update/customer', { 
        id: inputsValueSignup.id,
        username: inputsValueSignup.username,
        nameLastname: inputsValueSignup.nameLastname,
        password: inputsValueSignup.password,
        email: inputsValueSignup.email,
        phoneNumber: '0'+inputsValueSignup.phoneNumber,
        city: inputsValueSignup.city,
        address: inputsValueSignup.address,
        nationalCode: inputsValueSignup.nationalCode,
       })
        .then(response => {
          if (response.status === 200) {
            localStorage.setItem('username', inputsValueSignup.username)
              if (isRunning || isDone) return
          
              setIsRunning(true)
              
              setTimeout(() => {
                setIsRunning(false)
                setIsDone(true)
                
              setTimeout(() => {
                setIsDone(false)
              }, resetDuration)
            }, 600 + submitDuration)
              setTimeout(()=>{
              setCustomerData({nameLastname : inputsValueSignup.nameLastname})
              setModalContainer({
                display: 'block' ,
                description: 'Information edited successfully',
                icon: 'bi bi-check-circle-fill',
                backgroundColor: 'rgb(84, 169, 84)',
                color: '#fff'
              })
              },2300)
              setTimeout(()=>{
                setModalContainer({display: 'none'})
              },5000)
              setclickBetUpdate(false)
            }
        })
        .catch(error => {         
          console.error(error)
        })
      }
    }, [clickBetUpdate])
}

export default Update