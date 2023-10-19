import {loginThunk, signupRequestMiddleware} from "../middleware/LoginThunk";
import {getToken} from "../../util/JwtUtil";

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

            return {...state, credentials: action.payload};
        case 'LOGIN_SUCCESS':
            return {...state, isLogin: true};

        case 'LOGIN_FAILURE':
            return {...state, isLogin: false};

        case 'SIGNUP_REQUEST':

            const cred: Credentials = {
                username: action.payload.username,
                hashedPassword: action.payload.hashedPassword,
                email: action.payload.email,
                about: action.payload.about
            }

            const signup = signupRequestMiddleware(cred);
            return {...state, isLogin: signup};
        default:
            return state;

    }
}

export default LoginReducer;
