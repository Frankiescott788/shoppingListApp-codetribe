import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name : 'cookies',
    initialState : {
        authenticated : false
    },
    reducers : {
        authenticate : (state, action) => {
            state.authenticated = action.payload
        }
    }
});



export const { authenticate } = authSlice.actions; // these are the actions that will be used across the app

export default authSlice.reducer // This is the one that goes into the store