import React,{ useEffect , useContext } from 'react'
import axios from 'axios'

function Add({productInformation}) {

    useEffect(()=>{
        if (productInformation !== undefined) {  
            axios.post('http://127.0.0.1:8000/add/cart', { 
                customerId: productInformation.customerId,
                productId: productInformation.productId,
                quantity: productInformation.quantity,
                status: productInformation.status,
               })
                .then(response => {
                  console.log(response)
                })
                .catch(error => {
                  console.error(error)
                })            
        }
    },[productInformation])
}

export default Add