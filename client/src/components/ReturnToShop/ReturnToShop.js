import React from 'react';
import {Link} from 'react-router-dom';

//Import external files
import './ReturnToShop.css';

function ReturnToShop() {
  
  //Rendering content
  return (
    <div className="back-result">
          <div className="back-result-btn">
            <Link to="/">Return to Shop</Link>
          </div>
    </div>
  )
}

export default ReturnToShop;