import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const createTransaction = value => {
    return axios.post('/transactions/create', value).then(({ data }) => data);
};

export const addTransaction = createAsyncThunk(
    'transactions/createTransaction',
    async (text, { rejectWithValue }) => {
        try {
            const transaction = await createTransaction(text);
            return transaction;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export default addTransaction;