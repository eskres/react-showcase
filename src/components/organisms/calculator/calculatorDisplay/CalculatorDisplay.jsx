import arrayToDecimal from '../../../../utils/arrayToDecimal';
import CalcDisplayPlaceholder from '../../../atoms/calcDisplayPlaceholder/CalcDisplayPlaceholder';
import Heading from '../../../atoms/headings/Heading';

export default function CalculatorDisplay({ calc }) {
	// Format number for display
  const formatNum = (num) => {
    let dec;
    if (Array.isArray(num)){
      dec = arrayToDecimal(num);
			if (dec.toString() !== num.join("") && !calc.operation && calc.num2.length === 0) {
				return num.join("")
			}
			if (dec.toString() !== num.join("") && !calc.result && calc.num2.length > 0) {
				return num.join("")
			}
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
			{calc.num2.length === 0
				? 
					<>
						<Heading heading={6} className={"text-end"}>
							{`${calc.num1.length !== 0 ? formatNum(calc.num1) : 0} ${calc.operation}`}
						</Heading>
						<CalcDisplayPlaceholder/>
					</>
				: 
					<>
						<Heading heading={6} className={"text-end"}>
							{`
								${calc.num1 !== null ? formatNum(calc.num1) : ""} 
								${calc.operation} 
								${calc.result !== null ? formatNum(calc.num2) + " = " : ""} 
							`}
						</Heading>
						<Heading heading={6} className={"text-end"}>
								{calc.result === null && calc.num2 !== null ? formatNum(calc.num2) : ""}
								{calc.result !== null ? formatNum(calc.result) : ""}
						</Heading>
					</>
			}
		</>
  )
}