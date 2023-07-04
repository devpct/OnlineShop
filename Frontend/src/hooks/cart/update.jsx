import React,{ useEffect , useContext} from 'react'
import axios from 'axios'
import { ModalContainerContext } from '../../context/signupLogin/FormContext'
import { CustomerDataContext } from '../../context/home/HomeContext'

function Update({ updateCart , setUpdateCart }) {

    const [modalContainer , setModalContainer] = useContext(ModalContainerContext)  
    const [customerData, setCustomerData] = useContext(CustomerDataContext)

    
  useEffect(() => {
    if (updateCart !== undefined) {
      axios.put('http://127.0.0.1:8000/update/cart', { 
        customerId: customerData.id,
        productId: updateCart.productId,
        quantity: updateCart.quantity,
        status: updateCart.status
       })
        .then(response => {
            console.log(response)
              setModalContainer({
                display: 'block' ,
                description: 'The purchase was made successfully',
                icon: 'bi bi-cart-check-fill',
                backgroundColor: 'rgb(84, 169, 84)',
                color: '#fff'
              })
              setTimeout(()=>{
                setModalContainer({display: 'none'})
              },4000)

        })
        .catch(error => {         
          console.error(error)
        })
        setUpdateCart(undefined)
      }
    }, [updateCart])
}

export default Update