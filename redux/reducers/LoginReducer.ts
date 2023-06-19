import {login, register} from "../../services/UserService";
import {getToken, setToken} from "../../util/JwtUtil";
import {loginRequest} from "../actions/LoginActions";
import {loginRequestMiddleware, signupRequestMiddleware} from "../middleware/LoginThunk";

const credentials : Credentials = {
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

const LoginReducer = (state = initialState, action:ActionType) => {

    switch (action.type) {
        case 'LOGIN_REQUEST':

            const login = loginRequestMiddleware(state.credentials, action.payload);
            return {...state, isLogin: login};

        case 'SIGNUP_REQUEST':

            const cred : Credentials = {
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
