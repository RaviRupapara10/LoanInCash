import { LogBox, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import { style, color } from '../Constant/Styles'
import { Avatar } from '@rneui/themed'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SQLite from "expo-sqlite";
import { useTheme } from '@react-navigation/native'


const HomeScreen = (props: any) => {

	const { colors } = useTheme();

	const db = SQLite.openDatabase("db.db");

	useEffect(() => {
		db.transaction(function (txn) {
			txn.executeSql('DROP TABLE IF EXISTS table_user', []);
		})
	}, [])




	const clearData = () => {

	}


	return (
		<View style={[style.container,]}>
			{/* <View> */}
			<View style={style.CashContainer}>
				<View style={style.CashInnerContainer}>
					<Text style={[style.CashText,]}>$ 5000</Text>
					<Avatar
						size={40}
						rounded
						icon={{ name: 'plus', type: 'font-awesome' }}
						containerStyle={{ padding: 10, backgroundColor: colors.primary }}
					/>
				</View>
				<View style={{ marginTop: 100 }}>

					{/* extra user registerApi code */}

					<View style={{}}>
						<Button
							labelStyle={style.btnText}
							style={{
								backgroundColor: 'red',
								margin: 20,
							}} mode="contained" onPress={() => props.navigation.navigate('Registration')}>
							UserRegister
						</Button>
						<Button
							labelStyle={style.btnText}
							style={{
								backgroundColor: 'green',
								margin: 20,
							}} mode="contained" onPress={() => props.navigation.navigate('Login')}>
							Login
						</Button>
					</View>

					<Button
						labelStyle={style.btnText}
						style={style.btn} mode="contained" onPress={() => props.navigation.navigate('LoginForm')}>
						Create Form

					</Button>
					<Button
						labelStyle={style.btnText} style={style.btn} mode="contained" onPress={() => props.navigation.navigate('ViewTrasaction')}>
						View Transaction

					</Button>

					<Button
						labelStyle={style.btnText} style={style.btn} mode="contained" icon="delete" onPress={clearData}>
						Clear Transactions

					</Button>
				</View>
			</View>

		</View >
	)
}

export default HomeScreen



const styles = StyleSheet.create({
	btn: {
		backgroundColor: 'orange',
		margin: 20,
	},
})

