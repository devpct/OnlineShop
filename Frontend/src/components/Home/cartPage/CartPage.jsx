import React,{ useContext , useState , useEffect }from 'react'
import { CartPageContext , CartProductsContext } from '../../../context/home/HomeContext'
import './cartPage.scss'
import '../homePage/homePage.scss'

function CartPage() {

  const [cartPage, setCartPage] = useContext(CartPageContext)
  const [cartProducts, setCartProducts] = useContext(CartProductsContext)
  const [quantityMap, setQuantityMap] = useState({})

  useEffect(()=>{
   console.log(cartProducts)
  },[cartProducts])

  const minusProduct = (productId) => {
    setQuantityMap((prevQuantityMap) => {
      const currentQuantity = prevQuantityMap[productId] || 1
      const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : currentQuantity
      return { ...prevQuantityMap, [productId]: newQuantity }
    })
  }
  

  const plusProduct = (productId) => {
    setQuantityMap((prevQuantityMap) => {
      const currentQuantity = prevQuantityMap[productId] || 1
      const newQuantity = currentQuantity + 1
      return { ...prevQuantityMap, [productId]: newQuantity }
    })
  }

  const buy = (productId) => {
    const updatedProducts = cartProducts.map((product) => {
      if (product.productId === productId) {
        return {
          ...product,
          valueStatus: 'Sent',
          styleCart: { background: 'green'}
        }
      }
    return product
  })
  setCartProducts(updatedProducts)
}

  return (
    <>
    { cartProducts !== '' && cartProducts.length > 0 ?
     <div style={cartPage} className="cart">
      <h1>Cart</h1>
      <div className="box-product">
        <div className="con-cards">
            {cartProducts.map((product) => (
                   <div className='card' 
                   key={product.productId}
                   >
                   <div className='con-image'>
                     <img className='img' src={product.image} />
                     <img className='bg' src={product.image} />
                   </div>
                   <div className="con-textprice">
                     <div className="con-text">
                       <h3>{product.productName}</h3>
                       <p>{product.description}</p>
                     </div>
                   </div>
                   <div className="con-price">
                     <span>${(product.price * (quantityMap[product.productId] || product.quantity)).toLocaleString('en-US')}</span>
                   </div>
                   <div className="con-conallinputbtns">
                     <div className="con-input-btns">
                       <button disabled={product.valueStatus !== 'Buy'} onClick={()=> minusProduct(product.productId)}><i className='bi bi-dash-lg'></i></button>
                       <input 
                       disabled={product.valueStatus !== 'Buy'}
                       type="text" 
                       value={quantityMap[product.productId] || product.quantity}
                       id={`product-input-${product.productId}`}
                       readOnly
                       />
                       <button disabled={product.valueStatus !== 'Buy'} onClick={()=> plusProduct(product.productId)}><i className='bi bi-plus-lg'></i></button>
                     </div>
                     <div className='con-btn'>
                       <button
                         style={product.styleCart}
                         disabled={product.valueStatus !== 'Buy'}
                         onClick={() => buy(product.productId)}
                         className='add'
                         >
                         {product.valueStatus}
                       </button>
                     </div>
                   </div>
                   </div>
                 ))}
           </div> 
           </div>
      </div>
    : 
    <div style={cartPage} className="cart">
      <h1>Cart</h1>
    <h1 id="emptyBasket">
      <i className="bi bi-bag-x-fill"></i> 
      The shopping cart is empty
    </h1>
    </div>
    }
    </>
  )
}

export default CartPage