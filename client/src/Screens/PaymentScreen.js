import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savePayment } from '../actions/cartActions';

//Importing external files
import './PaymentScreen.css';
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
    <div className="payment-wrapper">
      <div className="payment-title">
          <h1>PAYMENT</h1>
      </div>
      <div className="paymentForm-wrapper">
        <form onSubmit={handleSubmit}>
           <div className="paymentForm-title">
             <h4>Select payment method:</h4>
           </div> 
          <div className="paymentForm-paypal">
              <label htmlFor="address">Paypal</label>
              <input type="radio"
                    name="paymentMethod"
                    id="paymentMethod"
                    value="Paypal"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    >
              </input>
            </div>
            <div className="paymentForm-paypal">
              <label htmlFor="address">Other</label>
              <input type="radio"
                    name="paymentMethod"
                    id="paymentMethod"
                    value="Other"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    >
              </input>
            </div>
            
            <div className="paymentForm-btn">
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
