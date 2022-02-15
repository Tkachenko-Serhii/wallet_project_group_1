import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
			return rejectWithValue(error.message);
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
			return rejectWithValue(error.message);
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
			return rejectWithValue(error.message);
		}
	}
);

const fetchCurrentUser = createAsyncThunk(
	'user/refresh',
	async (_, { getState, rejectWithValue }) => {
		try {
			const state = getState();
			const persistedToken = state.session.token;

			persistedToken === null && rejectWithValue();

			token.set(persistedToken);

			const { data } = await axios.get('/users/current');
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
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
