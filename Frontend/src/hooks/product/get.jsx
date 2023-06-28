import React, { useEffect } from 'react'
import axios from 'axios'

function Get({ setProducts }) {

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/data/products')
      .then(response => {
        setProducts(response.data.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return null
}

export default Get
