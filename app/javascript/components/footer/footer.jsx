import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


const Footer = () => {
   return(
    <footer>
        <div className="back-to-top w-100">
            <div id="back-to-top" className="row justify-content-center">
                <button className="btn btn-dark top col-sm-2" title="Back to Top">
                    <a href="#" className="text-light">back to top</a>
                </button>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Copyright © 2021, All Right Reserved TheCybeleProject</span>
                    </div>
                </div>
            </div>
        </div>

        
    
   </footer>
   )
};

export default Footer;