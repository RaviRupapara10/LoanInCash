// In App.js in a new project

import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, useColorScheme, Appearance } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { color } from './Constant/Styles';
import LoginForm from './screens/LoginForm';
import ViewTrasaction from './screens/ViewTrasaction';
import LoanAmmount from './screens/LoanAmount';
import Status from './screens/Status';
import Login from './screens/login Api/Login';
import Registration from './screens/login Api/Registration';






const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(255, 45, 85)',
    },
};

const Stack = createNativeStackNavigator();
const Navigation = () => {

    React.useEffect(() => {
    }, [])

    const scheme = useColorScheme()
    console.log(scheme);


    return (

        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
            <Stack.Navigator initialRouteName='Home Dash' >
                <Stack.Group screenOptions={{
                    headerStyle: {
                        // backgroundColor: color.primary

                    }
                }}>

                    <Stack.Screen name="Home Dash" component={HomeScreen} />
                    <Stack.Screen name="LoginForm" component={LoginForm} />
                    <Stack.Screen name="ViewTrasaction" component={ViewTrasaction} />
                    <Stack.Screen name="LoanAmount" component={LoanAmmount} />
                    <Stack.Screen name="Status" component={Status} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Registration" component={Registration} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Navigation

