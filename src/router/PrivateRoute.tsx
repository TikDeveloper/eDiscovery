import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { pageFadeAnimation } from 'styles/animation';

type PrivateRouteProps = {
  isAuth: boolean;
  children: ReactNode;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ isAuth, children }) => {
  if (!isAuth) return <Navigate to="/sign-in" replace />;
  return (
    <motion.div variants={pageFadeAnimation} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};

export default PrivateRoute;
