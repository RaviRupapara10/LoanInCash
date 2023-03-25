import { StyleSheet, Text, TextInput, Image, View } from 'react-native'
import React, { useState } from 'react'
import { color, style } from '../Constant/Styles'
import UserInput from '../Componant/UserInput'
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-paper'




const LoginForm = (props: any) => {
  const [firstName, setfirstName] = useState('Ravi')
  const [lastName, setlastName] = useState('Rupapara')
  const [email, setEmail] = useState('Rupapara@gmail.com')

  const [image, setImage] = useState(null);

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri as any);
    }
  };

  console.log(lastName);

  return (
    <View style={style.container}>
      <View style={{ padding: 10 }}>
        <UserInput state={firstName} setState={setfirstName} name={'First Name'} />
      </View>
      <View style={{ padding: 10 }}>

        <UserInput state={lastName} setState={setlastName} name={'Last Name'} />
      </View>
      <View style={{ padding: 10 }}>

        <UserInput state={email} setState={setEmail} name={'Email'} />
      </View>
      <View style={{ paddingHorizontal: 10, flexDirection: 'row', backgroundColor: color.primary, width: '100%', alignItems: 'center', borderRadius: 20 }}>
        <Text style={{ paddingVertical: 20 }}>Identity :  </Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          {image == null ? <Button labelStyle={{ color: color.light }}
            style={style.btn} onPress={pickImage} > Pick an image from camera roll </Button> :
            <Button style={style.btn} labelStyle={{ color: color.light }} onPress={pickImage} > Update an image from camera roll</Button>
          }
          {image &&
            <View style={{ padding: 10 }} >
              <Image source={{ uri: image }} style={{ width: 200, aspectRatio: 4 / 3 }} />
            </View>}
        </View>
      </View>
      <View>
        <Button
          onPress={() => props.navigation.navigate('LoanAmmount')}
          style={{ backgroundColor: color.secondary, margin: 20, }} labelStyle={{ color: color.light, paddingHorizontal: 20, fontSize: 20, padding: 10 }}>Next</Button>
      </View>
    </View>
  )
}

export default LoginForm



const styles = StyleSheet.create({})