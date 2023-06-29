import React, { useEffect } from 'react'
import axios from 'axios'

function Get({ setProducts }) {

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/data/products')
      .then(response => {
          const products = response.data.data
          setProducts(products)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return null
}

export default Get
