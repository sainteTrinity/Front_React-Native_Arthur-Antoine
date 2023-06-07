import {Searchbar} from 'react-native-paper';
import React, {SetStateAction, useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";

type SearchBoxProps = {
    setValueSearch?: (value:string) => void;
    avaibleOptions?: string[];
    placeholder?: string;
    isOver? : boolean;
}

const SearchBox = (props : SearchBoxProps) => {

    const [searchQuery, setSearchQuery] = useState('');
    const {setValueSearch, avaibleOptions, placeholder,isOver} = props;

    const onChangeSearch = (query: SetStateAction<string>) => {
        setSearchQuery(query);
    }

    useEffect(() => {
        if (setValueSearch) {
            setValueSearch(searchQuery);
        }
    }, [searchQuery])

    return (
        <View style={isOver? styles.containerOver : styles.container}>
            <Searchbar
                placeholder={placeholder ? placeholder : "Rechercher..."}
                onChangeText={onChangeSearch}
                value={searchQuery}
            />

            <View>
                {
                    /*
                    TODO: Afficher une liste de proposition
                     */
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        margin: 10,
    },
    containerOver : {
        zIndex: 1,
        position: 'absolute',
        top: 5,
        left: 5,
        right: 5,

    }
})

export default SearchBox;
