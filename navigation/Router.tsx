import MainStackNavigator from "./MainNavigator";
import StackNavigator from "./LoginNavigator";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import BottomTabBarNavigator from "./BottomTabBarNavigator";


const Router = () => {
    const isLogged = useSelector((state: any) => state.loginReducer.isLogin);


    useEffect(() => {
        console.log("isLogged : " + isLogged);
    }, [isLogged]);


    return (
        isLogged ?
            <>
                <BottomTabBarNavigator/>
            </>
            :
            <StackNavigator/>
    )

}
export default Router;
