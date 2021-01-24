// React components
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Importing external files
import './App.css';

// Importing routing components
import NavBar from '../components/NavBar/NavBar';
import ShopScreen from '../Screens/ShopScreen';
import ProductSreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen';
import ShippingScreen from '../Screens/ShippingScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import PlaceOrderScreen from '../Screens/PlaceOrderScreen';
import SigninScreen from '../Screens/SigninScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import AboutScreen from '../Screens/AboutScreen';
import ContactScreen from '../Screens/ContactScreen';
import Footer from '../components/Footer/Footer';

function App() {
  //Rendering
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={ShopScreen} />
          <Route path='/products/:id' component={ProductSreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/signin' component={SigninScreen} />
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/about' component={AboutScreen}/>
          <Route path='/contact' component={ContactScreen}/>
        </Switch>
        <Footer />
      </div>
  </Router>
  );
}

export default App;
