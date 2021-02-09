import React, { useState } from 'react';
import './navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../../../assets/images/logo.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Modal } from 'react';
import { auth } from '../../firebase/firebase';

const Styles = {
  navBackground: {
    color: '#FFFFFF',
  },
};

const NavBar = ({ currentUser }) => {
  return (
    <React.Fragment>
      <nav
        className='navbar navbar-expand-md navbar-dark bg-dark static-top'
        style={Styles.navBackground}
      >
        <div className='container'>
          <a className='navbar-brand' href='#'>
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
              <li className='nav-item '>
                <a className='nav-link' href='#'>
                  Home
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item '>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item pl-2'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
              {currentUser ? (
                <li className='nav-item pl-2'>
                  <a
                    className='btn rounded-pill shadow-sm text-light bg-info login'
                    onClick={() => auth.signOut()}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li className='nav-item pl-2'>
                  <a
                    className='btn rounded-pill shadow-sm text-light bg-info login'
                  >
                    Login
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
