import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { CustomerDataContext, NumberGoodsContext } from '../../context/home/HomeContext'

function Get({ setProductData }) {

  const [numberGoods, setNumberGoods] = useContext(NumberGoodsContext)
  const [customerData, setCustomerData] = useContext(CustomerDataContext)

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/data/carts')
        .then(response => {
          const filteredProducts = response.data.data.filter(
            cart => cart.customerId === customerData.id
            )
          const productsCart = filteredProducts.map(cart => ({
            productId: cart.productId,
            quantity: cart.quantity,
            status: cart.status
          }))
          setProductData(productsCart)
          setNumberGoods(filteredProducts.length)
        })
        .catch(error => {
          console.error(error)
        })
  },[customerData])

  return null
}

export default Get
