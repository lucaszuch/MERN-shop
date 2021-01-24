import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

//Provisional image
import backpack from '../components/Images/backpack.JPG';

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
      <div className="results-bar">
        
      </div>
      <div className="product-wrapper">          
        {
          products.map(product => 
            <div className="product-box">
              <div className="product-img">
                <img src={backpack} alt={product.name} />
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
                <div className="product-rating">
                  <h6>{product.rating} Stars ({product.numReviews})</h6>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </main>
}

export default ShopScreen;