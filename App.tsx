import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Calculator } from './src/screens/Calculator';
import { styles } from './src/theme/app';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
};
