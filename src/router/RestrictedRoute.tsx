import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import { pageFadeAnimation } from 'styles/animation';

type RestrictedRouteProps = {
  isAuth: boolean;
  children: ReactNode;
  forSignUp?: boolean;
};

const RestrictedRoute: FC<RestrictedRouteProps> = ({ isAuth, children, forSignUp }) => {
  if (isAuth) return <Navigate to={`${forSignUp ? '/add-matter' : '/'}`} replace />;
  return (
    <motion.div variants={pageFadeAnimation} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};

export default RestrictedRoute;
