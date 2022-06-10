import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const DashBoardContainer = styled.div`
  width: calc(100vw - 20%);
`;
export const DashBoardHeader = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 0.2px 2px 0px #e3e3e3;
  display: flex;
  align-items: center;
  padding-left: 32px;
  > h1 {
    font-weight: 500;
  }
`;
