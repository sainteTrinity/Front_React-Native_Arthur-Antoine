import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";


const MainStackNavigator = () => {

    const Stack = createStackNavigator();

    /**
     * TODO: Creer un StackNavigator pour extraire HomeScreen
     */
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={
                {
                    headerShown: false
                }
            }>

                <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;
