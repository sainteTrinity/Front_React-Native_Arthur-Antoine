import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import { Text } from 'react-native-paper';
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";
import {loginRequest, signupRequest} from "../redux/actions/LoginActions";
import {useDispatch} from "react-redux";


const SignInScreen = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [credentials, setCredentials] = useState<Credentials>({username: username, hashedPassword: password, email: email, about: ""});

    useEffect(() => {
        setCredentials({username: username, hashedPassword: password, email: email, about: ""});
    }, [username, password, email])

    useEffect(() => {
        console.log(credentials);
    }, [credentials])

    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text variant={"displaySmall"}>S'inscrire</Text>
            <View style={styles.dividerView} />
            <TextBox setContent={setUsername} content="Identifiant" icon="account"/>
            <View style={styles.dividerView} />
            <TextBox setContent={setEmail} content="Adresse mail" icon="mail"/>
            <View style={styles.dividerView} />
            <TextBox setContent={setPassword} icon="lock" content={"Mot de passe"} secureTextEntry={true}/><View style={styles.dividerView} />
            <View style={styles.dividerView} />
            <TextBox icon="lock" content={"Mot de passe"} secureTextEntry={true}/>
            <View style={styles.dividerView} />

            <CustomButton label={"S'inscrire"} action={()  => dispatch(signupRequest(credentials))}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        justifyContent : "center",
        paddingRight: 20,
        paddingLeft: 20,
    },
    dividerView: {
        marginTop: 10,
        marginBottom: 10,
    },
});
export default SignInScreen;
