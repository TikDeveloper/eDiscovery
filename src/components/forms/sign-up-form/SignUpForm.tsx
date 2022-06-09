import { FC, memo, useCallback } from 'react';
import { SignUpFormContainer, SignUpFormInfo, SignUpFormWrapper } from './SignUpForm.styled';
import { Form, Formik, FormikHelpers } from 'formik';
import { FORM_VALIDATION_SIGN_UP, INITIAL_VALUES_SIGN_UP, VALUES_SIGN_UP } from 'utils/validations';
import BaseInput from 'components/common/BaseInput';
import BaseInputPassword from 'components/common/BaseInputPassword';
import BaseButton from 'components/common/BaseButton';
import BaseSpinner from 'components/common/BaseSpinner';
import BaseText from 'components/common/BaseText';
import { useAppDispatch } from 'hooks/useRedux';
import { registerRequest } from 'store/slices/auth.slice';
import BaseTitle from 'components/common/BaseTitle';
import { Link } from 'react-router-dom';
import BaseCheckbox from 'components/common/BaseCheckbox';

const SignUpForm: FC = () => {
  const dispatch = useAppDispatch();

  const onSubmitFormRegistration = useCallback(
    async (values: VALUES_SIGN_UP, actions: FormikHelpers<VALUES_SIGN_UP>) => {
      console.log(values, 'Form Values');
      await dispatch(registerRequest(values));
      actions.setSubmitting(false);
      actions.resetForm();
    },
    []
  );

  return (
    <SignUpFormWrapper>
      <SignUpFormInfo>
        <div>
          <BaseTitle textTransform="uppercase">Logo</BaseTitle>
        </div>
        <div className="sign-up-info">
          <BaseText fw={500}>
            Lunching your first eDiscovery project it easy. It only takes a few minutes!
          </BaseText>
          <div>
            <BaseText>Have an account?</BaseText>
            <Link to="/sign-in">
              <BaseText>Log In</BaseText>
            </Link>
          </div>
        </div>
      </SignUpFormInfo>
      <SignUpFormContainer>
        <BaseTitle> Register </BaseTitle>
        <Formik
          initialValues={INITIAL_VALUES_SIGN_UP}
          validationSchema={FORM_VALIDATION_SIGN_UP}
          onSubmit={onSubmitFormRegistration}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form autoComplete="off">
              <BaseInput
                name="email"
                type="text"
                label="Work Email (This will used as your username)"
              />
              <div className="name-part">
                <BaseInput name="firstName" type="text" label="First Name" />
                <BaseInput name="lastName" type="text" label="Last Name" />
              </div>
              <BaseInput name="phone" type="text" label="Phone" />
              <BaseInput name="country" type="text" label="Country" />
              <BaseInputPassword name="password" type="password" label="Password" />
              <BaseInput name="company" type="text" label="Company Name (Optional)" />
              <div className="terms-part">
                <BaseCheckbox name="terms" />
                <BaseText>
                  I accept <Link to="/terms">terms</Link> and {``}
                  <Link to="/privacy-policy">privacy policy</Link>
                </BaseText>
              </div>

              <div className="sign-up-form-submit">
                <BaseButton
                  mode="filled"
                  type="submit"
                  isSubmitting={isSubmitting}
                  disabled={!(isValid && dirty) || isSubmitting}
                >
                  {isSubmitting ? <BaseSpinner /> : <BaseText> Lets get started </BaseText>}
                </BaseButton>
              </div>
            </Form>
          )}
        </Formik>
      </SignUpFormContainer>
    </SignUpFormWrapper>
  );
};

export default memo(SignUpForm);
