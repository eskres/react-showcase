import { ModalHeaderProps } from 'modalHeaderInterfaces';
import Button from '../../atoms/button/Button';
import Heading from '../../atoms/headings/Heading';

export default function ModalHeader({ title }: ModalHeaderProps): React.JSX.Element {
  return (
    <div className="modal-header">
        <Heading heading={1} className={"fs-5"}>{title}</Heading>
        <Button className={"btn-close"} dataBsDismiss={"modal"}/>
    </div>
  )
}