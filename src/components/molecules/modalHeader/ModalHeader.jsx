import Button from "../../atoms/button/Button";
import Title from "../../atoms/title/Title";

export default function ModalHeader({ title }) {
  return (
    <div className="modal-header">
        <Title className={"fs-5"}>{title}</Title>
        <Button className={"btn-close"} dataBsDismiss={"modal"}/>
    </div>
  )
}