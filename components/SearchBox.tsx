import {Searchbar} from 'react-native-paper';
import React, {SetStateAction, useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";

type SearchBoxProps = {
    setValueSearch?: (value:string) => void;
    avaibleOptions?: string[];
    placeholder?: string;
}

const SearchBox = (props : SearchBoxProps) => {

    const [searchQuery, setSearchQuery] = useState('');
    const {setValueSearch, avaibleOptions, placeholder} = props;

    const onChangeSearch = (query: SetStateAction<string>) => {
        setSearchQuery(query);
    }

    useEffect(() => {
        if (setValueSearch) {
            setValueSearch(searchQuery);
        }
    }, [searchQuery])

    return (
        <View style={styles.container}>
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
        margin: 20
    }
})

export default SearchBox;
