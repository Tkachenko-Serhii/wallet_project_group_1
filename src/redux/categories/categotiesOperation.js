import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { handleError } from "../transactions/transactionsOperations"

axios.defaults.baseURL = 'https://wallet-project-group-1.herokuapp.com';

const getCategories = createAsyncThunk(
    'categoties/all',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/categories');
            return data;
        } catch (error) {
            return handleError(error, rejectWithValue);
        }
    }
);

getCategories()

function handleError(error, rejectWithValue) {
    const { status } = error.response;
    const { message } = error.response.data;
    const resError = {
        status,
        message,
    };
    return rejectWithValue(resError);
}

const categoriesOperations = {
    getCategories,
};

export default categoriesOperations;
