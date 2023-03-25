// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { color } from './Constant/Styles';
import LoginForm from './screens/LoginForm';
import ViewTrasaction from './screens/ViewTrasaction';
import LoanAmmount from './screens/LoanAmmount';


const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group screenOptions={{
                    headerStyle: {
                        backgroundColor: color.primary

                    }
                }}>

                    <Stack.Screen name="Home Dash" component={HomeScreen} />
                    <Stack.Screen name="LoginForm" component={LoginForm} />
                    <Stack.Screen name="ViewTrasaction" component={ViewTrasaction} />
                    <Stack.Screen name="LoanAmmount" component={LoanAmmount} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation

