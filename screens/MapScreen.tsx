import React, {useEffect, useState} from "react";
import MapView, {UrlTile} from "react-native-maps";
import * as Location from 'expo-location';
import {LocationObject} from "expo-location";
import { View, Button, TouchableOpacity } from "react-native";


const MapScreen = () => {

    const [location, setLocation] = useState<LocationObject>();

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);




    return (
            <>
                <MapView

                    style={{ flex: 1 }}
                    region={{
                        latitude: location?.coords.latitude || 0,
                        longitude: location?.coords.longitude || 0,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                    }
                >
                    <UrlTile urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
                </MapView>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: 16,
                        right: 16,
                        backgroundColor: 'white',
                        borderRadius: 32,
                        padding: 8,
                    }}
                >

                </TouchableOpacity>
            </>

    )
}

export default MapScreen;
