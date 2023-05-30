import {StyleSheet, View} from "react-native";
import { Text } from 'react-native-paper';
import TextBox from "../components/TextBox";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";


const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text variant={"displaySmall"}>Connexion</Text>
            <View style={styles.dividerView} />
            <TextBox content="Identifiant" icon="account"/>
            <View style={styles.dividerView} />
            <TextBox icon="lock" content={"Mot de passe"} secureTextEntry={true}/>

            <View style={styles.dividerView} />
            <CustomButton label={"Connexion"} action={()  => navigation.navigate("HomeScreen")}/>
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
