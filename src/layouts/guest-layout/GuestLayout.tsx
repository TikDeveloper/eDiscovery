import React, { FC, ReactNode } from 'react';
import { GuestLayoutWrapper } from './GuestLayout.styled';

type GuestLayoutType = {
  children: ReactNode;
  reverse?: boolean;
};

const GuestLayout: FC<GuestLayoutType> = ({ children }) => {
  return <GuestLayoutWrapper>{children}</GuestLayoutWrapper>;
};

export default React.memo(GuestLayout);
