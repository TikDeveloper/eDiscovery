import styled from 'styled-components';

export const SignUpFormWrapper = styled.div`
  display: flex;
  width: 1024px;
  height: 85%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
`;

export const SignUpFormInfo = styled.div`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 36px;
  a,
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .sign-up-info {
    text-align: center;
    > p {
      margin-top: 24px;
    }
    > div {
      margin-top: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > p {
        margin-bottom: 16px;
      }
      > a {
        display: block;
        width: 100px;
        height: 52px;
        padding: 16px 0;
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 5px;
        box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const SignUpFormContainer = styled.div`
  width: 60%;
  padding: 32px 48px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  > p {
    margin-bottom: 16px;
  }
  > form {
    input {
      padding: 12px 24px;
    }
    > div {
      &:not(:first-child) {
        margin-top: 24px;
      }
    }
  }

  .sign-up-form-submit {
    margin-top: 32px;
  }
  .name-part {
    display: flex;
    > div:nth-child(2) {
      margin-top: 0;
      margin-left: 24px;
    }
  }
  .terms-part {
    display: flex;
    align-items: center;
    > p {
      margin-left: 8px;
      > a {
        color: #1a0dab;
      }
    }
  }
`;
