import { TextInput, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

type TextBoxProps = {
    content?: string;
    setContent?: (content: string) => void;
    icon?: string;
    secureTextEntry?: boolean;
    error?: string | null;
    type?: string;
};

const TextBox = (props: TextBoxProps) => {
    const { content, setContent, icon, secureTextEntry, error } = props;
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const [label, setLabel] = useState(content);

    const showPassword = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.textBox}>
            <TextInput
                left={icon ? <TextInput.Icon icon={icon ? icon : ""} /> : null}
                right={
                    secureTextEntry ? (
                        <TextInput.Icon icon={isPasswordVisible ? "eye-off" : "eye"} onPress={() => showPassword()} />
                    ) : null
                }
                onChangeText={(text) => (setContent ? setContent(text) : setLabel(text))}
                style={styles.textInput}
                underlineColor="transparent"
                placeholder={setContent ? content : label}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
                error={!!error}
                keyboardType={props.type === "phone" ? "phone-pad" : "default"}
                autoCapitalize="none"

            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#F4F4F4",
    },
    textBox: {
        overflow: "hidden",
        marginBottom: 10,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
        flexWrap: "wrap",
        width: "100%",
    },
});

export default TextBox;
