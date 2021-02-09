import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import background from 'images/index-background.jpg'

const styles = {
    imageContainer: {
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backgroudPosition: 'center center',
        backgroundPositionY: '70%',
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
              <h4 className="display-3">Welcome</h4>
              <p className='lead '><i>"The greatness of a nation can be judged by the way its animals are treated."</i> - Mahatma Gandhi</p>
              <a href="#" className="btn btn-md text-white px-5 rounded-pill shadow-sm ">About us</a>
              <a className="btn text-light btn-lg px-3 bg-info signup" href="#!" role="button">Signup</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

