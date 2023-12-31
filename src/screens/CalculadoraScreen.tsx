import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {BotonCalc} from '../Components/BotonCalc';

enum Operadores {
  sumar,
  restar,
  dividir,
  multiplicar,
}

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const ultmOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
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
      numeroTemp = numero.replace('-', '');
    }
    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, numeroTemp.length - 1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, numero.length - 1));
      setNumero('0');
    } else {
      setNumeroAnterior(numero);
      setNumero('0');
    }
  };

  const btnDividir = () => {
    ultmOperacion.current = Operadores.dividir;
    cambiarNumeroPorAnterior();
  };
  const btnMultiplicar = () => {
    ultmOperacion.current = Operadores.multiplicar;
    cambiarNumeroPorAnterior();
  };
  const btnRestar = () => {
    ultmOperacion.current = Operadores.restar;
    cambiarNumeroPorAnterior();
  };
  const btnSumar = () => {
    ultmOperacion.current = Operadores.sumar;
    cambiarNumeroPorAnterior();
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultmOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        setNumeroAnterior('0');
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        setNumeroAnterior('0');
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        setNumeroAnterior('0');
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        setNumeroAnterior('0');
        break;
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9b9b9b" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9b9b9b" accion={positioNegativo} />
        <BotonCalc texto="del" color="#9b9b9b" accion={btnDelete} />
        <BotonCalc texto="/" color="#ff9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" color="#ff9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="-" color="#ff9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="#ff9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="#ff9427" accion={calcular} />
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
