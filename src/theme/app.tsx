import { StyleSheet } from 'react-native';

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
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 70,
    width: 70,
    marginHorizontal: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    // color: 'rgba(0, 0, 0, 1)',
  },
});
