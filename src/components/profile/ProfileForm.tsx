import {
  ProfileFormActionDiv,
  ProfileFormControlDiv,
  ProfileFormForm,
} from '@/components/profile/ProfileFormStyle';
import { useAppSelector } from '@/hooks/store-hooks';
import { useFirebaseAuth } from '@/hooks/use-firebase-auth';
import React, { useRef } from 'react';
import { redirect } from 'react-router-dom';

export default function ProfileForm() {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const { sendChangePasswordRequest } = useFirebaseAuth();
  const auth = useAppSelector((state) => state.auth);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredPassword = newPasswordRef.current?.value as string;
    // add validation
    sendChangePasswordRequest(auth.idToken, enteredPassword);
    redirect('/auth');
  };

  return (
    <ProfileFormForm onSubmit={submitHandler}>
      <ProfileFormControlDiv>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          name="new-password"
          ref={newPasswordRef}
        />
      </ProfileFormControlDiv>
      <ProfileFormActionDiv>
        <button>Change Password</button>
      </ProfileFormActionDiv>
    </ProfileFormForm>
  );
}
