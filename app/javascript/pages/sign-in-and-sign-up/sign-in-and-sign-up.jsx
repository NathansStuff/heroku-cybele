import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { useHistory } from 'react-router-dom';

const SignInAndSignUp = ({ currentUser }) => {
  let history = useHistory();
  if (currentUser) {
    history.push('/search');
  }
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
