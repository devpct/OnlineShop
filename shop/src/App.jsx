import { useState } from 'react'
import {useRoutes} from 'react-router-dom'
import router from './router'
import Context from './context/context'

function App() {

  let routers = useRoutes(router)

  return (
    <>
    <Context>
      {routers}
    </Context>
    </>
  )
}

export default App
