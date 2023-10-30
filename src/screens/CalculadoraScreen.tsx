import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {BotonCalc} from '../Components/BotonCalc';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequenio}>1,500.000</Text>

      <Text style={styles.resultado}>1,500.000</Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9b9b9b" />
        <BotonCalc texto="+/-" color="#9b9b9b" />
        <BotonCalc texto="%" color="#9b9b9b" />
        <BotonCalc texto="/" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" />
        <BotonCalc texto="8" />
        <BotonCalc texto="9" />
        <BotonCalc texto="X" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" />
        <BotonCalc texto="5" />
        <BotonCalc texto="6" />
        <BotonCalc texto="-" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" />
        <BotonCalc texto="2" />
        <BotonCalc texto="3" />
        <BotonCalc texto="+" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho/>
        <BotonCalc texto="." />
        <BotonCalc texto="=" color="#ff9427" />
      </View>
    </View>
  );
};

{
  /* 2d2d2d gris oscuro */
}
{
  /* ff9427 naranja */
}
