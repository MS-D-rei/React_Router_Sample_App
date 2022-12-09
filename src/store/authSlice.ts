import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    validateAuth: (state, action) => {

    }
  },
});

export const { setEmail, setPassword } = authSlice.actions;
export default authSlice.reducer;
