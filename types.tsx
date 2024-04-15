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

type News = {
    title: string,
    description: string,
    date: string,
    image?: string,
    author?: string
}

type Credentials = {
    username: string,
    hashedPassword: string,
    email?: string,
    about?: string
}

type Category = {
    name: string,
    categoryLogo: string,
}

enum CategoryEnum {
    Halal= "Halal",
    Pizzas = "Pizzas",
    FastFood = "FastFood",
    Traiteur = "Traiteur",
    Burgers = "Burgers",
    Asiatique = "Asiatique",
    Sushi = "Sushi",
    Boulangerie = "Boulangerie",
    Cafe = "Cafe",
    Glacier = "Glacier",
    Poke = "Poke",
    Indien = "Indien",
    Vegan = "Vegan",
    Mexicain = "Mexicain",
    Italien = "Italien",
    Vietnamien = "Vietnamien",
}


type User = {
    username: string,
    hashedPassword: string,
    email: string,
    friends?: [],
    token?: string,
    isLogged: boolean,
}

type Mark = {

}


type Coords = {
    name?: string,
    latitude: number,
    longitude: number,
}