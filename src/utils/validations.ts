import * as Yup from 'yup';
// ('The password must have at least 6 characters, at least 1 digit, at least 1 lower case letter, and 1 upper case letter.');
const passwordPattern: RegExp = /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;

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
  email: Yup.string().email('Անվավեր Էլ․ հասցե․․!').required('Այս դաշտը պարտադիր է․․!'),
  password: Yup.string()
    .matches(passwordPattern, 'Գաղտնաբարը պետք է պարունակի մեկ A,մեկ a և 1 թիվ․․!')
    .min(6, 'Գաղտնաբարը պետք է պարունակի 6 նիշ')
    .required('Այս դաշտը պարտադիր է․․!'),
  rememberMe: Yup.boolean().oneOf([true, false], 'Error')
});

// Forgot Password Form //
export type VALUES_FORGOT = {
  email: string;
};

export const INITIAL_VALUES_FORGOT: VALUES_FORGOT = {
  email: ''
};

export const FORM_VALIDATION_FORGOT = Yup.object({
  email: Yup.string().email('Անվավեր Էլ․ հասցե․․!').required('Այս դաշտը պարտադիր է․․!')
});

// Reset Password Form //
export type VALUES_RESET = {
  newPassword: string;
  newPasswordConfirmation: string;
};

export const INITIAL_VALUES_RESET: VALUES_RESET = {
  newPassword: '',
  newPasswordConfirmation: ''
};

export const FORM_VALIDATION_RESET = Yup.object({
  newPassword: Yup.string()
    .matches(passwordPattern, 'Գաղտնաբարը պետք է պարունակի մեկ A,մեկ a և 1 թիվ․․!')
    .min(6, 'Գաղտնաբարը պետք է պարունակի 6 նիշ')
    .required('Այս դաշտը պարտադիր է․․!'),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Գաղտնաբառերը չեն համապատասխանում․․!')
    .required('Այս դաշտը պարտադիր է․․!')
});

// Registration Form //
export type VALUES_SIGN_UP = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export const INITIAL_VALUES_SIGN_UP: VALUES_SIGN_UP = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: ''
};

export const FORM_VALIDATION_SIGN_UP = Yup.object({
  firstName: Yup.string()
    .min(4, 'Անունը պետք է պարունակի մինիմում 4 նիշ')
    .max(20, 'Անունը պետք է պարունակի մաքսիմում 20 նիշ')
    .required('Այս դաշտը պարտադիր է․․!'),
  lastName: Yup.string()
    .min(4, 'Ազգանունը պետք է պարունակի մինիմում 4 նիշ')
    .max(20, 'Ազգանունը պետք է պարունակի մաքսիմում 20 նիշ')
    .required('Այս դաշտը պարտադիր է․․!'),
  email: Yup.string().email('Անվավեր Էլ․ հասցե․․!').required('Այս դաշտը պարտադիր է․․!'),
  password: Yup.string()
    .matches(passwordPattern, 'Գաղտնաբարը պետք է պարունակի մեկ A,մեկ a և 1 թիվ․․!')
    .min(6, 'Գաղտնաբարը պետք է պարունակի 6 նիշ')
    .required('Այս դաշտը պարտադիր է․․!'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Գաղտնաբառերը չեն համապատասխանում․․!')
    .required('Այս դաշտը պարտադիր է․․!')
});
