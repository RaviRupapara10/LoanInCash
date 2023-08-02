import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, style } from '../Constant/Styles'
import ProgessBar from '../Componant/ProgessBar';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import * as SQLite from "expo-sqlite";


const Status = ({ navigation, route }: any) => {
  let data = route.params.a




  // const db = SQLite.openDatabase("db.db");

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
  // }, []);


  const [progressHeight, setprogressHeight] = useState(0)
  const [intervalState, setIntervalState] = useState<any>()


  useEffect(() => {

    const loanDate = new Date(data.Date)
    const x = setInterval(() => {
      // console.log(loanDate);
      const pr = Number((((new Date().getTime() - loanDate.getTime()) * 100) / (10 * 60 * 1000)).toFixed(2))



      if (pr != progressHeight) {

        setprogressHeight(pr > 100 ? 100 : pr);
      }
      if (pr >= 100) {
        clearInterval(intervalState);
      }

    }, 1000);
    if (intervalState) {
      clearInterval(intervalState);
    }
    setIntervalState(x);
  }, [])


  // setInterval

  return (

    <View style={style.container}>
      <View style={{ flexDirection: 'row', alignSelf: 'center', padding: 20, justifyContent: 'center' }}>

        <ProgessBar
          height={progressHeight} />
        <View style={{ flex: 1, height: '100%', width: '100%' }}>
          <View style={[style.statusTextContainer, { top: `${progressHeight}%` }]} >
            <View style={{ height: 50, width: "100%" }}>
              <Text style={[style.statusText, { color: color.light, }]}>{progressHeight == 100 ? 'Completed' : progressHeight >= 50 ? 'Processing...' : 'Cheaking...'}</Text>
            </View>
          </View>
        </View>

      </View>

    </View >
  )
}

export default Status

const styles = StyleSheet.create({})