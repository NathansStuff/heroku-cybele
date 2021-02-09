import React, { Fragment } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';

const HomePage = () => (
  <Fragment>
    <Hero />
    <About />
    <Contact />
  </Fragment>
);

export default HomePage;
