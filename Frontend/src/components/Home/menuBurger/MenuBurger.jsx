import React,{ useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faGear} from '@fortawesome/free-solid-svg-icons'
import { MenuBurgerContext , ClosePageContext , QtyMenuBurgerContext , MenuIconChangeContext } from '../../../context/home/HomeContext'
import './menuBurger.scss'

function MenuBurger() {

  const [menuBurger , setMenuBurger] = useContext(MenuBurgerContext)
  const [closePage , setClosePage] = useContext(ClosePageContext)
  const [qtyMenuBurger, setQtyMenuBurger] = useContext(QtyMenuBurgerContext)
  const [menuIconChange, setMenuIconChange] = useContext(MenuIconChangeContext)

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


  // Homee.addEventListener('click',()=>{
  //   homePage.style.display = 'block'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'none'
  // })
  
  // cartt.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'block'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'none'
  // })
  
  // profilee.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'block'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'none'
  // })
  
  // messagess.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'block'
  //   settingsPage.style.display = 'none'
  // })
  
  // settingss.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'block'
  // })

  // exitt.addEventListener('click',()=>{
  //   localStorage.clear()
  //   window.location.href = '../../onlineShop.html';
  // })
  return (
    <>
    <div style={menuBurger} className='menuBurger'>
      <div className='data-userr'>
        <img src='../../../public/images/home/iconUser.png'/>
        <p>{localStorage.getItem('username')}</p>
      </div>
      <ul>
        <li>
          <i><FontAwesomeIcon icon={faHome} /></i>
          <span>Home</span>
        </li>
        <li>
          <i className='bi bi-bag-fill'></i>
          <span>Cart</span>
        </li>
        <li>
          <i className='bi bi-person-circle'></i>
          <span>Profile</span>
        </li>
        <li>
          <i className='bi bi-chat-left-dots-fill'></i>
          <span>Messages</span>
        </li>
        <li>
          <i><FontAwesomeIcon icon={faGear} /></i>
          <span>Settings</span>
        </li>
        <li>
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