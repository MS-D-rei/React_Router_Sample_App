import {
  ProfileFormActionDiv,
  ProfileFormControlDiv,
  ProfileFormForm,
} from '@/components/profile/ProfileFormStyle';

export default function ProfileForm() {
  return (
    <ProfileFormForm>
      <ProfileFormControlDiv>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </ProfileFormControlDiv>
      <ProfileFormActionDiv>
        <button>Change Password</button>
      </ProfileFormActionDiv>
    </ProfileFormForm>
  );
}
