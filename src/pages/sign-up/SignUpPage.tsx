import { FC } from 'react';
import GuestLayout from 'layouts/guest-layout/GuestLayout';
import SignUpForm from 'components/forms/sign-up-form/SignUpForm';

const SignUpPage: FC = () => {
  return (
    <GuestLayout>
      <SignUpForm />
    </GuestLayout>
  );
};

export default SignUpPage;
