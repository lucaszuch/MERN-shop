import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions'

//Importing external files
import './SigninScreen.css';

function SigninScreen(props) {

  //Local hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Redux hooks
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split('=')[1] :'/'
  
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  return (
    <main>
      <div className="signin-wrapper">
        <div className="signin-title">
            <h1>SIGN-IN</h1>
        </div>
        <div className="userForm-wrapper">
          <div className="userForm-loading">
            {loading && <div>Loading..</div>}
            {error && <div>{error}</div>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="userForm-email">
              <label htmlFor="userEmail">Email</label>
              <input type="email"
                    name="userEmail"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    >
              </input>
            </div>
            <div className="userForm-password">
            <label htmlFor="userPassword">Password</label>
              <input type="password"
                    name="userPassword"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    >
              </input>
            </div>
            <div className="userForm-btn">
              <button type="submit"
                      className="btn-signin">
                        SIGN IN
              </button>
            </div>
            <div className="userForm-newUserText">
              <h3>New to All Dee's?</h3>
            </div>
            <div className="userForm-newUserLink">
              <Link to={redirect === '/' ? 'register' : `register?redirect=${redirect}`}>CREATE ACCOUNT</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
export default SigninScreen;