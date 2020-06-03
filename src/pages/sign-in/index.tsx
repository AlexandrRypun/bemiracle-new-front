import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import SignIn from '../../components/sign-in';
import { UserContext } from '../../contexts/user';

import './styles.css';

const SignInPage: React.FC = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="login-page">
      <h2>Login</h2>
      <SignIn />
    </div>
  );
};

export default SignInPage;
