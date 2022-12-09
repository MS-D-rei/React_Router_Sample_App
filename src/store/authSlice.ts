import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  email: string;
  password: string;
  isLogin: boolean;
}

const initialState: IAuthState = {
  email: '',
  password: '',
  isLogin: false,
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
  },
});

export const { setEmail, setPassword } = authSlice.actions;
export default authSlice.reducer;