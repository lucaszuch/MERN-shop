import React ,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Importing external files or hooks
import './ProductScreen.css';
import ReturnToShop from '../components/ReturnToShop/ReturnToShop';
import {detailsProduct} from '../actions/productActions';

//Main function
function ProductScreen(props) {
  //Setting qty hooks
  const [qty, setQty] = useState(() => {
    return 1;
  });

  //Redux hook
  const productDetails = useSelector(state => state.productDetails);
  const {product, loading, error} = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  }

    return (
      loading ? <div>Loading..</div> :
      error ? <div>error</div> :
        <main>
          <ReturnToShop />
          <div className="productScreen-wrapper">
            <div className="productScreen-box">
              <div className="productScreen-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="productScreen-name">
                <h2>{product.name}</h2>
              </div>
              <div className="productScreen-brand">
                <h4>{product.brand}</h4>
              </div>
              <div className="productScreen-description">
                <p>{product.descrition}</p>
              </div>
              <div className="productScreen-price">
                <h2>Price ${product.price}</h2>
              </div>
            </div>
            <div className="basket-box">
              <div className="basket-info">
                <div className="basket-text">
                  <h2>Add to the basket</h2>
                </div>
                <div className="basket-quantity">
                  <label for="quantity">Select quantity:</label>
                  {/* If stock available, displays options, otherwise displays message */}
                  {product.countStock > 0 ?
                  <select name="quantity"
                  value={qty}
                  onChange={e => [setQty(e.target.value)]}
                  >
                  {[...Array(product.countStock).keys()].map(item =>
                      <option value={item + 1}
                              key={item + 1}>
                                {item + 1}
                      </option>)}
                  </select> : 
                  <div className="message-stock">
                    Not available, apologies.
                  </div>
                  }
                </div>
                  {/* Changes the button according to availability */}
                  {product.countStock > 0 ?
                    <button className="btn-basket"
                    type="button"
                    onClick={handleAddToCart}>
                    ADD TO THE CART
                    </button> :
                    <button className="btn-outStock">
                    OUT OF STOCK
                    </button>}
              </div>
            </div>
          </div>
        </main>
        )
    }

export default ProductScreen;