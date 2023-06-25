import React,{ useContext , useState }from 'react'
import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faGear} from '@fortawesome/free-solid-svg-icons'
import { HomePageContext , CartPageContext , ProfilePageContext , MessagesPageContext , SettingsPageContext } from '../../../context/home/HomeContext'
import './navbarLeft.scss'

function NavbarLeft() {

  const [homePage, setHomePage] = useContext(HomePageContext)
  const [cartPage, setCartPage] = useContext(CartPageContext)
  const [profilePage, setProfilePage] = useContext(ProfilePageContext)
  const [messagesPage, setMessagesPage] = useContext(MessagesPageContext)
  const [settingsPage, setSettingsPage] = useContext(SettingsPageContext)
  const [homeIcon, setHomeIcon] = useState({color:'var(--theme-color)'})
  const [cartIcon, setCartIcon] = useState({color:'rgba(35, 35, 35, 0.685)'})
  const [profileIcon, setProfileIcon] = useState({color:'rgba(35, 35, 35, 0.685)'})
  const [messagesIcon, setMessagesIcon] = useState({color:'rgba(35, 35, 35, 0.685)'})
  const [settingsIcon, setSettingsIcon] = useState({color:'rgba(35, 35, 35, 0.685)'})

  const exit = useNavigate()


  const homeNavbar = ()=>{
    document.title = 'Home | Online Shop'
    setHomePage({display: 'block'})
    setHomeIcon({color: 'var(--theme-color)'})
    setCartPage({display: 'none'})
    setCartIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setProfilePage({display: 'none'})
    setProfileIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setMessagesPage({display: 'none'})
    setMessagesIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setSettingsPage({display: 'none'})
    setSettingsIcon({color: 'rgba(35, 35, 35, 0.685)'})
  }

  const cartNavbar = ()=>{
    document.title = 'Cart | Online Shop'
    setHomePage({display: 'none'})
    setHomeIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setCartPage({display: 'block'})
    setCartIcon({color: 'var(--theme-color)'})
    setProfilePage({display: 'none'})
    setProfileIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setMessagesPage({display: 'none'})
    setMessagesIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setSettingsPage({display: 'none'})
    setSettingsIcon({color: 'rgba(35, 35, 35, 0.685)'})

  }

  const profileNavbar = ()=>{
    document.title = 'Profile | Online Shop'
    setHomePage({display: 'none'})
    setHomeIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setCartPage({display: 'none'})
    setCartIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setProfilePage({display: 'block'})
    setProfileIcon({color: 'var(--theme-color)'})
    setMessagesPage({display: 'none'})
    setMessagesIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setSettingsPage({display: 'none'})
    setSettingsIcon({color: 'rgba(35, 35, 35, 0.685)'})
  }

  const messagesNavbar = ()=>{
    document.title = 'Messages | Online Shop'
    setHomePage({display: 'none'})
    setHomeIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setCartPage({display: 'none'})
    setCartIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setProfilePage({display: 'none'})
    setProfileIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setMessagesPage({display: 'block'})
    setMessagesIcon({color: 'var(--theme-color)'})
    setSettingsPage({display: 'none'})
    setSettingsIcon({color: 'rgba(35, 35, 35, 0.685)'})
  }

  const settingsNavbar = ()=>{
    document.title = 'Settings | Online Shop'
    setHomePage({display: 'none'})
    setHomeIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setCartPage({display: 'none'})
    setCartIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setProfilePage({display: 'none'})
    setProfileIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setMessagesPage({display: 'none'})
    setMessagesIcon({color: 'rgba(35, 35, 35, 0.685)'})
    setSettingsPage({display: 'block'})
    setSettingsIcon({color: 'var(--theme-color)'})
  }

  const exitNavbar = ()=>{
    localStorage.clear()
    exit('/login')
  }

  return (
    <>
    <nav className='navbar'>
        <ul className='navbar__menu'>
          <li onClick={homeNavbar} className='navbar__item'>
            <a style={homeIcon} className='navbar__link'>
            <i><FontAwesomeIcon icon={faHome} /></i>
            <span>Home</span>
            </a>
          </li>
          <li onClick={cartNavbar}  className='navbar__item'>
            <a style={cartIcon} className='navbar__link'>
            <div className='shopping-cart' data-product-count='0'>
              <i className='bi bi-bag-fill'></i>
            </div>
            <span>Cart</span>
            </a>        
          </li>
          <li onClick={profileNavbar} className='navbar__item'>
            <a style={profileIcon} className='navbar__link'>
            <i className='bi bi-person-circle'></i>
            <span>Profile</span>
            </a>        
          </li>
          <li onClick={messagesNavbar} className='navbar__item'>
            <a style={messagesIcon} className='navbar__link'>
            <i className='bi bi-chat-left-dots-fill'></i>
            <span>Messages</span>
            </a>        
          </li>
          <li style={settingsIcon} onClick={settingsNavbar} className='navbar__item'>
            <a className='navbar__link'>
            <i><FontAwesomeIcon icon={faGear} /></i>
            <span>Settings</span>
            </a>          
          </li>
          <li onClick={exitNavbar} className='navbar__item'>
            <a className='navbar__link'>
            <i className='bi bi-box-arrow-left'></i>
            <span>Exit</span>
            </a>          
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarLeft