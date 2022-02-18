import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-project-group-1.herokuapp.com';

const getTransactions = createAsyncThunk(
  'transactions/all',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transactions');
      return data;
    } catch (error) {
      return handleError(error, rejectWithValue);
    }
  }
);

const createTransaction = createAsyncThunk(
  'transactions/create',
  async (newTransaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions/create', newTransaction);
      return data;
    } catch (error) {
      return handleError(error, rejectWithValue);
    }
  }
);

const editTransaction = createAsyncThunk(
  'transactions/edit',
  async (id, updatedInfo, { rejectWithValue }) => {
    try {
      await axios.put(`/transactions/${id}`, updatedInfo);
    } catch (error) {
      return handleError(error, rejectWithValue);
    }
  }
);
const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/transactions/${id}`);
    } catch (error) {
      return handleError(error, rejectWithValue);
    }
  }
);

function handleError(error, rejectWithValue) {
  const { status } = error.response;
  const { message } = error.response.data;
  const resError = {
    status,
    message,
  };
  return rejectWithValue(resError);
}

const transactionsOperations = {
  getTransactions,
  createTransaction,
  editTransaction,
  deleteTransaction,
};
export default transactionsOperations;