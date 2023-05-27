import SignupLogin from './pages/signupLogin/SignupLogin'
import NotFound from './pages/notFound/NotFound'

let router = [
    {path: '/' , element:<SignupLogin/>},
    {path: '*' , element:<NotFound/>}
]

export default router