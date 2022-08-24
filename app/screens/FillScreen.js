import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import MainButton from '../components/MainButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


class FillScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: 'https://www.placecage.com/c/200/300',
            items: [],
            count: 0
        };
    }

    componentDidMount = async () => {
        this.getItems();
    };

    getItems = async () => {
        try {
            await AsyncStorage
                .getItem('key')
                .then(result => {
                    result = result == null ? [] : JSON.parse(result)
                    this.setState({ count: result.length });
                })
        } catch (error) {
            console.log(error.message);
        }
    }

    btnClick = async () => {
        await AsyncStorage
            .getItem('key')
            .then(list => {
                list = list == null ? [] : JSON.parse(list)
                const randomTitle = Math.random().toString(36).slice(2, 10);
                const newItems = { title: randomTitle, image: this.state.image };
                this.setState(state => ({
                    items: state.items.concat([newItems])
                }));
                try {
                    AsyncStorage.setItem("key", JSON.stringify(this.state.items));
                    this.props.navigation.navigate('HomeScreen')
                } catch (error) {
                    console.log(error.message);
                }
            })
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: '#4CAF50'
                }}>No of available cages: {this.state.count}</Text>
                <MainButton
                    onPress={this.btnClick}
                    title="Add Cage"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 2
    }

});

export default FillScreen;
