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
    props.history.push('/signin');
  }

  //Rendering content
  return (
    <header>
      <div className="header-bar">
        <div className="btn-menu"
             onClick={openMenu}>
          <i className="fa fa-bars"></i>
        </div>
        <div className="left-bar">
          <div className="btn-cart">
              <Link to={`cart`}>CART</Link>
          </div>
          {/* Check user loggedin */}
          {
            userInfo ? <div className="btn-logoff">
                          <button type="button"
                                  onClick={handleLogout}>
                            {userInfo.name} <i class="fa fa-times"></i>
                          </button>
                        </div> :
            <div className="btn-profile">
            <Link to='/signin'>LOGIN</Link>
          </div>
          }
        </div>
      </div>
      <div className="nav-list">
        <ul>
          <Link to={`/`}><li>Shop</li></Link>
          <Link to={`/about`}><li>About</li></Link>
          <Link to={`/Contact`}><li>Contact</li></Link>
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