import React,{ useContext , useRef , useEffect } from 'react'
import { MenuBurgerContext, ClosePageContext, QtyMenuBurgerContext, MenuIconChangeContext } from '../../../context/home/HomeContext'
import './navbarTop.scss'

function NavbarTop() {
  
  const [menuBurger, setMenuBurger] = useContext(MenuBurgerContext)
  const [closePage, setClosePage] = useContext(ClosePageContext)
  const [qtyMenuBurger, setQtyMenuBurger] = useContext(QtyMenuBurgerContext)
  const [menuIconChange, setMenuIconChange] = useContext(MenuIconChangeContext)

  const menuIcon = useRef()

  useEffect(() => {
    if (menuIconChange) {
      menuIcon.current.classList.add('open')
      setMenuIconChange(false)
    } else {
      menuIcon.current.classList.remove('open')
    }
  }, [menuIconChange, setMenuIconChange])

  const navBurger = () => {
    if (qtyMenuBurger % 2 === 0) {
      menuIcon.current.classList.add('open')
      setMenuBurger({
        display: 'block',
        left: '0'
      })
      setClosePage({
        display: 'block'
      })
    } else {
      menuIcon.current.classList.remove('open')
      setMenuBurger({
        left: '-20rem'
      })
      setClosePage({
        display: 'none'
      })
    }
    setQtyMenuBurger(prevI => prevI + 1)
  }


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
        <div ref={menuIcon} onClick={navBurger} className='nav-icon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  )
}

export default NavbarTop