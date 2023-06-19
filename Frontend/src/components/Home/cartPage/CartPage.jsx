import React from 'react'
import './cartPage.scss'

function CartPage() {

  return (
    <>
      <div id="cartPage" className="cart">
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