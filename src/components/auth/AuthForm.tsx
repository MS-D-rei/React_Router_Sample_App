import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import { setEmail, setPassword } from '@/store/authSlice';
import React, { useState } from 'react';
import {
  AuthFormActionsDiv,
  AuthFormButton,
  AuthFormControlDiv,
  AuthFormSection,
} from '@/components/auth/AuthFormStyle';
import { useFirebaseAuth } from '@/hooks/use-firebase-auth';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const { isLoading, sendSignUpRequest, sendSignInRequest } = useFirebaseAuth();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailChangeHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setEmail(event.target.value));
  };

  const passwordChangeHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setPassword(event.target.value));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(authState);

    if (isLogin) {
      sendSignInRequest(authState.email, authState.password);
    } else {
      sendSignUpRequest(authState.email, authState.password);
    }
  };

  return (
    <AuthFormSection>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <AuthFormControlDiv>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={authState.email}
            onChange={emailChangeHandler}
            required
          />
        </AuthFormControlDiv>
        <AuthFormControlDiv>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            value={authState.password}
            onChange={passwordChangeHandler}
            required
          />
        </AuthFormControlDiv>
        <AuthFormActionsDiv>
          {isLoading ? (
            <p>Sending request...</p>
          ) : (
            <AuthFormButton>
              {isLogin ? 'Login' : 'Create Account'}
            </AuthFormButton>
          )}
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
