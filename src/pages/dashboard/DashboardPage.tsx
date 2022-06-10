import { FC, useState } from 'react';
import SideBar from 'components/SideBar/SideBar';
import {
  DashboardWrapper,
  DashBoardContainer,
  DashBoardHeader,
  TestBtn
} from './DashboardPage.styled';
import { useAppDispatch } from 'hooks/useRedux';
import { logout } from 'store/slices/auth.slice';
import { useNavigate } from 'react-router-dom';

const DashboardPage: FC = () => {
  const [selectedBar, setSelectedBar] = useState('Home');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <DashboardWrapper>
      <SideBar {...{ selectedBar, setSelectedBar }} />
      <DashBoardContainer>
        <DashBoardHeader>
          <h1>{selectedBar}</h1>
        </DashBoardHeader>
        <TestBtn type="button" mode="outlined" onClick={() => dispatch(logout())}>
          Logout
        </TestBtn>
        <TestBtn type="button" mode="outlined" onClick={() => navigate('/add-matter')}>
          Add Matter
        </TestBtn>
      </DashBoardContainer>
    </DashboardWrapper>
  );
};

export default DashboardPage;
