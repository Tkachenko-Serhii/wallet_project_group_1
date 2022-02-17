import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { userSlice } from './user';

import modalReduser from './modal/modalReduser';

const middleware = (getDefaultMiddleware) => [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
		}
	})
];

const userPersistConfig = {
	key: 'session',
	storage,
	whitelist: ['token']
};

export const store = configureStore({
	reducer: {
		session: persistReducer(userPersistConfig, userSlice),
		modal: modalReduser,
	},
	middleware,
	devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);
