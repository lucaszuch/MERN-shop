import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';

//Importing external files
import './RegisterScreen.css';
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps';

function PaymentScreen(props) {

  //Local hooks
  const [paymentMethod, setPaymentMethod] = useState('');
  
  //Redux hooks
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePayment({paymentMethod}));
    props.history.push('/placeorder');
  }
  return (
    <main>
      <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
      </div>
    <div className="shipping-wrapper">
      <div className="shipping-title">
          <h1>PAYMENT</h1>
      </div>
      <div className="shipping-wrapper">
        <form onSubmit={handleSubmit}>
        <div className="shipping-address">
            <label htmlFor="address">Paypal</label>
            <input type="radio"
                   name="paymentMethod"
                   id="paymentMethod"
                   value="paypal"
                   onChange={(e) => setPaymentMethod(e.target.value)}
                   >
            </input>
          </div>
          
          <div className="shipping-btn">
            <button type="submit"
                    className="btn-signin">
                      NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
  )
}
export default PaymentScreen;
