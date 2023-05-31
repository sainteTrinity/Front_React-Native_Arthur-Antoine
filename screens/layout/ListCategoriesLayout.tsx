import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CategorieComponent from '../../components/CategorieComponent';
import LogoNouille from '../../assets/icon/noodles.svg';
import LogoFrites from '../../assets/icon/french-fries.svg';
import LogoSushi from '../../assets/icon/nigiri.svg';
const ListCategoriesLayout = () => {
    return (
        <ScrollView horizontal contentContainerStyle={styles.container}>
            <CategorieComponent icon={LogoSushi} label={'sushi'} />
            <CategorieComponent icon={LogoFrites} label={'Frites'} />
            <CategorieComponent icon={LogoNouille} label={'Chinois'} />

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
