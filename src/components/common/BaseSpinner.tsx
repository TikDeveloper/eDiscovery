import React, { FC, memo } from 'react';
import styled, { css, keyframes } from 'styled-components';

type BaseSpinnerProps = {
  forPage?: boolean;
  forLayout?: boolean;
};

const BaseSpinner: FC<BaseSpinnerProps> = ({ forPage, forLayout }) => {
  return (
    <SpinnerWrapper forPage={forPage} forLayout={forLayout}>
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
  ${(props) => {
    if (props.forLayout) {
      return css`
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 900;
        left: 0;
        top: 0;
        background-color: ${({ theme }) => theme.colors.blackPallet1};
        display: flex;
        justify-content: center;
        align-items: center;
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
