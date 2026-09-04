import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../Features/userDataSlice";

const store = configureStore({
    reducer:userDataReducer
})

export default store;