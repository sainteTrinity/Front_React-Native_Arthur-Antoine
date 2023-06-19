
export const loginRequest = (credentials: Credentials) => {
    return {
        type: 'LOGIN_REQUEST',
        payload: credentials
    }
}

export const signupRequest = (credentials: Credentials) => {
    return {
        type: 'SIGNUP_REQUEST',
        payload: credentials
    }
}
