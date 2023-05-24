import {TextInput} from "react-native-paper";
import {StyleSheet, View} from "react-native";


type TextBoxProps = {
    content?: string;
    setContent?: (content: string) => string;

}
const TextBox = (props: TextBoxProps) => {
    const {content, setContent} = props;

    return (
        <View style={styles.textBox}>
            <TextInput value={content} onChangeText={text => setContent ? setContent(text) : null}
                       style={styles.textInput} underlineColor={"transparent"}/>
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
