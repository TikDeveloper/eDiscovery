import styled from 'styled-components';

export const SignInFormWrapper = styled.div`
  display: flex;
  width: 1024px;
  height: 60%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
`;

export const SignInFormInfo = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px;
  a,
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .sign-in-info {
    text-align: center;

    a {
      text-decoration: underline;
    }
    &-terms {
      margin-top: 24px;
    }
  }
`;

export const SignInFormContainer = styled.div`
  width: 60%;
  padding: 64px 48px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  > p {
    margin-bottom: 16px;
  }
  .sign-in-form-submit {
    margin-top: 32px;
  }
`;

export const SignInFormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  > a > p {
    color: #1a0dab;
  }
`;
