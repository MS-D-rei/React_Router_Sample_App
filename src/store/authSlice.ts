import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  token: string;
}

const initialState: IAuthState = {
  email: '',
  password: '',
  isLoggedIn: false,
  token: '',
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
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logInOutToggle: (state) => {
      state.isLoggedIn = !!state.token;
    },
    removeToken: (state) => {
      state.token = '';
    }
  },
});

export const { setEmail, setPassword, setToken, logInOutToggle, removeToken } = authSlice.actions;
export default authSlice.reducer;
