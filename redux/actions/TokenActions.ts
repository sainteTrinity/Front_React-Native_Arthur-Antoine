export const setToken = (token : string) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export const getToken = () => {
    return {
        type: 'GET_TOKEN',
    }
}