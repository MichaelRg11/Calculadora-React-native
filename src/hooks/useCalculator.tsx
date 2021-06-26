import { useRef, useState } from 'react';

enum Operators {
  sumar, restar, multiplicar, dividir
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [preNumber, setPreNumber] = useState('0');
  const operations = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPreNumber('0');
  };

  const deletedNumber = () => {
    ((number.includes('-') && number.length === 2) || number.length === 1)
      ? setNumber('0')
      : setNumber(number.slice(0, -1));
  };

  const buildNumber = (numberText: string) => {
    // no  aceptar mas de un punto
    if (number.includes('.') && numberText === '.') { return; }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
        // evaluar sies  otro cero, y hay punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // evaluar si es diferente de 0 y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // evidatar 0.0000
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      console.log(number);
      if (number === 'Infinity') {
        setNumber(numberText);
      } else {
        setNumber(number + numberText);
      }
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const previousNumber = () => {
    setPreNumber(number.endsWith('.') ? number.slice(0, -1) : number);
    setNumber('0');
  };

  const btnDividir = () => {
    previousNumber();
    operations.current = Operators.dividir;
  };

  const btnSumar = () => {
    previousNumber();
    operations.current = Operators.sumar;
  };

  const btnRestar = () => {
    previousNumber();
    operations.current = Operators.restar;
  };

  const btnMultiplicar = () => {
    previousNumber();
    operations.current = Operators.multiplicar;
  };

  const calcular = () => {
    if (preNumber === '0') { return; }
    const num1 = Number(number);
    const num2 = Number(preNumber);
    switch (operations.current) {
      case Operators.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.restar:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.dividir:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPreNumber('0');
  };

  return {
    number,
    preNumber,
    clear,
    deletedNumber,
    buildNumber,
    positiveNegative,
    btnDividir,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    calcular,
  };
};
