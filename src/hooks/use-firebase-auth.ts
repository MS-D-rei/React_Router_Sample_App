import { setToken } from '@/store/authSlice';
import { useState } from 'react';
import { useAppDispatch } from './store-hooks';
import {
  IChangePasswordBodyPayload,
  IChangePasswordResponsePayload,
  IRequestBodyPayload,
  ISignInResponsePayload,
  ISignUpResponsePayload,
} from '@/hooks/FirebaseTypes';

export function useFirebaseAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const sendSignUpRequest = async (email: string, password: string) => {
    const bodyContent: IRequestBodyPayload = {
      email,
      password,
      returnSecureToken: true,
    };
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
          import.meta.env.VITE_FIREBASE_WEB_API_KEY
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyContent),
        }
      );

      if (!response.ok) {
        throw new Error('Could not send sign up request');
      }

      const data: ISignUpResponsePayload = await response.json();
      console.log(data);
      dispatch(setToken(data.idToken));
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        throw new Error(error.message);
      } else {
        setIsLoading(false);
        throw new Error(`Unexpected Error: ${error}`);
      }
    }
  };

  const sendSignInRequest = async (email: string, password: string) => {
    const bodyContent: IRequestBodyPayload = {
      email,
      password,
      returnSecureToken: true,
    };
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
          import.meta.env.VITE_FIREBASE_WEB_API_KEY
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyContent),
        }
      );

      if (!response.ok) {
        throw new Error('Could send sign in request');
      }

      const data: ISignInResponsePayload = await response.json();
      console.log(data);

      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        throw new Error(error.message);
      } else {
        setIsLoading(false);
        throw new Error(`Unexpected Error: ${error}`);
      }
    }
  };

  const sendChangePasswordRequest = async (
    idToken: string,
    password: string
  ) => {
    const bodyContent: IChangePasswordBodyPayload = {
      idToken,
      password,
      returnSecureToken: true,
    };
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${
          import.meta.env.VITE_FIREBASE_WEB_API_KEY
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyContent),
        }
      );
  
      if (!response.ok) {
        throw new Error('Could not send change password request');
      }
  
      const data: IChangePasswordResponsePayload = await response.json()
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        throw new Error(error.message);
      } else {
        setIsLoading(false);
        throw new Error(`Unexpected Error: ${error}`);
      }
    }
    
  };

  return {
    isLoading,
    sendSignUpRequest,
    sendSignInRequest,
    sendChangePasswordRequest,
  };
}
