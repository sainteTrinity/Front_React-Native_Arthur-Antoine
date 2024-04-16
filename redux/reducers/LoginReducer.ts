import {loginThunk, signupThunk} from "../middleware/LoginThunk";
import {getToken} from "../../util/JwtUtil";
import { LOGIN_FAILURE } from "../constants";

const credentials: Credentials = {
    username: "",
    hashedPassword: "",
    email: "",
    about: ""
};

const initialState = {
    credentials: credentials,
    error: null,
    loading: false,
    isLogin: false,
}

type ActionType = {
    type: string,
    payload: any
}

const LoginReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {...state, credentials: action.payload, loading: true, error: null};
        case 'LOGIN_SUCCESS':
            return {...state, isLogin: true, loading: false, error: null};

        case 'LOGIN_FAILURE':
            return {...state, isLogin: false, error: LOGIN_FAILURE, loading: false};

        case 'SIGNUP_REQUEST':
            const cred: Credentials = {
                username: action.payload.username,
                hashedPassword: action.payload.hashedPassword,
                email: action.payload.email,
                about: action.payload.about
            }

            const signup = signupThunk(cred);
            return {...state, isLogin: signup};
        default:
            return state;

    }
}

export default LoginReducer;
