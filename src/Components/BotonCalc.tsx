import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/AppTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({
  texto,
  accion,
  color = '#2D2D2D',
  ancho = false,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
