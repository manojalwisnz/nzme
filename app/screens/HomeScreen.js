import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, RefreshControl } from 'react-native';
import MainButton from "../components/MainButton";
import MainFlatList from "../components/MainFlatList";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(true);
    const [userDate, setUserData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);


    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }

    const onRefresh = () => {
        loadData();
    }

    loadData = async () => {
        setRefreshing(true);
        await AsyncStorage
            .getItem('key')
            .then(favs => {
                favs = favs == null ? [] : JSON.parse(favs)
                var newdata = userDate.concat(favs);
                setUserData(newdata);
                setRefreshing(false);
                return AsyncStorage.setItem('key', JSON.stringify(newdata))
            })
    }

    return (
        <View style={styles.MainContainer}>
            {refreshing ? <ActivityIndicator /> : null}
            <MainFlatList data={userDate} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            } />
            <MainButton onPress={() => { navigation.navigate('FillScreen') }} title="Fill Me" />
        </View>
    );
}


const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 2

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

});

export default HomeScreen;
