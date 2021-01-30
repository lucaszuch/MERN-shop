import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

// Importing external components or hooks
import './NavBar.css';
import {logout} from '../../actions/userActions';

function openMenu() {
  let el = document.querySelector('.nav-list');
    if (el.style.display === 'none') {
      el.style.display = 'flex';
    } else {
      el.style.display = 'none';
    }
}

const NavBar = (props) => {
  //Redux hooks
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    props.history.push('/');
  }

  //Rendering content
  return (
    <header>
      <div className="header-bar">
        <div className="btn-menu"
             onClick={openMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <div className="shop-name">
          <h3>AL DEE'S</h3>
        </div>
        <nav className="shop-nav">
          <ul>
            <Link to={`/`}><li>SHOP</li></Link>
            <Link to={`/about`}><li>ABOUT</li></Link>
            <Link to={`/Contact`}><li>CONTACT</li></Link>
          </ul>
        </nav>
        <div className="left-bar">
          <div className="btn-cart">
              <Link to={`cart`}>CART</Link>
          </div>
          {/* Check user loggedin */}
          {
            userInfo ? <div className="btn-logoff"
                            onClick={handleLogout}>
                              {(userInfo.name).toUpperCase()}&nbsp;<i class="fa fa-times"></i>
                        </div> :
            <div className="btn-profile">
            <Link to='/signin'>LOGIN</Link>
          </div>
          }
        </div>
      </div>
      <div className="nav-list">
        <ul>
          <Link to={`/`}><li>SHOP</li></Link>
          <Link to={`/about`}><li>ABOUT</li></Link>
          <Link to={`/Contact`}><li>CONTACT</li></Link>
        </ul>
        <div className="close-nav"
             onClick={openMenu}>
          <i class="fa fa-times-circle"> Close</i>
        </div>
      </div>
    </header>
  );
}

export default NavBar;