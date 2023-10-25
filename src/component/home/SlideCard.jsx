import Sdata from "./Sdata"
import Slider from "react-slick"
import   "./Sdata.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
  }
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='Sdata-Container' key={index}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button >Visit Collections</button>
                </div>
                <div className="right">
                  <img src={value.cover}  />
                </div>
              </div>
            </>
          )
        })}

      </Slider>
     
    </>
  )
}

export default SlideCard