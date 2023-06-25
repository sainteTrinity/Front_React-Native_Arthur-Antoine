import bcrypt from 'bcryptjs';


export const login =  async (credentials: Credentials) => {
    const hashedPassword = await bcrypt.hash(credentials.hashedPassword, "$2a$10$w4Zd8Z4Z8Z4Z8Z4Z8Z4Z8Z");

    return fetch('https://lepetitchef-app.herokuapp.com/user/login?login=' + credentials.username + "&password=" + hashedPassword, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    });
}

export const register = async (credentials : Credentials) => {

        const hashedPassword = await bcrypt.hash(credentials.hashedPassword, "$2a$10$w4Zd8Z4Z8Z4Z8Z4Z8Z4Z8Z");
        const username = credentials.username;
        const email = credentials.email;
        const about = ""

        return await fetch('https://lepetitchef-app.herokuapp.com/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username, hashedPassword, email, about})
        });
}
