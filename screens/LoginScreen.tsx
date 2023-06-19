import {StyleSheet, View} from "react-native";
import { Text } from 'react-native-paper';
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../redux/actions/LoginActions";
import {useEffect, useState} from "react";

const LoginScreen = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [credentials, setCredentials] = useState<Credentials>({username: login, hashedPassword: password});

    useEffect(() => {
        setCredentials({username: login, hashedPassword: password});
    }, [login, password])
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text variant={"displaySmall"}>Connexion</Text>
            <View style={styles.dividerView} />
            <TextBox setContent={setLogin} content="Identifiant"  icon="account"/>
            <View style={styles.dividerView} />
            <TextBox setContent={setPassword} icon="lock" content={"Mot de passe"} secureTextEntry={true}/>

            <View style={styles.dividerView} />
            <CustomButton label={"Connexion"} action={()  => dispatch(loginRequest(credentials)) }/>
        </View>
    )
}

export default LoginScreen;

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
