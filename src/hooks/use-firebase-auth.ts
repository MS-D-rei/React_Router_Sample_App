import { setToken } from '@/store/authSlice';
import { useState } from 'react';
import { useAppDispatch } from './store-hooks';

interface IRequestBodyPayload {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

interface ISignUpResponsePayload {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface ISignInResponsePayload {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string; 
  registered: boolean;
}

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
        throw new Error('Could not send auth request');
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

  return {
    isLoading,
    sendSignUpRequest,
    sendSignInRequest,
  };
}
