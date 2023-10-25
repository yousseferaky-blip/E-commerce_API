import { useState , useEffect } from 'react'
import  './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({cart}) => {

  const [Mobil,setMobil] = useState(false)
  const [Scroll,setScroll] = useState(false)

  function ScrollToTop(){
    window.scrollTo(0,0)
  }
  useEffect(()=>{
    window.addEventListener( 'scroll' , handleScroll )
  },[])
  const handleScroll = () =>{
    if(window.scrollY >= 150){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  return (
    <nav>
      {
        Scroll ? <i onClick={ScrollToTop} class="fa-solid fa-chevron-up"></i> : " "
      }
      
        <Link className='Bonic' to='/'>Bonik</Link>
        <ul className={Mobil ? "Nav-Link" : "Nav-Mobil"}>
          <li><Link to='/'>Home</Link></li>
          <li><a href='#Contact'>Contact</a></li>
          <li><Link to='/Products'>Products</Link></li>
          <li><Link to='/Cart'><i class="fa-solid fa-cart-shopping"><span>{cart.length > 0 ? cart.length : '' }</span></i></Link></li>
        </ul>
        <a className='icon' onClick={()=>setMobil(!Mobil)}>
            {
                Mobil ? (<i className="fa-solid fa-circle-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)
            }
        </a> 
    </nav>
  )
}

export default Navbar