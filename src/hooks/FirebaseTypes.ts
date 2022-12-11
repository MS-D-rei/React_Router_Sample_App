export interface IRequestBodyPayload {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface ISignUpResponsePayload {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface ISignInResponsePayload {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

export interface IChangePasswordBodyPayload {
  idToken: string;
  password: string;
  returnSecureToken: boolean; 
}

export interface IChangePasswordResponsePayload {
  localId: string;
  email: string;
  passwordHash: string;
  providerUserInfo: {[id: string]: string}[];
  idToken: string;
  refreshToken: string;
  expiresIn: string;
}
