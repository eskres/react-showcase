import Button from '../../../atoms/button/Button';

export default function CalculatorKeypad(
  {
    handleAC,
    handleCE,
    handlePercent,
    handleOperation,
    handleNumber,
    handleSign,
    handleEquals
  }) {

  const keys = [
    [
      { value: "AC", color: "danger", onClick: handleAC, colClassName: "me-1", buttonClassName: "rounded-0"},
      { value: "CE", color: "danger", onClick: handleCE, colClassName: "me-1", buttonClassName: "rounded-0" },
      { value: "%", color: "warning", onClick: handlePercent, colClassName: "me-1", buttonClassName: "rounded-0" },
      { value: "÷", color: "warning", onClick: (e) => {handleOperation(e)}, colClassName: undefined, buttonClassName: "rounded-0" },
    ],
    [
      { value: "7", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "8", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "9", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "×", color: "warning", onClick: (e) => {handleOperation(e)}, colClassName: undefined, buttonClassName: "rounded-0" },
    ],
    [
      { value: "4", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "5", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "6", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "−", color: "warning", onClick: (e) => {handleOperation(e)}, colClassName: undefined, buttonClassName: "rounded-0" },
    ],
    [
      { value: "1", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "2", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "3", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "+", color: "warning", onClick: (e) => {handleOperation(e)}, colClassName: undefined, buttonClassName: "rounded-0" },
    ],
    [
      { value: "+/−", color: "secondary", onClick: handleSign, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "0", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: ".", color: "secondary", onClick: (e) => {handleNumber(e)}, colClassName: "me-1", buttonClassName: "rounded-0 text-light" },
      { value: "=", color: "warning", onClick: handleEquals, colClassName: undefined, buttonClassName: "rounded-0" },
    ],
  ]


  return (
    keys.map((value, index) => 
      <div key={index} className="row g-1 mb-1">
        {value.map((value, index) => 
          <div key={index} className={`col d-grid ${value.colClassName}`}>
            <Button
              key={value.value}
              color={value.color}
              className={value.buttonClassName}
              onClick={value.onClick}
              value={value.value}
            >
              {value.value}
            </Button>
          </div>
        )}
      </div>
    )
  )
}