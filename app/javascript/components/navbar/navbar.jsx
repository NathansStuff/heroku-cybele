import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../../../assets/images/logo.svg';
import { auth } from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';

const Styles = {
  navBackground: {
    color: '#FFFFFF',
  },
};

const NavBar = ({ currentUser }) => {
  let history = useHistory();

  return (
    <React.Fragment>
      <nav
        className='navbar navbar-expand-md navbar-dark bg-dark static-top'
        style={Styles.navBackground}
      >
        <div className='container'>
          <a
            className='navbar-brand'
            href='/'
            onClick={() => history.push('/')}
          >
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
            />
            Cybele Project
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item pl-2'>
                <a
                  className='nav-link'
                  href='/'
                  onClick={() => history.push('/')}
                >
                  Home
                </a>
              </li>

              {currentUser ? (
                <Fragment>
                  <li className='nav-item pl-2'>
                    <a
                      className='nav-link'
                      href='/search'
                      onClick={() => history.push('/search')}
                    >
                      Animals
                    </a>
                  </li>

                  <li className='nav-item pl-2'>
                    <a
                      className='btn rounded-pill shadow-sm text-light bg-info login'
                      href='/'
                      onClick={() => {
                        auth.signOut();
                        history.push('/');
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </Fragment>
              ) : (
                <li className='nav-item pl-2'>
                  <a
                    className='btn rounded-pill shadow-sm text-light bg-info login'
                    href='/signin'
                    onClick={() => history.push('/signin')}
                  >
                    Login/Signup
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
