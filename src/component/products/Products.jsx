import { useEffect, useState } from 'react'
import   './Products.css'
import ProductList from './ProductList'
import Pagination from './Pagination'


const Products = ({AddProduct}) => {
    const [product , setProduct] = useState([])
    const [currentPage,setCurrentPage] = useState(1)

    useEffect(()=>{
        fetch("https://dummyjson.com/products?limit=100")
        .then(res => res.json())
        .then(data=>setProduct(data.products))
        
    },[])
    
    const Product_Per_Page = 12
    const Pages = Math.ceil(product.length / Product_Per_Page)
    const StartIndex = (currentPage - 1) * Product_Per_Page
    const FinishIndex = currentPage  * Product_Per_Page
    const orderedProduct = product.slice(StartIndex,FinishIndex )

  return (
    <div>
        <ProductList product={orderedProduct} AddProduct={AddProduct}/>
        <div className='Pagination'>
            <Pagination Pages={Pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    </div>
  )
}

export default Products