import React,{ useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faGear} from '@fortawesome/free-solid-svg-icons'
import { MenuBurgerContext , ClosePageContext , QtyMenuBurgerContext , MenuIconChangeContext ,HomePageContext , CartPageContext , ProfilePageContext , MessagesPageContext , SettingsPageContext} from '../../../context/home/HomeContext'
import './menuBurger.scss'

function MenuBurger() {

  const [menuBurger , setMenuBurger] = useContext(MenuBurgerContext)
  const [closePage , setClosePage] = useContext(ClosePageContext)
  const [qtyMenuBurger, setQtyMenuBurger] = useContext(QtyMenuBurgerContext)
  const [menuIconChange, setMenuIconChange] = useContext(MenuIconChangeContext)
  const [homePage, setHomePage] = useContext(HomePageContext)
  const [cartPage, setCartPage] = useContext(CartPageContext)
  const [profilePage, setProfilePage] = useContext(ProfilePageContext)
  const [messagesPage, setMessagesPage] = useContext(MessagesPageContext)
  const [settingsPage, setSettingsPage] = useContext(SettingsPageContext)

  const exit = useNavigate()

  const closeMenu = ()=>{
    setMenuIconChange(true)
    setMenuBurger({
      left: '-20rem'
    })
    setClosePage({
      display: 'none'
    })
    setQtyMenuBurger(prevI => prevI + 1)
  }

  const homeNavbar = ()=>{
    setHomePage({display: 'block'})
    setCartPage({display: 'none'})
    setProfilePage({display: 'none'})
    setMessagesPage({display: 'none'})
    setSettingsPage({display: 'none'})
  }

  const cartNavbar = ()=>{
    setHomePage({display: 'none'})
    setCartPage({display: 'block'})
    setProfilePage({display: 'none'})
    setMessagesPage({display: 'none'})
    setSettingsPage({display: 'none'})
  }

  const profileNavbar = ()=>{
    setHomePage({display: 'none'})
    setCartPage({display: 'none'})
    setProfilePage({display: 'block'})
    setMessagesPage({display: 'none'})
    setSettingsPage({display: 'none'})
  }

  const messagesNavbar = ()=>{
    setHomePage({display: 'none'})
    setCartPage({display: 'none'})
    setProfilePage({display: 'none'})
    setMessagesPage({display: 'block'})
    setSettingsPage({display: 'none'})
  }

  const settingsNavbar = ()=>{
    setHomePage({display: 'none'})
    setCartPage({display: 'none'})
    setProfilePage({display: 'none'})
    setMessagesPage({display: 'none'})
    setSettingsPage({display: 'block'})
  }

  const exitNavbar = ()=>{
    localStorage.removeItem('username');
    document.documentElement.style.setProperty('--theme-color','rgb(252, 185, 0)')
    exit('/login')
  }

  return (
    <>
    <div style={menuBurger} className='menuBurger'>
      <div className='data-userr'>
        <img src='../../../public/images/home/iconUser.png'/>
        <p>{localStorage.getItem('username')}</p>
      </div>
      <ul>
        <li onClick={homeNavbar}>
          <i><FontAwesomeIcon icon={faHome} /></i>
          <span>Home</span>
        </li>
        <li onClick={cartNavbar}>
          <i className='bi bi-bag-fill'></i>
          <span>Cart</span>
        </li>
        <li onClick={profileNavbar}>
          <i className='bi bi-person-circle'></i>
          <span>Profile</span>
        </li>
        <li onClick={messagesNavbar}>
          <i className='bi bi-chat-left-dots-fill'></i>
          <span>Messages</span>
        </li>
        <li onClick={settingsNavbar}>
          <i><FontAwesomeIcon icon={faGear} /></i>
          <span>Settings</span>
        </li>
        <li onClick={exitNavbar}>
          <i className='bi bi-box-arrow-left'></i>
          <span>Exit</span>
        </li>
      </ul>
    </div>
    <div onClick={closeMenu} style={closePage} className='closePage'></div>
    </>
  )
}

export default MenuBurger