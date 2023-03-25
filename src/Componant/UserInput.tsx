import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { color, style } from '../Constant/Styles'


const UserInput = (prop: any) => {
  return (
    <View style={style.InputFieldContainer}>
      <Text>{prop.name} :  </Text>
      <TextInput
        value={prop.state}
        onChangeText={(val) => prop.setState(val)}
        style={style.textInput}></TextInput>
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({})