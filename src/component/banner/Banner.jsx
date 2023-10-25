import img1 from "./images/banner-1.png"
import img2 from "./images/banner-2.png"
import  "./Banner.css"

const Banner = () => {
  return (
    <>
        <div className='container-Banner'>
          <div className='img1' >
            <img src={img1} width='100%' height='100%' />
          </div>
          <div className='img2' >
            <img src={img2} width='100%' height='100%' />
          </div>
        </div>
    </>
  )
}

export default Banner