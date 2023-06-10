import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import NotFound from './pages/notFound/NotFound'
import Home from './pages/Home/Home'

let router = [
    {path: '/', element:<Login/>},
    {path: 'login' , element:<Login/>},
    {path: 'signup' , element:<Signup/>},
    {path: 'home' , element:<Home/>},
    {path: '*' , element:<NotFound/>}
]

export default router