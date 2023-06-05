import {FETCH_REQUEST, UPDATE_REQUEST} from "../constants";


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
