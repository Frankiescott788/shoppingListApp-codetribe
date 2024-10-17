import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { authenticate } from "../reducers/reducers";

export default function useAuth () {
    const [cookies] = useCookies(['auth_token']);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        const authenticate_user = () => {
            if(cookies.auth_token !== undefined) {
                dispatch(authenticate(true));
            } else {
                dispatch(authenticate(false))
            }
             setIsLoading(false)
        };

        authenticate_user()
    });

    return {
        isLoading
    }
    
};