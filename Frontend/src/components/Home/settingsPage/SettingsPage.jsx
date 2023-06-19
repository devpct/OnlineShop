import React from 'react'
import './settingsPage.scss'

function SettingsPage() {

  return (
    <>
      <div id="settingsPage" className="settings">
        <h1>Settings</h1>
        <h2>Theme</h2>
      <div className="box-color-theme">
          <div className="btn-theme">
            <button className="bt color-gold" data-color="rgb(252, 185, 0)"></button>
              <button className="bt color-blue" data-color="rgb(53, 150, 254)"></button>
              <button className="bt color-red" data-color="rgb(255, 5, 138)"></button>
              <button className="bt color-green" data-color="rgb(26, 172, 38)"></button>
              <button className="bt color-yellow" data-color="rgb(192, 189, 37)"></button>
          </div>
      </div>
  
      </div>
    </>
  )
}

export default SettingsPage