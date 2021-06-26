import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/app';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from './../hooks/useCalculator';


export const Calculator = () => {

  const { number, preNumber, clear, deletedNumber, buildNumber, positiveNegative, btnDividir, btnSumar, btnRestar, btnMultiplicar, calcular } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {
        preNumber !== '0' && (
          <Text style={styles.resultSmall}>{preNumber}</Text>
        )
      }
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{number}</Text>

      <View style={styles.fila}>
        <ButtonCalc text="C" colorBack="#9b9b9b" action={clear} />
        <ButtonCalc text="+/-" colorBack="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="Del" colorBack="#9b9b9b" action={deletedNumber} />
        <ButtonCalc text="/" colorBack="#ff9427" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" colorBack="#ff9427" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" colorBack="#ff9427" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" colorBack="#ff9427" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="0" big action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" colorBack="#ff9427" action={calcular} />
      </View>
    </View>
  );
};
