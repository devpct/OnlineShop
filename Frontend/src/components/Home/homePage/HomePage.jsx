import React, { useContext , useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { HomePageContext } from '../../../context/home/HomeContext'
import Category from './category/category'
import Products from './products/products'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import './homePage.scss'


function HomePage() {
  
  const [homePage, setHomePage] = useContext(HomePageContext)
  const [titleCategory, setTitleCategory] = useState()
  const [categoryId, setCategoryId] = useState(1)
  const [category, setCategory] = useState()

 return (
    <>
    <div style={homePage} className='content'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
            <SwiperSlide>
                <img src='../../../public/images/home/slider/img1.jpg' alt='Slider 1' style={{ height: "100%" }} />
            </SwiperSlide>

            <SwiperSlide>
                <img src='../../../public/images/home/slider/img2.jpg' alt='Slider 2' style={{ height: "100%" }} />
            </SwiperSlide>

            <SwiperSlide>
                <img src='../../../public/images/home/slider/img3.jpg' alt='Slider 3' style={{ height: "100%" }} />
            </SwiperSlide>

        </Swiper>

      
      <div className='box-top'>
          <section className='webdesigntuts-workshop'>
            <form>  
              <div id='boxSearch'>      
              <input type='search' placeholder='Product Name' id='search' autoComplete='off'/>   
              </div>
              <ul id='boxHistory'>
              </ul>
              <button id='btnSearch'>
              <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90}/>              
              </button>
            </form>
          </section>

          <Category 
          setCategoryId={setCategoryId} 
          setTitleCategory={setTitleCategory} 
          category={category} 
          setCategory={setCategory}
          />    

        <div className='box-bottom'>
            <h1>{titleCategory}</h1>
          <Products categoryId={categoryId} category={category}/>
        </div>

      </div>

    </div>
    </>
  )
}

export default HomePage