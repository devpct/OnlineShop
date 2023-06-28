import React, { useEffect } from 'react'
import axios from 'axios'

function Get({ setCategory }) {

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/data/categorys')
      .then(response => {
        setCategory(response.data.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return null
}

export default Get
