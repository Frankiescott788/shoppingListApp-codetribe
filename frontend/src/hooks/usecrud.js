import axios from "axios"
import { useState } from "react";
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import {addList, getLists} from '../reducers/crudSlice'

export default function useCrud() {
    const [cookies] = useCookies(['auth_token']);

    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [tags, setTags] = useState('');
    const [optionalNotes, setOptionalNotes] = useState('');

    const redirect = useNavigate()

    const dispatch = useDispatch();
    const { lists } = useSelector(state => state.crudSliceReducer);

    const post_list = async () => {
        try {
            const new_list = {
                _id : cookies.auth_token,
                name : itemName,
                itemQuantity : quantity,
                tag : tags,
                optional_notes : optionalNotes
            }
            const { status, data } = await axios.post('http://localhost:8085/shoppinglists', new_list);
            if(status === 201) {
                console.log( data )
                dispatch(addList(data));
                redirect('/dashboard/home');
            }
        } catch (error) {
            console.log(error)
        }
    };


    const get_lists = async () => {
        try {
            const { status, data } = await axios.get('http://localhost:8085/shoppinglists');
            if(status === 200) {
                dispatch(getLists(data));
                console.log(lists);
                localStorage.setItem('shopping_lists', JSON.stringify(data));
            }
        } catch (error) {
            if(error.message === 'Network Error') {
                const cached_lists = JSON.parse(localStorage.getItem('shopping_lists'));
                if(cached_lists) {
                    dispatch(getLists(cached_lists));
                } else {
                    console.log("ff")
                }
            }
        }
    }

    const delete_items = async (id) => {
        try {
            const { status } = await axios.delete('http://localhost:8085/shoppinglists/' + id);
        } catch (error) {
            console.log(error)
        }
    } 

    return {
        setItemName,
        setQuantity,
        setTags,
        setOptionalNotes,
        post_list,
        get_lists,
        delete_items
    }
    
}