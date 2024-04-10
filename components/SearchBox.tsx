import { Searchbar, Text } from 'react-native-paper';
import React, { SetStateAction, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type SearchBoxProps = {
    setValueSearch?: (value: string) => void;
    avaibleOptions?: string[];
    placeholder?: string;
    isOver?: boolean;
};

const SearchBox = (props: SearchBoxProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { setValueSearch, avaibleOptions, placeholder, isOver } = props;

    const onChangeSearch = (query: SetStateAction<string>) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        if (setValueSearch) {
            setValueSearch(searchQuery);
        }
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder={placeholder ? placeholder : "Find your restaurant..."}
                placeholderTextColor={"#b2b2b2"}
                iconColor={"#344D59"}
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchBar}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    searchBar: {
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 3,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#b2b2b2',
    },
});

export default SearchBox;
