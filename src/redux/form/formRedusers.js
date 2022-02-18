import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addTransaction } from "./formOperations"


const transactions = createReducer([], {
    [addTransaction.fulfilled]: (state, action) => [...state, action.payload],
});

const formReducer = combineReducers({
    transactions
})

export default formReducer;