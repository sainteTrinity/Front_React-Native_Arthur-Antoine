import {TextInput} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {useState} from "react";


type TextBoxProps = {
    content?: string;
    setContent?: (content: string) => string;
    icon?: string;
    secureTextEntry?: boolean;

}
const TextBox = (props: TextBoxProps) => {
    const {content, setContent, icon, secureTextEntry} = props;
    const [isPasswordVisible, setPasswordVisible] = useState(false);


    const showPassword = () => {
        setPasswordVisible(!isPasswordVisible)
    }
    return (
        <View style={styles.textBox}>
            <TextInput left={icon ? <TextInput.Icon icon={icon ? icon : ''}/> : null}
                       right={secureTextEntry ? <TextInput.Icon icon={isPasswordVisible ? 'eye-off' : 'eye'} onPress={() => showPassword()}/> : null} value={content}
                       onChangeText={text => setContent ? setContent(text) : null}
                       style={styles.textInput} underlineColor={"transparent"} placeholder={content ? content : ''}
                       secureTextEntry={secureTextEntry && !isPasswordVisible}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#F4F4F4",
        borderRadius: 30,
    },
    textBox: {
        borderRadius: 30,
        overflow: "hidden",
    }
});
export default TextBox;
