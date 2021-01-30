import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';

//Importing external files
import './ShippingScreen.css';
import CheckoutSteps from '../components/CheckoutSteps/CheckoutSteps';

function ShippingScreen(props) {

  //Local hooks
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');

  //Redux hooks
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShipping({address, city, postcode}));
    props.history.push('/payment');
  }
  return (
    <main>
      <div className="shipping-wrapper">
        <div>
          <CheckoutSteps step1 step2></CheckoutSteps>
        </div>
        <div className="shipping-title">
            <h1>SHIPPING</h1>
        </div>
        <div className="shippingForm-wrapper">
          <form onSubmit={handleSubmit}>
          <div className="shippingForm-address">
              <label htmlFor="address">Address</label>
              <input type="text"
                    name="address"
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                    >
              </input>
            </div>
            <div className="shippingForm-city">
              <label htmlFor="city">City</label>
              <input type="text"
                    name="city"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                    >
              </input>
            </div>
            <div className="shippingForm-postcode">
            <label htmlFor="postcode">Postcode</label>
              <input type="text"
                    name="postcode"
                    id="postcode"
                    onChange={(e) => setPostcode(e.target.value)}
                    >
              </input>
            </div>
            <div className="btn-shippingForm">
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
export default ShippingScreen;
