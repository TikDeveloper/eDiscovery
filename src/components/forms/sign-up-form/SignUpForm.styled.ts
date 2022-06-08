import styled from 'styled-components';
import { device } from 'styles/breakpoints';

export const SignUpFormWrapper = styled.div`
  h2 {
    font-size: 48px;
    line-height: 72px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.blue};
  }
  .sign-up-form {
    width: 390px;
    &-submit {
      margin-top: 48px;
    }
  }
  @media ${device.mobile} {
    .sign-up-form {
      width: 100%;
    }
  }
`;
