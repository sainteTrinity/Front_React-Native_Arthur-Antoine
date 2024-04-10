import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import Router from "./navigation/Router";
import * as Font from "expo-font";

export default function App() {

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'PatuaOne_400Regular': require('./assets/fonts/PatuaOne-Regular.ttf'), // Charger la police personnalisée
            });
        };

        loadFonts(); // Appeler la fonction pour charger les polices personnalisées
    }, []);

    return (
            <SafeAreaProvider >
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

