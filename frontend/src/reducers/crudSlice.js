import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const update_item = createAsyncThunk('list/update', async (item) => {
    console.log("Dispatching update for item:", item); 
    const { data } = await axios.patch('http://localhost:8085/shoppinglists/' + item.id, item);
    return data;
});


export const get_single_item = createAsyncThunk('item', async (item) => {
    const { data } = await axios.get('http://localhost:8085/shoppinglists/' + item);
    return data
})

const crudSlice = createSlice({
    name : 'shopping lists',
    initialState : {
        lists : [],
        item : {
            value : {},
            status : 'idle',
            errors : []
        }
    },
    reducers : {
        addList : ( state, action ) => {
            state.lists = [...state.lists, action.payload];
        },
        getLists : (state, action) => {
            state.lists = action.payload;
        },
    },
    extraReducers : (builder) => {
        builder
            .addCase(get_single_item.pending, (status, action) => {
                status.item.status = 'Loading'
            })
            .addCase(get_single_item.fulfilled, (state, action) => {
                state.item.status = 'success';
                state.item.value = action.payload;
                localStorage.setItem('shopping_lists', JSON.stringify(action.payload));
            })
            .addCase(get_single_item.rejected, (state, action) => {
                
            })
    }
});

export const { addList, getLists} = crudSlice.actions;

export const crudSliceReducer = crudSlice.reducer