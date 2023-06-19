import React,{ useState }from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faGear} from '@fortawesome/free-solid-svg-icons'
import './navbarLeft.scss'

function NavbarLeft() {

  const [home, setHome] = useState()
  // let $ = document

  // const linavbarLeft = $.querySelectorAll('.navbar__item')
  // const navbarLeft = $.querySelectorAll('.navbar__item a i')
  // const textNavbarLeft = $.querySelectorAll('.navbar__item a span')


  // for (let i = 0; i < linavbarLeft.length; i++) {
  //   linavbarLeft[i].addEventListener('click',()=>{
  //     navbarLeft[i].style.color = localStorage.getItem('Theme')
  //     textNavbarLeft[i].style.color = localStorage.getItem('Theme')
  //     for (let j = 0; j < linavbarLeft.length; j++) {
  //       if (j != i) {
  //         navbarLeft[j].style.color = 'rgba(35, 35, 35, 0.685)'
  //       textNavbarLeft[j].style.color = 'rgba(35, 35, 35, 0.685)'
  //       }   
  //     }
  //   })
  // }

  const homeNavbar = ()=>{
    setHome({
      display: 'block'
    })
  }
  // Home.addEventListener('click',()=>{
  //   homePage.style.display = 'block'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'none'
  // })
  
  // cart.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'block'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'none'
  // })
  
  // profile.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'block'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'none'
  // })  
  
  // messages.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'block'
  //   settingsPage.style.display = 'none'
  // })
  
  // settings.addEventListener('click',()=>{
  //   homePage.style.display = 'none'
  //   cartPage.style.display = 'none'
  //   profilePage.style.display = 'none'
  //   messagesPage.style.display = 'none'
  //   settingsPage.style.display = 'block'
  // })

  // exit.addEventListener('click',()=>{
  //   localStorage.clear()
  //   window.location.href = '../../onlineShop.html';
  // })
  return (
    <>
    <nav className='navbar'>
        <ul className='navbar__menu'>
          <li onClick={homeNavbar} style={home} className='navbar__item'>
            <a className='navbar__link'>
            <i><FontAwesomeIcon icon={faHome} /></i>
            <span>Home</span></a>
          </li>
          <li  className='navbar__item'>
            <a className='navbar__link'>
            <div className='shopping-cart' data-product-count='0'>
              <i className='bi bi-bag-fill'></i>
            </div>
            <span>Cart</span></a>        
          </li>
          <li  className='navbar__item'>
            <a className='navbar__link'>
            <i className='bi bi-person-circle'></i>
            <span>Profile</span></a>        
          </li>
          <li  className='navbar__item'>
            <a className='navbar__link'>
            <i className='bi bi-chat-left-dots-fill'></i>
            <span>Messages</span></a>        
          </li>
          <li  className='navbar__item'>
            <a className='navbar__link'>
            <i><FontAwesomeIcon icon={faGear} /></i>
            <span>Settings</span></a>          
          </li>
          <li  className='navbar__item'>
            <a className='navbar__link'>
            <i className='bi bi-box-arrow-left'></i>
            <span>Exit</span></a>          
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavbarLeft