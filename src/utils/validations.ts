import * as Yup from 'yup';
// ('The password must have at least 6 characters, at least 1 digit, at least 1 lower case letter, and 1 upper case letter.');
const passwordPattern: RegExp = /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;
const phonePattern: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

// Login Form //
export type VALUES_SIGN_IN = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const INITIAL_VALUES_SIGN_IN: VALUES_SIGN_IN = {
  email: '',
  password: '',
  rememberMe: false
};

export const FORM_VALIDATION_SIGN_IN = Yup.object({
  email: Yup.string().email('Invalid Email addres..!').required('Required field..!'),
  password: Yup.string()
    .matches(passwordPattern, 'Password must contain (A-Z), (a-z), (0-9) stymbol..!')
    .min(6, 'Password must contain 6 char..!')
    .required('Required field..!'),
  rememberMe: Yup.boolean().oneOf([true, false], 'Error')
});

// Registration Form //
export type VALUES_SIGN_UP = {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  phone: string;
  password: string;
  company: string;
  terms: boolean;
};

export const INITIAL_VALUES_SIGN_UP: VALUES_SIGN_UP = {
  email: '',
  firstName: '',
  lastName: '',
  country: '',
  phone: '',
  password: '',
  company: '',
  terms: false
};

export const FORM_VALIDATION_SIGN_UP = Yup.object({
  email: Yup.string().email('Invalid Email addres..!').required('Required field..!'),
  firstName: Yup.string()
    .min(4, 'Min 4 char..!')
    .max(20, 'Max 20 char..!')
    .required('Required field..!'),
  lastName: Yup.string()
    .min(4, 'Min 4 char..!')
    .max(20, 'Max 20 char..!')
    .required('Required field..!'),
  country: Yup.string().required('Required field..!'),
  phone: Yup.string()
    .matches(phonePattern, 'Invalid Phone number..!')
    .required('Required field..!'),
  password: Yup.string()
    .matches(passwordPattern, 'Password must contain (A-Z), (a-z), (0-9) stymbol..!')
    .min(8, 'Password must contain 8 char..!')
    .required('Required field..!'),
  company: Yup.string(),
  terms: Yup.boolean().oneOf([true, null], 'Error')
});

// Matter Name Form //
export type VALUES_MATTER_NAME = {
  matterName: string;
};

export const FORM_VALIDATION_MATTER_NAME = Yup.object({
  matterName: Yup.string()
    .min(4, 'Min 4 char..!')
    .max(20, 'Max 20 char..!')
    .required('Required field..!')
});
