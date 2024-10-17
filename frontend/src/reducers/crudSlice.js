import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
    name : 'shopping lists',
    initialState : {
        lists : []
    },
    reducers : {
        addList : ( state, action ) => {
            state.lists = [...state.lists, action.payload];
        },
        getLists : (state, action) => {
            state.lists = action.payload;
        }
    }
});

export const { addList, getLists} = crudSlice.actions;

export const crudSliceReducer = crudSlice.reducer