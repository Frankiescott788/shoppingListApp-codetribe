import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/reducers";
import userInfoSlice from "../reducers/userSlice";
import { crudSliceReducer } from "../reducers/crudSlice";

const store = configureStore( {
    reducer : {
    authSlice,
    userInfoSlice,
    crudSliceReducer
    }
});

export default store