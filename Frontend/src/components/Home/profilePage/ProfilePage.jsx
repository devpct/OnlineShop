import React,{ useContext , useState , useEffect }from 'react'
import { ProfilePageContext , CustomerDataContext } from '../../../context/home/HomeContext'
import Inputs from '../../SignupLogin/inputs/Inputs'
import ButtonSignup from '../../../../public/svg/ButtonSignup'
import ModalContainer from '../../SignupLogin/modalContainer/ModalContainer'
import { AlertunameContext } from '../../../context/signupLogin/FormContext'
import Get from '../../../hooks/customer/get'
import Update from '../../../hooks/customer/update'
import './profilePage.scss'

function ProfilePage() {

  const [alertuname, setAlertuname] = useContext(AlertunameContext)
  const [inputsValueSignup, setinputsValueSignup] = useState('')
  const [clickBetUpdate , setclickBetUpdate] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [profilePage, setProfilePage] = useContext(ProfilePageContext)
  const [customerData, setCustomerData] = useContext(CustomerDataContext)

  useEffect(()=>{
    if (customerData.username !== undefined) {
      setinputsValueSignup((previnputsValueSignup) => {
        return {
          ...previnputsValueSignup,
          id: customerData.id
        }
    })
    }
  },[customerData])

  const updata = (event) => {
    event.preventDefault()
    if (
      inputsValueSignup.nameLastname !== undefined &&
      inputsValueSignup.username !== undefined &&
      inputsValueSignup.password !== undefined &&
      inputsValueSignup.email !== undefined &&
      inputsValueSignup.phoneNumber !== undefined &&
      inputsValueSignup.city !== undefined &&
      inputsValueSignup.address !== undefined &&
      inputsValueSignup.nationalCode !== undefined &&
      alertuname.display !== 'block' &&
      inputsValueSignup.password.length === 8
      ) {
      setclickBetUpdate(true)
    } else {
      setclickBetUpdate(false)
    }
  }

  return (
    <>
      { customerData.nameLastname !== '' && (
      <div style={profilePage} className="profile">
        <h1>Profile</h1>
        <form className='edit-signup'>
          
        <Inputs
        inputsCount={2}
        labels={['Name and Last Name','User Name']}
        maxLengths={[35,23]}
        setinputsValueSignup={setinputsValueSignup}
        userNameSignup={true}
        value={[customerData.nameLastname,customerData.username]}
        />

        <Inputs
        inputsCount={2}
        labels={['Password','Email']} 
        types={['password','email']}
        maxLengths={[
          35]}
        setinputsValueSignup={setinputsValueSignup}
        value={[customerData.password,customerData.email]}
        />

        <Inputs
        inputsCount={2}
        labels={['Phone Number','City']} 
        ids={['phoneNum']}
        maxLengths={[11,15]}
        minLengths={[11,2]}
        idLabels={['lphoneNum']}
        setinputsValueSignup={setinputsValueSignup}
        value={[customerData.phoneNumber,customerData.city]}
        />

        <Inputs
        labels={['Address']}
        maxLengths={[120]} 
        setinputsValueSignup={setinputsValueSignup}
        value={[customerData.address]}
        />

        <Inputs
        labels={['National Code']} 
        maxLengths={[10]}
        minLengths={[8]} 
        setinputsValueSignup={setinputsValueSignup}
        value={[customerData.nationalCode]}
        />
        
    <div className="field">
      <button className={`btn btn-signup ${isRunning ? 'btn--running' : ''} ${isDone ? 'btn--done' : ''}`} type="submit" onClick={updata}>
        <span className="btn__text">Editing</span>
        <ButtonSignup/>
      </button>
    </div>
      </form>
      <p className='registration-time'><b>RegistrationTime :</b> {customerData.registrationTime}</p>
      </div>
      )}
      <ModalContainer  />
      <Get inputsValueSignup={inputsValueSignup}/>
      <Update 
      inputsValueSignup={inputsValueSignup}
      clickBetUpdate={clickBetUpdate}
      setclickBetUpdate={setclickBetUpdate}
      isRunning={isRunning}
      setIsRunning={setIsRunning}
      isDone={isDone}
      setIsDone={setIsDone}
      />
    </>
  )
}

export default ProfilePage