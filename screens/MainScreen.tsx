import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import CustomButton from "../components/CustomButton";
// @ts-ignore
import Logo from "../assets/images/LePetitChef.svg";
import {useNavigation} from "@react-navigation/native";

const MainScreen = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo height={400} />
            </View>

            <View style={styles.contentContainer}>
                <View >
                    <CustomButton label="Connexion"  action={() => navigation.navigate('LoginScreen')} />
                    <View style={styles.dividerView} />
                    <CustomButton label="Inscription" action={() => navigation.navigate('SignInScreen')}/>
                </View>
                <View style={styles.animationContainer}>
                    <LottieView
                        autoPlay
                        source={require("../assets/images/food-vlogger.json")}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "#fff"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
    },
    dividerView: {
        marginTop: 10,
        marginBottom: 10,
    },
    animationContainer: {
        flex: 1,
    },
});

export default MainScreen;
