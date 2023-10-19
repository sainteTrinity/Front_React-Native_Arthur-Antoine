import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from 'react-native-paper';
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";
import { loginRequest, signupRequest } from "../redux/actions/LoginActions";
import { useDispatch } from "react-redux";
import {signupThunk} from "../redux/middleware/LoginThunk";

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
            <Text variant={"displaySmall"}>S'inscrire</Text>
            <View style={styles.dividerView} />
            <TextBox setContent={setUsername} content="Identifiant" icon="account" />
            <View style={styles.dividerView} />
            <TextBox setContent={setEmail} content="Adresse mail" icon="mail" error={emailError} />
            <View style={styles.dividerView} />
            <TextBox setContent={setPassword} icon="lock" content={"Mot de passe"} secureTextEntry={true} error={passwordError} />
            <View style={styles.dividerView} />
            <TextBox icon="lock" content={"Confirmer le mot de passe"} secureTextEntry={true} />
            <View style={styles.dividerView} />
            <CustomButton label={"S'inscrire"} action={handleSignUp} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingRight: 20,
        paddingLeft: 20,
    },
    dividerView: {
        marginTop: 10,
        marginBottom: 10,
    },
});

export default SignInScreen;