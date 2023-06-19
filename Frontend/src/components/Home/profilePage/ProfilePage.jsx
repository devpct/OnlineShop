import React from 'react'
import './profilePage.scss'

function ProfilePage() {

  return (
    <>
      <div id="profilePage" className="profile">
        <h1>Profile</h1>
         {/* <form action="#" class="signup">
          <div class="tow-box">
            <div class="field">
              <input id="nameLast" type="text" maxlength="35" required>
              <label>Name & Last Name</label>
          </div>
            <div class="field">
              <input id="username" type="text" maxlength="22" required onkeypress="return /[a-zA-Z_]/.test(String.fromCharCode(event.keyCode))">
              <label>User Name</label>
          </div>
          <p id="alertuname">This name has already been used</p>

        </div>
        <div class="tow-box">
        <div class="field box-pass">
          <input id="pass" class="password" type="password"
          maxlength="8" required>
          <label>Password</label>
            <i class="icon-password  bi-eye-slash-fill"></i>
          </div>
          <p id="alertpass">The password must be 8 digits</p>
          <div class="field">
            <input id="email" type="email" maxlength="35" required>
            <label id="lemail" >Email</label>
          </div>
          </div>
        <div class="tow-box">
          <div class="field">
            <input id="phoneNum" type="text" minlength="10"
            maxlength="10" value="" required>
            <label id="lphoneNum">Phone Number</label>
            <p class="Ne">+98</p>
          </div>
          <div class="field">

            <input id="city" type="text" minlength="2"
            maxlength="15" required>
            <label id="lcity">City</label>
          </div>
        </div>
          <div class="field">
            <textarea id="address" maxlength="120">
            </textarea>
            <label id="laddress">Address</label>
          </div>
          <div class="field">
            <input id="nationalCode" type="text" minlength="7"
            maxlength="10" required>
            <label id="lnationalCode">National Code</label>
          </div>
          <div class="field">
            <button class="btn btn-signup" type="submit">
              <span class="btn__text">Updata</span>
              <svg class="btn__progress" viewBox="0 0 48 48" width="48px" height="48px">
                <circle class="btn__progress-track" r="20" cx="24" cy="24" fill="none" stroke="#c7cad1" stroke-width="8" />
                <circle class="btn__progress-fill" r="20" cx="24" cy="24" fill="none" stroke="#000000" stroke-width="8" transform="rotate(-90,24,24)" stroke-dasharray="125.66 125.66" stroke-dashoffset="125.66" />
                <polyline class="btn__progress-check" points="12,24 20,32 36,16" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="34 34" stroke-dashoffset="34" />
              </svg>
            </button>
          </div>
        </form> */}
      </div>
    </>
  )
}

export default ProfilePage