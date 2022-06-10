import SideBar from 'components/SideBar/SideBar';
import { FC, useState } from 'react';
import { DashboardWrapper, DashBoardContainer, DashBoardHeader } from './DashboardPage.styled';

const DashboardPage: FC = () => {
  const [selectedBar, setSelectedBar] = useState('Home');
  return (
    <DashboardWrapper>
      <SideBar {...{ selectedBar, setSelectedBar }} />
      <DashBoardContainer>
        <DashBoardHeader>
          <h1>{selectedBar}</h1>
        </DashBoardHeader>
      </DashBoardContainer>
    </DashboardWrapper>
  );
};

export default DashboardPage;
