import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";


const MainStackNavigator = () => {

    const Stack = createStackNavigator();

    return (
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={
                {
                    headerShown: false,
                    cardStyle: { backgroundColor: 'white' },
                }
            }>

                <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
                <Stack.Screen name="RestaurantScreen" component={RestaurantScreen}/>

            </Stack.Navigator>
    )
}

export default MainStackNavigator;
