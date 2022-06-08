import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const SignInFormWrapper = styled.div`
  h2 {
    font-size: 48px;
    line-height: 72px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.blue};
  }
  .sign-in-form {
    width: 390px;
    &-submit {
      margin-top: 48px;
    }
  }
  @media ${device.mobile} {
    .sign-in-form {
      width: 100%;
    }
  }
`;

export const SignInFormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  > button {
    cursor: pointer;
    > p {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.blue};
      font-weight: 500;
    }
  }
`;

export const SignInFormModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p:nth-child(1) {
    margin: 12px 0;
    text-align: center;
    @media ${device.tablet} {
      display: none;
    }
  }
  > p:nth-child(2) {
    color: ${({ theme }) => theme.colors.blue};
    max-width: 80%;
    text-align: center;
    margin: 0 auto;
    line-height: 32px;
    margin-top: 12px;
    @media ${device.tablet} {
      margin-top: 32px;
      max-width: 100%;
    }
  }
  > form {
    width: 100%;
    max-width: 390px;
    margin-top: 36px;
    .forgot-form-submit {
      margin-top: 24px;
    }
    @media ${device.tablet} {
      margin-top: 24px;
    }
  }
`;
