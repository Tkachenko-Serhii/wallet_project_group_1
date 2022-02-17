import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { authErrorHandler } from '../../utils';

axios.defaults.baseURL = 'https://wallet-project-group-1.herokuapp.com';

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	reset() {
		axios.defaults.headers.common.Authorization = ``;
	}
};

const register = createAsyncThunk(
	'user/register',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/users/signup', credentials);

			token.set(data.token);

			return data;
		} catch (error) {
			return authErrorHandler(error, rejectWithValue);
		}
	}
);

const login = createAsyncThunk(
	'user/login',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/users/login', credentials);

			token.set(data.token);
			return data;
		} catch (error) {
			return authErrorHandler(error, rejectWithValue);
		}
	}
);

const logout = createAsyncThunk(
	'user/logout',
	async (_, { rejectWithValue }) => {
		try {
			await axios.post('/users/logout');
			token.reset();
		} catch (error) {
			return authErrorHandler(error, rejectWithValue);
		}
	}
);

const fetchCurrentUser = createAsyncThunk(
	'user/refresh',
	async (_, { getState, rejectWithValue }) => {
		const state = getState();
		const persistedToken = state.session.token;

		if (persistedToken === null) return rejectWithValue();

		token.set(persistedToken);
		try {
			const { data } = await axios.get('/users/current');
			return data;
		} catch (error) {
			return authErrorHandler(error, rejectWithValue);
		}
	}
);

const userOperations = {
	register,
	login,
	logout,
	fetchCurrentUser
};

export default userOperations;
