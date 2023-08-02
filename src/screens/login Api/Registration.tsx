import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const Registration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const registration = () => {
    console.log(' registration');
    const data = new FormData();
    data.append('first_name', firstname)
    data.append('last_name', lastname)
    data.append('email', email)
    data.append('password', password)
    let headers = {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }

  }


    axios.post("https://app.marthoma.com/api/user/signup/", data,headers)
    .then((response) => {
      console.log(response);
    });}

  return (
    <>
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          value={firstname}
          placeholder={"Enter Firstname"}
          onChangeText={(text) => setFirstname(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={lastname}
          placeholder={"Enter Lastname"}
          onChangeText={(text) => setLastname(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={email}
          placeholder={"Enter Email"}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <View style={{ margin: 20 }}>
          <Button  title={"Sign Up"} onPress={registration} />
        </View>

      </View>

    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10
  },
  container: {
    padding: 30
  }
});
export default Registration
