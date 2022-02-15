import { createSlice } from '@reduxjs/toolkit';
import userOperations from './userOperations';

const initialState = {
	token: null,
	isLoggedIn: false,
	serverError: null,
	user: { name: null, email: null }
};

const userSlice = createSlice({
	name: 'session',
	initialState,
	extraReducers: {
		[userOperations.fetchCurrentUser.fulfilled](state, { payload }) {
			state.user = payload.user;
			state.isLoggedIn = true;
		},
		[userOperations.register.fulfilled](state, { payload }) {
			state.token = payload.token;
			state.isLoggedIn = true;
			state.user = payload.user;
		},
		[userOperations.login.fulfilled](state, { payload }) {
			state.token = payload.token;
			state.isLoggedIn = true;
			state.user = payload.user;
		},
		[userOperations.logout.fulfilled](state) {
			state.token = null;
			state.isLoggedIn = false;
			state.user = { name: null, email: null };
		},
		[userOperations.fetchCurrentUser.rejected](state, { payload }) {
			if (payload) {
				state.token = null;
				state.isLoggedIn = false;
				state.serverError = payload;
				state.user = { name: null, email: null };
			}
		},
		[userOperations.register.rejected](state, { payload }) {
			state.serverError = payload;
		},
		[userOperations.login.rejected](state, { payload }) {
			state.serverError = payload;
		},
		[userOperations.logout.rejected](state, { payload }) {
			state.serverError = payload;
		},
		[userOperations.fetchCurrentUser.pending](state) {
			state.serverError = null;
		},
		[userOperations.register.pending](state) {
			state.serverError = null;
		},
		[userOperations.login.pending](state) {
			state.serverError = null;
		},
		[userOperations.logout.pending](state) {
			state.serverError = null;
		}
	}
});

export default userSlice.reducer;
