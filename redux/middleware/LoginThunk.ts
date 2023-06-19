import {login, register} from "../../services/UserService";
import {setToken} from "../../util/JwtUtil";
import {useState} from "react";
import bcrypt from "bcryptjs";
import {useDispatch} from "react-redux";


export const loginRequestMiddleware = async (credentials: Credentials, dispatch: (arg0: any) => void) => {

    try {
        credentials.hashedPassword = await bcrypt.hash(credentials.hashedPassword, "$2a$10$w4Zd8Z4Z8Z4Z8Z4Z8Z4Z8Z");

        const loginPromise = await fetch('https://lepetitchef-app.herokuapp.com/user/login?login=' + credentials.username + "&password=" + credentials.hashedPassword, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        });

        const respJSON = await loginPromise.json();

        if (respJSON.token !== undefined) {
            dispatch({type: 'SET_TOKEN', payload: respJSON.token});
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

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