import bcrypt from 'bcryptjs';


export const login =  (credentials : Credentials) => {
    return fetch('https://lepetitchef-app.herokuapp.com/user/login?login=' + credentials.username + "&password=" + credentials.hashedPassword, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
}

export const register = async (username: string, password: string, email: string, about: string) => {

        const hashedPassword = await bcrypt.hash(password, "$2a$10$w4Zd8Z4Z8Z4Z8Z4Z8Z4Z8Z");

        return await fetch('https://lepetitchef-app.herokuapp.com/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, hashedPassword, email, about})
        });
}
