import React,{ useEffect , useContext} from 'react'
import { ModalContainerContext } from '../../context/signupLogin/FormContext'
import { UsernameContext } from '../../context/home/HomeContext'

function Update({clickBetUpdate , inputsValueSignup , isRunning , setIsRunning , isDone , setIsDone , setclickBetUpdate}) {

    const [modalContainer , setModalContainer] = useContext(ModalContainerContext)  
    const [username, setUsername] = useContext(UsernameContext)
    const submitDuration = 2000
    const resetDuration = 1500
    
  useEffect(() => {
    if (clickBetUpdate) {
        let formData = {
        'id': inputsValueSignup.id,
        'username': inputsValueSignup.username,
        'nameLastname': inputsValueSignup.nameLastname,
        'password': inputsValueSignup.password,
        'email': inputsValueSignup.email,
        'phoneNumber': '0'+inputsValueSignup.phoneNumber,
        'city': inputsValueSignup.city,
        'address': inputsValueSignup.address,
        'nationalCode': inputsValueSignup.nationalCode,
      }
      fetch('http://127.0.0.1:8000/update/customer', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log(response);
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
            setUsername({username : inputsValueSignup.nameLastname})
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
        .catch((error) => {
          console.log(error)
        })

      }
    }, [clickBetUpdate])
}

export default Update