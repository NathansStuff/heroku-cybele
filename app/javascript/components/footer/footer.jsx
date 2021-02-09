import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const Footer = () => {
  return (
    <footer>
      <div className='copyright'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <span>Copyright © 2021, All Right Reserved TheCybeleProject</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
