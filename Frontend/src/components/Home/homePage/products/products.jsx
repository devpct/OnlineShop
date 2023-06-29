import React,{ useState , useEffect , useContext } from 'react'
import './products.scss'
import { CustomerDataContext , NumberGoodsContext , CartProductsContext } from '../../../../context/home/HomeContext'
import GetProductCart from '../../../../hooks/cart/get'
import GetProducts from '../../../../hooks/product/get'
import Add from '../../../../hooks/cart/add'

function products({categoryId}) {

    const [productData, setProductData] = useState('')
    const [products, setProducts] = useState()
    const [customerData, setCustomerData] = useContext(CustomerDataContext)
    const [productInformation, setProductInformation] = useState()
    const [numberGoods, setNumberGoods] = useContext(NumberGoodsContext)
    const [quantityMap, setQuantityMap] = useState({})
    const [cartProducts, setCartProducts] = useContext(CartProductsContext)

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
      
      const addCart = (productId) => {
          const updatedProducts = products.map((product) => {
            if (product.productId === productId) {
              return {
                ...product,
                valueStatus: 'In Cart',
                styleCart: { background: '#fdbc0a'}
              }
            }
          return product
        })
        setProducts(updatedProducts)
        setNumberGoods((prevNumberGoods) => prevNumberGoods + 1)
        setProductInformation(
          {
            customerId: customerData.id,
            productId: productId,
            quantity: +document.getElementById(`product-input-${productId}`).value,
            status: 'cart'
          }
        )
    }

  return (
    <>
        {products !== undefined && (
            <div className='box-product'>
            <div className='con-cards'>
                {products.map((product) => (
                    <div className='card' 
                    key={product.productId}
                    style={{display: `${product.categoryId.id === categoryId ? 'block' : 'none'}`}}
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
                    <span>${(product.price * (quantityMap[product.productId] || 1)).toLocaleString('en-US')}</span>
                  </div>
                  <div className="con-conallinputbtns">
                    <div className="con-input-btns">
                      <button disabled={product.valueStatus !== 'Add to Cart'} onClick={()=> minusProduct(product.productId)}><i className='bi bi-dash-lg'></i></button>
                      <input 
                      disabled={product.valueStatus !== 'Add to Cart'}
                      type="text" 
                      value={quantityMap[product.productId] || 1}
                      id={`product-input-${product.productId}`}
                      readOnly
                      />
                      <button disabled={product.valueStatus !== 'Add to Cart'} onClick={()=> plusProduct(product.productId)}><i className='bi bi-plus-lg'></i></button>
                    </div>
                    <div className='con-btn'>
                      <button
                        style={product.styleCart}
                        disabled={product.valueStatus !== 'Add to Cart'}
                        onClick={() => addCart(product.productId)}
                        className='add'
                        >
                        {product.valueStatus === undefined ? product.valueStatus = 'Add to Cart' : product.valueStatus}
                      </button>
                    </div>
                  </div>
                  </div>
                ))}
            </div>
        </div>
    )}
    <GetProducts setProducts={setProducts}/>
    <GetProductCart setProducts={setProducts}/>
    <Add productInformation={productInformation}/>
    </>
  )
}

export default products