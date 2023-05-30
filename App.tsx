import TextBox from "./components/TextBox";
import {View} from "react-native";
import CustomButton from "./components/CustomButton";
import {PaperProvider} from "react-native-paper";
import MainScreen from "./screens/MainScreen";

export default function App() {
    return (
        <PaperProvider>
            <MainScreen />
        </PaperProvider>

    );
}


