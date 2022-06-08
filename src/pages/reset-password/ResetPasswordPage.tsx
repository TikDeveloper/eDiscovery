import BaseButton from 'components/common/BaseButton';
import BaseInputPassword from 'components/common/BaseInputPassword';
import BaseSpinner from 'components/common/BaseSpinner';
import BaseText from 'components/common/BaseText';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch } from 'hooks/useRedux';
import GuestLayout from 'layouts/guest-layout/GuestLayout';
import { FC, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setNewPasswordRequest } from 'store/slices/auth.slice';
import styled from 'styled-components';
import { device } from 'styles/breakpoints';
import { FORM_VALIDATION_RESET, INITIAL_VALUES_RESET, VALUES_RESET } from 'utils/validations';

const ResetPasswordPage: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [resetPassToken, setResetPassToken] = useState<string>();
  useEffect(() => {
    const { token } = Object.fromEntries([...searchParams]);
    setResetPassToken(token);
  }, [searchParams]);

  const onSubmitFormReset = useCallback(
    async (values: VALUES_RESET, actions: FormikHelpers<VALUES_RESET>) => {
      console.log(values, 'Form Values');
      await dispatch(
        setNewPasswordRequest({
          newPassword: values.newPassword,
          token: resetPassToken!
        })
      );
      actions.setSubmitting(false);
      actions.resetForm();
    },
    []
  );

  return (
    <GuestLayout>
      <ResetPasswordContent>
        <h2> Գաղտնաբառի փոփոխություն </h2>

        <Formik
          initialValues={INITIAL_VALUES_RESET}
          validationSchema={FORM_VALIDATION_RESET}
          onSubmit={onSubmitFormReset}>
          {({ dirty, isValid, isSubmitting }) => (
            <Form className="reset-password-form">
              <BaseInputPassword name="newPassword" type="password" placeHolder="Նոր Գաղտնաբառ" />
              <BaseInputPassword
                name="newPasswordConfirmation"
                type="password"
                placeHolder="Նոր Գաղտնաբառի կրկնություն"
              />

              <div className="reset-password-form-submit">
                <BaseButton
                  mode="filled"
                  type="submit"
                  isSubmitting={isSubmitting}
                  disabled={!(isValid && dirty) || isSubmitting}>
                  {isSubmitting ? <BaseSpinner /> : <BaseText>Փոփոխել</BaseText>}
                </BaseButton>
              </div>
            </Form>
          )}
        </Formik>
      </ResetPasswordContent>
    </GuestLayout>
  );
};

const ResetPasswordContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 48px;
    line-height: 72px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.blue};
  }
  .reset-password-form {
    width: 390px;
    &-submit {
      margin-top: 48px;
    }
  }
  @media ${device.mobile} {
    .reset-password-form {
      width: 100%;
    }
  }
`;

export default ResetPasswordPage;
