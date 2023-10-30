import Icon from "../../atoms/Icons/Icon"

export default function CalculatorTitle({ children }) {
  return (
    <>
      <Icon icon={"calculator"} className={"align-top mx-1"}/>
      {children}
    </>
  )
}