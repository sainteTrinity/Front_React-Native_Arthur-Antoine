import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import LoginScreen from "../screens/LoginScreen";


const StackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen" screenOptions={
                {
                    headerShown: false

                }
            }>
                <Stack.Screen name="MainScreen" component={MainScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;
