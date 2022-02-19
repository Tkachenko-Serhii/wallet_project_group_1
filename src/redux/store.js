import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userSlice } from './user';
import { transactionsSlice } from './transactions';

import modalReduser from './modal/modalReduser';
import formReducer from './form/formRedusers';
import modalLogoutReduser from './modalLogout/modalLogoutReduser';

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const userPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

const transactionsPersistConfig = {
  key: 'transactions',
  storage,
}

export const store = configureStore({
  reducer: {
    session: persistReducer(userPersistConfig, userSlice),
    transactions: persistReducer(transactionsPersistConfig, formReducer),
    modal: modalReduser,
    isModalLogoutOpen: modalLogoutReduser
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);
