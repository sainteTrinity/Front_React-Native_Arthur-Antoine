
const initialState = {
    restaurants: {},
    error: null,
    loading: false,
}

const restaurantReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            const restaurants = fetch('https://lepetitchef-app.herokuapp.com/restaurant/all', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
            })

            return {...state, restaurants: restaurants};
        default:
            return state;
    }
}