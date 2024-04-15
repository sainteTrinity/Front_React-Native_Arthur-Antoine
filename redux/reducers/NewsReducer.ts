const initialState = {
    news: {},
    error: null,
    newsSelected: null
}

const newsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_LIST_NEWS':
            return {...state, news: action.payload};

        case 'NEWS_SELECTED' :
            return {...state, newSelected: action.payload};

        default:
            return state;
    }
}

export default newsReducer;