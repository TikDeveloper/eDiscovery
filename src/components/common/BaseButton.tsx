import styled, { css } from 'styled-components';

type BaseButtonType = {
  mode?: string;
  isSubmitting?: boolean;
};

const BaseButton = styled.button<BaseButtonType>`
  border-radius: 5px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  padding: 16px 0;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  ${({ mode, theme }) => {
    switch (mode) {
      case 'filled':
        return css`
          border: 2px solid ${theme.colors.blue};
          background-color: ${theme.colors.blue};
          > p {
            color: ${theme.colors.white};
          }
        `;
      case 'outlined':
        return css`
          border: 2px solid ${theme.colors.blue};
          background-color: ${theme.colors.white};

          > p {
            color: ${theme.colors.blue};
          }
        `;

      default:
        return;
    }
  }}

  ${({ isSubmitting }) => {
    if (isSubmitting) {
      return css`
        opacity: 0.8;
        pointer-events: none;
      `;
    }
    return;
  }}
`;

export default BaseButton;
