import { createContext, useEffect, useState } from "react";
import { v4 } from 'uuid'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "../reducers/reducers";
import { currentUser } from "../reducers/userSlice";
import toast from "react-hot-toast";
export default function useUserInfo () {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [ information, setInformation] = useState([]);

    const [notify, setNotify] = useState(false);


    const [cookies, setCookies] = useCookies(['auth_token']);

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate()

    async function sign_up () {
        setIsLoading(true)
        if(!username || !email || !password) {
            toast.error("All fields are required");
            setIsLoading(false)
            return;
        }
        if(!email.includes("@")) {
            toast.error("Invalid Email");
            return;
        }
        try {
            const new_user = {
                _id : v4(),
                username,
                email,
                password
            };
                
            const { status } = await axios.post('http://localhost:8085/users', new_user);
            setIsLoading(true)
            if(status === 201) {
                setCookies('auth_token', new_user._id, {
                    path : '/',
                    maxAge : 7 * 24 * 60 * 60,
                    secure : true,
                });
                dispatch(authenticate(true));
                setTimeout(() => {
                navigate('/dashboard/home');
              
                }, 1000);
                
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    };

    const sign_in = async () => {
        setIsLoading(true)
        if(!email || !password) {
            toast.error("All fields are required");
            return;
        }
       
        try {
            const res = await axios.get('http://localhost:8085/users');
            const data = res.data;
            if(res.status === 200) {
                const validate = data.filter(user => user.email === email && user.password === password);
                if(validate.length !== 0) {
                    setCookies('auth_token', validate.at(0)._id, {maxAge : 36000000 * 24, secure : true, path : '/'});
                    setTimeout(() => {
                        navigate('/dashboard/home');
                    }, 2000)
                } else {
                    toast.error("Wrong email or password")                   
                }
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const get_current_user = async () => {
        try {
            const res = await axios.get('http://localhost:8085/users');
            const data = res.data;
            if(res.status === 200) {
                const user = data.filter(user => user._id === cookies.auth_token);
                // console.log(user);
                setInformation(user)
            }
        } catch (error) {
            console.log(error)
        }
    }
  

    
    return {
        setUsername, setEmail, setPassword, sign_up, isLoading, sign_in, get_current_user, information, notify
    }
   
}
