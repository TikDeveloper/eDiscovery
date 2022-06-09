import { lazy, Suspense } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RestrictedRoute from 'router/RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import BaseSpinner from 'components/common/BaseSpinner';
import { useAppSelector } from 'hooks/useRedux';

//***********  Customer Pages ***********//
const SignInPage = lazy(
  () => import(/* webpackChunkName: "Sign-In-Page" */ 'pages/sign-in/SignInPage')
);

const SignUpPage = lazy(
  () => import(/* webpackChunkName: "Sign-Up-Page" */ 'pages/sign-up/SignUpPage')
);

const NotFoundPage = lazy(() => import(/* webpackChunkName: "404-Page" */ 'pages/404/404'));

//***********  User Pages ***********//
const UserLayout = lazy(
  () => import(/* webpackChunkName: "User-Pages" */ 'layouts/user-layout/UserLayout')
);

const DashboardPage = lazy(
  () => import(/* webpackChunkName: "Dashboard-Page" */ 'pages/dashboard/DashboardPage')
);

const MatterPage = lazy(
  () => import(/* webpackChunkName: "Matter-Page" */ 'pages/matter/MatterPage')
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <Suspense fallback={<BaseSpinner forPage />}>
      <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => window.scroll(0, 0)}>
        <Routes location={location} key={location.pathname}>
          {/***************************** Restricted Routes *****************************/}
          <Route
            path="/"
            element={
              <RestrictedRoute isAuth={isLoggedIn}>
                <SignInPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/sign-in"
            element={
              <RestrictedRoute isAuth={isLoggedIn}>
                <SignInPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <RestrictedRoute isAuth={isLoggedIn} forSignUp>
                <SignUpPage />
              </RestrictedRoute>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRoute isAuth={isLoggedIn}>
                <UserLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="add-matter" element={<MatterPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AnimatedRoutes;
