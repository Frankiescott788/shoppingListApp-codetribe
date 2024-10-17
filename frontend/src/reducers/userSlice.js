import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name : 'current user',
    initialState : {
        user : [],
    },
    reducers : {
        currentUser : (state, action) => {
            state.user = action.payload
        }
    }
});

export const { currentUser } = userInfoSlice.actions;
export default userInfoSlice.reducer