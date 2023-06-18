import React from 'react'
import './navbarTop.scss'

function NavbarTop() {
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

  return (
    <>
      <nav className='navbar-top'>
        <div className='css-typing'>
            <h1>
                online Shop
            </h1>
        </div>
        <div className='data-user'>
            <img src='../../../public/images/home/iconUser.png'/>
            <p>{localStorage.getItem('username')}</p>
        </div>
        <div className='nav-icon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  )
}

export default NavbarTop