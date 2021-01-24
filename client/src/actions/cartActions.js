import Axios from 'axios';
import Cookie from 'js-cookie';
import {CART_ADD_ITEM, CART_FAIL_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT} from '../contants/cartConstants';

const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM, payload: {
        product: data.product_id,
        name: data.name,
        image: data.image,
        price: data.price,
        countStock: data.countStock,
        qty
      }
    });

    //saving cart to the cookies
    const {cart: {cartItems}} = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));

  } catch (error) {
    dispatch({
      type: CART_FAIL_ITEM,
      payload: error.message
    });
  }
}

const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM, payload: productId
  });

  //remove cart to the cookies
  const {cart: {cartItems}} = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems));
}

const saveShipping = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING,
    payload: data
  });
}

const savePayment = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT,
    payload: data
  });
}

export {addToCart, removeFromCart, saveShipping, savePayment};