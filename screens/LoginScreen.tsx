import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Text } from 'react-native-paper';
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { loginThunk } from "../redux/middleware/LoginThunk";
import { MaterialIcons } from "@expo/vector-icons";
import CustomFloatingButton from "../components/CustomFloatingButton";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack"; // Adding icon


type LoginScreenNavigationProp = StackNavigationProp<any, 'LoginScreen'>;

const LoginScreen = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [credentials, setCredentials] = useState<Credentials>({ username: login, hashedPassword: password });
    
    const errorLogin = useSelector((state: any) => state.loginReducer.error);
    const loading = useSelector((state: any) => state.loginReducer.loading);

    useEffect(() => {
        setCredentials({ username: login, hashedPassword: password });
    }, [login, password]);

    const dispatch = useDispatch();
    const navigation = useNavigation<LoginScreenNavigationProp>();


    const connect = () => {
        // @ts-ignore
        dispatch(loginThunk(credentials))
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
                <TextBox setContent={setLogin} content="Identifiant" icon="account" />
                <View style={styles.textBoxMargin} />
                <TextBox setContent={setPassword} icon="lock" content={"Mot de passe"} secureTextEntry={true} error={errorLogin ? 'Informations de connexion incorrect' : ''}/>
                <View style={styles.textBoxMargin} />
                {
                    loading ?
                        <View>
                            <Text style={{ color: "#fff", textAlign: "center" }}>Connexion en cours...</Text>
                            <ActivityIndicator animating={true} color={"#fff"} />
                        </View>
                        :
                        <CustomButton label={"Connexion"} action={async() => connect()} style={styles.customButton} />

                }
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

export default LoginScreen;
