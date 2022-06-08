import { FC } from 'react';
import GuestLayout from 'layouts/guest-layout/GuestLayout';
import SignInForm from 'components/forms/sign-in-form/SignInForm';

const SignInPage: FC = () => {
  return (
    <GuestLayout>
      <SignInForm />
    </GuestLayout>
  );
};

export default SignInPage;
