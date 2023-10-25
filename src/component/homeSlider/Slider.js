import { useEffect, useState } from 'react'
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"


function CenterMode ()  {

    const [data , setData] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
      
    return (
        <div className='Container-img'>
        <Slider {...settings}>
           {data.map((value, index) => {
          return (
            <div key={index}>
                  <img src={value.image} alt='' />
            </div>
          )
        })}

        </Slider>
   </div>
  )
}

export default CenterMode