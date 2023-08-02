import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, style } from '../Constant/Styles'
import { Slider } from 'react-native-elements/dist/slider/Slider';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData, storeData } from '../Componant/Storage';
import * as SQLite from "expo-sqlite";



const LoanAmmount = ({ navigation, route }: any) => {



  const DataObj = route.params.obj
  // console.log(DataObj);


  const db = SQLite.openDatabase("db.db");

  const [LoanAmmount, setloanAmmount] = useState(1000)
  const [TexRate, setTexRate] = useState('10')
  const [userDetails, setuserDetails] = useState<any[]>([])
  const [registerTime, setRegisterTime] = useState()




  const textAmount = (LoanAmmount * parseInt((TexRate || '0'), 10)) / 100
  const FinalAmmount = LoanAmmount + textAmount




  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            // txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, firstName VARCHAR(20), lastName VARCHAR(10), email VARCHAR(20),LoanAmmount VARCHAR(20) ,TexRate VARCHAR(3),FinalAmmount VARCHAR(20),Date VARCHAR(30))',
              []
            );
          }
        }
      );
    });
  }, []);




  // const time = () => {

  //   let a: any = new Date();
  //   setRegisterTime(a)
  // }
  // // console.log(registerTime);









  const pressNext = async () => {
    await db.transaction(function (tx) {

      tx.executeSql(
        'INSERT INTO table_user (firstName,lastName,email, LoanAmmount,TexRate,FinalAmmount,Date) VALUES (?,?,?,?,?,?,?)',
        [DataObj.firstName,
        DataObj.lastName,
        DataObj.email,
          LoanAmmount,
          TexRate,
          FinalAmmount,
        new Date().toJSON()],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home Dash'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        },
        (tx, err) => {
          console.log('err=>', err);
          return true;
        }
      );
    });
  }



  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       'SELECT * FROM table_user',
  //       [],


  //       (tx, results) => {
  //         var data = [];
  //         for (let i = 0; i < results.rows.length; ++i)
  //           data.push(results.rows.item(i));
  //         // setFlatListItems(temp);
  //         console.log(data);

  //       }
  //     );
  //   });
  // }, [registerTime]);
  //   Alert.alert('Are you sure you can Pay', `Your loan amount is ${FinalAmmount}`, [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel',
  //     },
  //     { text: 'OK', onPress: () => savedData() },
  //   ]);




  // const FinalObj = {
  //   ...DataObj,
  //   LoanAmmount: LoanAmmount,
  //   TexRate: TexRate, FinalAmmount: FinalAmmount, Date: datetime, status: 'pending',
  // }

  // const FinalData = { ...FinalObj }

















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
              keyboardType='numeric'
              value={TexRate}
              onChangeText={(val) => setTexRate(val)}
              style={style.textInput}></TextInput>
          </View>
        </View>
        <View style={{ alignSelf: 'flex-end', marginTop: 20, padding: 20, backgroundColor: color.dark }}>
          <Text style={{ color: color.light, padding: 5 }} >Loan : {LoanAmmount}</Text>
          <Text style={{ color: color.light, padding: 5 }}>Tax-Rate : {TexRate}</Text>
          <Text style={{ color: color.light, padding: 5 }}>Tax Amount : {textAmount}</Text>
        </View>
        <View style={style.CashInnerContainer}>
          <Text>Total Amomount : </Text>
          <Text style={style.CashText}> {FinalAmmount} </Text>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Button style={[style.btn]} mode="contained" onPress={pressNext}>
            Next
          </Button>
        </View>
      </View>

    </View >
  )
}

export default LoanAmmount

const styles = StyleSheet.create({})