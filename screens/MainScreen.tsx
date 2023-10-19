import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import CustomButton from "../components/CustomButton";
// @ts-ignore
import Logo from "../assets/images/LePetitChef.svg";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type MainScreenNavigationProp = StackNavigationProp<any, 'MainScreen'>;

const MainScreen = () => {
    const navigation = useNavigation<MainScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <View style={styles.animationContainer}>
                <LottieView
                    autoPlay
                    source={require("../assets/animations/sushi.json")}
                    style={styles.animations}
                />
            </View>

            <View style={styles.logoContainer}>
                <Logo height={300} />
            </View>

            <View style={styles.contentContainer}>
                <View>
                    <CustomButton
                        label="Connexion"
                        action={() => navigation.navigate('LoginScreen')}
                        style={styles.customButton}
                    />

                    <CustomButton
                        label="Inscription"
                        action={() => navigation.navigate('SignInScreen')}
                        style={styles.customButton}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    animationContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
    },
    animations: {
        width: 400,
        height: 400,
        marginTop: 25
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    customButton: {
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: "#6495ED", // Less flashy color
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
});

export default MainScreen;
