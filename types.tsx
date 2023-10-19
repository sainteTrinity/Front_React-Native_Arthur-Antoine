type Restaurant = {
    id?: string,
    name: string,
    images?: string[],
    categories?: string[]
    description?: string,
    coordinates?: Coords,
    phoneNumber?: string,
    website?: string,
    address?: string,

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


type Coords = {
    name?: string,
    latitude: number,
    longitude: number,
}