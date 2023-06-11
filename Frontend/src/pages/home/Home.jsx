import React, {useEffect , useContext} from 'react'
import { CustomerContext } from '../../context/home/HomeContext'
import './Home.scss'

function Home() {
  const [customer, setCustomer] = useContext(CustomerContext)

    useEffect(() => {
    document.title = 'Home | Online Shop'
    }, [])

  return (
    <>
        <h1>mmd</h1>
    </>
  )
}

export default Home