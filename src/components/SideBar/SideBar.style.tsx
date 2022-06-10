import styled, { css } from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 22%;
  height: 100vh;
`;

export const SideBarHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.2px -1px 2px 0px #e3e3e3;
  > h1 {
    font-weight: 400;
  }
`;

export const SideBarMenu = styled.div`
  width: 100%;
  height: 400px;
  box-shadow: 0.2px -1px 2px 0px #e3e3e3;
  padding: 32px 32px;
`;
export const SideBarMenuItem = styled.div<{ isSelected?: boolean }>`
  width: 100%;
  height: 64px;
  border-radius: 22px;
  margin-bottom: 8px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 16px;
  }
  > p {
    font-size: 18px;
    line-height: 20px;
  }
  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        background: blue;
        > p {
          color: white;
          font-weight: 600;
        }
        svg {
          path {
            stroke: white;
          }
        }
      `;
    }
    return;
  }}
`;
