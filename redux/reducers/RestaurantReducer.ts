const initialState = {
    restaurants: {},
    error: null,
    restaurantSelected: null
}

const restaurantReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {...state, restaurants: action.payload};

        case 'RESTAURANT_SELECTED' :
            return {...state, restaurantSelected: action.payload};

        case 'ADD_RESTAURANT':
            return {...state, restaurants: action.payload};
        default:
            return state;
    }
}

export default restaurantReducer;