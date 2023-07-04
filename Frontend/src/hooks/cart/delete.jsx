import React,{ useEffect , useContext } from 'react'
import { CustomerDataContext , NumberGoodsContext } from '../../context/home/HomeContext'

import axios from 'axios'

function Delete({ removeCart , setRemoveCart , setProductsCart , products , setProducts }) {
  
  const [customerData, setCustomerData] = useContext(CustomerDataContext)
  const [numberGoods, setNumberGoods] = useContext(NumberGoodsContext)


    useEffect(() => {
        if (removeCart !== undefined) {
          axios.delete('http://127.0.0.1:8000/delete/cart', {
              data: {
                productId: removeCart,
                customerId: customerData.id
              }
            })
            .then(response => {
              console.log(products);
              const updatedProducts = products.map((product) => {
                if (product.productId === removeCart) {
                  return {
                    ...product,
                    valueStatus: 'Add to Cart',
                    styleCart: undefined
                  }
                }
                return product
              });
              setProducts(updatedProducts);              
              console.log(response)
            })
            .catch(error => {
              console.error(error)
            })
          setNumberGoods((prevNumberGoods) => prevNumberGoods - 1)
          setRemoveCart(undefined)
          setProductsCart('')
        }
      }, [removeCart])
      
}

export default Delete