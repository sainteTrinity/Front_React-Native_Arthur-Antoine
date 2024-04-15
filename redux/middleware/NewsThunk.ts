import {AnyAction, Dispatch} from "redux";
import {setNewsList} from "../actions/NewsActions";

export const NewsThunk = (token: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            let data  = generateNews(5);
            dispatch(setNewsList(data));
        } catch (error) {
            console.log(error);
        }
    };
};

function generateNews(count: number): News[] {
    const titles = ["New version of LePetitChef", "Exciting Updates", "Latest Discoveries"];
    const descriptions = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ];
    const authors = ["Arthur Van Damme", "Antoine Pellegrino", "Anonymous"];

    const newsArray: News[] = [];

    for (let i = 0; i < count; i++) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

        const news: News = {
            title: randomTitle,
            description: randomDescription,
            date: new Date().toISOString(),
            author: randomAuthor
        };

        newsArray.push(news);
    }

    return newsArray;
}