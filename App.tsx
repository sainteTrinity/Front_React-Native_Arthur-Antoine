
import {PaperProvider} from "react-native-paper";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import StackNavigator from "./navigation/LoginNavigator";
import React from "react";
import {StyleSheet} from "react-native";
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import Router from "./navigation/Router";

export default function App() {
    return (
            <SafeAreaProvider >
                <SafeAreaView style={styles.topSafeArea}/>

                <SafeAreaView style={styles.mainSafeArea} >
                    <Provider store={store}>
                        <Router />
                    </Provider>
                    </SafeAreaView>
            </SafeAreaProvider>

    );
}


const styles = StyleSheet.create(
    {
        mainSafeArea: {
            flex: 1,
            backgroundColor: "#fff"
        },
        topSafeArea: {
            flex: 0,
            backgroundColor: "#fff"
        }
    }
);

