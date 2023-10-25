import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import DiscountD from './DiscountD'
import './Discount.css'

const Discount = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <div className="DiscountD-Container">
      <Slider {...settings}>
        {DiscountD.map((value, index) => {
          return (
            <>
              <div className='DiscountD' key={index}>
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>
                <span>{value.price}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </div>
  )
}

export default Discount