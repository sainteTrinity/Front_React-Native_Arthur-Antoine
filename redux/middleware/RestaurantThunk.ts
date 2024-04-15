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
                //TODO: erreur dans le dispatch "Restaurant" is not a valid JSON
                dispatch(AddRestaurant(data));
            }
            else {
                console.log("NON")
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteRestaurantThunk = (token: string, id: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch('https://lepetitchef-app.herokuapp.com/restaurant/' + id, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
            });

            console.log(response)

            if (response.status === 200) {
                const data = await response.json();
                
                console.log(data)
            }
            else {
                console.log("NON")
            }
        } catch (error) {
            console.log(error);
        }
    }
}