import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='Your First name'/>
          <input type='text' placeholder='Your Last name'/>
        </div>
        <input type='email' placeholder='Your Email'/>
        <input type='text' placeholder='Street'/>
        <div className='multi-fields'>
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='ZIPCode'/>
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='State'/>
          <input type='text' placeholder='Country'/>
        </div>
        <input type='number' placeholder='phone'/>
      </div>
      <div className='place-order-right'>
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
          <button>PROCCED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder