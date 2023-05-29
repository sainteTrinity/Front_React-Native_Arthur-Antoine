import {StyleSheet, View} from "react-native";
import { Text } from 'react-native-paper';
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";


const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <Text variant={"displaySmall"}>Connexion</Text>
            <View style={styles.dividerView} />
            <TextBox content="Identifiant" icon="account"/>
            <View style={styles.dividerView} />
            <TextBox icon="lock" content={"Mot de passe"} secureTextEntry={true}/>

            <View style={styles.dividerView} />
            <CustomButton label={"Connexion"} />
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
