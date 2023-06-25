import {login, register} from "../../services/UserService";
import {setToken} from "../../util/JwtUtil";
import bcrypt from "bcryptjs";


import { Dispatch, AnyAction } from 'redux';
import {err} from "react-native-svg/lib/typescript/xml";

export const loginThunk = (credentials: Credentials) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await login(credentials);
            if (response.ok) {
                const reponse = await response.json();
                const token = reponse.token;
                await setToken(token);
                dispatch({ type: 'LOGIN_SUCCESS' });
            } else {
                dispatch({ type: 'LOGIN_FAILURE', payload: response.status });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const signupThunk = (credentials : Credentials) => {
    return async (dispatch : Dispatch<AnyAction>) => {
        try {
            const response = await register(credentials);
            if(response.ok) {
                const reponse = await response.json();
                const token = reponse.token;
                await setToken(token);
                dispatch({type: 'LOGIN_SUCCESS'});
            }
            else {
                dispatch({type: 'LOGIN_FAILURE', payload: response.status});
            }
        } catch (error) {
            console.log(error);
        }
    };
};
