import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style, color } from '../Constant/Styles'
import { Avatar } from '@rneui/themed'
import { Button } from 'react-native-paper'


const HomeScreen = (props: any) => {
	return (
		<View style={[style.container,]}>
			<View style={style.CashContainer}>
				<View style={style.CashInnerContainer}>
					<Text style={style.CashText}>$ 5000</Text>
					<Avatar
						size={40}
						rounded
						icon={{ name: 'plus', type: 'font-awesome' }}
						containerStyle={{ backgroundColor: '#393E46', padding: 10 }}
					/>
				</View>
				<View style={{ marginTop: 100 }}>
					<Button
						labelStyle={style.btnText}
						style={style.btn} mode="contained" onPress={() => props.navigation.navigate('LoginForm')}>
						Create Form

					</Button>
					<Button
						labelStyle={style.btnText} style={style.btn} mode="contained" onPress={() => props.navigation.navigate('ViewTrasaction')}>
						View Transaction

					</Button>
				</View>
			</View>

		</View>
	)
}

export default HomeScreen



const styles = StyleSheet.create({

})

