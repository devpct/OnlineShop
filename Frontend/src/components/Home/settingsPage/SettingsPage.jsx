import React ,{ useContext , useEffect } from 'react'
import { SettingsPageContext } from '../../../context/home/HomeContext'
import './settingsPage.scss'

function SettingsPage() {

  const [settingsPage, setSettingsPage] = useContext(SettingsPageContext)

  useEffect(()=>{
    document.documentElement.style.setProperty('--theme-color',localStorage.getItem('Theme'))
    document.documentElement.style.setProperty('--swiper-theme-color',localStorage.getItem('Theme'))

    if (!localStorage.getItem('Theme')) {
      localStorage.setItem('Theme','rgb(252, 185, 0)')
    }
  },[])

  const changeTheme = (color)=>{
    localStorage.setItem('Theme',color)
    document.documentElement.style.setProperty('--theme-color',color)
    document.documentElement.style.setProperty('--swiper-theme-color',color)
  }

  return (
    <>
      <div style={settingsPage} className="settings">
        <h1>Settings</h1>
        <h2>Theme</h2>
      <div className="box-color-theme">
          <div className="btn-theme">
            <button onClick={()=> changeTheme('rgb(252, 185, 0)')} className="color-gold"></button>
            <button onClick={()=> changeTheme('rgb(53, 150, 254)')} className="color-blue"></button>
            <button onClick={()=> changeTheme('rgb(255, 5, 138)')} className="color-red"></button>
            <button onClick={()=> changeTheme('rgb(26, 172, 38)')} className="color-green"></button>
            <button onClick={()=> changeTheme('rgb(192, 189, 37)')} className="color-yellow"></button>
          </div>
      </div>
  
      </div>
    </>
  )
}

export default SettingsPage