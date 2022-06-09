import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import globalReducer from './slices/global.slice';
import authReducer from './slices/auth.slice';
import matterReducer from './slices/matter.slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage: storage
};

const authReducerPersisted = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducerPersisted,
    matter: matterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
