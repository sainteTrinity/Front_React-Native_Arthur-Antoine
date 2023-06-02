import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CategorieComponent from '../../components/CategorieComponent';

import {FRITES, NOUILLE} from "../../assets/icon/icons";
const ListCategoriesLayout = () => {
    return (
        <ScrollView horizontal contentContainerStyle={styles.container}>
            <CategorieComponent icon={NOUILLE} label={'sushi'} />
            <CategorieComponent icon={FRITES} label={'Frites'} />
            <CategorieComponent icon={NOUILLE} label={'Chinois'} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',

    },
});

export default ListCategoriesLayout;
