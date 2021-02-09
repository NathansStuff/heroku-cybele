import React, { Fragment, Component } from 'react';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Hero />
        <About />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}
