import React, { useContext } from 'react'

import './Cart.css'

import {StoreContext} from '../../context/StoreContext';

import {useNavigate} from 'react-router-dom'

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0){
            return (
              <>
              <div className='cart-items-title cart-items-list'>
                  <img src={item.image} alt=''/>
                  <p> {item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
              </div>
              <hr/>
              </>
            )
          }
        })}
      </div>
      <div className='cart-summary'>
        <div className='cart-total'>
          <h2>Cart Summary</h2>
          <div>
            <div className='cart-total-details'>
              <p>Sub-Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() > 0 ? 2 : 0}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <b>total</b>
              <b>${getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}</b>
            </div>
          </div>
          <button onClick={() => navigate('/PlaceOrder')}>PROCCED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have  a promocode, Enter here</p>
            <div className='cart-promocode-input'>
                <input type='text' placeholder='Enter promocode'/>
                <button>Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart