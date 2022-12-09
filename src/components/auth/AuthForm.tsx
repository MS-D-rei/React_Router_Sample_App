import React, { useState } from 'react';
import {
  AuthFormActionsDiv,
  AuthFormButton,
  AuthFormControlDiv,
  AuthFormSection,
} from './AuthFormStyle';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  }

  return (
    <AuthFormSection>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <AuthFormControlDiv>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </AuthFormControlDiv>
        <AuthFormControlDiv>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
        </AuthFormControlDiv>
        <AuthFormActionsDiv>
          <AuthFormButton>
            {isLogin ? 'Login' : 'Create Account'}
          </AuthFormButton>
          <AuthFormButton
            type="button"
            className="toggle"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </AuthFormButton>
        </AuthFormActionsDiv>
      </form>
    </AuthFormSection>
  );
}
