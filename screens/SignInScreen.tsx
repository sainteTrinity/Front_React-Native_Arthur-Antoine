import React, { useEffect, useState } from "react";
import {Image, StyleSheet, View} from "react-native";
import { Text } from 'react-native-paper';
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";
import { loginRequest, signupRequest } from "../redux/actions/LoginActions";
import { useDispatch } from "react-redux";
import {loginThunk, signupThunk} from "../redux/middleware/LoginThunk";
import {MaterialIcons} from "@expo/vector-icons";
import CustomFloatingButton from "../components/CustomFloatingButton";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";

type SigninScreenNavigationProp = StackNavigationProp<any, 'SigninScreen'>;


const SignInScreen = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [credentials, setCredentials] = useState<Credentials>({
        username: username,
        hashedPassword: password,
        email: email,
        about: ""
    });
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);

    useEffect(() => {
        setCredentials({
            username: username,
            hashedPassword: password,
            email: email,
            about: ""
        });
    }, [username, password, email])

    useEffect(() => {
    }, [credentials])

    const dispatch = useDispatch();
    const navigation = useNavigation<SigninScreenNavigationProp>();

    const handleSignUp = () => {
        if (!validatePassword(password)) {
            setPasswordError("Le mot de passe doit comporter au moins 8 caractères avec au moins une majuscule, un chiffre et un caractère spécial.");
            return;
        }

        if (!validateEmail(email)) {
            setEmailError("Veuillez entrer une adresse e-mail valide.");
            return;
        }

        // @ts-ignore
        dispatch(signupThunk(credentials));
    }

    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/background-test.jpg")} // Replace with the path to your image
                style={styles.backgroundImage}
                resizeMode="cover"
            />
            <CustomFloatingButton
                action={() => navigation.navigate('MainScreen')}
                floatingPosition="top-left"
                content={<MaterialIcons name="arrow-back" size={24} color={'rgba(255, 255, 255, 1)'} />}
            />
            <View style={styles.overlay}>
                <TextBox setContent={setUsername} content="Identifiant" icon="account" />
                <View style={styles.textBoxMargin} />
                <TextBox setContent={setEmail} content="Adresse mail" icon="mail" error={emailError} />
                <View style={styles.textBoxMargin} />
                <TextBox setContent={setPassword} icon="lock" content={"Mot de passe"} secureTextEntry={true} error={passwordError} />
                <View style={styles.textBoxMargin} />
                <TextBox icon="lock" content={"Confirmer le mot de passe"} secureTextEntry={true} />
                <View style={styles.textBoxMargin} />
                <CustomButton label={"S'inscrire"} action={handleSignUp} />
            </View>
        </View>
    );
}

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
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    textBoxMargin: {
        height: 20, // Adjust the height as needed
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 100,
        color: "#fff",
        textShadowColor: 'rgba(255, 255, 255, 0.45)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginBottom: 20,
    },
    customButton: {
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderColor: "#fff",
        borderWidth: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    textBox: {
        marginBottom: 40
    }
});
export default SignInScreen;