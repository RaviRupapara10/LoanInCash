import AsyncStorage from '@react-native-async-storage/async-storage';







export const storeData = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('_userDetails', jsonValue)
  } catch (e) {
    // saving error
  }
}



export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('_userDetails')
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // error reading value
  }
}
// console.log(getData);
