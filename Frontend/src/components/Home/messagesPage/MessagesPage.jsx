import React,{ useContext }from 'react'
import { MessagesPageContext } from '../../../context/home/HomeContext'
import './messagesPage.scss'

function MessagesPage() {

  const [messagesPage, setMessagesPage] = useContext(MessagesPageContext)

  return (
    <>
      <div style={messagesPage} className="messages">    
        <div className="msg-bubble">
            <div className="msg-info">
                <div className="msg-info-name">Online Shop</div>
                <div className="msg-info-time">10:46</div>
            </div>
            <div className="msg-text">
                Hello, welcome to Mammad store. 😄
            </div>
        </div>
        <div className="msg-bubble">
            <div className="msg-info">
            <div className="msg-info-name">Online Shop</div>
            <div className="msg-info-time">10:50</div>
            </div>
        <div className="msg-text">
        The new 50% discount code is available for up to 1 month for dear customers <br/><br/>
        Discount code: onlineshop
        </div>
        </div>
      </div>  
    </>
  )
}

export default MessagesPage