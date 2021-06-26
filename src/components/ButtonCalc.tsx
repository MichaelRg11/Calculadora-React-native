import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/app';

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
          160 :
          70,
      }}>
        <Text style={
          {
            ...styles.buttonText,
            color: (colorBack === '#9b9b9b') ? 'black' : '#fff',
          }
        }>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
