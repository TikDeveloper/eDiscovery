import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { pageFadeAnimation } from 'styles/animation';

type RestrictedRouteProps = {
  isAuth: boolean;
  children: ReactNode;
};

const RestrictedRoute: FC<RestrictedRouteProps> = ({ isAuth, children }) => {
  if (isAuth) return <Navigate to="/dashboard" replace />;
  return (
    <motion.div variants={pageFadeAnimation} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};

export default RestrictedRoute;
