import { CalculatorTitleProps } from "calculatorTitleInterfaces"
import Icon from "../../atoms/Icons/Icon"

export default function CalculatorTitle({ children }: CalculatorTitleProps): React.JSX.Element {
  return (
    <>
      <Icon icon={"calculator"} className={"align-top mx-1"}/>
      {children}
    </>
  )
}