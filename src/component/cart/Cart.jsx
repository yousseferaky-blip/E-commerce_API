import React, { useEffect, useState } from 'react'
import './Cart.css'

const Cart = ({cart,DeleteProduct}) => {
    const [newCart,setNewCar] = useState([])
    useEffect(()=>{
        setNewCar(cart)
    },[cart])

  return (
    <>
    {
        newCart.length > 0 ?
   
    <div className='Cart-Container'>
        {
            newCart.map((item,index)=>{
                return(
                    <div className='Cart-Item' key={index}>
                    <div className='Cart-Left'>
                        <div className='Cart-Item-Image'>
                            <img src={item.thumbnail} alt={item.thumbnail} />
                        </div>
                        <div className='Cart-Item-Info'>
                            <h4>{item.title}</h4>
                            <h4>{item.description}</h4>
                            <h4>{item.price}</h4>
                        <div className='Cart-Item-quantity'>
                            <h5 className='minus quantity'
                            onClick={()=>{
                                const minus = newCart.map((itm , indx)=>{
                                    return index == indx ? {...itm , quantity : itm.quantity > 1 ? itm.quantity - 1 : 1 } : itm
                                })
                                setNewCar(minus)
                            }}
                            >-</h5>
                            <h5>{item.quantity}</h5>
                            <h5 className='plus quantity'
                              onClick={()=>{
                                {
                                const plus =  newCart.map((itm,indx)=>{
                                        return index == indx ? {...itm , quantity: itm.quantity + 1 }: itm
                                    })
                                    setNewCar(plus)
                                }
                              }}
                            >+</h5>
                        </div>
                        </div>
                    </div>
                    <div className='Cart-Right'>
                        <h3>{item.price*item.quantity}<span>$</span></h3>
                        <h3 className='Delete' onClick={()=>DeleteProduct(item.id)}>Remove</h3>
                    </div>
                    </div>
                )
            })
        }
    </div>
    : <h1 className='No-Item'> There are no products in the cart</h1>
}
<div className='Total-Container'  >
    <h1>Total :
        <span>
            {
                newCart.map(item=>item.price*item.quantity).reduce((total,value)=>total+value,0)
            }$
        </span>
    </h1>
</div>
</>
  )
}

export default Cart