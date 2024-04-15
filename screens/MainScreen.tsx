import React from "react";
import { View, StyleSheet, Image, Text, StatusBar } from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {transparent} from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

type MainScreenNavigationProp = StackNavigationProp<any, 'MainScreen'>;

const MainScreen = () => {
    const navigation = useNavigation<MainScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <StatusBar translucent={true}  />

            <Image
                source={require("../assets/images/background-test.jpg")}
                style={styles.backgroundImage}
                resizeMode="cover" // Ajuste l'image pour qu'elle couvre tout le conteneur
            />

            <View style={styles.overlay}>
                <View style={styles.logoContainer}>
                    <Text style={styles.appName}>LePetitChef</Text>
                </View>

                <View style={styles.contentContainer}>
                    <View>
                        <View style={styles.commentContainer}>
                            <Text style={styles.catchyText}>
                                "LePetitChef" est votre compagnon pour explorer les restaurants. Notez et partagez vos expériences, découvrez de nouveaux endroits adaptés à vos goûts. Transformez chaque repas en une aventure culinaire avec notre application conviviale! 🍽️✨
                            </Text>
                        </View>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    appName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        textShadowColor: 'rgba(255, 255, 255, 0.45)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginBottom: 20,
    },
    commentContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 20,
        marginBottom: 30
    },
    catchyText: {
        fontSize: 16,
        textAlign: "center",
        color: "#000",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    customButton: {
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor:"#fff",
        borderWidth:0.3,
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
