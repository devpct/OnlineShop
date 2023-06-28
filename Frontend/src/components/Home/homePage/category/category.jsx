import React,{ useState , useEffect } from 'react'
import './category.scss'
import Get from '../../../../hooks/category/get'

function category({setTitleCategory , setCategoryId , category , setCategory}) {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  useEffect(()=>{
   
    if (category !== undefined) {
      setSelectedCategory(category[0])
      category.filter((category, index) => index === 0).map((category, index) => (
        setTitleCategory(category.categoryName)
     ))
    }

  },[category])

  const clickCategory = (category) => {
    setSelectedCategory(category)
    setTitleCategory(category.categoryName)
    setCategoryId(category.categoryId)
  }

  const arrowLeft = () => {
    if (currentSlideIndex === 0) {
     return
    }
    setCurrentSlideIndex(currentSlideIndex - 1)
  }
  
  const arrowRight = () => {
    if (currentSlideIndex === category.length) {
      return
    }
    setCurrentSlideIndex(currentSlideIndex + 1)
  }

  return (
    <>
    { category !== undefined && (
    <div className='container-slider'>
            <div className='slider'>
              {category.map((category, index) => (
                <div 
                  style={{ 
                    backgroundImage: `url(${category.categoryImage})`,
                    transform: `translateX(-${currentSlideIndex * 100}%)`,
                  }} 
                  className={`slide ${selectedCategory === category ? 'select-category' : ''}`}
                  key={category.categoryId}
                  onClick={() => clickCategory(category)}
                >
                  <div className="text">
                    <h1>{category.categoryName}</h1>
                    <p>{category.categoryDescription}</p>
                  </div>
                </div>
              ))}
            </div>
            <div onClick={arrowLeft} className='arrow arrow-left'><i className='bi bi-chevron-left'></i></div>
            <div onClick={arrowRight} className='arrow arrow-right'><i className='bi bi-chevron-right'></i></div>
    </div>
    )}
    <Get setCategory={setCategory} />
    </>
  )
}

export default category