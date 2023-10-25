import Modal from '../../../molecules/modal/Modal';
import CalculatorIcon from '../../../atoms/Icons/SVGs/CalculatorIcon';
import CalculatorDisplay from '../calculatorDisplay/CalculatorDisplay';
import CalculatorKeypad from '../calculatorKeypad/CalculatorKeypad';

export default function CalculatorModal(props) {
  return (
    <>
      <Modal
        id={"calculatorModal"}
        title={<CalculatorIcon/>}
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