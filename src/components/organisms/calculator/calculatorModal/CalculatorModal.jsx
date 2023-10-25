import Modal from '../../../molecules/modal/Modal';
import CalculatorDisplay from '../calculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../calculatorKeypad/CalculatorKeypad';
import CalculatorTitle from '../../../molecules/calculatorTitle/CalculatorTitle';

export default function CalculatorModal(props) {
  return (
    <>
      <Modal
        id={"calculatorModal"}
        title={<CalculatorTitle>Calculator</CalculatorTitle>}
        body={
          <>
            <div className="row mb-2 py-2">
              <div className="col-12">
                <CalculatorDisplay calc={props.calc} />
              </div>
            </div>
            <CalculatorKeypad {...props}/>
          </>
        }
      />
    </>
  )
}