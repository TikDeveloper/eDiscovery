import { FC, memo, useCallback } from 'react';
import {
  SignInFormActions,
  SignInFormContainer,
  SignInFormInfo,
  SignInFormWrapper
} from './SignInForm.styled';
import { FORM_VALIDATION_SIGN_IN, VALUES_SIGN_IN, INITIAL_VALUES_SIGN_IN } from 'utils/validations';
import { Formik, Form, FormikHelpers } from 'formik';
import BaseInput from 'components/common/BaseInput';
import BaseCheckbox from 'components/common/BaseCheckbox';
import { useAppDispatch } from 'hooks/useRedux';
import BaseText from 'components/common/BaseText';
import BaseButton from 'components/common/BaseButton';
import BaseInputPassword from 'components/common/BaseInputPassword';
import BaseSpinner from 'components/common/BaseSpinner';
import { Link } from 'react-router-dom';
import BaseTitle from 'components/common/BaseTitle';
import { loginRequest } from 'store/slices/auth.slice';

const SignInForm: FC = () => {
  const dispatch = useAppDispatch();

  const onSubmitFormLogin = useCallback(
    async (values: VALUES_SIGN_IN, actions: FormikHelpers<VALUES_SIGN_IN>) => {
      console.log(values);
      await dispatch(
        loginRequest({
          email: values.email,
          password: values.password,
          rememberMe: values.rememberMe
        })
      );
      actions.setSubmitting(false);
      actions.resetForm();
    },
    []
  );

  return (
    <SignInFormWrapper>
      <SignInFormInfo>
        <div>
          <BaseTitle textTransform="uppercase">Logo</BaseTitle>
        </div>
        <div className="sign-in-info">
          <div className="sign-in-info-get-started">
            <BaseText>Dont have an account</BaseText>
            <Link to="/sign-up">
              <BaseText>Get Started!</BaseText>
            </Link>
          </div>
          <div className="sign-in-info-terms">
            <BaseText>
              Read our <Link to="/terms">terms</Link> and <Link to="/conditions">conditions</Link>
            </BaseText>
          </div>
        </div>
      </SignInFormInfo>
      <SignInFormContainer>
        <BaseTitle>Account Login</BaseTitle>
        <Formik
          initialValues={INITIAL_VALUES_SIGN_IN}
          validationSchema={FORM_VALIDATION_SIGN_IN}
          onSubmit={onSubmitFormLogin}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form>
              <BaseInput name="email" type="text" label="Email address" />
              <BaseInputPassword name="password" type="password" label="Password" />

              <SignInFormActions>
                <BaseCheckbox name="rememberMe" label="Remember me" />
                <Link to="/reset-password">
                  <BaseText>Forgot Password?</BaseText>
                </Link>
              </SignInFormActions>
              <div className="sign-in-form-submit">
                <BaseButton
                  mode="filled"
                  type="submit"
                  isSubmitting={isSubmitting}
                  disabled={!(isValid && dirty) || isSubmitting}
                >
                  {isSubmitting ? <BaseSpinner /> : <BaseText> Log in </BaseText>}
                </BaseButton>
              </div>
            </Form>
          )}
        </Formik>
      </SignInFormContainer>
    </SignInFormWrapper>
  );
};

export default memo(SignInForm);
