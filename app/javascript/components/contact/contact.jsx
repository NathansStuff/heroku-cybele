import React, { Component } from 'react';
import './contact.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import * as emailjs from 'emailjs-com';
import { Button } from 'reactstrap';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const { name, email, phone, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: 'cybeleproject93@gmail.com',
      phone: phone,
      message: message,
    };
    emailjs
      .send(
        'service_oj6ecd1',
        'template_wb5x5je',
        templateParams,
        'user_vTT2nk4pHgmYk78U5flbL'
      )
      .then(result => {
        console.log(result);
      });
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div className='container contact-form '>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3>Have an idea for a feature? let us know</h3>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='text'
                  name='txtName'
                  className='form-control'
                  placeholder='Name *'
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name')}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  name='txtEmail'
                  className='form-control'
                  placeholder='Email *'
                  value={this.state.email}
                  onChange={this.handleChange.bind(this, 'email')}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  name='txtPhone'
                  className='form-control'
                  placeholder='Phone Number *'
                  value={this.state.phone}
                  onChange={this.handleChange.bind(this, 'phone')}
                />
              </div>
              <Button className='form-group' type='submit'>
                send
              </Button>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <textarea
                  name='txtMsg'
                  className='form-control'
                  placeholder='Message'
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, 'message')}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Contact;

/*
              <Button className='form-group'>
                <input type='submit' name='btnSubmit' className='btnContact' />
              </Button>
              */
