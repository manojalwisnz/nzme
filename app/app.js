import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FillScreen from './screens/FillScreen';

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={HomeScreen}
                    name="HomeScreen"
                    options={{
                        title: 'Home',
                        headerStyle: { backgroundColor: '#4CAF50' },
                        headerTintColor: '#fff'
                    }}>
                </Stack.Screen>
                <Stack.Screen component={FillScreen}
                    name="FillScreen"
                    options={{
                        title: 'Fill Screen',
                        headerStyle: { backgroundColor: '#4CAF50' },
                        headerTintColor: '#fff'
                    }}>
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}