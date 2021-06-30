import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from '../theme/app';

const { width } = Dimensions.get('window');

interface Props {
  text: string;
  colorBack?: string;
  big?: boolean;
  action: (numberText: string) => void
}

export const ButtonCalc = ({ text = '', colorBack = '#2d2d2d', big = false, action }: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{
        ...styles.button,
        backgroundColor: colorBack,
        width: (big) ?
          width * 0.44 :
          width * 0.2,
      }}>
        <Text style={
          {
            ...styles.buttonText,
            color: (colorBack === '#9b9b9b') ?
              'black' :
              '#fff',
          }
        }>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
