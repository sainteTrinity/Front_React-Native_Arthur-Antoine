import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";


const StackNavigator = () => {

    const Stack = createStackNavigator();

    /**
     * TODO: Creer un StackNavigator pour extraire HomeScreen
     */
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen" screenOptions={
                {
                    headerShown: false
                }
            }>
                <Stack.Screen name="MainScreen" component={MainScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name={"SignInScreen"} component={SignInScreen}/>

                <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;
