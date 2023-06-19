type Restaurant = {
    title: string,
    image?: string,
    categories?: string[]
}

type Credentials = {
    username: string,
    hashedPassword: string,
    email?: string,
    about?: string
}

type User = {
    username: string,
    hashedPassword: string,
    email: string,
    friends?: [],
    token?: string,
    isLogged: boolean,
}

