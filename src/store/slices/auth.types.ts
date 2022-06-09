export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
};

export type AuthStateType = {
  isLoggedIn: boolean;
  token?: string;
  data: UserData | null;
  loading: boolean;
  isStepsCompleted: boolean; // it will be in data object but now here for test
};

export type LoginRequestArgs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterRequestArgs = {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
  password: string;
  company: string;
  terms: boolean;
};
