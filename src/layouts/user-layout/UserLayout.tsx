import { FC, memo } from 'react';
import { UserLayoutWrapper } from './UserLayout.styled';
import { Outlet } from 'react-router-dom';

const UserLayout: FC = () => {
  return (
    <UserLayoutWrapper>
      <Outlet />
    </UserLayoutWrapper>
  );
};

export default memo(UserLayout);
