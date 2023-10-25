import React, { useState } from 'react';
import Decimal from 'decimal.js';
import toFormat from 'toformat';
import arrayToDecimal from './utils/arrayToDecimal';
import CalculatorIcon from './components/atoms/Icons/SVGs/CalculatorIcon'
import Button from './components/atoms/button/Button'
import CalculatorModal from './components/organisms/calculator/calculatorModal/CalculatorModal';

export default function CalculatorApp() {
  
  // Configure Decimal.js
  toFormat(Decimal);
  Decimal.set({ precision: 16, toExpNeg: -16, toExpPos: 16 });
  
  const calcDefault = {
    num1: [], // should always be an array of 1 character long strings
    num2: [], // same as num1
    operation: "", // should always be a string
    result: null, // should either be null or Decimal instance
  }
  const [calc, setCalc] = useState(calcDefault); 

  // Reset calculator
  const handleAC = () => {
    if (calc.num1 !== null) {
      setCalc(calcDefault);
    }
  }

  // Clear last input
  const handleCE = () => {
    if (calc.result !== null) {
      return setCalc(calcDefault);
    }
    if (calc.num2.length > 0) {
      return setCalc({...calc, num2: []});
    }
    if (calc.operation !== "") {
      return setCalc({...calc, operation: ""});
    }
    if (calc.num1.length > 0) {
      return setCalc({...calc, num1: []});
    }
  }

  // Update calculator inputs after percentage button press - behaviour should match android and apple calculator apps.
  const handlePercent = () => {
    const num1 = arrayToDecimal(calc.num1);
    const num2 = arrayToDecimal(calc.num2);

    switch (calc.operation) {
      case "÷":
      case "×":
        if (calc.result !== null) {
          return setCalc({...calcDefault, num1: calc.result.dividedBy(100).toString().split("")})
        }
        if (calc.num2.length > 0) {
          return setCalc({...calc, num2: num2.dividedBy(100).toString().split("")});
        }
        return setCalc({...calc, num2: num1.dividedBy(100).toString().split("")});

      case "−":
      case "+":
        if (calc.result !== null) {
          return setCalc({...calcDefault, num1: calc.result.dividedBy(100).toString().split()});
        }
        if (calc.num2.length > 0) {
          return setCalc({...calc, num2: num1.times(num2.dividedBy(100)).toString().split("")});
        }
        return setCalc({...calc, num2: num1.times(num1.dividedBy(100)).toString().split("")});
      case "":
        if (calc.num1.length > 0) {
          setCalc({...calc, num1: num1.dividedBy(100).toString().split("")});
        } else {
          handleAC(calcDefault);
        }
        break
      default:
        break;
    }
  }

  // Set mathematical operation
  const handleOperation = (e) => {
    if (calc.result !== null) {
      setCalc({...calcDefault, num1: calc.result.toString().split(""), operation: e.target.value});
    } else {
      setCalc({...calc, num1: arrayToDecimal(calc.num1), operation: e.target.value});
    }
  }

  // Set number's sign
  const handleSign = () => {
    if (calc.result !== null) {
      return setCalc({...calcDefault, num1: [calc.result.times(-1)]})
    }
    if (calc.operation === "") {
      setCalc({...calc, num1: arrayToDecimal(calc.num1).times(-1).toString().split("")});
    }
    if (calc.operation !== "") {
      if (calc.num2.length === 0) {
        setCalc({...calc, num2: arrayToDecimal(calc.num1).times(-1).toString().split("")});
      } else {
        setCalc({...calc, num2: arrayToDecimal(calc.num2).times(-1).toString().split("")});
      }
    }
  }

  // Append a decimal point
  const handleDecimal = () => {
    // Check whether the number already has a decimal
    const decimalCheck = (num) => {
      if (num.includes(".")) {
        return true;
      } else {
        return false;
      }
    }
    if (calc.result !== null || calc.num1.length === 0) {
      return setCalc({...calcDefault, num1: ["0", "."]});
    }
    if (calc.operation === "" && !decimalCheck(calc.num1)) {
      setCalc({...calc, num1: [...calc.num1, "."]});
    }
    if (calc.operation !== "" && !decimalCheck(calc.num2)) {
      setCalc({...calc, num2: [...calc.num2, "."]});
    }
  }

  // Input numbers
  const handleNumber = (e) => {
    if (calc.result !== null) {
      return setCalc({...calcDefault, num1: [e.target.value]});
    }
    if (calc.operation === "") {
        if (calc.num1.length === 0) {
          // Start populating first number
          setCalc({...calc, num1: [e.target.value]})
        } else {
          // Continue populating first number until operation is selected
          setCalc({...calc, num1: [...calc.num1, e.target.value]})
        }
    } else {
        if (calc.num2.length === 0) {
          // Start populating second number
          setCalc({...calc, num2: [e.target.value]})
        } else {
          // Continue populating second number until equals is selected
          setCalc({...calc, num2: [...calc.num2, e.target.value]})
        }
    }
  }
  
  // Run calculations
  const handleEquals = () => {
    const num1 = calc.num1;
    const num2 = arrayToDecimal(calc.num2);

    const calculate = (num1, operation, num2) => {
      switch (operation) {
        case "÷":
          return num1.dividedBy(num2);
        case "×":
          return num1.times(num2);
        case "−":
          return num1.minus(num2);
        case "+":
          return num1.plus(num2);
        default:
          break;
      }
    }
    if (!calc.operation) {
      return
    }
    if (calc.num2.length === 0 ) {
      return setCalc({...calc, num2: [calc.num1], result: calculate(num1, calc.operation, num1)});
    }
    if (calc.num2.length > 0 && calc.result === null) {
      return setCalc({...calc, result: calculate(num1, calc.operation, num2)});
    }
    return setCalc({...calc, num1: calc.result.toString().split(""), result: calculate(calc.result, calc.operation, num2)});
  }

  return (
    <>
      <Button color={"light"} className={"mb-3"} dataBsToggle={"modal"} dataBsTarget={"#calculatorModal"}>
        <CalculatorIcon/>
        Calculator
      </Button>
      <CalculatorModal
        calc={calc}
        handleAC={handleAC}
        handleCE={handleCE}
        handlePercent={handlePercent}
        handleOperation={handleOperation}
        handleNumber={handleNumber}
        handleSign={handleSign}
        handleDecimal={handleDecimal}
        handleEquals={handleEquals}
      />
    </>
  )
}