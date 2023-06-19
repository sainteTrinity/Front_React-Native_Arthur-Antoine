import * as SecureStore from 'expo-secure-store';

export const setToken = async (token: string) => {
        await SecureStore.setItemAsync('token', token);
}

export const getToken = () => {
        return SecureStore.getItemAsync('token').then((token) => {
            return token;
        }).catch((error) => {
            console.log(error);
        });
}