import {BottomTabBarButtonProps, BottomTabBarProps, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainStackNavigator from "./MainNavigator";
import {HOME, MAP} from "../assets/icon/icons";
import CustomFloatingButton from "../components/CustomFloatingButton";
import AddingAndEditScreen from "../screens/AddingAndEditScreen";
import MapScreen from "../screens/MapScreen";
import {Button} from "react-native-paper";
import {StyleSheet} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

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
                                                   <HOME width={30} height={30}/>
                                               ),

                                           }}/>

                <BottomTabNavigator.Screen name="Plus" component={AddingAndEditScreen}
                                           options={({navigation })  => ({
                                               title: '',
                                               tabBarButton: (props) =>
                                                   <Button style={styles.button} onPress={() => navigation.navigate("Plus")}>
                                                       <MaterialIcons name="add-circle" size={22} color={"#999"}  />
                                                   </Button>
                                                           })}/>

                <BottomTabNavigator.Screen name="Map" component={MapScreen}
                                           options={{
                                               title: '',
                                               tabBarIcon: ({color}) => (
                                                   <MAP width={30} height={30}/>
                                               ),
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabBarNavigator;

const styles = StyleSheet.create({
    button: {
        height:50,
        width:50,
        backgroundColor: "#fff",
        borderWidth:0.6,
        borderRadius: 100,
        borderColor:"#ddd",
        position: 'absolute',
        justifyContent:"center",
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -28 }],
        zIndex: 1,
    },
})