import {FETCH_REQUEST, RESTAURANT_SELECTED, UPDATE_REQUEST} from "../constants";


export const setRestaurantsList = (restaurantsList: Restaurant[]) => {
    return {
        type: FETCH_REQUEST,
        payload: restaurantsList
    }
}

export const updateRestaurantsList = (restaurantsList: Restaurant[]) => {
    return {
        type: UPDATE_REQUEST,
        payload: restaurantsList
    }
}

export const setRestaurant = (restaurant: Restaurant) => {
    return {
        type: RESTAURANT_SELECTED,
        payload: restaurant
    }
}
