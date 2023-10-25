import { Routes , Route } from 'react-router-dom';
import './App.css';
import Banner from './component/banner/Banner';
import Discount from './component/discount/Discount';
import Footer from './component/footer/Footer';
import SlideCard from './component/home/SlideCard';
import CenterMode from './component/homeSlider/Slider';
import Navbar from './component/navbar/Navbar';
import Wrapper from './component/wrapper/Wrapper';
import Products from './component/products/Products';
import { useEffect, useState } from 'react';
import Cart from './component/cart/Cart';
import Detail from './component/details/Detail';
import Swal from 'sweetalert2';

const Storage = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : []

function App() {

  const [cart,setCart] = useState(Storage)

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  const AddProduct  = (Product) =>{
    Swal.fire({
      title: 'تم اضافه هذا المنتج في السله.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff ',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
      const Find = cart.find(item => item.id === Product.id)
      if(Find){
        setCart(cart.map(item => item.id === Product.id? {...Find, quantity : Find.quantity + 1} : item))
      }else{
        setCart([...cart , { ...Product , quantity : 1 }])
      }
      
  } 

  const DeleteProduct = (id) =>{
    Swal.fire({
      title: 'متاكد من انك عاوز تمسح المنتج?',
      text: "لا يمكن ان ترجع في هذا!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم اريد!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'اتمسح!',
          ' لقد تم حذف هذا النتج.',
          'success'
        )
         const Delete = cart.filter(item=>item.id !== id)
         setCart(Delete)
      }
    })
  }

  return (
    < >
      <Navbar cart={cart}/>
        <Routes>
          <Route path='/' element={<><SlideCard /><Discount /><CenterMode /></>}/>
          <Route path='/Products' element={<><Products AddProduct={AddProduct}/></>}/>
          <Route path='/Cart' element={<Cart cart={cart} DeleteProduct={DeleteProduct}/>}/>
          <Route path='/:productId' element={<Detail />}/>
        </Routes>
      <Banner />
      <Wrapper />
      <Footer />
    </>
  );
}

export default App;

