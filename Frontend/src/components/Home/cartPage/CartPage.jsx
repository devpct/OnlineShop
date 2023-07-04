import React,{ useContext , useState , useEffect }from 'react'
import { CartPageContext , CartProductsContext , ProductsCartContext } from '../../../context/home/HomeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Get from '../../../hooks/product/get'
import Delete from '../../../hooks/cart/delete'
import Update from '../../../hooks/cart/update'
import './cartPage.scss'
import '../homePage/homePage.scss'

function CartPage() {


  const [cartPage, setCartPage] = useContext(CartPageContext)
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useContext(CartProductsContext)
  const [quantityMap, setQuantityMap] = useState({})
  const [productsCart , setProductsCart] = useContext(ProductsCartContext)
  const [removeCart, setRemoveCart] = useState()
  const [updateCart, setUpdateCart] = useState()


  const minusProduct = (product) => {
    setQuantityMap((prevQuantityMap) => {
      const currentQuantity = prevQuantityMap[product.productId] || product.quantity
      const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : currentQuantity
      return { ...prevQuantityMap, [product.productId]: newQuantity }
    })
  }
  
  const plusProduct = (product) => {
    setQuantityMap((prevQuantityMap) => {
      const currentQuantity = prevQuantityMap[product.productId] || product.quantity
      const newQuantity = currentQuantity + 1
      return { ...prevQuantityMap, [product.productId]: newQuantity }
    })
  }

  const remove = (productId , event)=>{
    const cardElement = event.target.closest('.card')
    cardElement.remove()
    setRemoveCart(productId)
  }


  const buy = (product) => {
    const updatedProducts = productsCart.map((products) => {
      if (products.productId === product.productId) {
        return {
          ...products,
          valueStatus: 'Bought',
          styleCart: { background: '#4cae4c'}
        }
      }
    return products
  })
  setProductsCart(updatedProducts)
  setUpdateCart({productId: product.productId , quantity: product.quantity , status: 'Bought'})
} 

  return (
    <>
    { productsCart !== '' && productsCart.length > 0 ?
     <div style={cartPage} className="cart">
      <h1>Cart</h1>
      <div className="box-product">
        <div className="con-cards">
            {productsCart.map((product) => (
                   <div className='card' 
                   key={product.productId}
                   >
                   <div className='con-image'>
                     <img className='img' src={products.some((item) => item.productId === product.productId)
                      && products.find((item) => item.productId === product.productId).image} />
                     <img className='bg' src={products.some((item) => item.productId === product.productId)
                      && products.find((item) => item.productId === product.productId).image} />
                   </div>
                   <div className="con-textprice">
                     <div className="con-text">
                       <h3>{products.some((item) => item.productId === product.productId)
                      && products.find((item) => item.productId === product.productId).productName}</h3>
                       <p>{products.some((item) => item.productId === product.productId)
                      && products.find((item) => item.productId === product.productId).description}</p>
                     </div>
                   </div>
                   <div className="con-price">
                     <span>${(products.some((item) => item.productId === product.productId)
                      && products.find((item) => item.productId === product.productId).price * (quantityMap[product.productId] || product.quantity)).toLocaleString('en-US')}
                      </span>
                   </div>
                   <div className="con-conallinputbtns">
                     <div className="con-input-btns">
                       <button disabled={product.valueStatus !== 'Buy'} onClick={()=> minusProduct(product)}><i className='bi bi-dash-lg'></i></button>
                       <input 
                       disabled={product.valueStatus !== 'Buy'}
                       type="text" 
                       value={quantityMap[product.productId] || product.quantity}
                       id={`product-input-${product.productId}`}
                       readOnly
                       />
                       <button disabled={product.valueStatus !== 'Buy'} onClick={()=> plusProduct(product)}><i className='bi bi-plus-lg'></i></button>
                     </div>
                     { product.status !== 'Sent' ?
                      <div className='con-btn btns-card'>
                      <button onClick={() => remove(product.productId , event)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                       <button
                         style={product.status === 'Bought' || product.status === 'Sent' 
                          ? {background: '#4cae4c'}
                          : product.styleCart
                         }
                         disabled={product.valueStatus !== 'Buy'}
                         onClick={() => buy(product)}
                         className='add'
                         >
                         {product.status === 'Bought' || product.status === 'Sent' 
                         ? product.valueStatus = product.status
                         : product.valueStatus !== 'Bought'
                         ? product.valueStatus = 'Buy'
                         : product.valueStatus}
                       </button>
                     </div>
                     :
                     <div className='con-btn'>
                      <button
                        style={product.styleCart}
                        disabled={product.valueStatus !== 'Buy'}
                        onClick={() => buy(product)}
                        className='add'
                        >
                         {product.status === 'Bought' || product.status === 'Sent' 
                         ? product.valueStatus = product.status
                         : product.valueStatus !== 'Bought'
                         ? product.valueStatus = 'Buy'
                         : product.valueStatus} 
                      </button>
                    </div>
                      }
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
    <Get setProducts={setProducts}/>
    <Delete removeCart={removeCart} setRemoveCart={setRemoveCart} setProductsCart={setProductsCart}/>
    <Update updateCart={updateCart} setUpdateCart={setUpdateCart}/>
    </>
  )
}

export default CartPage