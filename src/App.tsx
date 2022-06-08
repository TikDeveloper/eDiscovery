import ErrorBoundary from 'ErrorBoundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Bounce, ToastContainer } from 'react-toastify';
import AnimatedRoutes from 'router/AnimatedRoutes';
import { persistor, store } from 'store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import { theme } from 'styles/theme';
import { PersistGate } from 'redux-persist/integration/react';
import BaseSpinner from 'components/common/BaseSpinner';

export default function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate loading={<BaseSpinner forPage />} persistor={persistor}>
            <GlobalStyles />
            <div className="app">
              <BrowserRouter>
                <AnimatedRoutes />
              </BrowserRouter>
              <ToastContainer
                position="top-right"
                newestOnTop={false}
                rtl={false}
                limit={3}
                theme="dark"
                autoClose={10000}
                hideProgressBar={false}
                closeOnClick
                draggable
                pauseOnFocusLoss
                pauseOnHover
                transition={Bounce}
              />
            </div>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}
