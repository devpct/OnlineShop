import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faGear} from '@fortawesome/free-solid-svg-icons'
import './menuBurger.scss'

function MenuBurger() {

  let $ = document

  const menuIcon = $.getElementById('nav-icon1')
  let i = 0
  // menuIcon.addEventListener('click',()=>{
  //   if (i%2==0) {
  //     menuIcon.classList.add('open')
  //     menuBurger.style.display = 'block'
  //     menuBurger.style.left = '0'
  //     closePage.style.display = 'block'
  //   }else{
  //     menuIcon.classList.remove('open')
  //     menuBurger.style.left = '-20rem'
  //     closePage.style.display = 'none'
  //   }
  //   i++
  // }) 
  // closePage.addEventListener('click',()=>{
  //   menuIcon.classList.remove('open')
  //   menuBurger.style.left = '-20rem'
  //   closePage.style.display = 'none'
  //   i++
  // })

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
    <div className='menuBurger'>
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
    <div id='closePage'></div>
    </>
  )
}

export default MenuBurger