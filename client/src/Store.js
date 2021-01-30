import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {productListReducer, productDetailReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import {userSigninReducer, userRegisterReducer} from './reducers/userReducers';
import Cookie from 'js-cookie';

//Setting the cart cookies
const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  cart: {cartItems, shipping: {}, payment: {}},
  userSignin: {userInfo}
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;