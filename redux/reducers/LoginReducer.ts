const initialState = {
    user: {},
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
            return {...state, isLogin: true};
        case 'SIGNUP_REQUEST':
            //
            break;

        default:
            return state;

    }
}

export default LoginReducer;
