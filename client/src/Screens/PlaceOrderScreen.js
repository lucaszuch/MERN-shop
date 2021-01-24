import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

//Importing
import './CartScreen.css';
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps';
import backpack from '../components/Images/backpack.JPG';

function PlaceOrderScreen(props) {
  //Redux hooks
  const cart = useSelector(state => state.cart);
  const {cartItems, shipping, payment} = cart;

  //Checks if shipping address was filled
  if(!shipping.address) {
    props.history.push('/shipping')
  } else if(!payment.paymentMethod) {
    props.history.push('/payment')
  }

  //Order details
  const orderPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = orderPrice > 50 ? 0 : 10;
  const TaxPrice = orderPrice * .20; //considering VAT
  const totalPrice = orderPrice + shippingPrice + TaxPrice;
  
  //Handlers
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    props.history.push('/sucess')
  }

  //Rendering
  return (
    <main>
      <div>
        <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      </div>
      <div className="placeOrder-wrapper">
        <div className="placeOrder-title">
          <h1>BASKET</h1>
        </div>
        <div className="placeOrder-info-wrapper">
          <div className="placeOrder-infoShipping">
            <h3>Shipping</h3>
            <div>
              {cart.shipping.address}
              {cart.shipping.city}
              {cart.shipping.postcode}
            </div>
          </div>
          <div className="placeOrder-infoPayment">
            <h3>Payment</h3>
            <div>
              Payment method: {cart.payment.paymentMehod}
            </div>
          </div>
        </div>
        
        {
          cartItems.length === 0 ?
          <div className="empty-cart">
            Your cart is empty.
          </div>
          :
          cartItems.map(item => 
              <div className="itemList-wrapper">
                <div className="itemList-box">
                  <div className="itemList-details">
                    <div className="itemList-img">
                      <img src={backpack} alt="please, replace"/>
                    </div>
                    <div className="itemList-info">
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>                    
                      <div className="itemList-qty">
                        <div className="itemList-qty-labels">
                          Qty: {item.qty};
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="itemList-price">
                    <h3>Price: ${item.price}</h3>
                  </div>
              </div>
            </div>         
          )
        } 
        <div className="summary-wrapper">
          <div className="summary-title">
            <h2>Summaty</h2>
          </div>
          <div className="summary-info">
            <h3>Items Price: ${orderPrice}</h3>
            <h3>Shipping Price: ${shippingPrice}</h3>
            <h3>Tax: ${TaxPrice}</h3>
            <h3>Total Price: ${totalPrice}</h3>
          </div>
          <button className="btn-summary"
                  type="button"
                  onClick={handlePlaceOrder}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </main>
  )
}

export default PlaceOrderScreen;