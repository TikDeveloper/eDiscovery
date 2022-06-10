import styled from 'styled-components';

export const MatterFormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  .matter {
    &-content {
      height: 100%;
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.bluePallet3};
      padding: 0 72px;
      > p {
        margin-bottom: 36px;
      }
    }
    &-image {
      height: 100%;
      width: 45%;
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const MatterFormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);

  > form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #RFS-StepperContainer {
    background-color: ${({ theme }) => theme.colors.bluePallet4};
    height: 116px;
  }
  .step-item {
    pointer-events: none;
    & ~ div > span {
      color: ${({ theme }) => theme.colors.gray};
    }
    &.completed,
    &.active {
      background-color: ${({ theme }) => theme.colors.bluePallet5};
      &:hover {
        background-color: ${({ theme }) => theme.colors.blue};
      }
      & ~ div > span {
        color: ${({ theme }) => theme.colors.bluePallet5};
      }
    }
  }
`;

export const MatterTemplateWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  > form {
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const MatterFormActions = styled.div`
  background-color: ${({ theme }) => theme.colors.bluePallet4};
  display: flex;
  justify-content: flex-end;
  padding: 32px 56px;
  > button {
    width: 150px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.bluePallet5};
    border: 2px solid ${({ theme }) => theme.colors.bluePallet5};
    &:not(:first-child) {
      margin-left: 48px;
    }
  }
`;

export const Step1Wrapper = styled.div`
  padding: 48px;
`;
