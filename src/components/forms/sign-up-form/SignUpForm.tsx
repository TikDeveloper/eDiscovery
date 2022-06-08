import { FC, memo, useCallback } from 'react';
import FadeTop from 'components/animate/FadeTop';
import { SignUpFormWrapper } from './SignUpForm.styled';
import { Form, Formik, FormikHelpers } from 'formik';
import { FORM_VALIDATION_SIGN_UP, INITIAL_VALUES_SIGN_UP, VALUES_SIGN_UP } from 'utils/validations';
import BaseInput from 'components/common/BaseInput';
import BaseInputPassword from 'components/common/BaseInputPassword';
import BaseButton from 'components/common/BaseButton';
import BaseSpinner from 'components/common/BaseSpinner';
import BaseText from 'components/common/BaseText';
import { useAppDispatch } from 'hooks/useRedux';
import { registerRequest } from 'store/slices/auth.slice';

const SignUpForm: FC = () => {
  const dispatch = useAppDispatch();

  const onSubmitFormRegistration = useCallback(
    async (values: VALUES_SIGN_UP, actions: FormikHelpers<VALUES_SIGN_UP>) => {
      console.log(values, 'Form Values');
      await dispatch(
        registerRequest({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password
        })
      );
      actions.setSubmitting(false);
      actions.resetForm();
    },
    []
  );

  return (
    <SignUpFormWrapper>
      <FadeTop>
        <h2> Գրանցում </h2>

        <Formik
          initialValues={INITIAL_VALUES_SIGN_UP}
          validationSchema={FORM_VALIDATION_SIGN_UP}
          onSubmit={onSubmitFormRegistration}>
          {({ dirty, isValid, isSubmitting }) => (
            <Form className="sign-up-form">
              <BaseInput name="firstName" type="text" placeHolder="Անուն" />
              <BaseInput name="lastName" type="text" placeHolder="Ազգանուն" />
              <BaseInput name="email" type="text" placeHolder="Էլ․ հասցե" />
              <BaseInputPassword name="password" type="password" placeHolder="Գաղտնաբառ" />
              <BaseInputPassword
                name="passwordConfirmation"
                type="password"
                placeHolder="Գաղտնաբառի կրկնություն"
              />

              <div className="sign-up-form-submit">
                <BaseButton
                  mode="filled"
                  type="submit"
                  isSubmitting={isSubmitting}
                  disabled={!(isValid && dirty) || isSubmitting}>
                  {isSubmitting ? <BaseSpinner /> : <BaseText>Գրանցում</BaseText>}
                </BaseButton>
              </div>
            </Form>
          )}
        </Formik>
      </FadeTop>
    </SignUpFormWrapper>
  );
};

export default memo(SignUpForm);
