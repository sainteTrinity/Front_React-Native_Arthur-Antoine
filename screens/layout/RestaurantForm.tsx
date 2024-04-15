import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import CustomButton from "../../components/CustomButton";
import TextBox from "../../components/TextBox";
import { StyleSheet, Text,TouchableOpacity } from "react-native";
import CustomFloatingButton from "../../components/CustomFloatingButton";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface RestaurantFormProps {
  onBack: () => void;
  onSubmit: (restaurant: any) => void;
  onLocationSelect: () => void;
}

const RestaurantForm = ({
  onBack,
  onSubmit,
  onLocationSelect,
}: RestaurantFormProps) => {
  const [restaurant, setRestaurant] = useState<Restaurant>({
    name: "",
    address: "",
    description: "",
  });

    const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const validateName = (name: string) => {
    if (name === "") return true;
    return name.length > 3;
  };

  const validatePhoneNumber = (phoneNumber: string | undefined) => {
    if (phoneNumber === undefined) return true;
    return phoneNumber.length > 9;
  };

  const validateWebsite = (website: string | undefined) => {
    if (website === undefined) return true;
    return website.match(/www\.[a-z]+\.[a-z]+/);
  };

  const validateForm = () => {
    return (
      restaurant.name.length > 0 && restaurant.address && restaurant.description
    );
  };

  const handleAddRestaurant = () => {
    if (validateForm()) {
      onSubmit(restaurant);
    } else {
      Alert.alert("Validation Error", "Please fill out all fields correctly.");
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.addingContainer}>
      <CustomFloatingButton
        onPress={() => onBack()}
        floatingPosition="top-left"
        content={<MaterialIcons name="arrow-back" size={24} color="black" />}
      />
      <Text style={styles.addingTitle}>Ajouter un restaurant</Text>
      <View style={{ marginBottom: 10 }}></View>

      <TextBox
        content="Nom du restaurant"
        setContent={(text) => setRestaurant({ ...restaurant, name: text })}
        error={
          validateName(restaurant.name) ? "" : "Le nom doit etre renseigner"
        }
      />
      <TextBox
        content="Description"
        setContent={(text) =>
          setRestaurant({ ...restaurant, description: text })
        }
      />
      <TextBox
        content="Telephone"
        setContent={(text) =>
          setRestaurant({ ...restaurant, phoneNumber: text })
        }
        type="phone"
        error={
          validatePhoneNumber(restaurant.phoneNumber)
            ? ""
            : "le numero de telephone n'est pas valide."
        }
      />
      <TextBox
        content="Site web"
        setContent={(text) => setRestaurant({ ...restaurant, website: text })}
        error={
          validateWebsite(restaurant.website) ? "" : "Le site n'est pas valide"
        }
      />
      <CustomButton style={styles.addLocationButton} label="Ajouter localisation" action={onLocationSelect} />

      <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location?.coords.latitude || 0,
              longitude: location?.coords.longitude || 0,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={(event) => {
              const { latitude, longitude } = event.nativeEvent.coordinate;
              setLatitude(latitude);
              setLongitude(longitude);
            }}
          >
            {latitude !== 0 && longitude !== 0 && (
              <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
              />
            )}
          </MapView>
        
        </View>
      
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CustomButton style={styles.backButton} label="Retour" action={onBack} />
        <CustomButton style={styles.addingButton} label="Ajouter" action={handleAddRestaurant} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addingContainer: {
    flex: 1,
    padding: 16,
  },
  addingTitle: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  addingButton: {
    backgroundColor: "#008000",
    borderRadius: 10,
    marginTop: 10,
  },
  backButton: {
    backgroundColor: "#ff0000",
    borderRadius: 10,
    marginTop: 10,
  },
  addLocationButton: {
    backgroundColor: "#0366fc",
    borderRadius: 10,
    marginTop: 10,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  modalButton: {
    position: "absolute",
    top: 16,
    padding: 8,
    backgroundColor: "#90EE90",
    borderRadius: 10,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RestaurantForm;
