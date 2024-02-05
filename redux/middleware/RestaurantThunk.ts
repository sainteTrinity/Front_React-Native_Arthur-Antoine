import { Dispatch, AnyAction } from 'redux';
import {AddRestaurant, setRestaurantsList} from "../actions/RestaurantsActions";


export const RestaurantThunk = (token: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch('https://lepetitchef-app.herokuapp.com/restaurant/all', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
            });


            if (response.status === 200) {
                const data = await response.json();
                dispatch(setRestaurantsList(data));
            } else {
                //dispatch({ type: 'RESTAURANT_FAILURE', payload: response.status });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const addRestaurantThunk = (token: string, restaurant: Restaurant) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch('https://lepetitchef-app.herokuapp.com/restaurant', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
                body: JSON.stringify(restaurant)
            });

            if (response.status === 200) {
                const data = await response.json();
                // Une fois que le restaurant est ajouté avec succès, dispatchez l'action pour mettre à jour l'état
                dispatch(AddRestaurant(data)); // Dispatchez l'action avec les données du nouveau restaurant
            }
        } catch (error) {
            console.log(error);
        }
    };
};