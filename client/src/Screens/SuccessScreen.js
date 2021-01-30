import React from 'react';
import {useSelector} from 'react-redux';

//Importing external files
import './SuccessScreen.css';
import ReturnToShop from '../components/ReturnToShop/ReturnToShop';

function SuccessScreen(props) {
  //Random order number
  const randomNumber = Math.floor(Math.random() * 999999);

  //Redux hooks
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  //Rendering contente
  return  (
    <main>
      <div className="success-wrapper">
        {
          userInfo ?    <div className="success-box">
                          <div className="success-title">
                            <h2>Hey {(userInfo.name).toUpperCase()}!</h2>
                          </div>
                          <div className="success-message">
                            <h3>Thanks for your order!</h3>
                          </div>
                          <div className="success-order">
                            <h2>{randomNumber}</h2>
                          </div>
                          <ReturnToShop />
                        </div>
                    :
                        <div className="success-box">
                          <div className="wrong-title">
                            <h2>Hey adventurer!</h2>
                          </div>
                          <div className="wrong-message">
                            <h3>You should not be here..</h3>
                          </div>
                          <ReturnToShop />
                        </div>
        }
      </div>
    </main>
  )
}

export default SuccessScreen;
