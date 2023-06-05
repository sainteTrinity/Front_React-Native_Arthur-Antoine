import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainStackNavigator from "./MainNavigator";
import {HOME, MAP} from "../assets/icon/icons";
import CustomFloatingButton from "../components/CustomFloatingButton";

const BottomTabBarNavigator = () => {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home" screenOptions={
                {
                    headerShown: false
                }

            }>
                <BottomTabNavigator.Screen name="Home" component={MainStackNavigator}
                                           options={{
                                               title: '',
                                               tabBarIcon: ({color}) => (
                                                   <HOME width={30} height={30} />
                                               ),

                                           }}/>

                <BottomTabNavigator.Screen name="Plus" component={MainStackNavigator}
                                           options={{
                                               title: '',
                                               tabBarButton: (props) => <CustomFloatingButton  />,
                                           }} />

                <BottomTabNavigator.Screen name="Map" component={MainStackNavigator}
                                           options={{
                                               title: '',
                                                  tabBarIcon: ({color}) => (
                                                      <MAP  width={30} height={30} />
                                                    ),
                                           }} />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabBarNavigator;
