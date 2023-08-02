import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color, style } from '../Constant/Styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ProgessBar = (props: any) => {



  const [ProgressbarPersantage, setProgressbarPersantage] = useState(props.height)


  const progress = `${ProgressbarPersantage}%`

  useEffect(() => {
    setProgressbarPersantage(props.height)
  }, [props])



  return (

    <View style={{ height: 600, }}>
      <View style={{}}>

        <View style={{ height: '100%', width: 10, borderRadius: 20, backgroundColor: color.secondary, margin: 10, alignItems: 'center', position: 'relative' }}>
          <View style={{ position: 'absolute', height: progress, width: 20, borderRadius: 20, backgroundColor: color.primary }}>



          </View>
          {/* <View style={{ flex: 1, }}> */}
          <View style={{ top: progress, position: 'absolute', height: 40, width: 40, borderRadius: 20, backgroundColor: color.primary, alignSelf: 'center', transform: [{ translateY: -20 }] }}></View>
          {/* </View> */}




        </View>

      </View>

    </View>
  )
}

export default ProgessBar

const styles = StyleSheet.create({})