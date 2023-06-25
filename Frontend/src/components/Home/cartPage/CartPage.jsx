import React,{ useContext }from 'react'
import { CartPageContext } from '../../../context/home/HomeContext'
import './cartPage.scss'

function CartPage() {

  const [cartPage, setCartPage] = useContext(CartPageContext)

  return (
    <>
      <div style={cartPage} className="cart">
        <h1>Cart</h1>
        <div className="box-product">
           <div className="con-cards-0 con-cards">
          </div> 
          </div>
        <h1 id="emptyBasket">
            <i className="bi bi-bag-x-fill"></i> 
            The shopping cart is empty
        </h1>
      </div>
    </>
  )
}

export default CartPage