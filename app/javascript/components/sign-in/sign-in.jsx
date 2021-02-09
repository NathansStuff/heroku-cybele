import React from 'react';
import FormInput from '../form-input/form-input';
import { signInWithGoogle } from '../../firebase/firebase';
import CustomButton from '../../components/custom-button/custom-button';
import { auth } from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      currentUser: props.currentUser,
    };
  }

  redirectLoggedInUser() {
    let history = useHistory();
    history.push('/search')
  }

  componentDidMount() {
    console.log(this.state.currentUser);
  }

  componentDidUpdate() {
    console.log(this.state.currentUser);
  }


  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      alert('Invalid email or password');
      this.setState({ password: '' });
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='container-fluid mx-auto'>
      <div className="card">
        <article className="card-body">
          <a href="" className="float-right btn btn-outline-primary">Sign up</a>
          <h4 className="card-title mb-4 mt-1">Sign in</h4>
          <hr/>  
          <form  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <FormInput
                className='form-control'
                  name='email'
                  value={this.state.email}
                  required
                  type='email'
                  placeholder='email'
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <FormInput
                className='form-control'
                  name='password'
                  value={this.state.password}
                  required
                  type='password'
                  placeholder='password'
                  onChange={this.handleChange}
                />
                </div>
                <div className="form-group">
                <CustomButton type='submit' value='Submit Form' className='btn sm btn-primary btn-block text-faded'> Submit </CustomButton>
                <CustomButton className='btn btn-block btn-outline-primary'onClick={signInWithGoogle}>
                  {' '}
                  Sign in with Google{' '}
                </CustomButton>
                </div>
              </form>   
      </article>
      </div>
    </div>

    )
    }}    
export default SignIn;

    
