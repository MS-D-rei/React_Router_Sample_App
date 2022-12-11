import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  idToken: string;
}

const initialState: IAuthState = {
  email: '',
  password: '',
  isLoggedIn: false,
  idToken: '',
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
      state.idToken = action.payload;
    },
    logInOutToggle: (state) => {
      state.isLoggedIn = !!state.idToken;
    },
    removeToken: (state) => {
      state.idToken = '';
    }
  },
});

export const { setEmail, setPassword, setToken, logInOutToggle, removeToken } = authSlice.actions;
export default authSlice.reducer;
