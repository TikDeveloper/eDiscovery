import React, { FC, memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

type BaseSpinnerProps = {
  forPage?: boolean;
};

const BaseSpinner: FC<BaseSpinnerProps> = ({ forPage }) => {
  return (
    <SpinnerWrapper forPage={forPage}>
      <Spinner />
    </SpinnerWrapper>
  );
};

export const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const SpinnerWrapper = styled.div<BaseSpinnerProps>`
  ${(props) => {
    if (props.forPage) {
      return css`
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        min-width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.bluePallet2};
        > div {
          width: 48px;
          height: 48px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid ${({ theme }) => theme.colors.blue};
        }
      `;
    }
    return;
  }}
`;

export const Spinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${rotate} 2s linear infinite;
`;

export default memo(BaseSpinner);
