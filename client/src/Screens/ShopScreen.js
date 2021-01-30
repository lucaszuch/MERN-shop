import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

//importing external files
import './ShopScreen.css';
import {listProducts} from '../actions/productActions';


function ShopScreen(props) {

  const productList = useSelector(state => state.productList);
  const {products, loading, error} = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  
  return loading ? <div>Loading...</div> :
         error ? <div>{error}</div> :

    <main>
      <div className="banner-products">
        {/* Add banner */}
      </div>
      <div className="shop-title">
          <h3>SHOP</h3>
        </div>
      <div className="product-wrapper">          
        {
          products.map(product => 
            <div className="product-box">
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <div className="product-name">
                  <Link to={`/products/${product.product_id}`}>{product.name}</Link>
                </div>
                <div className="product-brand">
                  <h5>{product.brand}</h5>
                </div>
                <div className="product-price">
                  <h5>${product.price}</h5>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </main>
}

export default ShopScreen;