import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import router from './router'

function App() {

  let routers = useRoutes(router)

  return (
    <>
      {routers}
    </>
  )
}

export default App
