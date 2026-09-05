import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../Features/userDataSlice";

const store = configureStore({
    reducer:userDataReducer
})

store.subscribe(()=>{
    console.log("Here also")
    localStorage.setItem(
        "userData",
        JSON.stringify(store.getState())
    );
});

export default store;