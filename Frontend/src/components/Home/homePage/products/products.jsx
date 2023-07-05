import React,{ useState , useEffect , useContext } from 'react'
import './products.scss'
import { CustomerDataContext , NumberGoodsContext , CartProductsContext } from '../../../../context/home/HomeContext'
import GetProductCart from '../../../../hooks/cart/get'
import GetProducts from '../../../../hooks/product/get'
import Add from '../../../../hooks/cart/add'

function products({categoryId}) {

    const [productData, setProductData] = useState([])
    const [products, setProducts] = useState([])
    const [customerData, setCustomerData] = useContext(CustomerDataContext)
    const [productInformation, setProductInformation] = useState()
    const [numberGoods, setNumberGoods] = useContext(NumberGoodsContext)
    const [quantityMap, setQuantityMap] = useState({})
    const [cartProducts, setCartProducts] = useContext(CartProductsContext)

    useEffect(()=>{
      if (products !== undefined) {
          const initialProducts = products.map((product) => ({
          ...product,
          valueStatus: 'Add to Cart'
          }))
          setProducts(initialProducts)
      }
    },[productData])


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
      
      const addCart = (productId , valueStatus) => {
        if(valueStatus === 'Add to Cart'){
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
              status: 'In Cart'
            }
            )
          } 
          }
          
          return (
            <>
        {productData !== undefined &&  (
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
                  <span>${(product.price * (productData.some(item => item.productId === product.productId) ? productData.find(item => item.productId === product.productId).quantity : (quantityMap[product.productId] || 1))).toLocaleString('en-US')}</span>
                  </div>
                  <div className="con-conallinputbtns">
                    <div className="con-input-btns">
                      <button disabled={product.valueStatus !== 'Add to Cart'} onClick={()=> minusProduct(product.productId)}><i className='bi bi-dash-lg'></i></button>
                      <input 
                      disabled={product.valueStatus !== 'Add to Cart'}
                      type="text" 
                      value={productData.some(item => item.productId === product.productId) ? productData.find(item => item.productId === product.productId).quantity : (quantityMap[product.productId] || 1)}
                      id={`product-input-${product.productId}`}
                      readOnly
                      />
                      <button disabled={product.valueStatus !== 'Add to Cart'} onClick={()=> plusProduct(product.productId)}><i className='bi bi-plus-lg'></i></button>
                    </div>
                    <div className='con-btn'>
                    <button
                      disabled={product.valueStatus !== 'Add to Cart'}
                      style={
                        productData.some((item) => item.productId === product.productId)
                          ? productData.find((item) => item.productId === product.productId).status === 'In Cart'
                            ? { background: '#fdbc0a' }
                            : { background: '#24ad52' }
                          : product.styleCart
                      }
                      onClick={() => addCart(product.productId , product.valueStatus)}
                      className='add'
                    >
                      {productData.some((item) => item.productId === product.productId)
                        ? product.valueStatus = productData.find((item) => item.productId === product.productId).status
                        : product.valueStatus === undefined
                        ? 'Add to Cart'
                        : product.valueStatus}
                    </button>
                    </div>
                  </div>
                  </div>
                ))}
            </div>
        </div>
    )}
    <GetProductCart setProductData={setProductData}/>
    <GetProducts setProducts={setProducts}/>
    <Add productInformation={productInformation}/>
    </>
  )
}

export default products