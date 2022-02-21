import { createSlice } from '@reduxjs/toolkit';
import categoriesOperations from './categotiesOperation';

const initialState = {
  all: [],
  isLoading: false,
  serverError: {
    status: null,
    message: null,
  },
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [categoriesOperations.getCategories.fulfilled](state, { payload }) {
      state.all = [...payload];
      state.isLoading = false;
    },
    [categoriesOperations.getCategories.rejected](state, { payload }) {
      state.serverError = {
        status: payload.status,
        message: payload.message,
      };
      state.isLoading = false;
    },

    [categoriesOperations.getCategories.pending](state, { payload }) {
      state.isLoading = true;
      state.serverError = {
        status: null,
        message: null,
      };
    },
  },
});

export default categoriesSlice.reducer;
