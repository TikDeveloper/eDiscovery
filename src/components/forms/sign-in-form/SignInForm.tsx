import { FC, memo, useCallback, useEffect, useState } from 'react';
import { SignInFormActions, SignInFormModalContent, SignInFormWrapper } from './SignInForm.styled';
import { useModal } from 'hooks/useModal';
import {
  FORM_VALIDATION_SIGN_IN,
  VALUES_SIGN_IN,
  VALUES_FORGOT,
  FORM_VALIDATION_FORGOT,
  INITIAL_VALUES_SIGN_IN,
  INITIAL_VALUES_FORGOT
} from 'utils/validations';
import { Formik, Form, FormikHelpers } from 'formik';
import BaseInput from 'components/common/BaseInput';
import BaseCheckbox from 'components/common/BaseCheckbox';
import BaseModal from 'components/common/BaseModal';
import { resetPasswordRequest, testFakeLogin } from 'store/slices/auth.slice';
import { useAppDispatch } from 'hooks/useRedux';
import FadeTop from 'components/animate/FadeTop';
import BaseText from 'components/common/BaseText';
import BaseButton from 'components/common/BaseButton';
import { AnimatePresence } from 'framer-motion';
import BaseInputPassword from 'components/common/BaseInputPassword';
import BaseTitle from 'components/common/BaseTitle';
import BaseSpinner from 'components/common/BaseSpinner';

const SignInForm: FC = () => {
  const { openModal, closeModal, isModal } = useModal();
  const dispatch = useAppDispatch();
  const [sendedEmail, setSendedEmail] = useState(false);

  const onSubmitFormLogin = useCallback(
    async (values: VALUES_SIGN_IN, actions: FormikHelpers<VALUES_SIGN_IN>) => {
      dispatch(testFakeLogin());
      // await dispatch(loginRequest({ email: values.email, password: values.password }));
      actions.setSubmitting(false);
      actions.resetForm();
    },
    []
  );

  const onSubmitFormForgot = async (
    values: VALUES_FORGOT,
    actions: FormikHelpers<VALUES_FORGOT>
  ) => {
    const x = await dispatch(resetPasswordRequest({ email: values.email }));
    if (x.payload.ok) {
      setSendedEmail(true);
    }
    actions.setSubmitting(false);
    actions.resetForm();
  };

  useEffect(() => {
    if (sendedEmail) setSendedEmail(false);
  }, [isModal]);

  return (
    <SignInFormWrapper>
      <FadeTop>
        <h2> Մուտք </h2>

        <Formik
          initialValues={INITIAL_VALUES_SIGN_IN}
          validationSchema={FORM_VALIDATION_SIGN_IN}
          onSubmit={onSubmitFormLogin}>
          {({ dirty, isValid, isSubmitting }) => (
            <Form className="sign-in-form">
              <BaseInput name="email" type="text" placeHolder="Էլ․ հասցե" />
              <BaseInputPassword name="password" type="password" placeHolder="Գաղտնաբառ" />

              <SignInFormActions>
                <BaseCheckbox name="rememberMe" label="Հիշել" />
                <button type="button" onClick={() => openModal()}>
                  <BaseText type="small">Մոռացե՞լ եք ձեր գաղտնաբառը</BaseText>
                </button>
              </SignInFormActions>
              <div className="sign-in-form-submit">
                <BaseButton
                  mode="filled"
                  type="submit"
                  isSubmitting={isSubmitting}
                  disabled={!(isValid && dirty) || isSubmitting}>
                  {isSubmitting ? <BaseSpinner /> : <BaseText>Մուտք</BaseText>}
                </BaseButton>
              </div>
            </Form>
          )}
        </Formik>
      </FadeTop>
      <AnimatePresence>
        {isModal && (
          <BaseModal closeModal={closeModal}>
            <SignInFormModalContent>
              {sendedEmail ? (
                <>
                  <BaseTitle fw={500}> Վերականգնել Գաղտնաբառը </BaseTitle>
                  <BaseText>
                    Խնդրում ենք մուտքագրել ձեր Էլ․ հասցեն, վերականգնման հղումը ստանալու համար{' '}
                  </BaseText>
                  <Formik
                    initialValues={INITIAL_VALUES_FORGOT}
                    validationSchema={FORM_VALIDATION_FORGOT}
                    onSubmit={onSubmitFormForgot}>
                    {({ isValid, dirty, isSubmitting }) => (
                      <Form>
                        <BaseInput name="email" type="text" placeHolder="Էլ․ հասցե" />
                        <div className="forgot-form-submit">
                          <BaseButton
                            mode="filled"
                            type="button"
                            isSubmitting={isSubmitting}
                            disabled={!(isValid && dirty) || isSubmitting}>
                            {isSubmitting ? <BaseSpinner /> : <BaseText>Վերականգնել</BaseText>}
                          </BaseButton>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </>
              ) : (
                <>
                  <BaseTitle fw={500}> Շնորհակալություն </BaseTitle>
                  <BaseText>
                    Գաղտնաբառի վերականգնման հղումը հաջողությամբ ուղարկվել է ձեր Էլ․ հասցեին
                  </BaseText>
                </>
              )}
            </SignInFormModalContent>
          </BaseModal>
        )}
      </AnimatePresence>
    </SignInFormWrapper>
  );
};

export default memo(SignInForm);
