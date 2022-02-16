import { createSlice } from '@reduxjs/toolkit';
import userOperations from './userOperations';

const initialState = {
	token: null,
	isLoggedIn: false,
	serverError: {
		status: null,
		message: null
	},
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
				state.serverError = {
					status: payload.status,
					message: payload.message
				};
				state.user = { name: null, email: null };
			}
		},
		[userOperations.register.rejected](state, { payload }) {
			state.serverError = {
				status: payload.status,
				message: payload.message
			};
		},
		[userOperations.login.rejected](state, { payload }) {
			state.serverError = {
				status: payload.status,
				message: payload.message
			};
		},
		[userOperations.logout.rejected](state, { payload }) {
			state.serverError = {
				status: payload.status,
				message: payload.message
			};
		},
		[userOperations.fetchCurrentUser.pending](state) {
			state.serverError = {
				status: null,
				message: null
			};
		},
		[userOperations.register.pending](state) {
			state.serverError = {
				status: null,
				message: null
			};
		},
		[userOperations.login.pending](state) {
			state.serverError = {
				status: null,
				message: null
			};
		},
		[userOperations.logout.pending](state) {
			state.serverError = {
				status: null,
				message: null
			};
		}
	}
});

export default userSlice.reducer;
