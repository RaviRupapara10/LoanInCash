import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { color, style } from '../Constant/Styles'
import { Animated } from 'react-native';
import { Slider } from 'react-native-elements/dist/slider/Slider';


const LoanAmmount = () => {

  const [LoanAmmount, setloanAmmount] = useState(1000)
  const [TexRate, setTexRate] = useState('10')

  const textAmount = (LoanAmmount * parseInt(TexRate, 10)) / 100
  const FinalAmmount = LoanAmmount + textAmount
  return (
    <View style={style.container}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Text>Loan Amount :  </Text>
          <Text style={{ fontSize: 30, padding: 10, fontWeight: '600', }}> {LoanAmmount}</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Slider

            step={100}
            maximumValue={20000}
            minimumValue={1000}
            value={LoanAmmount}
            onValueChange={(value) => setloanAmmount(value)}
            thumbStyle={{ height: 25, width: 25, backgroundColor: color.primary }}
          />
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <Text style={{ width: 150 }}>Minimum Value : 1000</Text>
            <Text style={{ width: 150, textAlign: 'right' }}>Maximum Value : 20000</Text>
          </View>
        </View>
        <View style={{ margin: 10, marginTop: 20 }}>
          <View style={style.InputFieldContainer}>
            <Text style={{ paddingHorizontal: 10 }}>Enter InterestRate in %</Text>
            <TextInput
              value={TexRate}
              onChangeText={(val) => setTexRate(val)}
              style={style.textInput}></TextInput>
          </View>
        </View>
        <View style={{ alignSelf: 'flex-end', marginTop: 20, padding: 20 }}>
          <Text>Loan : {LoanAmmount}</Text>
          <Text>taxRate : {TexRate}</Text>
          <Text>taxamount : {textAmount}</Text>

          <Text>Total Amomount :  {FinalAmmount} </Text>
        </View>
      </View>
    </View>
  )
}

export default LoanAmmount

const styles = StyleSheet.create({})