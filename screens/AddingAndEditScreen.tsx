import React from "react";
import {StyleSheet, View} from "react-native";
import {DataTable, Divider, IconButton, Text} from 'react-native-paper';
import CustomButton from "../components/CustomButton";
import CustomFloatingButton from "../components/CustomFloatingButton";
import TextBox from "../components/TextBox";
import {useSelector} from "react-redux";

const AddingAndEditScreen = () => {

    const [adding, setAdding] = React.useState(false);
    const restaurants : Array<Restaurant> = useSelector((state: any) => state.restaurantReducer.restaurants);

    const renderRow = (restaurant: Restaurant) => {
        return (
            <DataTable.Row>
                <DataTable.Cell>{restaurant.name}</DataTable.Cell>
                <DataTable.Cell>
                    <IconButton icon={"pencil"} iconColor={"green"} onPress={() => console.log("Edit")}/>
                    <IconButton icon={"delete"} iconColor={"red"} onPress={() => console.log("Delete")}/>
                </DataTable.Cell>
            </DataTable.Row>
        )
    }

    return (
        <View style={{marginLeft: 10, flex: 1}}>
            {
                adding ?
                    <View>
                        <CustomFloatingButton onPress={() => setAdding(false)} floatingPosition={"top-left"}
                                              content={"<"}/>
                        <Text style={{alignSelf: "center", marginTop: 20}} variant={"titleLarge"}>Ajouter un restaurant</Text>
                        <View style={{height: 20}}/>
                        <TextBox content={"Nom du restaurant"}/>
                        <View style={{height: 20}}/>

                        <TextBox content={"Description du restaurant"}/>
                        <View style={{height: 20}}/>

                        <TextBox content={"Téléphone du restaurant"}/>
                        <View style={{height: 20}}/>

                        <TextBox content={"Site web du restaurant"}/>
                        <View style={{height: 20}}/>

                        <View style={{maxWidth: 200, alignSelf: "center"}}>
                            <Text variant={"titleMedium"} style={{alignSelf : "center"}}> Localisation</Text>
                            <CustomButton label={"Selectionner"} />
                        </View>

                        <View style={{height: 20}}/>

                        <CustomButton  label={"Valider"} style={Style.validationButton}/>
                    </View>
                    :
                    <>
                        <Text style={{marginTop: 40, marginLeft: 10}} variant={"titleLarge"}>Liste des restaurtants</Text>

                        <View>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Nom du restaurants</DataTable.Title>
                                    <DataTable.Title>Actions</DataTable.Title>
                                </DataTable.Header>
                                {
                                    restaurants.map((restaurant) => renderRow(restaurant))
                                }
                            </DataTable>
                        </View>

                        <View style={{flex: 1}}/>
                        <Divider/>

                        <View style={{marginBottom: 40, marginLeft: 10, marginRight: 10}}>
                            <Text style={{marginBottom: 5, marginTop: 10}} variant={"titleLarge"}>Envie de rajouter un
                                restaurant
                                ?</Text>
                            <CustomButton label={"Ajouter un restaurant"}
                                          action={() => setAdding(true)}/>
                        </View>
                    </>
            }
        </View>
    )
}

const Style = StyleSheet.create({
    validationButton: {
        backgroundColor: "#008000",
        borderRadius: 10,
        justifyContent: "center",
        maxWidth: 200,
        alignSelf: "center",
    },
});
export default AddingAndEditScreen;
