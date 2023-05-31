import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import {IconSource} from "react-native-paper/lib/typescript/src/components/Icon";


type CategorieProps = {
    icon?: IconSource
    label : string
}
const CategorieComponent = (props : CategorieProps) => {

    const {icon,label} = props;

    return(
            <Button icon={icon ? icon : "default"} style={styles.container} mode={"elevated"}>
                {label}
            </Button>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "#D0D0D0",
        padding : 10,
        minWidth : 116 ,
        maxWidth : 200,
        marginRight: 10,
        marginBottom: 10

    }
})

export default  CategorieComponent;
