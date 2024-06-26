import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";


const StackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen" screenOptions={
                {
                    headerShown: false,
                    cardStyle: { backgroundColor: 'white' },
                }
            }>
                <Stack.Screen name="MainScreen" component={MainScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name={"SignInScreen"} component={SignInScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;
