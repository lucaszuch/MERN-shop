import React, {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from '../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

//Importing
import './CartScreen.css';
import backpack from '../components/Images/backpack.JPG';

function CartScreen(props) {
  //Redux hooks
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  //Handlers
  const handleCartRemove = (productId) => {
    dispatch(removeFromCart(productId));
  }

  const handleCheckout = () => {
    props.history.push(`/signin?redirect=shipping`);
  }

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return (
    <main>
      <div className="cart-wrapper">
        <div className="cart-title">
          <h1>BASKET</h1>
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
                          <label for="itemList-qty">Quantity:</label>
                          <select name="itemList-qty"
                                  value={item.qty}
                                  onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                        </div>
                        <button className="btn-remove"
                                type="button"
                                onClick={() => handleCartRemove(item.product)}>
                            REMOVE
                        </button>
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
        <div className="checkout-wrapper">
          <div className="checkout-title">
            <h2>Subtotal</h2>
          </div>
          <div className="checkout-info">
            <h3>Number of items: {cartItems.reduce((a, c) => a + c.qty, 0)}</h3>
            <h3>Total: ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h3>
          </div>
          <button className="btn-complete"
                  type="button"
                  onClick={handleCheckout}>
            COMPLETE ORDER
          </button>
        </div>
      </div>
    </main>
  )
}

export default CartScreen;