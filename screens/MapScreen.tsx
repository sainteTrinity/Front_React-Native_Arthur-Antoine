import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import MapView, { UrlTile, Marker, LatLng, Region } from "react-native-maps";
import * as Location from 'expo-location';
import { LocationObject } from "expo-location";
import { MaterialIcons } from '@expo/vector-icons';
import SearchBox from "../components/SearchBox";
import { useSelector } from "react-redux";

type Coords = {
    latitude: number;
    longitude: number;
    name: string;
};

type Restaurant = {
    name: string;
    coordinates?: LatLng;
};

const MapScreen = () => {
    const [location, setLocation] = useState<LocationObject | undefined>();
    const [markers, setMarkers] = useState<Coords[]>([]);
    const [markerToDisplay, setMarkerToDisplay] = useState<Coords[]>([]);

    const restaurants: Restaurant[] = useSelector((state: any) => state.restaurantReducer.restaurants);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            restaurants.map((rest) => {
                if (!rest.coordinates?.latitude || !rest.coordinates?.longitude) return;
                setMarkers([...markers, { latitude: rest.coordinates.latitude, longitude: rest.coordinates.longitude, name: rest.name }])
            })
        })();
    }, []);

    useEffect(() => {
        setMarkerToDisplay(markers);
    }, [markers]);

    const handleSearchValueChange = (value: string) => {
        if (value === '') setMarkerToDisplay(markers);
        else setMarkerToDisplay(markers.filter((marker) => marker.name.toUpperCase().includes(value.toUpperCase())));

    };

    const handleLocationPress = async () => {
        let newLocation = await Location.getCurrentPositionAsync({});
        setLocation(newLocation);
        const region: Region = {
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
        mapRef.current?.animateToRegion(region);
    };

    const initialRegion: Region = {
        latitude: location?.coords.latitude || 0,
        longitude: location?.coords.longitude || 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const mapRef = React.useRef<MapView>(null);

    return (
        <View style={{ flex: 1 }}>
            <SearchBox isOver={true} setValueSearch={handleSearchValueChange}
                       avaibleOptions={markers.map((marker) => marker.name)} />
            <MapView
                ref={mapRef}
                style={{ flex: 1 }}
                region={initialRegion}
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

                {markerToDisplay &&
                    markerToDisplay.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            title={marker.name}
                        />
                    ))}
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
                onPress={handleLocationPress}
            >
                <MaterialIcons name="my-location" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default MapScreen;
