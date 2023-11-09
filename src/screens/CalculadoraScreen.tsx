import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {BotonCalc} from '../Components/BotonCalc';

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    if (numero.includes('.') && numeroTexto === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positioNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };
  console.log(numero.length);
  const btnDelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.replace("-","");
    }
    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, numeroTemp.length - 1));
    } else {
      setNumero('0');
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9b9b9b" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9b9b9b" accion={positioNegativo} />
        <BotonCalc texto="del" color="#9b9b9b" accion={btnDelete} />
        <BotonCalc texto="/" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#ff9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#ff9427" accion={limpiar} />
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
