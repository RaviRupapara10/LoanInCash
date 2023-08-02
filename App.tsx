import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';




export default function App() {


    return (
        // <AppearanceProvider>

        <Navigation />
        // </AppearanceProvider>
    );
}


