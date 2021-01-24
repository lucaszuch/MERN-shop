import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

//Importing external files
import './RegisterScreen.css';

function RegisterScreen(props) {

  //Local hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  //Redux hooks
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
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
    dispatch(register(name, email, password));
  }
  return (
    <main>
    <div className="register-wrapper">
      <div className="register-title">
          <h1>CREATE ACCOUNT</h1>
      </div>
      <div className="register-wrapper">
        <div className="register-loading">
          {loading && <div>Loading..</div>}
          {error && <div>{error}</div>}
        </div>
        <form onSubmit={handleSubmit}>
        <div className="register-name">
            <label htmlFor="userName">Name</label>
            <input type="text"
                   name="userName"
                   id="name"
                   onChange={(e) => setName(e.target.value)}
                   >
            </input>
          </div>
          <div className="register-email">
            <label htmlFor="userEmail">Email</label>
            <input type="email"
                  name="userEmail"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  >
            </input>
          </div>
          <div className="register-password">
          <label htmlFor="userPassword">Password</label>
            <input type="password"
                  name="userPassword"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  >
            </input>
          </div>
          <div className="register-repassword">
          <label htmlFor="userRePassword">Confirm password</label>
            <input type="password"
                  name="userRePassword"
                  id="Repassword"
                  onChange={(e) => setRePassword(e.target.value)}
                  >
            </input>
          </div>
          <div className="register-btn">
            <button type="submit"
                    className="btn-signin">
                      CREATE ACCOUNT
            </button>
          </div>
          <div className="register-newUserText">
            <h3>Already registered?</h3>
          </div>
          <div className="register-newUserLink">
            <Link to={redirect === '/' ? 'signin' : `signin?redirect=${redirect}`}>LOGIN</Link>
          </div>
        </form>
      </div>
    </div>
  </main>
  )
}
export default RegisterScreen;
