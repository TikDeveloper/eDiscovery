import { FC, memo } from 'react';
import { UserLayoutWrapper } from './UserLayout.styled';
import { Outlet } from 'react-router-dom';
import MatterForm from 'components/forms/matter-form/MatterForm';
import { useAppSelector } from 'hooks/useRedux';

const UserLayout: FC = () => {
  const { isStepsCompleted } = useAppSelector((state) => state.auth);

  return <UserLayoutWrapper>{!isStepsCompleted ? <MatterForm /> : <Outlet />}</UserLayoutWrapper>;
};

export default memo(UserLayout);
