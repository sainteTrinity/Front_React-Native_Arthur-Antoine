import bcrypt from 'bcryptjs';

export const login = async (login: string, password: string) => {

    return async (dispatch: (arg0: any) => void) => {
        try {
            password = await bcrypt.hash(password, "$2a$10$w4Zd8Z4Z8Z4Z8Z4Z8Z4Z8Z");

             const loginPromise = await fetch('https://lepetitchef-app.herokuapp.com/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login, password })
            });

            const loginJSON = await loginPromise.json();
            dispatch(loginJSON);

        } catch (error) {
            console.log(error);
        }
    }
}

export const register = async (username: string, password: string, email: string, about: string) => {

        const hashedPassword = await bcrypt.hash(password, "$2a$10$w4Zd8Z4Z8Z4Z8Z4Z8Z4Z8Z");

        return await fetch('https://lepetitchef-app.herokuapp.com/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, hashedPassword, email, about})
        });
}
