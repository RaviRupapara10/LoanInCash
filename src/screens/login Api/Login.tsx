import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Constant } from '../../Constant/Utils';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log('value',username,password);



  useEffect(() => {


  }, [])





  const login = () => {
    console.log('login1');
    // const data = new FormData();
    // data.append('email', email)
    // data.append('password', password);

    // fetch('https://demo.syngymaxim.com/maxCommerceAPI/api/Auth/Login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     "email": "dadapapa010@gmail.com",
    //     "password": "Jd@123456"
    //   }),
    // }).then(x => x.json()).then(x => console.log(x)).catch(x => console.log(JSON.stringify(x)));



    // const data = new FormData();
    // data.append('email', email)
    // data.append('password', password);

    // // const agent = new HttpsProxyAgent(`https://app.marthoma.com`);
    // axios.defaults.proxy = {
    //   host: "https://app.marthoma.com",
    //   port: 443
    // };
    // axios.defaults.headers['Content-Type'] = 'multipart/form-data';
    // axios.post("/api/user/login/", {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   data: data
    //   // httpsAgent: agent
    // }).then((response: any) => {
    //   console.log(response);
    // }).catch((e: any) => console.log(JSON.stringify(e)));

    // const data = new FormData();
    // data.append('email', email)
    // data.append('password', password);

    // fetch('https://app.marthoma.com/api/user/login/', {
    //   method: 'POST',
    //   body: data,
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     origin: 'https://app.marthoma.com'
    //   }
    // }).then(x => x.json()).then(x => alert(JSON.stringify(x))).catch(x => alert(JSON.stringify(x)));

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'https://app.marthoma.com/api/user/login/',

    //   data: data
    // };

    // axios.request(config)
    //   .then((res) => {
    //     console.log(res)
    //   }).catch(e => console.log(JSON.stringify(e)))
    axios.post(`${Constant.Url}/v1/auth/login`, {
      email: email,
      password: password
    }).then((response) => {
      console.log(response.data);
    }).catch((e) => console.log(JSON.stringify(e.body)));
  }



  return (

    <>
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          value={email}
          placeholder={"Username"}
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
          <Button color={'green'} title={"LOGIN"} onPress={login} />
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

export default Login

