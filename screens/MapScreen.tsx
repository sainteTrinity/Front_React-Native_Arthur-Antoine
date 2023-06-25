import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { UrlTile, Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";
import SearchBox from "../components/SearchBox";

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
        <View style={{flex : 1}}>
            <SearchBox isOver={true}/>
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: location?.coords.latitude || 0,
                    longitude: location?.coords.longitude || 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <UrlTile urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Ma position"
                        description="Vous êtes ici!"
                        image={require("../assets/icon/map-pin.png")}
                    />
                )}
            </MapView>
        </View>
    );
};
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
export default MapScreen;
