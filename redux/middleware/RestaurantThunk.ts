import { Dispatch, AnyAction } from 'redux';
import {setRestaurantsList} from "../actions/RestaurantsActions";


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

export const AddRestaurantThunk = (token: string, restaurant: Restaurant) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch('https://lepetitchef-app.herokuapp.com/restaurant', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', Authorization: 'Bearer ' + token},
                body: JSON.stringify(restaurant)
            });

            if (response.status === 200) {
                const data = await response.json();

            }
        } catch (error) {
            console.log(error);
        }
    }
}
