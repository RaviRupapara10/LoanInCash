import { StyleSheet, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const color = {
  primary: '#00ADB5',
  secondary: '#393E46',
  dark: '#222831',
  light: '#EEEEEE',
}

export const style = StyleSheet.create({
  container: {
    padding: 20,
    alignContent: 'center',
    backgroundColor: color.light,
    flex: 1,
  },
  CashContainer: {
    padding: 20,
    backgroundColor: color.primary,
    alignContent: 'center',
    borderRadius: 20,
    width: '100%',
    elevation: 5,
  },
  CashText: {
    fontSize: 60,
    fontWeight: '600',
    flex: 1,
    color: color.dark
  },
  CashInnerContainer: {
    flexDirection: 'row',
    // width: '100%',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: color.secondary,
    margin: 20,
  },
  btnText: {
    fontSize: 20,
    padding: 20,
  },
  InputFieldContainer:
    { paddingHorizontal: 10, flexDirection: 'row', backgroundColor: color.primary, width: '100%', height: 40, alignItems: 'center', borderRadius: 20 },
  textInput: {
    backgroundColor: color.light, flex: 1, borderTopRightRadius: 20,
    borderBottomRightRadius: 20, paddingHorizontal: 10
  },
})