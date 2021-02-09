import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import background from '../../../assets/images/aboutbackground.jpg';
import adopt from '../../../assets/images/rescue.jpg';
import pets from '../../../assets/images/dogcat.jpg'

const styles = {
  imageContainer: {
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
      backgroundImage: `url(${background})`

  }
};

const About = () => {
  return (
  <div className=" about container-fluid row" style={styles.imageContainer}>
    <div className="h-100 container-fluid col">
    <div className="content mx-auto h-100 row align-items-center">
      
      <div className="row align-items-center h-100 p-5">
        <div className="col-lg-5 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 className="display-6 text-white">What is The Cybele Project?</h2>

          <p className="font-italic text-white mb-4">The Cybele Project is a web application designed to assist animal rescue groups. The app assists with tracking daily tasks such as weight, food and water consumption and notes. Each animal has its only profile page detailing name, age and microchip data .</p>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={pets} alt="" className="img-fluid  mb-lg-0 pets"/></div>
      </div>

      <div className="row align-items-start h-100 p-5 mb-5">
        <div className="col-lg-5 px-5 mx-auto"><img src={adopt} alt="" className="img-fluid mb-4 mb-lg-0 adopt"/></div>
        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
          <h2 className="display-6 text-white">Adoptions</h2>
          <p className="font-italic text-white mb-4">Every year, about 200,000 dogs and cats are euthanised in Australia’s animal shelters and pounds due to space limitations. Thats half of all animals rescued each year. Please help us get the word out and adopt, don't shop.</p><a href="#" className="btn bg-info text-white px-3 rounded-pill shadow-sm">Learn More</a>
        </div>
      </div>
    </div>
    </div>
  </div>
   
  )
};




export default About;
