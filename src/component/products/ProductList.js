import { useEffect, useState } from 'react'
import   './Products.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProductList = ({AddProduct,product}) => {
    useEffect(()=>{
        AOS.init()
        AOS.refresh()
    },[])
  return (
    <div className='Products-Container'>
        {
            product.map((item,index)=>{
                return(
                    <div data-aos="fade-right" className='Products-Card' key={index}>
                        <Link to={`/${item.id}`}><i class="fa-solid fa-eye"></i></Link>
                       <div className='Products-Card-Img'>
                       <img src={item.thumbnail}/>
                       </div>
                       <div className='Products-Bottom'>
                            <h4>{item.title}</h4>
                            <div>
                                <h3>{item.brand}</h3>
                                <h3>{item.price}$</h3>
                            </div>
                        <button onClick={()=>AddProduct(item)}>Add to Cart</button>
                       </div>
                    </div>
                )
            })  
        }
    </div>
  )
}

export default ProductList