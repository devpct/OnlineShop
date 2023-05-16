import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'

let router = [
    {path: '/' , element:<Login/>},
    {path: '*' , element:<NotFound/>}
]

export default router