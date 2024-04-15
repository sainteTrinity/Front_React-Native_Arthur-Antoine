import {SET_LIST_NEWS} from "../constants";

export const setNewsList = (newsList: News[]) => {
    return {
        type: SET_LIST_NEWS,
        payload: newsList
    }
}