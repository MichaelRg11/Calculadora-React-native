import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    // paddingHorizontal: 20,
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  resultSmall: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  result: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 5,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    // paddingHorizontal: 10,
  },
  button: {
    height: width * 0.2,
    // marginHorizontal: width * 0.02,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    padding: 0,
    fontSize: 30,
    fontWeight: '300',
    // color: 'rgba(0, 0, 0, 1)',
  },
});
