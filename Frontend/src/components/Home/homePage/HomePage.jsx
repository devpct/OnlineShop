import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { HomePageContext } from '../../../context/home/HomeContext'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import './homePage.scss'


function HomePage() {
    
  const [homePage, setHomePage] = useContext(HomePageContext)

const SEGMENTED_CONTROL_BASE_SELECTOR = ".ios13-segmented-control";
const SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR =
    ".ios13-segmented-control .option input";
const SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR =
    ".ios13-segmented-control .selection";
// Main
document.addEventListener("DOMContentLoaded", setup);
// Body functions
function setup() {
    forEachElement(SEGMENTED_CONTROL_BASE_SELECTOR, (elem) => {
        elem.addEventListener("change", updatePillPosition);
    });
    window.addEventListener("resize", updatePillPosition); // Prevent pill from detaching from element when window resized. Becuase this is rare I haven't bothered with throttling the event
}

function updatePillPosition() {
    forEachElement(
        SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR,
        (elem, index) => {
            if (elem.checked) moveBackgroundPillToElement(elem, index);
        }
    );
}

function moveBackgroundPillToElement(elem, index) {
    document.querySelector(
        SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR
    ).style.transform = "translateX(" + elem.offsetWidth * index + "px)";
}
function forEachElement(className, fn) {
    Array.from(document.querySelectorAll(className)).forEach(fn);
}

  let bslide = ''
  let betslider = false
//   fetch('http://127.0.0.1:5000/data/categoryname', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   })
//   .then(response=>{
//     return response.json()
//   })
//   .then( response => {
//     let dataCategories = Object.entries(response)
//     let categories = []
//     dataCategories.forEach(categorie =>{
//       categories = categorie[1]
//     })
//     let qty = 0
//     for (let i = 1; i <= categories.length; i++) {      
//       const conCards = $.createElement('div')
//       conCards.setAttribute('class','con-cards-'+i+' con-cards')
//       conCards.setAttribute('id','con-cards-'+i)
//       boxs.append(conCards)
//     }

//   categories.forEach(categorie=>{
//     qty++
//     if(titleCategory.innerHTML == ''){
//       titleCategory.innerHTML = categorie.name
//     }
//     const slide = $.createElement('div')
//     slide.setAttribute('class','slide')
//     slide.setAttribute('id',''+qty+'')
//     slide.style.backgroundImage = `url('${categorie.image}')`

//     if(bslide == ''){
//       bslide = slide
//     }

//     slider.append(slide)
//     const text = $.createElement('div')
//     text.setAttribute('class','text')
//     const title = $.createElement('h1')
//     title.innerHTML = categorie.name
//     const description = $.createElement('p')
//     description.innerHTML = categorie.description

//     text.append(title,description)
//     slide.append(text)

//     const conCards = $.querySelectorAll('.con-cards')

//     let cslide = $.querySelectorAll('.slide')
    
//     let sizeconCards = conCards.length-2
//         conCards[sizeconCards].style.display = 'none'


//       slide.addEventListener('click',(e)=>{
//       bslide.style.width = '130px'
//       bslide.style.boxShadow = '0px 10px 30px 0px rgba(0,0,0,.05)'
//       bslide = slide
//       slide.style.width = '150px'
//       slide.style.boxShadow = localStorage.getItem('Theme') +' 0px 20px 70px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
//       titleCategory.innerHTML = title.innerHTML
//       for (let i = 0; i < conCards.length; i++) {
//         if(conCards[i].id == 'con-cards-'+slide.id){
//           conCards[i].style.display = 'flex'
//         }else{
//           conCards[i].style.display = 'none'
//         }
//     }
//     })

//   })
// })
// .catch(error => {
// console.log(error);
// })

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
            <form action='' method='' >  
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
          
          <div className='container-slider'>
            <div id='slider' className='slider'>
            </div>
            <div className='arrow arrow-left'><i className='bi bi-chevron-left'></i></div>
            <div className='arrow arrow-right'><i className='bi bi-chevron-right'></i></div>
          </div>
          

        <div className='box-bottom'>
            <h1 id="titleCategory"></h1>
            <div className='box-product'>
            <div className='con-cards-search con-cards'>
            </div>
            </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default HomePage