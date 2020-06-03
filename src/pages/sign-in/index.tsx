import React from 'react';

import SignIn from '../../components/sign-in';

import './styles.css';

const SignInPage: React.FC = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <SignIn />
    </div>
  );
};

export default SignInPage;
