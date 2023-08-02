import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '../Constant/Styles'
import { getData } from '../Componant/Storage'
import { Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SQLite from "expo-sqlite";


const ViewTrasaction = ({ navigation }: any) => {

  const [userData, setuserData] = useState([])


  const db = SQLite.openDatabase("db.db");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user',
        [],


        (tx, results) => {
          var data: any = [];
          for (let i = 0; i < results.rows.length; ++i)
            data.push(results.rows.item(i));
          setuserData(data)
          // setFlatListItems(temp);
          console.log(data);

        }
      );
    });
  }, []);

  // useEffect(() => {
  //   // const userData = Data()
  //   data();
  // }, [])

  // const data = async () => {
  //   try {
  //     let value = await getData()
  //     if (value !== null) {
  //       setuserData(value);
  //     }
  //   }
  //   catch (e) {
  //   }
  // }

  const ViewStatus = (a: any, index: any) => {
    navigation.navigate('Status', { a, index })
  }
  const formateDate = (date: string) => {
    const currentdate = new Date(date)
    return currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + '  ' + "Time:"
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();
  }

  return (
    <ScrollView>
      <View style={style.container}>




        {userData.map((a: any, index: number) =>


          <Pressable key={index} onPress={() => ViewStatus(a, index)}>
            <View style={style.userDetailContainer} >
              <View style={{}}>
                <Text style={[style.teansctionText, { fontSize: 20, fontWeight: '600' }]}>Name : {a.firstName} {a.lastName} </Text>
                <Text style={style.teansctionText}>Email : {a.email}</Text>
                <Text style={style.teansctionText}>Tax-Rate : {a.TexRate} </Text>
                <Text style={style.teansctionText}>
                  LoanTime : {formateDate(a.Date)} </Text>
                <Text style={[style.teansctionText, { fontSize: 20, fontWeight: '600' }]}>LoanAmmount : {a.FinalAmmount} </Text>


              </View>

            </View>
          </Pressable>

        )}

      </View>
    </ScrollView>
  )
}

export default ViewTrasaction

const styles = StyleSheet.create({})