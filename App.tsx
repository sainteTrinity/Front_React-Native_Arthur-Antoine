
import {PaperProvider} from "react-native-paper";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import StackNavigator from "./navigation/Navigation";
import React from "react";
import {StyleSheet} from "react-native";

export default function App() {
    return (
            <SafeAreaProvider >
                <SafeAreaView style={styles.topSafeArea}/>

                <SafeAreaView style={styles.mainSafeArea} >
                        <StackNavigator/>
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

