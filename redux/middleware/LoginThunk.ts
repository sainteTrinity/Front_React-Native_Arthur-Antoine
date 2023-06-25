import {login, register} from "../../services/UserService";
import {setToken} from "../../util/JwtUtil";
import bcrypt from "bcryptjs";


import { Dispatch, AnyAction } from 'redux';

export const loginThunk = (credentials: Credentials) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await login(credentials);
            if (response.ok) {
                const reponse = await response.json();
                const token = reponse.token;
                await setToken(token);
                console.log(token)
                dispatch({ type: 'LOGIN_SUCCESS' });
            } else {
                dispatch({ type: 'LOGIN_FAILURE', payload: response.status });
            }
        } catch (error) {
            console.log(error);
        }
    };
};




export const signupRequestMiddleware = async (credentials: Credentials) => {
    try {
        credentials.hashedPassword = await bcrypt.hash(credentials.hashedPassword, "$2a$10$w4Zd8Z4Z8Z4Z8Z4Z8Z4Z8Z");

        const signupPromise = await fetch('https://lepetitchef-app.herokuapp.com/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        });

        if (signupPromise.ok) {
            const responseText = await signupPromise.text();
            if (responseText.length > 0) {
                const signupJSON = JSON.parse(responseText);
                console.log(signupJSON);
            } else {
                console.log('Signup request returned an empty response.');
            }
        } else {
            console.log('Signup request failed with status:', signupPromise.status);
        }


    } catch (error) {
        console.log(error);
    }

}
