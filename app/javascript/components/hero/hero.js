import React from 'react';
import './hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import background from '../../../assets/images/index-background.jpg'

const styles = {
    imageContainer: {
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroundPositionY: '70%',
        position: 'relative',
        backgroundRepeat:'no-repeat',
        backgroundImage: `url(${background})`

    }
};


const Hero = () => {
  return (
    <div className='container-fluid' style={styles.imageContainer}>
      
      <div className="p-5 text-center mt-auto h-75 w-75 ">
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className="text-white px-5">
              <h4 className="mb-3">Welcome!</h4>
              <p className='lead'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laudantium in eaque cumque. Maiores laboriosam, esse quos hic inventore qui.</p>
              <a href="#" className="btn btn-md text-white px-5 rounded-pill shadow-sm">Learn More</a>
              <a className="btn text-light btn-lg px-3 signup" href="#!" role="button">Signup</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

