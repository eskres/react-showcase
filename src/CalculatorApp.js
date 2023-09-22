import React, { useState, useEffect, useRef } from 'react';
import toggleModal from './toggleModal';
import Decimal from 'decimal.js';
import toFormat from 'toformat';


function CalculatorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calculator m-1" viewBox="0 0 16 16">
      <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
      <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
    </svg>
  )
}

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
  
  const [modal, setModal] = useState(false);
  let modalRef = useRef();

  // For modal visibility
  useEffect(() => {
    toggleModal(modal, modalRef);
  })

  // Convert calc state num arrays to Decimal instances for calculations
  const arrayToDecimal = (num) => {
    if (num.length !== 0) {
      return new Decimal(num.join(""));
    }
    return null;
  }

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
      setCalc({...calc, operation: e.target.value});
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
    const num1 = arrayToDecimal(calc.num1);
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

  // Format number for display
  const formatNum = (num) => {
    let dec;
    if (Array.isArray(num)){
      dec = arrayToDecimal(num);
    } else {
      dec = num;
    }
    if (dec.toString().includes("e")) {
      return dec.toString();
    }
    return dec.toFormat();
  }

  return (
    <>
      <button type="button" className="btn btn-outline-light mb-3" 
      onClick={() => {setModal(prevModal => !prevModal);}}>
        <CalculatorIcon/>
        Calculator
      </button>
      
      <div className="modal" id="settings" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} ref={modalRef} aria-labelledby="modalTitle" aria-hidden="true" data-bs-theme="dark">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className='modal-title text-light'><CalculatorIcon/></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
              onClick={() => {setModal(prevModal => !prevModal);}}></button>
            </div>
            <div className="modal-body container text-center text-light">
            <div className="row mb-2 py-2">
              <div className='col-12'>
                {calc.num2.length === 0
                ? 
                <>
                  <h6 className="text-end text-light">{`${calc.num1.length !== 0 ? formatNum(calc.num1) : 0} ${calc.operation}`}</h6>
                  <h6><span className="placeholder col-12"></span></h6>
                </>
                : 
                  <>
                    <h6 className="text-end text-light">{`
                      ${calc.num1 !== null ? formatNum(calc.num1) : ""} 
                      ${calc.operation} 
                      ${calc.result !== null ? formatNum(calc.num2) + " = " : ""} 
                    `}</h6>
                    
                    <h6 className="text-end text-light">
                      {calc.result === null && calc.num2 !== null ? formatNum(calc.num2) : ""}
                      {calc.result !== null ? formatNum(calc.result) : ""}
                    </h6>
                  </>
                }
              </div>
            </div>
            <div className="row g-1 mb-1">
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-danger rounded-0" onClick={handleAC}>AC</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-danger rounded-0" onClick={handleCE}>CE</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-warning rounded-0" onClick={handlePercent}>%</button>
              </div>
              <div className="col d-grid">
                <button type="button" className="btn btn-outline-warning rounded-0" value={"÷"} onClick={(e) => {handleOperation(e)}}>÷</button>
              </div>
            </div>
            <div className="row g-1 mb-1">
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={7} onClick={(e) => {handleNumber(e)}}>7</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={8} onClick={(e) => {handleNumber(e)}}>8</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={9} onClick={(e) => {handleNumber(e)}}>9</button>
              </div>
              <div className="col d-grid">
                <button type="button" className="btn btn-outline-warning rounded-0" value={"×"} onClick={(e) => {handleOperation(e)}}>×</button>
              </div>
            </div>
            <div className="row g-1 mb-1">
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={4} onClick={(e) => {handleNumber(e)}}>4</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={5} onClick={(e) => {handleNumber(e)}}>5</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={6} onClick={(e) => {handleNumber(e)}}>6</button>
              </div>
              <div className="col d-grid">
                <button type="button" className="btn btn-outline-warning rounded-0" value={"−"} onClick={(e) => {handleOperation(e)}}>−</button>
              </div>
            </div>
            <div className="row g-1 mb-1">
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={1} onClick={(e) => {handleNumber(e)}}>1</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={2} onClick={(e) => {handleNumber(e)}}>2</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={3} onClick={(e) => {handleNumber(e)}}>3</button>
              </div>
              <div className="col d-grid">
                <button type="button" className="btn btn-outline-warning rounded-0" value={"+"} onClick={(e) => {handleOperation(e)}}>+</button>
              </div>
            </div>
            <div className="row g-1">
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" onClick={handleSign}>+/−</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={0} onClick={(e) => {handleNumber(e)}}>0</button>
              </div>
              <div className="col me-1 d-grid">
                <button type="button" className="btn btn-outline-secondary text-light rounded-0" value={"."} onClick={handleDecimal}>.</button>
              </div>
              <div className="col d-grid">
                <button type="button" className="btn btn-warning rounded-0" onClick={handleEquals}>=</button>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
